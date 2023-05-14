import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('rotatingDiv') rotatingDiv: any;
  index: number = 0;

  productData = {
    loungeChair: {
      show: false,
      heading: "Description",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    relaxCouch: {
      show: false,
      heading: "Description",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    livingCouch: {
      show: false,
      heading: "Description",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeIndex(index: number) {
    this.index = index;
    console.log(this.rotatingDiv);
    let rotateAmount = -((60 * 2) * index);
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
