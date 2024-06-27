import prismaClient from "../../prisma";

interface EventoRequest {
    title: string;
    description: string;
    banner: string;
    date: Date;
}

class CreateEventService {
    async execute({ title, description, banner, date }: EventoRequest) {

        const evento = await prismaClient.event.create({
            data: {
                date: date,
                title: title,
                description: description,
                banner: banner
            }
        })

        return evento
    }
}

export {CreateEventService}