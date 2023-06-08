const express=require("express");
const router=express.Router();

//Controlador
const ordenController=require("../controllers/ordenesController");

//Rutas
//localhost:3000/videojuego/
router.get("/",ordenController.get);

router.get('/:id',ordenController.getById);

module.exports=router