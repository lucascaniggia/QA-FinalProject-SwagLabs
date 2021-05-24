const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const MenuPage = require('../pageobjects/menu.page');

describe('Swag Labs Website - End to End Test', () => {
    it('allow access - valid credentials', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it('sorting products (High to Low)', ()=> {
        InventoryPage.sortMenu.click()
        InventoryPage.sortByHighToLow.click()
        browser.pause(1000)

        expect(InventoryPage.firstItem).toHaveId('item_5_title_link')
        expect(InventoryPage.secondItem).toHaveId('item_4_title_link')
        expect(InventoryPage.thirdItem).toHaveId('item_1_title_link')
        expect(InventoryPage.fourthItem).toHaveId('item_3_title_link')
        expect(InventoryPage.fifthItem).toHaveId('item_0_title_link')
        expect(InventoryPage.sixthItem).toHaveId('item_2_title_link')
    });
    it('adding products to cart', ()=> {
        InventoryPage.addBackpack.click()
        browser.pause(1000)
        InventoryPage.addBikelight.click()
        browser.pause(1000)

        InventoryPage.cartBtn.click()
        browser.pause(2000)
    });
    it('removing products from cart, adding a new one and proceeding to checkout', ()=> {
        InventoryPage.contShoppBtn.click()
        browser.pause(1000)
        InventoryPage.removeBikelight.click()
        browser.pause(1000)
        InventoryPage.addJacket.click()
        browser.pause(1000)

        InventoryPage.cartBtn.click()
        browser.pause(2000)
        CheckoutPage.checkout()
        browser.pause(1000)
    });
    it('completing user\'s data', () => {
        CheckoutPage.firstNameInput.setValue('Lucas')
        CheckoutPage.lastNameInput.setValue('Caniggia')
        CheckoutPage.postalCodeInput.setValue('2000')
        CheckoutPage.continue()

        browser.pause(1000)
    });
    it('check correct sum of items prices (79.98)', () => {
        browser.pause(1000)
        expect(CheckoutPage.subtotal).toHaveTextContaining('79.98')
    })
    it('check correct sum of prices + tax - $6.40 - (86.38)', () => {
        browser.pause(1000)
        expect(CheckoutPage.subtotal).toHaveTextContaining('79.98')
        expect(CheckoutPage.tax).toHaveTextContaining('6.40')
        expect(CheckoutPage.total).toHaveTextContaining('86.38')
    })
    it('finishing purchase', () => {
        CheckoutPage.finishBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    });
    it('back to Home page after purchasing', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(InventoryPage.backToProductsBtn).toBeDisplayed();
        InventoryPage.backToProductsBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(1000)
    })
    it('logging out', () => {
        MenuPage.menuBtn.click()
        browser.pause(1000)
        MenuPage.logOutBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
})