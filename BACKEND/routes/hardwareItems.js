const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let HardwareItem = require("../models/hardwareItem");

router.route("/add").post(async (req, res) => {
  
  const newHardwareItem = new HardwareItem({
    itemID: req.body,
    itemName: req.body.itemName,
    brandName: req.body.brandName,
    hardwareName: req.body.hardwareName,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  const totalNumberOfHardwareItemInDB = await HardwareItem.countDocuments();

  // convert number to string, so we can concatenate 0s easily...

  let numberToString = totalNumberOfHardwareItemInDB.toString();

  // If length of number string is less than 5 then add leading 0s in nuberToString

  if (numberToString.length < 3) {
    for (let i = numberToString.length; i < 3; i++) {
      numberToString = "0" + numberToString;
    }
  }

  newHardwareItem.itemID = `ITD${numberToString}`;

  newHardwareItem.save().then(() => {
      // alert("Item added successfully");
      // res.redirect("http://localhost:3000/addHardwareItem");
      res.status(200).send({status: "Item added"})
    })
    .catch((err) => {
      // alert("Item already exists");
      // res.redirect("http://localhost:3000/addHardwareItem");
      console.log(err);
      res.status(500).send({status: "Error with adding item", error: err.message});
    });
});

router.route("/view").get((req, res) => {
  HardwareItem.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:ID").put(async (req, res) => {
  let itemId = req.body.ID;
  const { price } = req.body;
  const { quantity } = req.body;

  const Update = {
    price,
    quantity,
  };

  const update = await HardwareItem.findByIdAndUpdate(itemId, Update).then(() => {
      res.status(200).send({ status: "Item updated" });
    }).catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating item", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  await HardwareItem.findByIdAndRemove(id).exec().then(() => {
      res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
      res.status(500).send({ status: "Error with deleting item", error: err.message });
    });
});

module.exports = router;
