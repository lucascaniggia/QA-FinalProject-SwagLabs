const Page = require('./page');

class LoginPage extends Page {

    // Login's input and button selectors
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get loginBtn() { return $('#login-button') }

    // Errors and success messages selectors
    get errorAlert() { return $('button[class="error"]') }
    // get passAlert() { return $('#') }
    // get succesAlert() { return $('#') }

    // Redirection to 'login page' button
    // get redirectLink() { return $('') }
    
    open() {
        return super.open('');
    }
    login() {
        this.loginBtn.click()
    }
    redirect() {
        this.redirectLink.click()
    }
}

module.exports = new LoginPage();