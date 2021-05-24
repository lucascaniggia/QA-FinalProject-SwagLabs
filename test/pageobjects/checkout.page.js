const Page = require('./page');

class CheckoutPage extends Page {

    // 'Checkout' button
    get checkoutBtn() { return $('#checkout') }

    // Title selector
    get title() { return $('.title')}

    // Shopping Cart Logo and Badge selectors
    get addedItemsBadge () { return $('.shopping_cart_badge')}
    get shoppingCart () { return $('.shopping_cart_link')}

    // Input's selectors
    get firstNameInput() { return $('#first-name') }
    get lastNameInput() { return $('#last-name') }
    get postalCodeInput() { return $('#postal-code') }

    //Prices selectors
    get subtotal() { return $('.summary_subtotal_label') }
    get tax() { return $('.summary_tax_label') }
    get total() { return $('.summary_total_label') }

    // 'Continue' and 'Cancel' buttons selector
    get continueBtn() { return $('#continue') }
    get cancelBtn() { return $('#cancel') }
    get finishBtn () { return $('#finish')}

    //Complete checkout elements selectors
    get header() { return $('.complete-header') }
    get orderText() { return $('.complete-text') }
    get ponyExpressImg() { return $('.pony_express') }

    // Erorr message selector
    get errorMsgBtn() { return $('button[class="error-button"]') }

continue() {
    this.continueBtn.click()
}
cancel() {
    this.cancelBtn.click()
}
checkout() {
    this.checkoutBtn.click()
}
}

module.exports = new CheckoutPage();