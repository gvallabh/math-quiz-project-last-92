
MATH1_name = localStorage.getItem("MATH1_name");
MATH2_name = localStorage.getItem("MATH2_name");


number1 = localStorage.getItem("number1");
number2 = localStorage.getItem("number2");

player1_score = 0;
player2_score = 0;


document.getElementById("number1").innerHTML= number1;
document.getElementById("number2").innerHTML= number2;

document.getElementById("MATH1_name").innerHTML = MATH1_name+ " : ";
document.getElementById("MATH2_name").innerHTML = MATH2_name + " : ";

document.getElementById("MATH_question").innerHTML="Question Turn -"+ MATH1_name;
document.getElementById("MATH_answer").innerHTML="Answer Turn -"+ MATH2_name;


function send() {
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);
console.log(actual_answer);


question_answer = "<h4>"+number1+"X"+number2+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_answer + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}




question_turn = "player1";
answer_turn = "player2";


function check()
{
get_answer = document.getElementById("input_check_box").value;

if(get_answer == actual_answer)  
{
    if(answer_turn == "player2")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML= player1_score;
    }
    else 
    {
        player2_score =player2_score +1;
        document.getElementById("player2_score").innerHTML= player2_score;
    }
}
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("MATH_question").innerHTML = "Question Turn - " + MATH2_name;
}
else 
{
    question_turn= "player1"
    document.getElementById("MATH_question").innerHTML = "Question Turn - " + MATH1_name;
}

if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("MATH_answer").innerHTML = "Answer Turn - " +MATH2_name;
}
else 
{
    answer_turn= "player1"
    document.getElementById("MATH_answer").innerHTML = "Answer Turn - " + MATH1_name ;
}

document.getElementById("output").innerHTML = "";
}

