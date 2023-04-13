"use strict"
//ACTION INTERFACE
interface Action{
    action: string,
    isDone: boolean
}

//TODOLIST OBJECT
class ToDoList{

    public title: string;
    const actionList: Action[];
    private listRender: Element;

    constructor(title: string){
        this.title = title;
        this.actionList = [{action: 'test', isDone: false},
            {action: 'test15', isDone: false},
            {action: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', isDone: false}];
        this.listRender = document.createElement('ol');
        this.listRender.classList.add('to-do-list');
        this.listRender.id = (this.title);
        document.querySelector('#list-wrapper')?.appendChild(this.listRender);

        if(this.actionList.length !== 0)
        {
            this.actionList.forEach(element => {
                this.createDeleteButton(this.appendtoRenderedList(element.action));
            });
        }
    }

    addActionToList = (action: string) => {
        //omit from adding empty strings
        if(action.replace(/\s/g, '') === ''){
            alert("We all want to do nothing, but please don't add empty actions 🤡");
            return;
        }
        this.actionList.push({action: action, isDone: false});
        this.createDeleteButton(this.appendtoRenderedList(action);
    }

    appendtoRenderedList = (action: string): Element => {
        const newLI = document.createElement('li')
        newLI.appendChild(document.createTextNode(action));
        this.listRender.appendChild(newLI);
        newLI.addEventListener( 'click', (event) => {
            const element = event.target;
            const index = [...this.listRender.children].indexOf(element);
            if( index !== -1) {
                this.actionList[index].isDone = !this.actionList[index].isDone;
                element.classList.toggle( "isDone");
            }
        })
        return newLI;
    }

    createDeleteButton = (action: Element) => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '❌';
        action.appendChild(deleteButton);
        deleteButton.addEventListener('click', (event) => {
            const parent = event.target.parentElement;
            const removedItem = this.actionList.find( element => element.action === parent.textContent.slice(0, -1))
            if( removedItem === undefined)
            {
                console.error("tried removing something that doesnt exist");
            }else{
                this.listRender.removeChild(parent);
                const index = [...this.listRender.children].indexOf(parent);
                this.actionList.splice(index, 1);
            }
        })
    }

}



//MAIN
const mainList = new ToDoList('mainList');


const formActionAddToList = (list: ToDoList, action: string) => 
{
    list.addActionToList(action);
}

const overrideEnter = (event: Event) => {
    var inputEl = document.querySelector('input[name=action_input]');
    if (event.key === 'Enter'){
        event?.preventDefault();
        formActionAddToList(mainList, event.target.value);
    }
    
}
