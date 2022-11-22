import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
    ngOnInit(): void {
        this.changeDate();
        this.timer()
    }
    public minute!: number | string;
    public time!: number | string;

    @Input("second")
    second!: string;

    @Output()
    change = new EventEmitter<any>()

    changeDate() {
        this.minute = +this.second / 60;
        this.minute = Math.floor(this.minute);
        this.time = +this.second - this.minute * 60;
        if (this.minute < 10) {
            this.minute = `0${this.minute}`
        }

        if (this.time < 10) {
            this.time = `0${this.time}`
        }
    }

    timer() {
        setInterval(() => {
            this.time = +this.time - 1;
            if (this.time === 0) {
                this.minute = +this.minute - 1;
                this.time = 59;
            }
        }, 1000);
    }

}