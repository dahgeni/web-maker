module.export = function(app) {

    //create widget
    app.post("/api/widget/", createWidget);
    //Find page For widget
    app.get("/api/page/:pid/widget", findAllWidgetsForPage);
    //find widget By Id
    app.get("/api/widget/:wgid", findWidgetById);
    //update page
    app.put("/api/widget/", updateWidget);
    //delete page
    app.delete("/api/widget/:wgid", deleteWidget);

    widgets =  [
        { 
           _id: "123",
         widgetType: "HEADING",
         pageId: "321",
         size: 2, 
         text: "GIZMODO"
        },
      
        { _id: "234",
         widgetType: "HEADING",
         pageId: "321",
         size: 4,
         text: "Lorem ipsum"
        },
      
        { _id: "345",
         widgetType: "IMAGE",
          pageId: "321", 
          width: "50%",
          url: "https://bit.ly/2z16yXp"
        },
      
         { _id: "567", 
         widgetType: "HEADING",
         pageId: "321", 
         size: 4,
         text: "Lorem ipsum"
        },
      
        { _id: "678",
         widgetType: "YOUTUBE",
         pageId: "321",
         width: "100%", 
         url: "https://youtu.be/AM2Ivdi9c4E" 
        },
    
      ];


     function createWidget(req, res) {
       widget._id = Math.random().toString();
        this. widgets.push(widget);
        res.json(widget); 
     }
     function findAllWidgetsForPage(req, res) {
       let result = [];
       const userId = req.params["uid"]
       for(let i= 0;i<widgets.length; i ++){
       if(pageId === widgets[i].pageId) {
          result.push(this.widgets[i]);
         }  
     }
     function findWidgetById(req, res) {}
     function updateWidget(req, res) {}
     function deleteWidget(req, res) {}
       
     
}





