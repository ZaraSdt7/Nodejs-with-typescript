import { Router } from "express";
import DecoratorRouter from "../Decorators/decorator.router";
const router:Router = Router();
router.use(DecoratorRouter)
export default router;