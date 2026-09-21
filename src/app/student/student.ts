import { Component, ɵɵrepeaterTrackByIdentity } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [NgStyle, NgClass],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  M_COLOR = "lightblue";
  F_COLOR = "pink";

  students: any[] = [
    {
      name: "pipo",
      city: "roma",
      gender: "M",
      present: true
    },
    {
      name: "pluto",
      city: "milano",
      gender: "M",
      present: false
    },
    {
      name: "paperino",
      city: "napoli",
      gender: "M",
      present: true
    },
    {
      name: "minnie",
      city: "torino",
      gender: "F",
      present: true
    },
    {
      name: "Verity",
      city: "Cuneo",
      gender: "F",
      present: false
    }
  ];

 getStyle(s: any) {
    return {
      'backgroundColor': s.gender == 'F' ? this.F_COLOR : this.M_COLOR,
      'text-decoration': s.present ? 'none' : 'underline',
      'font-weight': s.present ? 'normal' : 'bold'
    };
  }
}
