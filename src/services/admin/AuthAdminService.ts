import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthAdminService {
    async execute({ email, password }: AuthRequest) {

        // Verificar se o email existe
        const admin = await prismaClient.admin.findFirst({
            where: {
                email: email
            }
        });

        if (!admin) {
            throw new Error("Usuário/Senha estão incorretas");
        }

        // Verificar se a senha enviada está correta
        const passwordMatch = await compare(password, admin.password);

        if (!passwordMatch) {
            throw new Error("Usuário/Senha estão incorretas");
        }

        // Verificar se o segredo JWT está definido
        const jwtSecret = process.env.JWT_SECRET as string;

        if (!jwtSecret) {
            throw new Error("Segredo JWT não está definido");
        }

        // Gerar o token JWT
        const token = sign(
            {
                name: admin.name,
                email: admin.email
            },
            jwtSecret,
            {
                subject: admin.id.toString(), // Converte para string se necessário
                expiresIn: '30d'
            }
        );

        return {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            token: token
        };
    }
}

export { AuthAdminService };
