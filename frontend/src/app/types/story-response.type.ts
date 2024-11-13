import { Image } from "./image.type";
import { User } from "./user.type";

export type StoryResponse = {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    benefitedName: string;
    benefitedImage?: Image;
    contact: string;
    helpNeeded: string;
    city?: string;
    user: User;
    createdAt: Date;
    images: Image[];
  };