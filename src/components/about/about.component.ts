import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Algo Backtester - About Us');

    this.meta.addTag({
      name: 'description',
      content: 'Contact Information'
    })
  }

}
