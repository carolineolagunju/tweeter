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
          <p>${tweetObj.content.text}</p>
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
    
    //returning the tweet html
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



  //post request to /tweets 
  $(".post-tweet").on("submit", function(event) {
    //serilizing the tweet content
    const tweet = $(".post-tweet").serialize();
    $.post("/tweets", tweet).then(() => {
      loadTweets();
    });
    //prevent page from reloading
    event.preventDefault();
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