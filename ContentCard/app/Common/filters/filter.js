angular
    .module('InfobipContentCard')
    .filter("asDate", function() {
        return function(input) {
            return new Date(input);
        }
    })

.filter('inArray', function() {
    return function(array, value) {
        return array.indexOf(value) !== -1;
    };
})

.filter('textwrap', function() {
    return function(txt) {
        console.log(txt.split(";").join(" "))
        return txt.split(";").join(" ");
    }
})