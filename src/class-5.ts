// TypeScript Functions


function add(nam1:number, num2:number): number{
    return nam1 + num2;
};

add(2, 2)


const addError = (num1:number, num2:number):number=>{
    return num1 + num2
};

const arr = [1,4,2];

const newError=arr.map((element:number)=> element*element);

const person:{
    name : string;
    age: number;
    bibahito : boolean;
    addAge(ageNumber:number):number;
} = {
    name : 'arfat',
    age : 18,
    bibahito : false,
    addAge(ageNumber:number){
        return this.age+ageNumber
    }
}
