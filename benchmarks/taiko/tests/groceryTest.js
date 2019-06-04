const assert = require('assert');
const { openBrowser,closeBrowser, goto, title, click, $ } = require('taiko');

describe('test groceryWorks ', () => {
    before(async () => {
        await openBrowser();
        await goto('http://127.0.0.1:8080',{waitForEvents:['loadEventFired']}); 
    });

    after(async () => {
        await closeBrowser();
    });

    it('should have the right title', async () => {
        const pageTitle = await title();
        assert.equal(pageTitle, 'GroceryWorks');
    });

    it('should add beans to order', async () => {
        const items = ['Flax Seeds','French Green Lentils', 'Green Split Peas','Lentils','Pinto Beans','White Navy Beans','Yellow Split Peas']
        for(const index in items){
            await click(items[index]);
        }
        const total = $('.cart-total');
        assert.equal(await total.text(),'$5.13');
    });
});