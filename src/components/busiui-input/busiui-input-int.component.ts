import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-input-int.view.html');
export class BusiUiInputInt extends BusiUiComponent {
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
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-input-int', BusiUiInputInt);