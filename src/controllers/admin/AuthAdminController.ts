import { Request, Response } from "express";
import { AuthAdminService } from "../../services/admin/AuthAdminService";

class AuthAdminController {
    async handle(req: Request, res: Response) {
        
        const { email, password } = req.body;

        const authAdmninService = new AuthAdminService();

        const auth = await authAdmninService.execute({
            email,
            password
        })

        return res.json(auth)
    }

}

export { AuthAdminController }