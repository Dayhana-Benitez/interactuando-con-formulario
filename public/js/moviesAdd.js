window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //select
    let inputTitle = document.querySelector('#title');
    let inputRating = document.querySelector('#rating');
    let inputAwards = document.querySelector('#awards');
    let inputDate = document.querySelector('#release_date');
    let inputLength = document.querySelector('#length');
    let inputGenre = document.querySelector('#genre_id');
    //span error
    let errortitle = document.querySelector('#errortitle');
    let errorRating = document.querySelector('#errorrating');
    let errorAwards = document.querySelector('#errorawards');
    let errorDate = document.querySelector('#errorrelease_date');
    let errorLength = document.querySelector('#errorlength');
    let errorGenre = document.querySelector('#errorgenre_id');

    let validateerror = false;
    function colorAlAzar(...colores) {
        let random = Math.floor((Math.random() * (5 - 0)) + 0)
        let colorRandom = colores[random]
        return colorRandom
    }

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = colorAlAzar('red', 'blue', 'orange', 'brow', 'yelow')
    })

    let estadoSecreto = 0;

    inputTitle.addEventListener('keydown', (event) => {
        switch (true) {
            case event.key == "s" && estadoSecreto == 0:
                estadoSecreto = 1;
                break;
            case event.key == "e" && estadoSecreto == 1:
                estadoSecreto = 2;
                break;
            case event.key == "c" && estadoSecreto == 2:
                estadoSecreto = 3;
                break;
            case event.key == "r" && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
            case event.key == "e" && estadoSecreto == 4:
                estadoSecreto = 5;
                break;
            case event.key == "t" && estadoSecreto == 5:
                estadoSecreto = 6;
                break;
            case event.key == "o" && estadoSecreto == 6:
                estadoSecreto = 0;
                alert("SECRETO MAGICO")
                break;
            default:
                estadoSecreto = 0;
        }
    });


    let form = document.querySelector('form');

    inputTitle.addEventListener('blur', (e) => {
        if(!inputTitle.value.trim()){
            errortitle.innerHTML ='El campo titulo es requerido';
            errortitle.classList.add('is-invalid');
            validateerror =true;
        }else{
            errortitle.innerHTML ='';
            errortitle.classList.add('is-valid');
            errortitle.classList.remove('is-invalid');
        }
    });
    inputRating.addEventListener('blur', (e) => {
        if(!inputRating.value.trim()){
            errorRating.innerHTML ='El campo titulo es requerido';
            errorRating.classList.add('is-invalid');
            validateerror =true;
        }else{
            errorRating.innerHTML ='';
            errorRating.classList.add('is-valid');
            errorRating.classList.remove('is-invalid');
        }
    });
    inputAwards.addEventListener('blur', (e) => {
        if(!inputAwards.value.trim()){

            errorAwards.innerHTML ='El campo titulo es requerido';
            errorAwards.classList.add('is-invalid');
            validateerror =true;
        }else{
            errorAwards.innerHTML ='';
            errorAwards.classList.add('is-valid');
            errorAwards.classList.remove('is-invalid');
        }
    });
    inputDate.addEventListener('blur', (e) => {
        if(!inputDate.value.trim()){

            errorDate.innerHTML ='El campo titulo es requerido';
            errorDate.classList.add('is-invalid');
            validateerror =true;
        }else{
            errorDate.innerHTML ='';
            errorDate.classList.add('is-valid');
            errorDate.classList.remove('is-invalid');
        }
    });
    inputLength.addEventListener('blur', (e) => {
        if(!inputLength.value.trim()){

            errorLength.innerHTML ='El campo titulo es requerido';
            errorLength.classList.add('is-invalid');
            validateerror =true;
        }else{
            errorLength.innerHTML ='';
            errorLength.classList.add('is-valid');
            errorLength.classList.remove('is-invalid');
        }
    });


    form.addEventListener('submit', (e) => {
        
        if(inputTitle.value == ""){
            e.preventDefault();
            errortitle.innerHTML ='El campo titulo es requerido';
            errortitle.classList.add('is-invalid');
        }else{
            errortitle.innerHTML ='';
            errortitle.classList.add('is-valid');
            errortitle.classList.remove('is-invalid');
        }
        if(inputRating.value== ""){
            e.preventDefault();
            errorRating.innerHTML ='El campo titulo es requerido';
            errorRating.classList.add('is-invalid');
        }else{
            errorRating.innerHTML ='';
            errorRating.classList.add('is-valid');
            errorRating.classList.remove('is-invalid');
        }
        if(inputAwards.value == ""){
            e.preventDefault();
            errorAwards.innerHTML ='El campo titulo es requerido';
            errorAwards.classList.add('is-invalid');
        }else{
            errorAwards.innerHTML ='';
            errorAwards.classList.add('is-valid');
            errorAwards.classList.remove('is-invalid');
        }
        if(inputDate.value== ""){
            e.preventDefault();
            errorDate.innerHTML ='El campo titulo es requerido';
            errorDate.classList.add('is-invalid');
        }else{
            errorDate.innerHTML ='';
            errorDate.classList.add('is-valid');
            errorDate.classList.remove('is-invalid');
        }
        if(inputLength.value== ""){
            e.preventDefault();
            errorLength.innerHTML ='El campo titulo es requerido';
            errorLength.classList.add('is-invalid');
        }else{
            errorLength.innerHTML ='';
            errorLength.classList.add('is-valid');
            errorLength.classList.remove('is-invalid');
        }
        
        if(inputGenre.value== ""){
            e.preventDefault();
            errorGenre.innerHTML ='El campo titulo es requerido';
            errorGenre.classList.add('is-invalid');
        }else{
            errorGenre.innerHTML ='';
            errorGenre.classList.add('is-valid');
            errorGenre.classList.remove('is-invalid');
        }
    })
}
