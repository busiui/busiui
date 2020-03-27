
import { BusiUiComponent } from '../busiui-component';
export class BusiUiTextarea extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 更新样式
     */
    updateStyle() {
        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group row">',
            this.conf['lable'] ? `<label for="exampleInputEmail1" class="col-sm-4">${this.conf['lable']}</label>` : '',
            '<div class="' + (this.conf['lable'] ? 'col-sm-8' : 'col-sm-12') + '">',
            '<textarea   class="form-control " placeholder="Username" aria-describedby="basic-addon1" />',
            '</div>',
            '</div>'
        ];
        this.$(shadow).find('div').html(html.join(''));

        console.info(this.$(shadow).find('div'));
       
        //1.初始化Table
        let st = setTimeout(() => {
            const textarea = this.$(this.shadowRoot).find('textarea');
            this.Init(textarea);
        }, 10)

    };
}

customElements.define('busiui-textarea', BusiUiTextarea);