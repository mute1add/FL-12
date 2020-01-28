

// Your code goes here

const rootNode = document.getElementById('root');
window.location.hash = '';
let todoItems;
let myStorage = window.localStorage;
if (myStorage.todos === undefined) {
    myStorage.todos = JSON.stringify([]);
} else {
    todoItems = JSON.parse(myStorage.todos);
}
todoItems = JSON.parse(window.localStorage.todos);
//Loading main page:
const mainPageDrawer = itemsArr => {
    const mainSection = document.createElement('div');
    mainSection.className = 'mainSection';
    const mainSectionHeader = document.createElement('h1');
    mainSectionHeader.innerHTML = 'Simple TODO application';
    const addItemButton = document.createElement('button');
    addItemButton.className = 'addItemButton';
    addItemButton.innerHTML = 'Add new task';
    addItemButton.addEventListener('click', () => {
        rootNode.replaceChild(addPageDrawer(), rootNode.firstChild);
    });
    let listSection = document.createElement('div');
    listSection.id = 'list';
    if (itemsArr.length === 0) {
        let message = document.createElement('p');
        message.className = 'emptyListMessage';
        message.innerHTML = 'TODO is empty';
        listSection.appendChild(message);
    } else {
        listSection = document.createElement('div');
        listSection.appendChild(drawAllItems(itemsArr))
    }
    mainSection.appendChild(mainSectionHeader);
    mainSection.appendChild(addItemButton);
    mainSection.appendChild(listSection);
    return mainSection;
}
//Draw 1 item:
const drawItem = itemObj => {
    const item = document.createElement('div');
    item.className = 'item';
    const itemCheckedIco = document.createElement('div');
    if (itemObj.isDone) {
        itemCheckedIco.className = 'itemUncheckedIco';
        item.className = 'done item';
    } else {
        itemCheckedIco.className = 'itemCheckedIco';
    }
    itemCheckedIco.addEventListener('click', () => {
        checkItem(itemObj)
    })
    const itemDescription = document.createElement('p');
    itemDescription.className = 'itemDescription';
    itemDescription.innerHTML = itemObj.description;
    if (!itemObj.isDone) {
        itemDescription.addEventListener('click', () => {
            modifyPageDrawer(itemObj)
        })
    }
    const deleteItemIco = document.createElement('div');
    deleteItemIco.className = 'deleteItemIco';
    deleteItemIco.addEventListener('click', () => {
        removeItemHandler(itemObj.id)
    })
    item.appendChild(itemCheckedIco);
    item.appendChild(itemDescription);
    item.appendChild(deleteItemIco);
    return item;
}
// Draw all items:
const drawAllItems = items => {
    const itemsList = document.createElement('div');
    itemsList.id = 'list';
    for (let item of items) {
        if (!item.isDone) {
            itemsList.appendChild(drawItem(item));
        }
    }
    for (let item of items) {
        if (item.isDone) {
            itemsList.appendChild(drawItem(item));
        }
    }
    return itemsList;
}
// Check item as done
const checkItem = itemObj => {
    itemObj.isDone = !itemObj.isDone;
    myStorage.todos = JSON.stringify(todoItems);
    rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
}
// Remove item from list
const removeItemHandler = itemID => {
    let updatedItemsList = todoItems.filter(todoItem => todoItem.id !== itemID);
    todoItems = updatedItemsList;
    myStorage.todos = JSON.stringify(todoItems);
    rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
}
// Add new Task page drawer:
const addPageDrawer = () => {
    window.location.hash = 'add';
    const addSection = document.createElement('div');
    addSection.className = 'addSection';
    const addSectionHeader = document.createElement('h1');
    addSectionHeader.innerHTML = 'Add task';
    const inputDescription = document.createElement('input');
    inputDescription.className = 'input';
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'buttonsWrapper';
    const cancelModifyBtn = document.createElement('button');
    cancelModifyBtn.innerHTML = 'Cancel';
    cancelModifyBtn.addEventListener('click', () => {
        window.location.hash = '';
    })
    const saveChangesBtn = document.createElement('button');
    saveChangesBtn.innerHTML = 'Save changes';
    saveChangesBtn.addEventListener('click', () => {
        addItemHandler(inputDescription.value);
    })
    buttonsWrapper.appendChild(cancelModifyBtn);
    buttonsWrapper.appendChild(saveChangesBtn);
    addSection.appendChild(addSectionHeader);
    addSection.appendChild(inputDescription);
    addSection.appendChild(buttonsWrapper);
    return addSection;
}
// add item handler:
const addItemHandler = (value) => {
    if (todoItems.find(x => x.description === value)) {
        alert(`Can't add existing item!`)
    } else if (value.length === 0) {
        alert(`Add some description!`)
    } else {
        todoItems.push({
            isDone: false,
            id: todoItems.length + 1,
            description: value
        })
        window.location.hash = '';
    }
    myStorage.todos = JSON.stringify(todoItems);
}
// Modify task page drawerЖ
const modifyPageDrawer = itemObj => {
    window.location.hash = `/modify/:${itemObj.id}`;
    const modifySection = document.createElement('div');
    modifySection.className = 'modifySection';
    const modifySectionHeader = document.createElement('h1');
    modifySectionHeader.innerHTML = 'Modify task';
    const inputModify = document.createElement('input');
    inputModify.className = 'input';
    inputModify.setAttribute('value', `${itemObj.description}`)
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'buttonsWrapper';
    const cancelModifyBtn = document.createElement('button');
    cancelModifyBtn.innerHTML = 'Cancel';
    cancelModifyBtn.addEventListener('click', () => {
        window.location.hash = '';
    })
    const saveChangesBtn = document.createElement('button');
    saveChangesBtn.innerHTML = 'Save changes';
    saveChangesBtn.addEventListener('click', () => {
        if (todoItems.find(el => el.description === inputModify.value)) {
            alert(`Such item already exists!`)
        } else {
            itemObj.description = inputModify.value;
            window.location.hash = '';
        }
    })
    buttonsWrapper.appendChild(cancelModifyBtn);
    buttonsWrapper.appendChild(saveChangesBtn);
    modifySection.appendChild(modifySectionHeader);
    modifySection.appendChild(inputModify);
    modifySection.appendChild(buttonsWrapper);
    rootNode.replaceChild(modifySection, rootNode.firstChild);
}
const currentPage = mainPageDrawer(todoItems);
const locationHashChanged = () => {
    if (location.hash === '') {
        if (rootNode.firstChild) {
            rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
        } else {
            rootNode.appendChild(currentPage);
        }
    } else if (location.hash === '#add') {
        rootNode.replaceChild(addPageDrawer(), rootNode.firstChild);
    }
}
window.onhashchange = locationHashChanged;
rootNode.appendChild(currentPage);
