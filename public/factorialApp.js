
function factorialize(number){
        var result = 1;
        for (var i = 1; i <= number; i++){
            result = result * i;
        }
            return result;
    };

module.exports = factorialize; 


