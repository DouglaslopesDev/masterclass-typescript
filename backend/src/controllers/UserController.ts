import {Request, Response} from "express";
import EmailService from "../services/EmailService";

const users = [
    {name: "Douglas", email: "lopesdouglas132@gmail.com"}
];

export default {
    async index(request: Request, response: Response) {
        return response.json(users);
    },
    async create(request: Request, response: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: "Douglas Lopes",
                email: "lopesdouglas132@gmail.com"
            },
            message: {
                subject: "Welcome to the system",
                body: "Welcome to the Jungle!!!"
            }
        });
        return response.send();
    }
};