var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous �tes � l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous �tes dans la cave � vins, ces bouteilles sont � moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('H� ho, c\'est priv� ici !');
    }
    res.end();
});
server.listen(8080);