# Tweeter Project

Tweeter is a simple, single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3.

It allows user to compose tweet in real time.

It is built with a responsive design where, if a user shrinks down the page width to below 1024px, the layout switches
from a two-column layout to a one-column layout.

See screen-shots below for page layout on both desktop and mobile as well as error messages for when tweet is empty or too long. 

## Final Product
!["screenshot of too long tweet"](/docs/long-tweet.png)
Screenshot of a too long tweet with an error message


!["screenshot of page layout on a desktop"](/docs/desktop-layout.png)
Screenshot of the page layout on a desktop


!["screenshot of empty tweet"](/docs/empty-tweet.png)
Screenshot of an empty tweet with error message


!["screenshot of new tweet on a mobile or tablet"](/docs/new-tweet.png)
Screenshot of a new tweet on a mobile or tablet


!["screenshot of page layout on a mobile or tablet"](/docs/mobile-layout.png)
Screenshot of the page layout on a mobile or tablet


## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- md5