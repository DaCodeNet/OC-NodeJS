// Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
  res.writeHead(200);
  res.write('Salut tout le monde !');
  res.end('<footer>Voici un paragraphe <strong>HTML</strong> !</footer>');
}

var server = http.createServer(instructionsNouveauVisiteur);