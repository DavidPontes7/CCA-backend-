import { Request, Response } from "express";
import { CreateInscricaoService } from "../../services/inscricao/CreateInscricaoService";

class CreateInscricaoController {
    async handle(req: Request, res: Response) {
        const { name, email, group, sector, eventId, telefone, idade } = req.body;

        const createInscricaoService = new CreateInscricaoService();

        const inscricao = await createInscricaoService.execute({
            name, email, group, sector, eventId, telefone, idade
        })
        return res.json(inscricao)
    }


}

export { CreateInscricaoController }