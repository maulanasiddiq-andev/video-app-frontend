import { BaseModel } from "./base-model";
import { User } from "./user";
import { Video } from "./video";

export class History extends BaseModel {
    id: string;
    userId: string;
    videoId: string;
    duration: string;
    position: string;
    user: User;
    video: Video;
}