import {expect, test} from '@playwright/test'
import {faker} from '@faker-js/faker'
import RegisterPage from '../Pages/RegisterPage';
import TodoPage from '../Pages/TodoPage';


test("should be able to add todo item" , async ({page, request}) => {
    // define request
 
 // register by API!
    const response = await request.post('/api/v1/users/register', {
        data:{
            email: faker.internet.email(),
            Password:'Test123456' ,
            firstname : faker.person.firstName(),
            lastname: faker.person.lastName(),
        }
    })
       console.log(response.json()); 
   // ui steps 
 // read from registerpage
 const registerpage = new RegisterPage(page);
 await registerpage.load();
 await registerpage.register();
  // read from todopage
const todoPage = new TodoPage (page);
const WelcomeMessage = todoPage.getWelcomeMessage();
await expect(WelcomeMessage).toBeVisible();
await todoPage.load();
await todoPage.addtodoitem();
  });


   //steps by UI 

    /*const WelcomeMessage = page.locator('[data-testid="welcome"]');
    await expect(WelcomeMessage).toBeVisible();
    await page.click('[data-testid="add"]');
    await page.type('[data-testid="new-todo"]', 'Playright1');
    await page.click('[data-testid="submit-newTask"]');
    const item1 = await page.locator('[data-testid="todo-text"]').nth(0).innerText();
     expect(item1).toEqual('Playright1');
*/

test("should be able to delete todo item", async({page}) => {
  const registerpage = new RegisterPage(page);
  await registerpage.load();
  await registerpage.register();
  const todoPage = new TodoPage (page);
  const WelcomeMessage = todoPage.getWelcomeMessage();
  await expect(WelcomeMessage).toBeVisible();
  await todoPage.load();
  await todoPage.addtodoitem();
  await todoPage.load2();
  await todoPage.clickdeleteitem();
  await todoPage.getnotodomessage();
});
      
  /* steps by UI 
    await page.goto('./signup');
    await page.type('[data-testid="first-name"]',faker.person.firstName());
    await page.type('[data-testid="last-name"]',faker.person.lastName());
    await page.type('[data-testid="email"]',faker.internet.email());
    await page.type('[data-testid="password"]', 'Test123456');
    await page.type('[data-testid="confirm-password"]', 'Test123456');
    await page.click('[data-testid="submit"]');    
    const WelcomeMessage = page.locator('[data-testid="welcome"]');
    await expect(WelcomeMessage).toBeVisible();
    await page.click('[data-testid="add"]');
    await page.type('[data-testid="new-todo"]', 'Playright1');
    await page.click('[data-testid="submit-newTask"]');
    await page.click('[data-testid="delete"]');
    const notodomessage = page.locator('[data-testid="no-todos"]');
    await expect(notodomessage).toBeVisible(); */




