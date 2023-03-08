//introduction(name)
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction(Aki)

//introductionWithLanguage(name, language)
function introductionWithLanguage (name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introduction(Aki, Ember.js)

//introductionWithLanguageOptional(name, language)
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional(Aki, "JavaScript")