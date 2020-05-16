import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sendToListage(){
    this.router.navigate(['/listage']);
  }
  sendTocontactUs(){
    this.router.navigate(['/contacompany'])
  }
}
