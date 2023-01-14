import "reflect-metadata";
import HelloController from "./controllers/HelloController";
import { Injector } from "./di/container";
import "./services/DbService";

const helloController = Injector.resolve(HelloController);
helloController.execute();
