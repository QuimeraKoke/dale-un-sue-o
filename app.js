var express = require('express'),
  http = require('http'),
  conf = require('./conf.js'),
  router = express.Router(),
  app = express(),
  server;
/*
  https://spreadsheets.google.com/feeds/list/PUT-KEY-HERE/od6/public/values?alt=json
  https://spreadsheets.google.com/feeds/list/1EGMMMbg3apYsEhSSexFEpudIdWMjliM6LjqhXLAYS7U/od6/public/values?alt=json
*/

/**
* @namespace deseo
*/

/**
* Retorna los deseos de la db en json: <br/> <br/>
* Formato: <br/> nombre(str), apellido(str), descripcion(str), foto (url), deseo(str)
*
* @memberof deseo
* @function get
*
*
*/

router.route('/deseo').get(function(req, res) {
  http.request({
    host: 'spreadsheets.google.com',
    path: '/feeds/list/'+conf.spreadsheet+'/od6/public/values?alt=json'

  }, function(response) {
    var data = '',
      childs;

    response.on('data', function(data_piece) {
      data += data_piece;
    });

    response.on('end', function() {
      if(data.length) {
        data = JSON.parse(data);

        childs = data.feed.entry.map(function(doc) {
          return {
            nombre: doc.gsx$nombre.$t,
            apellido: doc.gsx$apellido.$t,
            descripcion: doc.gsx$descripcion.$t,
            foto: doc.gsx$foto.$t,
            deseo: doc.gsx$deseo.$t
            };
        });

        res.json(childs);
      }
      else
        res.json({err:err});
    });

  }).end();
});

app.use(router);
server = app.listen(conf.port);
console.log('servidor escuchando en el puerto: '+conf.port);
