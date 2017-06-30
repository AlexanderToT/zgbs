	$(document).ready(function(){
		  var slideShow=$(".banner")
		  ul=slideShow.find("ul") 
		  showNumber=slideShow.find(".show_nav span"),
		  oneWidth=slideShow.find("ul li").eq(0).width(); 
		  var timer=null; 
		  var iNow=0;  
		  
		  showNumber.on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
		   var index=$(this).index(); 
		   iNow=index;
		   ul.animate({
		    "left":-oneWidth*iNow,
		   })
		  });
	
	function autoPlay(){
	   timer=setInterval(function(){  
	   iNow++;  
	   if(iNow>showNumber.length-1){ 
	    iNow=0;
	   }
	   showNumber.eq(iNow).trigger("click"); 
	   },5000)
	  }
	  autoPlay();
	  slideShow.hover(
	   function(){
	    clearInterval(timer);
	   },autoPlay
	  );
	
	})

