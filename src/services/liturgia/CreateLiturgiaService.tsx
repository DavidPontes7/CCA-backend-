import prismaClient from "../../prisma";

interface LiturgiaRequest {
    primeiraLeitura: string;
    salmoResponsorial: string;
    segundaLeitura?: string;
    titulo: string;
    evangelho: string;
    corLiturgica: string
}

class CreateLiturgiaService {
    async execute({ primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica, }: LiturgiaRequest) {

        const liturgia = await prismaClient.leituraDiaria.create({
            data: {
                primeiraLeitura: primeiraLeitura,
                segundaLeitura: segundaLeitura,
                salmoResponsorial: salmoResponsorial,
                titulo: titulo,
                evangelho: evangelho,
                corLiturgica: corLiturgica,

            }
        })

        return liturgia;
    }
}

export { CreateLiturgiaService }