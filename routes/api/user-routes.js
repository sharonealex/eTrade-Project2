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
        const createUsers = await User.create(
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

            res.status(200).json(createUsers);
        });
    } catch(err){
        res.status(500).json(err);
    }
});

// //login


router.post('/login', async (req, res) => {
    try{
        const userLogin = await User.findOne({
            where: {
                username: req.body.user,
            },
        });

        if(!userLogin) {
            res.status(400).json({message: "incorrect username, please enter a username to continue!!!"});

            return;
        }

        const userPassword = await User.checkedPassword(req.body.password);

        if(!userPassword) {
            res.status(400).json({ message: "Incorrect password. Please try again!" });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ User: userLogin, message: "You are now logged in!"});
        })

    } catch(err) {
        res.status(500).json(err);
    }
});

//Log out

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;