module.export = function(app) {

    app.post("/api/page/", createPage);
    //Find page For User
    app.get("/api/website/:wid/page", findAllPagesForUser);
    //find page By Id
    app.get("/api/page/:pid", findPageById);
    //update page
    app.put("/api/page/", updatePage);
    //delete page
    app.delete("/api/page/:pid", deletePage);
  
    pages = [

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

    function createPage(req, res) {
        let page = req.body; 
        page._id = Math.random().toString();
      this.pages.push(page);
      res.json(page);
    }
      function findAllPagesForUser(req, res) {
        let result = [];
        const userId = req.params["uid"];
      for(let i = 0; i < this.pages.length; i ++) {
         if(pages[i].websiteId) {
          result.push(pages[i]);   
         }
      }
        res.json(result);
     }
        function selectPageById(pid) {
        for(let i =0; i < pages.length; i ++) {
          if ( pages[i]._id === pid) {
                return pages[i];
        }  
    }
} 

     function findPageById(res, res) {
         const wid = req.params ["wid"];
         const website = selectWebsiteById(wid);
         res.json(website)

     }

      

    function updatePage(req, res) {
        const page = req.body;
        const oldPage = selectPagebyId(page._id);
        const index = pages.indexOf(oldPage);
        this.pages[index] = page;
        res.json(pages);
    }

    function deletePage(req, res) {
        const pageId = req.params["wid"];
        const page = selectPageById(pageId);
        const index = pages.indexOf(page);
        websites.splice(index, 1);
          res.json(pages);
    };
   

}




