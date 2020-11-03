const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const inputData = require('../../data/inputData.json');

describe('My Little Hero', function () {
    describe('Story', function () {

        it('TC-7.007 Verify that User can read the story after submitting with choice type of story Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            const name = $(sel.nameField).setValue(inputData.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(inputData.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const textOfStory = $(sel.textOfStory).isDisplayed();
            expect(textOfStory).toEqual(true);
            const tryAgainButton = $(sel.tryAgainButton).isDisplayed();
            expect(tryAgainButton).toEqual(true);
        });

        it('TC-7.013 Verify that submit button is present', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            const name = $(sel.nameField).setValue(inputData.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(inputData.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).isDisplayed();
            expect(tryAgainButton).toEqual(true);
        });

        it('TC-7.014 Verify that submit button name is Try again!', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            const name = $(sel.nameField).setValue(inputData.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(inputData.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).getText();
            expect(tryAgainButton).toEqual(exp.tryAgain);
        });

        it('TC-7.016 Verify that submit button is active (clickable)', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            const name = $(sel.nameField).setValue(inputData.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(inputData.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).isClickable();
            expect(tryAgainButton).toEqual(true);
        });

        it('TC-7.017 Verify that submit button refreshes the page', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            const name = $(sel.nameField).setValue(inputData.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(inputData.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).click();
            const homePageDescription = $(sel.description).getText()
            expect(homePageDescription).toEqual(exp.description);
        });
    });
});

