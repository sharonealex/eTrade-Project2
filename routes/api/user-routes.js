const router = require('express').Router();
const { User } = require('../../models');


// Get all Users

router.get('/', async (req, res) => {
    try{
        const users = await User.findAll();
        res.status(200).json(users);

    }catch(err){
        res.status(500).json(err);
    }
});

//Create new user

router.post('/', async (req, res) => {
    try{
        const addUsers = await User.create(
            {
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone_number: req.body.phone_number,
            }
        );

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(addUsers);
        });
    } catch(err){
        res.status(500).json(err);
    }
});

// //login

router.post('/', async (req, res) => {
    try{
        const userLogin = await user.findOne({
            where: {
                username: req.body.user,
            },
        });

        if(!userLogin || userLogin === '') {
            res.status(400).json({message: "incorrect username, please enter a username to continue!!!"});

            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ user: userLogin, message: "Ypou are now logged in!"});
        })

    } catch(err) {
        res.status(500).json(err);
    }
});

//Log out

router.post('/eTrade/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;