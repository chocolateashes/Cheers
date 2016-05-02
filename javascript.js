var clicks = 0;
var textbox = "";
var submittername = "";

$(document).ready(function(){
var clicked = false
 $('#like').click(function () {
     if (clicked == false) {
         $(".smile").animate({
             top: '-25vh'
         }, 450);
             $(".smile").animate({
             top: '-10vh'
         }, 450);
         clicked = false;
     }
    $.ajax({
            type: "POST",
            url: 'holding.php',
            data: "profileid=" + profileid,
            success: function()
            {
            setTimeout(function(){
             location.reload();
                },400);
            }
        });
 });
$('#meh').click(function (){
    var clicked = false
     if (clicked == false) {
         $(".smile").animate({
             top: '-5vh'
         }, 450);
             $(".smile").animate({
             top: '-30vh'
         }, 450);
         clicked = false;
     }
    setTimeout(function(){
         location.reload();
    },400);

});


$(".launch").click(function(){
    if(clicks%2 == 0) {
        grab();
    var $box = $(".Textbox");
    $box.show();
    document.getElementById("change").innerHTML = "Submit";
    $('.launch').attr('id','launchsubmit');
    clicks += 1;
        console.log(clicks);
    }
    else{
        var $box = $(".Textbox");
        $.ajax({
            type: "POST",
            url: 'update.php',
            data: {"text":textbox, "name":submittername},
            success: function()
            {
            setTimeout(function(){
             location.reload();
                },400);
            }
        });
        $box.hide();
        document.getElementById("launchsubmit").innerHTML = "Submit what makes you Happy!";
        $('.launch').attr('id','change');
        clicks += 1;
        console.log(clicks);
    }
    $(this).data("clicks",!clicks);
});



});
function grab(){
    var x = document.getElementById("submissionform");
    textbox = x.elements[0].value;
    submittername = x.elements[1].value;
};

function createTextbox(){
    var newText = document.createElement('div');
    newText.className = "Textbox";
    document.getElementById('submissiontext').appendChild(newText);
};