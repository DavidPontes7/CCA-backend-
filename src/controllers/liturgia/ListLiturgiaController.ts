import { Request, Response } from 'express';
import { ListLiturgiaDiariaServices } from '../../services/liturgia/ListLiturgiaServices';

class ListLiturgiaDiariaController {
    async handle(req: Request, res: Response) {
        const listLiturgiaDiaria = new ListLiturgiaDiariaServices();
        
        // Obtém a data atual no formato YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];

        try {
            const liturgia = await listLiturgiaDiaria.execute(today);

            if (liturgia.length === 0) {
                return res.status(404).json({ message: 'Nenhuma liturgia encontrada para a data de hoje.' });
            }

            return res.json(liturgia);
        } catch (error) {
            console.error('Erro ao buscar liturgia diária:', error);
            return res.status(500).json({ message: 'Erro ao buscar liturgia diária.' });
        }
    }
}

export { ListLiturgiaDiariaController };
