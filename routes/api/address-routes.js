const router = require("express").Router();
const { Address, User } = require("../../models");
//get Address by UserId

router.get("/:id", async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!address) {
      res.status(404).json({ message: "No address found for this user" });
      return;
    }

    res.status(200).json(address);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const createAdress = await Address.create({
      city: req.body.city,
      address_line1: req.body.address_line1,
      address_line2: req.body.address_line2,
      postal_code: req.body.postal_code,
      user_id: req.body.user_id
    });

    //console.log(createAdress);
    const addressData = createAdress.get({ plain: true });

    req.session.save(() => {
      //   req.session.user_id = user.id
      //   req.session.username = user.username;
      req.session.loggedIn = true;
      res.status(200).json(addressData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
