import { EventService } from '../../services';
import { BusiuiSelectOpConfigModel, BusiuiGridConfigModel, BusiuiGridBtnConfigModel, BusiuiiGridColConfig } from '../../models'
import { BusiUiComponent } from '../busiui-component';
const VIEW = require('./busiui-table.view.html');
/**
 * 动态Grid
 */
export class BusiUiTable extends BusiUiComponent {

    busiuiID: string = '14001';
    table: any; //表格jquery对象
    selesctOpConfig: Array<BusiuiSelectOpConfigModel> = []; //查询区域配置
    eventService: EventService; //通知事件
    queryDTO: any = {}; //查询区域DTO
    gridBtnConfig: Array<BusiuiGridBtnConfigModel> = []; //按钮设置表
    gridConfig: Array<BusiuiGridConfigModel> = []; //整体设置表
    gridColConfig: Array<BusiuiiGridColConfig> = []; //列设置表
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        this.selesctOpConfig = [
            {
                id: 1,
                func_id: 1,//              number(19)                     null,
                select_code: "select_code",//          VARCHAR2(50)                   null,
                input_type: "2",//           VARCHAR2(4)                    null,
                input_row: 1,//            int                            null,
                input_column: 1,//         int                            null,
                input_dict: "select_code",//           VARCHAR2(200)                  null,
                input_grouptype: "select_code",//      VARCHAR2(4)                    null,
                input_group: 1,//          int                            null,
                input_group_unitnum: 2,//  int                            null,
                ng_model: "2",//             VARCHAR2(50)                   null,
                placeholder: "select_code",//          VARCHAR2(200)                  null,
                where_and: "select_code",//            VARCHAR2(200)                  null,
                default_value: "select_code",//        VARCHAR2(50)                   null,
                have_display: "select_code",//         VARCHAR2(4)                    null,
                if_display: "select_code",//           VARCHAR2(100)                  null,
                lable: "",//                VARCHAR2(200)                  null,
            },
            {
                id: 1,
                func_id: 1,//              number(19)                     null,
                select_code: "select_code",//          VARCHAR2(50)                   null,
                input_type: "13",//           VARCHAR2(4)                    null,
                input_row: 1,//            int                            null,
                input_column: 1,//         int                            null,
                input_dict: "select_code",//           VARCHAR2(200)                  null,
                input_grouptype: "select_code",//      VARCHAR2(4)                    null,
                input_group: 1,//          int                            null,
                input_group_unitnum: 2,//  int                            null,
                ng_model: "13",//             VARCHAR2(50)                   null,
                placeholder: "select_code",//          VARCHAR2(200)                  null,
                where_and: "select_code",//            VARCHAR2(200)                  null,
                default_value: "select_code",//        VARCHAR2(50)                   null,
                have_display: "select_code",//         VARCHAR2(4)                    null,
                if_display: "select_code",//           VARCHAR2(100)                  null,
                lable: "test",//                VARCHAR2(200)                  null,
            },
            {
                id: 1,
                func_id: 1,//              number(19)                     null,
                select_code: "select_code",//          VARCHAR2(50)                   null,
                input_type: "12",//           VARCHAR2(4)                    null,
                input_row: 1,//            int                            null,
                input_column: 1,//         int                            null,
                input_dict: "select_code",//           VARCHAR2(200)                  null,
                input_grouptype: "select_code",//      VARCHAR2(4)                    null,
                input_group: 1,//          int                            null,
                input_group_unitnum: 2,//  int                            null,
                ng_model: "12",//             VARCHAR2(50)                   null,
                placeholder: "select_code",//          VARCHAR2(200)                  null,
                where_and: "select_code",//            VARCHAR2(200)                  null,
                default_value: "select_code",//        VARCHAR2(50)                   null,
                have_display: "select_code",//         VARCHAR2(4)                    null,
                if_display: "select_code",//           VARCHAR2(100)                  null,
                lable: "test",//                VARCHAR2(200)                  null,
            },
            {
                id: 1,
                func_id: 1,//              number(19)                     null,
                select_code: "select_code",//          VARCHAR2(50)                   null,
                input_type: "11",//           VARCHAR2(4)                    null,
                input_row: 1,//            int                            null,
                input_column: 1,//         int                            null,
                input_dict: "select_code",//           VARCHAR2(200)                  null,
                input_grouptype: "select_code",//      VARCHAR2(4)                    null,
                input_group: 1,//          int                            null,
                input_group_unitnum: 2,//  int                            null,
                ng_model: "11",//             VARCHAR2(50)                   null,
                placeholder: "select_code",//          VARCHAR2(200)                  null,
                where_and: "select_code",//            VARCHAR2(200)                  null,
                default_value: "select_code",//        VARCHAR2(50)                   null,
                have_display: "select_code",//         VARCHAR2(4)                    null,
                if_display: "select_code",//           VARCHAR2(100)                  null,
                lable: "test",//                VARCHAR2(200)                  null,
            }
        ]
    }


    updateStyle() {
        // const shadow = this.shadowRoot;
        // const selesctOp = [];
        // for (const key in this.selesctOpConfig) {
        //     selesctOp.push(this.genComponent(this.selesctOpConfig[key]));
        // }
        // const html = this.render(VIEW.default, { select: selesctOp.join('') });
        // const html = [
        //     '<div class="panel-body" style="padding-bottom:0px;">',
        //     '<div style="margin-bottom:10px">',
        //     '<ul class="nav nav-tabs">',
        //     '<li role="presentation" class="active"><a href="#">Home</a></li>',
        //     '<li role="presentation"><a href="#">Profile</a></li>',
        //     '<li role="presentation"><a href="#">Messages</a></li>',
        //     '</ul>',
        //     '</div>',
        //     '    <div class="panel panel-default">',
        //     '      <div class="panel-heading">查询条件</div>',
        //     '      <div class="panel-body">',
        //     '        <form id="formSearch" class="form-horizontal">',
        //     '          <div style="margin-top:15px">',
        //     selesctOp.join(''),
        //     // ' <div class="col-md-4"><busiui-checkbox class="form-group" conf=\'{\"lable\":\"部门\",\"ngModel\":\"Name\"}\'></busiui-checkbox></div>',
        //     // '            <div class="col-md-4"><busiui-radio class="form-group" conf=\'{\"lable\":\"上级\",\"ngModel\":\"department\"}\'></busiui-radio></div>',
        //     // '            <div class="col-md-4"><busiui-select class="form-group" conf=\'{\"lable\":\"级别\",\"ngModel\":\"level\"}\'></busiui-select></div>',
        //     // '            <div class="col-md-4"><busiui-input class="form-group" conf=\'{\"ngModel\":\"desc\"}\'></busiui-input></div>',     
        //     // '            <label class="control-label col-sm-1" for="txt_search_statu">状态</label>',
        //     // '            <div class="col-sm-3">',
        //     // '              <input type="text" class="form-control" id="txt_search_statu">',
        //     // '            </div>',
        //     '<div class="col-md-4"></div><div class="col-md-4"></div>',
        //     '            <div class="col-md-4" style="text-align:left;">',
        //     '              <button type="button" style="margin-left:50px" id="btn_query" class="btn btn-primary">查询</button>',
        //     '            </div>',
        //     '          </div>',
        //     '        </form>',
        //     '      </div>',
        //     '    </div>',
        //     '',
        //     '    <div id="toolbar" class="btn-group">',
        //     '      <button id="btn_add" type="button" class="btn btn-default">',
        //     '        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增',
        //     '      </button>',
        //     '      <button id="btn_edit" type="button" class="btn btn-default">',
        //     '        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改',
        //     '      </button>',
        //     '      <button id="btn_delete" type="button" class="btn btn-default">',
        //     '        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除',
        //     '      </button>',
        //     '    </div>',
        //     '    <table id="tb_departments"></table>',
        //     '  </div>'
        // ];
        // this.$(shadow).find('div').html(html);

        //1.初始化Table
        let st = setTimeout(() => {
            this.Init();
        }, 10)

    };

    //初始化Table
    Init() {
        const _this = this;
        const $ = this.$;
        if (!BusiUiComponent.conf[this.busiuiID]) {
            $.ajax({
                url: `/assets/json/${this.busiuiID}.json`,
                dataType: 'json',
                success: function (res: any) {
                    debugger
                    BusiUiComponent.conf[_this.busiuiID] = res;

                    _this.render(VIEW.default, { busiuiID: _this.busiuiID });
                }
            });
        }
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

customElements.define('busiui-table', BusiUiTable);