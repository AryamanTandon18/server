import express from 'express'
import { Login, getMyProfile, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middleWares/auth.js';

 const router = express.Router();
 
router.post("/new",register);
router.post("/login",Login);
router.get("/me",isAuthenticated,getMyProfile);
router.get("/logout",logout);


 export default router;


 // router.route("/userid/:Id").get(getUserDatails).put(updateUser).delete(deleteUser);
// router.get("/userid/:Id",getUserDatails);
// router.put("/userid/:Id",updateUser);
// router.delete("/userid/:Id",deleteUser);