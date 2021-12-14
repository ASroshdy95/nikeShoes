$(document).ready(function(){
    
    
    

//start gallery
    var numberOfThumbnails = $(".thumbnails").children().length,
        marginBetweenThumbnails = '0.5',
        totalMarginBetweenThumbnails = (numberOfThumbnails - 1) * marginBetweenThumbnails ,
        thumbnailsWidth = (100 - totalMarginBetweenThumbnails ) / numberOfThumbnails ; 
        
        console.log( thumbnailsWidth );
        
        $(".thumbnails img").css({
         
         width: thumbnailsWidth + '%' ,
         
         marginRight: marginBetweenThumbnails + '%'
         
         });
        
       $(".thumbnails img:last").css("margin-right","0");
    
    
       $(".thumbnails img").on("click",function(){
     
       $(this).addClass("active").siblings().removeClass("active");
     
       console.log( $(this).attr("src")  );
      
       $(".master-img img").hide().attr("src", $(this).attr("src") ).fadeIn(500);
        
       });
    
     
       $(".master-img  .fa-chevron-right").on("click",function () {
       
       if( $(".thumbnails .active ").is(":last-child") )
       
       {  $(".thumbnails img").eq(0).click(); }
       
       else{
       
        $(".thumbnails .active").next().click();
        //i just make a trigger look at or there is another code but a bit longer
   
       }
       
       });
      
      $(".master-img  .fa-chevron-left").on("click",function () {
       
      if( $(".thumbnails .active ").is(":first-child") )
       
       {  $(".thumbnails img:last").click(); }//u did not add eq() because in case u dont know the number of pics
       
       else{
         $(".thumbnails .active").prev().click();//i just make a trigger look at or there is another code but a bit longer
       }
       
       });    
//End gallery



 // start Dynamic Tabs vertical and hz
 $(".tabs-list li").on("click", function(){
  
 $(this).addClass("active").siblings().removeClass("active");
 
 $(".content-list > div").hide();
 
 $( $(this).data("content") ).fadeIn();
 
  });
 
 $(".switch-tabs-view").on("click",function(){
  
   $(this).next(".dynamic-tabs").toggleClass("left-tabs");
  
  });
 // end Dynamic Tabs vertical and hz
    
    
    });//document ready