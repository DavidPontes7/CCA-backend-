import { Request, Response } from 'express'
import { ListLiturgiaDiariaServices } from '../../services/liturgia/ListLiturgiaServices';


class ListLiturgiaDiariaController {
    async handle(req: Request, res: Response) {

        const listLiturgiaDiaria = new ListLiturgiaDiariaServices();

        const liturgia = await listLiturgiaDiaria.execute();

        return res.json(liturgia)
    }
}

export { ListLiturgiaDiariaController };