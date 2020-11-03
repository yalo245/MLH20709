import sel from '../../data/selectors.json';
import exp from '../../data/expected.json';

describe('My Little Hero', function () {
    before(() => {
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
            $(sel.storyDropdownBtn).click();
            $$(sel.storyDropdownOption)[6].waitForDisplayed();
            expect($$(sel.storyDropdownOption)[6].getText()).toEqual("Comedy");
        });
    });

    describe('Name Section', function () {

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
            expect(input.getValue()).toEqual(exp.nameInputValue);
        });
    });


});

