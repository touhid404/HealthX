import { Router } from "express";
import { UserController } from "./user.controller";
import { createDoctorZodSchema } from "./user.validation";
import { validateRequest } from "../../middleware/validateRequest";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserController.createDoctor);

router.post("/create-admin", checkAuth(Role.SUPER_ADMIN),UserController.createAdmin);
router.post("/create-super-admin", checkAuth(Role.ADMIN), UserController.createSuperAdmin);

export const UserRoutes = router;