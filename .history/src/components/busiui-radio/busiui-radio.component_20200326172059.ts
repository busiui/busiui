
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
            `<input type="radio" name="${this.conf['ngModel']}" value="option1">`,
            `${this.conf['lable']}1`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="radio" name="${this.conf['ngModel']}" value="option2">`,
            `${this.conf['lable']}2`,
            '</div>',
            '<div class="col-md-4">',
            `<input type="radio" name="${this.conf['ngModel']}" value="option3">`,
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
            this.Init();
        }, 10)

    };

    //初始化Table
    Init() {
        const $ = this.$;
        const self = this;
        const input = $(this.shadowRoot).find('input');
        console.log(input);
        input.bind('input blur focus', (event: any) => self.onChange(event))
        // input.change((event: any) => self.onChange(event));
        // input.on('input', (event: any) => self.onInput(event));
        // input.focus((event: any) => self.onFocus(event));
        // input.blur((event: any) => self.onBlur(event));
    }

    /**
     * change事件
     * @param event 
     */
    onChange(event: any) {
        console.log(event);
        EventService.setNextParams(event, this.conf['ngModel'])
    }

    // /**
    //  * change事件
    //  * @param event 
    //  */
    // onInput(event: any) {
    //     console.log(event);
    //     EventService.setNextParams(event,this.conf['ngModel'])
    // }

    // /**
    //  * change事件
    //  * @param event 
    //  */
    // onFocus(event: any) {
    //     console.log(event);
    //     EventService.setNextParams(event,this.conf['ngModel'])
    // }

    // /**
    //  * change事件
    //  * @param event 
    //  */
    // onBlur(event: any) {
    //     console.log(event);
    //     EventService.setNextParams(event,this.conf['ngModel'])
    // }
}

customElements.define('busiui-radio', BusiUiRadio);