import { Request,Response } from "express";
import { ListInscricaoService } from "../../services/inscricao/ListInscricaoService";

class ListInscricaoController {
    async handle (req:Request, res: Response) {

        const listInscricaoService = new ListInscricaoService();

        const inscricao = await listInscricaoService.execute();

        return res.json(inscricao)
    }
}

export {ListInscricaoController}