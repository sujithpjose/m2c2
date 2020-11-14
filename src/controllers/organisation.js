const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Organisation = require('../db/schema/organisation');

router.post('/org', auth, async (req, res) => {
    const org = new Organisation(req.body);

    try {
        await org.save();
        res.status(201)
            .send(org);
    } catch (err) {
        res.status(400)
            .send(err);
    }

});

router.get('/org', auth, async (req, res) => {
    try {
        const orgs = await Organisation.find();
        if (!orgs) {
            return res.status(404).send();
        }
        res.send(orgs);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/org/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const org = await Organisation.findOne(_id);
        if (!org) {
            return res.status(404).send();
        }
        res.send(org);
    } catch (err) {
        res.status(500).send();
    }
});

router.patch('/org/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'location'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const org = await Task.findById(req.params.id);;
        if (!org) {
            return res.status(404).send();
        }

        updates.forEach(parameter => org[parameter] = req.body[parameter]);
        await org.save();

        res.send(org);

    } catch (err) {
        res.status(500).send(err);
    }

});

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const org = await Organisation.findOneAndDelete(req.params.id);
        if (!org) {
            return res.status(404).send();
        }
        res.send(org);
    } catch (err) {
        res.status(500).send();
    }
});


module.exports = router;