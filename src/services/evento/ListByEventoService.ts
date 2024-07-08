import prismaClient from "../../prisma";

class ListByEventoService {
    async execute() {
        const evento = await prismaClient.event.findMany({
            select: {
                id:true,
                date: true,
                title: true,
                description: true,
                banner: true
            },
            
        })
        return evento;
    }
}

export {ListByEventoService}