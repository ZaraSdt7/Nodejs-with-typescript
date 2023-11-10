import { Router } from "express";
import DecoratorRoutes from "../Decorator/decorator.router";
const router:Router = Router();
router.use(DecoratorRoutes)
export default router;