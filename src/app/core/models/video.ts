import { BaseModel } from "./base-model";
import { History } from "./history";
import { User } from "./user";

export class Video extends BaseModel {
    id: string;
    userId: string;
    title: string;
    image: string;
    video: string;
    duration: string;
    commentsCount: number;
    historiesCount: number;
    user: User;
    history: History;
}