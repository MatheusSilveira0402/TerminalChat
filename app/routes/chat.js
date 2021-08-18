module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.chat.chatTerminal(application, req, res);   
    });


}