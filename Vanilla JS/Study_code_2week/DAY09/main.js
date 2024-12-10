const range_number = document.querySelector("form .range")
const my_number = document.querySelector("form .mynumber")
const playBotton = document.querySelector('input[type="button"]')
const random = document.querySelector('#random')
const result = document.querySelector('#result')

function getRandomInt(max) {
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - 0 + 1) + 0)
} // 최대 값, 최소 값 모두 포함

function onSubmit(event) {
  event.preventDefault();
  const random_num = getRandomInt(parseInt(range_number.value))
  // const random_num = 10
  random.innerText = `You chose: ${parseInt(my_number.value)}, the machine chose: ${random_num}.`
  if (parseInt(my_number.value) === random_num) {
    result.innerText = 'You won!'
  } else {
    result.innerText = "You lost!"
  }
}

playBotton.addEventListener('click', onSubmit)

// 1. 입력 값을 숫자형으로 변경해줘야 함.
// 2. form에 type='button'을 사용하면 기본적으로 폼이 제출되지 않아 submit 이벤트가 발생하지 않음.