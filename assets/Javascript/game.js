
// Create timer with two minute limit

var number = 10;
  var intervalId;

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
      if( number === 0) {
        clearInterval(intervalId);
      }
  }

  run();

  // Function to check if answer is correct or false


  var answers = ["A", "C", "C", "A", "B"];
  var tot = answers.length;

  function getCheckedValue(question) {
        var radios = document.getElementbyName("question-0");
        for(y=0; y<radios.length; y++)
        if(radios[y].checked) return radios[y].value  
  }

function getScore() {
  var score = 0;
  for(var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score +=1;
  return score;
  }

  function returnScore(){
    document.getelementbyID("#correct") + getScore() +"/" + tot;
  }
