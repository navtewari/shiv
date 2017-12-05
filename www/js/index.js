$("#pause1").hide();
$("#pause2").hide();
$("#pause3").hide();
var audioElement = document.createElement('audio');


audioElement.addEventListener('ended', function () {
    this.play();
}, false);

audioElement.addEventListener("canplay", function () {
    $("#length").text("Duration:" + audioElement.duration + " seconds");
    $("#source").text("Source:" + audioElement.src);
    $("#status").text("Status: Ready to play").css("color", "green");
});

audioElement.addEventListener("timeupdate", function () {
    $("#currentTime").text("Current second:" + audioElement.currentTime);
});

$('#play1').click(function () {
    audioElement.setAttribute('src', 'mp3/ShivaLingastakam.mp3');
    audioElement.play();
    $("#status").text("Status: Playing");
    $("#play1").hide();
    $("#pause1").show();
    
    $("#play2").show();
    $("#pause2").hide();
    
    $("#play3").show();
    $("#pause3").hide();
});

$('#pause1').click(function () {    
    audioElement.currentTime = 0;
    audioElement.pause();
    $("#status").text("Status: Paused");
    $("#play1").show();
    $("#pause1").hide();
});

$('#play2').click(function () {
    audioElement.setAttribute('src', 'mp3/ShivPanchaksharStotra.mp3');
    audioElement.play();
    $("#status").text("Status: Playing");
    $("#play2").hide();
    $("#pause2").show();
    
    $("#play1").show();
    $("#pause1").hide();
    
    $("#play3").show();
    $("#pause3").hide();
});

$('#pause2').click(function () {    
    audioElement.currentTime = 0;
    audioElement.pause();
    $("#status").text("Status: Paused");
    $("#play2").show();
    $("#pause2").hide();
});


$('#play3').click(function () {
    audioElement.setAttribute('src', 'mp3/VedasaaraShivaStotram.mp3');
    audioElement.play();
    $("#status").text("Status: Playing");
    $("#play3").hide();
    $("#pause3").show();
    
    $("#play1").show();
    $("#pause1").hide();
    
    $("#play2").show();
    $("#pause2").hide();
});

$('#pause2').click(function () {    
    audioElement.currentTime = 0;
    audioElement.pause();
    $("#status").text("Status: Paused");
    $("#play3").show();
    $("#pause3").hide();
});

$('#restart').click(function () {
    audioElement.currentTime = 0;
});