"use strict"
var iterator = 0;

const ToDo = () =>{

    // wczytaj tekst podany w input box
    const new_action = String(document.getElementById('new_action').value);
    //nowa lista
    var space_lists = document.getElementById('action_list');
    var main_list = document.createElement('ul');

    var space_dates = document.getElementById('data_list');
    var main_dates = document.createElement('ul');
    //nowa liste umesc w obszarze list
    space_lists.appendChild(main_list);
    space_dates.appendChild(main_dates);
    //wczytaj aktualna date
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
        iterator++;
        document.getElementById('new_action').placeholder = 'Write things you need to do! 🐸';
        var bulletpoint = document.createElement('li');
        var date = document.createElement('li');

        date.setAttribute('class','text_date');
        date.setAttribute('id',iterator);

        bulletpoint.setAttribute('id', iterator + '_to_be_done');
        bulletpoint.setAttribute('class','bulletpoint');
        date.innerHTML = '❕';

        console.log(bulletpoint.getAttribute('id'));

        bulletpoint.addEventListener('click', event1 => {
            if(bulletpoint.getAttribute('id').endsWith('to_be_done'))
            {
                var list_poisition = bulletpoint.getAttribute('id').substring(0,1);  
                console.log(list_poisition);

                bulletpoint.style.textDecoration = 'line-through';
                bulletpoint.style.textDecorationColor = 'red';
                bulletpoint.style.textDecorationThickness = '3px';
                bulletpoint.style.color = 'var(--bgL2)';
                bulletpoint.setAttribute('id', list_poisition + '_done');
                date = document.getElementById(list_poisition);
                date.innerHTML = today;
   
            }
            else{
                var list_poisition = bulletpoint.getAttribute('id').substring(0,1);  
                bulletpoint.style.textDecoration = null;
                bulletpoint.style.textDecorationColor = null;
                bulletpoint.style.textDecorationThickness = null;
                bulletpoint.style.color = null;
                bulletpoint.setAttribute('id', list_poisition + '_to_be_done');

                date.innerHTML = '❕';
            }

        });

        main_dates.appendChild(date);

        bulletpoint.innerHTML += new_action;
        main_list.appendChild(bulletpoint);
    }

   
}
