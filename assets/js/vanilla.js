AOS.init();
document.getElementById('office').addEventListener('change', function (event) {
	if (event.target.value !== ''){
        document.getElementById('office').classList.add('valid');
    }else{
        document.getElementById('office').classList.remove('valid');
    }
}, false);

document.getElementById('office').addEventListener('click', function (event) {
    document.getElementById('office').classList.add('valid');
}, false);

const viewpass = document.querySelectorAll('.pass-toggle');
for (let i = 0; i < viewpass.length; i++) {
    viewpass[i].addEventListener('click', function (event) {
        event.target.classList.toggle('hide');
        if(event.target.classList.contains('hide')){
            event.target.parentElement.querySelector('input').setAttribute("type", "text");
        }else{
            event.target.parentElement.querySelector('input').setAttribute("type", "password");
            
        }
    }, false);
}

const hassite = document.querySelectorAll('input[name="has-site"]');
for (let i = 0; i < hassite.length; i++) {
    hassite[i].addEventListener('change', function (event) {
        if (event.target.value == '1'){
            document.querySelector('.input-square .hidden').classList.add('show');
            document.querySelectorAll('.ball')[0].classList.add('active');
            document.querySelectorAll('.ball')[1].classList.remove('active');
            document.getElementById('site').classList.add('validate');
        }else{
            document.querySelector('.input-square .hidden').classList.remove('show');
            document.querySelectorAll('.ball')[0].classList.remove('active');
            document.querySelectorAll('.ball')[1].classList.add('active');
            document.getElementById('site').classList.remove('validate');
        }
    }, false);
}


const haschild = document.querySelectorAll('.has-child');
for (let i = 0; i < haschild.length; i++) {
    haschild[i].addEventListener('click', function (event) {
        event.target.classList.add('active');
    }, false);
}

document.querySelector('.hamb').addEventListener('click', function (event) {
    event.target.classList.toggle('active');
    document.querySelector('body').classList.toggle('menu-opened');
    document.getElementById('menu-mobile').classList.toggle('active');
}, false);

const openvideo = document.querySelectorAll('.open-modal-video');
for (let i = 0; i < openvideo.length; i++) {
    openvideo[i].addEventListener('click', function (event) {
        event.preventDefault();
        const src = event.target.getAttribute('href');
        const htmlvideo = '<iframe src="' + src + '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.querySelector('.popup-video').classList.add('active');
        document.querySelector('.popup-video .object .video').innerHTML = htmlvideo;
    }, false);
}

const closevideo = document.querySelectorAll('.close-popup, .overlay');
for (let i = 0; i < closevideo.length; i++) {
    closevideo[i].addEventListener('click', function (event) {
        document.querySelector('.popup-video').classList.remove('active');
        document.querySelector('.popup-video .object .video').innerHTML = '';
    }, false);
}
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        document.querySelector('.popup-video').classList.remove('active');
        document.querySelector('.popup-video .object .video').innerHTML = '';
    }
});


if (window.innerWidth < 980) {
  var slider = tns({
    container: '.list-it',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    autoHeight: true
  });
}

var phonemask = ['(99) 9999-9999', '(99) 99999-9999'];
var tel = document.querySelector('#phone');
VMasker(tel).maskPattern(phonemask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, phonemask, 14), false);



// FUNCTIONS
function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
}


// VALIDATE FORM
document.getElementById('form-data').addEventListener('submit', function (event) {
    event.preventDefault();

    var validateElements = document.getElementsByClassName("validate");
    var inputs = Array.prototype.filter.call(validateElements, function(element){
        if(element.nodeName === 'INPUT' || element.nodeName === 'SELECT'){
            return true;
        }
     
    });

    for(var i=0; i < inputs.length; i ++ ){
        var input = inputs[i];
       
        input.parentElement.querySelector('.error').innerHTML = '';
        
        if(input.getAttribute('name') == 'phone' && input.value.length < 14){
            input.parentElement.querySelector('.error').innerHTML = 'Número de telefone inválido';
            input.classList.add("err");
            input.focus();
            return
        }
        
        if(input.value.length == 0 ){
            input.parentElement.querySelector('.error').innerHTML = 'Campo Inválido';
            input.classList.add("err");
            input.focus();
            return
        }
    } 

    let msgpass = false;
    let passval = document.getElementById('password').value;
    if(passval.length < 6 && passval.length > 10){
        msgpass = 'A senha deve ter no mínimo 6 e no máximo 10 caracteres';
    }
    if(!/[a-z]/.test(passval)){
        msgpass = 'A senha deve ter uma letra minúscula';
    }
    if(!/[A-Z]/.test(passval) ){
        msgpass = 'A senha deve ter uma letra maiúscula';
    }
    if(/[^0-9a-zA-Z]/.test(passval)){
        msgpass = 'A senha deve ter um número';
    }
    if(document.getElementById('password').value != document.getElementById('confirm-password').value){
        msgpass = 'As senhas não coincidem.';
    }

    if(msgpass){
        document.getElementById('password').parentElement.querySelector('.error').innerHTML = msgpass;
        document.getElementById('password').classList.add("err");
        document.getElementById('password').focus();
        return
    }

    var data = this;
    fetch(data.getAttribute('action'), {
      method: data.getAttribute('method'),
      body: new FormData(data)
    }).then(res=>res.text())
      .then(function (data) {
        // BLOCKED BY CORS :(
    });


    // IF NOT BLOCKED BY CORS && RETURN 200
    const clearform = document.querySelectorAll('.input-square');
    for (let i = 0; i < clearform.length; i++) {
        clearform[i].remove();
    }
    window.scrollTo({
        top: document.getElementById("form-data").getBoundingClientRect().top,
        behavior: "smooth"
    });
    document.querySelector('.form form > ul').remove();
    document.querySelector('.out-side-button').remove();
    document.querySelector('.form form').append(document.createElement('div'));
    document.querySelector('.form form div').innerHTML = '<div class="thanks-success">Obrigado!, entraremos em contato</div>';

}, false);
