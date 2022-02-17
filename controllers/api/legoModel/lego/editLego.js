const router = require('express').Router();
const { Lego, LegoPart } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

// This route create a Lego model
// request body:
//{legoName, legoImage, legoVideo, legoPostId, [partIdArr]}
router.post('/', withAuth, async (req, res) => {
  try {
    //variables with unclear sources
    //Check if some variables come from
    // req.body // req.session // req.params
    const thisPostId = req.body.legoPostId;

    //update lego model itself and get the lego model id
    const newLegoModel = await Lego.create({
      name: req.body.legoName,
      image: req.body.legoImage,
      video: req.body.legoVideo,
      post_id: thisPostId,
    });

    const newLegoModelId = newLegoModel.get({ plain: true }).id;

    //update lego-to-part association
    const newAssociation = await LegoPart.bulkCreate(
      req.body.partIdArr.map((singlePartId) => {
        return {
          lego_id: req.body.legoPostId,
          part_id: singlePartId,
        };
      })
    );
    res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
