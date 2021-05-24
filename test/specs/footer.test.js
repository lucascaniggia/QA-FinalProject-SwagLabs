const FooterPage = require('../pageobjects/footer.page');

const LoginPage = require('../pageobjects/login.page');

describe('Footer (Social Networks) Test', ()=> {
    it('access SwagLabs website', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it('test redirection to social network pages work correctly', ()=> {
        browser.pause(2000)
        FooterPage.twitterBtn.click()
        browser.switchWindow('https://twitter.com/saucelabs')
        expect(browser).toHaveUrl('https://twitter.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('Swag Labs')

        FooterPage.facebookBtn.click()
        browser.pause(2000)
        browser.switchWindow('Sauce Labs - Home | Facebook')
        expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('Swag Labs')

        FooterPage.linkedinBtn.click()
        browser.pause(2000)
        browser.switchWindow('linkedin.com')
        browser.pause(2000)
        expect(browser).toHaveUrlContaining('https://www.linkedin.com') 
        browser.switchWindow('Swag Labs')
    })
})