const assert = require('assert');
const puppeteer = require('puppeteer');

describe('test groceryWorks ', () => {
    let browser, page;
    before(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:8080'); 
    });

    after(async () => {
        await browser.close();
    });

    it('should have the right title', async () => {
        const pageTitle = await page.title();
        assert.equal(pageTitle, 'GroceryWorks');
    });

    it('should add beans to order', async () => {
        const items = ['Flax Seeds','French Green Lentils', 'Green Split Peas','Lentils','Pinto Beans','White Navy Beans','Yellow Split Peas']
        for(const index in items){
            const image = await page.$(`img[alt='${items[index]}']`)
            await image.click();
        }
        const total = await page.$('.cart-total');
        assert.equal(await page.evaluate(total => total.textContent, total),'$5.13');
    });
});