import UserEntity from "../../entities/UserEntity";
import { db } from "../../services/firestore";

export default class Users {
    collection = db.collection('users');    
    async  save(user: UserEntity){
        this.collection.doc().set(user);
    }
}