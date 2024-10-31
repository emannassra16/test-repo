import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";

export default class {

    private page:Page;
    // constarctor : for creat objects
    constructor (page:Page){
        this.page = page;
    } ; 
   //elements 

   private get FirstnameInput (){
    return '[data-testid="first-name"]'
   }

   private get LastnameInput (){
    return '[data-testid="last-name"]'
   }

   private get emailInput (){
    return '[data-testid="email"]'
   }

   private get passwordInput (){
    return '[data-testid="password"]'
   }

   private get confirmpasswordInput (){
    return '[data-testid="confirm-password"]'
   }

   private get submitbutton (){
    return '[data-testid="submit"]'
   }


    //methods
     // clicking on signup
    async load(){
    await this.page.goto('./signup');
    }

    async register(){
    await this.page.type(this.FirstnameInput,faker.person.firstName());
    await this.page.type(this.LastnameInput,faker.person.lastName());
    await this.page.type(this.emailInput,faker.internet.email());
    await this.page.type(this.passwordInput, "Test123456");
    await this.page.type(this.confirmpasswordInput, "Test123456");
    await this.page.click(this.submitbutton);    
    }



}