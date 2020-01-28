function textProcessor(input, tokens){
    if(typeof input === "string"){
        if(input.length < 6){
            throw new Error("Input should have at least 6 characters");
        }
    }else{
       throw new Error("Input should be a string");
    }
    
    tokens.forEach(token =>{
        if(typeof token.tokenName !== "string"){
            throw new Error("Invalid array format");
        }
    });
    
    if(!input.includes("${")){
        return input;
    }else{
        tokens.forEach(token=>{
           input =  input.replace("${"+`${token.tokenName}`+"}", `${token.tokenValue}`);
        })
        return input;
    }
}

const app = {
    textProcessor: textProcessor
};

module.exports = app;