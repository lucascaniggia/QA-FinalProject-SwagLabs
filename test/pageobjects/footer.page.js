const Page = require('./page');

class FooterPage extends Page {

    // Social Networks buttons
    get facebookBtn() { return $('.social_facebook') }
    get twitterBtn() { return $('.social_twitter') } 
    get linkedinBtn() { return $('.social_linkedin') }

}

module.exports = new FooterPage();