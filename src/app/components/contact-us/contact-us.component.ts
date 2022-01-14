import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title = "###Please contact Tufail ahmed @ tufailahmedkhan@gmail.com or call : "
  mobileNumber = '918867205331';
  constructor() { }

  ngOnInit(): void {
  }

}
