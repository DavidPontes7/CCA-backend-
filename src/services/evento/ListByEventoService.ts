import prismaClient from "../../prisma";

class ListByEventoService {
    async execute() {
        const evento = await prismaClient.event.findMany({
            select: {
                id:true,
                title: true,
            },
            
        })
        return evento;
    }
}

export {ListByEventoService}