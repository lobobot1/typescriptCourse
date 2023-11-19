import { BaseModel } from "../base.model";

export enum ROLES{
    ADMIN = 'ADMIN',
    USER = 'USER',
    SELLER = 'SELLER'
}

export interface User extends BaseModel {
    username: string;
    role: ROLES;
}