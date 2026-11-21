// import express from "express";
// import { singleUpload } from "../middlewares/multer.js";
// import {register,
//     login,
//     logout,
//  updateProfile } from "../controllers/user.controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";

// const router=express.Router();

// router.route("/register").post(singleUpload,register);
// router.route("/login").post(login);
// router.route("/logout").post(logout);
// router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
//  export default router;










import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import {
    register,
    login,
    logout,
    updateProfile
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout).post(logout);
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);

export default router;