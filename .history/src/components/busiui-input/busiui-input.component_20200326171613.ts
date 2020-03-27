
import { EventService } from '../../services';
import { BusiuiSelectOpConfigModel} from '../../models'
import { BusiUiComponent } from '../busiui-component';
export class BusiUiInput extends BusiUiComponent {
    constructor() {
        super();
    }

    //公共部分
    connectedCallback() {
        console.log('Custom square element added to page.');
        this.updateStyle();
    }

    //公共部分
    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    //公共部分
    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    //公共部分
    attributeChangedCallback(name: string, oldValue: String, newValue: String) {
        console.log('Custom square element attributes changed.');
        // updateStyle(this);
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
            '<input type="text" class="form-control " placeholder="Username" aria-describedby="basic-addon1">',
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
            this.Init();
        }, 10)

    };

    //事件初始化 公共方法
    Init() {
        const $ = this.$;
        const self = this;
        const input = $(this.shadowRoot).find('input');
        console.log(input);
        input.bind('input blur focus', (event: any) => self.onChange(event));
    }

    /**
     * change事件
     * @param event 
     */
    onChange(event: any) {
        console.log(event);
        EventService.setNextParams(event, this.conf.ng_model)
    }
}

customElements.define('busiui-input', BusiUiInput);