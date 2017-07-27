import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'tl-address',
    templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {

    address: FormGroup;
    constructor(private fb: FormBuilder) { }
    notSubmitted: boolean = true;

    public ngOnInit(): void {
        this.address = this.fb.group({
            line1: ['', [Validators.required]],
            line2: ['', [<any>Validators.required]],
            city: ['', [<any>Validators.required, Validators.pattern('[A-Za-z]+')]],
            state: ['', [<any>Validators.required, Validators.pattern('[A-Za-z]+')]],
            pincode: ['', [<any>Validators.required, Validators.maxLength(6), Validators.pattern('[1-9][0-9]+')]],
            email: ['', [<any>Validators.required]],
            phone: ['', [<any>Validators.required, Validators.maxLength(10), Validators.pattern('[1-9][0-9]+')]],
        });
    }

    getValue() {
        if (this.address.valid) {
            console.log('address::', this.address);
            return this.address.value;
        }
    }

    isValid() {
        console.log('valid::',this.address.valid)
        this.notSubmitted=(this.address.valid);
        console.log('notSubmitted::', this.notSubmitted);
        return this.address.valid;
        
    }
}
