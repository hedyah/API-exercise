function searchScripture() {
    word = document.getElementById('inputbox').value
    axios.request({
        method : "GET",
        url : "https://bible-api.com/"+ word
    }).then(verseFound).catch(verseError);
}

function verseFound(response) {
    console.log(response.data);
    let reference = response.data.reference;
    console.log(reference);
    document.getElementById('chapter').innerText = reference;
    let verse = response.data.text;
    console.log(verse);
    document.getElementById('verse').innerText = verse;
    let translation = response.data.translation_name;
    console.log(translation);
    document.getElementById('translation').innerText = translation;
}

function verseError(error) {
    console.log(error);
}

let word = "romans+12:1-2";
document.getElementById('versebutton').addEventListener('click',searchScripture);