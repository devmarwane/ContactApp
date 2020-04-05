import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  showForm = false;
  contact: Contact = {
    name: '',
    tel: ''
  };
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  newContact() {
    this.contactService.createContact(this.contact);
    this.contact.name = '';
    this.contact.tel = '';
    this.showForm = false;
  }

}
