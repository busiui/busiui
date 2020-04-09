
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-checkbox.view');

export class BusiUiCheckBox extends BusiUiComponent {

    constructor() {
        super();
    }


    updateStyle() {
        //渲染
        this.render(VIEW.default, this.conf);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    }
}

customElements.define('busiui-checkbox', BusiUiCheckBox);