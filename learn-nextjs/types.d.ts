export interface Video {
    id: string;
    content: string;
    video: string;
    like: number;
    comment: number;
    share: number;
    postedBy: {
        avatar: string;
        title: string;
        desc: string;
    };
    comments: {
        comment: string;
        _id: string;
        likes: number;
        postedBy: {
            avatar: string;
            desc: string;
        };
    }[];
}
export interface Comment {
    comment: string;
    _id: string;
    likes: number;
    postedBy: {
        avatar: string;
        desc: string;
    };
}
export interface Account {
    avatar: string;
    title: string;
    desc: string;
}
export interface Notification {
    id: string;
    category: string;
    content: string;
    cropImage: string;
    postedBy: Account;
}
