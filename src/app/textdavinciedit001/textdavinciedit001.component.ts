import { Component, OnInit } from '@angular/core';
import { Textdavinci001Service } from '../services/textdavinci001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component {
  constructor(private textdavinci001: Textdavinci001Service){}

  ngOnInit(): void {
    
  }

  result:string="";
  instruction:string="";
  inputText:String ="";
  postCompletion(){
    let myprompt= this.inputText;

    var payload ={
      model:"text-davinci-edit-001",
      input: myprompt,
      instruction: this.instruction,
    }

    this.textdavinci001.postCompletion(payload).subscribe((data:any)=>{
      console.log(data);
      this.result = data.choices[0].text;
    });

  }

}
