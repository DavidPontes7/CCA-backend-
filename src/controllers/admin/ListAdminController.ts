import { Request, Response } from "express";
import { ListAdminService } from "../../services/admin/ListAdminService";

class ListAdminController {
    async handle(req: Request, res: Response) {
        const listAdminService = new ListAdminService();
        const admin = await listAdminService.execute();

        return res.json(admin);
    }
}

export { ListAdminController };
