import { EmailNotification, Notification, SMSNotification } from "./notificationService.js";

export abstract class NotificatoinCreator {
    protected abstract createNotification() : Notification;

    send(message : string) : void {
        const notificationCreator = this.createNotification();
        notificationCreator.send(message);
    }
}

export class EmailNotificationCreator extends NotificatoinCreator {
    protected createNotification(): Notification {
        return new EmailNotification();
    }
}

export class SMSNotificationCreator extends NotificatoinCreator {
    protected createNotification(): Notification {
        return new SMSNotification();
    }
}