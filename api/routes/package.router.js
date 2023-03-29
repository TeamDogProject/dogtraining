const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllPackages, getOnePackage, createOnePackage, updatePackage, deletePackage } = require('../controllers/package.controller')


router.get('/', checkAuth, getAllPackages, (req, res) => {
    res.send('Aquí se muestran todos los paquetes')
})

router.get('/:id', checkAuth, getOnePackage, (req, res) =>{
    res.send('Aquí se muestra un solo paquete')
})

router.post('/', checkAuth, checkAdmin, createOnePackage, (req, res) => {
    res.send('Aquí el administrador crea un paquete')
})

router.put('/:id', checkAuth, checkAdmin, updatePackage, (req, res) => {
    res.send('Aquí el administrador actualiza el paquete')
})

router.delete('/:id', checkAuth, checkAdmin, deletePackage, (req, res) => {
    res.send('Aqui el administrador elimina el paquete')
})




module.exports = router