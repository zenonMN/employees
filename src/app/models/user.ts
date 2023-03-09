export class User {
    name: string;
    birthday: string;
    email: string;
    phone: string;
    city: string;
    creationDate: string;
    acronym: string;

    constructor(userData: any) {
        this.name = userData.name;
        this.birthday = userData.birthday;
        this.email = userData.email;
        this.phone = userData.phone;
        this.city = userData.city;
        this.creationDate = userData.creationDate;
        this.acronym = this.getAcronym();
    }

    private getAcronym(): string {
        let matches = this.name.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase();
        let words = matches.split(' ');
        return words[0] && words[1] ? words[0][0]+words[1][0] : (words[0] ? words[0][0] : '');
    }
}