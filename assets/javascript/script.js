$(document).ready(function () {

    $("#email").on("click", function (e) {
        $("#emailModal").modal('toggle');
    });

    $("#groupProjectPhoto").on("click", function (e) {
        $("#groupProjectPhotoModal").modal('toggle');
    });

    $("#personalHomeworkPhoto").on("click", function (e) {
        $("#personalHomeworkPhotoModal").modal('toggle');
    });

});