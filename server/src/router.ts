import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.json('Desde get')
})

export default router