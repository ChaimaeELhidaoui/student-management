import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Students';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_student(record:any) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_students() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_student(recordID:any, record:any) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id:any) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
