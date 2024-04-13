function assignGrade(score) {
    if (score >= 90) {
        return "Grade A";
    }
    else if (score >= 80) {
        return "Grade B";
    }
    else if (score >= 70) {
        return "Grade C";
    }
    else if (score >= 60) {
        return "Grade D";
    }
    else {
        return "Failed";
    }
}
let studentScore = 85;
let Grade = assignGrade(studentScore);
console.log(`Student score is: ${studentScore} , Student  Grade is: ${Grade}`);
export {};
