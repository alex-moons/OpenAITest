import { Component } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent {
  constructor(private imagesgeneration: ImagesgenerationService){}

  ngOnInit(): void {
  }

  image_url:string="";
  desc:String ="";
  postCompletion(){
    let myprompt= this.desc;

    var payload ={
      prompt: myprompt,
      n: 1,
      size: "256x256",
    }

    this.imagesgeneration.postCompletion(payload).subscribe((data:any)=>{
      console.log(data);
      this.image_url = data.data[0].url;
    });

  }
}
