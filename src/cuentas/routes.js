const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/',  controller.getCuentas);    
router.post('/', controller.crearCuenta);
router.get('/:id', controller.getCuentasById);
router.delete('/:id', controller.borrarCuenta);
router.put('/:id', controller.editarCuenta);


module.exports = router;