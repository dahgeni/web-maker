module.exports = function(app) {

    app.post("/api/page/", createPage);
    //Find page For User
    app.get("/api/website/:wid/page", findAllPagesWebsite);
    //find page By Id
    app.get("/api/page/:pid", findPageById);
    //update page
    app.put("/api/page/", updatePage);
    //delete page
    app.delete("/api/page/:pid", deletePage);
  
    
   async function createPage(req, res) {
      let page = req.body; 
        const data = await
        websiteModel.createWebsiteForUser(page)
        res.json(data);
    }
      async function findAllPagesWebsite(req, res) {
        const pid = req.params["pid"];
        const data = await 
        pageeModel.findAllPageswebsites(pid);
        res.json(data);
      }
       
        }
 
    async function findPageById(res, res) {
         const pid = req.params ["pid"];
         const data = await pageModel.findPageById(pid);
         res.json(data);

     }
      

   async function updatePage(req, res) {
      const page = req.body;
        const pid = page._id;
        const data = await pageModel.updatePage
        (pid, page);
        res.json(data);
    }
       
   

    async function deletePage(req, res) {
      const pageId = req.params["wid"];
      const data = await
      pageModel.deletePage(pageId);
      res.json(data);
  
    };
   






