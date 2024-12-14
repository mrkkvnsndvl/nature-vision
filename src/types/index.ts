export interface IPost {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  category:
    | "Adventure"
    | "Landscapes"
    | "Nature"
    | "Plants"
    | "Wildlife"
    | "Underwater";
  privacy: "public" | "followers" | "private";
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  id: string;
  profileImage?: string;
  bannerImage?: string;
  fullName: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITag {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostTag {
  id: string;
  postId: IPost["id"];
  tagId: ITag["id"];
}

export interface IFollow {
  id: string;
  followerId: IUser["id"];
  followingId: IUser["id"];
  createdAt: Date;
}

export interface ILike {
  id: string;
  userId: IUser["id"];
  postId: IPost["id"];
  createdAt: Date;
}

export interface INotification {
  id: string;
  userId: IUser["id"];
  actorId: IUser["id"];
  type: "like" | "follow";
  postId: IPost["id"];
  isRead: boolean;
  createdAt: Date;
}

export interface INotificationsSetting {
  userId: IUser["id"];
  likes: boolean;
  follows: boolean;
  dndStart?: Date;
  dndEnd?: Date;
  updatedAt: Date;
}
