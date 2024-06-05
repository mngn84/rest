const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('usersbase.db');

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL 
)`);

module.exports = {
    async getUsers() {
        try {
            const users = await new Promise((resolve, reject) => {
                db.all(`SELECT * FROM users`, [], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                })
            })
            return users;
        } catch (err) {
            return null;
        }
    },
    async createUser(user) {
        const lastID = await new Promise((resolve, reject) => {
            db.run('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            })
        })
        return { id: lastID, ...user };
    },
    async updateUser(id, updateData) {
        const updated = await new Promise((resolve, reject) => {
            db.run(`UPDATE users SET  name = ?, age = ? WHERE id = ?`, [updateData.name, updateData.age, id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            })
        })

        if (updated === 0) {
            return null;
        }
        return this.getUserById(id);
    },
    async deleteUser(id) {
        const deleted = await new Promise((resolve, reject) => {
            db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
                
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            })
        })
        return deleted > 0;
    },
    async getUserById(id) {
        const user = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            })
        })
        return user;
    }
}