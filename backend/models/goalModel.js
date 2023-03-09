const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    text: {
      type: String,
      required: [true, 'Please add a description'],
    },
    price: {
      type: String,
      required: [true, 'Please add a price'],
    },
    image: {
      type: String,
      required: [true, 'Please add an image'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
