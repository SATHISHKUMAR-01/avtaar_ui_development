
//-------------operation on select a career dropdown----------------------------

apply_career = document.getElementById('apply_career');
clear_career = document.getElementById('clear_career');

//get the value of checkbox id
check_sw = document.getElementById('check_sw')
check_programming = document.getElementById('check_programming')
check_app = document.getElementById('check_app')
check_github = document.getElementById('check_github')
check_backend = document.getElementById('check_backend')

check_wire = document.getElementById('check_wire')
check_figma = document.getElementById('check_figma')
check_user = document.getElementById('check_user')
check_problem = document.getElementById('check_problem')

//check if fsd radio button is on or not
radio_fsd = document.getElementById('radio_fsd');

//check if ux radio button is on or not
radio_ux = document.getElementById('radio_ux')

//to store selected values
fsd = []
ux = []

//getting dropdown
dropdown_career = document.getElementById('dropdown_career')


//clearing the value
clear_career.addEventListener('click', function () {
    radio_ux.checked = false
    radio_fsd.checked = false
    dropdown_career.textContent = "Select a Career"
    fsd = []
    ux = []
    if (before_values.firstElementChild) {
        before_values.firstElementChild.remove()
    }
    check()
})


//if one radio button is clicked make others value off
radio_fsd.addEventListener('click', function () {
    if (radio_fsd.checked == true) {
        check_wire.checked = false;
        check_figma.checked = false;
        check_user.checked = false;
        check_problem.checked = false;
    }
});

radio_ux.addEventListener('click', function () {
    if (radio_ux.checked == true) {
        check_sw.checked = false;
        check_programming.checked = false;
        check_app.checked = false;
        check_github.checked = false;
        check_backend.checked = false;
    }
});

//getting the values
before_values = document.getElementById('before_values');

//-------------------getting the card values ----------------------------------

var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')
var card4 = document.getElementById('card4')
var card5 = document.getElementById('card5')
var card6 = document.getElementById('card6')

//card 1 values
var card1_val = []
for (let i = 0; i < card1.children.length; i++) {
    card1_val.push(card1.children[i].textContent.trim())
}
console.log(card1_val);

//card 2 values
var card2_val = []
for (let i = 0; i < card2.children.length; i++) {
    card2_val.push(card2.children[i].textContent.trim())
}
console.log(card2_val);

//card 3 values
var card3_val = []
for (let i = 0; i < card3.children.length; i++) {
    card3_val.push(card3.children[i].textContent.trim())
}
console.log(card3_val);

//card 4 values
var card4_val = []
for (let i = 0; i < card4.children.length; i++) {
    card4_val.push(card4.children[i].textContent.trim())
}
console.log(card4_val);

//card 5 values
var card5_val = []
for (let i = 0; i < card5.children.length; i++) {
    card5_val.push(card5.children[i].textContent.trim())
}
console.log(card5_val);

//card 6 values
var card6_val = []
for (let i = 0; i < card6.children.length; i++) {
    card6_val.push(card6.children[i].textContent.trim())
}
console.log(card6_val);


//show cards

one = document.getElementById('one')
two = document.getElementById('two')
three = document.getElementById('three')
four = document.getElementById('four')
five = document.getElementById('five')
six = document.getElementById('six')

check()
function check() {

    one.style.display = 'block'
    two.style.display = 'block'
    three.style.display = 'block'
    four.style.display = 'block'
    five.style.display = 'block'
    six.style.display = 'block'

}

function uncheck() {

    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'none'
    five.style.display = 'none'
    six.style.display = 'none'

}

//action to be performed when apply button clicked
apply_career.addEventListener('click', function () {


    //check if any value is selected, then delete
    if (before_values.firstElementChild) {
        before_values.firstElementChild.remove()
    }

    //check if fsd is clicked
    if (radio_fsd.checked) {
        fsd = []


        //setting the selected values in dropdown
        dropdown_career.textContent = "FullStacker Developer"

        //check if the checkbox is clicked or not
        if (check_sw.checked) {
            fsd.push(check_sw.value)
        }

        if (check_programming.checked) {
            fsd.push(check_programming.value)
        }

        if (check_app.checked) {
            fsd.push(check_app.value)
        }

        if (check_github.checked) {
            fsd.push(check_github.value)
        }

        if (check_backend.checked) {
            fsd.push(check_backend.value)
        }

        // console.log(fsd)

        var values = document.createElement('div');
        values.id = "values"
        values.className = "d-flex w-auto ms-2 me-2"
        before_values.append(values)


        for (var i = 0; i < fsd.length; i++) {

            //creating div
            var newdiv = document.createElement('div');
            newdiv.id = fsd[i];
            newdiv.className = 'border border-dark rounded w-auto m-2 p-1'
            newdiv.style.backgroundColor = '#F2EEDA'
            var newdivtext = document.createTextNode(fsd[i] + " x")
            newdiv.appendChild(newdivtext);
            values.appendChild(newdiv)
        }


        if (dropdown_career.textContent.trim() == "Select Career") {
            check()
        } else {
            uncheck()
        }

        add(fsd, card1_val, one)
        add(fsd, card2_val, two)
        add(fsd, card3_val, three)
        add(fsd, card4_val, four)
        add(fsd, card5_val, five)
        add(fsd, card6_val, six)



        function add(fsd, card_num, card) {

            arr = []

            // fsd.forEach(num1 => {
            //     card_num.forEach(num2 => num1 == num2 && arr.push(num1));
            // });

            for (var i = 0; i < fsd.length; i++) {
                for (var j = 0; j < card_num.length; j++) {
                    if (fsd[i] == card_num[j]) { // If item is present in both arrays
                        arr.push(fsd[i]); // Push to common array
                    }
                }
            }

            if (arr.length >= 1) {
                card.style.display = 'block'
            }
        }
    }


    //check if ux is clicked
    if (radio_ux.checked) {
        ux = []

        //check if any value is selected, then delete
        if (before_values.firstElementChild) {
            before_values.firstElementChild.remove()
        }

        //setting the selected values in dropdown
        dropdown_career.textContent = "UX Designer"

        //check if the checkbox is clicked or not
        if (check_wire.checked) {
            ux.push(check_wire.value)
        }

        if (check_figma.checked) {
            ux.push(check_figma.value)
        }

        if (check_user.checked) {
            ux.push(check_user.value)
        }

        if (check_problem.checked) {
            ux.push(check_problem.value)
        }

        console.log(ux)

        var values = document.createElement('div');
        values.id = "values"
        values.className = "d-flex w-auto ms-2 me-2"
        before_values.append(values)


        for (var i = 0; i < ux.length; i++) {

            //creating div
            var newdiv = document.createElement('div');
            newdiv.id = ux[i];
            newdiv.className = 'border border-dark rounded w-auto m-2 p-1'
            var newdivtext = document.createTextNode(ux[i] + " x")
            newdiv.appendChild(newdivtext);
            values.appendChild(newdiv)
        }

        if (dropdown_career.textContent.trim() == "Select Career") {
            check()
        } else {
            uncheck()
        }


        add(ux, card1_val, one)
        add(ux, card2_val, two)
        add(ux, card3_val, three)
        add(ux, card4_val, four)
        add(ux, card5_val, five)
        add(ux, card6_val, six)

        function add(ux, card_num, card) {

            arr = []

            for (var i = 0; i < ux.length; i++) {
                for (var j = 0; j < card_num.length; j++) {
                    if (ux[i] == card_num[j]) { // If item is present in both arrays
                        arr.push(ux[i]); // Push to common array
                    }
                }
            }

            if (arr.length >= 1) {
                card.style.display = 'block'
            }
        }

        
    }
});







