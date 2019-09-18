var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let AlunaSchema = new Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String },
    data_nascimento: { type: Date },
    signo: { type: String },
    ativa: { type: Boolean },
    habilidades: { type: Array }
  },
  {
    collection: "alunas",
    versionKey: false
  }
);

// cada model representa um documento
let alunas = mongoose.model("alunas", AlunaSchema);

module.exports = alunas;