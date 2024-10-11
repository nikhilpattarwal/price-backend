// amazon

// const puppeteer = require('puppeteer');

// const productData = async (searchQuery) => {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();
//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     const searchUrl = `https://www.amazon.in/s?k=${searchQuery}`;
//     // const searchUrl = `https://www.myntra.com/${encodeURIComponent(searchQuery)}`;


//     try {
//         await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 100000 });
//         await page.waitForSelector('.s-main-slot .s-result-item', { timeout: 60000 });

//         const products = await page.evaluate(() => {
//             const productElements = document.querySelectorAll('.s-main-slot .s-result-item');
//             console.log('productElements',productElements);
//             let productData = [];
//             productElements.forEach((productElement) => {
//                 const name = productElement.querySelector('.a-size-medium')?.innerText || productElement.querySelector('.a-size-large')?.innerText ;
//                 const price = productElement.querySelector('.a-price-whole')?.innerText || ''; 
//                 const link = productElement.querySelector('a')?.href || '';
//                 const imgSrc = productElement.querySelector('img.s-image')?.src || '';
//                 if(name && price && link && imgSrc){
//                     productData.push({ name, price, link,imgSrc });
//                 }
//             });
//             return productData;
//         });

//         return products;
//     } catch (error) {
//         console.error('Error navigating to the page:', error);
//         throw error; 
//     } finally {
//         await browser.close();
//     }
// };

// module.exports = {
//     productData,
// };

//flipkart
// const puppeteer = require('puppeteer');

// const productData = async (searchQuery) => {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();
//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(searchQuery)}`;

//     try {
//         await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 100000 });
//         await page.waitForSelector('.cPHDOP', { timeout: 60000 });  

//         const products = await page.evaluate(() => {
//             const productElements = document.querySelectorAll('.cPHDOP'); 
//             let productData = [];
//             productElements.forEach((productElement) => {
            
//                 const imgSrc = productElement.querySelector('img.DByuf4')?.src ||  productElement.querySelector('img._53J4C-')?.src || '';
//                 const name = productElement.querySelector('a.wjcEIp')?.innerText ||  productElement.querySelector('.KzDlHZ')?.innerText || productElement.querySelector('a.WKTcLC')?.innerText || ''; // Title class
//                 const price = productElement.querySelector('.Nx9bqj')?.innerText || '';
//                 const link = productElement.querySelector('a')?.href || '';
//                 const rating = productElement.querySelector('.Y1HWO0 ._1Quie7')?.innerText || productElement.querySelector('.Y1HWO0 .XQDdHH')?.innerText || '';
//                 const offer = productElement.querySelector('.UkUFwK')?.innerText || '';
//                 const oldPrice = productElement.querySelector('.yRaY8j')?.innerText || '';
//                 if (name && price && link && imgSrc ) {
//                     productData.push({ name, price, link, imgSrc, rating,offer,oldPrice });
//                 }
//             });
//             return productData;
//         });

//         return products;
//     } catch (error) {
//         console.error('Error navigating to the page:', error);
//         throw error;
//     } finally {
//         await browser.close();
//     }
// };

//myntra
// const puppeteer = require('puppeteer');

// const productData = async (searchQuery) => {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();
//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     const searchUrl = `https://www.myntra.com/${encodeURIComponent(searchQuery)}?rawQuery=${encodeURIComponent(searchQuery)}`;

//     try {
//         await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 100000 });
//         await page.waitForSelector('.search-searchProductsContainer', { timeout: 60000 });  

//         const products = await page.evaluate(() => {
//             const productElements = document.querySelectorAll('.search-searchProductsContainer .product-base'); 
//             let productData = [];  
//             productElements.forEach((productElement) => {
            
//                 const imgSrc = productElement.querySelector('img')?.src || '';
//                 const name = productElement.querySelector('.product-product')?.innerText ||''; // Title class
//                 const price = productElement.querySelector('.product-discountedPrice')?.innerText || productElement.querySelector('.product-price span')?.innerText ||'';
//                 const link = productElement.querySelector('a')?.href || '';
//                 const rating = productElement.querySelector('.product-ratingsContainer span')?.innerText || '';
//                 const offer = productElement.querySelector('.product-discountPercentage')?.innerText || '';
//                 const oldPrice = productElement.querySelector('.product-strike')?.innerText || '';
//                 if (name && price && link && imgSrc ) {
//                     productData.push({ name, price, link, imgSrc, rating,offer,oldPrice });
//                 }
//             });
//             return productData;
//         });

//         return products;
//     } catch (error) {
//         console.error('Error navigating to the page:', error);
//         throw error;
//     } finally {
//         await browser.close();
//     }
// };



// meesho
const puppeteer = require('puppeteer');

const productData = async (searchQuery) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    const searchUrl = `https://www.meesho.com/search?q=${encodeURIComponent(searchQuery)}`;

    try {
        await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 100000 });
        await page.waitForSelector('.products', { timeout: 60000 });  

        const products = await page.evaluate(() => {
            const productElements = document.querySelectorAll('.products .ProductList__GridCol-sc-8lnc8o-0'); 
            let productData = [];  
            productElements.forEach((productElement) => {
            
                const imgSrc = productElement.querySelector('img')?.src || '';
                const name = productElement.querySelector('.NewProductCardstyled__StyledDesktopProductTitle-sc-6y2tys-5')?.innerText ||''; // Title class
                const price = productElement.querySelector('.NewProductCardstyled__PriceRow-sc-6y2tys-7 h5')?.innerText ||  '';
                const link = productElement.querySelector('a')?.href || '';
                const rating = productElement.querySelector('.Rating__StyledPill-sc-12htng8-1 span')?.innerText || productElement.querySelector('.cgkleE span')?.innerText  ||  '';
                const offer = productElement.querySelector('.product-discountPercentage')?.innerText || '';
                const oldPrice = productElement.querySelector('.product-strike')?.innerText || '';
                if (name && price && link && imgSrc ) {
                    productData.push({ name, price, link, imgSrc, rating,offer,oldPrice });
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

