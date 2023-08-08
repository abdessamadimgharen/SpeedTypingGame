let testText = document.querySelector('.container .text'),
    spentTime = document.querySelector('.container .spent-time span:first-child'),
    theInput = document.querySelector('.container .input-text'),
    overlay = document.querySelector('.overlay'),
    results = document.querySelector('.results'),
    gameOver = document.querySelector('.results .game-over'),
    congrats = document.querySelector('.results .congrats'),
    levels = document.querySelectorAll('.levels span'),
    levelsContainer = document.querySelector('.levels'),
    replayBtn = document.querySelectorAll('.replay button'),
    deleteBtn = document.querySelectorAll('.results .delete'),
    plusBtn = document.querySelector('.add-time');
    minusBtn = document.querySelector('.minus-time');



let easySentences = [
    "While the Amazon river holds a lot of water, right above it exists a larger invisible river. It turns out there is more water in the clouds and vapor above the Amazon rainforest than in the river ",
    "Garden Veggie Straws, a snack, shows fresh vegetables on the bag and promoted it as a healthy alternative to chips. However, it was found that they are actually less nutritious than potato chips. "
],
    mediumSentences = [
        "Cougars Are Solitary Cats. However, They Become More Social During Courtship And When The Females Are Caring For Their Young. The Cougar Cubs Usually Stay With Their Mother For Up To Two Years.",
        "Wyoming Is the 10Th largest State In The United States. Despite that, They Only Have Two escalators, And They are Both Found In The Same City. This Might be Because It's cheaper To Build Outwards"
    ],
    hardSentences = [
        "Even Though There are over 400,000 different species of plants On Earth, only an Estimated 80,000 to 300,000 plants are Safe for Humans to eat. Despite that, We Only Eat about 200 of the Edible Plants",
        "On July the 7th, 2018, Joel Strasser broke the record for the Most Toothpick in A beard. He took 3 hours and 13 Minutes To PUT 3,500 TOOTHPICKS into His beard. The previous record was 3,157 toothpicks"
];


theInput.onpaste = () => {
    return false;
}

function generatCountTime() {
    plusBtn.onclick = () => {
        spentTime.innerHTML = parseInt(spentTime.innerHTML) + 10
    }
    minusBtn.onclick = () => {
        spentTime.innerHTML = parseInt(spentTime.innerHTML) - 10
    }
}
generatCountTime()

let choosenLevel;

levels.forEach(level => {

    level.addEventListener('click', () => {

        theInput.focus()

        if(level.classList.contains('easy')) {
            choosenLevel = easySentences;
            levelsContainer.remove();
        } else if (level.classList.contains('medium')) {
            choosenLevel = mediumSentences;
            levelsContainer.remove();
        } else if (level.classList.contains('hard')) {
            choosenLevel = hardSentences;
            levelsContainer.remove();
        }
        checkSentences();
    })
})


function checkSentences() {

    let randomSentence = choosenLevel[Math.floor(Math.random() * choosenLevel.length)];

    testText.innerHTML = randomSentence;

    theInput.addEventListener('input', () => {
        generateTime()
    })

}

function generateTime() {
    let time = parseInt(spentTime.innerHTML);
    let start = setInterval(() => { 
        time--;
        spentTime.innerHTML = time;
        if(spentTime.innerHTML === "0") {
            clearInterval(start);
            generateResult();
        }
    }, 1000);
}

function generateResult() {
    if (theInput.value.trim() === testText.innerHTML.trim()) {
        overlay.style.display = 'block';
        congrats.style.display = 'block';
    } else {
        overlay.style.display = 'block';
        gameOver.style.display = 'block';
    }
    deleteAll()
}

function deleteAll() {
    replayBtn.forEach(btn => {
        btn.onclick = () => {
            location.reload();
            overlay.style.display = 'none';
            gameOver.style.display = 'none';
        }
    })
    deleteBtn.forEach(btn => {
        btn.onclick = () => {
            location.reload();
            overlay.style.display = 'none';
            gameOver.style.display = 'none';
        }
    })

}