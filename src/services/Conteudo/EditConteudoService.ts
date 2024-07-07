import prismaClient from "../../prisma";

interface ConteudoEditRequest {
    conteudo_id: string;
    novoTitulo: string;
    novoCorpo: string;
}

class EditConteudoService {
    async execute({ conteudo_id, novoTitulo, novoCorpo }: ConteudoEditRequest) {
        const conteudoAtualizado = await prismaClient.conteudo.update({
            where: {
                id: conteudo_id,
            },
            data: {
                titulo: novoTitulo,
                corpo: novoCorpo,

            },
        });

        return conteudoAtualizado;
    }
}

export { EditConteudoService };
