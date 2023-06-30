function darck(){
    const dar=document.getElementById("theme");
    dar.classList.remove("light-body");
    dar.classList.add("darck-body"); 
    const sss=document.getElementById("mode");
    sss.innerHTML="<div class='theme light-body' onclick='light()'> light theme</div>";  
    const li=document.getElementsByClassName("li");
      for(let i=0;i<4;i++) li[i].classList.remove("light-li");
    };

function light(){
    const dar=document.getElementById("theme");
    dar.classList.remove("darck-body");
    dar.classList.add("light-body"); 
    const sss=document.getElementById("mode");
    sss.innerHTML="<div class='theme darck ' onclick='darck()'> darck theme</div>";  
    const li=document.getElementsByClassName("li");
    for(let i=0;i<4;i++) li[i].classList.add("light-li");
};
    
function  Search1(){ 
  var amhouch = document.getElementById("link").value;
  let am=document.getElementById("links"),
  search2=document.getElementsByTagName("IMG")[0].className;
  if(search2=="youtube") am.innerHTML="<a href='https://www.youtube.com/results?search_query="+amhouch+"' target="+"blank"+" id="+"link"+"><button>Search</button></a>";
  if(search2=="google") am.innerHTML="<a href='https://www.google.com/search?q="+amhouch+"' target="+"blank"+" id="+"link"+"><button>Search</button></a>";
  if(search2=="ebay") am.innerHTML="<a href='https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw="+amhouch+"' target="+"blank"+" id="+"link"+"><button>Search</button></a>";
  if(search2=="amazon") am.innerHTML="<a href='https://www.amazon.com/s?k="+amhouch+"' target="+"blank"+" id="+"link"+"><button>Search</button></a>";
  
};

function google(){
  const google1=document.getElementById("image");
  google1.innerHTML="<img src='img/google.png' alt='google' class='google'>";
};
function ebay(){
  const google1=document.getElementById("image");
  google1.innerHTML="<img src='img/ebay.png' alt='ebay' class='ebay'>";
};
function youtube(){
  const google1=document.getElementById("image");
  google1.innerHTML="<img src='img/youtube.png' alt='youtube' class='youtube'>";
};
function amazon(){
  const google1=document.getElementById("image");
  google1.innerHTML="<img src='img/amazon.png' alt='amazon' class='amazon'>";
};



