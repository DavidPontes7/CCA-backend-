import prismaClient from "../../prisma";

class ListLiturgiaDiariaServices {
    async execute() {
        const liturgia = await prismaClient.leituraDiaria.findMany({
            select: {
                primeiraLeitura: true,
                segundaLeitura: true,
                titulo: true,
                salmoResponsorial: true,
                corLiturgica: true,
                evangelho: true
            },
            orderBy: {
                data: 'desc' 
            }

        })
        return liturgia;
    }
}

export { ListLiturgiaDiariaServices }