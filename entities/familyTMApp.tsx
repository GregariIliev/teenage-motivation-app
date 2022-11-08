import { FamilyInt } from "../interfaces/familyInterface";

export class Family implements FamilyInt {
    constructor(){
        this.uid = "",
        this.name = "",
        this.mother = "",
        this.father = "",
        this.childrens = [],
        this.tasks = [];
    }
    uid: string;
    name: string;
    mother: string;
    father: string;
    childrens: any[];
    tasks: any[];
    
}