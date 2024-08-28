const router = require('express').Router()

const IngredienteController = 
require('../controllers/IngredienteController')

router.post('/novoPao',IngredienteController.registrarPao)
router.post('/novaProteina',ClienteController.registrarProteina)
router.post('/novoQueijo',IngredienteController.registrarQueijo)
router.post('/novoAdicional',IngredienteController.registrarAdicional)

module.exports = router