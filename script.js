const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Czemu nie!', 'Czasami warto zaryzykować', 'Tak!', 'Nie.', 'Może.', 'Spróbuj zaryzykować', 'Nie ma ryzyka, nie ma zabawy', 'Wydaje mi się, że byłbyś smutny/a jeśli poznałbyś prawdę... :/']

const shakeBall = () => {
	ball.classList.add('shake-animaton')
	setTimeout(checkInput, 100)
}

const chooseNumber = () => {
	const number = Math.floor(Math.random() * 7)
	answer.innerHTML = `<span> Odpowiedź:</span> ${answersArr[number]}`
}

const checkInput = () => {
	if (input.value.slice(-1) == '?' && input.value !== '') {
        chooseNumber()
		error.textContent = ''
	} else if (input.value.slice(-1) !== '?' || input.value == '') {
		answer.innerHTML = ''
		error.innerText = 'Zakończ pytanie "?" jeśli chcesz znać odpowiedź'
	}
	ball.classList.remove('shake-animaton')
}

ball.addEventListener('click', shakeBall)
