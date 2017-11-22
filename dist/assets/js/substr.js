$(document).ready(function() {


  for(var i = 0; i < 10; i++) {
    debugger;
    var content = $('#content-' + i);
    content.text(content.text().substring(0,900) + "...");
  }

});
