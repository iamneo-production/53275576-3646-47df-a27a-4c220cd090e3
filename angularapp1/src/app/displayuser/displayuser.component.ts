import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  Email: string;
  position: number;
  phone: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A V Sasidhar ',Email: 'sasidhar@gmail.com', phone: 4839474839 },
  {position: 2, name: 'Bala Subramaniyan S',Email: 'bala@gmail.com', phone: 4838483959 },
  {position: 3, name: 'Subhash R',Email: 'subash@gmail.com', phone: 9364737847},
  {position: 4, name: 'Samrudhi Navade',Email: 'samudri@gmail.com', phone: 3347843794},
  {position: 5, name: 'Parthasarathy S',Email: 'partha@gmail.com', phone: 9473858930},
  {position: 6, name: 'Mohan Prasath N',Email: 'mohan@gmail.com', phone: 1234674570},
  {position: 7, name: 'Vasantha Kumar S',Email: 'samudri@gmail.com', phone: 382768378},
  {position: 8, name: 'Shreyas Mahajan',Email: 'shreyas@gmail.com', phone: 123456734},
  {position: 5, name: 'Parthasarathy S',Email: 'partha@gmail.com', phone: 9473858930},
  {position: 6, name: 'Mohan Prasath N',Email: 'mohan@gmail.com', phone: 1234674570},
  {position: 7, name: 'Vasantha Kumar S',Email: 'vasanta@gmail.com', phone: 382768378},
  {position: 8, name: 'Shreyas Mahajan',Email: 'shreyas@gmail.com', phone: 123456734},
];

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})

export class DisplayuserComponent {
  displayedColumns: string[] = ['position', 'name','Email', 'phone','actions'];
  data = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

}

}
