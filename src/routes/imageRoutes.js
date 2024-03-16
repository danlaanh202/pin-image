import {Router} from 'router';
import * as imagesController from '../controllers/imagesController';
const router = Router();

router.get('/', imagesController.get);

export default imageRoutes;
