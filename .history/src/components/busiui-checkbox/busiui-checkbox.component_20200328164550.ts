
import { BusiUiComponent } from '../busiui-component';
import { VIEW } from './busiui-checkbox.view';
export class BusiUiCheckBox extends BusiUiComponent {

    constructor() {
        super();
    }


    updateStyle() {

        this.render(VIEW, this.conf);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-checkbox', BusiUiCheckBox);