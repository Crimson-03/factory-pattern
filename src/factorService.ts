// import { EmailNotificationCreator, type NotificatoinCreator } from "./notificatoinCreator.js";

import type { NotificatoinCreator } from "./notificatoinCreator.ts";

// export class FactoryService {
//     static create(type : string) : NotificatoinCreator {
//         if (type === "email") {
//             return new EmailNotificationCreator();
//         } else {
//             throw new Error('Invalid type');
//         }
//     }
// }


type CreatorConstructor = new () => NotificatoinCreator;

export class FactoryService {
    private static registry : Record<string, CreatorConstructor> = {};

    static register (type: string, creator : CreatorConstructor) : void {
        this.registry[type] = creator;
    }

    static create(type: string) : NotificatoinCreator {
        const Creator = this.registry[type];
        if(!Creator) throw new Error("Not a valid notification type");
        return new Creator();
    }
}