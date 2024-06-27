import { Request, Response } from "express";
import { DetailAdminService } from "../../services/admin/DetailAdminService";


class DetailAdminController {
    async handle(req: Request, res: Response) {

        const admin_id = req.admin_id;

        console.log("ID DO ADMIN:", admin_id)

        const detailAdminService = new DetailAdminService();

        const admin = await detailAdminService.execute(admin_id);

        return res.json(admin);

    }
}

export { DetailAdminController }