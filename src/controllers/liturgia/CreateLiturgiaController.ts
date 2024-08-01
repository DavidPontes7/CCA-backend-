import { Request, Response, response } from 'express'
import { CreateLiturgiaService } from '../../services/liturgia/CreateLiturgiaService';

class CreateLiturgiaController {
    async handle(req: Request, res: Response) {
        const { primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica, dia } = req.body;

        const createAdminService = new CreateLiturgiaService();

        const user = await createAdminService.execute({
            primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica, dia
        });


        return res.json(user)

    }
}
export { CreateLiturgiaController }