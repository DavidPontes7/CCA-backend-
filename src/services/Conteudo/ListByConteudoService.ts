import prismaClient from "../../prisma";

class ListByConteudoService {
    async execute() {
        const conteudo = await prismaClient.conteudo.findMany({
            select: {
                id: true,
                banner: true,
                titulo: true,
                corpo: true,
                autor: true,
                publicadoEm: true,
                categoriaId: true,
                categoria: { select: { name: true } },

            },
            orderBy: { publicadoEm: 'desc' },
        })
        return conteudo;
    }
}

export { ListByConteudoService }