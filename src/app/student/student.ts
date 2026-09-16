import { Component, ɵɵrepeaterTrackByIdentity } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [NgStyle],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] = [
    {
      name:"pipo",
      city:"roma",
      gender:"M",
      present:true
    },
    {
      name:"pluto",
      city:"milano",
      gender:"M",
      present:false
    },
    {
      name:"paperino",
      city:"napoli",
      gender:"M",
      present:true
    },
    {
      name:"minnie",
      city:"torino",
      gender:"F",
      present:true
    },
    {
      name:"Verity",
      city:"Cuneo",
      gender:"F",
      present:false
    }
  ];
}
