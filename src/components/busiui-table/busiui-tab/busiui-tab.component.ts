import { EventService } from '../../../services';
import { BusiuiSelectOpConfigModel, BusiuiGridConfigModel, BusiuiGridBtnConfigModel, BusiuiiGridColConfig } from '../../../models'
import { BusiUiComponent } from '../../busiui-component';
import { BusuiTabConfigModel } from '../../../models/busiui_tab_config.model';
const VIEW = require('./busiui-tab.view.html');
/**
 * 动态Grid
 */
export class BusiUiTableTab extends BusiUiComponent {

    table: any; //表格jquery对象
    selesctOpConfig: Array<BusiuiSelectOpConfigModel> = []; //查询区域配置
    eventService: EventService; //通知事件
    queryDTO: any = {}; //查询区域DTO
    gridBtnConfig: Array<BusiuiGridBtnConfigModel> = []; //按钮设置表
    gridConfig: Array<BusiuiGridConfigModel> = []; //整体设置表
    gridColConfig: Array<BusiuiiGridColConfig> = []; //列设置表
    tabConfig: BusuiTabConfigModel;
    currentKey: string; //当前tabCode
    // Specify observed attributes so that
    // attributeChangedCallback will work


    constructor() {
        // Always call super first in constructor
        super();
    }


    updateStyle() {
        // 获取不到值，先写死
        const shadow = this.shadowRoot;
        const tabs = [];
        let tabCode = '';
        for (const key in BusiUiComponent.conf[this.busiuiID].BusuiTabConfigModel) {
            const tab = BusiUiComponent.conf[this.busiuiID].BusuiTabConfigModel[key];
            let className = '';
            if ((this.currentKey && this.currentKey === tab.tab_code) || (!this.currentKey && (parseInt(key) === 0))){
                className = 'active';
                tabCode = this.currentKey;
            }else {

            }
            tabs.push('<li class="' + className + '"><a key="' + tab.tab_code + '">' + tab.tab_name + '</a></li>');
            // selesctOp.push(this.genComponent(this.selesctOpConfig[key]));
        }
        
        const html = this.render(VIEW.default, { tabs: tabs.join(''),tabCode,busiuiID:this.busiuiID});
        // this.$(shadow).find('div').html(html);
        let st = setTimeout(() => {
            this.Init();
        }, 10)

    };

    //初始化Table
    Init() {
        const li = this.shadowRoot.querySelector('ul').querySelectorAll('li');
        console.log(li);
        this.$(li).bind('click', (event: any) => {
            console.log(event, event.target)
            this.currentKey = this.$(event.target).attr('key');
            this.updateStyle();
        });
        // if (li) {
        //     li.forEach(item=>{
        //         console.log(item);
        //         item.addEventListener('click', (event:any)=> {
        //             const key = this.$(event.target).attr('key');
        //             console.log(event,key);
        //         });
        //         // this.$(item).bind('click', (event: any) => console.log(event));
        //     })
        // }
        // const $ = this.$;
        // // const oTableInit: any = new Object();
        // const conf = {
        //     url: './mock/demo.json',         //请求后台的URL（*）
        //     method: 'get',                      //请求方式（*）
        //     toolbar: '#toolbar',                //工具按钮用哪个容器
        //     striped: true,                      //是否显示行间隔色
        //     cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        //     pagination: true,                   //是否显示分页（*）
        //     sortable: false,                     //是否启用排序
        //     sortOrder: "asc",                   //排序方式
        //     queryParams: this.queryParams,//传递参数（*）
        //     sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        //     pageNumber: 1,                       //初始化加载第一页，默认第一页
        //     pageSize: 10,                       //每页的记录行数（*）
        //     pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        //     search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        //     strictSearch: true,
        //     showColumns: true,                  //是否显示所有的列
        //     showRefresh: true,                  //是否显示刷新按钮
        //     minimumCountColumns: 2,             //最少允许的列数
        //     clickToSelect: true,                //是否启用点击选中行
        //     height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        //     uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        //     showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
        //     cardView: false,                    //是否显示详细视图
        //     detailView: false,                   //是否显示父子表
        //     columns: [{
        //         checkbox: true
        //     }, {
        //         field: 'Name',
        //         title: '部门名称'
        //     }, {
        //         field: 'ParentName',
        //         title: '上级部门'
        //     }, {
        //         field: 'Level',
        //         title: '部门级别'
        //     }, {
        //         field: 'Desc',
        //         title: '描述'
        //     },]
        // };
        // // this.$(this.shadowRoot).find('#tb_departments').bootstrapTable(conf);
        // $(this.shadowRoot).find('#btn_query').click(() => {
        //     console.log(1);
        //     $(this.shadowRoot).find('#tb_departments').bootstrapTable('refresh', conf);
        // });
        // this.query(conf);
        // const obser = EventService.getEvent();
        // console.log(obser);
        // //统一事件接受器
        // obser.subscribe((event: any) => {
        //     console.log(event);
        //     for (const key in event) {
        //         this.queryDTO[key] = event[key].target.value;
        //     }
        // })
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

customElements.define('busiui-table-tab', BusiUiTableTab);