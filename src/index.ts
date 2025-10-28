import { FactoryService } from "./factorService.js";
import { EmailNotificationCreator } from "./notificatoinCreator.js";

FactoryService.register("email", EmailNotificationCreator);

const notificationObj = FactoryService.create("email");
notificationObj.send("Hi baby....")



