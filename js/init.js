(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function makeTimer() {
        var endTime = new Date("11 December 2020 08:20:00 GMT+0530");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span class='time'>Days</span>");
        $("#hours").html(hours + "<span class='time'>Hours</span>");
        $("#minutes").html(minutes + "<span class='time'>Minutes</span>");
        $("#seconds").html(seconds + "<span class='time'>Seconds</span>");

    }

    setInterval(function () {
        makeTimer();
    }, 1000);
