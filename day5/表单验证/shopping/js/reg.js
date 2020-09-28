window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regqq = /^[1-9][0-9]{4,}$/;    // qq的正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/  // 昵称的正则表达式
    var regmsg = /^\d{6}$/  // 验证码的正则表达式
    var regpwd = /^[a-zA-Z0-9_-]{6,16}/  //密码框
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');

    regExp(tel, regtel);
    regExp(qq, regqq);
    regExp(nc, regnc);
    regExp(msg, regmsg);
    regExp(pwd, regpwd);
    function regExp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
            } else {
                // console.log('错误的');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确';
            }
        }
    };
    surepwd.onblur = function () {
        if (this.value === pwd.value) {
            // console.log('正确的');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            // console.log('错误的');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一致';
        }
    }
}