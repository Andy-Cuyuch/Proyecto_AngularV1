'use strict'

const Entity = require('../model/entity.model');
const { validateData, encrypt, searchUser, checkPass, checkPermission, checkUpdate, checkUpdateAdmin } = require('../utils/validate');
const jwt = require('../services/jwt')

exports.test = (req, res) => {
    res.send({ message: 'djaskdjkls' });
}

exports.EntitySave = async (req, res) => {
    try {
        const params = req.body;
        const data = {
            name: params.name,
            edad: params.edad,
            email: params.email,
            carnet: params.carnet,
            numFor: params.numFor
        }
        const msg = validateData(data);
        if(msg) return res.status(400).send(msg);
        const already = await Entity.findOne({name: params.name});
        if(already) return res.send({message: 'Ya se creó el equipo'});
        data.name = params.name;
        data.carnet = params.carnet;
        let  numEntity = new Entity(data);
        await numEntity.save();
        return res.send({ message: 'Company creado' });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err, message: 'Error saving Company' })
    }
}
