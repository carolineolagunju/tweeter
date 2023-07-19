/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //function to display tweet time
  const formatTimestamp = function(timestamp) {
    return timeago.format(timestamp);
  };



  //function to prevent cross site scripting from untrusted user
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };



  //function to generate tweet <article> that returns the HTML structure of individual tweet
  const createTweetElement = function(tweetObj) {
    //create the <article> (html structure) for the tweet
    const $tweet = $(`<article class="tweet">
          <header>
            <span>
              <img src=${tweetObj.user.avatars}>
              <span>${tweetObj.user.name}</span>
          </span>
            <span class="username">${tweetObj.user.handle}</span>
          </header>
          <p>${escape(tweetObj.content.text)}</p>
          <hr>
          <footer class="footer">
            <span>${formatTimestamp(tweetObj.created_at)}</span>
            <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-sharp fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>`);

    //returning the tweet
    return $tweet;
  };



  //function to render tweets
  const renderTweets = function(tweetArr) {
    $("#tweet-container").empty();
    //loop through arr of tweets Object
    for (const singleTweet of tweetArr) {
      //calling createTweetElement on each object
      const tweet = createTweetElement(singleTweet);
      //append the tweet to the tweet container
      $("#tweet-container").prepend(tweet);
    }
  };



  //check if tweet is empty or over 140 characters
  const tweetLength = () => {
    const tweetText = $(".new-tweet textarea").val();

    if (tweetText === '' || tweetText === null) {

      //empties any existing error msg
      $(".error-msg1").empty();
      //display error msg if input is empty
      $(".error-msg1").hide().delay().slideDown().append("⚠ Tweet cannot be empty!");
      return false;

    } else if (tweetText.length > 140) {
      //empties any existing error msg
      $(".error-msg1").empty();
      //display error msg if input is >140
      $(".error-msg1").hide().delay().slideDown().append("⚠ Tweet content is too long, keyword must be no longer than 140 characters!");
      return false;

    } else {
      //empties any existing error msg
      $(".error-msg1").slideUp();
      return true;
    }
  };



  //post request to /tweets
  $(".post-tweet").on("submit", function(event) {
    //prevent page from reloading
    event.preventDefault();

    const isTweetValid = tweetLength();
    if (isTweetValid) {
      //serilizing the tweet content
      const tweet = $(".post-tweet").serialize();
      $.post("/tweets", tweet).then(() => {
        //clear the text area after submitting a tweet
        $("#tweet-text").val("");
        //reset counter back to 140
        $(".counter").text(140);
        loadTweets();
      });
    }
  });



  //get request route to /tweets
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function(data) {
        renderTweets(data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  };
  loadTweets();

});