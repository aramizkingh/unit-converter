function calculate(){
    let getUser = document.getElementById("takenValue").value;
    let getUnit = document.getElementById("selected").value;
    if( getUser === "" ){
        document.getElementById("result").textContent="enter number";
        return;
    }
    if(getUser < 0){
        document.getElementById("result").textContent="Enter a positive Number";
        return;
    }
    let result;
    if(getUnit === "kilometer to miles"){
        result = getUser/1.60934;
        document.getElementById("result").textContent = result.toFixed(2)+ " miles";
    }else{
         result = getUser*1.60934;
        document.getElementById("result").textContent= result.toFixed(2) + " km";
    }
}