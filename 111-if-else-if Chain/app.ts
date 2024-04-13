function personAge(age : number):string{
    if(age < 13){
        return `child`;
    }else if(age < 19){
        return `teenager`;
    }else{return `adult`;}
}
let ageGroup = personAge(12);
console.log(`Age Group:` , ageGroup);
