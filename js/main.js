/*
    This function create product tiles
    that contain product's name and image
    and displays on the page
*/
function makeProductTile() {
    // Fetches product information from a JSON file
    $.getJSON('product-data.json', function (data) {
        products = data; // Stores product's data into a variable
        row = 0; // Used to indicate current row

        // Loop to iterate through all products
        for (let index = 0; index < products.length; index++) {
            // Checks whether new row needs to be created
            if (index % 3 == 0) {
                row = index / 3;

                // Creates a row to contain product tiles 
                $("#main").append('<div class="products d-flex flex-row justify-content-center"></div> <!-- ROW ' + row + ' -->');

                $(".products").eq(row).append(
                    // Bootstrap code to create product tile
                    `<div class="product-tile m-2 w-25 rounded overflow-hidden position-relative d-flex justify-content-center">
                        <a href="product.html?product=`+ products[index].name +`" target="_blank">
                            <img src="images/product-images/` + products[index].image + `" alt="`+ products[index].name +`" class="h-100">
                            <h5 class="product-name position-absolute bottom-0 start-0 p-3 text-uppercase">` + products[index].name + `</h5>
                        </a>
                    </div>`
                );

            } else { // Else creates product tile on existing row
                // This function create product tile containing name and image inside given row
                $(".products").eq(row).append(
                    // Bootstrap code to create product tile
                    `<div class="product-tile m-2 w-25 rounded overflow-hidden position-relative d-flex justify-content-center">
                        <a href="product.html?product=`+ products[index].name +`" target="_blank">
                            <img src="images/product-images/` + products[index].image + `" alt="`+ products[index].name +`" class="h-100">
                            <h5 class="product-name position-absolute bottom-0 start-0 p-3 text-uppercase">` + products[index].name + `</h5>
                        </a>
                    </div>`
                );
            }
        }
    });
}