define(['knockout', '../models/homeModel'], function (ko, homeModel) {

    var title = 'API Proxy Validator.';

    var viewModel = function () {

        this.model = new homeModel({
            Title: title,
            Details: "ASP.NET Web API Proxy for validating REST APIs."
        });

    };

    return viewModel;

});