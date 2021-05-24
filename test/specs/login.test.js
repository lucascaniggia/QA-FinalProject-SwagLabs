const LoginPage = require('../pageobjects/login.page');

describe('Sauce Demo Test - 1', () => {
    it('allow access given valid credentials', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
});

describe('Sauce Demo Test - 2', () => {
    it('deny acces given an invalid username', () => {
        LoginPage.open()
        LoginPage.username.setValue('lucascaniggia')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.errorAlert).toExist
    });
});

describe('Sauce Demo Test - 3', () => {
    it('deny acces given an invalid password', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret.sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.errorAlert).toExist
    });
});

describe('Sauce Demo Test - 4', () => {
    it('deny acces given an invalid mail and password', () => {
        LoginPage.open()
        LoginPage.username.setValue('lucascaniggia')
        LoginPage.password.setValue('secret.sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.errorAlert).toExist
    });
});

describe('Sauce Demo Test - 5', () => {
    it('deny acces given blank mail and valid password', () => {
        LoginPage.open()
        LoginPage.username.setValue('')
        LoginPage.password.setValue('secret.sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.username).not.toHaveText
        expect(LoginPage.errorAlert).toExist
    });
    it('deny acces given valid mail and blank password', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.password).not.toHaveText
        expect(LoginPage.errorAlert).toExist
    });
    it('deny acces given blank mail and password', () => {
        LoginPage.open()
        LoginPage.username.setValue('')
        LoginPage.password.setValue('')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.username).not.toHaveText
        expect(LoginPage.password).not.toHaveText
        expect(LoginPage.errorAlert).toExist
    });
});

describe('Sauce Demo Test - 6', () => {
    it('check multiple user\'s type - 1 (locked-out)', () => {
        LoginPage.open()
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(LoginPage.errorAlert).toExist
    })
    it('check multiple user\'s type - 2 (problem)', () => {
        LoginPage.open()
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('check multiple user\'s type - 3 (performance glitch)', () => {
        LoginPage.open()
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
});