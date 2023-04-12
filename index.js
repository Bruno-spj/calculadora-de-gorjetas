function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQaul = document.getElementById('serviceQual').value;
    let People = document.getElementById('people').value;


    if (bill == '' | serviceQaul == 0) {
        alert("por favor, preencha os valores")
        return;
        
    }


    if (People == "" | People <=1) {
    People = 1;
    document.getElementById('each').style.display = "none"
    }else{
        document.getElementById('each').style.display = "block"
    }

    let total =(bill * serviceQaul) / People;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    document.getElementById('total-gorjeta').style.display = "block";
}

document.getElementById('total-gorjeta').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('formulario').addEventListener('submit' , calculateTip);
    