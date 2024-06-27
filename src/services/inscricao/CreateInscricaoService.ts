import prismaClient from "../../prisma";

interface InscricaoRequest {
    name: string;
    email: string;
    group?: string;
    sector?: string;
    eventId: string;
    telefone?: string;
    idade?: number;
}

class CreateInscricaoService {
    async execute({ name, email, group, sector,eventId,telefone,idade }: InscricaoRequest) {

        const inscricao = await prismaClient.registration.create({
            data: {
                name: name,
                email: email,
                group: group,
                sector: sector,
                telefone: telefone,
                eventId: eventId,
                idade: idade,
            }
        })

        return inscricao;

    }
}

export { CreateInscricaoService }