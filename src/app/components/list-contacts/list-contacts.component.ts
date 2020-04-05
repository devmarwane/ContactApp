import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  contacts;
  editMode = false;
  currentContact: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }

  updateContact(contact: Contact) {
    this.contactService.updateContact(contact);
    this.editMode = false;
  }

  editContact(contact: Contact) {
    this.editMode = true;
    this.currentContact = contact;
  }

  deleteContact(contact: Contact) {
    if (confirm('Are you sure you want to delete this contact !')) {
      this.contactService.deleteContact(contact);
    } else {
      this.editMode = false;
    }
  }
}
