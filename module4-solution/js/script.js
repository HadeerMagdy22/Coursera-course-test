var names=["John","Yakoov","Jack","Hadeer"];
for (var i=0;i<names.length;i++){
    if(names[i].substr(0, 1)=='j' || names[i].substr(0, 1)=='J'){
        console.log("Good Bye : "+names[i]);
    }
    else{
        console.log("Hello : "+names[i]);
    }
}