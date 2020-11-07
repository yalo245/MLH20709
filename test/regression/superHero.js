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
            browser.pause(2000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(2000);
            submitBtn.click();
            browser.pause(2000);


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
});
