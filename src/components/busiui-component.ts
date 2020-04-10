
import { EventService } from '../services';
import { BusiuiSelectOpConfigModel } from '../models'
import { ToolsUtils } from '../utils';

export class BusiUiComponent extends HTMLElement {
    win: any = window; //公共部分
    $: any = this.win['$']; //jQuery 公共部分
    conf: any; //组件配置 两种不同的结构 公共部分
    public static conf:any = {};

    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({ mode: 'open' }); //公共部分
        const div = document.createElement('div'); //公共部分
        const style = document.createElement('style'); //公共部分
        shadow.appendChild(style); //公共部分
        shadow.appendChild(div); //公共部分
        const stringConf = this.getAttribute('conf'); //接收外部传入的conf //公共部分
        
        if (stringConf) {
            this.conf = JSON.parse(stringConf); //解码 //公共部分
        }else{
            console.log('！error！conf not exsists! class:'+this.constructor.name,);
            console.log(stringConf);
        }
        shadow.querySelector('style').textContent = `
        @import url('./assets/css/bootstrap3.min.css');
        @import url('./assets/css/bootstrap-theme.min.css');
        @import url('./assets/css/bootstrap-table.css');
        `;
        // this.eventService = new EventService();
        // this.conf = objConf;
        // this.appendChild(div);
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
    };

    //事件初始化 公共方法
    Init(input: any) {
        const self = this;
        input.bind('input blur focus click', (event: any) => self.onChange(event));
    }

    /**
     * change事件
     * @param event 
     */
    onChange(event: any) {
        console.log(event);
        EventService.setNextParams(event, this.conf.ng_model)
    }

    /**
     * 
     * @param html 模板
     * @param params 
     */
    render(html: string, params: any) {
        const shadow = this.shadowRoot;
        const view = ToolsUtils.stringReplace(html, params);
        shadow.querySelector('div').innerHTML =  view;
        console.log(this.$(shadow).parent());
        return view;
    }
}
