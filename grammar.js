function choose(arr){
    return arr[Math.floor(Math.random()*(arr.length))]
}
function capitalize (string){return  string.replace(/^\w/, c => c.toUpperCase())}

let grammars = {
    GenerationSimple : function (gram){
        
        g = tracery.createGrammar(gram);
        var result = g.flatten("#origin#")
        console.log(result);
        return result;
    }

}