import { Component, OnInit } from '@angular/core';

import {Contact} from "./contact";
import {ContactStoreService} from "../contact-store.service";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactStoreService) { }
  contact: Contact;
  contacts: Array<Contact>;


  ngOnInit():any {
    //console.log(this.contact);
    this.contact = new Contact('fname','lname','','');

    this.loadContacts();
  }
  onSubmit(form){
    console.log(form);
    this.contactService.insertContact(new Contact(form.value.firstName,form.value.lastName,form.value.email,form.value.phone));
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = this.contactService.getContactList();
  }


}
