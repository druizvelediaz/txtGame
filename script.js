var player = {};
var player = {
    'health': 100,
    'dmgRed': 0,
};

function demo() {
    console.log(player.health);
    console.log(player.dmgRed);
}

function item() {
    player.dmgRed += 5;
    console.log(player.dmgRed);
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function takeInput() {
    var disp1 = document.getElementById('myInput').value;
    console.log(disp1);
}