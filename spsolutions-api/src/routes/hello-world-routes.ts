import { HelloWorldcontroller } from "../controllers";
import express from 'express'

export class HelloWorldRoutes {

    public helloWorldController: HelloWorldcontroller = new HelloWorldcontroller();

    public routes(app: express.Application): void {
        app.route('/api/sps/helloworld/v1')
        .post(this.helloWorldController.newHelloworld); //new HelloWorld
    }
}