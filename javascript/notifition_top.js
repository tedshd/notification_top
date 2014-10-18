/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-10-18 13:59:58
 * @version $Id$
 */

(function () {
    function notifitionTop(option) {
        var d4 = {
            t: 3000,
            msg: 'd4 msg'
        };
        option = option || d4;
        var d = new Date().getTime();
        var div = document.createElement('div');
        div.setAttribute('class', 'notifition-top vertical-centering');
        div.setAttribute('id', 'n-' + d);
        div.innerHTML = '<span class="notifition-top-ico"></span>' +
            '<span class="notifition-top-msg">' + option.msg + '</span>' +
            '<span class="notifition-top-close">' +
                '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">' +
                '<g>' +
                '<line id="svg_1" y2="18.5" x2="18.5" y1="1.5" x1="1.5" stroke-width="5" stroke="#444" fill="none"/>' +
                '<line id="svg_2" y2="1.5" x2="18.5" y1="18.5" x1="1.5" stroke-width="5" stroke="#444" fill="none"/>' +
                '</g>' +
                '</svg>' +
            '</span>';
        document.body.appendChild(div);
        setTimeout(function () {
            document.querySelector('#n-' + d).classList.add('notifition-top-show');
        }, 0);
        var notifitonHideTimeout;
        notifitonHideTimeout = setTimeout(function () {
            var dom = document.querySelector('#n-' + d);
            if (dom) {
                dom.classList.remove('notifition-top-show');
                dom.addEventListener('transitionend', function () {
                    dom.outerHTML = '';
                    delete dom;
                });
            }
        }, option.t);

        var closeList = document.querySelectorAll('.notifition-top-close'),
            close = closeList[closeList.length - 1];
        var domList = document.querySelectorAll('.notifition-top');
        close.addEventListener('click', function () {
            clearTimeout(notifitonHideTimeout);
            for (var i = domList.length - 1; i >= 0; i--) {
                domList[i].classList.remove('notifition-top-show');
                domList[i].addEventListener('transitionend', function (e) {
                    e.target.outerHTML = '';
                    delete e.target;
                });
            }
        });
    }
    window.notifitionTop = notifitionTop;
})();