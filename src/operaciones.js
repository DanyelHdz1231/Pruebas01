function suma (a,b){
    return a+b;
}

function dividir (a,b){
    if (b===0) return "Error";
    return a/b;
}

module.exports= {suma,dividir};