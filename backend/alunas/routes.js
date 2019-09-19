const express = require("express");
const alunas = require("./alunas.js");
const router = express.Router();

/**
 * @api {get} /alunas Lista todas as alunas
 * @apiGroup Alunas
 * @apiSuccess {Object[]} alunas Lista Alunas
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *       "habilidades": [
*          "FrontEnd",
*         "HTML",
*        "CSS",
*       "JavaScript",
*      "React",
*     "Wordpress",
*     "API"
* ],
* "_id": "5d835f7589368f270023e8be",
* "nome": "Aluna 21",
* "data_nascimento": "1993-03-18T08:30:00.000Z",
* "signo": "Peixes",
* "ativa": false
*}]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/", (req, res) => {
  try {
    alunas.find((error, response) => {
      if (error) {
        return res.status(500).send(error);
      }

      return res.status(200).send(response);
    });

  } catch (e) {
    console.log(e.code);
    res.status(e.code).send(e.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    alunas.findById(req.params.id, (err, postit) => {
      if (err) res.send(err);
      res.send(postit);
    });
  } catch (e) {
    res.status(e.code).send(e.message);
  }
});

router.post("/", (req, res) => {
  let newPostit = new alunas({
    nome: req.body.nome,
    data_nascimento: req.body.data_nascimento,
    signo: req.body.signo,
    ativa: req.body.ativa,
    habilidades: req.body.habilidades
  });

  try {
    newPostit.save(err => {
      if (err) {
        res.send(err);
      }
      res.send(newPostit);
    });
  } catch (e) {
    res.status(e.code).send(e.message);
  }
});

module.exports = router;
