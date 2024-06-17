import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressDTO } from '../model/dto/address-dto';
import { HomeZone } from '../model/enum/home-zone';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      cep: ['', Validators.required],
      neighbourhood: ['', Validators.required],
      city: ['', Validators.required],
      zone: ['', Validators.required],
      observation: ['']
    });
  }

  submit() {
    if (this.addressForm.valid) {
      const formValues = this.addressForm.value;
      let address = this.createAddressDTO(formValues);
      console.log(address);
    } else {
      console.log('Form is invalid');
    }
  }

  private createAddressDTO(formValues: any): AddressDTO {
    return new AddressDTO(
      null,
      formValues.street,
      formValues.number,
      formValues.cep,
      formValues.neighbourhood,
      formValues.city,
      formValues.zone as HomeZone,
      formValues.observation,
      []
    );
  }
}