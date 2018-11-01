import { Injectable } from "@angular/core";

@Injectable()
export class PageService {

 
pages = [

   { _id: "321",
     name: "Post 1", 
     websiteId: "456",
     description: "Lorem"
   },
  
   { _id: "432", name: "Post 2",
    websiteId: "456",  
    description: "Lorem" },
  
   { _id: "543",
    name: "Post 3",
    websiteId: "456",
    description: "Lorem" 
}
  
  ]

  createPage(page) {
      page._id = Math.random().toString;
      this.pages.push(page);
      return page;
  }

  findpagebywebsiteId(websiteId) {
      let result = [];
      for(let i = 0; i < this.pages.length; i ++) {
         if(this.pages[i].websiteId) {
          result.push(this.pages[i]);   
         }
      }
        return result;
   }
        findPagebyId(pageId) {
            for(let i =0; i < this.pages.length; i ++) {
              if (pageId === this.pages[i]._id) {
                    return this.pages[i];
            } 
        }      
            
    }
    updatePage(page) {
        const oldPage = this.findPagebyId(page._id);
        const index = this.pages.indexOf(oldPage);
        this.pages[index] = page;
    }


    deletePage(pageId) {
        const oldPage = this.findPagebyId(pageId); {
        const index = this.pages.indexOf(oldPage);
        this.pages.splice(index, 1);
    }
  }

}