# Thoughts, Questions, & Ideas

## General QA Questions

* As I am onboarding/new, is there a live version of the tool I can take a look at for comparison's sake?
* What are your biggest priorities and concerns, Product Owner?
* Who is our target end user/target audience? Who is this being built for?
* Are there any design docs, stories, or comps available for comparison?
* What browsers are supported? What browsers do our end users typically use (analytics/mks)? What about OS versions, mobile devices (and viewports)?

## Requirements Questions

* Should the tool ignore case, numbers, spaces, special characters, etc?
* Are we required to reach a certain level of Accessibility? (Screen readers, tabbing, contrast, etc.)
* Are there any specific requirements around the performance/response time of the tool?
* What should happen when the user enters nothing/only ignored characters?
* What languages/character sets are supported? 

## Live Issues
* The tool currently considers case in its comparison, so "Bob" is not considered a palindrome
* The Submit button is clickable when the input field is empty or just white-space, and the tool reports these as valid palindromes
* Pressing enter does not press the Submit button (Accessibility)
* The tool will consider special characters and spaces during its comparison currently. This means "bob." and "bob " are not considered palindromes to the tool
* The tool currently does not html-encode before displaying input on the screen, allowing users to execute code on the page
* "This" should not be capitalized in the title lines
* There is a typo in the negative-case message. "reserved" should be "reversed"
* The output message is poorly contructed/formatted. Consider something along the lines of "Yes, 'bob' is a palindrome." or "No, 'cats' reversed is 'stac'."

## Automation Leading Questions
* What are some problems we have seen in the past?
* How often do we release new versions, patches, etc.?
* How long do we typically get to test each release?
