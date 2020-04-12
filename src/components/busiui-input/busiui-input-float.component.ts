
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-input-float.view.html');
export class BusiUiInputFloat extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 更新样式
     */
    updateStyle() {
        const params = {
            ...this.conf,
            cssClass: this.conf['lable'] ? 'col-sm-8' : 'col-sm-12',
            isLableHide: this.conf['lable'] ? '' : 'hidden',
        }
        this.render(VIEW.default, params);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            if(this.conf.have_display=='0'){
                this.$(this.shadowRoot).find("div").hide();
            }
            this.Init(input);
        }, 10)

    };

    /**
     * change事件
     * @param event 
     */
    onChange(event: any) {
        console.log(event);
        let inputCompValue = this.$(this.shadowRoot).find('input').val();
        console.log(inputCompValue);
        //得到第一个字符是否为负号
        let t = inputCompValue.charAt(0);
        //先把非数字的都替换掉，除了数字和.
        inputCompValue = inputCompValue.replace(/[^\d\.]/g,'');
        //必须保证第一个为数字而不是.
        inputCompValue = inputCompValue.replace(/^\./g,'');
        //保证只有出现一个.而没有多个.
        inputCompValue = inputCompValue.replace(/\.{2,}/g,'.');
        //保证.只出现一次，而不能出现两次以上
        inputCompValue = inputCompValue.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
        //如果第一位是负号，则允许添加
        if(t == '-'){
            inputCompValue = '-'+inputCompValue;
        }
        this.$(this.shadowRoot).find('input').val(inputCompValue);
        this.conf.ng_model = inputCompValue;
    }

}

customElements.define('busiui-input-float', BusiUiInputFloat);