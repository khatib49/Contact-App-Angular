import { Component, OnInit } from '@angular/core';

import {ContactsService} from '../contacts/contacts.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private api:ContactsService,private fb:FormBuilder ,private router:ActivatedRoute,private rt:Router) { }
  editForm:any;
  contact:any;
  ngOnInit(): void {
  console.warn(this.router.snapshot.params['id']);
   this.api.getCurrentContact(this.router.snapshot.params['id']).subscribe((res)=>{
    console.log(res);
    this.contact=res;
    // console.log(res['address']);
    // this.editForm=this.fb.group ({
    //   name: new FormControl(res['name']),
    //   email: new FormControl(res['email']),
    //   phone: new FormControl(res['phone']),
    //   website: new FormControl(res['website']),
    //   address: new FormControl(res['address'])
    // });
    });
   }
   removeContact(id:any){
    //console.log(id);
    this.api.deletecontact(id).subscribe((res )=>{
      console.log('delete it');
    })
  }

}
