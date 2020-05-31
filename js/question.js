var questions =[
'Comment vous vous appelez ?',
' Comment je peux vous aider',
'Les symptômes les plus fréquents de la ‎COVID-19 sont la fièvre, la toux sèche et la ‎fatigue',
'En cas de symptômes discrets, par exemple une toux ou une fièvre légère',
'La COVID-19 est transmise par des personnes porteuses du virus. La maladie se transmet principalement d’une personne à l’autre par le biais de gouttelettes respiratoires expulsées par le nez ou par la bouche lorsqu’une personne malade tousse, éternue ou parle. ',
'Il est important de se laver SYSTÉMATIQUEMENT les mains et de TOUJOURS respecter les règles d’hygiène respiratoire. C’est la meilleure façon de se protéger et de protéger les autres.',
'L’auto-isolement est une mesure importante que doivent prendre les personnes qui présentent des symptômes de la COVID-19 pour éviter d’infecter d’autres personnes dans leur entourage, y compris les membres de leur famille.',
'Dans ce cas :Installez chez vous seul,Restez en quarantaine pendant 14 jours même si vous avez l’impression d’être en bonne santé,Gardez le moral ...'

];
var num=0;
var output = document.querySelector("#result");
var question = ""

output.innerHTML = questions[0];

 var inputBox = document.querySelector("#ans");

 function showResponse(){
var input=inputBox.value;

if(inputBox.value == ""){

}else {
	if (num == 0) {
	 output.innerHTML = `Bonjour  ${input} !!! Je suis cortana coronavirus `
	 inputBox.value = "";
	 ++num;
	 setTimeout(changeQuestion , 2000 );
	}
	else if (num == 1) {
	  output.innerHTML =` La COVID-19 est la maladie infectieuse causée par le dernier coronavirus qui a été découvert.
	 Ce nouveau virus et cette maladie étaient inconnus avant l’apparition de la flambée à Wuhan (Chine) en décembre 2019
	 La COVID-19 est maintenant pandémique et touche de nombreux pays dans le monde.`
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici...  ");
	 ++num;
	 
	}
	else if (num == 2) {
	 output.innerHTML =`Les symptômes les plus fréquents de la ‎COVID-19 sont la fièvre, la toux sèche et la ‎fatigue `
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;
	
	}
	else if (num == 3) {
	 output.innerHTML =`En cas de symptômes discrets, par exemple une toux ou une fièvre légère  `
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;
	
	} 
	else if (num == 4) {
	 output.innerHTML =`La COVID-19 est transmise par des personnes porteuses du virus. La maladie se transmet principalement d’une personne à l’autre par le biais de gouttelettes respiratoires expulsées par le nez ou par la bouche lorsqu’une personne malade tousse, éternue ou parle. `
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;
	
	} 
	else if (num == 5) {
	 output.innerHTML =`Il est important de se laver SYSTÉMATIQUEMENT les mains et de TOUJOURS respecter les règles d’hygiène respiratoire. C’est la meilleure façon de se protéger et de protéger les autres. `
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;
	
	}
	else if (num == 6) {
	 output.innerHTML =`L’auto-isolement est une mesure importante que doivent prendre les personnes qui présentent des symptômes de la COVID-19 pour éviter d’infecter d’autres personnes dans leur entourage, y compris les membres de leur famille.`
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;} 
     }
      if (num == 7) {
	 output.innerHTML =`Dans ce cas :Installez chez vous seul,Restez en quarantaine pendant 14 jours même si vous avez l’impression d’être en bonne santé,Gardez le moral ...`
	 inputBox.value = "";
	 inputBox.setAttribute("placeholder" , "Ecrivez votre question ici... ");
	 ++num;
	setTimeout(changeQuestion, 5000);
	}
 }

 function changeQuestion (){

 	
 	output.innerHTML = questions[num];
 	if (num == 8) {
 		inputBox.style.display == "none";
 		output.innerHTML =` C'été un plaisir de parler avec vous :)`;
 	}
 }
$(document).on('keypress', function(e){
if(e.which == 13){
	showResponse();
}
 })