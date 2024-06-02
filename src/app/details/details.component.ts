import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor(public actRout: ActivatedRoute) {}
  ngOnInit(): void {
    this.getQueryData()
  }

  public foodDetail:any


  getQueryData() {
    this.actRout.queryParams.subscribe(Data => {
      console.log(Data);
      this.foodDetail = Data
    })
  }

}
