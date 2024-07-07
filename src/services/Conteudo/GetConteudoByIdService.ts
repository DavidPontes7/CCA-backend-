import prismaClient from "../../prisma";

class GetConteudoByIdService {
    async execute(id: string) {
        const conteudo = await prismaClient.conteudo.findUnique({
            where: { id },
            select: {
                id: true,
                banner: true,
                titulo: true,
                corpo: true,
                autor: true,
                publicadoEm: true,
                categoriaId: true,
                categoria: { select: { name: true } }, 
            }
        });
        return conteudo;
    }
}

export { GetConteudoByIdService };
