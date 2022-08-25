import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { contacts } from '../models/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: contacts[] = []
  constructor(private contact: ContactsService) {
    this.contact.getdata().subscribe(
      (data) => {
        console.warn(data)
        this.contacts = data
      }
    )
  }

  ngOnInit(): void {
  }

  save(event: contacts) {
    console.log(event);
  }

}
