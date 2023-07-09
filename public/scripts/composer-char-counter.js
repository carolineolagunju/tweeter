$(document).ready(function() {

  //targeting textarea element and listening to input
  $("textarea").on("input", function() {

    //fetching the current length of the text area
    let currentLength = $(this).val().length;
    const maxLength = 140;
    const remainingLength = maxLength - currentLength;

    //targeting the counter using DOM transverse
    const counter = $(this).parent().find(".counter");
    counter.text(remainingLength);

    //checking if the length of char is <= the specified maxLength
    if (currentLength <= maxLength) {
      $(counter).removeClass("counterRed ").addClass("counterBlack");
    } else {
      $(counter).removeClass("counterBlack").addClass("counterRed");
    }
  });
});