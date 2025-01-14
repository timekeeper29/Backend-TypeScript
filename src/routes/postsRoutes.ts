import { Router } from 'express';
import postController from '../controllers/postsController';
import requireJwtAuth from '../middlewares/requireJwtAuth';
import requirePostExists from '../middlewares/requirePostExists';
import commentRoutes from './commentsRoutes';

const router = Router();

// create
router.post('/', requireJwtAuth, postController.createPost);

// read
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPost);

// update
router.put('/:postId', requireJwtAuth, postController.updatePost);

// delete
router.delete('/:postId', requireJwtAuth, postController.deletePost);

// maniuplate specific fields
router.patch('/:postId/like', requireJwtAuth, postController.likePost);
router.patch('/:postId/dislike', requireJwtAuth, postController.dislikePost);

// comment routes
router.use('/:postId/comments', requirePostExists, commentRoutes);


export default router;
