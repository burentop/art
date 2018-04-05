$(document).ready(function() {
  $("#show-image").click(function() {
    $("#show-image").after("<img id='added' src='img\/art.jpg'></img>");
    $("#show-image").toggle();
    $("#initially-hidden").toggle();
    $("#added").click(function() {
      $(this).remove();
      $("#initially-hidden").toggle();
      $("#show-image").toggle();
    });
  });
});
