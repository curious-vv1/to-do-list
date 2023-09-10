//jshint esversion:6

exports.getDate=function() {
    const today = new Date();
    // var currentDay = today.getDay();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    };
    return day = today.toLocaleDateString("en-us", options);

}

exports.getDay=function() {
    const today = new Date();
    // var currentDay = today.getDay();

    const options = {
        weekday: "long"

    };
    let day = today.toLocaleDateString("en-us", options);

    return day;
}

// console.log(module.exports);
