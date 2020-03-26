/**
 * Event Service
 * 
 */
export class EventService {
    constructor(
        protected toolsService: ToolsService
    ) {

    }
    window: any = window;

    init() {
        this.window[globalPath][PANNEL_KEY] = {};
        this.window[globalPath][DTO_KEY] = {};
        this.window[globalPath][VALUE_LOGIC_KEY] = {};
    }
    //注册全局按钮变量
    reg(pannels: any, dto: any) {
        this.window[globalPath][PANNEL_KEY] = {
            ...this.window[globalPath][PANNEL_KEY],
            ...pannels
        };
        for (const key in pannels) {
            const pannel: any = Object.values(pannels[key])[0];
            this.window[globalPath][PANNEL_KEY][pannel.tabCode] = pannel;
            this.window[globalPath][DTO_KEY] = dto;
        }
    }

    //刷新
    reflash(pannelCode: string) {
        let error = new EcomErrorHandler();
        const pannels: any = this.window[globalPath][PANNEL_KEY];
        const dto = this.window[globalPath][DTO_KEY];
        if (pannels[pannelCode]) {
            const pannel = pannels[pannelCode];
            pannel.loading = true;
            //pannel的组件是 dynTable dynForm file 的 组件dto初始化为[]
            error.handleWarning('由全局变量触发了Pannel刷新事件 ' + pannel.tabName + ' ' + pannelCode);
            error.handleWarning('刷新后该Pannel的dto将清空！');
            if (pannel[pannel.selectCode].inputType === '15' || pannel[pannel.selectCode].inputType === '16' || pannel[pannel.selectCode].inputType === '17') {
                dto[pannel.selectCode] = [];
            }
            else {
                dto[pannel.selectCode] = {};
            }

            // setTimeout(() => {
            //     pannels[pannelCode].loading = false;
            // }, 1000);
        } else {
            error.handleError('Pannel不存在' + pannelCode);
        }
    }

    //注册全局逻辑取值
    regGlobalValueLogic(pannelCode: string, element: any) {
        if( !this.window[globalPath][VALUE_LOGIC_KEY] ){
            this.window[globalPath][VALUE_LOGIC_KEY]={};
        }
        this.window[globalPath][VALUE_LOGIC_KEY][pannelCode] = this.window[globalPath][VALUE_LOGIC_KEY][pannelCode] ? this.window[globalPath][VALUE_LOGIC_KEY][pannelCode] : {};
        this.window[globalPath][VALUE_LOGIC_KEY][pannelCode][element.ngModel] = element.valueLogic;
    }


    //全局逻辑取值
    valueLogic(ngModel: string, value: string) {
        for (const pannelKey in this.window[globalPath][VALUE_LOGIC_KEY]) {
            const pannel = this.window[globalPath][VALUE_LOGIC_KEY][pannelKey];
            for (const key in pannel) {
                const valueLogic = pannel[key];
                if (valueLogic.indexOf(ngModel) !== -1) {
                    let data: any = {};
                    data[ngModel] = value;
                    this.window[globalPath][DTO_KEY][pannelKey][key] = this.toolsService.valueLogic(valueLogic, data);
                }
            }
        }

    }
}
