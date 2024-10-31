import { Page } from "@playwright/test";

export default class TodoPage {
    private page:Page;
    // constarctor : for creat objects
    constructor (page:Page){
        this.page = page;
    } ; 
     
// عشان نعرف object inside class will use get 

private get WelcomMessage (){
    return '[data-testid="welcome"]';
}

private get addicon (){
    return '[data-testid="add"]';
}

private get additem (){
    return '[data-testid="new-todo"]';
}

private get createtodobtn(){
    return '[data-testid="submit-newTask"]';
}

private get item (){
    return '[data-testid="todo-text"]';
}

private get deleteitem (){
    return '[data-testid="delete"]';
}

private get notodomessage(){
    return '[data-testid="no-todos"]';
}


// add method/steps of the welcomemessage will return locator

async load(){
    await this.page.goto('./todo/new');
}

getWelcomeMessage(){
    return this.page.locator('[data-testid="welcome"]');
}

 
async addtodoitem(){
    await this.page.type(this.additem, 'Playright1');
    await this.page.click(this.createtodobtn);
  return  await this.page.locator(this.item).nth(0).innerText();
}

async load2(){
    await this.page.goto('./todo');
}

async clickdeleteitem (){
  await this.page.locator(this.deleteitem).click();
}

 getnotodomessage(){
   return this.page.locator(this.notodomessage);
}

}
