import { Injectable } from '@angular/core';
import { WidgetHeadingComponent } from '../components/widget/widget-edit/widget-heading/widget-heading.component';

// injecting service into module

@Injectable()
export class WidgetService {
    widgets = 
    [
        { _id: "123",
         widgetType: "HEADING",
         pageId: "321",
         size: 2, 
         text: "GIZMODO"},
      
        { _id: "234",
         widgetType: "HEADING",
         pageId: "321",
         size: 4,
         text: "Lorem ipsum"},
      
        { _id: "345",
         widgetType: "IMAGE",
          pageId: "321", 
          width: "100%",
          url: "http://lorempixel.com/400/200/"},
      
         { _id: "567", 
         widgetType: "HEADING",
         pageId: "321", 
         size: 4,
         text: "Lorem ipsum"},
      
        { _id: "678",
         widgetType: "YOUTUBE",
         pageId: "321",
         width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
      
      ];

      createWidget(widget) {
          widget._id = Math.random.toString();
          this. widgets.push(widget);
          return widget;
      }
      findWidgetByPageId(pageId) {
          let result = [];
          for(let i= 0;i<this.widgets.length; i ++){
           if(pageId === this.widgets[i].pageId) {
               result.push(this.widgets[i]);
           }  
          }
          return result;
      }
     findWidgetById(widgetId) {
         for (let i =0; i< this.widgets.length; i ++) {
            if(widgetId = this.widgets [i]._id) {
                return this.widgets[i];
            }
      }

    }
    updateWidget(widget) {
        const oldWidget = this.findWidgetById(widget._id);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets[index] = widget;
    }
    deletewidget(widgetId) {
        const oldWidget = this.findWidgetById(widgetId);
        const index = this.widgets.indexOf(oldWidget)
        this.widgets.splice(index, 1);
    }
}