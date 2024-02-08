


// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        var formData = new FormData(myForm);
        // output as an object
        console.log(Object.fromEntries(formData));
      
        // ...or iterate through the name-value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      });
    // Log readiness to console
    console.log("Ready");
});

function processForm(form){

}


let theDate = new Date().toLocaleDateString('en-us')