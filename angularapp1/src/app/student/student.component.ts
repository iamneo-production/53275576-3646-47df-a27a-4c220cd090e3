import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  Email: string;
  position: number;
  phone: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A V Sasidhar ',Email: 'CSE', phone: 4839474839 },
  {position: 2, name: 'Bala Subramaniyan S',Email: 'ECE', phone: 4838483959 },
  {position: 3, name: 'Subhash R',Email: 'EEE', phone: 9364737847},
  {position: 4, name: 'Senthilkumar',Email: 'MECH', phone: 3347843794},
  {position: 5, name: 'Parthasarathy S',Email: 'CIVIL', phone: 9473858930},
  {position: 6, name: 'Mohan Prasath N',Email: 'BIO-TECH', phone: 1234674570},
  {position: 1, name: 'A V Sasidhar ',Email: 'CSE', phone: 4839474839 },
  {position: 2, name: 'Bala Subramaniyan S',Email: 'ECE', phone: 4838483959 },
  {position: 3, name: 'Subhash R',Email: 'EEE', phone: 9364737847},
  {position: 4, name: 'Senthilkumar',Email: 'MECH', phone: 3347843794},
  {position: 5, name: 'Parthasarathy S',Email: 'CIVIL', phone: 9473858930},
  {position: 6, name: 'Mohan Prasath N',Email: 'BIO-TECH', phone: 1234674570},
  {position: 1, name: 'A V Sasidhar ',Email: 'CSE', phone: 4839474839 },
  {position: 2, name: 'Bala Subramaniyan S',Email: 'ECE', phone: 4838483959 },
  {position: 3, name: 'Subhash R',Email: 'EEE', phone: 9364737847},
  {position: 4, name: 'Senthilkumar',Email: 'MECH', phone: 3347843794},
  {position: 5, name: 'Parthasarathy S',Email: 'CIVIL', phone: 9473858930},
  {position: 6, name: 'Mohan Prasath N',Email: 'BIO-TECH', phone: 1234674570},
  
];

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})

export class StudentComponent {
  displayedColumns: string[] = ['position', 'name','Email', 'phone','actions'];
  data = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

}

}
