import { Request, Response } from "express";
import { ListByConteudoService } from "../../services/Conteudo/ListByConteudoService";


class ListByConteudoController {
    async handle (req:Request, res: Response) {
        
        const  listByConteudoService = new ListByConteudoService();

        const conteudo = await listByConteudoService.execute();
        
        return res.json(conteudo)

    }
}

export {ListByConteudoController}