console.log('javascipt ready');

const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
    const predictionsElement = document.getElementById("predictions");
    const probabilityPercentage = probability * 100;
    let genderDecode;
    
    if(gender == "male") {
        genderDecode = "Cowok"
    }else {
        genderDecode = "Cewek";
    }

    const predictionsText = `Halo ${name}, jenis kelamin kamu kemungkinan adalah ${genderDecode} sebesar ${probabilityPercentage}%`;

    
    
    predictionsElement.textContent = predictionsText;
}

async function predict(event) {
    if(event.key == "Enter"){
        const firstName = event.target.value;
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

        const response = await fetch(queryUrl);
        const result = await response.json();
        showResult(result.name, result.gender, result.probability)
}
}
    
