const { Router } = require('express')
const express = require('express')
const subRouter = express.Router()
const subscriber = require('../models/subscribers')

subRouter.get('/api/v1/subscribers', async (req, res) => {
    try {
        const sub = await subscriber.find()
        res.json(sub)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

subRouter.post('/api/v1/subscribers', async (req, res) => {
    const sub = new subscriber({
        name: req.body.name,
        channel: req.body.channel
    })
    try {
        const newSub = await sub.save()
        res.status(201).json(newSub)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

subRouter.get('/api/v1/subscribers/:id', getSub, (req, res) => {
    res.json(res.sub)
})

subRouter.put('/api/v1/subscribers/:id', getSub, async (req, res) => {
    if (req.body.name != null) {
        res.sub.name = req.body.name
    }
    if (req.body.channel != null) {
        res.sub.channel = req.body.channel
    }
    try {
        const subUpdate = await res.sub.save();
        res.json(subUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

async function getSub(req, res, next) {
    let sub
    try {
        sub = await subscriber.findById(req.params.id)
        if (!sub) {
            return res.status(404).json({ message: 'Utente non esistente' })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }
    res.sub = sub
    next()
}


module.exports = subRouter