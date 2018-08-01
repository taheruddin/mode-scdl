"use strict";

var profile = [
    {"MODE":"Comfort","MONDAY":"09:00:00","TUESDAY":"09:00:00","WEDNESDAY":"09:00:00","THURSDAY":"09:00:00","FRIDAY":"09:00:00","SATURDAY":null,"SUNDAY":null},
    {"MODE":"Eco","MONDAY":"22:00:00","TUESDAY":"22:00:00","WEDNESDAY":"22:00:00","THURSDAY":"22:00:00","FRIDAY":"22:00:00","SATURDAY":null,"SUNDAY":null},
    {"MODE":"Standby","MONDAY":"07:30:00","TUESDAY":"07:30:00","WEDNESDAY":"07:30:00","THURSDAY":"07:30:00","FRIDAY":"07:30:00","SATURDAY":null,"SUNDAY":null},
    {"MODE":"Standby","MONDAY":"21:00:00","TUESDAY":"21:00:00","WEDNESDAY":"21:00:00","THURSDAY":"21:00:00","FRIDAY":"21:00:00","SATURDAY":null,"SUNDAY":null}
];


document.addEventListener("DOMContentLoaded", function(event) {
    ModeScdl.render(profile, 'mode-scdl');
});


