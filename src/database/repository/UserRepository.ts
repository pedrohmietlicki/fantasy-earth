import UserEntity from "../../entities/UserEntity";
import Users from "../model/users";

export default class UserRepository {
    model = new Users();
    async CreateUser(user:UserEntity) {
        this.model.save(user);
    }
}