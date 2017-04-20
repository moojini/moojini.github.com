$(function(){
    
    $('.heart_A_inner a').hover(
        
        function() {
        $(this).addClass('heart_shake');
        }, function() {
        $(this).removeClass('heart_shake');
        }
    )
    
})