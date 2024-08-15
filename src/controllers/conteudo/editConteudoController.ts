import { Request, Response } from 'express';
import { EditConteudoService } from '../../services/Conteudo/EditConteudoService';

class EditConteudoController {
    async handleEdit(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, corpo, autor, categoriaId } = req.body;
        const banner = req.file?.filename; // O nome do arquivo é obtido aqui

        if (!titulo || !corpo || !autor || !categoriaId) {
            return res.status(400).json({ error: 'Campos obrigatórios não foram fornecidos' });
        }

        const editConteudoService = new EditConteudoService();

        try {
            const conteudoAtualizado = await editConteudoService.execute({
                conteudo_id: id,
                novoTitulo: titulo,
                novoCorpo: corpo,
                novoAutor: autor,
                novoCategoriaId: categoriaId,
                novoBanner: banner 
            });

            return res.status(200).json(conteudoAtualizado);
        } catch (error) {
            console.error('Erro ao editar conteúdo:', error);
            return res.status(500).json({ error: 'Erro interno ao editar conteúdo' });
        }
    }
}

export { EditConteudoController };
