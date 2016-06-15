var DemoApp = {

    changeTheme: function(event, element) {
        var theme = $(element).data("theme"),
        themeLink = $('link[href$="theme.css"]'),
        newThemeURL =  'node_modules1/primeui/themes/' + theme + '/theme.css';

        themeLink.attr('href', newThemeURL);
        event.preventDefault();
    }
    
};