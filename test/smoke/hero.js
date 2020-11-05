import sel from "../../data/selectors.json";
import exp from "../../data/expected.json";

const val = require("../../data/values.json");
const inputValues4andClick = require("../../helpers/inputValues4andClick.js");


describe("My Little Hero", function () {
  beforeEach(() => {
    browser.url("https://qa-apps.netlify.app/app_my_hero");
  });

  xdescribe("Getting to the page", function () {
    it("TC-1.001 Title is correct ", function () {
      let title = browser.getTitle();
      expect(title).toEqual("MLH trial");
    });

    it("TC-1.002 Header is present", function () {
      const header = $(sel.header).isDisplayed();
      expect(header).toEqual(true);
    });

    it("TC-1.003 Header is correct", function () {
      const header = $(sel.header).getText();
      expect(header).toEqual(exp.header);
    });

    it("TC-1.004 Description text is present", function () {
      const description = $(sel.description).isDisplayed();
      expect(description).toEqual(true);
    });

    it("TC-1.005 Description text = Let's create your own HERO! It's super easy with our application!", function () {
      const description = $(sel.description).getText();
      expect(description).toEqual(exp.description);
    });
  });

  xdescribe("Name Section", function () {
    it("TC-2.001 label 1 is present", function () {
      const label = $$(sel.label)[0].isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-2.002 label for name = 1. What is your Hero's name?", function () {
      const text = $$(sel.label)[0].getAttribute("title");
      expect(text).toEqual(exp.labelName);
    });

    it("TC-2.003 Name field is present", function () {
      const nameField = $(sel.nameField).isDisplayed();
      expect(nameField).toEqual(true);
    });

    it("TC-2.004 Placeholder text = Hero's name", function () {
      const text = $(sel.namePlaceholder).getAttribute("placeholder");
      expect(text).toEqual(exp.namePlaceholder);
    });

    it("TC-2.005 Input field accepts lower case letters", function () {
      const input = $(sel.namePlaceholder);
      input.addValue("shrek");
      expect(input.getValue()).toEqual(val.nameInputValue);
    });
  });

  xdescribe("Gender Section", function () {
    it("TC-3.001 Verify that Label 2 is present ", function () {
      const label = $$(sel.label)[1].isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-3.002 Verify that text for Label gender = <2. Please choose a gender.> ", function () {
      const text = $$(sel.label)[1].getAttribute("title");
      expect(text).toEqual(exp.labelGender);
    });

    it("TC-3.003 Verify that radio button with name he is present", function () {
      const genderHe = $$(sel.gender)[0].isDisplayed();
      expect(genderHe).toEqual(true);
    });

    it("TC-3.004 Verify that radio button with name she is present", function () {
      const genderShe = $$(sel.gender)[1].isDisplayed();
      expect(genderShe).toEqual(true);
    });

    it("TC-3.005 Verify that radio button with name it is present", function () {
      const genderIt = $$(sel.gender)[2].isDisplayed();
      expect(genderIt).toEqual(true);
    });

    it("TC-3.007 Verify that radio button he is clickable", function () {
      const clickHe = $$(sel.gender)[0].isClickable();
      expect(clickHe).toEqual(true);
    });

    it("TC-3.008 Verify that radio button she is clickable", function () {
      const clickShe = $$(sel.gender)[1].isClickable();
      expect(clickShe).toEqual(true);
    });

    it("TC-3.009 Verify that radio button it is clickable", function () {
      const clickIt = $$(sel.gender)[2].isClickable();
      expect(clickIt).toEqual(true);
    });

    it("TC-3.010 Verify that text for radio button he is correct", function () {
      const textHe = $$(sel.genderText)[0].getText();
      expect(textHe).toEqual(exp.textGenderHe);
    });

    it("TC-3.011 Verify that text for radio button she is correct", function () {
      const textShe = $$(sel.genderText)[1].getText();
      expect(textShe).toEqual(exp.textGenderShe);
    });

    it("TC-3.012 Verify that text for radio button it is correct", function () {
      const textIt = $$(sel.genderText)[2].getText();
      expect(textIt).toEqual(exp.textGenderIt);
    });
  });

  xdescribe("Age Section", function () {
    it("TC-4.001 label 1 is present", function () {
      const label = $$(sel.label)[2].isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-4.002 label for age = 3. How old is your Hero?", function () {
      const text = $$(sel.label)[2].getAttribute("title");
      expect(text).toEqual(exp.labelAge);
    });

    it("TC-4.003 Age input field is present", function () {
      const label = $(sel.age).isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-4.004 Age input field placeholder text is Hero's age", function () {
      const placeHolderText = $(sel.age).getAttribute("placeholder");
      expect(placeHolderText).toEqual(exp.agePlaceholder);
    });
  });

  xdescribe("Type of Story Section", () => {
    it("TC-5.001 Label for type of story is present", () => {
      const label = $$(sel.label)[3].isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-5.002 Label for type of story = 4. What type of story would you like to read?", () => {
      const text = $$(sel.label)[3].getAttribute("title");
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
      const text = $$(sel.storyDropdownOption)[6].getAttribute("title");
      expect(text).toEqual("Comedy");
    });
  });

  xdescribe("Image Section", function () {
    it("TC-6.001 Verify that Label 5 is present ", function () {
      const label = $$(sel.imageLabel)[4].isDisplayed();
      expect(label).toEqual(true);
    });

    it("TC-6.002 Label for image = 5. Upload an image (optional).", function () {
      const text = $$(sel.imageLabel)[4].getText();
      expect(text).toEqual(exp.imageLabel);
    });

    it("TC-6.003 Verify that Image input box is present", function () {
      const inputBox = $$(sel.imageInputBox)[1].isDisplayed();
      expect(inputBox).toEqual(true);
    });

    it('TC-6.004 Verify that placeholder text is "drag and drop your image here or browse"', function () {
      const text = $(sel.imageBoxPlaceholder).getText();
      expect(text).toEqual(exp.imagePlaceholder);
    });
  });

  xdescribe("Story Section", function () {
    it("TC-7.007 Verify that User can read the story after submitting with choice type of story Comedy", function () {
      inputValues4andClick(
        val.nameSmoke.LadyBug007,
        val.genderSmoke.he,
        val.ageSmoke["123"],
        val.storyTypeSmoke.Comedy
      );
      const textOfStory = $(sel.textOfStory).isDisplayed();
      expect(textOfStory).toEqual(true);
      const tryAgainButton = $(sel.tryAgainButton).isDisplayed();
      expect(tryAgainButton).toEqual(true);
    });

    it("TC-7.013 Verify that submit button is present", function () {
      inputValues4andClick(
        val.nameSmoke.LADYBUG,
        val.genderSmoke.he,
        val.ageSmoke["1000000"],
        val.storyTypeSmoke.OvercomingTheMonster
      );
      const tryAgainButton = $(sel.tryAgainButton).isDisplayed();
      expect(tryAgainButton).toEqual(true);
    });

    it("TC-7.014 Verify that submit button name is Try again!", function () {
      inputValues4andClick(
        val.nameSmoke.ladybug,
        val.genderSmoke.he,
        val.ageSmoke["1"],
        val.storyTypeSmoke.JourneyAndReturn
      );
      const tryAgainButton = $(sel.tryAgainButton).getText();
      expect(tryAgainButton).toEqual(exp.tryAgain);
    });

    it("TC-7.016 Verify that submit button is active (clickable)", function () {
      inputValues4andClick(
        val.nameSmoke.LadyBug,
        val.genderSmoke.he,
        val.ageSmoke["1000000"],
        val.storyTypeSmoke.Rebirth
      );
      const tryAgainButton = $(sel.tryAgainButton).isClickable();
      expect(tryAgainButton).toEqual(true);
    });

    it("TC-7.017 Verify that submit button refreshes the page", function () {
      inputValues4andClick(
        val.nameSmoke.LadyBug,
        val.genderSmoke.he,
        val.ageSmoke["123"],
        val.storyTypeSmoke.Tragedy
      );
      $(sel.tryAgainButton).click();
      const createButtonOnPage = $(sel.submitButton).isDisplayed();
      expect(createButtonOnPage).toEqual(true);
    });
  });

  describe("Create Button", function () {

      it("TC-8.001 Create button is present", function () {
        const create = $(sel.create).isDisplayed();
        expect(create).toEqual(true);
      });

      it("TC-8.002 Create button = Create!", function () {
        const create = $(sel.create).getText();
        expect(create).toEqual(exp.create);
      });

      it("TC-8.010 Create button is clickable after 1-4 are filled in", function () {
        const inputName = $(sel.nameField).setValue("shrek");
        const inputGender = $$(sel.gender)[0].click();
        const inputAge = $(sel.age).setValue(230);
        const click = $(sel.storyClick).click();
        const inputStory = $$(sel.storyType)[6].click();
        const create = $(sel.create).isEnabled();
        browser.pause(3000);
        expect(create).toEqual(true);
      });
    });
  });

