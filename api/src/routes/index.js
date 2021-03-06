const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", require("./countriesRoute"));
router.use("/activity", require("./activitiesRoute"));

module.exports = router;
