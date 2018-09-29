var quotes = [];
// can use this way too 
// quotes[0]= {q: "Our greatest glory is not in never falling, but in rising every time we fall",a: "Confucius"};
// quotes[1]={q:"All our dreams can come true, if we have the courage to pursue them", a:"Walt Disney"};
// quotes[2]={q:"It does not matter how slowly you go as long as you do not stop", a: "Confucius"};
// quotes[3]={q:"Everything you have ever wanted is on the other side of fear", a: "George Addair"};
// quotes[4]={q:"Success is not final, failure is not fatal: it is the courage to continue that counts.", a:"Winston Churchill"};
// quotes[5]={q:"Hardships often prepare ordinary people for an extraordinary destiny",a:"C.S Lewis"};
// quotes[6]={q:"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine", a: "Roy T. Bennett"};
quotes = [
    {
        q: "Our greatest glory is not in never falling, but in rising every time we fall",
        a: "Confucius"
    },
    {
        q: "All our dreams can come true, if we have the courage to pursue them",
        a: "Walt Disney"
    },
    {
        q: "It does not matter how slowly you go as long as you do not stop",
        a: "Confucius"
    },
    {
        q: "Everything you have ever wanted is on the other side of fear",
        a: "George Addair"
    },
    {
        q: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        a: "Winston Churchill"
    },
    {
        q: "Hardships often prepare ordinary people for an extraordinary destiny",
        a: "C.S Lewis"
    },
    {
        q: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine",
        a: "Roy T. Bennett"
    }
]

function changeQuoteColor() {
    var randomNum = Math.floor(Math.random() * 7);
    var randomcol1 = Math.floor(Math.random() * (255 + 1));
    var randomcol2 = Math.floor(Math.random() * 256);
    var randomcol3 = Math.floor(Math.random() * 256);

    
// only need to put fadeIn in the body and everything will be also 
    var bgr = "rgb(" + randomcol1.toString() + "," + randomcol2.toString() + "," + randomcol3.toString() + ")";
    $("body").hide().css("background-color", bgr).fadeIn('slow');
    $("#twitter").css("background-color", bgr);
    $("#tumblr").css("background-color", bgr);
    $("#changeQuote").css("background-color", bgr);
    $("#quote").html(quotes[randomNum].q).css("color", bgr);
    $("#author").html(quotes[randomNum].a).css("color", bgr);
}

// var bg= "rgb("+randomcol1.toString()+","+randomcol2.toString()+","+randomcol3.toString()+")";
// $("#container").css("background-color",bg);
// $("twitter").css("background-color",bg);
// $("tumblr").css("background-color",bg);
// $("changeQuote").css("background-color",bg);

changeQuoteColor();
$("#changeQuote").click(function () {
    // $("#quote").html(quotes[randomNum]);
    // randomNum = Math.floor(Math.random()*7);
    // var bgr= "rgb("+randomcol1.toString()+","+randomcol2.toString()+","+randomcol3.toString()+")";
    // $("#container").css("background-color",bgr);
    // $("twitter").css("background-color",bgr);
    // $("tumblr").css("background-color",bgr);
    // $("changeQuote").css("background-color",bgr);
    // // console.log(randomcol1);
    // // console.log(randomcol2);
    // // console.log(randomcol3);
    // randomcol1= Math.floor(Math.random()*256);
    // randomcol2= Math.floor(Math.random()*256);
    // randomcol3= Math.floor(Math.random()*256);
    changeQuoteColor()

});

