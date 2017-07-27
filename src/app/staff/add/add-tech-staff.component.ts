import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { any } from 'codelyzer/util/function';

import { AddressComponent } from '../../address/address.component';
import { Address } from '../shared/model/address.model';
import { Optionvalue } from '../shared/model/optionvalue.model';
import { Subject } from '../shared/model/subject.enum';
import { Tstaff } from '../shared/model/tstaff.model';
import { StaffService } from '../shared/services/staff.service';
import { getOptions } from '../shared/util/enum.util';

@Component({
    selector: 'tl-addtstaff',
    templateUrl: './add-tech-staff.component.html',
    providers: [],
})

export class AddTechStaffComponent implements OnInit {

    staff: FormGroup;
    tstaff: Tstaff;
    notSubmitted: boolean = true;
    @ViewChild('addr') address: AddressComponent
    subjects: Optionvalue[] =[];
    // [{ id: 1, name: 'Maths' },
    // { id: 2, name: 'Science' },
    // { id: 3, name: 'Social' },
    // { id: 4, name: 'Telugu' },
    // { id: 5, name: 'English' },
    // { id: 6, name: 'Arts' },
    // { id: 7, name: 'Hindi' }];


    constructor(private staffService: StaffService, private fb: FormBuilder) {
        console.log(typeof Subject,Subject);

    
    }

    public ngOnInit(): void {
        this.subjects=getOptions(Subject);
        this.staff = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z]+')]],
            dob: ['', [<any>Validators.required]],
            subject: ['', [<any>Validators.required]],
            grade: ['', Validators.compose([Validators.required, Validators.max(10), Validators.pattern('[1-9]\[0-9]*')])],
        });
    }

    createStaff() {
        if (this.address.isValid() && this.staff.valid) {
            const tstaff = this.staff.value;
            tstaff.status=true;
            tstaff.address = this.address.getValue();
            console.log('added details ::', tstaff);
            this.staffService.addTstaff(tstaff)
                .subscribe(() => { });
            this.notSubmitted = true;
        }
        else {
            this.notSubmitted = false;
            console.log('Not Added');
        }
    }
}