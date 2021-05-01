import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData:any = []
  tableSetting: any = []
  pageDetails:any = "";
  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.getPostList()
    this.pageDetails = 'post'
  }
  getPostList(){
    this.api.getListRequest('posts')
    .subscribe((response: any) => {
      console.log(response)
      this.postData = response
      console.log("key", this.tableSetting, response[0])
    })
    console.log("key", this.tableSetting)
  }
}
