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
  console.log(dayjs().format('H'));
  function obtaintime(ev) {
    var val = ev.html();
    var valstring = JSON.stringify(val);
    console.log(valstring[1]);
    return valstring[1];
  };
  
 obtaintime(boxtime);
  //console.log(timevalue[0]);
  var scheduletime = $(".hour")
  console.log(dayjs().hour());
  var magic = document.querySelectorAll('.row')
   for (let i = 0; i < 24; i++) {
    var idnumber = document.getElementById(i);
    console.log(idnumber.id);
   //console.log($('.row')[4])
   //console.log($('#hour')[i]);
   console.log($(magic[i].id))
   console.log(parseFloat(magic[i].childNodes[1].innerHTML));
   if (idnumber.id > dayjs().hour()) {
    $(magic[i]).removeClass('row time-block past');
    $(magic[i]).addClass('row time-block future');
    console.log($(magic[i]))
  } else if (idnumber.id == dayjs().hour()) {
    $(magic[i]).removeClass('row time-block past');
    $(magic[i]).addClass('row time-block present');
    console.log($(magic[i]))
  } else if (idnumber.id < dayjs().hour()) {
    $(magic[i]).removeClass('row time-block future')
    $(magic[i]).addClass('row time-block past')
 }
}
for (let i = 0; i < 24; i++) {



  let input = $('.col-8')
  let save = $('button');
  console.log(save)
  answerindex = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
    19: '',
    20: '',
    21: '',
    22: '',
    23: ''
  }
   save[i].addEventListener('click', function(){
      let save = $('button');
      console.log(save)
      
      //save[i].addEventListener('click', function (){
        
        answerindex[i] = input[i].value;
        console.log(answerindex);
        console.log(input);
        var storesched = localStorage.setItem('user-sch-item', JSON.stringify(answerindex));
        var storedinput = localStorage.getItem('user-sch-item');
        var returnstorage = JSON.parse(storedinput);
        console.log(returnstorage[i]);
        input[i].value = returnstorage[i];
        console.log(JSON.parse(storedinput));

     // $(['data-time-row=11']) 
    }
    )
    var storedinput = localStorage.getItem('user-sch-item');
    var returnstorage = JSON.parse(storedinput);
    console.log(returnstorage[i]);
    input[i].value = returnstorage[i];


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
}



})
