const load = document.querySelector(".reload");
const disp = document.querySelector(".show");
const submit = document.querySelector(".submit");
const info = document.querySelector("#info");
const minutes = document.querySelector(".formatTimeLeft")

load.addEventListener("click",function(){
    location.reload();
})
submit.addEventListener("click",function(){
    //alert("Bolan");
    const qn1 = document.exam.q1.value;
    const qn2 = document.exam.q2.value;
    const qn3 = document.exam.q3.value;
    const qn4 = document.exam.q4.value;
    const qn5 = document.exam.q5.value;
    const qn6 = document.exam.q6.value;
    const qn7 = document.exam.q7.value;
    const qn8 = document.exam.q8.value;
    const qn9 = document.exam.q9.value;
    const qn10 = document.exam.q10.value;
    const qna= document.exam.qa.value;
    const qnb = document.exam.qb.value;
    const qnc = document.exam.qc.value;
    const qnd = document.exam.qd.value;
    const qne = document.exam.qe.value;
    const qnf = document.exam.qf.value;
    const qng = document.exam.qg.value;
    const qnh = document.exam.qh.value;
    const qni = document.exam.qi.value;
    const qnj = document.exam.qj.value;
    //alert(qn1);
    let result = 0;
    //message
    let message = ["Excellent","Try header","Poor Attempt"];
    let answer = ["Ikeja","Abuja","Port Harcourt"];

    if(qn1===answer[0]){
        result++;
    }
    if(qn2===answer[0]){
        result++;
    }
    if (qn3===answer[0]){
        result++;
    }
    if (qn4===answer[0]){
        result++;
    }
    if (qn5===answer[0]){
        result++;
    }
    if (qn6===answer[0]){
        result++;
    }
    if (qn7===answer[0]){
        result++;
    }
    if (qn8===answer[0]){
        result++;
    }
    if (qn9===answer[0]){
        result++;
    }
    if (qn10===answer[0]){
        result++;
    }
    if (qna===answer[0]){
        result++;
    }
    if (qnb===answer[0]){
        result++;
    }
    if (qnc===answer[0]){
        result++;
    }
    if (qnd===answer[0]){
        result++;
    }
    if (qne===answer[0]){
        result++;
    }
    if (qnf===answer[0]){
        result++;
    }
    if (qng===answer[0]){
        result++;
    }
    if (qnh===answer[0]){
        result++;
    }
    if (qni===answer[0]){
        result++;
    }
    if (qnj===answer[0]){
        result++;
    }
    let check;
    if(result < 1){
        check = 2;
    }
    else if(result < 2){
        check = 3;
    }
    else if(result < 3){
        check = 4;
    }
    else if(result < 4){
        check = 5;
    }
    else if(result < 5){
        check = 6;
    }
    else if(result < 6){
        check = 7;
    }
    else if(result < 7){
        check = 8;
    }
    else if(result < 8){
        check = 9;
    }
    else if(result < 9){
        check = 10;
    }
    else if(result < 10){
        check = a;
    }
    else if(result < a){
        check = b;
    }
    else if(result < b){
        check = c;
    }
    else if(result < c){
        check = d;
    }
    else if(result < d){
        check = e;
  }
  else if(result < e){
    check = f;
}
else if(result < f){
    check = g;
}
else if(result < g){
    check = h;
}
else if(result < h){
    check = i;
}
else if(result < i){
    check = j;
}
    info.innerHTML =message[check];
    document.getElementById("ans").innerHTML = 'You scored ${result}';
    if(result==1){
        document.getElementById("ans").innerHTML="You Scored "+result+" correct";
   }
   else if(result > 1){
       document.getElementById("ans").innerHTML="You scored "+result+" corrects";
    disp.classList.add("good");
    }else {
        document.getElementById("ans").innerHTML="You Scored "+result+""
        disp.classList.add("poor");
    }
      })
    function formatTimeLeft(time){
          //const minutes = Math.floor(time/20);
          let seconds = time % 60;
          //if the value of seconds is less than 100, then display seconds with a leading zero
          if (seconds < 10){
              seconds = '0${seconds}';
          }
          // The output in MM:SS format
          return '${minutes}:${seconds}';
      }
      
    