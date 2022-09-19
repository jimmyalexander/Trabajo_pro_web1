

const $button_close = document.querySelector('.burguer');
const $button_x = document.querySelector('.close');
const $menu = document.querySelector('.menu_lateral');
const $formu = document.querySelector('.contentForm');
const $ancla_form = document.querySelector('.formulario_insc');
const $submit = document.querySelector('.submit_form');

$button_close.addEventListener('click',()=>{
  $menu.classList.toggle('mostrar_menu');
  $formu.classList.remove('active_form');
})

$button_x.addEventListener('click',()=>{
  $menu.classList.toggle('mostrar_menu');
})


$ancla_form.addEventListener('click',()=>{
  $formu.classList.toggle('active_form');
  $menu.classList.remove('mostrar_menu');
})


$submit.addEventListener('click',()=>{
  $formu.classList.remove('active_form');
  Swal.fire('Datos Guardados..')
})