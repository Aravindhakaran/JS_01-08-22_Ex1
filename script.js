function myFunction(){
let a= document.getElementById("input1").value;
let b= document.getElementById("input2").value;
a=parseInt(a);
b=parseInt(b);

if(a>b){
    document.getElementById("result").innerHTML = "The Result is: A > B";
}
else if(a<b){
    document.getElementById("result").innerHTML = "The Result is: A < B";
}
else if(a==b){
    document.getElementById("result").innerHTML = "The Result is: A = B";
}
else{
    document.getElementById("result").innerHTML = "Give Valid input";
}
}

//Exercise-2

function myFunction2(){
    let a= document.getElementById("inputA").value;
    let b= document.getElementById("inputB").value;
    let c= document.getElementById("inputC").value;
    
    
    if(a>b && a>c){
        document.getElementById("result2").innerHTML = "A is the Biggest Value";
    }
    else if(b>a && b>c){
        document.getElementById("result2").innerHTML = "B is the  Biggest Value";
    }
    else if(c>a && c>b){
        document.getElementById("result2").innerHTML = "C is the  Biggest Value";
    }
    else if(a==b && b==c && c==a){
        document.getElementById("result2").innerHTML = "All three values are same";
    }
    else{
        document.getElementById("result2").innerHTML = "Give Valid input";
    }
    }