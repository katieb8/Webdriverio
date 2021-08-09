const assert = require('assert')

describe('AO.com homepage HMC test', () => {
    it('should have the right title', () => {
        browser.url('https:ao.com')
        const title = browser.getTitle()
        expect(title).toHaveText("ao.com | Washing Machines | TVs | Laptops | Delivering Tomorrow")
    });

    it('Should have the HMC visible', () => {
        let HMC = $("*[data-tag-section='hmc']");
        let isDisplayed = elem.isDisplayed();
        console.log(isDisplayed); // outputs: false
    })
})