
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-radio.view.html');

export class BusiUiRadio extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重载updateStyle
     */
    updateStyle() {
        this.render(VIEW.default, this.conf);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-radio', BusiUiRadio);