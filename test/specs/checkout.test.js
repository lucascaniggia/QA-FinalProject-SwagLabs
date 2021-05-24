const CheckoutPage = require('../pageobjects/checkout.page')

const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Accessing the webpage (standard_user)', () => {
    beforeEach('browser pause', ()=> {
        browser.pause(1000)
    });
    it('allow access', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
})

describe('Filling customer\'s data in Checkout', () => {
    it('adding products to cart', ()=> {
        InventoryPage.addBackpack.click()
        browser.pause(1000)
        InventoryPage.addBikelight.click()
        browser.pause(1000)

        InventoryPage.cartBtn.click()
        browser.pause(2000)

        CheckoutPage.checkout()
        browser.pause(1000)
    });
    it('verify Checkout page is correctly displayed', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION')
    })
    it('filling blanks wrongly - 1 (firstName)', () => {
        CheckoutPage.firstNameInput.setValue('')
        CheckoutPage.lastNameInput.setValue('Caniggia')
        CheckoutPage.postalCodeInput.setValue('2000')
        CheckoutPage.continue()

        expect(CheckoutPage.errorMsgBtn).toExist
        browser.pause(1000)
    })
    it('filling blanks wrongly - 2 (lastName)', () => {
        CheckoutPage.cancel()
        CheckoutPage.checkout()
        CheckoutPage.firstNameInput.setValue('Lucas')
        CheckoutPage.lastNameInput.setValue('')
        CheckoutPage.postalCodeInput.setValue('2000')
        CheckoutPage.continue()

        expect(CheckoutPage.errorMsgBtn).toExist
        browser.pause(1000)
    })
    it('filling blanks wrongly - 3 (postalCode)', () => {
        CheckoutPage.cancel()
        CheckoutPage.checkout()
        CheckoutPage.firstNameInput.setValue('Lucas')
        CheckoutPage.lastNameInput.setValue('Caniggia')
        CheckoutPage.postalCodeInput.setValue('')
        CheckoutPage.continue()

        expect(CheckoutPage.errorMsgBtn).toExist
        browser.pause(1000)
    })
    it('filling blanks correctly', () => {
        CheckoutPage.cancel()
        CheckoutPage.checkout()
        CheckoutPage.firstNameInput.setValue('Lucas')
        CheckoutPage.lastNameInput.setValue('Caniggia')
        CheckoutPage.postalCodeInput.setValue('2000')
        CheckoutPage.continue()

        expect(CheckoutPage.errorMsgBtn).not.toExist
        browser.pause(1000)
    })
    // Test will pass due to a lack of input's validation.
});

describe('Verify correct subtotal, tax and total prices', () => {
    it('check correct sum of items prices (29.99 + 9.99 = 39.98)', () => {
        browser.pause(1000)

        expect(CheckoutPage.subtotal).toHaveTextContaining('39.98')
    })
    it('check correct sum of prices + tax (39.98 + 3.20 = 43.18)', () => {
        browser.pause(1000)

        expect(CheckoutPage.subtotal).toHaveTextContaining('39.98')
        expect(CheckoutPage.total).toHaveTextContaining('43.18')
    })
});

describe('Cancel button', () => {
    it('Cancel Button works correctly, redirecting back to inventory page', () => {
        CheckoutPage.cancelBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
});

describe('Finish button test - correct purchase', () => {
    it('adding products and proceed to cart - checkout', () => {
        InventoryPage.cartBtn.click()
        browser.pause(1000)

        CheckoutPage.checkout()
        browser.pause(1000)
        CheckoutPage.firstNameInput.setValue('Lucas')
        CheckoutPage.lastNameInput.setValue('Caniggia')
        CheckoutPage.postalCodeInput.setValue('2000')
        CheckoutPage.continue()
    });
    it('Finish button works correctly, leading to a complete-chekout page', () => {
        CheckoutPage.finishBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    })
});

describe ('Complete checkout Page', () => {
    it('verify Checkout page is displayed and its title', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(CheckoutPage.title).toHaveText('CHECKOUT: COMPLETE!')
    })
})

describe('Verify purchase information is shown in the Complete Checkout Page', () => {
    it('information related to the complete purchase proccess should be displayed correctly', () => {
        browser.pause(1000)
        expect(CheckoutPage.header).toBeDisplayed()
        expect(CheckoutPage.orderText).toBeDisplayed()
        expect(CheckoutPage.ponyExpressImg).toBeDisplayed()
    })
})

describe('Back Home button', () => {
    it('Back Home button is enabled and redirect back to the inventory page', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(InventoryPage.backToProductsBtn).toBeDisplayed();
        InventoryPage.backToProductsBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(1000);
        browser.reloadSession()
    })
})