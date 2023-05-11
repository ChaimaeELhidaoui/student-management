import { Injectable } from '@angular/core';
import { student } from './student';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  bookingListRef!: AngularFireList<any>;
  bookingRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: student) {
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/student/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/student');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id : string, apt: student) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/student/' + id);
    this.bookingRef.remove();
  }
}


