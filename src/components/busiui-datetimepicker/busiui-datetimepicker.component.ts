
import { BusiUiComponent } from '../busiui-component';
export class BusiUiDatetimepicker extends BusiUiComponent {


    dateformat: string;// 日期格式

    constructor() {
        super();
    }

    /**
     * 更新样式
     */
    updateStyle() {
        debugger
        this.dateformat = this.getAttribute('dateformat'); 
        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group row">',
            this.conf['lable'] ? `<label for="exampleInputEmail1" class="col-sm-4">${this.conf['lable']}</label>` : '',
            '<div class="' + (this.conf['lable'] ? 'col-sm-8' : 'col-sm-12') + '">',
            '<input  type="text"  class="form-control "  aria-describedby="basic-addon1" />',
            '</div>',
            '</div>'
        ];
        this.$(shadow).find('div').html(html.join(''));

        console.info(this.$(shadow).find('div'));
       
        //1.初始化Table
        let st = setTimeout(() => {
            const textarea = this.$(this.shadowRoot).find('input');
            textarea.datetimepicker({
                format: this.dateformat,  
                locale:'zh-CN'
            });
            this.Init(textarea);
        }, 10)

    };
}

customElements.define('busiui-datetimepicker', BusiUiDatetimepicker);