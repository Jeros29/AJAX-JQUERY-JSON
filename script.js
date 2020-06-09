$(function(){
    $(".btn").fadeIn("slow");
    const duration = 200;

    $("#btn1").on("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "classes.json", true);

        xhr.onload = function() {
            if (this.status == 200 && this.readyState == 4) {
                var classes = JSON.parse(this.responseText);
                var output = "";
                var warrior = classes[0];

                // console.log(`The warrior's damage is: ${warrior.damage}`);

                $("#btn1").hide(duration, function() {
                    output += `<ul id="warrior-stats">
                    <li>Class Name: ${warrior.name}</li>
                    <li>Class Health: ${warrior.health}</li>
                    <li>Class Damage: ${warrior.damage}</li>
                    <li>Class Skills: ${warrior.skills}</li>
                    <li>Class Starting Gold: ${warrior.gold}</li>
                    </ul>`;
    
                    document.getElementById("warrior").innerHTML = output;
                    $("#warrior-stats").append(`<button id="button__warrior">Hide</button>`);

                    // $("#warrior__heading").animate({"font-size": "3.5rem"}, 1250);
                });
            } 
            
            else if (this.status == 404) {
                alert(`ERROR ${this.status} : Page not found!`);
            }
        }

        xhr.send();
    });

    $("#btn2").on("click", () => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "classes.json", true);

        xhr.onload = function() {
            if (this.status == 200 && this.readyState == 4) {
                var classes = JSON.parse(this.responseText);
                var output = "";
                var archer = classes[1];

                // console.log(`The archer's damage is ${archer.damage}`);

                $("#btn2").hide(200, () => {
                    output += `<ul id="archer-stats">
                    <li>Class Name: ${archer.name}</li>
                    <li>Class Health: ${archer.health}</li>
                    <li>Class Damage: ${archer.damage}</li>
                    <li>Class Skills: ${archer.skills}</li>
                    <li>Class Starting Gold: ${archer.gold}</li>
                    </ul>`;
    
                    document.getElementById("archer").innerHTML = output;
                    $("#archer-stats").append(`<button id="button__archer">Hide</button>`);
                    
                    // $("#archer__heading").animate({"font-size": "3.5rem"}, 1250);
                })
            }

            else if (this.status == 404) {
                alert(`ERROR ${this.status} : Page not found!`)
            }
        }

        xhr.send();
    })

    $("#btn3").on("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "classes.json", true);

        xhr.onload = function() {
            if (this.status == 200 && this.readyState == 4) {
                var classes = JSON.parse(this.responseText);
                var output = "";
                var wizard = classes[2];

                // console.log(`The wizard's damage is ${wizard.damage}`);

                $("#btn3").hide(duration, () => {
                    output += `<ul id="wizard-stats">
                    <li>Class Name: ${wizard.name}</li>
                    <li>Class Health: ${wizard.health}</li>
                    <li>Class Damage: ${wizard.damage}</li>
                    <li>Class Skills: ${wizard.skills}</li>
                    <li>Class Starting Gold: ${wizard.gold}</li>
                    </ul>`;
    
                    document.getElementById("wizard").innerHTML = output;
                    $("#wizard-stats").append(`<button id="button__wizard">Hide</button>`);
                    
                    // $("#wizard__heading").animate({"font-size": "3.5rem"}, 1250);
                })
            }

            else if (this.status == 404) {
                alert(`ERROR ${this.status} : Page not found!`)
            }
        }

        xhr.send();
    })

    $("#reset").on("click", () => {
        $("body").fadeOut(50);
        $("body").load("index.html").fadeIn("slow");
    });
});