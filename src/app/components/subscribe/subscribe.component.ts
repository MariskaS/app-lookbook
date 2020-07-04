import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SUBSCRIBE_CONTENT} from "../../constants";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  subscribeContent = SUBSCRIBE_CONTENT;
  subscribeForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.subscribeForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      zipCode: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(): void {
    this.onSubscribe(this.subscribeForm.value);
  }

  onSubscribe(formData): void {
    console.log(formData)
  }
}
