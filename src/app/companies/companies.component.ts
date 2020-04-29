import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  techs = new FormControl();
  techList: string[] = ['CSS', 'Angular', 'React', 'View', 'Html', 'NodeJs','MongoDB','Firebase','JS','PhP','Bootstrap','Ruby On Rails','YII','MeteorJs','Laravel',
  'Java','ELixir','Ajax','jQuerry','Ruby'];
}
