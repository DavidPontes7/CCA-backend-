import prismaClient from "../../prisma";

interface LiturgiaRequest {
    primeiraLeitura: string;
    salmoResponsorial: string;
    segundaLeitura?: string;
    titulo: string;
    evangelho: string;
    corLiturgica: string;
    dia: string;
}

class CreateLiturgiaService {
    async execute({ primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica, dia }: LiturgiaRequest) {

        const liturgia = await prismaClient.leituraDiaria.create({
            data: {
                primeiraLeitura: primeiraLeitura,
                segundaLeitura: segundaLeitura,
                salmoResponsorial: salmoResponsorial,
                titulo: titulo,
                evangelho: evangelho,
                corLiturgica: corLiturgica,
                dia: new Date(dia) // Converte string para Date

            }
        })

        return liturgia;
    }
}

export { CreateLiturgiaService }