# RadiumRocket's 'Become a QA Automation' Final Project - Swag Labs site Full Testing

Welcome to my final project for RadiumRocket's 'Become a QA Automation' course.
Here you'll find automated UI tests for [SauceLabs's testing webpage](https://www.saucedemo.com/) based on [WebdriverIO](https://webdriver.io/) testing framework.

## Description

This project consists of UI automated tests for a demo webpage.
Tests will be functional to test the webpage usage as deeply as possible.

100% of the tests were made with [WebDriverIO](https://webdriver.io/) based on Jasmine (using sync mode). I considered this the best way to do, although sync mode won't be supported anymore (deprecation starts in 2022).

In this repository you will find:

- Tests for the Login page (with valid and invalid credentials and for each one of the users).
- Tests for multiple features in Inventory page (adding and removing items to cart from different sections of the webpage, sorting products, visiting social media links, reseting the app's state, logging out). All of them were tested using standard_user session.
- Tests for Checkout page (checking out with valid and invalid credentials), with a standard_user session.
- An E2E (_End to End_) test using standard_user session (Logging in, sorting products, adding them to the cart, removing one, checking out and logging out).

Every test is organized by corresponding 'describe' and 'it's for a better understanding of the reports. Also there are some spaces between lines of code for a better reading experience.

## Getting Started

### Dependencies

- [Node.js version 12 or up](https://nodejs.org/en/) is a pre-requisite.
- [Google chrome](https://www.google.com/chrome/?brand=BNSD&gclid=Cj0KCQjw16KFBhCgARIsALB0g8LepNdLaZtxkPxgXo3piPweP7NjQQ76azzg9XDmbH5ZESeb_4kFTn4aAjCaEALw_wcB&gclsrc=aw.ds) is preferred
- [VS Code](https://code.visualstudio.com/) or any other code editor is necessary.

### Installing

- Download the project from this repository
- Run [git bash](https://git-scm.com/) (or any other) terminal on the project's folder
- Run `npm install` on the terminal to install every dependency of the package.json
- Run `code .` to see the code

You're ready to run the tests! :smile:

### Executing program

You should use the test's commands on the terminal you previously runned on the project's folder.

- For running **Login test**: You should use `npm run test:login.test.js`
- For running **Inventory test**: You should use `npm run test:inventory.test.js`
- For running **Menu test**: You should use `npm run test:menu.test.js`
- For running **Footer test**: You should use `npm run test:footer.test.js`
- For running **Checkout test**: You should use `npm run test:checkout.test.js`
- For running **End to End test**: You should use `npm run test:swaglabsE2E.test.js`

...or just type `npm run test` and it'll run all the tests one by one! :wink:

## Some info you should know

#### 'Pageobjects'

Here you will find the different files for each part of the webpage and their corresponding selectors.

#### 'Specs'

In this folder you will find the different files for the tests.

#### Clarifications:

You will find some little part of code is **commented**. The main reason is that there are some tests that are valid but break the running of rest of the tests because the webpage have some bugs and doesn't return the expected behavior. I decided to left them there because they're correctly written but, in order to let the tests continue running properly, I commented the ones that causes the automation to break.  
For example:

- On inventory.test.js 'Test reset app erases every product added to the cart': When reseting the app, the cart empties, so, the 'Remove' buttons of products shouldn't be displayed because this means that the product is still added to the cart. As this is a bug of the page, I decided to comment these lines of code so the test can still run and doesn't break.
- On inventory.test.js 'LinkedIn Test': As the Linkedin page detects the user is not logged in, Linkedin page itself redirects to another URL, so the test breaks. As this test won't pass automated unless you make a login test for LinkedIn first, I decided to comment these lines so the test can continue running.
- On Checkout.test.js : It doesn't make sense that the user can checkout with an empty cart, as this test breaks the automation because of the bug, I decided to comment it so the tests can continue running.

In **'Checkout'** tests, there are some things to consider... As it is a demo page, it doesn't have that much restrictions to data provided
so the only thing I could test was that it shouldn't let you checkout with missing information. Data isn't valid though, if this was a real
webpage, it shouldn't let you checkout with false data, with numbers instead of letters for names and/or special characters in the fields.

## Author

Lucas Caniggia :nerd_face:

## Special thanks :pray:

- To all of the teachers, that shared their knowledge.
- To all my mentors, specially Diego and Rodrigo, that were always there to explain, teach and answer questions no matter time and date.
- To my course classmates, that were the perfect help and company anyone would expect! (specially Mica, Palo and Meli :wink: )
- To all of RadiumRocket's team, for their great effort on making this wonderful course.
