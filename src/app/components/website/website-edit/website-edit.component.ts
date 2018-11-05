import { Component, OnInit } from '@angular/core';
import { WebsiteService } from 'src/app/services/website.service.client';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websites: any[];
  uid: string;
   wid: string;
  decription: string;
  website;

  constructor( 
    private websiteService: WebsiteService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websites =this.websiteService.findWebsitesByUser(this.uid);
      this.website = this.websiteService.findwebsiteById(this.uid);
   });
  }
update() {
  const newWeb = {
    name: this.website.name,
    decription: this.website.decription,
    _id: this.wid,
    developerId: this.uid

  };
  
  this.websiteService.updateWebsite(newWeb);
  this.router.navigate(["user", this.uid, "website"]);
}
delete() {
  this.websiteService.deleteWebsite(this.wid);
  this.router.navigate(["user", this.uid, "website"]);
}
}

}
