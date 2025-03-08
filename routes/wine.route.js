const express = require('express');
const router = express.Router();
const {
    getwine,
    getWineById,
    setWine,
    updateWine,
    deleteWine
} = require('../controllers/wine.controller');

// Endpoint para recuperar toda la colección de Reviews
router.get('/all',getwine);
// Endpoint para recuperar un elemento de la colección
router.get('/ById/:id', getWineById)
//End point para aregar un nuevo elemento a la colección
router.post('/add',setWine);
// Endpoint para la actualización de un lelemento de la colección
router.put('/modify/:id',updateWine);
//Endpoint para eliminar un elemento de la colección 
router.delete('/less/:id', deleteWine);

module.exports = router;
