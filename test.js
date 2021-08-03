const puppeteer = require('puppeteer');



//Login
(async () => {

  const sfw_auth = 'https://sys.4channel.org/auth';
  const nsfw_auth = 'https://sys.4chan.org/auth';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(nsfw_auth);

await page.type('input[id="field-id"]', 'Botname'); //TOKEN
await page.type('input[id="field-pin"]', 'PIN'); //PIN
await page.$eval('input[id="field-long-login"]', check => check.checked = true); //REMEMBER THIS BOT/INSTANCE

await page.screenshot({ path: 'LOGIN.png' });
await browser.close();
})();


/*
//Post Thread
(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://boards.4channel.org/k/');

const [button] = await page.$x("//div[@id='togglePostFormLink']");
if (button) {
    await button.click();
}
 
await page.type('input[name="name"]', 'Botname'); //Botname or Anonymous
await page.type('input[name="sub"]', '/arg/ - Assault Rifle 15 General'); //Subject
await page.type('textarea[name="com"]', `Lorem Ipsum is 
	simply dummy text of the printing and typesetting industry. 
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
	It has survived not only five centuries, but also the leap into electronic typesetting, 
	remaining essentially unchanged`); //Subject

const elementHandle = await page.$("input[id=postFile]");
await elementHandle.uploadFile('./POST.png');

await page.screenshot({ path: 'POST.png' });
await browser.close();
})();
*/


/*
  await page.type('#password', 'password');
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await browser.close();
*/
