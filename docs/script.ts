"use strict"
//ACTION INTERFACE
interface Action{
    action: string,
    isDone: boolean
}

//TODOLIST OBJECT
class ToDoList{

    public title: string;
    actionList: Action[];
    private listRender: Element;
    private date: string;
    private graveyard?: Action;
    private yard: Element;

    constructor(title: string){
        this.title = title;
        this.date = this.getFormatedDate();
        this.actionList = [];
            
        this.listRender = document.createElement('ol');
        this.listRender.classList.add('to-do-list');
        this.listRender.id = (this.title);

        this.yard = document.createElement('p');

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
        this.createDeleteButton(this.appendtoRenderedList(action));
    }

    appendtoRenderedList = (action: string): Element => {
        const newLI = document.createElement('li');
        newLI.setAttribute('date', this.date);
        newLI.appendChild(document.createTextNode(action));
        this.listRender.appendChild(newLI);
        newLI.addEventListener( 'click', (event) => {
            const element = event.target;
            if(element !== null){
            const index = [...this.listRender.children].indexOf(element);
            if( index !== -1) {
                this.actionList[index].isDone = !this.actionList[index].isDone;
                
                    element.classList.toggle("isDone");
                }
                
            }
        })
        return newLI;
    }

    removeFromBothLists = (index: number) => {
        const removable = [...this.listRender.children][index];
        this.listRender.removeChild(removable);
        this.appendToGraveyard(this.actionList[index]);
        this.actionList.splice(index, 1);
    }
    
    createDeleteButton = (action: Element) => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '❌';
        action.appendChild(deleteButton);
    }

    getFormatedDate(): string{
        const date = new Date();
        const today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
        return today;
    }

    appendToGraveyard(action: Action){
        this.graveyard = action;
        const grave = document.createElement('p');
        grave.textContent=action.action;
        grave.classList.add('grave');
        if (this.yard.hasChildNodes()){
            this.yard.replaceChildren(grave);
        }
        this.yard.appendChild(grave);
    }

    resurrect(){
        if(this.graveyard === undefined)
        {
            console.error ("Can't resurrect the dirt");
            return;
        }
        this.addActionToList(this.graveyard.action);
        delete this.graveyard;
    }

    renderList(){
        document.querySelector('#list-wrapper')?.appendChild(this.listRender);

        document.querySelector('#graveyard-wrapper')?.appendChild(this.yard);
    }

    derenderList(){
        document.querySelector('#list-wrapper')?.removeChild(this.listRender);

        document.querySelector('#graveyard-wrapper')?.removeChild(this.yard);
    }
}


//MAIN
const mainList = new ToDoList('Main List');
const altList = new ToDoList('Additional List');
const listOfLists = [mainList, altList];
const listOfListsRender: Element = document.createElement('ol');
const resultRender: Element = document.createElement('div');
var currList = mainList;

mainList.addActionToList('tEst');
mainList.addActionToList('test2');
mainList.addActionToList('teST3');
mainList.addActionToList('test4');

altList.addActionToList('testinga');
altList.addActionToList('testing0a');
altList.addActionToList('teSTing1a');
altList.addActionToList('testing2a');
altList.addActionToList('tEstin3');


listOfListsRender.classList.add('list-of-lists', 'custom-scrollbar');
document.querySelector('.lists-wrapper')?.appendChild(listOfListsRender);

resultRender.classList.add('result-list');
document.querySelector('.results-wrapper')?.appendChild(resultRender);

const addListToRender = (title: string) => {
    const newLI = document.createElement('li');
    newLI.appendChild(document.createTextNode(title));
    newLI.addEventListener("click", (event) =>{
        const element = event.target;
        const index = [...listOfListsRender.children].indexOf(element);
        switchContext(index)
    })
    listOfListsRender.appendChild(newLI);
}

listOfLists.forEach( (element) => {
    addListToRender(element.title);
})

currList.renderList();


const switchContext = (index:number) =>{
    currList.derenderList();
    currList = listOfLists[index];
    currList.renderList();
};


const addListToLists = (list: ToDoList) => {
    listOfLists.push(list);
    addListToRender(list.title);
}

const formActionAddToList = (list: ToDoList, action: string) => 
{
    list.addActionToList(action);
}

const formListAddToLists = (title: string) => {
    if(title.replace(/\s/g, '') === ''){
        {
            alert("A list of do's needs a name");
            return;
        }
    }
    else{
        const newList = new ToDoList(title);
        addListToLists(newList);
        switchContext(listOfLists.length - 1);
    }
}


const overrideEnter = (event: Event) => {
    const inputEl = event.target;
    const input_name = inputEl.getAttribute('name');
    if (event.key === 'Enter'){
        switch (input_name)
        {
            case 'action_input':
                if (inputEl !== null) { 
                        event?.preventDefault();
                        formActionAddToList(currList, inputEl.value);
                        inputEl.value = '';
                    }
                break;
            case 'list_input':
                if (inputEl !== null){
                    event?.preventDefault();
                    formListAddToLists(inputEl.value);
                    inputEl.value = '';
                }
                break;
            case 'search_input':
                if (inputEl !== null){
                    event?.preventDefault();
                    searchButton(document.querySelector('input[name=search_input]').value,document.querySelector('input[name=case_sensetive]').checked);
                }
                break;
            default: 
                alert('Where did you even press that');
                break
        }
    }
    
}


const searchFunction = (searched: string, caseSensitive:boolean): Array<['string','string']> => {
    var allActions = new Array;
    listOfLists.forEach(
        list => {
            allActions.push(...list.actionList.map((action) => { 
                return [list.title,action];
            }))
        }
    )

    const result = allActions.filter(searchedAction =>{
        if(caseSensitive){
            if(searchedAction[1].action.includes(searched)){
                return searchedAction;
            }
        }   else{
             if(searchedAction[1].action.toLowerCase().includes(searched.toLowerCase())){
                return searchedAction;
            }
        }})
    return result;

}

const search = (searched: string, caseSensitive:boolean) =>{
    clearSearch(); 
    if(searched.replace(/\s/g, '') === ''){
        {
            return;
        }
    }
    const results = searchFunction(searched, caseSensitive);
    let headers = new Set();
    let header: Element;
    results.forEach(element => {
        if(!(headers.has(element[0])))
        {
            headers.add(element[0]);
            header = generateHeader(element[0]);
        }
        let result = document.createElement('li');
        result.textContent = element[1].action;
        header.appendChild(result);
    });
}

const searchButton = (searched: string, caseSensitive:boolean) => {
    if(searched.replace(/\s/g, '') === ''){
        {
            document.querySelector('.search-wrapper')?.classList.toggle('hidden');
        }
    }
    
}

const generateHeader = (title: string): Element => {
    const header = document.createElement('ul');
    resultRender.appendChild(header);
    header.id=title;
    header.textContent=title;
    return header;
}

const clearSearch = () => {
    if(resultRender.children.length){
        [...resultRender.children].forEach( element => element.remove());
    }
}


$(function(){


//ZAD Jquery.1 -> usuwanie wybranego elementu z listy
//ZAD WIP Jquery.3 -> modal przy usuwaniu elementu z listy
    $(document).on("click",'.delete-button', function () {
        // toggleModal('delete', $(this).parent().index());
        const index = $(this).parent().index();
        currList.removeFromBothLists(index);
    })
//ZAD Jquery.2 -> kosz z funkcjonalnoscia ctrl+z
    $(document).on("click", '.grave', function(){
        currList.resurrect();
        $(this).remove();
    })

    $(document).keydown(function(event){
        if(event.which === 90 && event.ctrlKey)
            {
                currList.resurrect();
                 $('.grave').remove();
            }
    })

    
})

// if ($("input[name=action_input]").is(':focus')) {
//   console.log('focused');
// }

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
