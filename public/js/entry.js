$(document).ready(function(){
    $( "a" ).click(function() {

        $(this).addClass( "animated" );

        $( this ).fadeOut( "fast",function(){
            $(this).fadeIn( "slow");
            $(this).removeClass( "animated" );
        });
    });
});
