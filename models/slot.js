const mongoose = require ('mongoose');
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose)
  ObjectId = mongoose.Schema.Types.ObjectId;
  const slotSchema = new Schema ({
    start_time: {
        type : String,
        require :true
    },
    end_time: {
        type : String,
        require :true
    },
    slot_date: {
        type : String,
        require :true
    },
    creation_timestamp : {
        type : Date,
        require : true
    }
  });

module.exports = mongoose.model('Slot', slotSchema)