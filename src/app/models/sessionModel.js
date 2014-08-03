define(['knockout'], function (ko) {

    return function (raw) {

        var self = this;

        this.Title = ko.observable("");

        this.update = function (data) {
            self.Title(data.Title);
        };

        self.update(raw);
    };
});