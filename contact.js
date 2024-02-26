//bot token
var telegram_bot_id = "6479428674:AAFHTIZhjFRQdcXJqejWMAO3WP5AJr0oMTI";
//chat id
var chat_id = 798615127;
var UEmail, UMessage, USubject;
var ready = function () {
    UEmail = document.getElementById("_Email").value;
    USubject = document.getElementById("_Subject").value;
    UMessage = document.getElementById("_Message").value;
    message ="\nEmail: " + UEmail + "\nSubject:" + USubject + "\nMessage:" + UMessage;
};
var contact = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("_Email").value = "";
    document.getElementById("_Subject").value = "";
    document.getElementById("_Message").value = "";
    return false;
};