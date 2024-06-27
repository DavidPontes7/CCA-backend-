import { Request, Response, response } from 'express'
import { CreateAdminService } from '../../services/admin/CreateAdminService'

class CreateAdminsController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createAdminService = new CreateAdminService();

        const user = await createAdminService.execute({
            name,
            email,
            password
        });


        return res.json(user)

    }
}
export { CreateAdminsController }