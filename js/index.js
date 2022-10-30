var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample2)

    toast.show()
  })
}

const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample3)

    toast.show()
  })
}


const btnSwitch = document.querySelector('#dn');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('colorblanco');
  document.getElementById('#cardnegro').classList.toggle('bg-dark');
  document.getElementById('#cardnegro1').classList.toggle('bg-dark');
  document.getElementById('#cardnegro2').classList.toggle('bg-dark');
  document.getElementById('#cardnegro3').classList.toggle('bg-dark');
  document.getElementById('#cardnegro4').classList.toggle('bg-dark');
  document.getElementById('#cardnegro5').classList.toggle('bg-dark');
  document.getElementById('#cardnegro6').classList.toggle('bg-dark');
  document.getElementById('#cardnegro7').classList.toggle('bg-dark');
  document.getElementById('#cardnegro8').classList.toggle('bg-dark');
  document.getElementById('#cardnegro9').classList.toggle('bg-dark');
  document.getElementById('#cardnegro10').classList.toggle('bg-dark');
  document.getElementById('#cardnegro11').classList.toggle('bg-dark');
});

function hola (){
  document.getElementById('#hola1').classList.toggle('srcip1');
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
