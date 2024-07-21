import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import { router } from './routes';
import { GetConteudoByIdService } from './services/Conteudo/GetConteudoByIdService';
import { RemoveConteudoService } from './services/Conteudo/RemoveConteudoService';


const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

//Conteudo detalhes por Id
router.get('/conteudo/:id', async (req, res) => {
    const { id } = req.params;
    const getConteudoByIdService = new GetConteudoByIdService();
    try {
        const conteudo = await getConteudoByIdService.execute(id);
        if (conteudo) {
            res.status(200).json(conteudo);
        } else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar conteúdo', error });
    }
});
//Deletar Contéudo por Id
router.delete('/conteudo/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const service = new RemoveConteudoService();
        const conteudo = await service.execute({ conteudo_id: id });

        res.status(200).json(conteudo);
    } catch (error) {
        console.error('Erro ao excluir conteúdo:', error);
        res.status(500).json({ error: 'Erro interno ao excluir conteúdo' });
    }
});





app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(3333, () => console.log('Servidor online!'))