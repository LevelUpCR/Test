const express=require("express");
const router=express.Router();

//Controlador
const videojuegoController=require("../controllers/videojuegoController");

//Rutas
//localhost:3000/videojuego/
router.get("/",videojuegoController.get);

router.get('/:id',videojuegoController.getById);

module.exports=router