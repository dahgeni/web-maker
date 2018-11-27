module.exports = function(app) {

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
       const pid = req.params["pid"]
       for(let i= 0;i<widgets.length; i ++){
       if(widget[i].pageId === pid) {
          result.push(this.widgets[i]);
         }  
     }

    }
     function selectWidgetById(wgid) {
     for (let i =0; i< widgets.length; i ++)
      if (widgetId [i]=== wgid) {
        return pages[i];
        }
     }
    function findWidgetById(req, res) {
     const wgid = req.params["wgid"];
     const widget = selectWidgetById(pid);
     res,json(widget);
    }
  }
      
     function updateWidget(req, res) {
       const widget = res.body;
      const oldWidget = selectWidgetById(widget._id);
      const index = widgets.indexOf(oldWidget);
      this.widgets[index] = widget;
      res.json(widget);
      }

     function deleteWidget(req, res) {
      const wgid = req.params["wgid"];
      const widget = selectWidgetById(wgid);
      const index = widgets.indexOf(oldWidget)
      this.widgets.splice(index, 1);
      res.json(widgets);
  
    };
  

 
       
     








