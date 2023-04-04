const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
let Hardware = require("../models/hardware");

//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },

    filename : (req,file,cb) => {
        cb(null, Date.now() + file.originalname)
    }
    
});

const upload = multer({
    storage:storage,
    
}).single('image')


router.post('/add', upload, async(req,res)=>{

    const newHardware = new Hardware({

        hardwareID: req.body,
        hardwareName: req.body.hardwareName,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        image: req.file.filename,
        
    })

    const totalNumberOfHardwareInDb = await Hardware.countDocuments()

    // convert number to string, so we can concatenate 0s easily...
    
        let numberToString = totalNumberOfHardwareInDb.toString()
    
    
    
        // If length of number string is less than 5 then add leading 0s in nuberToString
    
        if(numberToString.length < 3){
    
            for (let i = numberToString.length; i < 3; i++){
    
                numberToString = '0' + numberToString
    
            }
    
        }
    
        newHardware.hardwareID = `HID${numberToString}`

    newHardware.save().then(()=>{
        alert('Hardware added successfully');
        res.redirect('http://localhost:3000/addHardware');
        // res.status(200).send({status: "Hardware added"})

    }).catch((err)=>{
        alert('Hardware already exists');
        res.redirect('http://localhost:3000/addHardware');
        // console.log(err);
        // res.status(500).send({status: "Error with adding hardware", error: err.message});
    })

})



router.route("/view").get((req,res)=>{
    Hardware.find().then((hardwares)=>{
        res.json(hardwares)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:ID").put(async(req,res)=>{
    let hardwareId = req.body.ID;
    const {address} = req.body;
    const {contact} = req.body;

    const Update = {
        address,
        contact,
    }

    const update = await Hardware.findByIdAndUpdate(hardwareId, Update).then(()=>{
        res.status(200).send({status: "Hardware updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating hardware", error: err.message});
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    const id = req.params.id;

    await Hardware.findByIdAndRemove(id).exec().then(()=>{
        res.status(200).send({status: "Hardware deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting hardware", error: err.message});
    })
})


module.exports = router;
    


