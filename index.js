function introduction(input){
    return `Hi, my name is ${input}.`
}

function introductionWithLanguage(input, output){
    return `Hi, my name is ${input} and I am learning to program in ${output}.`
}

function introductionWithLanguageOptional(input, output = "JavaScript"){
    return `Hi, my name is ${input} and I am learning to program in ${output}.`
}