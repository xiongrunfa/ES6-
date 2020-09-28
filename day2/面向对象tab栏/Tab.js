// var that;
class Tab {
    constructor(id) {
        // that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        // init 初始化操作让相关的元素绑定事件
        this.updateNode();
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.ediTab;
            this.sections[i].ondblclick = this.ediTab;
        }
    }
    // 当元素发生变化时 重新获取这些元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 1.切换功能
    toggleTab(that) {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    // 清除li和section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.增加功能
    addTab(that) {
        // (1)先创建li和section
        that.clearClass();
        var random = Math.random();
        var li = '  <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi">×</span></li>';
        var section = ' <section class="conactive">测试' + random + '</section>'
        // (2)再插入到父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3.删除功能
    removeTab(that, e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        var index = this.parentNode.index;
        // 根据索引号删除对应的li和section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--; // 当我们删除了选中状态的这个li的时候， 让它的前一个li 处于选定状态
        that.lis[index] && that.lis[index].click(); // 手动调用我们的点击事件 不需要鼠标触发
    }
    // 4.编辑功能
    ediTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();   // 禁止双击选中文字
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 让文本框里面的文字处于选中状态
        // 当我们离开文本框就把文本框中的文字给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}
new Tab('#tab');