import {Request, Response} from 'express'
const logger = require('log4js').getLogger("driver");

export class HelloWorldcontroller {
    
    /**
    * @api {post} /api/sps/helloworld/v1 Send helloWorld for Testing.
    * @apiName sendHelloWorld
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 Ok
    *     {
    *        "message": "hello world Oscar Perez Gonzalez",
    *        "creationDate" : "2019-10-22T16:36:30.518Z"
    *     }
    */
    public newHelloworld (req: Request, res: Response): Response {
        logger.info("Hello world starting...");
        const { fullname, phoneNumber, email } = req.body;

        if(!fullname) return res.status(400).send({ message: 'Missing full name'});
        if(!phoneNumber) return res.status(400).send({ message: 'Missing phone number'});
        if(!email) return res.status(400).send({ message: 'Missing email'});

        const response = {
            message: `Hello world ${fullname}`,
            phoneNumber,
            email
        }
        return res.status(200).send(response);
    }
}