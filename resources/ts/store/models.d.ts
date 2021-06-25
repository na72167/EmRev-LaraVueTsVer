interface TimeStamp {
    createdAt: string;
    updatedAt: string;
}

export interface PushNotification extends TimeStamp {
    id: string;
    title: string;
    text: string;
    pushNotificationCategory?: PushNotificationCategory;
    richTextContent?: null | {
        url: string;
    };
    imageContent?: null | {
        url: string;
    };
    videoContent?: null | {
        url: string;
    };
}

export interface PushNotificationCategory extends TimeStamp {
    id: string;
    name: string;
}

export interface PushNotificationRequest {
    title: string;
    pushNotificationCategoryId?: number;
    text: string;
    richTextContent?: {
        url: string;
    };
    imageContent?: {
        url: string;
    };
    videoContent?: {
        url: string;
    };
}
