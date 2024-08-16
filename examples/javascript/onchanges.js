//onchanges.js

function convertImperialValue(val) 
{
    var result = val * 12 * 2.54;
    // either way below works
    // document.getElementById("metric").value = result.toFixed(2);
    metric.value = result.toFixed(2);
    // .toFixed(2) -> 2 decimal places
}

function convertMetricValue(val)
{
    var result = val *0.032;
    imperial.value = result.toFixed(2);
}
