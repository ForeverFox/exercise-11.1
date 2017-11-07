// This seemed a little over my head, so it's straight from the finished file:
$(function() {
    // extract the query string parameters
    var paramLoc = window.location.href.indexOf("?");
    var paramStr = window.location.href.slice(paramLoc+1);
    var prodName = "";
    var prodID = "";
    var i = paramStr.indexOf("prodName=")+9;
    for (var j = i; j < paramStr.length; j++) {
        if (paramStr.charAt(j) == "&")
            break;
        prodName += paramStr.charAt(j);
    }
    var i = paramStr.indexOf("prodID=")+7;
    for (var j = i; j < paramStr.length; j++) {
        if (paramStr.charAt(j) == "&")
            break;
        prodID += paramStr.charAt(j);
    }
    prodName = decodeURIComponent(prodName);
    prodID = decodeURIComponent(prodID);
    
    // set the product name in the proper placeholder
    $("#productName").text(prodName);
});
// I omitted the AJAX part because it was throwing an error in Chrome and I didn't know what it meant anyway