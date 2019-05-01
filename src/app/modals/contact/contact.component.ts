import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactModal implements OnInit {
  public constructor(
    public dialogRef: MatDialogRef<ContactModal>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string,
      email: string,
      proposal: string,
    },

  ) {}

  public onCloseClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
  }

}
