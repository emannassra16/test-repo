import {expect, test} from '@playwright/test'
import {faker} from '@faker-js/faker'
import RegisterPage from '../Pages/registerPage';
import TodoPage from '../Pages/TodoPage';

test ("should be able to sign up" , async ({page}) => {

    // read from registerpage
   const registerpage = new RegisterPage(page);
   await registerpage.load();
   await registerpage.register();
    
// read from todopage
const todoPage = new TodoPage (page);
const WelcomeMessage = todoPage.getWelcomeMessage();
await expect(WelcomeMessage).toBeVisible();

});

