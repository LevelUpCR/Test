const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//Obtener listado
module.exports.get = async (request, response, next) => {
    const ordenes = await prisma.orden.findMany(
        {
            orderBy:{
                fechaOrden: 'asc',
            },
            include:{
                usuario:true
            }
        }
    );
    response.json(ordenes);
};
//Obtener por Id
module.exports.getById = async (request, response, next) => {
    let id=parseInt(request.params.id);
    const orden = await prisma.orden.findUnique(
        {
            where:{id:id},
            include:{
                usuario:true,
                videojuegos:true,
            }
        }
    );
    response.json(orden);
}; 
//Crear un videojuego 
module.exports.create = async (request, response, next) => {
};
//Actualizar un videojuego
module.exports.update = async (request, response, next) => {
};