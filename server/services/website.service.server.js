module.exports = function(app) {
    // create website
    app.post("/api/website/:uid/website", createWebsite);
    //Find Websites For User
    function createWebsite(req, res)
    app.get("/api/user/:uid/website", findAllWebsitesForUser);
    //find websitre By Id
    app.get("/api/website/:wid", findWebsiteById);
    //update website
    app.put("/api/website", updateWebsite);
    app.delet("/api/website/:wid", deleteWebsite);

    websites =  [

        { _id: "123",
         name: "Facebook",
         developerId: "456",
         description: "Lorem" },
      
        { _id: "234",
         name: "Tweeter",
         developerId: "456",
         description: "Lorem" 
        },
      
        { _id: "456",
         name: "Gizmodo",
         developerId: "456",
         description: "Lorem" },

        { _id: "890", name: "Go",
         developerId: "123",
          description: "Lorem"
         },
      
        { _id: "567",
         name: "Tic Tac Toe",
         developerId: "123", 
         description: "Lorem" 
        },
         { _id: "678",
         name: "Checkers",
         developerId: "123",
         description: "Lorem" 
        },
      
        { _id: "789", 
        name: "Chess", 
        developerId: "234",
        description: "Lorem"
     }
      
      ];   

    function createWebsite(req, res) {
        let website = req.body; 
        website._id =math.random().toString();
        website.push(website);
        res.json(website);
    }
    function findAllWebsitesForUser(req, res) {
        let result = []; 
        const userId = req.params["uid"];
        for (let i = 0; i < website.lennght; i++) {
            if(this.websites[i].developerId === userId) {
                result.push(this.website[i]);
            }
        }
      re.jason(result);
    }
      function selectWebsiteById(wid) {
        for(let i = 0; i < website.length; i++) {
            if (websites[i]._id === wid)  {
                return websites[i];
            }
        }
    }
    function findWebsiteById(req, res) {
      const wid = req.params["wid"]; 
      const website = selectWebsiteById(wid);
      res.json(website);
    } 

             

    function updateWebsite(req, res) {
        const website = req.body;
      const oldWeb = findWebsitebyId(website._id);
      const index = this.websites.indexOf(oldWeb);
      this.websites[index] = website;
      re.json(website);
    }
    function deleteWebsite(req, res) {
        const websiteId = req.params["wid"];
        const website = selectWebsiteById(websiteId);
        const index = websites.indexOf(website);
        websites.splice(index, 1);
        res.json(websites);
    }
};

  



 