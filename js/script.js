var nota1rec = localStorage.getItem('nota1');
var nota2rec = localStorage.getItem('nota2');
var nota3rec = localStorage.getItem('nota3');

var localQuestion = document.getElementById("question");
var Reload = localStorage.getItem('question');
var pass = 0;
localQuestion.innerHTML=Reload;





var pessimoNota = nota1rec;
var indiferenteNota = nota2rec;
var otimoNota = nota3rec;

var pessimo = document.getElementById("pess");
var indiferente = document.getElementById("ind");
var otimo = document.getElementById("oti");

pessimo.innerHTML = pessimoNota;
indiferente.innerHTML = indiferenteNota;
otimo.innerHTML = otimoNota;


function touchPessimo(){

pessimoNota++;
localStorage.setItem('nota1',pessimoNota)
location.reload();
/*alert(pessimoNota);*/
};

function touchIndiferente(){

indiferenteNota++;
localStorage.setItem('nota2',indiferenteNota)
location.reload();
/*alert(indiferenteNota);*/
};

function touchOtimo(){

otimoNota++;
localStorage.setItem('nota3',otimoNota)
location.reload();
/*alert(otimoNota);*/
};



function openModal(){
    document.getElementById("bgModal").setAttribute("style", "visibility:inherit");

};

function closeModal(){
    document.getElementById("bgModal").setAttribute("style", "visibility:hidden");

}

function OkModal(){
    document.getElementById("bgModal").setAttribute("style", "visibility:hidden");
    
    var questionRec = localStorage.getItem('question1');
    var inputQuestion = document.getElementById("pergunta").value;
    var questionRec = localStorage.getItem('question1');
    var inputString = inputQuestion;
    localQuestion.innerHTML=inputString;
    localStorage.setItem('question',inputString)
    

}


function ClearItens(){
    localStorage.removeItem('nota1')
    localStorage.removeItem('nota2')
    localStorage.removeItem('nota3')
    localStorage.removeItem('question')
  location.reload();

}

function passModal(){
pass++;

if(pass == 10){
    document.getElementById("btnModal").setAttribute("style", "visibility:inherit");

}
if(pass > 10){
location.reload()
}



};

