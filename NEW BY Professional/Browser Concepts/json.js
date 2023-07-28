//limitation json does not hold functions



//convert JSON to JS
'{"greeting":"Hello"}'
const jsonString = '{"greeting":"Hello"}';
JSON.parse(jsonString);
const convert = JSON.parse(jsonString);
convert.greeting = "Hi";


