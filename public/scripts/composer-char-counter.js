$(document).ready(function() {

  //targeting textarea element and listening to keypress
  $("textarea").keypress(function() {

    //fetching the current length of the text area
    let currentLength = $(this).val().length + 1;
    const maxLength = 140;
    const remainingLength = maxLength - currentLength;

    //targeting the counter
    const targetElement = $(".counter");

    //checking if the length of char is <= the specified maxLength
    if (currentLength <= maxLength) {
      targetElement.text(remainingLength);
    } else if (currentLength > maxLength) {
      targetElement.text(remainingLength).css("color", "red");
    }
  });
});