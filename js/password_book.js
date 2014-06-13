var dbl=localStorage.length;

a=$("#show_list");
for (s=0; s<dbl; s=s+3){
c1=localStorage.getItem("description"+s);
c2=localStorage.getItem("account_name"+s);
c3=localStorage.getItem("password"+s);
b1="<li data-role='list-divider'>"+c1+"</li>";
b2="<li>Account name: "+c2+"</li>";
b3="<li>Password: "+c3+"</li>";
$(b1).appendTo(a);
$(b2).appendTo(a);
$(b3).appendTo(a);
}

$("#addbtn").on("click", function(){
var ipt1=document.getElementById("description").value;
var ipt2=document.getElementById("account_name").value;
var ipt3=document.getElementById("password").value;
localStorage.setItem("description"+dbl, ipt1);
localStorage.setItem("account_name"+dbl, ipt2);
localStorage.setItem("password"+dbl, ipt3);
window.location.reload(true);
});

$("#rstbtn").on("click", function(){
	localStorage.clear();
	window.location.reload(true);
});

document.addEventListener("backbutton", function(e){
    if(document.getElementById('#homepage')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        navigator.app.backHistory()
    }
}, false);