import { Address } from './address.model';

export class Tstaff extends Address{

    constructor(private name: string,private dob: Date,private grade: number,private subject: string,private status: boolean, id?: number) {
        super('Line1', null, null, null, null, null, null);
    }
}