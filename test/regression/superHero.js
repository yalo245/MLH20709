import sel from "../../data/selectors.json";
import exp from "../../data/expected.json";
const path = require('path');

const val = require("../../data/values.json");
const inputValues4andClick = require("../../helpers/inputValues4andClick.js");
const inputValues4 = require("../../helpers/inputValues4.js");

describe("My Little Hero: Regression", function () {
    beforeEach(() => {
        browser.url("https://qa-apps.netlify.app/app_my_hero");
    });

    describe("Story Section", function () {
           it("TC-7.008 The gender should be used for possessive pronouns as well she -- her", function () {
                inputValues4andClick(
                    val.names.LadyBug007,
                    val.genders.she,
                    val.ages["567"],
                    val.storyTypes.Comedy
                );
                const her = $$(sel.textOfStory)[0];
                expect(her).toHaveTextContaining("her");
            });

            it("TC-7.009 The gender should be used for possessive pronouns as well he -- his", function () {
                inputValues4andClick(
                    val.names.LadyBug007,
                    val.genders.he,
                    val.ages["567"],
                    val.storyTypes.Comedy
                );
                const his = $$(sel.textOfStory)[0];
                expect(his).toHaveTextContaining("his");
            });

            it("TC-7.010 The gender should be used for possessive pronouns as well it -- its", function () {
                inputValues4andClick(
                    val.names.LadyBug007,
                    val.genders.it,
                    val.ages["567"],
                    val.storyTypes.OvercomingTheMonster
                );
                const its = $$(sel.textOfStory)[0];
                expect(its).toHaveTextContaining("its");
            });

            it("TC-7.011 Verify that age in the story corresponds to entered age", function () {
                inputValues4andClick(
                    val.names.shrek,
                    val.genders.he,
                    val.ages["230"],
                    val.storyTypes.Comedy
                );
                const age = $$(sel.textOfStory)[0];
                expect(age).toHaveTextContaining("two hundred and thirty");
            });

            it("TC-7.012 Verify that 'name of the Hero' in the story corresponds to entered name", function () {
                inputValues4andClick(
                    val.names.shrek,
                    val.genders.he,
                    val.ages["230"],
                    val.storyTypes.Comedy
                );
                const name = $$(sel.textOfStory)[0];
                expect(name).toHaveTextContaining(exp.name);
            });

            it("TC-7.015 Verify that if 'Hero s name' is entered with lower case it displays with capital letter in the story", function () {
                inputValues4andClick(
                    val.names.shrek,
                    val.genders.he,
                    val.ages["230"],
                    val.storyTypes.Comedy
                );
                const name = $$(sel.textOfStory)[0];
                expect(name).toHaveTextContaining(exp.herosName);
            });

            it("TC-7.018 Verify that image is present", function () {
                inputValues4(
                    val.names.shrek,
                    val.genders.he,
                    val.ages["567"],
                    val.storyTypes.Comedy
                );

                const inputDiv = $('.ant-upload input');
                const submitBtn = $(sel.submitButton);
                const filePath = path.join(__dirname, '../../data/imgPNG.png');
                const remoteFilePath = browser.uploadFile(filePath);
                browser.execute(function () {
                    document.getElementsByTagName('input')[6].style.display = 'block';
                });
                inputDiv.waitForDisplayed();
                inputDiv.setValue(remoteFilePath);
                submitBtn.click();
                const imageCheck = $(sel.imageInStory).getAttribute('src');
                const imageInStoryPresent = imageCheck.length > exp.srcIfNoImageInStory.length;
                expect(imageInStoryPresent).toEqual(true);

            });

            it("TC-7.019 Verify that image is not present", function () {
                inputValues4andClick(
                    val.names.shrek,
                    val.genders.he,
                    val.ages["567"],
                    val.storyTypes.Comedy
                );
                const imageCheck = $(sel.imageInStory).getAttribute('src');
                expect(imageCheck).toEqual(exp.srcIfNoImageInStory);
            });
        });

    describe('Type of story section', function () {
            it('TC-5.006 Verify that dropdown contains Overcoming the Monster', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[0].getAttribute("title");
                expect(text).toEqual("Overcoming the Monster");
            });

            it('TC-5.007 Verify that dropdown contains Rebirth', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[1].getAttribute("title");
                expect(text).toEqual("Rebirth");
            });

            it('TC-5.008 Verify that dropdown contains Quest', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[2].getAttribute("title");
                expect(text).toEqual("Quest");
            });

            it('TC-5.009 Verify that dropdown contains Journey and Return', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[3].getAttribute("title");
                expect(text).toEqual("Journey and Return");
            });

            it('TC-5.010 Verify that dropdown contains Rags and Riches', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[4].getAttribute("title");
                expect(text).toEqual("Rags and Riches");
            });

            it('TC-5.011 Verify that dropdown contains Tragedy', function () {
                $(sel.storyIF).click();
                const text = $$(sel.storyDropdownOption)[5].getAttribute("title");
                expect(text).toEqual("Tragedy");
            });

            it('TC-5.013 Verify that multiple choices are not allowed', function () {
                $(sel.storyIF).click();
                $$(sel.storyDropdownOption)[5].click();
                expect($(sel.storyIFContainsTitle).getAttribute('title')).toEqual("Tragedy");
                $(sel.storyIF).click();
                $$(sel.storyDropdownOption)[6].click();
                const textComedy = $(sel.storyIFContainsTitle).getAttribute('title');
                expect(textComedy).toEqual("Comedy");
            });
        });

});





