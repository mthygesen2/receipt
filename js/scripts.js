$(function(){

  $("form#info").submit(function(event) {

    var myName = $("input#name").val();
    var myAddress = $("input#address").val();
    var myCity = $("input#city").val();
    var myState = $("input#state").val();

    $("#rname").text(myName);
    $("#raddress").text(myAddress);
    $("#rcity").text(myCity);
    $("#rstate").text(myState);

    $(".receipt").show();
    event.preventDefault();
  });

});
  // var upperString.toUpperCase() = var upperString;
