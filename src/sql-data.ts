import { AppDataSource } from "./app-data-source";
import { User } from "./User";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async () => {
    try {
        const users = await userRepository.find();
        return users;
    } catch (err) {
        return null;
    }
}
const createUser = async (user: { name: string, age: number }) => {
    const newUser = userRepository.create(user);
    await userRepository.save(newUser);
    return newUser;
}
const updateUser = async (id: number, updateData: { name: string, age: number }) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) {
        return null;
    }
    userRepository.merge(user, updateData);
    await userRepository.save(user);
    return user;
}
const deleteUser = async (id: number) => {
    const result = await userRepository.delete({id});
    return (result.affected ?? 0) > 0;
}
const getUserById = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    return user;
}
export { getUsers, createUser, updateUser, deleteUser, getUserById };