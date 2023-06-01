const blocks = document.querySelectorAll('.buttons');
const form = document.getElementById('form');
const inputValue = document.getElementById('valueInput')
let modal = document.getElementById('modal')

blocks.forEach(elem => {
  elem.addEventListener('click', () => {
    inputValue.value = elem.dataset.name
    modal.classList.add('active')
  })
})

modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    modal.classList.remove('active')
  }
})

form.addEventListener('submit', (e) => {
  submit(e)
})


const submit = async (e) => {
  e.preventDefault();
  if (e.target[0] && e.target[1]) {
    let response = await fetch('https://mjservicesbackend.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: e.target[0]?.value,
        phone_number: e.target[1]?.value,
        service_name: e.target[2]?.value
      })
    })
    let res = await response;

    if(res?.status == 200) {
      alert('Sizning so`rovingiz qabul qilindi')
       modal.classList.remove('active')
    }
  }
}