import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public testService:TestService) {}

  text:any = 'Olá, isso é um teste.'

  getTest() {
    this.testService.retrieveTest().subscribe(
      (res) => {
        this.text = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  ngOnInit(): void {
  }

}
