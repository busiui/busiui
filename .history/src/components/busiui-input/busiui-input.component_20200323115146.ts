
import { EventService } from '../../services';
export class BusiUiInput extends HTMLElement {

    win: any = window;
    $: any = this.win['$'];
    table: any;
    
    conf:any = {}
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
        const stringConf = this.getAttribute('conf');
        console.log(stringConf);
        const objConf = JSON.parse(stringConf);
        // this.eventService = new EventService();
        this.conf = objConf;
        // this.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        this.updateStyle();
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name: string, oldValue: String, newValue: String) {
        console.log('Custom square element attributes changed.');
        // updateStyle(this);
    }

    updateStyle() {
       
        const shadow = this.shadowRoot;
        const html = [
            '<div class="form-group">',
            `<label for="exampleInputEmail1">${this.conf['lable']}</label>`,
            '<input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">',
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
        input.change((event: any) => self.onChange(event));
    }

    /**
     * change事件
     * @param event 
     */
    onChange(event: any) {
        console.log(event);
        EventService.setNextParams(event,this.conf['ngModel'])
    }
}

customElements.define('busiui-input', BusiUiInput);