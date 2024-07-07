import { Router } from 'express'
import multer from 'multer'

import { CreateAdminsController } from './controllers/admin/CreateAdminsController'
import { AuthAdminController } from './controllers/admin/AuthAdminController';
import { DetailAdminController } from './controllers/admin/DetailAdminController';


import { CreateCategoryController } from './controllers/categoria/CreateCategoryController';
import { ListCategoryController } from './controllers/categoria/ListCategoryController'

import { CreateConteudoController } from './controllers/conteudo/CreateConteudoController';
import { ListByCategoryController } from './controllers/conteudo/ListByCategoryController';
import { RemoveConteudoController } from './controllers/conteudo/RemoveConteudoController';
import { ListByConteudoController } from './controllers/conteudo/ListByConteudoController';

import { CreateInscricaoController } from './controllers/inscricao/CreateInscricaoController';


import { CreateEventController } from './controllers/evento/CreateEventController';

import { isAuthenticated } from './middlewares/isAtuthenticated'

import uploadConfig from './config/multer'
import { ListInscricaoController } from './controllers/inscricao/ListInscricaoController';
import { ListAdminController } from './controllers/admin/ListAdminController';
import { ListByEventoController } from './controllers/evento/ListByEventoController';
import { EditConteudoController } from './controllers/conteudo/EditConteudoController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//rotas user
router.post('/users', isAuthenticated, new CreateAdminsController().handle)

router.post('/session', new AuthAdminController().handle)

router.get('/me', isAuthenticated, new DetailAdminController().handle)

router.get('/administradores', isAuthenticated, new ListAdminController().handle)

//Rotas Categorias
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', new ListCategoryController().handle)

//Rotas Contéudos
router.post('/conteudo', isAuthenticated, upload.single('file'), new CreateConteudoController().handle)

router.get('/category/conteudo', new ListByCategoryController().handle)

router.get('/conteudo', new ListByConteudoController().handle)

router.patch('/conteudo/editar/:id', isAuthenticated, new EditConteudoController().handleEdit);


//Rotas Delete/conteudo
// router.delete('/conteudo/:id', isAuthenticated, new RemoveConteudoController().handle)

//Rotas Inscições
router.post('/inscricao', new CreateInscricaoController().handle)

router.get('/inscricao', isAuthenticated, new ListInscricaoController().handle)


//Rotas Eventos
router.post('/evento', isAuthenticated, upload.single('file'), new CreateEventController().handle)

router.get('/evento', new ListByEventoController().handle)







export { router };