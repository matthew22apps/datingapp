//if (document.getElementById("submitbutton")!==null){
    //document.getElementById("submitbutton").addEventListener("click",function(){
     //   document.getElementById("load1").style.display==="block"
   //     document.getElementById("load2").style.display==="block"
  //  })
//}



function loginalready(){
    if(localStorage.getItem('data') != null){
        if(localStorage.getItem('userid') != null){
            if (window.location.href === "https://matthew22apps.github.io/datingapp/CreateUser"){
                window.location.href = "https://matthew22apps.github.io/datingapp/";
            }
            else{if (window.location.href === "http://127.0.0.1:5500/CreateUser.html"){
                window.location.href = "http://127.0.0.1:5500/index.html";
                }else{
                window.location.href = "file:///C:/Users/Matth/repos/datingapp/index.html";
                }
            }
        }
    }
}

if(localStorage.getItem('userid') == null){
    document.getElementById("allinputs").style.display = "block";
    document.getElementById("divideboy").style.display = "block";
    document.getElementById("input222").style.display = "block";
    document.getElementById("submitbutton").style.display = "block";
    document.getElementById("head22222").style.display = "block";
    document.getElementById("biguy").style.display = "block";
    document.getElementById("loginbutton").style.display = "none";
}