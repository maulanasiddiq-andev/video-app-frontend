import { BaseModel } from "./base-model";

export class User extends BaseModel {
    id: string;
    name: string;
    username: string;
    email: string;
    profileImage: string;
    videosCount: number;
}