var saddy = ["https://s3.amazonaws.com/images.pdpics.com/preview/2032-sad-emotion-egg.jpg","https://cdn.dribbble.com/users/1056213/screenshots/2754918/sad_cloud.png","https://files.brightside.me/files/news/part_68/686910/9644060-articles-5374360-c404ea7748bd4447efec6b39be543c8d-1548852056-728-86be96577b-1549266692.jpg"];
var sleep = ["https://media1.popsugar-assets.com/files/thumbor/oukzWAKyUDVrMLLhMMQKGdHOEhQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2010/04/17/2/192/1922243/25cfab14a0876544_lazylion.jpg ","https://res.cloudinary.com/teepublic/image/private/s--cmRrwHUF--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1527334647/production/designs/2725144_0.jpg "," https://pbs.twimg.com/profile_images/625189339404697601/UCyR0bCD_400x400.jpg"];
var madd = ["https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2019/01/23140919/dream_blast_icon.jpg ","https://i.pinimg.com/originals/3b/0f/93/3b0f93dc62c42c5e0b92bad1943d5a54.jpg ","https://www.demilked.com/magazine/wp-content/uploads/2015/04/animal-photography-angry-charging-lion-atif-saeed-pakistan-3.jpg "];
var food = ["https://image.shutterstock.com/image-vector/hungry-manvector-cartoon-260nw-515384893.jpg "," https://i.chzbgr.com/full/5766219264/h2C5C0BDB/","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRoHYmLnAwzgtEs0XnaV7qELDUKlCyOvSS9-LlyKryyub9bHg "];

function Colors(color1,color2) {
   $("body").css("background-color", color1); 
    $("body").css("color", color2);
}
function Imagenes(pic) {
    pic.forEach(function(imagen){ 
        $("#picss").append("<img src ="+imagen+">");    
    });
}
function NapTime(){
   Colors("#323C4D","#794044");
   Imagenes(sleep);
}
function Hungry(){
      Colors("#bd7de8","#66ff66");
   Imagenes(food);
}
function Angrypal(){
      Colors("#ff0000","#ffcc00");
   Imagenes(madd);
}
function BigSad(){
      Colors("#9dc0f9","#425370");
   Imagenes(saddy);
}

$("#one").click(function(){
   var mood = $("input").val(); 
     
    if(mood === "Sleepy"||mood==="sleepy"){
        NapTime();
    } else if(mood==="Hungry"||mood==="hungry"){
       
        Hungry();
    }else if(mood==="Angry"||mood==="angry"){
        Angrypal();
    }else if(mood==="Sad"||mood==="sad"){
        BigSad();
    }else{
     alert("Please enter Sleepy, Hungry, Angry or Sad!");   
    }
});
