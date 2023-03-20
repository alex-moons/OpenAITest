import { Component, OnInit } from '@angular/core';
import { ModerationService } from '../services/moderation.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit{
  constructor(private moderation: ModerationService){}

  ngOnInit(): void {
    
  }

  result:string="";
  input:String ="";
  postCompletion(){
    let myprompt= this.input;

    var payload ={
      input: myprompt
    }

    this.moderation.postCompletion(payload).subscribe((data:any)=>{
      console.log(data);
      if (data.results[0].flagged){
        this.result = "The message is offensive."
      }else{
        this.result = "The message is alright."
      }
    });

  }
}
