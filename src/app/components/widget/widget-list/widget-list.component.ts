import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  widgets: any[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private widgetService: WidgetService

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>  {
      this.uid =params["uid"];
      this.wid = params["wid"];
      this.pid = params["pid"];
      this.widgets = this.widgetService.findWidgetByPageId(this.pid);

    });
  }

}
