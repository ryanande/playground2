define(['knockout', '../models/sessionModel'], function (ko, sessionModel) {

    var title = 'Sessions';

    var viewModel = function () {


        this.model = new sessionModel({ Title: title });

    };

    return viewModel;

});