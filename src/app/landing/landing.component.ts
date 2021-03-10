import { Component, OnInit, OnChanges  } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../shared/http.service";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styles: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  loading = false;
  buttionText = "Send message";

  typeFormControl = new FormControl("", [
    Validators.required,
  ]);

  textFormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(500)

  ]);

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(public http: HttpService) { }

  ngOnInit() {}

  register() {
    this.loading = true;
    this.buttionText = "Sending ...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      text: this.textFormControl.value,
      type: this.typeFormControl.value,
    }
    console.log(user.type);

    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
      );
    }
}
