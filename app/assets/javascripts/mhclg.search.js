var MHCLG = window.MHCLG || {};

MHCLG.searchStakeholder = function () {
    accessibleAutocomplete.enhanceSelectElement({
        defaultValue: '',
        displayMenu: 'overlay',
        confirmOnBlur: false,
        onConfirm: (function (text) {
            $('button[type="submit"]')
                .removeClass('govuk-button--disabled')
                .attr('aria-disabled', 'false')
                .removeProp('disabled');
        })
    })
};

MHCLG.searchOrganisation = function () {
    // we need to send the text because the select isnt giving back the required result
    var params = MHCLG.pageParams;
    $('form').on('submit', function (ev) {
        this.action = encodeURI('/search-results/' + $('#MHCLG--organisation__chosen').text());
    });
};

$(function () {
    MHCLG.searchStakeholder();
    MHCLG.searchOrganisation();
});