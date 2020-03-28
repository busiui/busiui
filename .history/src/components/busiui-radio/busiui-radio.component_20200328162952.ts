
import { BusiUiComponent } from '../busiui-component';
import { VIEW } from './busiui-radio.view';

export class BusiUiRadio extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重载updateStyle
     */
    updateStyle() {

        const shadow = this.shadowRoot;
        const html = this.view(VIEW, this.conf);
        this.$(shadow).find('div').html(html);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-radio', BusiUiRadio);