import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  template: `
    <p>
      main works!
    </p>
  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Algo Backtester - Home');

    this.meta.addTag({
      name: 'description',
      content: 'Backtest trading strategies for free'
    })
  }

}
