import { Component, OnInit } from '@angular/core';
import { student } from '../../services/student';
import {CrudService } from './../../services/crud.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Bookings: student[] = [];

  constructor(private aptService: CrudService) {}

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        if (item !== null) {
          let a: any = item.payload.toJSON();
          a['$key'] = item.key;
          this.Bookings.push(a as student);
        }
      });
    });
  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }

  deleteBooking(id: string) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }

}
