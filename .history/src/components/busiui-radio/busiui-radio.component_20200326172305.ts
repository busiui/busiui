
import { BusiUiComponent } from '../busiui-component';
export class BusiUiRadio extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重载updateStyle
     */
    updateStyle() {

        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group radio-inline">',
            '<div class="col-md-4">',
            `<input type="radio" name="${this.conf['ng_model']}" value="option1">`,
            `${this.conf['lable']}1`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="radio" name="${this.conf['ng_model']}" value="option2">`,
            `${this.conf['lable']}2`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="radio" name="${this.conf['ng_model']}" value="option3">`,
            `${this.conf['lable']}3`,
            '</div>',
            '</div>'
        ];
        this.$(shadow).find('div').html(html.join(''));
        
        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-radio', BusiUiRadio);