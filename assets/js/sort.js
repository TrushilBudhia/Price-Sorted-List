const addButton = document.querySelector("#add");
const itemList = document.querySelector(".items-list");
let listItemArray = [];

function wrapArrayInQuotation(array) {
    return `${array}`
};

function sortByPriceAscending(jsonString) {
    // const itemsArray = JSON.parse(jsonString);
    const itemsArray = jsonString;
    // console.log('itemsArray', itemsArray);
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
    // const arrayString = wrapArrayInQuotation(listItemArray);
    // sortByPriceAscending(arrayString);
    // itemList.innerHTML = "";
    // for (let i = 0; i < arrayString.length; i++) {
    //     const listItemEntry = document.createElement('li');
    //     listItemEntry.textContent = arrayString[i];
    //     itemList.append(listItemEntry);
    // }
    const sortedArray = sortByPriceAscending(listItemArray);
    itemList.innerHTML = "";
    for (let i = 0; i < sortedArray.length; i++) {
        const listItemEntry = document.createElement('li');
        const itemDisplay = `{"name": "${sortedArray[i].name}", "price": ${sortedArray[i].price}}`;
        listItemEntry.textContent = itemDisplay;
        itemList.append(listItemEntry);
    }
};

function addItemAsJson() {
    const itemName = document.querySelector("#item-name").value;
    const itemPrice = Number(document.querySelector("#item-price").value);
    const itemDisplay = JSON.parse(`{"name": "${itemName}", "price": ${itemPrice}}`);
    listItemArray.push(itemDisplay);
    // const listItemEntry = document.createElement('li');
    // listItemEntry.textContent = itemDisplay;
    // itemList.appendChild(listItemEntry);
    // itemList.append(listItemArray);
    console.log(listItemArray);
    renderItemList();
};

// var items = '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
// console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));

addButton.addEventListener('click', addItemAsJson);