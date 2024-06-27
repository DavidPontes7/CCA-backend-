import prismaClient from "../../prisma";

class ListAdminService {
    async execute() {
        const admins = await prismaClient.admin.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        return admins;
    }
}

export { ListAdminService };
