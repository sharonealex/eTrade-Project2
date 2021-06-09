const router = require("express").Router();
const { Cart } = require("../../models");


router.post("/:id", async (req, res) => {
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

module.exports = router;
