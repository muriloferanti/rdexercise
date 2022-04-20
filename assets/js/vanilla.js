

document.getElementById('office').addEventListener('change', function (event) {
	if (event.target.value !== ''){
        document.getElementById('office').classList.add('valid');
    }else{
        document.getElementById('office').classList.remove('valid');
    }
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
        }else{
            document.querySelector('.input-square .hidden').classList.remove('show');
            document.querySelectorAll('.ball')[0].classList.remove('active');
            document.querySelectorAll('.ball')[1].classList.add('active');
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


if (window.innerWidth < 980) {
  var slider = tns({
    container: '.list-it',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });
}
