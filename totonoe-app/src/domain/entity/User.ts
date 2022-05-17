import { IUserEntity } from "./IUser";

export class User implements IUserEntity {
    get id(): number {
        return this.id;
    }
    get email(): string {
        return this.email;
    }
    get name(): string {
        return this.name;
    }
}