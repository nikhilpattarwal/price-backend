const puppeteer = require('puppeteer');

const productData = async (searchQuery) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    const searchUrl = `https://www.amazon.in/s?k=${searchQuery}`;
    // const searchUrl = `https://www.myntra.com/${encodeURIComponent(searchQuery)}`;


    try {
        await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 100000 });
        await page.waitForSelector('.s-main-slot .s-result-item', { timeout: 60000 });

        const products = await page.evaluate(() => {
            const productElements = document.querySelectorAll('.s-main-slot .s-result-item');
            console.log('productElements',productElements);
            let productData = [];
            productElements.forEach((productElement) => {
                const name = productElement.querySelector('.product-title-word-break')?.innerText || '';
                const price = productElement.querySelector('.a-price-whole')?.innerText || ''; 
                const link = productElement.querySelector('a')?.href || '';
                const imgSrc = productElement.querySelector('img.s-image')?.src || '';
                if( price && link && imgSrc){
                    productData.push({ name, price, link,imgSrc });
                }
            });
            return productData;
        });

        return products;
    } catch (error) {
        console.error('Error navigating to the page:', error);
        throw error; 
    } finally {
        await browser.close();
    }
};

module.exports = {
    productData,
};
