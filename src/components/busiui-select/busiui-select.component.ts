
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-select.view.html');

/**
 * 控件-下拉列表
 */
export class BusiUiSelect extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重新updateStyle
     */
    updateStyle() {
        this.render(VIEW.default, this.conf);
        
        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('select');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-select', BusiUiSelect);