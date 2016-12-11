import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactStoreService} from "../../contact-store.service";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact>;
  contact: Contact;
  constructor(private contactService: ContactStoreService) { }

  ngOnInit() {
    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.loadContacts();
  }
  loadContacts() {
    this.contacts = this.contactService.getContactList();
  }
}
