$(function(){
  var count = 0;
  $('#submit').click(function(event){
    var science = $('select#scienceExperiment').val();
    var universe = $('select#universe').val();
    var conflict = $('select#conflict').val();
    var lifePath = $('select#lifePath').val();
    var money = $('select#money').val();

        if(science === "yes") {
          $(count += 2);
          } else {
          (count);
          }

        if(universe === "yes") {
          $(count +=2);
          } else {
          (count);
          }

        if(conflict === "flipp") {
          $(count += 1);
        } else if(conflict === "summer") {
          $(count += 2);
        } else if (conflict === "unity") {
          $(count += 3);
        } else if (conflict === "slippery") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        if(lifePath === "flipp") {
          $(count += 1);
        } else if(lifePath === "summer") {
          $(count += 2);
        } else if (lifePath === "unity") {
          $(count += 3);
        } else if (lifePath === "slippery") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        if(money === "flipp") {
          $(count += 1);
        } else if(money === "summer") {
          $(count += 2);
        } else if (money === "unity") {
          $(count += 3);
        } else if (money === "slippery") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        // alert("Your money is: " + money);
        // $('#flipp').show();
        // console.log("hello and your count is " + count);
        if(count <= 4) {
          $("#flipp").show();
        } else if (count < 8 && count > 4) {
          $("#summer").show();
        } else if (count >= 8 && count < 12) {
          $('#unity').show();
        } else if (count < 16 && count >= 12) {
          $('#slippery').show();
        } else {
          $("#morty").show();
        }

        event.preventDefault();

      });
    });
