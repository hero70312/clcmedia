$(document).ready(function(){
    $( "a" ).click(function() {
        $( this ).fadeOut( "slow",function(){
            $( this ).fadeIn( "slow");
        });
    });
});
