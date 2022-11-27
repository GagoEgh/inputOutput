import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    public hour!: number | string;
    public minute!: number | string;
    public time!: number | string;
    id!: any;
    @Input("second")
    second!: string;

    @Output() minus = new EventEmitter()

    ngOnInit(): void {
        this.changeDate();
        this.timer();
    }

    changeDate() {
        this.hour = Math.floor(+this.second / 3600);
        let minFloor = (+this.second / 3600 - this.hour) * 60;
        this.minute = Math.floor(minFloor);
        this.time = Math.floor((minFloor - this.minute) * 60);

        if (this.time === 0) {
            this.time = 59;
            this.minute = +this.minute - 1;
        }

    

    }


    timer() {
      
        let interval = setInterval(() => {
            this.time = +this.time - 1;
            if (this.time === 0 && this.minute === 0 && this.hour > 0) {
                this.minute = 59;
                this.time = 59;
                this.hour = +this.hour - 1;
            }
       
            if (this.time === 0) {
                this.time = 59;
                this.minute = +this.minute - 1;
                
            }

         

            if (this.minute < 0) {
                clearInterval(interval);
                this.minus.emit(this.minute);
            }
        }, 1000);
    }

}