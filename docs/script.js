"use strict";
//TODOLIST OBJECT
class ToDoList {
    constructor(title) {
        this.addActionToList = (action) => {
            //omit from adding empty strings
            if (action.replace(/\s/g, '') === '') {
                alert("We all want to do nothing, but please don't add empty actions 🤡");
                return;
            }
            this.actionList.push({ action: action, isDone: false });
            this.createDeleteButton(this.appendtoRenderedList(action));
        };
        this.appendtoRenderedList = (action) => {
            const newLI = document.createElement('li');
            newLI.setAttribute('date', this.date);
            newLI.appendChild(document.createTextNode(action));
            this.listRender.appendChild(newLI);
            newLI.addEventListener('click', (event) => {
                const element = event.target;
                const index = [...this.listRender.children].indexOf(element);
                if (index !== -1) {
                    this.actionList[index].isDone = !this.actionList[index].isDone;
                    element.classList.toggle("isDone");
                }
            });
            return newLI;
        };
        this.removeFromBothLists = (index) => {
            const removable = [...this.listRender.children][index];
            this.listRender.removeChild(removable);
            this.appendToGraveyard(this.actionList[index]);
            this.actionList.splice(index, 1);
        };
        this.createDeleteButton = (action) => {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = '❌';
            action.appendChild(deleteButton);
        };
        this.title = title;
        this.date = this.getFormatedDate();
        this.actionList = [];
        this.listRender = document.createElement('ol');
        this.listRender.classList.add('to-do-list');
        this.listRender.id = (this.title);
        this.yard = document.createElement('p');
        if (this.actionList.length !== 0) {
            this.actionList.forEach(element => {
                this.createDeleteButton(this.appendtoRenderedList(element.action));
            });
        }
    }
    getFormatedDate() {
        const date = new Date();
        const today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
        return today;
    }
    appendToGraveyard(action) {
        this.graveyard = action;
        const grave = document.createElement('p');
        grave.textContent = action.action;
        grave.classList.add('grave');
        if (this.yard.hasChildNodes()) {
            this.yard.replaceChildren(grave);
        }
        this.yard.appendChild(grave);
    }
    resurrect() {
        if (this.graveyard === undefined) {
            console.error("Can't resurrect the dirt");
            return;
        }
        this.addActionToList(this.graveyard.action);
        delete this.graveyard;
    }
    renderList() {
        document.querySelector('#list-wrapper')?.appendChild(this.listRender);
        document.querySelector('#graveyard-wrapper')?.appendChild(this.yard);
    }
    derenderList() {
        document.querySelector('#list-wrapper')?.removeChild(this.listRender);
        document.querySelector('#graveyard-wrapper')?.removeChild(this.yard);
    }
}
//MAIN
const mainList = new ToDoList('Main List');
const altList = new ToDoList('Additional List');
const listOfLists = [mainList, altList];
const listOfListsRender = document.createElement('ol');
var currList = mainList;
mainList.addActionToList('test');
mainList.addActionToList('test2');
mainList.addActionToList('test3');
mainList.addActionToList('test4');
altList.addActionToList('dupa');
altList.addActionToList('dupa2');
altList.addActionToList('dup3a');
altList.addActionToList('dup4a');
listOfListsRender.classList.add('list-of-lists');
document.querySelector('.lists-wrapper')?.appendChild(listOfListsRender);
const addListToRender = (title) => {
    const newLI = document.createElement('li');
    newLI.appendChild(document.createTextNode(title));
    newLI.addEventListener("click", (event) => {
        const element = event.target;
        const index = [...listOfListsRender.children].indexOf(element);
        switchContext(index);
    });
    listOfListsRender.appendChild(newLI);
};
listOfLists.forEach((element) => {
    addListToRender(element.title);
});
currList.renderList();
const switchContext = (index) => {
    currList.derenderList();
    currList = listOfLists[index];
    currList.renderList();
};
const addListToLists = (list) => {
    listOfLists.push(list);
    addListToRender(list.title);
};
const formActionAddToList = (list, action) => {
    list.addActionToList(action);
};
const formListAddToLists = (title) => {
    const newList = new ToDoList(title);
    addListToLists(newList);
    switchContext(listOfLists.length - 1);
};
const overrideEnter = (event) => {
    const inputEl = document.querySelector('input[name=action_input]');
    if (inputEl !== null) {
        if (event.key === 'Enter') {
            event?.preventDefault();
            formActionAddToList(currList, event.target.value);
            inputEl.value = '';
        }
    }
};
$(function () {
    //  function toggleModal(variant: string, index: number = 0){
    //     console.log(variant);
    //         switch (variant)
    //         {
    //             case 'delete':
    //                 $('#modal').toggleClass('hidden');
    //                 $('#delete').toggleClass('hidden');
    //                 $('#delete-yes').on("click", function(){
    //                     console.log(index);
    //                     // currList.removeFromBothLists(index);
    //                     $('#modal').toggleClass('hidden');
    //                     $('#delete').toggleClass('hidden');
    //                 })
    //                 break;
    //             default:
    //                 console.error('wrong variant of modal');
    //         }
    // }
    //ZAD Jquery.1 -> usuwanie wybranego elementu z listy
    //ZAD Jquery.3 -> modal przy usuwaniu elementu z listy
    $(document).on("click", '.delete-button', function () {
        // toggleModal('delete', $(this).parent().index());
        const index = $(this).parent().index();
        currList.removeFromBothLists(index);
    });
    //ZAD Jquery.2 -> kosz z funkcjonalnoscia ctrl+z
    $(document).on("click", '.grave', function () {
        currList.resurrect();
        $(this).remove();
    });
    $(document).keydown(function (event) {
        if (event.which === 90 && event.ctrlKey) {
            currList.resurrect();
            $('.grave').remove();
        }
    });
});
