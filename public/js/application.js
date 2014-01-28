$(document).ready(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).on( "sortupdate", function( event, ui ) {

        $.ajax({
          type: "POST",
          url: "/ajax",
          data: { names:this.innerText }
        })
    } );
});


