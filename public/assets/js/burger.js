$(document).ready(function () {

    var boolean = function () {
        if (this.devoured) {
            var str = this.devoured;
            var english = str.replace(1, "True");
            
        } else {
            var falseEnglish = this.devoured.raplace(0, "False");
            return falseEnglish;
        }
    };

    boolean();

    $("#brgrSbmt").on("click", function (e) {
        e.preventDefault();

        var newBrgr = {
            burger_name: $("#brgr").val().trim(),
            devoured: false
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBrgr
        }).then(function () {
            console.log("new burger created", newBrgr);
            location.reload();
        });
    });

    console.log("document ready!!!");
});

