// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){

    const status = document.getElementById("flightStatus");
    const TakeOffbutton = document.getElementById("takeoff");
    const shuttleBackgroundColor = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort")
    const rocket = document.getElementById("rocket");
    const leftButton = document.getElementById("Left");
    const rightButton = document.getElementById("Right");
    const upButton = document.getElementById("UP");
    const downButton = document.getElementById("Down");

    // function moveIMG(str) {
    //     step = 10;
    //     switch(str){
    //         case "down":
    //             let x=rocket.offsetTop;
    //             x += step;
    //             rocket.style.top = x+'px';
    //         break;
    //     }
    // }

    TakeOffbutton.addEventListener("click", function(event) {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (answer) {
            status.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10,000";
        }
    });

    landingButton.addEventListener("click", (event)=>{
        this.window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        shuttleBackgroundColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    })

    abortMissionButton.addEventListener("click", (event)=>{
        let response = this.window.confirm("Confirm that you want to abort the mission.");
        if (response){
            status.innerHTML = "Mission aborted.";
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    upButton.addEventListener("click", (event)=>{});

    downButton.addEventListener("click", (event)=>{
        function moveIMG(str) {
                step = 10;
                switch(str){
                    case "down":
                        let x=rocket.offsetTop;
                        x += step;
                        rocket.style.top = x+'px';
                    break;
                }
            }
    });

    leftButton.addEventListener("click", (event)=>{});

    rightButton.addEventListener("click", (event)=>{});

});


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
