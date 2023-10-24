alert("hello")
var randomNumber
var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
var userClickPattern=[]
var isgamestarted=false
var level=0
document.onkeydown=function()
{
    if(!isgamestarted)
    {
        isgamestarted=true
        nextSequence()
    }
}

function  nextSequence()
{level=level+1;
    document.getElementById("level-title").innerText="level"+level
 randomNumber= Math.floor(Math.random() * 4);
//console.log(randomNumber)
var randomChosenColour=(buttonColours[randomNumber])
console.log(randomChosenColour)
gamePattern.push(randomChosenColour)
document.getElementById(randomChosenColour).style.backgroundColor="rgba(255, 255, 255, 0.5)"
setTimeout(() => {
    document.getElementById(randomChosenColour).style.backgroundColor=""
}, 1000);
}
function sound(name)
{
switch (name) {
    case "green":
        var audio1="sounds/green.mp3"
        const audio=new Audio(audio1)
        audio.play()
    

    default:
        break;
}
}
for(var i=0;i<document.querySelectorAll(".btn").length;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function (event) {
        
        var userChosenColour=this.id;
        //console.log(this.id+"hee")
       userClickPattern.push(userChosenColour)
       console.log(userClickPattern)
    checkanswer(userClickPattern)
     // sound(userChosenColour)
      document.getElementById(userChosenColour).addEventListener("click",function fun() {
        sound(userChosenColour)
        document.getElementById(userChosenColour).style.backgroundColor="rgba(255, 255, 255, 0.5)"
        setTimeout(() => {
            document.getElementById(userChosenColour).style.backgroundColor=""
        }, 100);
    })
    } )
}
function checkanswer(currentlevel)
{
if(currentlevel[currentlevel.length-1]==gamePattern[currentlevel.length-1])
{
    console.log("true")
   
    if(currentlevel.length==gamePattern.length)
    {
        setTimeout(() => {
            nextSequence()
            userClickPattern=[]
        }, 1000);
    }
}
else{
    document
    console.log("false")
    console.log(currentlevel[currentlevel.length-1])
    document.body.className="game-over"
    setTimeout(() => {
        document.body.className=""
        document.getElementById("level-title").innerText="Game Over, Press Any Key to Restart"
        
    }, 1000);
   
   gamestart()
   
}
}
function gamestart()
{
    level=0;
    gamePattern=[]
    userClickPattern=[]
    isgamestarted=false
}