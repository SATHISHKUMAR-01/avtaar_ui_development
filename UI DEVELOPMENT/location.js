//-------------operation on location dropdown----------------------------

//getting dropdown id 
dropdown_location = document.getElementById('dropdown_location')

apply_location = document.getElementById('apply_location');
clear_location = document.getElementById('clear_location');


check_chennai = document.getElementById('check_chennai')
check_mumbai = document.getElementById('check_mumbai')
check_bangalore = document.getElementById('check_bangalore')
check_delhi = document.getElementById('check_delhi')

loc = []

apply_location.addEventListener('click', function(){
    loc=[]

    if (check_chennai.checked) {
        loc.push(check_chennai.value)
    }

    if (check_mumbai.checked) {
        loc.push(check_mumbai.value)
    }

    if (check_bangalore.checked) {
        loc.push(check_bangalore.value)
    }

    if (check_delhi.checked) {
        loc.push(check_delhi.value)
    }
    
    dropdown_location.textContent ="Location("+loc.length+")"
})

clear_location.addEventListener('click', function(){  
    dropdown_location.textContent ="Location"
    loc=[]
});