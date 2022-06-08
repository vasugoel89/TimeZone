let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString(undefined,options);
        time = a.getHours() + ':' +a.getMinutes() +':' +a.getSeconds();
        document.getElementById('time').innerHTML = time + "<br>on " + date;
    }, 1000);

    //United States
    // var getUSTime = function(){
    //   document.getElementById("londonTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/London'});

    // }
    // getUSTime();
    // setInterval(getUSTime,1000);