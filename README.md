# Tweeter Project

Tweeter is a simple, single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3.

It allows user to compose tweet in real time.

It is built with a responsive design where, if a user shrinks down the page width to below 1024px, the layout switches
from a two-column layout to a one-column layout.

See screen-shots below for page layout on both desktop and mobile as well as error messages for when tweet is empty or too long. 

## Final Product
!["screenshot of empty tweet"](/docs/Screenshot%202023-07-19%20101043.png)
!["screenshot of too long tweet"](/docs/Screenshot%202023-07-19%20102810.png)
!["screenshot of new tweet on a mobile or tablet"](/docs/Screenshot%202023-07-19%20104153.png)
!["screenshot of page layout on a mobile or tablet"](/docs/Screenshot%202023-07-19%20104223.png)
!["screenshot of page layout on a desktop"](/docs/Screenshot%202023-07-19%20104321.png)

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