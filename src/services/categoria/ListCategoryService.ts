import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        const conteudo = await prismaClient.categoria.findMany({
            select: {
                id:true,
                name: true,
                
            }

        })
        return conteudo;

    }
}

export { ListCategoryService }