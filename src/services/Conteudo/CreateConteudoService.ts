import prismaClient from "../../prisma";

interface ConteudoRequest {
    titulo: string;
    corpo: string;
    autor?: string;
    banner: string;
    categoriaId: string;
}

class CreateConteudoService {
    async execute({ titulo, corpo, autor, banner, categoriaId }: ConteudoRequest) {

        const conteudo = await prismaClient.conteudo.create({
            data: {
                titulo: titulo,
                corpo: corpo,
                autor: autor,
                banner: banner,
                categoriaId: categoriaId
            }
        })

        return conteudo;
    }
}

export { CreateConteudoService }