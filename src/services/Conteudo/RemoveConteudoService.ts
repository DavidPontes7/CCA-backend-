import prismaClient from "../../prisma";

interface ConteudoRemoveRequest{
    conteudo_id: string;
}


class RemoveConteudoService{
    async execute({ conteudo_id}:ConteudoRemoveRequest){

        const conteudo = await prismaClient.conteudo.delete({
            where:{
                id: conteudo_id,
            }
        })
        return conteudo;
    }

}

export {RemoveConteudoService}