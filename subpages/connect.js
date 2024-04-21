//bot token
var telegram_bot_id = "7043572197:AAH41xKc_avaqr8ryAYafrY0em6sJfOVL24";
//chat id
var chat_id = 2117021328;
var UName, ULname, UEmail, UPhone, U10th, U12th, UGraduation, USubject1, USubject2, USubject3, UHobby1, UHobby2, UHobby3, UAge, UGender, UCountry, ULanguage1, ULanguage2, ULanguage3, UObjective1, UObjective2, UObjective3, UFeedback;
var ready = function () {
    UName = document.getElementById("fname").value;
    ULname = document.getElementById("lname").value;
    UEmail = document.getElementById("email").value;
    UPhone = document.getElementById("phone").value;

    U10th = document.getElementById("10th").value;
    U12th = document.getElementById("12th").value;
    UGraduation = document.getElementById("graduation").value;
    
    USubject1 = document.getElementById("subject1").value;
    USubject2 = document.getElementById("subject2").value;
    USubject3 = document.getElementById("subject3").value;

    UHobby1 = document.getElementById("h1").value;
    UHobby2 = document.getElementById("h2").value;
    UHobby3 = document.getElementById("h3").value;

    UGender = document.getElementById("gender").value;
    UAge = document.getElementById("age").value;
    UCountry= document.getElementById("country").value;

    ULanguage1 = document.getElementById("language1").value;
    ULanguage2 = document.getElementById("language2").value;
    ULanguage3 = document.getElementById("language3").value;

    UObjective1 = document.getElementById("o1").value;
    UObjective2 = document.getElementById("o2").value;
    UObjective3 = document.getElementById("o3").value;

    UFeedback = document.getElementById("feedback").value;

    message = "\nName: " + UName + "\nL.Name:" + ULname + "\nEmail:" + UEmail + "\n10th:" + U10th + "\n12th:" + U12th + "\nGraduation:" + UGraduation +
    "\nSubject1:" + USubject1 + "\nSubject2:" + USubject2 + "\nSubject3:" + USubject3 + "\nHobby1" + UHobby1 + "\nHobby2" + UHobby2  + "\nHobby3" + UHobby3 +
    "\nGender:" + UGender + "\nAge:" + UAge + "\nCountry:" + UCountry + "\nLanguage1:" + ULanguage1 + "\nLanguage2:" + ULanguage2 + "\nLanguage3:" + ULanguage3 +
    "\nObjective1:" + UObjective1 + "\nObjective2:" + UObjective2 + "\nObjective3:" + UObjective3 + "\nFeedback:" + UFeedback;    
};
var connect = function () {
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
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("10th").value = "";
    document.getElementById("12th").value = "";
    document.getElementById("graduation").value = "";
    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("h1").value = "";
    document.getElementById("h2").value = "";
    document.getElementById("h3").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
    document.getElementById("language1").value = "";
    document.getElementById("language2").value = "";
    document.getElementById("language3").value = "";
    document.getElementById("o1").value = "";
    document.getElementById("o2").value = "";
    document.getElementById("o3").value = "";
    document.getElementById("feedback").value = "";
    return false;
};