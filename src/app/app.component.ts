import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
   
  }
  public times: string[] = [];
  public inputValue!: string;


  onClickAdd(): void {
    this.times.push(this.inputValue);
    this.inputValue = '';
  }

  onRemove(i:number) {
    this.times.splice(i, 1);
  }

 
 
  delete(event:number,i:number){
    this.onRemove(i)
  }
}
