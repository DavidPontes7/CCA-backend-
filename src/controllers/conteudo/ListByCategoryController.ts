import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/Conteudo/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const categoriaId = req.query.categoriaId as string;

        const listByCategory = new ListByCategoryService(); 

        const conteudoPorCategoria = await listByCategory.execute({
            categoriaId
        });

        return res.json (conteudoPorCategoria)

    }
}

export {ListByCategoryController}