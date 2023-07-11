import express from 'express'
const router =express.Router();
import StudentController from "../controllers/studentcontroller.js"
router.get('/',StudentController.getalldoc)
router.post('/',StudentController.createdoc)
router.get('/edit/:id',StudentController.editdoc)
router.post('/update/:id',StudentController.updatedocById)
router.post('/delete/:id',StudentController.deletedocById)
export default router