import { Address } from './address.model';

export class Ntstaff extends Address {

    constructor(private name: string, private dob: Date, private work: string,  status: boolean,private id?: number) {
        super('Line1', null, null, null, null, null, null);
    }
}