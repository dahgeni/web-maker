import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: any;


  constructor(
    private ActivatedRoute: ActivatedRoute, 
    private widgetService: WidgetService
  ) { }

  ngOnInit() { //subscribes give and observable array
    this.ActivatedRoute.params.subscribe(
      (params)=>{
       this.wgid = params["wgid"]  
       //click on item then hit f12 to find where to define it
       this.widget = this.widgetService.findWidgetById(this.wgid);
       }
    );

  }

}
