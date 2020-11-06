const sel = require('../data/selectors.json');

function inputValues4(name, gender, age, storyType) {
    $(sel.nameField).setValue(name);
    $$(sel.radioClickHeSHeIt)[gender].click();
    $(sel.ageField).setValue(age);
    $(sel.inputFieldTypeStory).click();
    $$(sel.inputFieldTypeStoryArray)[storyType].click();
}

module.exports = inputValues4;