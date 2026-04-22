$(document).ready(function () {
  $("#modeBtn").click(function () {
    $("body").toggleClass("dark-mode light-mode");

    if ($("body").hasClass("dark-mode")) {
      $("#modeBtn").text("Mode clar");
    } else {
      $("#modeBtn").text("Mode fosc");
    }
  });
});