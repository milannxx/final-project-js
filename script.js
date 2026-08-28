// header "select"

const btn = document.querySelector(".header_left--box--select--button")
const select = document.querySelector(".header_choose")

btn.addEventListener("click", () => {
    select.classList.toggle("hide")
})

// header modal 1

const btnModal = document.querySelector(".header_modal--button")
const modal = document.querySelector(".header_modal")
const backround = document.querySelector(".header_backround")
const body = document.querySelector("body")

btnModal.addEventListener("click", () => {
    if (modalInput.value.trim() === "") {
        nameUser.textContent = "Гість"
    }
    modal.classList.add("hide")
    backround.classList.add("hide")
    body.classList.add("bbody")
})

document.addEventListener("keydown", event => {
    if (modalInput.value.trim() === "") {
        nameUser.textContent = "Гість"
    }
    if (
        event.key == "Escape"
    ) {
        modal.classList.add("hide")
        backround.classList.add("hide")
        body.classList.add("bbody")

    }
})

backround.addEventListener("click", () => {
    if (modalInput.value.trim() === "") {
        nameUser.textContent = "Гість"
    }
    modal.classList.add("hide")
    backround.classList.add("hide")
    body.classList.add("bbody")
})

// header modal 2

const modalSubmit = document.querySelector(".header_modal--content--form--button")
const modalInput = document.querySelector(".header_modal--content--form--input")
const nameUser = document.querySelector(".header_right--text--name")
const form = document.querySelector(".header_modal--content--form")

form.addEventListener("submit", event => {
    event.preventDefault()
    nameUser.textContent = modalInput.value
    if (modalInput.value.trim() === "") {
        nameUser.textContent = "Гість"
    }
    modal.classList.add("hide")
    backround.classList.add("hide")
    body.classList.add("bbody")
})

// main 
// game 1

const inputFirst = document.querySelector(".games_first--content--box--input")
const buttonFirst = document.querySelector(".games_first--content--box--button")
const textFirst = document.querySelector(".games_first--content--text")

buttonFirst.addEventListener("click", () => {
    if (isNaN(Number(inputFirst.value)) || inputFirst.value.trim() === "") {
        textFirst.textContent = "Введіть число!";
        textFirst.classList.remove("green")
        textFirst.classList.add("red")  
        return;
    }

    if ((Number(inputFirst.value) % 4 === 0 && Number(inputFirst.value) % 100 !== 0) || Number(inputFirst.value) % 400 === 0) {
        textFirst.textContent = "Ви народилися у високосний рік!"
        textFirst.classList.remove("red")
        textFirst.classList.add("green")
    } else {
        textFirst.textContent = "Ви народилися не у високосний рік!"
        textFirst.classList.remove("green")
        textFirst.classList.add("red")
    }
})

// game 2

const inputSecond = document.querySelector(".games_second--content--box--input")
const buttonSecond = document.querySelector(".games_second--content--box--button")
const textSecond = document.querySelector(".games_second--content--text")

buttonSecond.addEventListener("click", () => {
    if (isNaN(Number(inputSecond.value)) || inputSecond.value.trim() === "") {
        textSecond.textContent = "Введіть число!";
        textSecond.classList.remove("green")
        textSecond.classList.add("red")  
        return;
    }

    const randomNum = Math.floor(Math.random() * 10) + 1
    if (randomNum === Number(inputSecond.value)) {
        textSecond.textContent = `Вітаю, ви вгадали число! ${randomNum}`
        textSecond.classList.remove("red")
        textSecond.classList.add("green")
    } else {
        textSecond.textContent = `Ви програли, комп’ютер загадав ${randomNum}`
        textSecond.classList.remove("green")
        textSecond.classList.add("red")
    }
})

// game 3

const stone = document.querySelector(".games_third--box--buttonFirst")
const scissors = document.querySelector(".games_third--box--buttonSecond")
const paper = document.querySelector(".games_third--box--buttonThird")
const randomItems = ["Камінь", "Ножиці", "Папір"]
const whoWon = document.querySelector(".games_third--whoWon")
const computer = document.querySelector(".games_third--computer")
const computerScore = document.querySelector(".games_third--score--computer")
const userScore = document.querySelector(".games_third--score--you")

let computerPoints = 0
let userPoints = 0

stone.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * randomItems.length)
    const computerChoice = randomItems[randomIndex]
    computer.textContent = computerChoice

    switch (computerChoice) {
        case "Камінь":
            whoWon.textContent = "Нічия!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")
            break

        case "Ножиці":
            whoWon.textContent = "Ви виграли раунд!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")

            userPoints++
            userScore.textContent = userPoints

            break

        case "Папір":
            whoWon.textContent = "Комп’ютер виграв раунд!"
            whoWon.classList.remove("green")
            whoWon.classList.add("red")

            computerPoints++
            computerScore.textContent = computerPoints
    }
})

scissors.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * randomItems.length)
    const computerChoice = randomItems[randomIndex]
    computer.textContent = computerChoice

    switch (computerChoice) {
        case "Камінь":
            whoWon.textContent = "Комп’ютер виграв раунд!"
            whoWon.classList.remove("green")
            whoWon.classList.add("red")

            computerPoints++
            computerScore.textContent = computerPoints

            break

        case "Ножиці":
            whoWon.textContent = "Нічия!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")

            break

        case "Папір":
            whoWon.textContent = "Ви виграли раунд!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")

            userPoints++
            userScore.textContent = userPoints
    }
})

paper.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * randomItems.length)
    const computerChoice = randomItems[randomIndex]
    computer.textContent = computerChoice

    switch (computerChoice) {
        case "Камінь":
            whoWon.textContent = "Ви виграли раунд!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")

            userPoints++
            userScore.textContent = userPoints

            break

        case "Ножиці":
            whoWon.textContent = "Комп’ютер виграв раунд!"
            whoWon.classList.remove("green")
            whoWon.classList.add("red")

            computerPoints++
            computerScore.textContent = computerPoints

            break

        case "Папір":
            whoWon.textContent = "Нічия!"
            whoWon.classList.remove("red")
            whoWon.classList.add("green")
    }
})

//game 4

const firstNum = document.querySelector(".games_fourth--content--firstNum")
const secondNum = document.querySelector(".games_fourth--content--secondNum")
const total = document.querySelector(".games_fourth--content--sum")
const boxButtons = document.querySelector(".games_fourth--content--box")
const sum = document.querySelector(".games_fourth--content--buttonTotal")

const operations = ["+", "*", "-", "/"]

let operation


for (const item of operations) {
    const button = document.createElement("button")

    button.classList.add("games_fourth--content--box--button")
    button.textContent = item

    boxButtons.append(button)
}


boxButtons.addEventListener("click", (event) => {
    if (!event.target.classList.contains("games_fourth--content--box--button")) {
        return
    }

    const buttons = document.querySelectorAll(".games_fourth--content--box--button")

    for (const button of buttons) {
        button.classList.remove("click")
    }

    event.target.classList.add("click")

    operation = event.target.textContent
})


sum.addEventListener("click", () => {
    if (
        firstNum.value.trim() === "" ||
        secondNum.value.trim() === "" ||
        isNaN(Number(firstNum.value)) ||
        isNaN(Number(secondNum.value))
    ) {
        total.textContent = "Введіть число!";
        return;
    }

    sum.classList.add("click")

    switch (operation) {
        case "+":
            total.textContent =
                Number(firstNum.value) + Number(secondNum.value)
            break

        case "*":
            total.textContent =
                Number(firstNum.value) * Number(secondNum.value)
            break

        case "-":
            total.textContent =
                Number(firstNum.value) - Number(secondNum.value)
            break

        case "/":
            if (Number(secondNum.value) === 0) {
                total.textContent = "На 0 ділити неможно"
            } else {
                total.textContent =
                    Number(firstNum.value) / Number(secondNum.value)
            }
            break
    }
})

// game 5

const inputFifth = document.querySelector(".games_fifth--box--content--input")
const buttonFifth = document.querySelector(".games_fifth--box--content--button")
const time = document.querySelector(".games_fifth--box--content--time")

buttonFifth.addEventListener("click", () => {
    if (isNaN(Number(inputFifth.value)) || inputFifth.value.trim() === "") {
        time.textContent = "Введіть число!";
        return;
    }

    const minutes = Number(inputFifth.value)

    const days = Math.floor(minutes / 1440)
    const hours = Math.floor((minutes % 1440) / 60)
    const remainingMinutes = minutes % 60

    time.textContent = `${days} дн. : ${hours} год. : ${remainingMinutes} хв.`
})

// game 6
const gamesSixthGame = document.querySelector(".games_sixth--game")
const gamesSixthDino = document.querySelector(".games_sixth--game--dino")
const gamesSixthScore = document.querySelector(".games_sixth--game--score")
const gamesSixthGameOver = document.querySelector(".games_sixth--game--game-over")
const gamesSixthRestart = document.querySelector(".games_sixth--game--game-over--button")

let gamesSixthStarted = false
let gamesSixthRunning = false
let gamesSixthScoreNumber = 0
let gamesSixthSpeed = 5

let gamesSixthScoreTimer
let gamesSixthCactusTimer

document.addEventListener("keydown", (event) => {
    if (event.code !== "Space") return

    event.preventDefault()

    if (!gamesSixthStarted) {
        gamesSixthStart()
        return
    }

    if (gamesSixthRunning) {
        gamesSixthJump()
    }
})

function gamesSixthStart() {
    gamesSixthStarted = true
    gamesSixthRunning = true

    gamesSixthScoreNumber = 0
    gamesSixthSpeed = 5

    gamesSixthScore.textContent = "00000"

    gamesSixthScoreTimer = setInterval(() => {
        if (!gamesSixthRunning) return

        gamesSixthScoreNumber++

        gamesSixthScore.textContent =
            String(gamesSixthScoreNumber).padStart(5, "0")

        if (gamesSixthScoreNumber % 500 === 0) {
            gamesSixthSpeed += 0.5
        }
    }, 100)

    gamesSixthCreateCactus()
}

function gamesSixthJump() {
    if (
        gamesSixthDino.classList.contains(
            "games_sixth--game--dino--jump"
        )
    ) {
        return
    }

    gamesSixthDino.classList.add(
        "games_sixth--game--dino--jump"
    )

    setTimeout(() => {
        gamesSixthDino.classList.remove(
            "games_sixth--game--dino--jump"
        )
    }, 700)
}

function gamesSixthCreateCactus() {
    if (!gamesSixthRunning) return

    const gamesSixthCactus = document.createElement("div")

    gamesSixthCactus.classList.add(
        "games_sixth--game--cactus"
    )

    gamesSixthGame.appendChild(gamesSixthCactus)

    let gamesSixthPosition = -30

    const gamesSixthMove = setInterval(() => {
        if (!gamesSixthRunning) {
            clearInterval(gamesSixthMove)
            gamesSixthCactus.remove()
            return
        }

        gamesSixthPosition += gamesSixthSpeed

        gamesSixthCactus.style.right =
            `${gamesSixthPosition}px`

        const gamesSixthDinoRect =
            gamesSixthDino.getBoundingClientRect()

        const gamesSixthCactusRect =
            gamesSixthCactus.getBoundingClientRect()

        if (
            gamesSixthDinoRect.left <
            gamesSixthCactusRect.right &&
            gamesSixthDinoRect.right >
            gamesSixthCactusRect.left &&
            gamesSixthDinoRect.bottom >
            gamesSixthCactusRect.top
        ) {
            clearInterval(gamesSixthMove)
            gamesSixthEnd()
        }

        if (gamesSixthPosition > 750) {
            clearInterval(gamesSixthMove)
            gamesSixthCactus.remove()
        }
    }, 20)

    gamesSixthCactusTimer = setTimeout(() => {
        gamesSixthCreateCactus()
    }, Math.random() * 1200 + 800)
}

function gamesSixthEnd() {
    gamesSixthRunning = false

    clearInterval(gamesSixthScoreTimer)
    clearTimeout(gamesSixthCactusTimer)

    document
        .querySelectorAll(".games_sixth--game--cactus")
        .forEach((gamesSixthCactus) => {
            gamesSixthCactus.remove()
        })

    gamesSixthGameOver.style.display = "flex"
}

gamesSixthRestart.addEventListener("click", () => {
    gamesSixthGameOver.style.display = "none"

    gamesSixthStarted = false
    gamesSixthRunning = false
    gamesSixthScoreNumber = 0

    gamesSixthScore.textContent = "00000"
})

// game 7

const ground = document.querySelector(".games_seventh--box--ground")
const ball = document.querySelector(".games_seventh--box--ball")
const box = document.querySelector(".games_seventh--box")

ground.addEventListener("click", (event) => {
    const boxRect = box.getBoundingClientRect()
    const groundRect = ground.getBoundingClientRect()
    const ballWidth = ball.offsetWidth
    const ballHeight = ball.offsetHeight
    const x = event.clientX - boxRect.left
    const y = event.clientY - boxRect.top
    const groundLeft = groundRect.left - boxRect.left
    const groundTop = groundRect.top - boxRect.top

    const newX = Math.max(
        groundLeft + ballWidth / 2,
        Math.min(
            x,
            groundLeft + groundRect.width - ballWidth / 2
        )
    )
    const newY = Math.max(
        groundTop + ballHeight / 2,
        Math.min(
            y,
            groundTop + groundRect.height - ballHeight / 2
        )
    )

    ball.style.left = `${newX}px`
    ball.style.top = `${newY}px`
})

// game 8

const numFirst = document.querySelector(".games_eighth--box--numFirst")
const numSecond = document.querySelector(".games_eighth--box--numSecond")
const numThird = document.querySelector(".games_eighth--box--numThird")
const number = document.querySelector(".games_eighth--text--number")
const inputs = [numFirst, numSecond, numThird]

for (const input of inputs) {
    input.addEventListener("blur", (event) => {
        if (
            numFirst.value.trim() === "" ||
            numSecond.value.trim() === "" ||
            numThird.value.trim() === "" ||
            isNaN(Number(numFirst.value)) ||
            isNaN(Number(numSecond.value)) ||
            isNaN(Number(numThird.value))
        ) {
            number.textContent = "Введіть число!";
            return;
        }

        const numbers = [
            Number(numFirst.value),
            Number(numSecond.value),
            Number(numThird.value)
        ]

        if (!isNaN(Number(event.target.value))) {
            let max = 0

            for (const num of numbers) {
                if (num > max) {
                    max = num
                }
            }

            number.textContent = max
        }
    })
}

// game 9

const leftButton = document.querySelector(".games_ninth--left")
const rightButton = document.querySelector(".games_ninth--right")

const cardFirst = document.querySelector(".games_ninth--slider--cardFirst")
const cardSecond = document.querySelector(".games_ninth--slider--cardSecond")
const cardThird = document.querySelector(".games_ninth--slider--cardThird")
const cardFourth = document.querySelector(".games_ninth--slider--cardFourth")
const cardFifth = document.querySelector(".games_ninth--slider--cardFifth")
const cardSixth = document.querySelector(".games_ninth--slider--cardSixth")
const cardSeventh = document.querySelector(".games_ninth--slider--cardSeventh")

const cards = [
    cardFirst,
    cardSecond,
    cardThird,
    cardFourth,
    cardFifth,
    cardSixth,
    cardSeventh
]

const dots = document.querySelector(".games_ninth--dots")

let currentCard = 0


for (let i = 0; i < cards.length; i++) {
    const button = document.createElement("button")

    button.classList.add("games_ninth--dots--button")
    button.dataset.index = i

    dots.append(button)
}


const buttons = document.querySelectorAll(".games_ninth--dots--button")


function showCard() {
    for (const card of cards) {
        card.classList.add("hide")
    }

    cards[currentCard].classList.remove("hide")


    for (const button of buttons) {
        button.classList.remove("active")
    }

    buttons[currentCard].classList.add("active")


    if (currentCard === 0) {
        leftButton.classList.add("hide")
    } else {
        leftButton.classList.remove("hide")
    }


    if (currentCard === cards.length - 1) {
        rightButton.classList.add("hide")
    } else {
        rightButton.classList.remove("hide")
    }
}


dots.addEventListener("click", (event) => {
    if (!event.target.classList.contains("games_ninth--dots--button")) {
        return
    }

    currentCard = Number(event.target.dataset.index)

    showCard()
})


rightButton.addEventListener("click", () => {
    if (currentCard < cards.length - 1) {
        currentCard++

        showCard()
    }
})


leftButton.addEventListener("click", () => {
    if (currentCard > 0) {
        currentCard--

        showCard()
    }
})


showCard()

// game 10

const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];
const cardsBox = document.querySelector(".games_tenth--cards")
const buttonsContainer = document.querySelector(".games_tenth--buttons")
const tasks = [
    "Які вчені народилися в 19 ст.",
    "Знайти рік народження Albert Einshtein",
    "Відсортувати вчених за алфавітом",
    "Знайти вчених, прізвища яких починаються на на літеру “С”",
    "Відсортувати вчених за кількістю прожитих років",
    "Видалити всіх вчених, ім’я яких починається на “А”",
    "Знайти вченого, який народився найпізніше",
    "Знайти вченого, який прожив найдовше і вченого, який прожив найменше",
    "Знайти вчених, в яких співпадають перші літери імені і прізвища"
]

function renderCards(array) {
    cardsBox.innerHTML = ""

    for (const scientist of array) {
        const card = document.createElement("div")

        card.classList.add("games_tenth--cards--card")

        card.innerHTML = `
            <p class="games_tenth--cards--card--name">${scientist.name} ${scientist.surname}</p>
            <p class="games_tenth--cards--card--year">${scientist.born}-${scientist.dead}</p>`
        cardsBox.append(card)
    }
}

for (let i = 0; i < tasks.length; i++) {
    const button = document.createElement("button")

    button.classList.add("games_tenth--buttons--button")
    button.textContent = tasks[i]
    button.dataset.index = i

    buttonsContainer.append(button)
}

buttonsContainer.addEventListener("click", (event) => {
    if (!event.target.classList.contains("games_tenth--buttons--button")) {
        return
    }

    const index = Number(event.target.dataset.index)

    switch (index) {
        case 0:
            const resultFirst = scientists.filter(scientist =>
                scientist.born >= 1801 &&
                scientist.born <= 1900
            )

            renderCards(resultFirst)
            break

        case 1:
            const resultSecond = scientists.filter(scientist =>
                scientist.name === "Albert" &&
                scientist.surname === "Einstein"
            )

            renderCards(resultSecond)
            break

        case 2:
            const resultThird = scientists.sort((a, b) =>
                a.name.localeCompare(b.name)
            )

            renderCards(resultThird)
            break

        case 3:
            const resultFourth = scientists.filter(scientist =>
                scientist.surname.startsWith("C")
            )

            renderCards(resultFourth)
            break

        case 4:
            const resultFifth = [...scientists].sort((a, b) =>
                (b.dead - b.born) - (a.dead - a.born)
            )

            renderCards(resultFifth)
            break

        case 5:
            const resultSixth = scientists.filter(scientist =>
                !scientist.name.startsWith("A")
            )

            renderCards(resultSixth)
            break

        case 6:
            const resultSeventh = scientists.reduce((latest, scientist) =>
                scientist.born > latest.born
                    ? scientist
                    : latest
            )

            renderCards([resultSeventh])
            break

        case 7:
            const oldest = scientists.reduce((max, scientist) =>
                (scientist.dead - scientist.born) > (max.dead - max.born)
                    ? scientist
                    : max
            )

            const youngest = scientists.reduce((min, scientist) =>
                (scientist.dead - scientist.born) < (min.dead - min.born)
                    ? scientist
                    : min
            )

            renderCards([oldest, youngest])
            break

        case 8:
            const resultNinth = scientists.filter(scientist =>
                scientist.name[0].toLowerCase() ===
                scientist.surname[0].toLowerCase()
            )

            renderCards(resultNinth)
            break
    }
})

renderCards(scientists)

// footer 
const submit = document.querySelector(".footer_box--form--button")
const modalFooter = document.querySelector(".footer_modal")
const inputGmail = document.querySelector(".footer_box--form--input")
const formFooter = document.querySelector(".footer_box--form")
const footerModalButton = document.querySelector(".footer_modal--button")
const footerBackround = document.querySelector(".footer_backround")

formFooter.addEventListener("submit", (event) => {
    event.preventDefault()

    modalFooter.classList.remove("hide")
    footerBackround.classList.remove("hide")
    body.classList.remove("bbody")
})

footerModalButton.addEventListener("click", () => {
    modalFooter.classList.add("hide")
    footerBackround.classList.add("hide")
    body.classList.add("bbody")
})

footerBackround.addEventListener("click", () => {
    modalFooter.classList.add("hide")
    footerBackround.classList.add("hide")
    body.classList.add("bbody")
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalFooter.classList.add("hide")
        footerBackround.classList.add("hide")
        body.classList.add("bbody")
    }
})

// filter 

const games = [
    {
        id: 1,
        name: 'Високосний калькулятор',
        category: 'numerical',

    },
    {
        id: 2,
        name: 'Вгадай число',
        category: 'numerical',

    },
    {
        id: 3,
        name: 'Камінь-Ножиці-Папір',
        category: 'game',

    },
    {
        id: 4,
        name: 'Калькулятор',
        category: 'numerical',

    },
    {
        id: 5,
        name: 'Калькулятор часу',
        category: 'numerical',

    },
    {
        id: 6,
        name: 'Google динозаврик',
        category: 'game',

    },
    {
        id: 7,
        name: 'Футбол',
        category: 'game',

    },
    {
        id: 8,
        name: 'Найбільше число',
        category: 'numerical',

    },
    {
        id: 9,
        name: 'Наша команда',
        category: 'acquaintance',

    },
    {
        id: 10,
        name: 'Вчений',
        category: 'acquaintance',

    },
]

const gameElements = [
    document.querySelector(".games_first"),
    document.querySelector(".games_second"),
    document.querySelector(".games_third"),
    document.querySelector(".games_fourth"),
    document.querySelector(".games_fifth"),
    document.querySelector(".games_sixth"),
    document.querySelector(".games_seventh"),
    document.querySelector(".games_eighth"),
    document.querySelector(".games_ninth"),
    document.querySelector(".games_tenth"),
]

const choose = document.querySelector(".header_choose")
const categoryButtons = document.querySelectorAll(".header_choose--card--link")
const borderElements = document.querySelectorAll(".games_border")

for (const button of categoryButtons) {
    button.addEventListener("click", (event) => {
        event.preventDefault()

        const category = event.target.dataset.category

        const filteredGames = games.filter(game =>
            game.category === category
        )

        for (const game of games) {
            const element = gameElements[game.id - 1]
            const border = borderElements[game.id - 1]

            if (filteredGames.includes(game)) {
                element.style.display = ""

                if (border) {
                    border.style.display = ""
                }
            } else {
                element.style.display = "none"

                if (border) {
                    border.style.display = "none"
                }
            }
        }

        choose.classList.add("hide")
    })
}

// theme
const themeButton = document.querySelector(".header_right--button");

themeButton.addEventListener("click", () => {
    themeButton.classList.toggle("active");

    if (themeButton.classList.contains("active")) {
        document.documentElement.style.setProperty("--white", "#0B1F3A");
        document.documentElement.style.setProperty("--black", "#fff");
        document.documentElement.style.setProperty("--ground", "#016601");
        document.documentElement.style.setProperty("--shadow", "#FFFFFF40");
        document.documentElement.style.setProperty("--dino", "#FFF");
        document.documentElement.style.setProperty("--grey", "#C8C8C8");
        document.documentElement.style.setProperty("--fill", "#0B1F3A");
        document.documentElement.style.setProperty("--select", "#000");
    } else {
        document.documentElement.style.setProperty("--white", "#ffffff");
        document.documentElement.style.setProperty("--black", "#000");
        document.documentElement.style.setProperty("--grey", "#EEEEEE");
        document.documentElement.style.setProperty("--ground", "#5ABB58");
        document.documentElement.style.setProperty("--shadow", "#00000040");
        document.documentElement.style.setProperty("--dino", "#535353");
        document.documentElement.style.setProperty("--fill", "#D9D9D9");
        document.documentElement.style.setProperty("--select", "#F1F1F1");
    }
});