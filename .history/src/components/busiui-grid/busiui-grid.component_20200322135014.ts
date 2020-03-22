export class BusiUiGrid extends HTMLElement {
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

        // this.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        updateStyle(this);
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
}

class ButtonInit {
    constructor() {

    }
    Init() {
        //初始化页面上面的按钮事件
        var oInit: any = new Object();
        var postdata = {};
        return oInit;
    };
};

//动态表格
class TableInit {

    constructor() {

    }
    //初始化Table
    Init() {
        console.log(1111);
        const win: any = window;
        const $: any = win['$'];
        // const oTableInit: any = new Object();
        const conf = {
            columns: [{
              field: 'id',
              title: 'Item ID'
            }, {
              field: 'name',
              title: 'Item Name'
            }, {
              field: 'price',
              title: 'Item Price'
            }],
            data: [{
              id: 1,
              name: 'Item 1',
              price: '$1'
            }, {
              id: 2,
              name: 'Item 2',
              price: '$2'
            }]
          };
        console.log(conf);
        $('#tb_departments').bootstrapTable(conf);
    }

    queryParams(params: any) {
        const win: any = window;
        const $: any = win['$'];
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    }
}

function updateStyle(elem: any) {
    const win: any = window;
    const $: any = win['$'];
    const shadow = elem.shadowRoot;
    const html = [
        '<div class="panel-body" style="padding-bottom:0px;">',
        '    <div class="panel panel-default">',
        '      <div class="panel-heading">查询条件</div>',
        '      <div class="panel-body">',
        '        <form id="formSearch" class="form-horizontal">',
        '          <div class="form-group" style="margin-top:15px">',
        '            <label class="control-label col-sm-1" for="txt_search_departmentname">部门名称</label>',
        '            <div class="col-sm-3">',
        '              <input type="text" class="form-control" id="txt_search_departmentname">',
        '            </div>',
        '            <label class="control-label col-sm-1" for="txt_search_statu">状态</label>',
        '            <div class="col-sm-3">',
        '              <input type="text" class="form-control" id="txt_search_statu">',
        '            </div>',
        '            <div class="col-sm-4" style="text-align:left;">',
        '              <button type="button" style="margin-left:50px" id="btn_query" class="btn btn-primary">查询</button>',
        '            </div>',
        '          </div>',
        '        </form>',
        '      </div>',
        '    </div>',
        '',
        '    <div id="toolbar" class="btn-group">',
        '      <button id="btn_add" type="button" class="btn btn-default">',
        '        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增',
        '      </button>',
        '      <button id="btn_edit" type="button" class="btn btn-default">',
        '        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改',
        '      </button>',
        '      <button id="btn_delete" type="button" class="btn btn-default">',
        '        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除',
        '      </button>',
        '    </div>',
        '    <table id="tb_departments"></table>',
        '  </div>'
    ];
    $(shadow).find('div').html(html.join(''));
    shadow.querySelector('style').textContent = `
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css');
    @import url('./bootstrap-table.css');
    `;
    //1.初始化Table
    let st = setTimeout(() => {
        var oTable: any = new TableInit();
        oTable.Init();

        //2.初始化Button的点击事件
        var oButtonInit: any = new ButtonInit();
        oButtonInit.Init();
        st = null;
    }, 10)

};







customElements.define('busiui-grid', BusiUiGrid);