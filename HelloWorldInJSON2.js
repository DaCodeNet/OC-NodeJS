// Code identique au pr�c�dent

var instructionsNouveauVisiteur = function(req, res) {
  res.writeHead(200, {"Content-Type": "text/json"});
  res.end('Salut tout le monde !');
}

var server = http.createServer(instructionsNouveauVisiteur);