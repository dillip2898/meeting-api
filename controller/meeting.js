const  Appointment  = require('../models/index');
const Slot = require("../models/slot")
const appointmentController = {
  
  create(req, res) {
    const new_slot = new Slot({
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      slot_date: req.body.slot_date,
      creation_timestamp: Date.now()
    });
    new_slot.save(); 
    const newappointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone, 
      slots: new_slot.id
    });
    
    newappointment.save()
    .then((slot) => {
        console.log ('your appointment is scheduled.')
        .res.send(slot);
    })
    .catch(err => {
        res.status(500).send({message : err.message || "some error occurd please check again."})
    })
  },
  all(req, res) {
    Appointment.find({}).exec((err, appointments) => res.json(appointments));
  },
   allSlot(req, res) {
      Slot.find({})
          .exec((err, slots) => res.json(slots))
  }
};


module.exports = appointmentController;
