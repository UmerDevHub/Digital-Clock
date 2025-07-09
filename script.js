
document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("#checkbox");
    const amPm = document.querySelector("#ap");
    const check = document.querySelector("#check");

    function updateLabel(){
        if(checkBox.checked){
            check.innerText="24-Hour";
        }
        else{
            check.innerText="12-Hour";
        }
    }

    function updateTime() {
        const date = new Date();
        
        
        const displayHours = document.querySelector("#hours");
        const displayMinutes = document.querySelector("#minutes");
        const displaySeconds = document.querySelector("#seconds");

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (checkBox.checked) {
            ;
            if (hours >= 12) {
                if (hours > 12) {
                    hours='0'+hours;
                    hours = hours - 12;
                }
                amPm.innerText = "PM";
            } else {
                if (hours === 0) {
                    hours = 12;
                }
                amPm.innerText = "AM";
            }
        } else {
            amPm.innerText = "";
        }

        displayHours.innerText = hours;
        displayMinutes.innerText = minutes;
        displaySeconds.innerText = seconds;
    }

    checkBox.addEventListener("change",()=>{
        updateLabel();
        updateTime();
    })

    updateLabel();
    updateTime();
    setInterval(updateTime, 1000);
});
