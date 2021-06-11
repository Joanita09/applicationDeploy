function factorialize(number){
    document.getElementById('integer').value = number; 
        var result = 1;
        for (var i = 1; i <= number; i++){
            result = result * i;
        }
            return result;
    };

document.getElementById('output1').innerHTML = factorialize(number);



