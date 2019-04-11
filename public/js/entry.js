$(document).ready(function(){
    $( "a" ).click(function() {
        $( this ).fadeOut( "fast",function(){
            $( this ).fadeIn( "slow");
        });
    });
});
