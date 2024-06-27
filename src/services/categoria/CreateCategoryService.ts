import prismaClient from "../../prisma";

interface ConteudoRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: ConteudoRequest) {

        if (name === '') {
            throw new Error('Name Invalid')
        }

        const categoria = await prismaClient.categoria.create({
            data: {
                name: name,

            },
            select: {
                id: true,
                name: true,
            }
        });

        return categoria;
    }
}

export { CreateCategoryService };
