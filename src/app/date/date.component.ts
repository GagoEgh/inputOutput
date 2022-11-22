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


        this.hour = +this.second / 3600;
        this.hour = Math.floor(this.hour);

        this.minute = +this.second - this.hour * 3600;

        this.minute = +this.second / 60;
        this.minute = Math.floor(this.minute);
        this.time = +this.second - this.minute * 60;

        if (this.hour === 1) {
            this.minute = +this.minute - 60;
        }
        if (this.minute < 10) {
            this.minute = `0${this.minute}`
        }

        if (this.time < 10) {
            this.time = `0${this.time}`
        }


    }

    timer() {

        let interval = setInterval(() => {

            this.time = +this.time - 1;
            if (this.hour === 1 && this.time === 0) {
                this.hour = 0;
                this.minute = 59;
            }

            if (this.time === 0) {
                this.minute = +this.minute - 1;
                this.time = 59;
            }
            if (this.minute < 0) {
                clearInterval(interval);
                this.minus.emit(this.minute);
            }
        }, 1000);
    }

}