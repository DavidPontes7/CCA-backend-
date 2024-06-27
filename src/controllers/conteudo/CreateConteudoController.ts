import { Request, Response } from "express";
import { CreateConteudoService } from "../../services/Conteudo/CreateConteudoService";

class CreateConteudoController {
    async handle(req: Request, res: Response) {
        const { titulo, corpo, autor, categoriaId } = req.body;

        const createConteudoService = new CreateConteudoService();

        if (!req.file) {
            throw new Error("error upload file")

        } else {

            const { originalname, filename: banner } = req.file;

            try {
                // Chame execute() com os argumentos corretos e aguarde a resolução da Promise
                const conteudo = await createConteudoService.execute({
                    titulo,
                    corpo,
                    autor,
                    categoriaId,
                    banner
                });

                // Retorne o conteúdo como JSON
                return res.json(conteudo);
            } catch (error) {
                // Em caso de erro, retorne um status 400 e o erro como JSON
                return res.status(400).json({ error: error.message });
            }
        }


    }
}

export { CreateConteudoController };
