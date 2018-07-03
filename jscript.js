$(document).ready(function() {
    $(".gracze img").on('mouseover', function(){
         $(this).css({
        opacity: 0.5
    }, 300);
    })
    
    $(".gracze img").on('mouseout', function(){
        $(this).css({
            opacity: 1
        }, 300);
    })
});