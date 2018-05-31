$(function(){
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoritecolor = $("#color").val();

    $(".name").text(name);
    $(".drink").text(beverage);
    $(".icecream").text(flavor);
    $(".birthday").text(dob);
    $(".color").text(favoritecolor);

    $("#results").show();
    
     event.preventDefault();
  });
});
