import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { contacts } from '../../models/contacts';
import { ContactsService } from '../../contacts.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: contacts | undefined;
  @Output() onClick: EventEmitter<contacts> = new EventEmitter<contacts>();

  constructor(private api:ContactsService,private fb:FormBuilder ,private actrouter:ActivatedRoute, private router:Router ) {

  }

  ngOnInit(): void {
  }

  saveItem() {
    this.onClick.emit(this.contact);
  }
  // openModal(id:any){
  //   this.router.navigate(['edit',id]);
  // }

  removeContact(id:any){
    //console.log(id);
    this.api.deletecontact(id).subscribe((res )=>{
      console.log('delete it');
    })
  }

}
