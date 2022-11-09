import { FamilyInterface } from "../interfaces/familyInterface";

export class FamilyTMApp implements FamilyInterface {
    constructor(){
        this.userId = "",
        this.name = "",
        this.mother = "",
        this.father = "",
        this.childrens = [],
        this.tasks = []
    }
    userId: string;
    name: string;
    mother: string;
    father: string;
    childrens: any[];
    tasks: any[];
    
}