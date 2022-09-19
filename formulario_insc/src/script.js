$inputs = document.querySelectorAll('input');
$submit = document.querySelector('.submit');
$form = document.querySelector('.formulario');


/* console.log($inputs.forEach((e)=>{
  console.log(e.value)
}))
 */
$submit.addEventListener('click', (e)=>{
  e.preventDefault();
    
    if(isNum($inputs[0].value) !== true ){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tus datos fueron Enviados',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){
        $form.submit();
      },2000)
      
    }
    else if(isNum($inputs[8].value) === true){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tus datos fueron Enviados',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){
        $form.submit();
      },2000)
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe llenar todos los campos Correctamente!',
      })
    }
})