$(document).ready(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).on( "sortupdate", function( event, ui ) {
      this.innerText
    } );
});


