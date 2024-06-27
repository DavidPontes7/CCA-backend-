import prismaClient from "../../prisma";

interface ConteudoRequest {
    categoriaId: string;
}

class ListByCategoryService {
    async execute({ categoriaId }: ConteudoRequest) {

        const findByCategory = await prismaClient.conteudo.findMany({
            where: {
                categoriaId: categoriaId
            }
        })

        return findByCategory;

    }
}
export { ListByCategoryService }