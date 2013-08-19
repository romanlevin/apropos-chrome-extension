/*jshint indent:4 */
/*globals HTML */
(function() {
    'use strict';
    var inputNodeDesc = 'input#apropos-hours';
    var form = HTML.find('div.write-content');
    form.add(inputNodeDesc);

    var textarea = HTML.find('textarea[name="comment[body]"]');

    function addAproposListener(el) {
        el.addEventListener('click', function() {
            var hours = HTML.find(inputNodeDesc).value;
            textarea.each(function(el) {
                if (hours) {
                    var addition = '\nSpent ' + hours + ' hours on this.';
                    el.value += addition;
                }
            });
        });
    }

    var submit = HTML.find('div.form-actions button[type="submit"]');
    submit.each(addAproposListener);
})();
