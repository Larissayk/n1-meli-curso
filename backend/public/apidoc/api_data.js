define({ "api": [
  {
    "type": "get",
    "url": "/alunas",
    "title": "Lista todas as alunas",
    "group": "Alunas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "alunas",
            "description": "<p>Lista Alunas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n      \"habilidades\": [\n         \"FrontEnd\",\n        \"HTML\",\n       \"CSS\",\n      \"JavaScript\",\n     \"React\",\n    \"Wordpress\",\n    \"API\"\n],\n\"_id\": \"5d835f7589368f270023e8be\",\n\"nome\": \"Aluna 21\",\n\"data_nascimento\": \"1993-03-18T08:30:00.000Z\",\n\"signo\": \"Peixes\",\n\"ativa\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "alunas/routes.js",
    "groupTitle": "Alunas",
    "name": "GetAlunas"
  }
] });
