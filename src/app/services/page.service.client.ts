import { Injectable } from "@angular/core";
import { Page } from "../models/page.model.client";

@Injectable()
export class PageService {
  
  
pages: Page[] = [

   { _id: "321",
     name: "Post 1", 
     websiteId: "456",
     title: "Lorem"
   },
  
   { _id: "432", name: "Post 2",
    websiteId: "456",  
    title: "Lorem" },
  
   { _id: "543",
    name: "Post 3",
    websiteId: "456",
    title: "Lorem" 
}
  
  ]

  createPage(page: Page) {
      page._id = Math.random().toString();
      this.pages.push(page);
      return page;
  }

  findpagesbywebsiteId(websiteId: string) {
      let result = [];
      for(let i = 0; i < this.pages.length; i ++) {
         if(this.pages[i].websiteId) {
          result.push(this.pages[i]);   
         }
      }
        return result;
   }
        findPagebyId(pageId: string) {
            for(let i =0; i < this.pages.length; i ++) {
              if (pageId === this.pages[i]._id) {
                    return this.pages[i];
            } 
        }      
            
    }
    updatePage(page: Page) {
        const oldPage = this.findPagebyId(page._id);
        const index = this.pages.indexOf(oldPage);
        this.pages[index] = page;
    }


    deletePage(pageId: string) {
        const oldPage = this.findPagebyId(pageId); {
        const index = this.pages.indexOf(oldPage);
        this.pages.splice(index, 1);
    }
  }

}