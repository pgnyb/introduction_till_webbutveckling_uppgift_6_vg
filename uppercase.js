// UPPERCASE funktionen
function convertToUppercase(text) {

    const result = text.toUpperCase();

    console.log(result);

    return result;
}

// För Jest Testet
if (typeof module !== "undefined" && module.exports) {

    module.exports = convertToUppercase;

}

// För webbappen
if (typeof document !== "undefined") {

    const input = document.getElementById("textInput");
    const button = document.getElementById("convertBtn");

    button.addEventListener("click", () => {
        convertToUppercase(input.value);

    });
}