module.exports = function(application){
   
    application.get('/chat', function(req, res){
        application.app.controllers.chat.chatTerminal(application, req, res);   
    });


    application.get('/', function(req, res){
        application.app.controllers.index.getIndex(application, req, res);   
    });

}