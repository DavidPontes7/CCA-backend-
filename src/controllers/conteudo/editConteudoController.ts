import { Request, Response } from "express";
import { EditConteudoService } from "../../services/Conteudo/EditConteudoService";

class EditConteudoController {
    async handle(req: Request, res: Response) {
        const { conteudo_id } = req.params; // Aqui estamos esperando receber o conteudo_id como parâmetro de rota
        const { novoTitulo, novoCorpo } = req.body; // Aqui estamos esperando receber os novos dados do conteúdo no corpo da requisição

        if (!conteudo_id || typeof conteudo_id !== "string") {
            return res.status(400).json({ error: "Parâmetro 'conteudo_id' inválido" });
        }

        if (!novoTitulo || typeof novoTitulo !== "string") {
            return res.status(400).json({ error: "Campo 'novoTitulo' inválido" });
        }

        if (!novoCorpo || typeof novoCorpo !== "string") {
            return res.status(400).json({ error: "Campo 'novoCorpo' inválido" });
        }

        const editConteudo = new EditConteudoService();

        try {
            const conteudoAtualizado = await editConteudo.execute({
                conteudo_id,
                novoTitulo,
                novoCorpo,
            });

            if (!conteudoAtualizado) {
                return res.status(404).json({ error: "Conteúdo não encontrado ou não pôde ser atualizado" });
            }

            return res.json(conteudoAtualizado);
        } catch (error) {
            console.error("Erro ao editar conteúdo:", error);
            return res.status(500).json({ error: "Erro interno ao editar conteúdo" });
        }
    }
}

export { EditConteudoController };
