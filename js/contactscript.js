    
    $(function(){
        
        $('.message').click(function(){
            
            $('.contact_form_kakao').fadeOut(1000)
            $('.contact_form_insta').fadeOut(1000)
            $('.contact_form_tistory').fadeOut(1000)
            $('.contact_form_inner').fadeIn(1000)
        })
        
        $('.kakaotalk').click(function(){
            
            $('.contact_form_insta').fadeOut(1000)
            $('.contact_form_inner').fadeOut(1000)
            $('.contact_form_tistory').fadeOut(1000)
            $('.contact_form_kakao').fadeIn(1000)
        })
        
        $('.tistory').click(function(){
            
            $('.contact_form_kakao').fadeOut(1000)
            $('.contact_form_inner').fadeOut(1000)
            $('.contact_form_insta').fadeOut(1000)
            $('.contact_form_tistory').fadeIn(1000)
        })
        
        $('.instagram').click(function(){
            
            $('.contact_form_kakao').fadeOut(1000)
            $('.contact_form_inner').fadeOut(1000)
            $('.contact_form_tistory').fadeOut(1000)
            $('.contact_form_insta').fadeIn(1000)
        })
        
    })