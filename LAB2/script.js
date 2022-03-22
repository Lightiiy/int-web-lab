"use strict"

const ToDo = () =>{

    // wczytaj tekst podany w input box
    const new_action = String(document.getElementById('new_action').value);
    //nowa lista
    var space = document.getElementById("action_list");
    var main_list = document.createElement('ol');
    space.appendChild(main_list);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    if (new_action === '')
    {
        document.getElementById('new_action').placeholder = 'Write an action you want to add to the list below 🤡';
        return;
    }
    else{
        document.getElementById('new_action').placeholder = 'Write things you need to do! 🐸';
        var bulletpoint = document.createElement('li');
        bulletpoint.setAttribute('id', 'to_be_done');
        bulletpoint.addEventListener('click', event1 => {
            if(bulletpoint.getAttribute('id') === 'to_be_done')
            {
            bulletpoint.style.textDecoration = 'line-through';
            bulletpoint.style.textDecorationColor = 'red';
            bulletpoint.style.textDecorationThickness = '3px';
            bulletpoint.style.color = 'var(--bgL2)';
            bulletpoint.setAttribute('id', 'done');
            }
            else{
                bulletpoint.style.textDecoration = null;
                bulletpoint.style.textDecorationColor = null;
                bulletpoint.style.textDecorationThickness = null;
                bulletpoint.style.color = null;
                bulletpoint.setAttribute('id', 'to_be_done');
            }

        });
        bulletpoint.innerHTML += new_action;
        main_list.appendChild(bulletpoint);
    }
    //debugger;

   
}
