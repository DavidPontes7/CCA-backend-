import { Request, Response } from "express";
import { RemoveConteudoService } from "../../services/Conteudo/RemoveConteudoService";

class RemoveConteudoController {
    async handle(req: Request, Res: Response) {
        const conteudo_id = req.query.conteudo_id as string;

        const removeConteudo =  new RemoveConteudoService();

        const conteudo = await removeConteudo.execute({
            conteudo_id
        })

        return Res.json(conteudo)
    }
}

export {RemoveConteudoController}
