var mongoose   = require('mongoose');
var cardSchema = ({
	card_number: { type: Number},
  pin        : { type: Number},
  balance    : { type: Number}
});

var cardModel  = mongoose.model('Cards' , cardSchema);
module.exports = cardModel;
