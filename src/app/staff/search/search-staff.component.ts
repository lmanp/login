import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Ntstaff } from '../shared/model/ntstaff.model';
import { Tstaff } from '../shared/model/tstaff.model';
import { StaffService } from '../shared/services/staff.service';

// import { MdTab } from '@angular2-material/tabs';


@Component({
    selector: 'tl-searchstaff',
    templateUrl: './search-staff.component.html',
    providers: [],
})

export class SearchStaffComponent implements OnInit {

    tstaff: Tstaff[] = [];
    ntstaff: Ntstaff[] = [];
    submitted: boolean;

    constructor(private router: Router, private staffService: StaffService) { }

    ngOnInit() {
        this.loadTstaff();
        this.loadNtstaff();
    }

    loadTstaff() {
        this.staffService.getTstaff().subscribe(staff => {
            this.tstaff = staff;
            // console.log('staff value::',this.tstaff);
        });

    }

    deleteTstaff(id: number) {
        this.staffService.removeTstaff(id).subscribe(() => {
            this.loadTstaff();
        },
            err => {
                console.log('subscrive err', err)
            });
    }


    loadNtstaff() {
        this.staffService.getNtstaff().subscribe(staff =>
            this.ntstaff = staff);
    }

    deleteNtstaff(id: number) {
        this.staffService.removeNtstaff(id).subscribe(() => {
            this.loadNtstaff();
        },
            err => {
                console.log('subscrive err', err)
            });
    }
}