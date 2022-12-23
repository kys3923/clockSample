document.addEventListener('DOMContentLoaded', function () {
        // function
        const clockRun = () => {
                
                // DOM load
                let hrHand = document.getElementById('hour');
                let minHand = document.getElementById('minute');
                let secondHand = document.getElementById('second');
        
                // get times
                let now = new Date();
                let hr = now.getHours();
                let min = now.getMinutes();
                let sec = now.getSeconds();
        
                // get rotation angles
                let secAngle = sec * 6;
                let minAngle = (min * 6) + (sec * 6 / 360);
                let hrAngle = (hr * 30) + (1/2 * min);
        
                // setting up angle value
                let secAngleValue = "rotate(" + secAngle + "deg)";
                let minAngleValue = "rotate(" + minAngle + "deg)";
                let hrAngleValue = "rotate(" + hrAngle + "deg)";
        
                // CSS add
                secondHand.style.transform = secAngleValue;
                minHand.style.transform = minAngleValue;
                hrHand.style.transform = hrAngleValue;
        }


        clockRun ();

        setInterval(clockRun, 1000);

})
// 5. calculate rotate degree
// 4. need to rotate needles by 1sec each
