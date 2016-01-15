$(function () {
  $("#startbtn").click(function(){
    $(".questions").show();
  });
});


$(function(){
  var count = 0;
  $('#submit').click(function(event){

    var temperature = $('select#temperature').val();
    var energy = $('select#energy').val();
    var activity = $('select#activity').val();
    var time = $('select#time').val();
    var company = $('select#company').val();

        if(temperature === "hot") {
          $(count += 6);
        } else if (temperature === "apathetic") {
          $(count += 3);
        } else {
          $(count)
        }

        if(energy === "nature") {
          $(count += 5);
        } else if (energy === "mix"){
          $(count += 3);
        } else {
          $(count += 2);
        }

        if(activity === "relax") {
          $(count += 6);
        } else if(activity === "mix") {
          $(count += 3);
        } else {
          $(count += 1);
        }

        if(time === "history") {
          $(count += 5);
        } else if(time === "both") {
          $(count += 3);
        } else {
          $(count += 2);
        }

        if(company === "family") {
          $(count += 6);
        } else if(company === "couple") {
          $(count += 3);
        } else {
          $(count += 1);
        }



      //  $(".results").show();
      //   alert("Your count is: " + count);
      //   // $('#flipp').show();
        console.log("hello and your count is " + count);
        if(count <= 6) {
          $("#rovaniemi").show();
        } else if (count < 13 && count > 6) {
          $("#quebec").show();
        } else if (count <=19  && count >= 13) {
          $('#dublin').show();
        } else if (count <=24 && count >= 19) {
          $('#tokyo').show();
        } else {
          $("#barbados").show();
        }

$(function(){
        $('.endbtn').click(function() {
            location.reload();
        });
      });
        event.preventDefault();

      });
    });
