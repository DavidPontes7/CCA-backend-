import prismaClient from "../../prisma";

class ListLiturgiaDiariaServices {
    async execute(currentDate: string) {
        // Converte a data para o formato que o Prisma espera, se necessário
        const liturgia = await prismaClient.leituraDiaria.findMany({
            where: {
                data: currentDate // Filtro para a data atual
            },
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
        });
        return liturgia;
    }
}

export { ListLiturgiaDiariaServices }
