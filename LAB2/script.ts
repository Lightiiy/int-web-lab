"use strict"

class ToDoList{

    public title: string;
    public actionList: string[]
    private listRender: Element;

    constructor(title: string){
        this.title = title;
        this.actionList = ['test', 'test3'];

        if( document.querySelector(".to-do-list") !== null)
        {
            this.listRender = document.querySelector(".to-do-list");
        }
        else {
            this.listRender = document.createElement('ul');
            this.listRender.classList.add('to-do-list');
            document.body.append(this.listRender);
        }

        if(this.actionList.length != 0)
        {
            this.actionList.forEach(element => {
                this.addActionToList(element);
            });
        }
    }

    addActionToList = (action: string) => {
        this.actionList.push(action);
        this.appendList(action);
    }

    appendList = (action: string) => {
        const newLI = document.createElement('li')
        newLI.appendChild(document.createTextNode(action));
        this.listRender.appendChild(newLI);
    }

}

const mainList = new ToDoList('mainList');