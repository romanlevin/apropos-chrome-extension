/*jshint indent:4 */
/*globals HTML */
(function() {
    'use strict';

    // The div that holds the current input form.
    var formDiv = HTML.find('div.write-content');
    
    // The new comment textarea.
    var textarea = HTML.find('textarea[name="comment[body]"]');

    // The new comment form.
    var form = HTML.find('form').only(-2);

    // Adding our input field 
    var aproposHoursField = formDiv.add('input#apropos-hours');

    // This function manipulates the textarea.
    function addHours() {
        var hours = aproposHoursField.value;
        textarea.each(function(el) {
            if (hours) {
                var addition = '\nSpent ' + hours + ' hours on this.';
                el.value += addition;
            }
        });
    }

    // Binding the submit listener to the form.
    form.each(function (el) {
        el.addEventListener('submit', addHours);
    });
})();
