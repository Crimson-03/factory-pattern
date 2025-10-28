export abstract class Notification {
    abstract send(message : string) : void
}

export class EmailNotification extends Notification {
    send(message : string) : void {
        console.log('Email Notificattion:::: ', message);
    }
}

export class SMSNotification extends Notification {
    send (message : string) : void {
        console.log('SMS Notificaiton:::: ', message);
    }
}

export class PushNotification extends Notification {
    send (message : string) : void {
        console.log('Push Notification:::: ', message);
    }
}