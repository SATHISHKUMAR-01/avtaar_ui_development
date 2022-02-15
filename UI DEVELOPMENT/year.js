
//-------------operation on college Year dropdown----------------------------

apply_year = document.getElementById('apply_year');
clear_year = document.getElementById('clear_year');

//getting the radiobutton
radio_1 = document.getElementById('radio_1')
radio_2 = document.getElementById('radio_2')
radio_3 = document.getElementById('radio_3')
radio_4 = document.getElementById('radio_4')

//getting dropdown
dropdown_year = document.getElementById('dropdown_year')

//set value
val = ''

//clearing
clear_year.addEventListener('click', function(){  
    dropdown_year.textContent ="College Year"
});

apply_year.addEventListener('click', function (){
    
    if(radio_1.checked){
        val = radio_1.value
        dropdown_year.textContent =  val
    }

    if(radio_2.checked){
        val = radio_2.value
        dropdown_year.textContent =  val
    }

    if(radio_3.checked){
        val = radio_3.value
        dropdown_year.textContent =  val
    }

    if(radio_4.checked){
        val = radio_4.value
        dropdown_year.textContent =  val
    }
});
