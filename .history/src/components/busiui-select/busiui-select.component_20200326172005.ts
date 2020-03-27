
import { BusiUiComponent } from '../busiui-component';
export class BusiUiSelect extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重新updateStyle
     */
    updateStyle() {
        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group">',
            // `<label for="exampleInputEmail1">${this.conf['lable']}</label>`,
            '<select class="form-control">',
            '<option>1</option>',
            '<option>2</option>',
            '<option>3</option>',
            '<option>4</option>',
            '<option>5</option>',
            '</select>',
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
            const input = this.$(this.shadowRoot).find('select');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-select', BusiUiSelect);