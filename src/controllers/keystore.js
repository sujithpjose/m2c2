const express = require('express');
const router = new express.Router();
const KeyStore = require('../db/schema/keystore');

router.post('/key', async (req, res) => {
    const keystore = new KeyStore(req.body);

    try {
        await keystore.save();

        res.status(201)
            .send({ keystore });

    } catch (err) {
        res.status(400)
            .send(err);
    }
});

router.patch('/key/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'key', 'password', 'category'];
    const isValidOperation = updates.every(item => allowedUpdates.includes(item));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const key = await KeyStore.findById(req.params.id);
        if (!key) {
            return res.status(400).send({ error: 'Not found!' })
        }

        updates.forEach(param => key[param] = req.body[param]);
        await key.save();

        res.send(key);

    } catch (err) {
        res.status(500).send(err);
    }

});

router.get('/key', async (req, res) => {

    try {
        const keys = await KeyStore.find();
        res.send(keys);

    } catch (err) {
        res.status(500).send(err);
    }

})


module.exports = router;