import { Request, Response, Router } from "express";

const router = Router();

router.post('/upload', (req: Request, res: Response)=>{res.send(`file/upload`)})
router.get('/list', (req: Request, res: Response)=>{res.send(`file/list`)})
router.post('/delete/:id', (req: Request, res: Response)=>{res.send(`file/delete/${req.params.id}`)})
router.get('/:id', (req: Request, res: Response) => { res.send(`file/:${req.params.id}`) })
router.get('/download/:id', (req: Request, res: Response) => { res.send(`file/download/:${req.params.id}`) })
router.put('/update/:id', (req: Request, res: Response) => { res.send(`file/update/:${req.params.id}`) })

export default router;