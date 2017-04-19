window.onload = function() {

    var hoursHand = document.querySelector('.hours-hand');
    var minsHand = document.querySelector('.mins-hand');
    var secHand = document.querySelector('.sec-hand');
    
    setInterval(function() {
        function count(amount, number, circle, degree) {
            return ((amount / number) * circle) + degree;
        }
        var time = new Date();
        var hours = time.getHours(),
            mins = time.getMinutes();
            secs = time.getSeconds();

        console.log(secs);
        var secDeg = count(secs, 60, 360, 90);
        var minsDeg = count(mins, 60, 360, 90);
        var hourDeg = count(hours, 12, 360, 90);
        console.log(secDeg);
        hoursHand.style.transform = 'rotate('+hourDeg+'deg)';
        minsHand.style.transform = 'rotate('+minsDeg+'deg)';
        secHand.style.transform = 'rotate('+secDeg+'deg)';
    }, 1000);
        

}
