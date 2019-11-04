// ELEMENT
function elm(x){
    var target = x.substring(1);
    var type = x.charAt(0);
    if(type == '#'){
        return document.getElementById(target);
    }else if(type == '.'){
        return document.getElementsByClassName(target);  
    }else {
        return document.getElementsByTagName(x);
    }
}


// SUB MENU
if(elm(".has-submenu")){
    for(var i=0,len=elm(".has-submenu").length; i<len; i++){
        elm(".has-submenu")[i].onclick = function(e){
            e.stopPropagation();
            toggle(this.nextElementSibling);
        }
    }   
}

//check all
if(elm(".checkAll") != undefined){
    for(var i=0,len=elm(".checkAll").length; i<len; i++){
        var target = elm(".checkAll")[i].getAttribute("target");
        if(elm(target)[i] != undefined){
            elm(".checkAll")[i].onchange = function(){
                var checked = this.checked;
                for(var i=0,len=elm(target).length; i<len; i++){
                    elm(target)[i].checked = checked;
                }
            }   
        }
    }   
}



// INPUT IMG
function getImg(x){
    if( x.files.length > 0 ){
        var fr = new FileReader();
        var imgSrc = null;
        var parent = x.parentElement;
        fr.onload = function(e){
            imgSrc = e.target.result;
            if( parent.getElementsByTagName("img").length > 0 ){
                parent.removeChild(parent.getElementsByTagName("img")[0]);
            }
            var img = document.createElement("img");
            img.setAttribute("src",imgSrc);
            img.style.width = "80px";
            img.style.verticalAlign = "top";
            parent.appendChild(img);
        }
        fr.readAsDataURL(x.files[0]);
    }
}

// NEW INPUT
for(var i=0,len=elm(".btnNewInput").length; i<len; i++){
    elm(".btnNewInput")[i].onclick = function(){
        findClosest(this,elm(".inputGroup")).nextElementSibling.classList.remove("hide");
    };
}


if(elm(".caretAll")){
    for(var i=0,len=elm(".caretAll").length; i<len; i++){
        elm(".caretAll")[i].onchange = function(){
            var stt = this.checked;
            var table = findClosest(this,elm(".table")); 
            var row = findChildren(table,elm(".row"));
            for(var i=0,len=row.length; i<len; i++){
                if(stt){
                    row[i].classList.add("is-active");   
                }else {
                    row[i].classList.remove("is-active");
                }
            }
        }  
    } 
}


//TOGGLE
function toggle(x){
  var css = window.getComputedStyle(x,null);
    if(css.getPropertyValue("display") == 'none'){
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
    }
}


