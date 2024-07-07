import { Request, Response } from "express";
import { ListByEventoService } from "../../services/evento/ListByEventoService";

class ListByEventoController {
    async handle(req: Request, res: Response) {
        const listByEventoService = new ListByEventoService();

        const evento = await listByEventoService.execute();

        return res.json(evento)
    }
}

export { ListByEventoController }