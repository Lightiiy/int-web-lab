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
            console.log(removable);
            this.listRender.removeChild(removable);
            console.log(this.actionList);
            this.actionList.splice(index, 1);
            console.log(this.actionList);
        };
        this.createDeleteButton = (action) => {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = '❌';
            action.appendChild(deleteButton);
        };
        this.title = title;
        this.actionList = [{ action: 'test', isDone: false },
            { action: 'test15', isDone: false },
            { action: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', isDone: false }];
        this.listRender = document.createElement('ol');
        this.listRender.classList.add('to-do-list');
        this.listRender.id = (this.title);
        document.querySelector('#list-wrapper')?.appendChild(this.listRender);
        this.date = this.getFormatedDate();
        document.documentElement.style.setProperty('--date', this.date);
        console.log(getComputedStyle(document.documentElement).getPropertyValue('--date'));
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
}
//MAIN
const mainList = new ToDoList('mainList');
const currList = mainList;
const formActionAddToList = (list, action) => {
    list.addActionToList(action);
};
const overrideEnter = (event) => {
    var inputEl = document.querySelector('input[name=action_input]');
    if (event.key === 'Enter') {
        event?.preventDefault();
        formActionAddToList(currList, event.target.value);
    }
};
//ZAD Jquery.1 -> usuwanie wybranego elementu z listy
$(function () {
    $(document).on("click", '.delete-button', function () {
        const index = $(this).parent().index();
        console.log(index);
        currList.removeFromBothLists(index);
    });
});
