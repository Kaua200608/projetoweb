const mongoose = require('../db/conecta')
const {Schema} = mongoose

const Adicional = mongoose.model('Adicional',
new Schema({
    sku: {type: String, required: true},
    descricao :{type: String, required: true}},
    {timestamps:true},
),'Adicionais')
module.exports = Adicional