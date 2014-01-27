$(document).ready(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    $( "#sortable" ).mouseup(function(){
      setTimeout(reorder(),2000)
      // $( "#sortable > li" ).each(function() {
      //   var list_items = [];
      //   list_items.push($( this ).text());
      //   console.log(list_items)
      // });
    });
});

var reorder = function(){
  var people = document.getElementsByClassName("people");
  console.log(people)
  var orderedPeople = [];
  for (var i = 0; i < people.length; i++) {
    orderedPeople.push(people[i].innerText);
  };
  console.log(orderedPeople);
};
