import { Group } from './group.model';
import { Sector } from './sector.model';

export class Contact {
    name: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    group: Group;
    sector: Sector;
    hobbies: Array<any>;

    constructor() {
        this.hobbies = [];
    }
}
