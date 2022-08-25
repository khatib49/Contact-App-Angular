import { Component, OnInit } from '@angular/core';

import {ContactsService} from '../contacts/contacts.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private api:ContactsService,private fb:FormBuilder ,private router:ActivatedRoute,private rt:Router) { }
  editForm:any;
  ngOnInit(): void {
  console.warn(this.router.snapshot.params['id']);
   this.api.getCurrentContact(this.router.snapshot.params['id']).subscribe((res)=>{
    console.log(res);
    console.log(res['address']);
    this.editForm=this.fb.group ({
      name: new FormControl(res['name']),
      email: new FormControl(res['email']),
      phone: new FormControl(res['phone']),
      website: new FormControl(res['website']),
      address: new FormControl(res['address'])
    });
    });
   }
   update(){
    //console.warn(this.editForm.value);
    this.api.updateContact(this.router.snapshot.params['id'],this.editForm.value).subscribe((result)=>
      {console.warn(result);
      //location.reload();
    }
      )
    // this.rt.navigate(['/']);
   }

  }


