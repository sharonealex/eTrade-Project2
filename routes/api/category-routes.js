const router = require('express').Router();
const { Product, Category, Category_Discount } = require('../../models')

//get Category

router.get('/', async (req, res) => {
    try {
      const categories = await Category.findAll(
        {
          include: [{ model: Category_Discount }],
        }
      );
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get Category By Id
  
  router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [{ model: Category_Discount }],
      });
  
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;

