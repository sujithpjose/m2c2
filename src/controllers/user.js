const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const User = require('../db/schema/user');

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();

        res.status(201)
            .send({ user, token });
    } catch (err) {
        res.status(400)
            .send(err);
    }

});

router.post('/users/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();

        res.send({ user, token });
    } catch (err) {
        res.status(400).send();
    }

});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

// user's should not be allowed to get other users profile
/* router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(500).send();
    }

}); */

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'phone'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalid updates!' });
    }

    try {
        // mongoose by passes middleware for findByIdAndUpdate, so we should be using save
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        const user = req.user;
        updates.forEach(property => user[property] = req.body[property]);
        await user.save();

        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/users/me', auth, async (req, res) => {

    try {
        await req.user.remove();
        res.send(req.user);
    } catch (err) {
        res.status(500).send();
    }

});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        })
        await req.user.save();

        res.send();
    } catch (err) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
});


module.exports = router;