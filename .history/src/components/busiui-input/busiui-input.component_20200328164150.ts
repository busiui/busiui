
import { BusiUiComponent } from '../busiui-component';
import { VIEW } from '../busiui-radio/busiui-radio.view';
export class BusiUiInput extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 更新样式
     */
    updateStyle() {
        
        // const html = [
        //     '<div class="form-group row">',
        //     this.conf['lable'] ? `<label for="exampleInputEmail1" class="col-sm-4">${this.conf['lable']}</label>` : '',
        //     '<div class="' + () + '">',
        //     '<input type="text" class="form-control " placeholder="Username" aria-describedby="basic-addon1">',
        //     '</div>',
        //     '</div>'
        // ];

        const params = {
            ...this.conf,
            cssClass: this.conf['lable'] ? 'col-sm-8' : 'col-sm-12',
            isLableHide: this.conf['lable'] ? '' : 'hidden',
        }
        this.view(VIEW, params);

        //1.初始化Table
        let st = setTimeout(() => {
            const input = this.$(this.shadowRoot).find('input');
            this.Init(input);
        }, 10)

    };
}

customElements.define('busiui-input', BusiUiInput);