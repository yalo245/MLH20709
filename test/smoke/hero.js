import sel from '../../data/selectors.json';
import exp from '../../data/expected.json';
const val = require('../../data/values.json');

describe('My Little Hero', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    xdescribe('Getting to the page', function () {

        it('TC-1.001 Title is correct ', function () {
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

        it('TC-1.002 Header is present', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-1.003 Header is correct', function () {
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-1.004 Description text is present', function () {
            const description = $(sel.description).isDisplayed();
            expect(description).toEqual(true);
        });

        it('TC-1.005 Description text = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const description = $(sel.description).getText();
            expect(description).toEqual(exp.description);
        });
    });

    describe("Type of Story", () => {

        it("TC-5.001 Label for type of story is present", () => {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it("TC-5.002 Label for type of story = 4. What type of story would you like to read?", () => {
            const text = $$(sel.label)[3].getAttribute('title');
            expect(text).toEqual("4. What type of story would you like to read?");
        });

        it("TC-5.003 Input field is present", () => {
            const inputF = $(sel.storyIF).isExisting();
            expect(inputF).toEqual(true);
        });

        it("TC-5.004 Placeholder text = Type of the story", () => {
            const text = $(sel.storyPlaceholder).getText();
            expect(text).toEqual("Type of the story");
        });

        it("TC-5.005 Dropdown expands", () => {
            $(sel.storyDropdownBtn).click();
            const genre = $$(sel.storyDropdownOption).length;
            expect(genre).toEqual(7);
        });

        it("TC-5.012 Dropdown contains option Comedy", () => {
            $(sel.storyIF).click();
            $$(sel.storyDropdownOption)[6].waitForDisplayed();
            expect($$(sel.storyDropdownOption)[6].getText()).toEqual("Comedy");
        });
    });

    xdescribe('Name Section', function () {

        it('TC-2.001 label 1 is present', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-2.002 label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-2.003 Name field is present', function () {
            const nameField = $(sel.nameField).isDisplayed();
            expect(nameField).toEqual(true);
        });

        it('TC-2.004 Placeholder text = Hero\'s name', function () {
            const text = $(sel.namePlaceholder).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholder);
        });

        it('TC-2.005 Input field accepts lower case letters', function () {
            const input = $(sel.namePlaceholder);
            input.addValue('shrek');
            expect(input.getValue()).toEqual(val.nameInputValue);
        });
    });

    describe('Age Section', function () {

        it('TC-4.001 label 1 is present', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-4.002 label for age = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-4.003 Age input field is present', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-4.004 Age input field placeholder text is <Hero\'s age>', function () {
            const placeHolderText = $(sel.age).getAttribute('placeholder');
            expect(placeHolderText).toEqual(exp.agePlaceholder);
        });

        it('TC-4.008 Input field accepts a 1-digit integers', function () {
            const input = $(sel.age);
            input.setValue(val.ageInputValue);
            expect(input.getValue()).toEqual(val.ageInputValue);
            input.doubleClick();
            browser.pause(2000);
            browser.keys("Delete");
            browser.pause(2000);
            input.setValue('');
        });

        it('TC-4.005 Input field value increases by 1 if clicking on up spinner button', function () {
            const input = $(sel.age);
            const spinUp = $$(".ant-input-number-handler-wrap span")[1];
            input.setValue(val.ageSpinTestValue);
            let testValue = input.getValue();
            spinUp.click();
            +testValue++;
            expect(input.getValue()).toEqual(`${testValue}`);
        });

        it('TC-4.006 Input field value decreases by 1 if clicking on up spinner button', function () {
            const input = $(sel.age);
            const spinUp = $$(".ant-input-number-handler-wrap span")[3];
            let testValue = input.getValue();
            spinUp.click();
            +testValue--;
            expect(input.getValue()).toEqual(`${testValue}`);
        });


    });

    describe('Story', function () {

        it('TC-7.007 Verify that User can read the story after submitting with choice type of story Comedy', function () {

            const name = $(sel.nameField).setValue(val.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(val.age);
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

            const name = $(sel.nameField).setValue(val.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(val.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).isDisplayed();
            expect(tryAgainButton).toEqual(true);
        });

        it('TC-7.014 Verify that submit button name is Try again!', function () {

            const name = $(sel.nameField).setValue(val.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(val.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).getText();
            expect(tryAgainButton).toEqual(exp.tryAgain);
        });

        it('TC-7.016 Verify that submit button is active (clickable)', function () {

            const name = $(sel.nameField).setValue(val.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(val.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const activeButton = $(sel.submitButton).isEnabled();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).isClickable();
            expect(tryAgainButton).toEqual(true);
        });

        it('TC-7.017 Verify that submit button refreshes the page', function () {

            const name = $(sel.nameField).setValue(val.name);
            const setGender = $$(sel.radioClickHeSHeIt)[1].click();
            const age = $(sel.ageField).setValue(val.age);
            const clickTypeStory = $(sel.inputFieldTypeStory).click();
            const clickType = $$(sel.inputFieldTypeStoryArray)[6].click();
            const clickCreate = $(sel.submitButton).click();
            const tryAgainButton = $(sel.tryAgainButton).click();

            const submitButtonDispl = $(sel.submitButton).waitForDisplayed();
            expect(submitButtonDispl).toEqual(true);
        });
    });

});

