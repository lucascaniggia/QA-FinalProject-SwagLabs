const MenuPage = require('../pageobjects/menu.page')

const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutPage = require('../pageobjects/checkout.page');

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

describe('Checking \'All Items\' page', ()=>{
    it('clicking on the ´All Items´ button should redirect to the inventory Page', () => {
        CheckoutPage.shoppingCart.click()
        browser.pause(2000)
        MenuPage.menuBtn.click()
        MenuPage.allItemsBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})

describe('Checking \'About\' page', ()=>{
    it('entering \'About\' link in sidebar menu', ()=>{
        InventoryPage.open()
        browser.pause(2000)
        MenuPage.menuBtn.click()
        MenuPage.aboutBtn.click()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://saucelabs.com/')
        browser.pause(1000)
    })
})

describe('Checking \'Reset App\' page', ()=>{
    it('clicking on the ´Reset App State´ button should clear the cart', () => {
        InventoryPage.open()
        browser.pause(2000)
        InventoryPage.addBackpack.click()
        browser.pause(1000)
        MenuPage.menuBtn.click()
        MenuPage.resetBtn.click()
        browser.pause(1000)

        expect(CheckoutPage.addedItemsBadge).toMatch('')
    })
})

describe('Checking \'Log Out\' button', () => {
    it('Clicking on LogOut button should log out and redirect to Login Page', () => {
        InventoryPage.open()
        browser.pause(1000)
        MenuPage.menuBtn.click()
        MenuPage.logOutBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
})