$(document).ready(initializeDiv);

function initializeDiv() {

    // starts loading
    var itemCount = 0;
    var itemInput = $("input#item");
    itemInput.val("");

    //function to add an item
    $("a#add-item").click(shoppingList);
    $("#item").keydown(function (enter) {
        if (enter.keyCode == 13) {
            shoppingList();
        }
    });

    function shoppingList() {
        if (itemInput.val() === '') {
            return;
        }
        // be able to add items to list
        var items = $("ul#items");
        var purchased = $("ul#purchased");
        var itemToBuy = itemInput.val();
        itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        var listItem = $("<li><input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> " + itemToBuy + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
        listItem.attr("id", "item[" + itemCount+++"]");
        addItem(listItem);

        //delete items
        listItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });

        // add the item to the list then slow it away maybe do this with just css
        function addItem(listItem) {
            listItem.hide();
            items.append(listItem);
            listItem.show('slow');
        }
        // move item
        function purchasedItem(listItem) {
            listItem.hide();
            purchased.append(listItem);
            listItem.show('slow');
        }
        //toggle!! (sorta)
        listItem.find("input:checkbox").click(function () {
            this.checked ? purchasedItem(listItem) : addItem(listItem);
        });

        // clear input and refocus
        itemInput.focus();
    }
}