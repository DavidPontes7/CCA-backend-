import { Request, Response } from "express";
import { CreateEventService } from "../../services/evento/CreateEventService";

class CreateEventController {
    async handle(req: Request, res: Response) {
        const { title, description, date } = req.body;

        const createEventService = new CreateEventService();

        if (!req.file) {
            throw new Error('Error upload file')
        } else {

            const { originalname, filename: banner } = req.file;

            try {
                // Chame execute() com os argumentos corretos e aguarde a resolução da Promise
                const evento = await createEventService.execute({
                    title,
                    description,
                    date,
                    banner
                });

                // Retorne o conteúdo como JSON
                return res.json(evento);
            } catch (error) {
                // Em caso de erro, retorne um status 400 e o erro como JSON
                return res.status(400).json({ error: error.message });
            }
        }
    }
}

export { CreateEventController }