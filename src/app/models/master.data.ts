import { Group } from './group.model';
import { Sector } from './sector.model';
import { Hobby } from './hobby.model';

export const GROUPS: Array<Group> = [
    {id: 1, name: 'Family',  description: ''},
    {id: 2, name: 'Friends',  description: ''},
    {id: 3, name: 'Bussiness',  description: ''},
    {id: 4, name: 'Job',  description: ''},
    {id: 5, name: 'Others',  description: ''},
];

export const SECTORS: Array<Sector> = [
    {id: 1, name: 'Technical',  description: ''},
    {id: 2, name: 'Creative',  description: ''},
    {id: 3, name: 'Comercial',  description: ''},
    {id: 4, name: 'Others',  description: ''},
];

export const HOBBIES: Array<Hobby> = [
    {id: 1, name: 'Read',  description: ''},
    {id: 2, name: 'Music',  description: ''},
    {id: 3, name: 'Sport',  description: ''},
    {id: 4, name: 'Travel',  description: ''},
];
