const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    totalPaid: Number,
    date: Date,
    status: String,
    order: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            quantity: Number
        }
    ]
})

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Order', orderSchema)