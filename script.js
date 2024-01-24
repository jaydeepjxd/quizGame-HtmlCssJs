const questionBank = [

    // question 1
    {
        question : "which is the largest animal?",
        options: [
            {text : "shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Tiger", correct : false},
            {text : "Horse", correct : false}
        ]
    },

    // question 2
    {
        question : "which is the smallest continent?",
        options: [
            {text : "Asia", correct : false},
            {text : "America", correct : false},
            {text : "Africa", correct : false},
            {text : "Australia", correct : true}
        ]
    },

    // question 3
    {
        question : "who is the richest man in the world?",
        options: [
            {text : "Elon Musk", correct : false},
            {text : "Gautam Adani", correct : false},
            {text : "Mukesh Ambani", correct : false},
            {text : "Jeff Bezos", correct : true}
        ]
    },

    // question 4
    {
        question : "Who is the Richest man in India?",
        options: [
            {text : "Narendra Modi", correct : false},
            {text : "Gautam Adani", correct : false},
            {text : "Mukesh Ambani", correct : true},
            {text : "Radhakrishan Damani", correct : true}
        ]
    }
]


let questionEle = document.querySelector(".question");
let optionListEle  = document.querySelector(".option-list");
let buttonEle = document.querySelector(".next");

let index = 0;
let score = 0;

function start(){
    index = 0;
    score = 0;
    buttonEle.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    
    reset(); // to remove previous options

    let currQuestion = questionBank[index];
    questionEle.innerHTML = currQuestion.question;

    currQuestion.options.forEach(answer => {

        let LI = document.createElement("button");
        LI.innerHTML = answer.text;
        optionListEle.appendChild(LI);

        if(answer.correct) {LI.store = true}    // storing true in LI object

        LI.addEventListener("click", clicked); // event listener

    })
}

function clicked(e){
    console.log("clicked");
    const selectedBtn = e.target;
    
    if(selectedBtn.store === true) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");

        Array.from(optionListEle.children).forEach((option) => {
            if(option.store === true){
                option.classList.add("correct");
            }   
            option.disabled = true;        
        })
    }
    buttonEle.style.display = "block";
}

function reset(){
    // optionListEle.innerHTML = "";     
    // ye bhi kr sakte the bhai :)
    while(optionListEle.firstChild){
        optionListEle.removeChild(optionListEle.firstChild);
    }
}

buttonEle.addEventListener("click", () => {
    if(index < questionBank.length-1){
        index++;
        showQuestion();
    }
    else {
        showResults();
    }
})

function showResults() {
    document.querySelector(".card h2").innerHTML = "Your Score";
    optionListEle.innerHTML = ""; 
    questionEle.innerHTML = `You scored ${score} out of ${questionBank.length}` ;
    buttonEle.innerHTML = "try again!"
    index = 0;
    score = 0;

}

start();



