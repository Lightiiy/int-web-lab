"use strict"
var iterator = 0;
var space_lists;
var space_dates;
$(document).ready( function(){
var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

    //nowa lista
    space_lists = document.getElementById('action_list');
    //nowa lista dat
    space_dates = document.getElementById('data_list');
    
});

const ToDo = () =>{
    // wczytaj tekst podany w input box
        //wczytaj aktualna date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;


    const new_action = String(document.getElementById('new_action').value);
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
            var removal = document.createElement('li');

            date.setAttribute('class','text_date');
            date.setAttribute('id',iterator);
            console.log(date.getAttribute('name'));

            bulletpoint.setAttribute('name','to_be_done');
            bulletpoint.setAttribute('id',iterator);
            bulletpoint.setAttribute('class','bulletpoint');
            date.innerHTML = '❕';



            bulletpoint.addEventListener('click', event1 => {               

                if(bulletpoint.getAttribute('name').endsWith('to_be_done'))
                {
                    var list_poisition = bulletpoint.getAttribute('id');
                    
                    bulletpoint.style.textDecoration = 'line-through';
                    bulletpoint.style.textDecorationColor = 'red';
                    bulletpoint.style.textDecorationThickness = '3px';
                    bulletpoint.style.color = 'var(--bgL2)';
                    bulletpoint.setAttribute('name','done');

                    date.innerHTML = today;

                }
                else{
                    var list_poisition = bulletpoint.getAttribute('id');  

                    bulletpoint.style.textDecoration = null;
                    bulletpoint.style.textDecorationColor = null;
                    bulletpoint.style.textDecorationThickness = null;
                    bulletpoint.style.color = null;
                    bulletpoint.setAttribute('name', 'to_be_done');

                    date.innerHTML = '❕';
                }

            });

            document.getElementById("main_dates").appendChild(date);
            
            bulletpoint.innerHTML += new_action;
            main_list.appendChild(bulletpoint);
            //umieszczanie list w obszarach
        }
        space_dates.appendChild(main_dates);
    };

    /*
                    var help1 = index + "_to_be_done";
                var help2 = index + "_done";
                if($("#"+help1).length)
                {
                    var action = $("#"+help1);
                }
                if($("#"+help2).length)
                {
                    var action = $("#"+help2);
                }
    */