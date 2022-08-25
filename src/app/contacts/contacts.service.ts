import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contacts } from './models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url="https://62ac44e59fa81d00a7ad858e.mockapi.io/api/v1/contacts";
  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get<contacts[]>(this.url);
  }
  createnewcontact(data:any){
    return this.http.post<any>(this.url,data);
  }
  updateContact(id:any,data:any){
    // return this.http.put<any>(this.url,id,value);
    return this.http.put<any>(this.url+'/'+id,data);
  }
  deletecontact(id:number | string | any){
    return this.http.delete<any>( this.url+'/'+id);
  }
  getCurrentContact(id:any)
  {
    return this.http.get<any>("https://62ac44e59fa81d00a7ad858e.mockapi.io/api/v1/contacts/"+id);
  }
}
