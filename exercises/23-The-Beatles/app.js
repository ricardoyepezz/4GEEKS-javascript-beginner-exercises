function sing() {
  for (let i = 1; i < 13; i++) {
     if (i == 11) {
        var text3 = ("there will be an answer");
    } else if (i == 5) {
        var text2 = ("whisper words of wisdom");
    } else if (i != 11 && i != 5) {
        var text = ("let it be");
    }
}
return (`${text}, ${text}, ${text}, ${text}, ${text2}, ${text}, ${text}, ${text}, ${text}, ${text}, ${text3}, ${text}`)
}

//Your code above ^^^

console.log(sing());
