// home
$('.total-btn').hide();
$('.one').hide();
$('.ordering').hide();
$('.orderpizza').hide();
$('.creditcard-page').hide();
$('#complete_form').hide();
$("#order-btn").click(function () {
    $(".ordering").show();
    $('.everything-btn').show();
    $(".home-page").hide();
});  

// crust 
function hideCrustDrops() {
    $(".hand").hide();
    $('.thin').hide();
    $('.ny').hide();
    $('.gluten').hide();
}

// address
$('#other').hide();  
$('#other2').hide(); 

// toppings
$('.choosecheese').hide();
$('.top').hide();
$('.sauce').hide();
$('.two').hide();
$('#placeorder-btn').hide();

// crust
let crust = document.querySelector('#crust');
let price;
let type;
let sizeprices = document.querySelector('.sizeprices');
let hand = document.querySelector('.hand');
let thin = document.querySelector('.thin');
let ny = document.querySelector('.ny');
let gluten = document.querySelector('.gluten');
let check = false;
let totalToppings = 0;
crust.reset();

// checkbox
let userPizzaSelections = [];
$('#toppings').click(function (e) {
    console.log("This toppings " + e.target.checked);
    if (e.target.checked === undefined) {
        console.log("None")
    } else if (e.target.checked === true) {
        userPizzaSelections.push(e.target.value);
    } else {
        let removeItem = userPizzaSelections.indexOf(e.target.value);
        userPizzaSelections.splice(removeItem, 1);
    }
    totalToppings = $('input:checkbox:checked').length;
    console.log(totalToppings);
    console.log(userPizzaSelections);
    addTotals()

});

function addTotals() {
    let toppingCost = totalToppings * .99;
    let endPrice = crustPrice + cheesePrice + saucePrice + toppingCost;
    $('#total').text(endPrice.toFixed(2));
}

// form event listener
let saucePrice = 0.00;
let cheesePrice = 0.00;

// sauce price
$('.sauce').change(function (e) {
    saucePrice = Number(e.target.value);
    sauceOption = e.target.id;
    sauceChoice = e.target.selectedIndex;
    addTotals()
});

// cheese price
$('#cheese').change(function (e) {
    cheesePrice = Number(e.target.value);
    cheeseOption = e.target.id;
    cheeseChoice = e.target.selectedIndex;
    addTotals()
});

// user input on the radio buttons
const radioButtonArr = ['radio1', 'radio2', 'radio3', 'radio4'];
const dropDownArr = ['handtossed', 'thincrust', 'nystyle', 'glutenfree'];
let crustPrice = 0.00;

$(':radio').click(function (e) {
    radioId = e.target.id;
    console.log(radioId);
    crust_option = e.target.value;
    unHideCrust(radioId);
});

// reveal crust options
function unHideCrust(radioId) {
    hideCrustDrops();
    let user_selected_radio = radioButtonArr.indexOf(radioId);
    $('#' + dropDownArr[user_selected_radio]).show();
}

// crust cost
$('.sizeprices').change(function (e) {
    crustPrice = Number(e.target.value);
    crustOption = e.target.id;
    crustChoice = e.target.selectedIndex;
    if (crustPrice > 0) {
        check = true;
    } else {
        check = false;
    }
    clearDropDowns(e);
    addTotals()
});

// crust choices
function clearDropDowns(e) {
    let user_selected = dropDownArr.indexOf(e.target.id);
    console.log("in clear " + user_selected);
    for (let i = 0; i < dropDownArr.length; i++) {
        if (i !== user_selected) {
            $('#' + dropDownArr[i])[0].selectedIndex = 0;
        }
    }
}

let selected = sizeprices.querySelector('option[selected]');

$("#toppingchoices-btn").click(function () {
    if (check === false) {
        $('#crust').append('<div id="choosecrust"></div>');
        $('#choosecrust').text('Choose Size');
    } else {
        showTop();
    }
});

// topping choices
function showTop() {
    $('.choosecheese').show();
    $('.top').show();
    $('.sauce').show();
    $('.total').show();
    $('#placeorder-btn').show();
    $('.one').hide();
    $('#toppingchoices-btn').hide();
    $('.crust').append('<div id="choosecrust"></div>');
    $('#choosecrust').text('');
}
// choices
function clearFields(type) {
    if (type === "radio1") {
        document.getElementById('thinsize').selected = "true";
        document.getElementById('nystylesize').selected = "true";
        document.getElementById('glutensize').selected = "true";
    } else if (type === "radio2") {
        document.getElementById('handtoss').selected = "true";
        document.getElementById('nystylesize').selected = "true";
        document.getElementById('glutensize').selected = "true";
    } else if (type === "radio3") {
        document.getElementById('handtoss').selected = "true";
        document.getElementById('thinsize').selected = "true";
        document.getElementById('glutensize').selected = "true";
    } else if (type === "radio4") {
        document.getElementById('handtoss').selected = "true";
        document.getElementById('thinsize').selected = "true";
        document.getElementById('nystylesize').selected = "true";
    }
} 

// confirmation
$('#confirm_form').hide();
$('#placeorder-btn').click(function (e) {
    $('#confirm_form').show();
    $("#ready-btn").click(function () {
        $(".ordering").hide();
        $('.orderpizza').show();
        $('.total').hide();
        $('#confirm_form').hide();
    });

    $("#goback-btn").click(function () {
        $('#confirm_form').hide();
    });
}); 

// delivery address
let deliveryname = document.getElementById('deliveryname');
let address = document.getElementById('address');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let name2 = document.getElementById('name2');
let address2 = document.getElementById('address2');

let city2 = document.getElementById('city2');
let state2 = document.getElementById('state2');
let zip2 = document.getElementById('zip2');

let pay = document.getElementById('pay-btn');

// address validation
let deliveryaddress = document.forms.deliveryaddress; 
let billingaddress = document.forms.billingaddress; 
let payment = document.forms.payment; 
let cardholder = document.forms.cardholder; 

let deliveryaddressInputs = document.querySelectorAll('#deliveryaddress input:not(.notincl)'); 
let billingaddressInputs = document.querySelectorAll('#billingaddress input:not(.notincl)');
let paymentInputs = document.querySelectorAll('#payment input');
let cardholderInput = document.querySelectorAll('#cardholder input');

// delivery form 
deliveryaddressInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    }); 
    deliveryaddress.reset();
}); 

// REGEX patterns for input field:
let patterns = {
    name: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
    address: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
    cityname: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    statename: /^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
    zip: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\D?([2-9]{1})(\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
    cvv: /^[0-9]{3,4}$/,
    mc: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$ /,
    creditcard: /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,
} 

// billing validation
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'form-control valid';
        $('.errorPhone').text('');
    } else {
        field.className = 'form-control invalid';
        $('.errorPhone').text("999.999.9999");
    }
} 

// billing form 
billingaddressInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    }); 
    billingaddress.reset();
}); 

// credit card form
paymentInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    }); 
    payment.reset();
}); 

cardholderInput.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    }); 
    cardholder.reset();
}); 

// delivery
$('#pay-btn').on('click', e => {
    e.preventDefault();

    $('.error').remove(); 

    if ((purchaser.classList.contains('invalid') || purchaser.value == '')) {
        $('.purchaser').append('<div class="error">Required Field</div>');
    }

    if ((address.classList.contains('invalid') || address.value.trim() == '')) {
        $('.addy').append('<div class="error">Required Field</div>');
    }

    if ((city.classList.contains('invalid') || city.value == '')) {
        $('.city').append('<div class="error">Required Field </div>');
    }

    if ((state.classList.contains('invalid') || state.value == '')) {
        $('.state').append('<div class="error">Required Field</div>');
    }

    if ((zip.classList.contains('invalid') || zip.value == '')) {
        $('.zip').append('<div class="error">Required Field</div>');
    }

    if ((email.classList.contains('invalid') || email.value == '')) {
        $('.email').append('<div class="error">Required Field</div>');
    }

    if ((phone.classList.contains('invalid') || phone.value == '')) {
        $('.phone').append('<div class="error">Required Field</div>');
    }
    else if ($('.error').length > 1){
    }
    else {
        $('.orderpizza').hide();
        $('.creditcard-page').show();
        $('.total').show();
        $('.one').show();
    }
});

// billing addy same as delivery
$('#duplicate').click(function () {
    "use strict";
    if ($('#duplicate').prop('checked') === true) {
        $('#address2').val($('#address').val());
        $('#apt-ste-num2').val($('#apt-ste-num').val());
        $('#city2').val($('#city').val());
        $('#state2').val($('#state').val());
        $('#zip2').val($('#zip').val());
    } else {
        $('#cardholder1').val('');
        $('#address2').val('');
        $('#apt-ste-num2').val('');
        $('#city2').val('');
        $('#state2').val('');
        $('#zip2').val('');
    }
});

// expiration
const today = new Date();
const todayyear = today.getFullYear();
const todaymonth = today.getMonth();

let mo = 0;
let yr = 2020;

function checkDate() {
    if (mo < todaymonth && yr == todayyear) {
        $('.billmonth').append('<div class="error">Expired Card</div>');
        $('.billyear').append('<div class="error">Expired Card</div>');
    } else {
        console.log('good');
    }
}

$('#ccmonth').click(e => {
    $('#ccmonth').change(e => {
        mo = e.target.value;
    })
    mo = e.target.value;
    checkDate()
});

$('#ex-year').click(e => {
    $('#ex-year').change(e => {
        yr = e.target.value;
    })
    yr = e.target.value;
    checkDate()
});

// submit
$('#placeorder-btn').on('click', e => {
    e.preventDefault();
    $('.error').remove(); 
    checkDate(); 

    // validate fields for billing
    if((creditcard.classList.contains('invalid') || creditcard.value == '')) {
        $('.billccn').append('<div class="error">Invalid Number</div>');
    }

    if((cvv.classList.contains('invalid') || cvv.value == '')) {
        $('.billcvv').append('<div class="error">Invalid Number</div>');
    }
    
    if ((purchaser.classList.contains('invalid') || purchaser.value == '')) { 
        $('.billname').append('<div class="error">Error</div>');
    }

     if ((address2.classList.contains('invalid') || address2.value.trim() == '')) {
        $('.billadd').append('<div class="error">Error</div>');

    } 
    if ((city2.classList.contains('invalid') || city2.value == '')) {
        $('.billcity').append('<div class="error">Error</div>');

    } 
    if ((state2.classList.contains('invalid') || state2.value == '')) {
        $('.billstate').append('<div class="error">Error</div>');
    } 
    if ((zip2.classList.contains('invalid') || zip2.value == '')) {
        $('.billzip').append('<div class="error">Error</div>');
    }
    else if ($('.error').length > 1){
    }
    else {
        $('#complete_form').show();
    }
});

// run
window.addEventListener('load', () => {
    hideCrustDrops();
});
