$(document).ready( function() {
    function createCookie() {

        const xhttp = new XMLHttpRequest()
        const url = "/saveCookie"
        let ssid = 999999999999 + Math.floor(Math.random() * 99999999);
        const hasCookie = $.cookie('SSID');
        const langNavigator = navigator.language

        if(!hasCookie) {
            if (confirm("Posso armazenar seus dados no cookie?")) {
                $.cookie('SSID', `${ssid}`, { expires: 7, path: '/' });
                $.cookie('language', `${langNavigator}`, { expires: 7, path: '/' });
                console.log("ele eceitou", hasCookie)

                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        const response = JSON.parse(this.response)
                        console.log(response)
                    }
                }
                
                xhttp.open("POST", url, true)
                xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
                xhttp.send(`ssis=${ssid}&language=${langNavigator}`)
                      
            }
        }
    }
    
    createCookie();
}) 

    
