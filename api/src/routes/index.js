const { Router } = require('express');

// Importar todos los routers;
const dogs = require('./routesDog');
const temperaments = require('./routesTemperaments');
const breeds = require('./routesBreeds');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/routesDog', dogs);
router.use('/routesTemperaments', temperaments);
router.use('/routesBreeds', breeds);

module.exports = router;
