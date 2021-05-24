const InventoryPage = require('../pageobjects/inventory.page');

const LoginPage = require('../pageobjects/login.page');

describe('Sauce Demo Test - 1 (standard_user)', () => {
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
    it('test \'sorting\' filters - A to Z', ()=> {
        InventoryPage.sortMenu.click()
        InventoryPage.sortByNameAZ.click()
        browser.pause(1000)

        expect(InventoryPage.firstItem).toHaveId('item_4_title_link')
        expect(InventoryPage.secondItem).toHaveId('item_0_title_link')
        expect(InventoryPage.thirdItem).toHaveId('item_1_title_link')
        expect(InventoryPage.fourthItem).toHaveId('item_5_title_link')
        expect(InventoryPage.fifthItem).toHaveId('item_2_title_link')
        expect(InventoryPage.sixthItem).toHaveId('item_3_title_link')
    });
    it('test \'sorting\' filters - Z to A', ()=> {
        InventoryPage.sortMenu.click()
        InventoryPage.sortByNameZA.click()
        browser.pause(1000)

        expect(InventoryPage.firstItem).toHaveId('item_3_title_link') 
        expect(InventoryPage.secondItem).toHaveId('item_2_title_link')
        expect(InventoryPage.thirdItem).toHaveId('item_5_title_link')
        expect(InventoryPage.fourthItem).toHaveId('item_1_title_link')
        expect(InventoryPage.fifthItem).toHaveId('item_0_title_link')
        expect(InventoryPage.sixthItem).toHaveId('item_4_title_link')
    });
    it('test \'sorting\' filters - Low to High', ()=> {
        InventoryPage.sortMenu.click()
        InventoryPage.sortByLowToHigh.click()
        browser.pause(1000)

        expect(InventoryPage.firstItem).toHaveId('item_2_title_link')
        expect(InventoryPage.secondItem).toHaveId('item_0_title_link')
        expect(InventoryPage.thirdItem).toHaveId('item_1_title_link')
        expect(InventoryPage.fourthItem).toHaveId('item_3_title_link')
        expect(InventoryPage.fifthItem).toHaveId('item_4_title_link')
        expect(InventoryPage.sixthItem).toHaveId('item_5_title_link')
    });
    it('test \'sorting\' filters - High to Low', ()=> {
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
    it('testing access to item\'s description page by title-click', ()=> {
        InventoryPage.bpackDescrBtn.click()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')

        InventoryPage.backToProducts()
        browser.pause(1000)
    
        InventoryPage.backlightDescrBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.boltTshirtDescrBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.jacketDescrBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.onesieDescrBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.redTshirtDescrBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3')
    });
    it('testing access to item\'s description page by img-click', ()=> {
        InventoryPage.backToProducts()
        InventoryPage.bpackImgBtn.click()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')

        InventoryPage.backToProducts()
        browser.pause(1000)
    
        InventoryPage.backlightImgBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.boltTshirtImgBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.jacketImgBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.onesieImgBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2')

        InventoryPage.backToProducts()
        browser.pause(1000)

        InventoryPage.redTshirtImgBtn.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3')
    });
    it('testing access to shopping cart', ()=> {
        InventoryPage.cartBtn.click()
        browser.pause(1500)
        InventoryPage.contShoppBtn.click()
        browser.pause(1000)
    });
    it('testing adding/removing products to cart from item\'s description page', ()=> {
        InventoryPage.bpackImgBtn.click()
        InventoryPage.addBackpack.click()
        browser.pause(1000)
        InventoryPage.backToProducts()

        InventoryPage.backlightImgBtn.click()
        InventoryPage.addBikelight.click()
        browser.pause(1000)
        InventoryPage.backToProducts()

        InventoryPage.cartBtn.click()
        browser.pause(2000)

        expect(InventoryPage.bpackDescrBtn).toExist
        expect(InventoryPage.backlightDescrBtn).toExist

        InventoryPage.removeBackpack.click()
        browser.pause(1000)
        InventoryPage.removeBikelight.click()
        browser.pause(1000)

        expect(InventoryPage.bpackDescrBtn).not.toExist
        expect(InventoryPage.backlightDescrBtn).not.toExist
        browser.pause(1000)

        InventoryPage.contShoppBtn.click()
        browser.pause(1000)
    });
    it('testing adding/removing products to cart from Inventory page', ()=> {
        InventoryPage.addBackpack.click()
        browser.pause(1000)
        InventoryPage.addBikelight.click()
        browser.pause(1000)

        InventoryPage.cartBtn.click()
        browser.pause(2000)

        expect(InventoryPage.bpackDescrBtn).toExist
        expect(InventoryPage.backlightDescrBtn).toExist

        InventoryPage.removeBackpack.click()
        browser.pause(1000)
        InventoryPage.removeBikelight.click()
        browser.pause(1000)

        expect(InventoryPage.bpackDescrBtn).not.toExist
        expect(InventoryPage.backlightDescrBtn).not.toExist
        browser.pause(1000)

        InventoryPage.contShoppBtn.click()
        browser.pause(1000)
    });
})

describe('Sauce Demo Test - 2 (problem_user)', () => {
    it('allow access', () => {
        LoginPage.open()
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
})

describe('Sauce Demo Test - 3 (performance_glitch_user)', () => {
    it('allow access', () => {
        LoginPage.open()
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.login()

        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it('testing item\'s description page working correctly', ()=> {
        InventoryPage.bpackDescrBtn.click()

        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')

        InventoryPage.backToProducts()
        browser.pause(2000)

        InventoryPage.backlightDescrBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')

        InventoryPage.backToProducts()
        browser.pause(2000)

        InventoryPage.boltTshirtDescrBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1')

        InventoryPage.backToProducts()
        browser.pause(2000)
    });
})