import prismaClient from "../../prisma";

class ListInscricaoService {
    async execute() {
        const inscricao = await prismaClient.registration.findMany({
            select: {
                name: true,
                email: true,
                telefone: true,
                sector: true,
                group: true,
                eventId: true   

            }
        })
        return inscricao
    }
}

export {ListInscricaoService}