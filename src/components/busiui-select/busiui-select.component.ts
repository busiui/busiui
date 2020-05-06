
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-select.view.html');

/**
 * 控件-下拉列表
 */
export class BusiUiSelect extends BusiUiComponent {
    constructor() {
        super();
    }

    /**
     * 重新updateStyle
     */
    updateStyle() {
        const _this = this;
        const $shadowRoot = this.$(this.shadowRoot);
        this.render(VIEW.default, this.conf);
        let clickNum = 0;
        
        //1.初始化Table
        let st = setTimeout(() => {
            // const input = $shadowRoot.find('select');
            // this.Init(input);
            // this.$(this.shadowRoot).find('.dropdown-toggle').dropdown('toggle');
            $shadowRoot.find('.selectpicker').selectpicker('show');
            const main = $shadowRoot.find('.bootstrap-select');
            $shadowRoot.find('.btn').bind('click',function(){
                main.toggleClass('open');
                if( clickNum===0){
                    $shadowRoot.find('ul.dropdown-menu li').bind('click',function(event:any){
                        _this.onChange(event);
                        main.removeClass('open');
                    });
                }
                clickNum++;
            });
            
        }, 10)

    };
}

customElements.define('busiui-select', BusiUiSelect);