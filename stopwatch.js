let start=document.getElementById("start");
let pause=document.getElementById("pause");
let stoped=document.getElementById("stop");
let data=document.getElementById("showdata");
let sec=document.getElementById("sec");
let mint=document.getElementById("mint");
let hour=document.getElementById("hour");

let id1=0;
let id2=0;
let id3=0;

let count1=0;
let count2=0;
let count3=0;

start.addEventListener("click",startfn)
function startfn()
{  
    start.disabled=true;
    stoped.disabled=false;
    pause.disabled=false;
    id1=setInterval(()=>
    {   
        count1 += 1;
        if(count1==60)
        {
             count1=0;
        }
         (count1<=9 || count1==60) ? (sec.innerText="0"+count1) : (sec.innerText=count1);
    },1000)

    id2=setInterval(()=>
    {   count2 += 1;
        if(count2==60)
        {
            count2=0;
        }
        (count2<=9 || count2==60) ? (mint.innerText="0"+count2) : (mint.innerText=count2);
        
    },60000)
    id3=setInterval(()=>
    {   count3 += 1;
        if(count3==60)
        {
            count3=0;
        }
        (count3<=9 || count3==60) ? (hour.innerText="0"+count3) : (hour.innerText=count3);

    },3600000)
}
let togglevalue=true;
pause.addEventListener("click",pausefn)
function pausefn()
{   if(togglevalue==true)
    {
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        pause.innerText="continue";
        togglevalue=false;
    }
    else
    {   pause.innerText="pause";
        startfn();
        togglevalue=true;
    }
}

stoped.addEventListener("click",stopfn)
function stopfn()
{   start.disabled=false;
    stoped.disabled=true;
    pause.disabled=true;

    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);

    pause.innerText="pause";
    sec.innerText="00";
    mint.innerText="00";
    hour.innerText="00";
    count1=0,count2=0,count3=0;
}