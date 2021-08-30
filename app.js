/* importar as configurações do servidor */
var app = require('./config/server');

var port = 80
/* parametrizar a porta de escuta */
app.listen(port, function(){
	console.log('Servidor online na porta:',port);
})
