/**
*   Cookies
*/
app.cookies = {
    setCookie: function(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
        document.cookie = name + "=" + value + ";path=/;expires=" + date.toGMTString();    
    },
    getCookie: function(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },
    deleteCookie: function(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};