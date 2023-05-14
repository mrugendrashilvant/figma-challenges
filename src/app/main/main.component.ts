import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('rotatingDiv') rotatingDiv: any;
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeIndex(index: number) {
    this.index = index;
    console.log(this.rotatingDiv);
    let rotateAmount = -(60 * index);
    console.log(rotateAmount.toString());
    this.rotatingDiv.nativeElement.style.rotate = rotateAmount.toString() + 'deg';
    if (index == 0) {
      this.rotatingDiv.nativeElement.style.backgroundImage = "url('../../assets/images/Rectangle 10.png')"
    }
    if (index == 1) {
      this.rotatingDiv.nativeElement.style.backgroundImage = "url('../../assets/images/Rectangle 9.png')"
    }
    if (index == 2) {
      this.rotatingDiv.nativeElement.style.backgroundImage = "url('../../assets/images/Rectangle 8.png')"
    }
  }

}
