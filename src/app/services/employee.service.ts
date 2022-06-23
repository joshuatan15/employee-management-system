import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firestore: Firestore) { }

  addEmployee(employee: IEmployee) {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }

  getEmployees(): Observable<IEmployee[]> {
    const employeeRef = collection(this.firestore, 'employees');
    return collectionData(employeeRef, { idField: 'id' }) as Observable<IEmployee[]>;
  }

  deleteEmployee(employee: IEmployee) {
    const employeeDocRef = doc(this.firestore, `employees/${employee.id}`);
    return deleteDoc(employeeDocRef);
  }

  getEmployeeByID(id: string) {
    const employeeRef = doc(this.firestore, `employees/${id}`);
    return docData(employeeRef, { idField: 'id' }) as Observable<IEmployee>;
  }
  
  updateEmployee(employee: IEmployee) {
    const employeeDocRef = doc(this.firestore, `employees/${employee.id}`);
    return setDoc(employeeDocRef, employee);
  }
  
}
