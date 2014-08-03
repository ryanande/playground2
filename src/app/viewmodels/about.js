define(['knockout', '../models/aboutModel'], function (ko, aboutModel) {

    var title = 'About';

    var viewModel = function () {

        this.model = new aboutModel({ Title: title });

    };

    return viewModel;

});