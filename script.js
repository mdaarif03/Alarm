const currentTime = document.querySelector("h1"),
    content = document.querySelector(".content"),
    selectMenu = document.querySelectorAll("select"),
    setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
    ringtone = new Audio("./files/ring1.mp3");



// function closePopup() {
//     popup.classList.remove("open-popup");
// }

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    
    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
            var timer;
var ele = document.getElementById('timer');
(function() {
    var sec = 0;
    timer = setInterval(() => {
        ele.innerHTML = '00:' + sec;
        sec++;
    }, 1000)
})()

function paus() {
  clearInterval(timer);
}

    }
});


    

    
function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);

let popup = document.getElementById("popup")

function openPopup() {
        popup.classList.add("open-popup");
    }

function openPopup2() {
        popupSecond.classList.add("open-popupSecond");
    }

function openPopup3() {
        popupThird.classList.add("open-popupThird");
    }

function openPopup4() {
        popupFourth.classList.add("open-popupFourth");
    }
// function openPopup() {
//     if (isAlarmSet) {
//         popup.classList.add("open-popup");
//     }
// }


// function closePopup() {
//     popup.classList.remove("open-popup");
// }


// var timer;
// var ele = document.getElementById('timer');
// (function() {
//     var sec = 0;
//     timer = setInterval(() => {
//         ele.innerHTML = '00:' + sec;
//         sec++;
//     }, 1000)
// })()

// function pause() {
//     clearInterval(timer);
// }