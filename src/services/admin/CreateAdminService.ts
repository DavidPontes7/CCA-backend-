import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateAdminService {
    async execute({name,email,password}:UserRequest) {
            //verificar se ele eenviou um email
            if(!email) {
                throw new Error("Email Incorreto")
            }

            //verificar se esse email já esta cadastrado

            const userAlreadyExists = await prismaClient.admin.findFirst({
                where:{
                    email:email
                }
            })

            if(userAlreadyExists) {
                throw new Error("Usuario já existe")
            }
            const passwordHash = await hash(password,8)

            const user = await prismaClient.admin.create({
                data:{
                    name:name,
                    email:email,
                    password: passwordHash,
                },
                select:{
                    id:true,
                    email:true,
                    name:true,
                }
            })



        return user
    }
}

export { CreateAdminService }