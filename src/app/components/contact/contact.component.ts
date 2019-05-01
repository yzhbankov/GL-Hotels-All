import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactModal } from '../../modals/contact/contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    proposal: new FormControl('', Validators.required)
  });

  public constructor(
    public dialogRef: MatDialogRef<ContactComponent>,
    public dialog: MatDialog,
  ) { }

  public onSubmit(): void {
    const dialogRef = this.dialog.open(ContactModal, {
      width: '600px',
      data: { ...this.contactForm.value }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.contactForm.reset();
  }

  public ngOnInit(): void {
  }

}
