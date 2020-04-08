import { EventService } from '../../../services';
import { BusiuiSelectOpConfigModel, BusiuiGridConfigModel, BusiuiGridBtnConfigModel, BusiuiiGridColConfig } from '../../../models'
import { BusiUiComponent } from '../../busiui-component';
import { VIEW } from './busiui-grid.view';
/**
 * 动态Grid
 */
export class BusiUiGrid extends BusiUiComponent {
    gridBtnConfig: Array<BusiuiGridBtnConfigModel> = []; //按钮设置表

    constructor() {
        // Always call super first in constructor
        super();
        this.gridBtnConfig = [
        ]
    }


    updateStyle() {
        const shadow = this.shadowRoot;
        const selesctOp = [];
      
        const html = this.render(VIEW, { select: selesctOp.join('') });
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

    query(conf: any) {
        console.log(this.table);
        this.table = this.$(this.shadowRoot).find('#tb_departments').bootstrapTable(conf);
        console.log(this.table);
    }

    queryParams = (params: any) => {

        const $ = this.$;
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            // departmentname: $(this.shadowRoot).find("#txt_search_departmentname").val(),
            // statu: $(this.shadowRoot).find("#txt_search_statu").val()
            ...this.queryDTO
        };
        console.log(temp);
        return temp;
    }

    /**
     * 生成组件
     * @param opConfig 
     */
    genComponent(opConfig: BusiuiSelectOpConfigModel) {
        let ret;
        const conf = JSON.stringify(opConfig);//{\"lable\":\"部门\",\"ngModel\":\"Name\"}
        switch (opConfig.input_type) {
            case '1':
            case '2':
            case '3':
            case '4':
                ret = `<div class="col-md-4"><busiui-input class="form-group" conf=\'${conf}\'></busiui-input></div>`;
                break;
            case '5':
            case '6':
                ret = `<div class="col-md-4"><busiui-checkbox class="form-group" conf=\'${conf}\'></busiui-checkbox></div>`;
                break;
            case '7':
            case '8':
            case '9':
            case '10':
                ret = `<div class="col-md-4"><busiui-checkbox class="form-group" conf=\'${conf}\'></busiui-checkbox></div>`;
                break;
            case '11':
                ret = `<div class="col-md-4"><busiui-checkbox class="form-group" conf=\'${conf}\'></busiui-checkbox></div>`;
                break;
            case '12':
                ret = `<div class="col-md-4"><busiui-radio class="form-group" conf=\'${conf}\'></busiui-radio></div>`;
                break;
            case '13':
                ret = `<div class="col-md-4"><busiui-select class="form-group" conf=\'${conf}\'></busiui-select></div>`;
                break;
        }
        return ret;
    }


}

customElements.define('busiui-grid', BusiUiGrid);