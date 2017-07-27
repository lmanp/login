import { Ntstaff } from '../shared/model/ntstaff.model';
import { Work } from '../shared/model/work.enum';
import { StaffService } from '../shared/services/staff.service';
import { getOptions } from '../shared/util/enum.util';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressComponent } from 'app/address/address.component';
import { Optionvalue } from "app/staff/shared/model/optionvalue.model";

@Component({
    selector: 'tl-addntstaff',
    templateUrl: './add-nontech-staff.component.html',
    providers: [],
})

export class AddNontechStaffComponent implements OnInit {

    staff: FormGroup;
    ntstaff: Ntstaff;
    notSubmitted: boolean = true;
    @ViewChild('addr') address: AddressComponent
    work: Optionvalue[] = getOptions(Work);
    // [{ id: 1, name: 'Maintanence' },
    // { id: 2, name: 'House Keeping' },
    // { id: 3, name: 'Library' },
    // { id: 4, name: 'Gardening' },
    // { id: 5, name: 'Clerical' },
    // { id: 5, name: 'Coach' },
    // { id: 5, name: 'Nurse' }];

    constructor(private staffService: StaffService, private fb: FormBuilder) { }

    public ngOnInit(): void {
        this.staff = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z]+')]],
            dob: ['', [<any>Validators.required]],
            work: ['', [<any>Validators.required]]
        });
        // console.log('Sample Ntstaff object::', new Ntstaff('Abhi', new Date(), 'Pro'));

    }

    createNtstaff() {
        if (this.address.isValid() && this.staff.valid) {
            const ntstaff = this.staff.value;
            ntstaff.status=true;
            ntstaff.address = this.address.getValue();
            console.log('added details ::', ntstaff);
            this.staffService.addNtstaff(ntstaff)
                .subscribe(() => { });
            this.notSubmitted = true;
        }
        else {
            this.notSubmitted = false;
            console.log('Not Added');
        }
    }

}
