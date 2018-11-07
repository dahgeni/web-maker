import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  sanitizer: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private widgetService: WidgetService,
    private router: Router
   
    

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>  {
      this.uid =params["uid"];
      this.wid = params["wid"];
      this.pid = params["pid"];
      this.widgets = this.widgetService.findWidgetByPageId(this.pid);

    });
  }
parseYoutubeSrc(src) {
  //transfer video url into embeded wideo url
  let embedUrl = "http://www.youtube.com/embed/";
  const splitUrl = src.split('/');
  embedUrl += splitUrl[splitUrl.length -1];
  //telling the browser this src is safe
  return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl)
}
}
