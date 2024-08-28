const mongoose = require('../db/conecta')
const {Schema} = mongoose

const Pao = mongoose.model('Pao',
new Schema({
    sku: {type: String, required: true},
    descricao :{type: String, required: true}},
    {timestamps:true},
),'Paes')
module.exports = Pao