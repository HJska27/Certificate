// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;

    });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');



    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'A':
                certificate.classList.add('number1');
                break;
            case 'B':
                certificate.classList.add('number2');
                break;
            case 'C':
                certificate.classList.add('number3');
                break;
        }
    }
    if (document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function (e) {
            window.print();
            console.log("invoke print");
        });
    } // or in html -> onclick="window.print()"


    let theDate = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "numeric", day: "numeric" })

    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate;
});








function processForm(form) {

};


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


img = document.createElement('img');
img.src = "html.jpg";
img.style.height = '100%';
img.style.width = '100%';



ctx.font = "30px Arial";
ctx.textAlign = 'center';

function clr() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function update() {
    clr()
    ctx.drawImage(img, 0, 0, 500, 500);

    ctx.fillText(document.getElementById('name').value, 250, 225);

    ctx.font = "15px Arial"
    ctx.fillText(new Date().toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" }), 290, 430);
}



console.log('a')