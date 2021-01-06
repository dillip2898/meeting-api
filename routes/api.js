module.exports = (app) => {
const appointmentController = require('../controller/meeting')
app.get('/appointments', appointmentController.all);
app.get('/retrieveSlots', appointmentController.allSlot);
app.post('/appointmentCreate', appointmentController.create);
};
