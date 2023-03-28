const Dog = require('../models/dog.model')

async function getAllDogs(req, res){
    try {
        const dogs = await Dog.findAll({
            where: req.query
        })
        if(dogs){
            return res.status(200).json(dogs)
        }else{
            return res.status(404).send('Dog not found')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneDog(req, res) {
    try {
        const dog = await Dog.findByPk(req.params.id)
        if (dog) {
            return res.status(200).json(dog)
        } else {
            return res.status(404).send('Dog not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneDog(req, res) {
    try {
        const dog = await Dog.create(req.body)
        return res.status(200).json({ message: 'Dog created', dog: dog })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDog(req, res) {
    try {
        const [updated] = await Dog.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Dog updated' })
        } else {
            return res.status(404).send('Dog not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

async function deleteDog(req, res) {
    try {
        const dog = await Dog.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (dog) {
            return res.status(200).json('Dog deleted')
        } else {
            return res.status(404).send('Dog not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getDogProfile(req, res) {
    try {
        const dogprofile = await Dog.findByPk(req.params.id)
        if (dogprofile) {
            return res.status(200).json(dogprofile)
        } else {
            return res.status(404).send('Dog profile not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getAllDogs, getOneDog, createOneDog, updateDog, deleteDog, getDogProfile }