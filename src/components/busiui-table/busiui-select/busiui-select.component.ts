import { EventService } from '../../../services';
import { BusiuiSelectOpConfigModel, BusiuiGridConfigModel, BusiuiGridBtnConfigModel, BusiuiiGridColConfig } from '../../../models'
import { BusiUiComponent } from '../../busiui-component';
const VIEW = require( './busiui-select.view.html');
// import { BusiUiComponent } from './busiui-select.view.html';
/**
 * 动态Grid-查询区域，查询条件输入框组
 */
export class BusiUiTableSelect extends BusiUiComponent {

    table: any; //表格jquery对象
    tabCode:any;
    rowColMap:any = {};//行列控件位置map，用于判断控件div的宽度
    selectOpConfig: Array<BusiuiSelectOpConfigModel> = []; //查询区域配置
    eventService: EventService; //通知事件
    queryDTO: any = {}; //查询区域DTO
    gridBtnConfig: Array<BusiuiGridBtnConfigModel> = []; //按钮设置表
    gridConfig: Array<BusiuiGridConfigModel> = []; //整体设置表
    gridColConfig: Array<BusiuiiGridColConfig> = []; //列设置表
    // Specify observed attributes so that
    // attributeChangedCallback will work
    constructor() {
        // Always call super first in constructor
        super();
        // 获取不到值，先写死
        this.tabCode = '[TAB][14001]-1';
        let bizConf = BusiUiComponent.conf[this.busiuiID];
        // console.log("===================================");
        // console.log(JSON.stringify(bizConf));
        // console.log("===================================");
        //获取tab和select的关系
        let tabSelRels = bizConf.BusiuiTabSelRelModel;
        let currentSelCode = "";
        for (let index in tabSelRels) {
            //找到当前tabcode，查询对应的selectcode
            if(tabSelRels[index].tab_code == this.tabCode){
                currentSelCode = tabSelRels[index].select_code;
            }
        }
        //加载对应tab的select
        let selectOpConfigs = bizConf.BusiuiSelectOpConfigModel;
        let rowColMap:any={};
        //寻找当前tab所需要渲染的select组件，并准备所有组件所在位置的map
        for(let index in selectOpConfigs){
            if(selectOpConfigs[index].select_code == currentSelCode){
                let inputRow = selectOpConfigs[index].input_row;
                let inputCol = selectOpConfigs[index].input_column;
                let cellIndex = inputRow+'-'+inputCol;
                console.log(this.rowColMap.hasOwnProperty(cellIndex));
                //是否显示为0时，不算该组件所占位置
                if(selectOpConfigs[index].have_display != '0'){
                    if(this.rowColMap.hasOwnProperty(cellIndex)){
                        let cellNumber = this.rowColMap[cellIndex];
                        if(cellNumber == undefined || cellNumber == null){
                            cellNumber = 0;
                        }
                        cellNumber +=1;
                        this.rowColMap[cellIndex] = cellNumber;
                    }else{
                        this.rowColMap[cellIndex] = 1;
                    }
                }

                this.selectOpConfig.push(selectOpConfigs[index]);
            }
        }
    }


    updateStyle() {
        const shadow = this.shadowRoot;
        const selesctOp = [];
        debugger;
        for (const key in this.selectOpConfig) {
            
            let inputRow = this.selectOpConfig[key].input_row;
            let inputCol = this.selectOpConfig[key].input_column;
            let cellIndex = inputRow+'-'+inputCol;
            let cellNumber = this.rowColMap[cellIndex];
            if(cellNumber == 1){
                selesctOp.push(this.genComponent(4,this.selectOpConfig[key]));
            }else if(cellNumber == 2){
                selesctOp.push(this.genComponent(2,this.selectOpConfig[key]));
            }else if(cellNumber == 1){
                selesctOp.push(this.genComponent(1,this.selectOpConfig[key]));
            }else{
                selesctOp.push(this.genComponent(4,this.selectOpConfig[key]));
            }
            
        }
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
        
    }

    query(conf: any) {
        console.log(this.table);
        this.table = this.$(this.shadowRoot).find('#tb_departments').bootstrapTable(conf);
        console.log(this.table);
    }
    reset(conf: any) {
        
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
    genComponent(width:number,opConfig: BusiuiSelectOpConfigModel) {
        let ret;
        const conf = JSON.stringify(opConfig);
        switch (opConfig.input_type) {
            case '1':
                ret = `<div class="col-md-`+width+`"><busiui-input-pwd class="form-group" conf=\'${conf}\'></busiui-input-pwd></div>`;
                break;
            case '2':
                ret = `<div class="col-md-`+width+`"><busiui-input class="form-group" conf=\'${conf}\'></busiui-input></div>`;
                break;
            case '3':
                ret = `<div class="col-md-`+width+`"><busiui-input-float class="form-group" conf=\'${conf}\'></busiui-input-float></div>`;
                break;
            case '4':
                ret = `<div class="col-md-`+width+`"><busiui-input-int class="form-group" conf=\'${conf}\'></busiui-input-int></div>`;
                break;
            case '5':
                ret = `<div class="col-md-`+width+`"><busiui-select class="form-group" conf=\'${conf}\'></busiui-select></div>`;
                break;
            case '6':
                ret = `<div class="col-md-`+width+`"><busiui-select class="form-group" conf=\'${conf}\'></busiui-select></div>`;
                break;
            case '7':
                debugger
                ret =`<div class="col-md-`+width+`"><busiui-datetimepicker class="form-group" conf=\'${conf}\'></busiui-datetimepicker></div>`;
                break;
            case '8':
                ret =`<div class="col-md-`+width+`"><busiui-datetimepicker class="form-group" conf=\'${conf}\'></busiui-datetimepicker></div>`;
                break;
            case '9':
                ret =`<div class="col-md-`+width+`"><busiui-datetimepicker class="form-group" conf=\'${conf}\'></busiui-datetimepicker></div>`;
                break;
            case '10':
                ret = `<div class="col-md-`+width+`"><busiui-datetimepicker class="form-group" conf=\'${conf}\'></busiui-datetimepicker></div>`;
                break;
            case '11':
                ret = `<div class="col-md-`+width+`"><busiui-checkbox class="form-group" conf=\'${conf}\'></busiui-checkbox></div>`;
                break;
            case '12':
                ret = `<div class="col-md-`+width+`"><busiui-radio class="form-group" conf=\'${conf}\'></busiui-radio></div>`;
                break;
            case '13':
                ret = `<div class="col-md-`+width+`"><busiui-select class="form-group" conf=\'${conf}\'></busiui-select></div>`;
                break;
            case '18':
                ret = `<div class="col-md-`+width+`"><busiui-datetimepicker class="form-group" conf=\'${conf}\'></busiui-datetimepicker></div>`;
                break;
        }
        return ret;
    }

}

customElements.define('busiui-table-select', BusiUiTableSelect);