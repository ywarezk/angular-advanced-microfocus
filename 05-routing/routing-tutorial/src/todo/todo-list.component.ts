import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  template: `
    
  `,
})
export class TodoListComponent implements OnInit {
  constructor(private _activated: ActivatedRoute) {}
  
  ngOnInit() {
    // fetch the data from the server
  }
}
