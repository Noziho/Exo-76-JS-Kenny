
let deathCount = 0;
let viewport = document.getElementById('viewport');
let deadZone = document.createElement('div');
deadZone.style.height = "100%";
deadZone.style.width = "50px";
deadZone.style.background = "red";
viewport.append(deadZone);

document.body.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
        if (t < 0) {
            document.getElementById('kenny').style.top = 0 + 'px';
        }
    }
    else if (event.key === "ArrowDown") {

        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
        if (t > 460) {
            document.getElementById('kenny').style.top = 460 + 'px';
        }
    }

    else  if (event.key === "ArrowLeft") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
        if (t < 0) {
            document.getElementById('kenny').style.left = 0 + 'px';
        }
        if (t < 40) {
            alert("kenny est mort");
            document.getElementById("kenny").style.left = "200px";
            document.getElementById("kenny").style.top = "200px";
            deathCount++;
            count.innerHTML = "T'as tué kenny " + deathCount +" fois enfoiré";

        }
    }

    else if (event.key === "ArrowRight") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';

        if (t > 460){
            document.getElementById('kenny').style.left = 460 + 'px';
        }
    }
})

let count = document.createElement('p');
count.style.textAlign = "center";
document.body.append(count);














