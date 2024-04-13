function assignGrade(score : number) : string{
    if(score >= 90){
        return "Grade A";
    }else if (score >= 80){
        return "Grade B";
    }else if (score >= 70){
        return "Grade C"
    }else if (score >= 60){
        return "Grade D"
    }else{
        return "Failed"
    }
}
let studentScore : number = 85;
let Grade : string = assignGrade(studentScore);
console.log(`Student score is: ${studentScore} , Student  Grade is: ${Grade}`);