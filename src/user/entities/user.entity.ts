import { Role } from "@prisma/client";
import { ITasker, IUser } from "src/shared/interfaces";

export class UserEntity implements IUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    city: string;
    country: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
    role: Role;
    tasker?: ITasker;

    private constructor({
        id,
        email,
        firstName,
        lastName,
        password,
        city,
        country,
        state,
        createdAt,
        updatedAt,
        deleted,
        role,
        tasker
    }: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        city: string;
        country: string;
        state: string;
        createdAt: Date;
        updatedAt: Date;
        deleted: boolean;
        role: Role;
        tasker?: ITasker;
    }) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.city = city;
        this.country = country;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deleted = deleted;
        this.role = role;
        this.tasker = tasker;
    }
}
