
    $(function(){
        
        $('.profile_tab li').click(function(){
            
            // var idx = 0
            
            $(this).addClass('on').siblings().removeClass('on')
            
            // $('.photo_listA').css({
            //     left:"-100%"
            // }).stop().animate({
            //     left:'0'
            // },500)
        })
        
        $('.profile_tab li .a').click(function(){
                
            $('.photo_listA').css({
                left:"-100%"
            }).stop().animate({
                left:'0'
            },500)
            
            $('.photo_listB').css({
                display:'block',
                left:"0%"
            }).stop().animate({
                left:'100%'
            },500)
        })
        
        $('.profile_tab li .b').click(function(){
                
            $('.photo_listB').css({
                display:'block',
                left:"100%"
            }).stop().animate({
                left:'0'
            },500)
            
            $('.photo_listA').css({
                left:"0"
            }).stop().animate({
                left:'-100%'
            },500)
            
        })
        
        $('.scroll a').click(function() {
            
            
            
            // $('html,body').css({'scrollTop':'0'})
        })
        
    })