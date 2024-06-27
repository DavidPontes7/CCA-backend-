import { Request, Response } from 'express'
import { ListCategoryService } from '../../services/categoria/ListCategoryService'

class ListCategoryController {
    async handle(req: Request, res: Response) {
        
        const listCategoryService = new ListCategoryService();

        const categoria = await listCategoryService.execute();

        return res.json(categoria)
    }
}

export { ListCategoryController };