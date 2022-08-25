import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactsService} from '../../contacts/contacts.service';
import { contacts} from '../../contacts/models/contacts';

@Component({
  selector: 'app-bodymodal',
  templateUrl: './bodymodal.component.html',
  styleUrls: ['./bodymodal.component.css']
})
export class BodymodalComponent implements OnInit {
  errormsg:any;
  succeessmsg:any;
  //contact:contacts;
  constructor( private api:ContactsService,private fb:FormBuilder ,private actrouter:ActivatedRoute, private router:Router ) { }
  contactForm:any;
  ngOnInit(): void {
    this.contactForm=this.fb.group ({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      phone: new FormControl('',[Validators.required]),//,Validators.pattern("[0-9 ]{12}]")
      image: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    if(!this.contactForm.valid)
    {
      return;
    }
   // console.log(this.contactForm.value);
    if(this.contactForm.valid)
    {
      this.api.createnewcontact(this.contactForm.value).subscribe((res)=> {
        console.log(res,'Data Insert');
        this.contactForm.reset();
        this.succeessmsg= 'Data insert';
        //this.router.navigate(['/home']);
      })
    }
    else{
      this.errormsg="All field required";
    }
  }

}
