const mongoose = require ('mongoose');
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
  id: ObjectId,
  name: { 
      type : String,
        require :true
    },
  email: {
       type : String,
        require :true
    },
  phone: {
      type : Number,
    require: true 
},
  slots:{type: ObjectId, ref: 'Slot'},
  created_at: Date
});

module.exports = mongoose.model('Appointment', appointmentSchema);