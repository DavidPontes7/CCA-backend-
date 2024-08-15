import prismaClient from '../../prisma';

interface ConteudoEditRequest {
    conteudo_id: string;
    novoTitulo: string;
    novoCorpo: string;
    novoAutor: string;
    novoCategoriaId: string;
    novoBanner?: string; // O banner é opcional
}

class EditConteudoService {
    async execute({
        conteudo_id,
        novoTitulo,
        novoCorpo,
        novoAutor,
        novoCategoriaId,
        novoBanner
    }: ConteudoEditRequest) {
        const conteudoAtualizado = await prismaClient.conteudo.update({
            where: {
                id: conteudo_id,
            },
            data: {
                titulo: novoTitulo,
                corpo: novoCorpo,
                autor: novoAutor,
                categoriaId: novoCategoriaId,
                banner: novoBanner // Atualizando o banner
            },
        });

        return conteudoAtualizado;
    }
}

export { EditConteudoService };
