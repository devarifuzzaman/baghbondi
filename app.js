var count=0;


$("h2").text("start Playing Game");

$(".box").click(function(){
    
    count= count+1;
    
    //$(this).text("x");
    
    //$(this).text(count);
    if(count%2==0){
        $(this).text("0");
    }
    else{
        $(this).text("X");
    }
})