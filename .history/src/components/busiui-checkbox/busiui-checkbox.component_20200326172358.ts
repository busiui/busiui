
import { BusiUiComponent } from '../busiui-component';
export class BusiUiCheckBox extends BusiUiComponent {

    constructor() {
        super();
    }

   
    updateStyle() {
       
        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group checkbox-inline">',
            '<div class="col-md-4">',
            `<input type="checkbox" name="${this.conf['ngModel']}" value="option1">`,
            `${this.conf['lable']}1`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="checkbox" name="${this.conf['ngModel']}" value="option2">`,
            `${this.conf['lable']}2`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="checkbox" name="${this.conf['ngModel']}" value="option3">`,
            `${this.conf['lable']}3`,
            '</div>',
            '</div>'
        ];
        this.$(shadow).find('div').html(html.join(''));
        shadow.querySelector('style').textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css');
        @import url('./bootstrap-table.css');
        `;
        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-checkbox', BusiUiCheckBox);