import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { UserValidation } from "./user.validation";

const router = Router();

router.post("/create-doctor", validateRequest(UserValidation.createDoctorZodSchema), UserController.createDoctor);
router.post("/create-admin", checkAuth(Role.SUPER_ADMIN), validateRequest(UserValidation.createAdminZodSchema), UserController.createAdmin);
router.post("/create-super-admin", checkAuth(Role.ADMIN), validateRequest(UserValidation.createAdminZodSchema), UserController.createSuperAdmin);

export const UserRoutes = router;