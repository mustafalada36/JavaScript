var result = 'first';
if (result == 'first') {
    console.log("first");
} else if (result == 'second'){
    console.log("Second");
}
else if (result == 'third'){
    console.log("third");
}
else {
    console.log("default");
}

//Both are same

switch (result) {
    case 'first':
        console.log("first");
        break;
    case 'second':
        console.log("second");
         break;
    case 'third':
            console.log("third");
            break;
    default:
        console.log("default")
        break;
}