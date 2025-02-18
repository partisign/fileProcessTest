import { Request, Response, Router } from "express";

const router = Router();

router.post('/signin', (req: Request, res: Response)=>{res.send(`signin`)})
router.post('/signin/newToken', (req: Request, res: Response)=>{res.send(`newToken`)})
router.post('/signup', (req: Request, res: Response)=>{res.send(`signUp`)})
router.get('/info', (req: Request, res: Response) => { res.send(`info`) })
router.get('/logout', (req: Request, res: Response) => { res.send(`logout`) })

export default router;