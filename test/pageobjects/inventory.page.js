const Page = require('./page');

class InventoryPage extends Page {

// Inventory's item 'add-to-cart' and 'remove' selectors
    get addBackpack() { return $('#add-to-cart-sauce-labs-backpack') }
    get addBikelight() { return $('#add-to-cart-sauce-labs-bike-light') }
    get addBoltTshirt() { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get addJacket() { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get addOnesie() { return $('#add-to-cart-sauce-labs-onesie') }
    get addRedTshirt() { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') }

    get removeBackpack() { return $('#remove-sauce-labs-backpack') }
    get removeBikelight() { return $('#remove-sauce-labs-bike-light') }
    get removeBoltTshirt() { return $('#remove-sauce-labs-bolt-t-shirt') }
    get removeJacket() { return $('#remove-sauce-labs-fleece-jacket') }
    get removeOnesie() { return $('#remove-sauce-labs-onesie') }
    get removeRedTshirt() { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') }

// Inventory item's description page selectors
    get bpackDescrBtn() { return $('#item_4_title_link') }
    get backlightDescrBtn() { return $('#item_0_title_link') }
    get boltTshirtDescrBtn() { return $('#item_1_title_link') }
    get jacketDescrBtn() { return $('#item_5_title_link') }
    get onesieDescrBtn() { return $('#item_2_title_link') }
    get redTshirtDescrBtn() { return $('#item_3_title_link') }

// Inventory item's images selectors
    get bpackImgBtn() { return $('#item_4_img_link') }
    get backlightImgBtn() { return $('#item_0_img_link') }
    get boltTshirtImgBtn() { return $('#item_1_img_link') }
    get jacketImgBtn() { return $('#item_5_img_link') }
    get onesieImgBtn() { return $('#item_2_img_link') }
    get redTshirtImgBtn() { return $('#item_3_img_link') }

// 'Back to Products' and 'Continue Shopping' button selectors
    get backToProductsBtn() { return $('#back-to-products') }
    get contShoppBtn() { return $('#continue-shopping') }

// Sorting filter's selectors
    get sortMenu() { return $('.product_sort_container') }
    get sortByNameAZ() { return $('div.right_component > span > select > option:nth-child(1)') }
    get sortByNameZA() { return $('div.right_component > span > select > option:nth-child(2)') } 
    get sortByLowToHigh() { return $('div.right_component > span > select > option:nth-child(3)') }
    get sortByHighToLow() { return $('div.right_component > span > select > option:nth-child(4)') }

    get firstItem() { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a') } 
    get secondItem() { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > a') }
    get thirdItem() { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > a') }
    get fourthItem() { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > a') }
    get fifthItem() { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > a') }
    get sixthItem() { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > a') }

// Shopping Cart selector
    get cartBtn() { return $('#shopping_cart_container a') }

// Errors and success messages selectors
    get errorAlert() { return $('button[class="error"]') }

    backToProducts() {
        this.backToProductsBtn.click()
    }
    redirect() {
        this.redirectLink.click()
    }
    open() {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();