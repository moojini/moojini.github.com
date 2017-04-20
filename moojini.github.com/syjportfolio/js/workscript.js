    
    $(function(){
        
        // $('.right .pofo_img .next').click(function() {
        //     $('.pofo_img ul li .page').addClass('pager')
        // })
        
        var idx=0;
        var idxidx =0;
        
        $('.right .pofo_img .next').click(function(){
            
            var height = $(window).height()
            var page = [60, 20, -20, -60, -100];
            
            $('.pofo_img ul li').eq(idx).find("img").stop().animate({
                top:'100%'
            },1000).parent().removeClass().next().addClass('active').find('img').css({
                'display':'block',
                'top':"-100%"
            }).stop().animate({
                'top':0
            },1000)
            
            $('.shin ul li').eq(idx).find(".work_title_inner").stop().animate({
                'top':-$('.shin').height()
            },1000).parent().removeClass().next().addClass('on').find(".work_title_inner").css({
                'display':'block',
                top:$('.shin').height()
            }).stop().animate({
                'top':'0px'
            },1000);
            
            
            // $('.slide ul li:nth-child(0) .page').css({
            //     left:'60px'
            // })
            
            
            idx ++;
            
            if(idx == $(".pofo_img ul li").length){
                
                idx=0;
                
                $('.pofo_img ul li').eq(idx).addClass('active').find("img").css({
                    display:"block",
                    top:"-100%"
                }).stop().animate({
                    top:0
                },1000);
                
                
                $('.shin ul li').eq(idx).addClass('on').find(".work_title_inner").css({
                    display:"block",
                    top:$('.shin').height()
                }).stop().animate({
                    'top':'0px'
                },1000);
                
            }
            
        })
        
        // $('.right .pofo_img .nextnext').click(function(){
        //      console.log('sadaadada')
        //     $('.slide ul li .page').css({
        //         left:'-100px'
        //     })
            
        // })
        
        $('.right .pofo_img .prev').click(function(){
            
            $('.pofo_img ul li').eq(idx).find("img").stop().animate({
                top:'-100%'
            },1000).parent().removeClass().prev().addClass('active').find('img').css({
                'display':'block',
                'top':"100%"
            }).stop().animate({
                'top':0
            },1000);
            
            $('.shin ul li').eq(idx).find(".work_title_inner").stop().animate({
                'top':$('.shin').height()
            },1000).parent().removeClass().prev().addClass('on').find(".work_title_inner").css({
                'display':'block',
                top:-$('.shin').height()
            }).stop().animate({
                'top':'0px'
            },1000);
            
            idx --;
            
            if(idx < 0){
                
                idx = $(".pofo_img ul li").length-1;
                
                $('.pofo_img ul li').eq(idx).addClass('active').find("img").css({
                    display:"block",
                    top:"100%"
                }).stop().animate({
                    top:0
                },1000);
                
                $('.shin ul li').eq(idx).addClass('on').find(".work_title_inner").css({
                    display:"block",
                    top:-$('.shin').height()
                }).stop().animate({
                    top:'0px'
                },1000);
            }
        })
        
        // $('.right .pofo_img .prevprev').click(function(){
            
        //     console.log('dssd')
        //     $('.slide ul li .page').css({
        //         left:'95px'
        //     })
            
        // })
        
        
        
        
        $('.pofo_img_inner ul li a').click(function(){
            
            var activeidx = $('.pofo_img_inner ul li.active').index()
            var onidx = $('.shin .work_title li.on').index()
            
            
            // var activeidx = $('.shin .work_title .work_title_inner.active').index()
            
            idx = $(this).parent().index()
            
            
            if (activeidx>idx && onidx>idx){
                
                 $('.pofo_img_inner ul li').eq(activeidx).find('img').css({
                     top:'0',
                     display:"block"
                 }).stop().animate({
                     top:'-100%'
                 },1000)
                 
                 $('.pofo_img_inner ul li').eq(idx).addClass('active').find('img').css({
                     top:'100%',
                     display:"block"
                 }).stop().animate({
                     top:0
                 },1000)
                 .parent().siblings().removeClass()
                 
                 $('.shin ul li').eq(onidx).find('.work_title_inner').css({
                     top:'0px',
                     display:"block"
                 }).stop().animate({
                     top:$('.shin').height()
                 },1000)
                 
                 $('.shin ul li').eq(idx).addClass('on').find('.work_title_inner').css({
                     top:-$('.shin').height(),
                     display:"block"
                 }).stop().animate({
                     top:'0px'
                 },1000)
                 .parent().siblings().removeClass()
                 
                 
                 
            }else if (activeidx<idx && onidx<idx){
                
                $('.pofo_img_inner ul li').eq(activeidx).find('img').css({
                     top:'0',
                     display:"block"
                 }).stop().animate({
                     top:'100%'
                 },1000)
                 
                 $('.pofo_img_inner ul li').eq(idx).addClass('active').find('img').css({
                     top:'-100%',
                     display:"block"
                 }).stop().animate({
                     top:0
                 },1000)
                 .parent().siblings().removeClass()
                 
                 $('.shin ul li').eq(onidx).find('.work_title_inner').css({
                     top:'0px',
                     display:"block"
                 }).stop().animate({
                     top:-$('.shin').height()
                 },1000)
                 
                 $('.shin ul li').eq(idx).addClass('on').find('.work_title_inner').css({
                     top:$('.shin').height(),
                     display:"block"
                 }).stop().animate({
                     top:'0px'
                 },1000)
                 .parent().siblings().removeClass()
                
            }
            
        })
        
        
        // $('.view ul li a').click(function() {
        //     $('.popUp_open_paris').fadeIn()
        // })
        
        $('.popUp_close').click(function() {
            $('.popUp_open').fadeOut()
        })
        
        // $('.popUp_open_paris').fadeOut(1000)
        
    	$('.workBox1 .view .pageview').click(function(){
    		$('.popupBox1').fadeIn(1000)
    		return false;
    	});
    	
        $('.workBox2 .view .pageview').click(function(){
    		$('.popupBox2').fadeIn(1000)
    		return false;
    	});
        
        
    })