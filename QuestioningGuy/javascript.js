


function clears(){
    document.getElementById("inputBox").value = ""
}




const Questions = ["Q1","Q2","Q3","Q4","Q5"]
const Answers   = ["A1","A2","A3","A4","A5"]

const inputBox = document.getElementById("inputBox")

let i = 0
let score = 0


document.getElementById("legend").innerHTML = "Question: " + Questions[0]


function submit(){
    
    if (inputBox.value == Answers[i]){
        score += 1
        openPopup()
    }   else{
        openPopup2()
        document.getElementById("des").innerHTML = "You've answer the wrong answer! <br> Correct Answer is: " + Answers[i]
    }
    
    setTimeout(() => {
        inputBox.value = ""
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("legend").innerHTML = "Question: " + Questions[i]
    }, 1000);

    
    i += 1
}

function close(){
    if (i == Answers.length){
        document.getElementById("desc").innerHTML = "You've completed the quiz! <br> Your score is " + score+ "/" + Answers.length
        openPopup3()
    }
}
