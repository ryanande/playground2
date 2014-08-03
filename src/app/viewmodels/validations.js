define(['knockout', '../models/validationModel'], function (ko, validationModel) {

    var title = 'Validations';

    var viewModel = function () {

        this.model = new validationModel({ Title: title });

    };

    return viewModel;

});