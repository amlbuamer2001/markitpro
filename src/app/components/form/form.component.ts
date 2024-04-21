import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private _FormBuilder:FormBuilder){}
  confirmMsg:string='';
  contactForm: FormGroup=this._FormBuilder.group({
  from_name: '',
  from_phone: '',
  from_email: '',
  from_company: '',
  message: '',
  })
  async sendEmail(){
    emailjs.init('gLJ5G9t9Kz1a7tQKn')
   let response= await emailjs.send("service_40u20hv","template_8dxpymc",{
      from_name: this.contactForm.value.form_name,
      from_phone: this.contactForm.value.form_phone,
      from_email: this.contactForm.value.form_email,
      from_company: this.contactForm.value.form_company,
      message: this.contactForm.value.message,
      });
      this.contactForm.reset();
      this.confirmMsg='Thanks for your conection';
  }
}
