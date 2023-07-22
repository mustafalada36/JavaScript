// function sayhello (a,b){
//     // var a =10;
//     // var b =20;
//     var c = a+b;
//     console.log("Value is " +c)
// }
//  sayhello(10,20);


 function letterFinder (word,match){
    for(var i=0; i<word.length;i++) 
    {
        if (word[i]==match){
            console.log('Found the', match, 'at', i);

        }
        else {
            console.log('---No match found at', i)
        }
    }
}

    letterFinder ("test","t");