import { Component, OnInit } from '@angular/core';
import{faShare}from '@fortawesome/free-solid-svg-icons'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {
  faShare=faShare;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:  [null, [Validators.required]],
      mobile:  [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      msg: [null, Validators.required],});
  }

  sendMail(){
    this.form.reset();
  }
}
