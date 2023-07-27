const mongoose = require('mongoose');

const SolicitudSchemas = new mongoose.Schema(
    {
        name:{
            type: String
        },
        lastname:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique: true
        },
        suggestion:{
            type: String
        }
    }
)

module.exports = mongoose.model('solicitudes', SolicitudSchemas);