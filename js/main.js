
const inputsForm = document.querySelectorAll('#form input');
const form = document.getElementById('form');


const expression = {
    name: /^[^0-9]{1,25}$/, // Letras y espacios, pueden llevar acentos.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,25}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const fields = {
    name: false,
    lastname: false,
    email: false,
    password: false
}

function validateField(expression, input){
    let response = false;
    if(expression.test(input.value)) {
        response = true;
    }else{
        response = false;
    }
    return response;
}

const validationSignal = (objectAttributeFields , htmlNodeReference)=>{
    if(objectAttributeFields === true){
        htmlNodeReference.classList.remove('error');
        htmlNodeReference.classList.add('success');
        }else{
            htmlNodeReference.classList.remove('success');
            htmlNodeReference.classList.add('error');
        }
}

const validatingFields = (event)=>{

    
    if(event.target.getAttribute('id') === 'name'){
        fields.name = validateField(expression.name, event.target);
        validationSignal(fields.name, event.target);
    }
    
    if(event.target.getAttribute('id') === 'lastname'){
        fields.lastname = validateField(expression.lastname, event.target);
        validationSignal(fields.lastname, event.target);
    }
    
    if(event.target.getAttribute('id')  === 'email'){
        fields.email = validateField(expression.email, event.target);
        validationSignal(fields.email, event.target);
    }
    
    if(event.target.getAttribute('id') === 'password'){
        fields.password = validateField(expression.password, event.target);
        validationSignal(fields.password, event.target);
    }
    
}

form.addEventListener('keypress',validatingFields);
form.addEventListener('change',validatingFields);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(fields.name && fields.lastname && fields.email && fields.password){
        Swal.fire('Enviando datos .....');
    }else{
        Swal.fire('Ups.. algo salio mal');
    }
});












