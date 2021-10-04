const addButton = document.querySelector("#add");
const itemListJson = document.querySelector(".items-list-json");
const itemList = document.querySelector(".items-list");
let listItemArray = [];

function sortByPriceAscending(jsonString) {
    // const itemsArray = JSON.parse(jsonString);
    const itemsArray = jsonString;
    if (itemsArray.length > 1) {
        const sorted = listItemArray.sort(function (a, b) {
            return b.price - a.price || a.name.localeCompare(b.name);
        });
        console.log('sorted', sorted);
        return sorted;
    }
    else {
        return itemsArray;
    }
};

function renderItemList() {
    const sortedArray = sortByPriceAscending(listItemArray);
    itemListJson.innerHTML = "";
    itemList.innerHTML = "";
    for (let i = 0; i < sortedArray.length; i++) {
        const jsonListItemEntry = document.createElement('li');
        const itemDisplayJson = `{"name": "${sortedArray[i].name}", "price": ${sortedArray[i].price}}`;
        jsonListItemEntry.textContent = itemDisplayJson;
        itemListJson.append(jsonListItemEntry);

        const listItemEntry = document.createElement('li');
        const itemDisplay = `${sortedArray[i].name} - $${sortedArray[i].price.toFixed(2)}`;
        listItemEntry.textContent = itemDisplay;
        itemList.append(listItemEntry);
    }
};

function addItemAsJson() {
    const itemName = document.querySelector("#item-name").value;
    const itemPrice = Number(document.querySelector("#item-price").value);
    if (!itemName && !itemPrice) {
        console.log("Input an item name and price please.");
        return;
    }
    else {
        const itemDisplay = JSON.parse(`{"name": "${itemName}", "price": ${itemPrice}}`);
        listItemArray.push(itemDisplay);
        console.log(listItemArray);
        renderItemList();
    }
};

// var items = '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
// console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));

addButton.addEventListener('click', addItemAsJson);