// From my script.js file for Exercise 10.1:
$("document").ready(function() {
	$("#products h2.product-name[data-type='vitamin']").css("backgroundColor", "darkgreen");
	$("#products h2.product-name[data-type='mineralwater']").css("backgroundColor", "blue");
	$("#products h2.product-name[data-type='proteinbar']").css("backgroundColor", "purple");
// This exercise was a bit confusing, so all of this is totally taken from the video and the finished index.html file:
    document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
        updateProductView("vitamins", evt.target.checked);
    });

    document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
        updateProductView("mineralwater", evt.target.checked);
    });

    document.querySelector('#cbProtein').addEventListener('change',function (evt) {
        updateProductView("proteinbar", evt.target.checked);
    });

    $(".product-item").each(function () {
        var prodName = encodeURIComponent($(this).children("h2").text());
        var prodID = encodeURIComponent($(this).data("prod_id"));

        var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
        $(this).children("img").wrap(link);
    });
        

    function updateProductView(categoryName, bVisible) {
        // get a list of the product items for the given category.
        // Use the data attributes to narrow the list
        var dataSelectorVal = "";
        switch (categoryName) {
        case "vitamins":
            dataSelectorVal = "h2[data-type='vitamin']";
            break;
        case "mineralwater":
            dataSelectorVal = "h2[data-type='mineralwater']";
            break;
        case "proteinbar":
            dataSelectorVal = "h2[data-type='proteinbar']";
            break;
        }
        // use the has() function to select the li tags that are product items
        // that contain the h2 tag with the corresponding data attribute value
        $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
    };
// My script for Exercise 11.1, second part leveraged from the video:
    $(".product-item").each(function () {
// my attempt:
        var prodName = $("h2.product-name").text();
// code taken from video:
        var prodID =
        encodeURIComponent($(this).data("prod_id"));
        var link = $("a href='product.html?prodName=" + prodName + "&prodId=" + prodID + "'/>");
            $(this).children("img").wrap(link);       
// encodeURIComponent is a browser function that converts characters like "&" for use in URLs

// $(this).children("img").wrap(link) wraps link around img; user clicks image to open product page
    })
});
