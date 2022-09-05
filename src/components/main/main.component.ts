import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  template: `
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <button class="btn btn-blue">Button</button>
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
