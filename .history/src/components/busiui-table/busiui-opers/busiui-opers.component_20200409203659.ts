import { EventService } from '../../../services';
import { BusiuiGridBtnConfigModel } from '../../../models'
import { BusiUiComponent } from '../../busiui-component';
const VIEW = require( './busiui-opers.view.html');
/**
 * 动态Table按钮组
 */
export class BusiUiTableOpers extends BusiUiComponent {
    gridBtnConfig: Array<BusiuiGridBtnConfigModel> = []; //按钮设置表

    constructor() {
        // Always call super first in constructor
        super();
        this.gridBtnConfig = [
        ]
    }


    updateStyle() {
        const shadow = this.shadowRoot;
        const selesctOp:any = [];
      
        const html = this.render(VIEW.default, { select: selesctOp.join('') });
        this.$(shadow).find('div').html(html);

        //1.初始化Table
        let st = setTimeout(() => {
            this.Init();
        }, 10)

    };

    //初始化Table
    Init() {
        const $ = this.$;
        const obser = EventService.getEvent();
        //统一事件接受器
        obser.subscribe((event: any) => {
            console.log(event);
        })
    }
}

customElements.define('busiui-table-opers', BusiUiTableOpers);