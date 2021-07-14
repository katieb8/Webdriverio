const assert = require('assert')

describe('AO.com homepage HMC test', () => {
    it('should have the right title', () => {
        browser.url('https:ao.com')
        const title = browser.getTitle()
        expect(title).toHaveText("ao.com | Washing Machines | TVs | Laptops | Delivering Tomorrow")
    })
})