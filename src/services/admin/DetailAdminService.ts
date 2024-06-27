import prismaClient from "../../prisma";

class DetailAdminService {
    async execute(admin_id: string ) {

        const admin = await prismaClient.admin.findFirst({
            where: {
                id: admin_id
            },
            select:{
                id: true,
                name:true,
                email:true
            }
        })

        return admin;
    }
}

export { DetailAdminService }