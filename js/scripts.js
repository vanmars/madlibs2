$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
   const pluralNoun1Input = $("input#pluralNoun1").val();
   const pluralNoun2Input = $("input#pluralNoun2").val();
   const pluralNoun3Input = $("input#pluralNoun3").val();
   const pluralNoun4Input = $("input#pluralNoun4").val();
   const verb1Input = $("input#verb1").val();
   const noun1Input = $("input#noun1").val();
   const noun2Input = $("input#noun2").val();
   const ingVerbInput = $("input#ingVerb").val();
   
   let inputs = [pluralNoun1Input, pluralNoun2Input, pluralNoun3Input, pluralNoun4Input, verb1Input, noun1Input, noun2Input, ingVerbInput];
   let targets = [".pluralNoun1", ".pluralNounInput2", ".pluralNounInput3", ".pluralNounInput4", ".verb1", ".noun1", ".noun2", ".ingVerb"];

    let counter = 0
    let display = inputs.forEach(function (input) {
      $(targets[counter]).text(input);
      counter += 1;
    });

  //  $(".pluralNoun1").append(pluralNoun1Input);
  //  $(".pluralNoun2").append(pluralNoun2Input);
  //  $(".pluralNoun3").append(pluralNoun3Input);
  //  $(".pluralNoun4").append(pluralNoun4Input);
  //  $(".verb1").append(verb1Input);
  //  $(".noun1").append(noun1Input);
  //  $(".noun2").append(noun2Input);
  //  $(".ingVerb").append(ingVerbInput);

   $(".story").show();
   
  });
});