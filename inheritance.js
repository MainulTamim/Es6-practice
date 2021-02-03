class parent{
    constructor(){
        this.fathername = "Schwerznegger"
    }
}


class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fathername
    }
}
const baby = new child("Arnold");
const baby2 = new child("Tom")
console.log(baby.getFullName());
console.log(baby2.getFullName());