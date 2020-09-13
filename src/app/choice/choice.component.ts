import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fromEvent, Observable, Subscription } from 'rxjs';
export interface home {
  img: string;
  type: string;
}
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  homes: home[] = [
    {
      img:
        'https://github.com/shahrajsingh/rsquarewt3Shahraj/blob/master/src/app/icons/Group%20174.png?raw=true',
      type: 'Single Family',
    },
    {
      img:
        'https://github.com/shahrajsingh/rsquarewt3Shahraj/blob/master/src/app/icons/Group%20175.png?raw=true',
      type: 'Multi Family',
    },
    {
      img:
        'https://github.com/shahrajsingh/rsquarewt3Shahraj/blob/master/src/app/icons/Group%20177.png?raw=true',
      type: 'Townhouse',
    },
    {
      img:
        'https://github.com/shahrajsingh/rsquarewt3Shahraj/blob/master/src/app/icons/Group%20176.png?raw=true',
      type: 'Condominium',
    },
  ];
  budgets: string[] = [
    '100,000',
    '250,000',
    '750,000',
    '1,000,000',
    '5,000,000+',
  ];
  budget: string = this.budgets[2];
  quesNo = 0;
  colSize = 2;
  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;
  ques: string[] = [
    'What is the <b>Type of Home</b> you want to sell',
    'What is your estimated <b>Home</b>',
  ];
  mobileQuery: MediaQueryList;
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  s = '<p>abc</p>';
  ngOnInit(): void {
    console.log(this.mobileQuery.matches);
    if (this.mobileQuery) {
      this.colSize = 1;
    } else {
      this.colSize = 2;
    }
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe((evt) => {
      if (window.innerWidth < 600) {
        this.colSize = 1;
      } else {
        this.colSize = 2;
      }
    });
  }
  budgetselected(x) {
    this.budget = this.budgets[x - 1];
    x = (x - 1) * 25;
    const d = x;

    const css =
      'linear-gradient(to right,#00adef 0%,#00adef ' +
      d +
      '%,#d8d8d8 ' +
      d +
      '%,#d8d8d8 100%)';

    document.getElementById('rangeSlider').style.background = css;
  }
  next() {
    this.quesNo++;
    if (this.quesNo < 0) {
      this.quesNo = 0;
    }
    if (this.quesNo > 1) {
      this.quesNo = 0;
    }

    document.getElementById('ques').innerHTML = this.ques[this.quesNo];
    const d = (this.quesNo + 1) * 20;
    const css =
      'linear-gradient(to right,#00adef 0%,#00adef ' +
      d +
      '%,#d8d8d8 ' +
      d +
      '%,#d8d8d8 100%)';
    document.getElementById('progress-bar').style.background = css;
  }
  back() {
    this.quesNo--;
    if (this.quesNo < 0) {
      this.quesNo = 0;
    }
    if (this.quesNo > 1) {
      this.quesNo = 0;
    }
    document.getElementById('ques').innerHTML = this.ques[this.quesNo];
    const d = (this.quesNo + 1) * 20;
    const css =
      'linear-gradient(to right,#00adef 0%,#00adef ' +
      d +
      '%,#d8d8d8 ' +
      d +
      '%,#d8d8d8 100%)';
    document.getElementById('progress-bar').style.background = css;
  }
}
