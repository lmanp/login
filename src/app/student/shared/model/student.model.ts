export class Student {
    id?: number;
    name: string;
    dob: Date;
    grade: number;

    constructor(name: string, dob: Date, grade: number, id?: number) {
        return {
            'id': id,
            'name': name,
            'dob': dob,
            'grade': grade
        };
    }
}