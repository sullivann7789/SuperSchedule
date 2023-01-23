// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  setInterval(function () {
   const now = dayjs();
   var day =  $("#currentDay").text(now.format("MMMM D, YYYY"));
   var time = $("#currenttime").text(now.format("h:mm:ss A"));
  }, 1000);
  const now = dayjs();
  var day =  $("#currentDay").text(now.format("MMMM D, YYYY"));
  var time = $("#currenttime").text(now.format("h:mm:ss A"));
  var timevalue = $("#currenttime").html();
  var timevaluestringify = JSON.stringify(timevalue);
  var boxtime = $(".col-2");
  function obtaintime(ev) {
    var val = ev.html();
    var valstring = JSON.stringify(val);
    console.log(valstring[1]);
    return valstring[1];
  };
  
 obtaintime(boxtime);
  //console.log(timevalue[0]);

  var magic = document.querySelectorAll('.row')
   for (let i = 0; i < 24; i++) {
   //console.log($('.row')[4])
   
   //console.log($('#hour')[i]);

   console.log(magic[i]);
    if (timevaluestringify[0] == obtaintime(boxtime)) {
    $(".row").removeClass('row time-block past').addClass('row time-block present');
    
  }

   magic[i].addEventListener('click', function(){
    if ($(this).hasClass('row time-block future')) {
      $('.btn').addEventListener('click', function (ev){
        ev.preventDefault();
        let input = $('.col').html();
        localStorage.setItem('user-sch-item', input);
        var storedinput = localStorage.getItem('user-sch-item');
        input = storedinput;
      })
      $(this).addClass('row time-block future');
  } else{
      $(this).removeClass('row time-block future');
      $(this).addClass('row time-block past');
    }
   });

  }

   //$(".row").css("color", "rgb(107, 207, 104)");
   console.log($('.row'));
  //}


  
  

  //create a for iteration that changes each div[i]class value based on time of currenttime.text h for 12am-11pm


  //$('#hour').addClass('row time-block future');



//if ( $('#hour').hasClass('') )
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
})
