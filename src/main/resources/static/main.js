(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cluster_commands_cluster_commands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cluster-commands/cluster-commands.component */ "./src/app/cluster-commands/cluster-commands.component.ts");
/* harmony import */ var _pod_data_container_pod_data_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pod-data-container/pod-data-container.component */ "./src/app/pod-data-container/pod-data-container.component.ts");
/* harmony import */ var _cluster_services_cluster_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cluster-services/cluster-services.component */ "./src/app/cluster-services/cluster-services.component.ts");
/* harmony import */ var _server_component_server_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-component/server-component.component */ "./src/app/server-component/server-component.component.ts");
/* harmony import */ var _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-component/dashboard-component.component */ "./src/app/dashboard-component/dashboard-component.component.ts");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: _cluster_commands_cluster_commands_component__WEBPACK_IMPORTED_MODULE_3__["ClusterCommandsComponent"], children: [
        // {path: 'new', component: RecipeEditComponent},
        // {path: ':id', component: RecipeDetailComponent},
        // {path: ':id/edit', component: RecipeEditComponent}
        ]
    },
    { path: 'pods', component: _pod_data_container_pod_data_container_component__WEBPACK_IMPORTED_MODULE_4__["PodDataContainerComponent"], children: [] },
    { path: 'services', component: _cluster_services_cluster_services_component__WEBPACK_IMPORTED_MODULE_5__["ClusterServicesComponent"] },
    { path: 'socket', component: _server_component_server_component_component__WEBPACK_IMPORTED_MODULE_6__["ServerComponentComponent"] },
    { path: 'dashboards', component: _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponentComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"fixed-top\"></app-header>\r\n\r\n<div class=\"col-md-12\" style=\"margin-top: 80px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cluster-snapshot';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend-client/backend-client.component */ "./src/app/backend-client/backend-client.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pod_data_container_pod_data_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pod-data-container/pod-data-container.component */ "./src/app/pod-data-container/pod-data-container.component.ts");
/* harmony import */ var _cluster_commands_cluster_commands_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cluster-commands/cluster-commands.component */ "./src/app/cluster-commands/cluster-commands.component.ts");
/* harmony import */ var _pod_data_container_PodSearchPipe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pod-data-container/PodSearchPipe.pipe */ "./src/app/pod-data-container/PodSearchPipe.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cluster_commands_cluster_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cluster-commands/cluster-search.pipe */ "./src/app/cluster-commands/cluster-search.pipe.ts");
/* harmony import */ var _backend_client_pod_backend_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./backend-client/pod-backend-client.component */ "./src/app/backend-client/pod-backend-client.component.ts");
/* harmony import */ var _cluster_services_cluster_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cluster-services/cluster-services.component */ "./src/app/cluster-services/cluster-services.component.ts");
/* harmony import */ var _cluster_services_cluster_services_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cluster-services/cluster-services.pipe */ "./src/app/cluster-services/cluster-services.pipe.ts");
/* harmony import */ var _backend_client_cluster_service_backend_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./backend-client/cluster-service-backend-client */ "./src/app/backend-client/cluster-service-backend-client.ts");
/* harmony import */ var _server_component_server_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./server-component/server-component.component */ "./src/app/server-component/server-component.component.ts");
/* harmony import */ var _notifier_module_notifier_module_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notifier-module/notifier-module.component */ "./src/app/notifier-module/notifier-module.component.ts");
/* harmony import */ var _notifier_module_alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notifier-module/alert */ "./src/app/notifier-module/alert.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _log_modal_ngbd_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./log-modal/ngbd-modal-component */ "./src/app/log-modal/ngbd-modal-component.ts");
/* harmony import */ var _pod_data_container_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pod-data-container/chart.component */ "./src/app/pod-data-container/chart.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var _server_component_log_search_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./server-component/log-search.pipe */ "./src/app/server-component/log-search.pipe.ts");
/* harmony import */ var _download_component_download_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./download-component/download-component.component */ "./src/app/download-component/download-component.component.ts");
/* harmony import */ var _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard-component/dashboard-component.component */ "./src/app/dashboard-component/dashboard-component.component.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_6__["BackendClientComponent"],
            _cluster_commands_cluster_commands_component__WEBPACK_IMPORTED_MODULE_9__["ClusterCommandsComponent"],
            _backend_client_pod_backend_client_component__WEBPACK_IMPORTED_MODULE_13__["PodBackendClientComponent"],
            _pod_data_container_pod_data_container_component__WEBPACK_IMPORTED_MODULE_8__["PodDataContainerComponent"],
            _pod_data_container_PodSearchPipe_pipe__WEBPACK_IMPORTED_MODULE_10__["PodSearchPipePipe"],
            _backend_client_cluster_service_backend_client__WEBPACK_IMPORTED_MODULE_16__["ClusterServiceBackendClient"],
            _cluster_commands_cluster_search_pipe__WEBPACK_IMPORTED_MODULE_12__["ClusterSearchPipe"],
            _cluster_services_cluster_services_component__WEBPACK_IMPORTED_MODULE_14__["ClusterServicesComponent"],
            _cluster_services_cluster_services_pipe__WEBPACK_IMPORTED_MODULE_15__["ClusterServicesPipe"],
            _server_component_server_component_component__WEBPACK_IMPORTED_MODULE_17__["ServerComponentComponent"],
            _notifier_module_notifier_module_component__WEBPACK_IMPORTED_MODULE_18__["NotifierModuleComponent"], _notifier_module_alert__WEBPACK_IMPORTED_MODULE_19__["NgbdAlertCloseable"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_20__["DropdownDirective"],
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"],
            _log_modal_ngbd_modal_component__WEBPACK_IMPORTED_MODULE_23__["NgbdModalOptions"],
            _pod_data_container_chart_component__WEBPACK_IMPORTED_MODULE_24__["ChartComponent"],
            _server_component_log_search_pipe__WEBPACK_IMPORTED_MODULE_26__["LogSearchPipe"],
            _download_component_download_component_component__WEBPACK_IMPORTED_MODULE_27__["DownloadComponentComponent"],
            _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponentComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModalModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_25__["GoogleChartsModule"].forRoot()
        ],
        providers: [_backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_6__["BackendClientComponent"], _backend_client_pod_backend_client_component__WEBPACK_IMPORTED_MODULE_13__["PodBackendClientComponent"], _backend_client_cluster_service_backend_client__WEBPACK_IMPORTED_MODULE_16__["ClusterServiceBackendClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbActiveModal"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: []
    })
], AppModule);



/***/ }),

/***/ "./src/app/backend-client/backend-client.component.html":
/*!**************************************************************!*\
  !*** ./src/app/backend-client/backend-client.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Title</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/backend-client/backend-client.component.ts":
/*!************************************************************!*\
  !*** ./src/app/backend-client/backend-client.component.ts ***!
  \************************************************************/
/*! exports provided: BackendClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendClientComponent", function() { return BackendClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__);





let BackendClientComponent = class BackendClientComponent {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8082/';
        this.openSocket = this.url + 'sendLogs/';
        this.pauseSocket = this.url + 'pauseLogs/';
        this.closeSocket = this.url + 'stopLogs/';
        this.clusterCommands = this.url + 'commands/';
        this.clusterContextList = this.url + 'context/list/';
        this.contextSet = this.url + 'context/';
        this.contextCurrent = this.url + 'context/current';
        this.commandOutput = this.clusterCommands + 'output/';
        this.refreshCommandOutput = this.clusterCommands + 'refresh/';
        console.log('Health', this.http.get('http://localhost:8080/health'));
    }
    ngOnInit() {
    }
    getCurrentContext() {
        return this.http.get(this.contextCurrent, {
            responseType: 'text'
        });
    }
    getContextSet() {
        return this.http.get(this.clusterContextList);
    }
    setContext(currentContext) {
        return this.http.post(this.contextSet + currentContext, {
            responseType: 'text'
        });
    }
    getClusterCommands() {
        return this.http.get(this.clusterCommands);
    }
    getCommandOutput(command) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('command', command);
        return this.http.post(this.commandOutput, httpParams, {
            responseType: 'text'
        });
    }
    refreshClusterCommandLogs(command) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('command', command);
        return this.http.post(this.refreshCommandOutput, httpParams, {
            responseType: 'text'
        });
    }
    startLogs(podName, sessionId) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sessionId', sessionId);
        return this.http.post(this.openSocket + podName, httpParams, {
            responseType: 'text'
        });
    }
    pauseLogs(podName, sessionId) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sessionId', sessionId);
        return this.http.post(this.pauseSocket + podName, httpParams, {
            responseType: 'text'
        });
    }
    stopLogs(podName, sessionId) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sessionId', sessionId);
        return this.http.post(this.closeSocket + podName, httpParams, {
            responseType: 'text'
        });
    }
};
BackendClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backend-client',
        template: __webpack_require__(/*! ./backend-client.component.html */ "./src/app/backend-client/backend-client.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BackendClientComponent);



/***/ }),

/***/ "./src/app/backend-client/cluster-service-backend-client.ts":
/*!******************************************************************!*\
  !*** ./src/app/backend-client/cluster-service-backend-client.ts ***!
  \******************************************************************/
/*! exports provided: ClusterServiceBackendClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBackendClient", function() { return ClusterServiceBackendClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ClusterServiceBackendClient = 
// tslint:disable-next-line:component-class-suffix
class ClusterServiceBackendClient {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8082/';
        this.services = this.url + 'services/';
        this.refresh = this.services + 'refresh/';
    }
    getServices() {
        return this.http.get(this.services);
    }
    refreshServices() {
        return this.http.get(this.refresh);
    }
};
ClusterServiceBackendClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-backend-client',
        template: __webpack_require__(/*! ./backend-client.component.html */ "./src/app/backend-client/backend-client.component.html")
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ClusterServiceBackendClient);



/***/ }),

/***/ "./src/app/backend-client/pod-backend-client.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/backend-client/pod-backend-client.component.ts ***!
  \****************************************************************/
/*! exports provided: PodBackendClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodBackendClientComponent", function() { return PodBackendClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PodBackendClientComponent = class PodBackendClientComponent {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8082/';
        this.pods = this.url + 'pods/';
        this.nodes = this.pods + 'nodes/';
        this.namespaceList = this.pods + 'namespaces/';
        this.refreshPod = this.pods + 'refresh/';
    }
    getPodMetadata() {
        return this.http.get(this.pods);
    }
    getPodLogs(podName) {
        return this.http.get(this.pods + podName, {
            responseType: 'text'
        });
    }
    getNodeMap() {
        return this.http.get(this.nodes).map(response => {
            const map = new Map();
            Object.keys(response).forEach(key => {
                map.set(key, response[key]);
            });
            return map;
        });
    }
    refreshPodDetails() {
        return this.http.get(this.refreshPod);
    }
    refreshPodData(podName) {
        return this.http.get(this.refreshPod + podName, {
            responseType: 'json'
        });
    }
    getNamespaceList() {
        return this.http.get(this.namespaceList, {
            responseType: 'json'
        });
    }
    deletePodByName(podName) {
        return this.http.delete(this.pods + podName, {
            responseType: 'text'
        });
    }
};
PodBackendClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-backend-client',
        template: __webpack_require__(/*! ./backend-client.component.html */ "./src/app/backend-client/backend-client.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PodBackendClientComponent);



/***/ }),

/***/ "./src/app/cluster-commands/cluster-commands.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cluster-commands/cluster-commands.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-left\">\n  <h2>Cluster common commands</h2>\n\n  <div class=\"pad-bottom\">\n    <input type=\"text\" placeholder=\"search here\" [(ngModel)]=\"searchText\">\n  </div>\n\n  <div class=\"accordion\" id=\"command-details\">\n    <div class=\"card shadow-lg p-sm2 mb-1 bg-white rounded\"\n         *ngFor=\"let cmd of clusterCommandList | clusterSearch: searchText; let i = index\">\n      <div class=\"card-subtitle\" id=\"headingOne\">\n        <div style=\"display: flow; float: left;\">\n          <h2 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\n                    [attr.data-target]=\"'#' + cmd.commandName + 'x'\" aria-expanded=\"false\">\n              {{cmd.commandValue}}\n            </button>\n          </h2>\n        </div>\n\n        <div style=\"display: flow; float: right;\">\n          <button class=\"btn btn-outline-primary mt-2 mb-1 mr-sm-2\" (click)=\"refreshLogs(cmd)\"\n                  data-toggle=\"tooltip\" data-placement=\"left\" title=\"Refresh logs\">\n            <i class='fa fa-refresh'></i></button>\n          <app-download-component [component]=\"cmd\"\n                                  [type]=\"'clustercommand'\"></app-download-component>\n        </div>\n      </div>\n\n      <div id=\"{{cmd.commandName + 'x'}}\" class=\"collapse ml-2\" aria-labelledby=\"headingOne\"\n           data-parent=\"#command-details\">\n        <span class=\"badge badge-success\">{{cmd.commandValue}}</span>\n        <div style=\"margin-left: auto\">\n          <pre style=\"max-height: 350px;\">{{ cmd.log }}</pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/cluster-commands/cluster-commands.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cluster-commands/cluster-commands.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-bottom {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2x1c3Rlci1jb21tYW5kcy9DOlxcVXNlcnNcXGRqYWluXFxJZGVhUHJvamVjdHNcXGNsdXN0ZXItc25hcHNob3QtYmFja2VuZFxcY2x1c3Rlci1zbmFwc2hvdC11aS9zcmNcXGFwcFxcY2x1c3Rlci1jb21tYW5kc1xcY2x1c3Rlci1jb21tYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbHVzdGVyLWNvbW1hbmRzL2NsdXN0ZXItY29tbWFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkLWJvdHRvbXtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4ucGFkLWxlZnR7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cluster-commands/cluster-commands.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cluster-commands/cluster-commands.component.ts ***!
  \****************************************************************/
/*! exports provided: ClusterCommandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterCommandsComponent", function() { return ClusterCommandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend-client/backend-client.component */ "./src/app/backend-client/backend-client.component.ts");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
/* harmony import */ var _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/NotificationModel */ "./src/app/shared/NotificationModel.ts");






let ClusterCommandsComponent = class ClusterCommandsComponent {
    constructor(backend, snapshot) {
        this.backend = backend;
        this.snapshot = snapshot;
        if (this.snapshot.clusterCommandList) {
            console.log('found old cluster commands');
            this.clusterCommandList = this.snapshot.clusterCommandList;
        }
        else {
            this.backend.getClusterCommands().subscribe((clusterCommandList) => {
                console.log(clusterCommandList);
                this.clusterCommandList = this.sortArray(clusterCommandList);
                this.snapshot.clusterCommandList = clusterCommandList;
                this.getClusterCommandLogs();
            }, (error) => console.error(error));
        }
    }
    ngOnInit() {
    }
    getClusterCommandLogs() {
        for (const command of this.clusterCommandList) {
            if (!command.log) {
                this.getLogsOfCommand(command);
            }
        }
    }
    getLogsOfCommand(command) {
        const index = this.clusterCommandList.indexOf(command);
        this.clusterCommandList[index].log = 'Fetching new logs....';
        this.backend.getCommandOutput(command.commandValue).subscribe((response) => this.clusterCommandList[index].log = response, (error) => {
            command.log = error.message;
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].ERROR, 'Error fetching cluster logs'));
        });
    }
    refreshLogs(command) {
        const index = this.clusterCommandList.indexOf(command);
        this.clusterCommandList[index].log = 'Refreshing logs....';
        this.backend.refreshClusterCommandLogs(command.commandValue).subscribe((response) => {
            this.clusterCommandList[index].log = response;
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].SUCCESS, 'Fetching logs for ' + command.commandName));
        }, (error) => {
            command.log = error.message;
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].ERROR, 'Error fetching logs for ' + command.commandName));
        });
    }
    sortArray(arr) {
        return arr.sort((a, b) => {
            if (a.commandValue > b.commandValue)
                return 1;
            else
                return -1;
        });
    }
};
ClusterCommandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cluster-commands',
        template: __webpack_require__(/*! ./cluster-commands.component.html */ "./src/app/cluster-commands/cluster-commands.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].Emulated,
        styles: [__webpack_require__(/*! ./cluster-commands.component.scss */ "./src/app/cluster-commands/cluster-commands.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_3__["BackendClientComponent"], _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_4__["SnapshotService"]])
], ClusterCommandsComponent);



/***/ }),

/***/ "./src/app/cluster-commands/cluster-search.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/cluster-commands/cluster-search.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ClusterSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterSearchPipe", function() { return ClusterSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClusterSearchPipe = class ClusterSearchPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        let arr = items.filter(it => {
            return it.commandValue.toLowerCase().includes(searchText);
        });
        return arr;
    }
};
ClusterSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'clusterSearch'
    })
], ClusterSearchPipe);



/***/ }),

/***/ "./src/app/cluster-services/cluster-services.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cluster-services/cluster-services.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-left\">\n  <h2>Cluster Services</h2>\n\n  <div class=\"pad-bottom\">\n    <input type=\"search\" class=\"mr-sm-2\" placeholder=\"Search\" aria-label=\"Search\"\n           [(ngModel)]=\"searchText\">\n  </div>\n\n  <div class=\"accordion\" id=\"service\">\n    <div class=\"card shadow-lg p-sm2 mb-1 bg-white rounded-lg\"\n         *ngFor=\"let svc of clusterServiceList | clusterServices: searchText\">\n      <div class=\"card-subtitle\" id=\"headingOne\">\n        <div style=\"float: left\">\n          <h2 class=\"mb-0\">\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\n                    [attr.data-target]=\"'#' + svc.name\" aria-expanded=\"false\">\n              {{snapshot.getServiceNameDisplayLabel(svc.name)}}\n            </button>\n          </h2>\n        </div>\n        <div style=\"float: right\">\n          <span class=\"badge badge-pill badge-dark m-sm-3\">{{svc.namespace}}</span>\n          <span class=\"badge badge-light m-sm-2\"><i class=\"fa fa-clock-o\"></i>{{svc.age}}</span>\n          <span class=\"badge badge-pill badge-success m-sm-2\"\n                data-toggle=\"tooltip\" data-placement=\"left\" title=\"Service type\">{{svc.type}}</span>\n        </div>\n      </div>\n\n      <div id=\"{{svc.name}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#service\">\n        <!-- Button trigger modal -->\n\n        <div>\n          <span class=\"badge badge-pill badge-success m-sm-2\"\n                style=\"float-displace: block\">{{svc.serviceCommand}}</span>\n          <span class=\"badge badge-pill badge-danger m-sm-2\"\n                [ngbTooltip]=\"'Cluster-ip'\">{{svc.clusterIp}}</span>\n          <span *ngIf=\"svc.externalIp != null\" class=\"badge badge-pill m-sm-2\"\n                [ngbTooltip]=\"'External-ip'\">{{svc.externalIp}}</span>\n          <span class=\"ml-sm-2\" *ngFor=\"let port of svc.ports.split(',')\">\n            <span class=\"badge badge-warning mr-sm-1 align-middle\">{{port}}</span>\n          </span>\n\n          <app-download-component style=\"float: right\" [component]=\"svc\"\n                                  [type]=\"'clusterservices'\"></app-download-component>\n        </div>\n        <div class=\"card-body\">\n          <pre style=\"max-height: 400px;\">{{ svc.logs }}</pre>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/cluster-services/cluster-services.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cluster-services/cluster-services.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-bottom {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2x1c3Rlci1zZXJ2aWNlcy9DOlxcVXNlcnNcXGRqYWluXFxJZGVhUHJvamVjdHNcXGNsdXN0ZXItc25hcHNob3QtYmFja2VuZFxcY2x1c3Rlci1zbmFwc2hvdC11aS9zcmNcXGFwcFxcY2x1c3Rlci1zZXJ2aWNlc1xcY2x1c3Rlci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbHVzdGVyLXNlcnZpY2VzL2NsdXN0ZXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkLWJvdHRvbXtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4ucGFkLWxlZnR7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cluster-services/cluster-services.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cluster-services/cluster-services.component.ts ***!
  \****************************************************************/
/*! exports provided: ClusterServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServicesComponent", function() { return ClusterServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
/* harmony import */ var _backend_client_cluster_service_backend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend-client/cluster-service-backend-client */ "./src/app/backend-client/cluster-service-backend-client.ts");




let ClusterServicesComponent = class ClusterServicesComponent {
    constructor(backend, snapshot) {
        this.backend = backend;
        this.snapshot = snapshot;
    }
    ngOnInit() {
        if (this.snapshot.clusterServiceList && this.snapshot.clusterServiceList.length > 0) {
            console.log('found old cluster services');
            this.clusterServiceList = this.snapshot.clusterServiceList;
        }
        else {
            console.log('Fetching cluster services');
            this.backend.getServices().subscribe((clusterServiceList) => {
                console.log(clusterServiceList);
                this.clusterServiceList = this.sortArray(clusterServiceList);
                this.snapshot.clusterServiceList = clusterServiceList;
            }, (error) => console.error(error));
        }
    }
    refreshLogs() {
        console.log('Refreshing cluster services');
        this.backend.refreshServices().subscribe((clusterServiceList) => {
            console.log(clusterServiceList);
            this.clusterServiceList = this.sortArray(clusterServiceList);
            this.snapshot.clusterServiceList = clusterServiceList;
        }, (error) => console.error(error));
    }
    sortArray(arr) {
        return arr.sort((a, b) => {
            if (a.serviceCommand > b.serviceCommand) {
                return 1;
            }
            else {
                return -1;
            }
        });
    }
    getServiceString(svc) {
        return _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__["SnapshotService"].getServiceString(svc);
    }
};
ClusterServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cluster-services',
        template: __webpack_require__(/*! ./cluster-services.component.html */ "./src/app/cluster-services/cluster-services.component.html"),
        styles: [__webpack_require__(/*! ./cluster-services.component.scss */ "./src/app/cluster-services/cluster-services.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_client_cluster_service_backend_client__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceBackendClient"], _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__["SnapshotService"]])
], ClusterServicesComponent);



/***/ }),

/***/ "./src/app/cluster-services/cluster-services.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/cluster-services/cluster-services.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ClusterServicesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServicesPipe", function() { return ClusterServicesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClusterServicesPipe = class ClusterServicesPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        const arr = items.filter(it => {
            return it.serviceCommand.toLowerCase().includes(searchText);
        });
        return arr;
    }
};
ClusterServicesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'clusterServices'
    })
], ClusterServicesPipe);



/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"card border-info\" style=\"margin-left: 25px; margin-top: 5px; width: 8rem;\">\r\n  <a href=\"http://www.google.com/\" target=\"_blank\">\r\n    <img class=\"card-img-top\" style=\"max-height: 100px;\"\r\n         src=\"https://cdn.worldvectorlogo.com/logos/kafka.svg\" alt=\"Card image cap\">\r\n  </a>\r\n  <footer class=\"blockquote-footer text-right\">\r\n    <label style=\"margin-right: 3px\" class=\"text-info\"><cite title=\"Source Title\">Kafka </cite>dashboard</label>\r\n  </footer>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jb21wb25lbnQvZGFzaGJvYXJkLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentComponent", function() { return DashboardComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponentComponent = class DashboardComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-component',
        template: __webpack_require__(/*! ./dashboard-component.component.html */ "./src/app/dashboard-component/dashboard-component.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-component.component.scss */ "./src/app/dashboard-component/dashboard-component.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponentComponent);



/***/ }),

/***/ "./src/app/download-component/download-component.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/download-component/download-component.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-primary mt-2 mb-1\"  (click)=\"downloadTxtFormat()\" data-toggle=\"tooltip\"\n        data-placement=\"left\" title=\"Download log copy in text format\">\n  <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n</button>\n<button  class=\"btn btn-outline-primary mt-2 mb-1 ml-2\"  (click)=\"downloadHtmlFormat()\" data-toggle=\"tooltip\"\n        data-placement=\"left\" title=\"Download log copy in html format\">\n  <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n</button>\n"

/***/ }),

/***/ "./src/app/download-component/download-component.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/download-component/download-component.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkLWNvbXBvbmVudC9kb3dubG9hZC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/download-component/download-component.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/download-component/download-component.component.ts ***!
  \********************************************************************/
/*! exports provided: DownloadComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponentComponent", function() { return DownloadComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");




let DownloadComponentComponent = class DownloadComponentComponent {
    constructor() {
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    static [Symbol.match](x) {
        return x instanceof this;
    }
    getPodLogs(component) {
        this.name = component.namespace + '.' + component.podName;
        return '<b>' + _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__["SnapshotService"].getPodToString(component) + '</b>\n\n' + component.logs;
    }
    getServiceLogs(component) {
        this.name = component.namespace + '.' + component.name;
        return '<b>' + _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__["SnapshotService"].getServiceString(component) + '</b>\n\n' + component.logs;
    }
    getClusterCommandLogs(component) {
        this.name = component.commandName;
        return '<b>' + component.commandValue + '</b>\n\n' + component.log;
    }
    validateUserData(component) {
        if (this.type.toLowerCase() === 'podservice') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getPodLogs(component));
        }
        else if (this.type.toLowerCase() === 'clusterservices') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getServiceLogs(component));
        }
        else if (this.type.toLowerCase() === 'clustercommand') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getClusterCommandLogs(component));
        }
        else {
            this.name = 'logFile';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.component);
        }
    }
    downloadTxtFormat() {
        this.validateUserData(this.component).subscribe((res) => {
            this.downloadByHtmlTag({
                fileName: this.name + '.txt',
                text: res + ''
            });
        });
    }
    downloadHtmlFormat() {
        this.validateUserData(this.component).subscribe((res) => {
            this.downloadByHtmlTag({
                fileName: this.name + '.html',
                text: '<pre>' + res + '</pre>'
            });
        });
    }
    downloadByHtmlTag(arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        const element = this.setting.element.dynamicDownload;
        const fileType = arg.fileName.indexOf('.html') > -1 ? 'application/pdf' : 'text/plain';
        element.setAttribute('href', `data:${fileType};charset=utf-16,${encodeURIComponent(arg.text)}`);
        element.setAttribute('download', arg.fileName);
        const event = new MouseEvent('click');
        element.dispatchEvent(event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DownloadComponentComponent.prototype, "component", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DownloadComponentComponent.prototype, "type", void 0);
DownloadComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-download-component',
        template: __webpack_require__(/*! ./download-component.component.html */ "./src/app/download-component/download-component.component.html"),
        styles: [__webpack_require__(/*! ./download-component.component.scss */ "./src/app/download-component/download-component.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DownloadComponentComponent);



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img alt=\"\" style=\"max-height: 30px\"\n         src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png'>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/pods\">Pods</a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/services\">Services</a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboards\">Dashboards</a>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">{{snapshot.context}}</a>\n        <div class=\"dropdown-menu\">\n          <h6 class=\"dropdown-header\">Select Context</h6>\n          <a [ngClass]=\"{active: (ctx === snapshot.context)}\" class=\"dropdown-item\"\n             *ngFor=\"let ctx of contextList\" (click)=\"setContext(ctx)\" href=\"#\">{{ctx}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n\n  <div style=\"margin-right: 10%;\" class=\"form-inline my-2 my-lg-0 dropdown notification\" appDropdown\n       #r=\"appDropdown\">\n    <span class=\"badge\" *ngIf=\"snapshot.newNotifications.length > 0\">\n      {{snapshot.newNotifications.length}}</span>\n    <a style=\"cursor: pointer;\" class=\"nav-link dropdown-toggle dropdown-menu-lg-right\"\n       role=\"button\">Inbox\n      <span class=\"caret\"></span></a>\n    <ul style=\"margin-right: 10%;\" class=\"dropdown-menu overflow-list\" [ngClass]=\"{show: r.isOpen}\">\n      <div class=\"alert-link\" style=\"margin-bottom: 15px\">\n        <a class=\"mark-all-read notification-list text-info\" (click)=\"markAllAsRead()\">Read all</a>\n        <a class=\"delete-all notification-list text-danger\" (click)=\"deleteAll()\">Delete all</a>\n      </div>\n      <hr style=\"margin: 0 0 2px;\">\n      <li class=\"alert-success notification-list\"\n          *ngFor=\"let ntfcn of snapshot.newNotifications; let i = index\">\n        <app-notifications [isNew]=\"true\" [ntfcn]=\"ntfcn\" [index]=\"i\"></app-notifications>\n      </li>\n\n      <li class=\"notification-list text-muted\"\n          *ngFor=\"let ntfcn of snapshot.readNotifications; let i = index\">\n        <app-notifications [isNew]=\"false\" [ntfcn]=\"ntfcn\" [index]=\"i\"></app-notifications>\n      </li>\n\n      <li *ngIf=\"snapshot.getNotificationCount() <= 0\" style=\"text-align: center\"\n          class=\"notification-list text-muted\">No notifications to show\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mark-all-read {\n  float: left;\n  cursor: pointer;\n  color: blue; }\n\n.delete-all {\n  float: right;\n  color: darkred;\n  cursor: pointer; }\n\n.alert {\n  margin: 0%; }\n\n.overflow-list {\n  overflow-y: auto;\n  left: -100px;\n  max-height: 300px;\n  max-width: 300px;\n  min-width: 300px; }\n\n.notification {\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px; }\n\n.notification:hover {\n  color: indianred; }\n\n.notification .badge {\n  z-index: 1;\n  position: absolute;\n  top: 1px;\n  right: -10px;\n  border-radius: 100%;\n  background: indianred;\n  color: white; }\n\n.notification-list {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcZGphaW5cXElkZWFQcm9qZWN0c1xcY2x1c3Rlci1zbmFwc2hvdC1iYWNrZW5kXFxjbHVzdGVyLXNuYXBzaG90LXVpL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUNGLEVBQUE7O0FBRUE7RUFHRSxxQkFBcUI7RUFFckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBRVosbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmstYWxsLXJlYWQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmRlbGV0ZS1hbGwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogZGFya3JlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgbWFyZ2luOiAwJTtcclxufVxyXG5cclxuLm92ZXJmbG93LWxpc3Qge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweFxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgLy9jb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8vcGFkZGluZzogMTVweCAyNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcclxuICBjb2xvcjogaW5kaWFucmVkO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxcHg7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG4gIC8vcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBpbmRpYW5yZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3Qge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend-client/backend-client.component */ "./src/app/backend-client/backend-client.component.ts");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(backend, snapshot) {
        this.backend = backend;
        this.snapshot = snapshot;
        this.contextList = [];
        this.backend.getCurrentContext().subscribe((response) => {
            this.snapshot.context = response;
            console.log('current context', response);
        }, (error) => console.log(error));
        this.backend.getContextSet().subscribe((response) => {
            this.contextList = response;
            console.log(response);
        }, (error) => console.log('error getting context list', error));
    }
    ngOnInit() {
    }
    setContext(ctx) {
        this.backend.setContext(ctx).subscribe((response) => console.log(response), (error) => console.log(error));
        this.snapshot.context = ctx;
    }
    markAllAsRead() {
        this.snapshot.readNotifications.push(...this.snapshot.newNotifications);
        this.snapshot.newNotifications = [];
    }
    deleteAll() {
        this.snapshot.newNotifications = [];
        this.snapshot.readNotifications = [];
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_2__["BackendClientComponent"], _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__["SnapshotService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/log-modal/modal-component.css":
/*!***********************************************!*\
  !*** ./src/app/log-modal/modal-component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blinking{\r\n  -webkit-animation:blinkingText 4s infinite;\r\n          animation:blinkingText 4s infinite;\r\n}\r\n@-webkit-keyframes blinkingText{\r\n  0%{     color: blue;    }\r\n  49%{    color: dodgerblue; }\r\n  50%{    color: black; }\r\n  99%{    color: blue;  }\r\n  100%{   color: red;    }\r\n}\r\n@keyframes blinkingText{\r\n  0%{     color: blue;    }\r\n  49%{    color: dodgerblue; }\r\n  50%{    color: black; }\r\n  99%{    color: blue;  }\r\n  100%{   color: red;    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLW1vZGFsL21vZGFsLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxRQUFRLFdBQVcsS0FBSztFQUN4QixRQUFRLGlCQUFpQixFQUFFO0VBQzNCLFFBQVEsWUFBWSxFQUFFO0VBQ3RCLFFBQVEsV0FBVyxHQUFHO0VBQ3RCLFFBQVEsVUFBVSxLQUFLO0FBQ3pCO0FBTkE7RUFDRSxRQUFRLFdBQVcsS0FBSztFQUN4QixRQUFRLGlCQUFpQixFQUFFO0VBQzNCLFFBQVEsWUFBWSxFQUFFO0VBQ3RCLFFBQVEsV0FBVyxHQUFHO0VBQ3RCLFFBQVEsVUFBVSxLQUFLO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9nLW1vZGFsL21vZGFsLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxpbmtpbmd7XHJcbiAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCA0cyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dHtcclxuICAwJXsgICAgIGNvbG9yOiBibHVlOyAgICB9XHJcbiAgNDkleyAgICBjb2xvcjogZG9kZ2VyYmx1ZTsgfVxyXG4gIDUwJXsgICAgY29sb3I6IGJsYWNrOyB9XHJcbiAgOTkleyAgICBjb2xvcjogYmx1ZTsgIH1cclxuICAxMDAleyAgIGNvbG9yOiByZWQ7ICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/log-modal/model-component.html":
/*!************************************************!*\
  !*** ./src/app/log-modal/model-component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #liveLogModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">{{podModal.namespace + '.' + podModal.podName}}</h5>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-server-component [pod]=\"podModal\"></app-server-component>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-sm blinking\" (click)=\"openSocket(liveLogModal)\"\r\n        data-toggle=\"tooltip\" data-placement=\"left\" title=\"View live logs\">\r\n  <i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/log-modal/ngbd-modal-component.ts":
/*!***************************************************!*\
  !*** ./src/app/log-modal/ngbd-modal-component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalOptions", function() { return NgbdModalOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pod_data_container_pod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pod-data-container/pod.service */ "./src/app/pod-data-container/pod.service.ts");




let NgbdModalOptions = 
// tslint:disable-next-line:component-class-suffix
class NgbdModalOptions {
    constructor(modalService) {
        this.modalService = modalService;
        // this.podModal = this.getPod();
    }
    openSocket(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openBackDropCustomClass(content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
    }
    openSm(content) {
        this.modalService.open(content, { size: 'sm' });
    }
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openXl(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { windowClass: 'setScrollBehavior()' });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pod_data_container_pod_service__WEBPACK_IMPORTED_MODULE_3__["PodService"])
], NgbdModalOptions.prototype, "podModal", void 0);
NgbdModalOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ngbd-modal-options',
        template: __webpack_require__(/*! ./model-component.html */ "./src/app/log-modal/model-component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./modal-component.css */ "./src/app/log-modal/modal-component.css")]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], NgbdModalOptions);



/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<code>\n  <div *ngIf=\"isNew\">\n    <div contenteditable=\"true\" *ngIf=\"ntfcn.type == 1\" style=\"margin: 0\"\n         class=\"alert alert-success alert-dismissible\" role=\"alert\">{{ntfcn.message}}\n      <span class=\"badge badge-success\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" (click)=\"onCloseNew()\">\n        <span aria-hidden=\"true\">&#10004;</span></button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 2\" style=\"margin: 0\" class=\"alert alert-danger alert-dismissible\"\n         role=\"alert\">{{ntfcn.message}}\n      <span class=\"badge badge-danger\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseNew()\">\n        <i class=\"fa fa-fire-extinguisher\" aria-hidden=\"true\"></i></button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 3\" style=\"margin: 0\" class=\"alert alert-warning alert-dismissible\"\n         role=\"alert\">{{ntfcn.message}}\n      <span class=\"badge badge-warning\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseNew()\">\n        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 4\" style=\"margin: 0\" class=\"alert alert-info alert-dismissible\"\n         role=\"alert\">{{ntfcn.message}}\n      <span class=\"badge badge-info\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseNew()\">\n        <span aria-hidden=\"true\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></span>\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"!isNew\">\n    <div *ngIf=\"ntfcn.type == 1\" style=\"margin: 0\" class=\"alert alert-dismissible\"\n         role=\"alert\">\n      <span class=\"alert-success\">&#10004;</span>\n      {{ntfcn.message}}\n      <span class=\"badge badge-success\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" (click)=\"onCloseRead()\">&times;</button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 2\" style=\"margin: 0\" class=\"alert alert-dismissible\"\n         role=\"alert\"><i class=\"fa fa-fire-extinguisher alert-danger\"\n                         aria-hidden=\"true\"></i>{{ntfcn.message}}\n      <span class=\"badge badge-danger\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseRead()\">&times;\n      </button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 3\" style=\"margin: 0\" class=\"alert alert-dismissible\"\n         role=\"alert\"><i class=\"fa fa-exclamation-triangle alert-warning\"\n                         aria-hidden=\"true\"></i>{{ntfcn.message}}\n      <span class=\"badge badge-warning\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseRead()\">&times;</button>\n    </div>\n\n    <div *ngIf=\"ntfcn.type == 4\" style=\"margin: 0\" class=\"alert alert-dismissible\"\n         role=\"alert\"><i class=\"fa fa-info-circle alert-info\"></i>{{ntfcn.message}}\n      <span class=\"badge badge-info\" style=\"float: right\">{{ ntfcn.getTime() }}</span>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"onCloseRead()\">&times;\n      </button>\n    </div>\n  </div>\n</code>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
/* harmony import */ var _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/NotificationModel */ "./src/app/shared/NotificationModel.ts");




let NotificationsComponent = class NotificationsComponent {
    constructor(snapshot) {
        this.snapshot = snapshot;
        this.date = new Date();
    }
    ngOnInit() {
    }
    onCloseRead() {
        this.snapshot.readNotifications.splice(this.index, 1);
    }
    onCloseNew() {
        if (this.snapshot.readNotifications.length === 0) {
            this.snapshot.readNotifications.push(this.snapshot.newNotifications[this.index]);
        }
        else {
            this.snapshot.readNotifications.unshift(this.snapshot.newNotifications[this.index]);
        }
        this.snapshot.newNotifications.splice(this.index, 1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_3__["NotificationModel"])
], NotificationsComponent.prototype, "ntfcn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NotificationsComponent.prototype, "isNew", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NotificationsComponent.prototype, "index", void 0);
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
        styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/notifications/notifications.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__["SnapshotService"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/notifier-module/alert.html":
/*!********************************************!*\
  !*** ./src/app/notifier-module/alert.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p>\r\n  <button [type]=\"'success'\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/notifier-module/alert.ts":
/*!******************************************!*\
  !*** ./src/app/notifier-module/alert.ts ***!
  \******************************************/
/*! exports provided: NgbdAlertCloseable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertCloseable", function() { return NgbdAlertCloseable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'secondary',
        message: 'This is a secondary alert',
    }, {
        type: 'light',
        message: 'This is a light alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
let NgbdAlertCloseable = class NgbdAlertCloseable {
    constructor() {
        this.reset();
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    reset() {
        this.alerts = Array.from(ALERTS);
    }
};
NgbdAlertCloseable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngbd-alert',
        template: __webpack_require__(/*! ./alert.html */ "./src/app/notifier-module/alert.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NgbdAlertCloseable);



/***/ }),

/***/ "./src/app/notifier-module/notifier-module.component.html":
/*!****************************************************************!*\
  !*** ./src/app/notifier-module/notifier-module.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (load)=\"changeSuccessMessage()\">\n<!--  <ngbd-alert *ngIf=\"successMessage\"-->\n<!--              (close)=\"successMessage = null\">{{ successMessage }}</ngbd-alert>-->\n\n  <p>\n    <button *ngIf=\"successMessage\" [type]=\"'success'\" class=\"btn btn-primary\"\n            (close)=\"successMessage = null\">{{'test ' + successMessage}}\n    </button>\n  </p>\n  <p>\n    <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage('clicked')\"\n            (load)=\"changeSuccessMessage('loaded')\">Change message\n    </button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/notifier-module/notifier-module.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/notifier-module/notifier-module.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWVyLW1vZHVsZS9ub3RpZmllci1tb2R1bGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/notifier-module/notifier-module.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/notifier-module/notifier-module.component.ts ***!
  \**************************************************************/
/*! exports provided: NotifierModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierModuleComponent", function() { return NotifierModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let NotifierModuleComponent = class NotifierModuleComponent {
    constructor() {
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
    }
    ngOnInit() {
        this.changeSuccessMessage('loaded');
        // setTimeout(() => this.staticAlertClosed = true, 20000);
        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => this.successMessage = null);
    }
    changeSuccessMessage(message = new Date().toDateString()) {
        this._success.next(message + ' - Message successfully changed.');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NotifierModuleComponent.prototype, "successMessage", void 0);
NotifierModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifier-module',
        template: __webpack_require__(/*! ./notifier-module.component.html */ "./src/app/notifier-module/notifier-module.component.html"),
        styles: [__webpack_require__(/*! ./notifier-module.component.scss */ "./src/app/notifier-module/notifier-module.component.scss")]
    })
], NotifierModuleComponent);



/***/ }),

/***/ "./src/app/pod-data-container/PodSearchPipe.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/pod-data-container/PodSearchPipe.pipe.ts ***!
  \**********************************************************/
/*! exports provided: PodSearchPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodSearchPipePipe", function() { return PodSearchPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var PodSearchPipePipe_1;

let PodSearchPipePipe = PodSearchPipePipe_1 = class PodSearchPipePipe {
    static isReady(pod) {
        const split = pod.ready.split('/');
        return split[0] === split[1];
    }
    transform(items, searchText, namespace, status, nodeName) {
        if (!items) {
            return [];
        }
        let arr = items;
        if (namespace !== 'all') {
            arr = arr.filter(pod => {
                return pod.namespace === namespace;
            });
        }
        if (searchText) {
            searchText = searchText.toLowerCase();
            arr = arr.filter(pod => {
                return pod.podName.toLowerCase().includes(searchText);
            });
        }
        if (nodeName !== 'all') {
            arr = arr.filter(pod => {
                return pod.node === nodeName;
            });
        }
        if (status !== 'all') {
            if (status === 'Deleted') {
                arr = arr.filter(pod => {
                    return pod.deleted;
                });
            }
            else if (status === 'Running') {
                arr = arr.filter(pod => {
                    return PodSearchPipePipe_1.isReady(pod) && !pod.deleted;
                });
            }
            else if (status === 'Not ready') {
                arr = arr.filter(pod => {
                    return !PodSearchPipePipe_1.isReady(pod);
                });
            }
        }
        return arr;
    }
};
PodSearchPipePipe = PodSearchPipePipe_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'PodSearchPipe'
    })
], PodSearchPipePipe);



/***/ }),

/***/ "./src/app/pod-data-container/chart.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pod-data-container/chart.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<google-chart #chart\r\n              [title]=\"title\"\r\n              [type]=\"type\"\r\n              [data]=\"data\"\r\n              [columnNames]=\"columnNames\"\r\n              [options]=\"options\"\r\n              [width]=\"width\">\r\n</google-chart>\r\n"

/***/ }),

/***/ "./src/app/pod-data-container/chart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pod-data-container/chart.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
// https://www.tutorialspoint.com/angular_googlecharts/angular_googlecharts_environment_setup.html



let ChartComponent = class ChartComponent {
    // height = 400;
    constructor(snapshot) {
        this.snapshot = snapshot;
        this.title = 'Pod status';
        this.type = 'PieChart';
        this.columnNames = ['Status', 'Count'];
        this.options = {
            is3D: true,
            slices: {
                0: { offset: 0.1, color: 'green' },
                1: { offset: 0.1, color: 'orange' },
                2: { offset: 0.2, color: 'red' }
            }
        };
        this.width = 320;
        this.data = snapshot.podStatusChart;
        window.setInterval(() => {
            this.data = snapshot.podStatusChart;
        }, 2000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChartComponent.prototype, "data", void 0);
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'chart-component',
        template: __webpack_require__(/*! ./chart.component.html */ "./src/app/pod-data-container/chart.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_snapshot_service__WEBPACK_IMPORTED_MODULE_2__["SnapshotService"]])
], ChartComponent);



/***/ }),

/***/ "./src/app/pod-data-container/pod-data-container.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pod-data-container/pod-data-container.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-left\">\n\n  <div style=\"display: flex;\">\n    <div class=\"card text-center\" style=\"width: 300px;\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Pods Running</h5>\n        <p class=\"card-text\"></p>\n        <a class=\"btn btn-primary\" (click)=\"refreshPodDetails()\" [ngbTooltip]=\"'Refresh data'\">\n          {{podList ? podList.length : 0}}</a>\n      </div>\n      <div class=\"card-footer text-muted\" style=\"font-size: 10px\">\n        <div class=\"custom-control custom-switch\" [ngbTooltip]=\"'Toggle auto-refresh'\"\n             style=\"float: left; margin-right: 7%\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\"\n                 [checked]=\"snapshot.autoRefreshEnabled\" (click)=\"toggleAutoRefresh()\">\n          <label class=\"custom-control-label\" for=\"customSwitch1\"></label>\n        </div>\n        <span style=\"float: right\" id=\"refreshDuration\">\n          Last update: <i class=\"fa fa-refresh fa-spin fa-fw\"></i></span>\n      </div>\n    </div>\n\n    <div style=\"margin-left: 25px\" class=\"card text-center\">\n      <chart-component></chart-component>\n    </div>\n\n  </div>\n\n  <br>\n\n  <div class=\"pad-bottom\" style=\"display: flex\">\n    <input type=\"search\" class=\"mr-sm-2\" placeholder=\"Search\" [(ngModel)]=\"searchText\">\n    <div class=\"dropdown\" style=\"margin-left: 25px\">\n      <select class=\"form-control-sm\" (change)=\"setNamespaceFilter($event)\">\n        <option selected value=\"all\">All Namespaces</option>\n        <option *ngFor=\"let namespace of namespaceList\" value=\"{{namespace}}\">{{namespace}}</option>\n      </select>\n    </div>\n\n    <div class=\"dropdown\" style=\"margin-left: 25px\">\n      <select class=\"form-control-sm\" (change)=\"setPodStatusFilter($event)\">\n        <option selected value=\"all\">All status</option>\n        <option *ngFor=\"let status of podStatusList\" value=\"{{status}}\">{{status}}</option>\n      </select>\n    </div>\n\n    <div class=\"dropdown\" style=\"margin-left: 25px\" (focus)=\"setNodeFilter($event)\"\n         (change)=\"setNodeFilter($event)\" *ngIf=\"nodeNameDetails && nodeNameDetails.length > 0\">\n      <select class=\"form-control-sm\">\n        <option class=\"dropdown-item small\" selected value=\"all\">All Nodes</option>\n        <option class=\"dropdown-item small\" *ngFor=\"let node of nodeNameDetails\" value=\"{{node}}\">\n          {{node + ' (' + generateNodeList(node) + ' pods)'}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n\n  <div class=\"accordion\" id=\"pod-details\">\n    <div class=\"card shadow-lg p-sm2 mb-1 bg-white rounded\"\n         *ngFor=\"let pod of podList | PodSearchPipe: searchText: namespaceFilter: podStatusFilter: nodeFilter\"\n         [ngClass]=\"{'border border-warning': !isReady(pod), 'border border-danger': pod.deleted}\">\n      <div class=\"card-subtitle\" id=\"headingOne\">\n        <div style=\"display: flow; float: left\">\n          <h2 class=\"mb-0\">\n            <button *ngIf=\"!pod.deleted\" [ngClass]=\"{'pod-not-ready': !isReady(pod)}\"\n                    class=\"btn btn-link collapsed\" aria-expanded=\"false\" data-toggle=\"collapse\"\n                    type=\"button\" [attr.data-target]=\"'#' + pod.podName.split('.')[0] \">\n              {{pod.podName}}\n            </button>\n            <button *ngIf=\"pod.deleted\" class=\"btn collapsed\" data-toggle=\"collapse\" type=\"button\"\n                    aria-expanded=\"false\" style=\"color: red;text-decoration: line-through\"\n                    [attr.data-target]=\"'#' + pod.podName.split('.')[0] \">\n              {{pod.podName}}\n            </button>\n          </h2>\n        </div>\n        <div style=\"display: flow; float: right;\">\n          <span class=\"badge badge-dark\">{{pod.namespace}}</span>\n          <span class=\"badge badge-light\"><i class=\"fa fa-clock-o\"></i>{{pod.age}}</span>\n          <!--delete modal-->\n          <button class=\"btn btn-sm btn-outline-warning\" data-toggle=\"modal\" *ngIf=\"!pod.deleted\"\n                  [attr.data-target]=\"'#' + pod.podName.split('.')[0] + 'deleteModal'\">\n            <i style=\"color: tomato\" class=\"fa fa-trash fa-fw\" data-toggle=\"tooltip\"\n               title=\"Delete pod\"></i>\n          </button>\n\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"{{pod.podName.split('.')[0] + 'deleteModal' }}\" role=\"dialog\"\n               aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                  <small>Are you sure you want to delete pod {{pod.podName}} ?</small>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                          (click)=\"deletePod(pod)\">Yes\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <span>\n            <i class=\"fa fa-info m-3 text-info\" data-toggle=\"tooltip\" data-placement=\"left\"\n               title=\"{{podInfo(pod)}}\"></i></span>\n          <button *ngIf=\"!pod.deleted\" class=\"btn btn-outline-primary mt-2 mb-1 mr-sm-2\"\n                  (click)=\"refreshPodLogs(pod)\" data-toggle=\"tooltip\"\n                  data-placement=\"left\" title=\"Refresh logs\">\n            <i class='fa fa-refresh' title=\"Refresh logs\"></i>\n          </button>\n          <app-download-component [component]=\"pod\" [type]=\"'podservice'\"></app-download-component>\n          <ngbd-modal-options *ngIf=\"!pod.deleted\" [podModal]=\"pod\"></ngbd-modal-options>\n        </div>\n        <div style=\"display: flow; float: right;\" class=\"m-3\">\n          <i *ngIf=\"pod.deleted\" style=\"color: tomato\" class=\"fa fa-trash fa-fw\"\n             data-toggle=\"tooltip\" data-placement=\"left\" title=\"Pod deleted in + {{pod.age}}\"></i>\n          <i *ngIf=\"!isReady(pod)\" class=\"fa fa-paint-brush\" style=\"color: orange\"\n             data-toggle=\"tooltip\" data-placement=\"left\" title=\"Pod not ready ({{pod.status}})\"></i>\n        </div>\n      </div>\n\n      <div id=\"{{pod.podName.split('.')[0] }}\" class=\"collapse\" aria-labelledby=\"headingOne\"\n           data-parent=\"#pod-details\">\n        <div class=\"card\">\n          <div>\n            <span class=\"badge badge-pill badge-success m-md-2\">{{pod.podCommand}}</span>\n            <span *ngIf=\"pod.restarts > 0\"\n                  class=\"badge badge-pill badge-danger mr-sm-2\">Restarts: {{pod.restarts}}</span>\n            <span *ngIf=\"pod.podMemory\"\n                  class=\"badge badge-pill badge-success mr-sm-2\">Memory: {{pod.podMemory}}</span>\n\n            <span [ngbTooltip]=\"'Parent node'\" style=\"float: right\"\n                  class=\"badge badge-pill badge-primary m-md-2\">{{pod.node}}</span>\n            <span [ngbTooltip]=\"'Pod IP'\" style=\"float: right\"\n                  class=\"badge badge-dark m-md-2\">{{pod.ip}}</span>\n            <pre style=\"max-height: 400px;\" class=\"modal-content\">{{ pod.logs }}</pre>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pod-data-container/pod-data-container.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pod-data-container/pod-data-container.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-bottom {\n  padding-bottom: 10px; }\n\n.pad-left {\n  margin-top: 10px; }\n\n.pod-not-ready {\n  color: #bd6506; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9kLWRhdGEtY29udGFpbmVyL0M6XFxVc2Vyc1xcZGphaW5cXElkZWFQcm9qZWN0c1xcY2x1c3Rlci1zbmFwc2hvdC1iYWNrZW5kXFxjbHVzdGVyLXNuYXBzaG90LXVpL3NyY1xcYXBwXFxwb2QtZGF0YS1jb250YWluZXJcXHBvZC1kYXRhLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUNGLEVBQUE7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb2QtZGF0YS1jb250YWluZXIvcG9kLWRhdGEtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZC1ib3R0b20ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5wYWQtbGVmdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvZC1ub3QtcmVhZHkge1xyXG4gIGNvbG9yOiAjYmQ2NTA2O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pod-data-container/pod-data-container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pod-data-container/pod-data-container.component.ts ***!
  \********************************************************************/
/*! exports provided: PodDataContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodDataContainerComponent", function() { return PodDataContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pod_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pod.service */ "./src/app/pod-data-container/pod.service.ts");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
/* harmony import */ var _backend_client_pod_backend_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend-client/pod-backend-client.component */ "./src/app/backend-client/pod-backend-client.component.ts");
/* harmony import */ var _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/NotificationModel */ "./src/app/shared/NotificationModel.ts");

var PodDataContainerComponent_1;





let PodDataContainerComponent = PodDataContainerComponent_1 = class PodDataContainerComponent {
    constructor(podBackendClient, snapshot) {
        this.podBackendClient = podBackendClient;
        this.snapshot = snapshot;
        this.podStatusList = ['Running', 'Not ready', 'Deleted'];
        this.namespaceFilter = 'all';
        this.podStatusFilter = 'all';
        this.nodeFilter = 'all';
        if (this.snapshot.podList) {
            this.podList = this.snapshot.podList;
            console.log('found old podModal details. No. of pods running: ' + this.podList.length);
            // this.generateNodeList();
        }
        else {
            console.log('calling backend to get pods data');
            this.podBackendClient.getPodMetadata().subscribe((podServices) => {
                this.podList = PodDataContainerComponent_1.sortArray(podServices);
                this.snapshot.podList = podServices;
                console.log('list', this.podList);
                this.getNodeList();
                this.getAllPodLogs();
                this.updateLastRefreshTime();
            }, (error) => {
                console.log('error getting podMetadata', error);
                const pod = new _pod_service__WEBPACK_IMPORTED_MODULE_2__["PodService"]();
                pod.podName = 'DummyPod123';
                pod.namespace = 'kNameSpace';
                pod.logs = new Date() + ': Something is happening';
                pod.ready = '0/1';
                pod.restarts = 5;
                this.snapshot.podList = [];
                this.snapshot.podList.push(pod);
                this.updateLastRefreshTime();
            });
        }
        this.enableAutoRefresh();
    }
    static isReady(pod) {
        const split = pod.ready.split('/');
        return split[0] === split[1];
    }
    static sortArray(arr) {
        return arr.sort((a, b) => {
            return (a.podName > b.podName) ? 1 : -1;
        });
    }
    ngOnInit() {
        this.getNamespaceList();
    }
    enableAutoRefresh(duration = 600000) {
        console.log('autoRefresh set to: ' + (duration / 1000) + 'seconds');
        this.autoRefresh = window.setInterval(() => {
            this.refreshPodDetails();
        }, duration);
    }
    toggleAutoRefresh() {
        if (this.snapshot.autoRefreshEnabled) {
            window.clearInterval(this.autoRefresh);
            this.enableAutoRefresh((24 * 60 * 60 * 10000));
            this.snapshot.addNewNotification((new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].WARNING, 'Auto refreshing disabled')));
        }
        else {
            this.enableAutoRefresh();
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].INFO, 'Auto refreshing enabled'));
        }
        this.snapshot.autoRefreshEnabled = !this.snapshot.autoRefreshEnabled;
    }
    refreshPodStatusChart() {
        let running = 0;
        let unstable = 0;
        let deleted = 0;
        if (this.snapshot.podList) {
            this.snapshot.podList.forEach(p => {
                if (p.deleted) {
                    deleted++;
                }
                else if (PodDataContainerComponent_1.isReady(p)) {
                    running++;
                }
                else {
                    unstable++;
                }
            });
        }
        this.snapshot.podStatusChart = [
            [this.podStatusList[0], running],
            [this.podStatusList[1], unstable],
            [this.podStatusList[2], deleted]
        ];
    }
    getNodeList() {
        this.podBackendClient.getNodeMap().subscribe((res) => {
            this.nodeNameDetails = [...res.keys()];
        }, error => console.log(error));
    }
    getNamespaceList() {
        this.podBackendClient.getNamespaceList().subscribe((response) => {
            console.log('namespaces', response);
            this.namespaceList = response;
        }, (error) => console.log('error getting namespace list', error));
    }
    getAllPodLogs() {
        console.log('fetching podModal logs for ' + this.podList.length + ' pods');
        for (const pod of this.podList) {
            if (!pod.logs) {
                this.getPodLogs(pod);
            }
        }
    }
    getPodLogs(pod) {
        const index = this.podList.indexOf(pod);
        this.podList[index].logs = 'Fetching new logs....';
        this.podBackendClient.getPodLogs(pod.podName).subscribe((response) => this.podList[index].logs = response, (error) => console.log('error getting logs: ', error));
    }
    refreshPodDetails() {
        this.podBackendClient.refreshPodDetails().subscribe((podServices) => {
            this.podList = [];
            this.snapshot.podList = [];
            this.podList.push(...PodDataContainerComponent_1.sortArray(podServices));
            this.snapshot.podList.push(...podServices);
            console.log('list', this.podList);
            this.getNodeList();
            this.getAllPodLogs();
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].SUCCESS, 'Refreshed podModal details'));
            console.log('Refreshed pods data');
            this.updateLastRefreshTime();
        }, (error) => {
            console.log('error refreshing podModal logs ', error);
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].ERROR, 'Error refreshing podModal details'));
        });
    }
    refreshPodLogs(pod) {
        const index = this.podList.indexOf(pod);
        this.podList[index].logs = 'Refreshing pod details....';
        this.podBackendClient.refreshPodData(pod.podName).subscribe((response) => {
            this.podList[index] = this.updatePodData(pod, response);
            this.refreshPodStatusChart();
            console.log('pod data: ', this.podInfo(response));
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].SUCCESS, 'logs for podModal ' + pod.podName + ''));
        }, (error) => {
            console.log('error refreshing podModal logs ', error);
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].ERROR, 'Error fetching logs for podModal ' + pod.podName));
        });
    }
    deletePod(pod) {
        this.podBackendClient.deletePodByName(pod.podName).subscribe((response) => {
            console.log('deleted pod, ', response);
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].INFO, response));
            this.refreshPodLogs(pod);
        }, (error) => {
            console.log('error deleting pod ', error);
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_5__["NotificationModel"].ERROR, 'Error deleting pod ' + pod.podName));
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    isReady(pod) {
        return PodDataContainerComponent_1.isReady(pod);
    }
    generateNodeList(node) {
        let count = 0;
        this.podList.forEach(pod => {
            if (pod.node === node) {
                count++;
            }
        });
        return count;
    }
    updateLastRefreshTime() {
        this.refreshPodStatusChart();
        this.snapshot.podLastRefresh = new Date();
        const lrd = this.snapshot.podLastRefresh;
        window.clearInterval(this.timerObj);
        this.timerObj = window.setInterval(() => {
            let age = (new Date().getTime() - lrd.getTime()) / 1000;
            let duration = '0 sec';
            if (age >= (60 * 60 * 24)) {
                age = age / (60 * 60 * 24);
                duration = age.toFixed(0) + ' day';
            }
            else if (age >= (60 * 60)) {
                age = age / 3600;
                duration = age.toFixed(0) + ' hr';
            }
            else if (age >= 60) {
                age = age / 60;
                duration = age.toFixed(0) + ' min';
            }
            else {
                duration = age.toFixed(0) + ' sec';
            }
            document.getElementById('refreshDuration').innerHTML = 'Last update: ' + duration + ' ago';
        }, 15000);
    }
    setNamespaceFilter(event) {
        this.namespaceFilter = event.target.value;
        console.log(this.namespaceFilter);
    }
    setPodStatusFilter(event) {
        this.podStatusFilter = event.target.value;
        console.log(this.podStatusFilter);
    }
    setNodeFilter(event) {
        this.nodeFilter = event.target.value;
    }
    podInfo(pod) {
        return _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__["SnapshotService"].getPodToString(pod);
    }
    updatePodData(podOld, podNew) {
        podOld.namespace = podNew.namespace;
        podOld.podName = podNew.podName;
        podOld.ready = podNew.ready;
        podOld.status = podNew.status;
        podOld.restarts = podNew.restarts;
        podOld.age = podNew.age;
        podOld.ip = podNew.ip;
        podOld.node = podNew.node;
        podOld.podMemory = podNew.podMemory;
        podOld.colour = podNew.colour;
        podOld.logs = podNew.logs;
        podOld.icon = podNew.icon;
        podOld.podCommand = podNew.podCommand;
        podOld.deleted = podNew.deleted;
        podOld.podId = podNew.podId;
        return podOld;
    }
};
PodDataContainerComponent = PodDataContainerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pod-data-container',
        template: __webpack_require__(/*! ./pod-data-container.component.html */ "./src/app/pod-data-container/pod-data-container.component.html"),
        styles: [__webpack_require__(/*! ./pod-data-container.component.scss */ "./src/app/pod-data-container/pod-data-container.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_client_pod_backend_client_component__WEBPACK_IMPORTED_MODULE_4__["PodBackendClientComponent"], _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_3__["SnapshotService"]])
], PodDataContainerComponent);



/***/ }),

/***/ "./src/app/pod-data-container/pod.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pod-data-container/pod.service.ts ***!
  \***************************************************/
/*! exports provided: PodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodService", function() { return PodService; });
class PodService {
    constructor() {
    }
    static isReady(pod) {
        const split = pod.ready.split('/');
        return split[0] === split[1];
    }
}


/***/ }),

/***/ "./src/app/server-component/log-search.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/server-component/log-search.pipe.ts ***!
  \*****************************************************/
/*! exports provided: LogSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSearchPipe", function() { return LogSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogSearchPipe = class LogSearchPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        let arr = items.filter(it => {
            return it.toLowerCase().includes(searchText);
        });
        return arr;
    }
};
LogSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'logSearch'
    })
], LogSearchPipe);



/***/ }),

/***/ "./src/app/server-component/server-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/server-component/server-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"font-size: small; display: flex; align-items: center\">\r\n\r\n  <div class=\"container\" style=\"width: 80%\">\r\n    <p class=\"text-info\">{{pod.podCommand}}</p>\r\n    <pre *ngIf=\"pod.restarts > 0\" class=\"text-danger\">Number of restarts: {{pod.restarts}}</pre>\r\n    <p *ngIf=\"pod.podMemory\"><b>Memory usage: {{pod.podMemory}}</b></p>\r\n  </div>\r\n\r\n  <div style=\"float: left; width: 5%;\">\r\n    <button class=\"btn btn-sm bg-info\" type=\"button\" *ngIf=\"disabled\"\r\n            (click)=\"connect()\" [ngbTooltip]=\"'Start live logs'\">\r\n      <i class=\"fa fa-play fa-2x\" aria-hidden=\"true\"></i></button>\r\n    <button class=\"btn btn-sm bg-warning\" type=\"submit\" *ngIf=\"!disabled\"\r\n            (click)=\"pauseConnection()\" [ngbTooltip]=\"'Pause logs'\">\r\n      <i class=\"fa fa-pause fa-2x\" aria-hidden=\"true\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"pad-bottom\">\r\n  <input style=\"float: left\" type=\"text\" placeholder=\"search in logs\" [(ngModel)]=\"searchText\">\r\n  <button class=\"btn btn-sm bg-warning\" style=\"float: right\" (click)=\"clearLogs()\"\r\n          [ngbTooltip]=\"'Clear logs'\">\r\n    <i style=\"float: right; margin-right: 3%; color: midnightblue\" class=\"fa fa-trash\"\r\n       aria-hidden=\"true\"></i>\r\n  </button>\r\n</div>\r\n\r\n<div class=\"container badge-dark\" id=\"logModal\" style=\"overflow-y: auto; max-height: 450px\">\r\n  <div class=\"table table-striped\" style=\"margin-top: 20px;\">\r\n    <tbody *ngFor=\"let logLine of logs | logSearch : searchText; let i = index\">\r\n    <tr style=\"font-size: 12px; color: aliceblue\" *ngIf=\"logLine.trim().length > 1\">\r\n      <span\r\n        [ngClass]=\"{'alert-danger': logLine.toLowerCase().indexOf('error') >= 0 || logLine.toLowerCase().indexOf('exception') >= 0}\">\r\n        {{logLine}}</span>\r\n    </tr>\r\n    </tbody>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/server-component/server-component.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/server-component/server-component.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1jb21wb25lbnQvc2VydmVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/server-component/server-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/server-component/server-component.component.ts ***!
  \****************************************************************/
/*! exports provided: ServerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponentComponent", function() { return ServerComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/bundles/stomp.umd.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend-client/backend-client.component */ "./src/app/backend-client/backend-client.component.ts");
/* harmony import */ var _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/snapshot.service */ "./src/app/shared/snapshot.service.ts");
/* harmony import */ var _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/NotificationModel */ "./src/app/shared/NotificationModel.ts");
/* harmony import */ var _pod_data_container_pod_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pod-data-container/pod.service */ "./src/app/pod-data-container/pod.service.ts");
/* harmony import */ var _shared_random_id_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/random-id-generator */ "./src/app/shared/random-id-generator.ts");
// https://stomp-js.github.io/api-docs/latest/classes/StompConfig.html
// https://stackoverflow.com/questions/38978475/spring-websocket-to-stream-results-of-a-command-back-to-browser









let ServerComponentComponent = class ServerComponentComponent {
    constructor(backend, snapshot) {
        this.backend = backend;
        this.snapshot = snapshot;
        this.logs = [];
        this.disabled = true;
        this.sessionId = _shared_random_id_generator__WEBPACK_IMPORTED_MODULE_8__["RandomIdGenerator"].makeid(6) + '-' + _shared_random_id_generator__WEBPACK_IMPORTED_MODULE_8__["RandomIdGenerator"].makeid(4) + '-' + _shared_random_id_generator__WEBPACK_IMPORTED_MODULE_8__["RandomIdGenerator"].makeid(6);
        this.stompClient = null;
    }
    ngOnInit() {
        this.description = this.pod.namespace + '.' + this.pod.podName;
        this.connect();
    }
    setConnected(connected) {
        this.disabled = !connected;
    }
    connect() {
        this.disabled = true;
        this.searchText = null;
        this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Live logs for' + this.pod.podName + ', Connection established!!'));
        const socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://localhost:8082/gkz-stomp-endpoint');
        // earlier Stomp.over method is now client ?
        this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["Stomp"].over(socket);
        this.stompClient.reconnect_delay = 5000;
        // tslint:disable-next-line:variable-name
        const _this = this;
        this.stompClient.connect({}, (frame) => {
            _this.setConnected(true);
            console.log('Connected: ' + frame);
            this.startSubscription = _this.stompClient.subscribe('/topic/' + this.sessionId, (log) => _this.showLogLine(log.body));
        });
        // this.verifyConnection();
        this.backend.startLogs(this.pod.podName, this.sessionId).subscribe((response) => {
            console.log('response', response);
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Live logs for' + this.pod.podName + ', Connection established!!'));
        }, (error) => {
            if (error.statusText !== 'OK') {
                this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].ERROR, 'Error establishing connection'));
                console.log('error', error);
            }
            else {
                this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Live logs for' + this.pod.podName + ', Connection established!!'));
            }
        });
    }
    // this is used to send message to backend
    verifyConnection() {
        this.stompClient.publish({
            destination: '/hello',
            body: JSON.stringify({ 'connection established': this.name }),
            skipContentLengthHeader: true
        });
    }
    onLogChangeScrollToBottom(duration = 2000) {
        // window.clearInterval(this.autoScroll);
        // this.autoScroll = window.setInterval(() => {
        //   const elem = document.getElementById('logModal');
        //   elem.scrollTop = elem.scrollHeight;
        // }, duration);
    }
    showLogLine(message) {
        this.logs.push(...message.split('\n'));
        this.onLogChangeScrollToBottom();
        const elem = document.getElementById('logModal');
        elem.scrollTop = elem.scrollHeight;
    }
    closeConnection() {
        this.backend.stopLogs(this.pod.podName, this.sessionId).subscribe((response) => {
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Web socket connection ended'));
            console.log('Closing connection for session: ' + this.sessionId, response);
        }, (error) => {
            // if (error.statusText !== 'OK') {
            console.log('error', error);
            // }
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Connection closed for session: ' + this.sessionId));
        });
    }
    clearLogs() {
        this.logs = [];
    }
    pauseConnection() {
        this.disabled = false;
        this.backend.pauseLogs(this.pod.podName, this.sessionId).subscribe((response) => {
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Web socket connection paused'));
            console.log('Pausing connection for session: ' + this.sessionId, response);
        }, (error) => {
            // if (error.statusText !== 'OK') {
            console.log('error', error);
            // }
            this.snapshot.addNewNotification(new _shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"](_shared_NotificationModel__WEBPACK_IMPORTED_MODULE_6__["NotificationModel"].SUCCESS, 'Connection paused for session: ' + this.sessionId));
        });
        this.pauseSetup();
    }
    pauseSetup() {
        this.startSubscription.unsubscribe();
        this.setConnected(false);
        this.onLogChangeScrollToBottom(1000000);
        window.clearInterval(this.autoScroll);
    }
    disconnect() {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.pauseSetup();
        console.log('Disconnected  for session: ' + this.sessionId);
    }
    ngOnDestroy() {
        this.disconnect();
        this.closeConnection();
        // this.autoScroll = null;
        console.log('web socket destroyed for session: ' + this.sessionId);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pod_data_container_pod_service__WEBPACK_IMPORTED_MODULE_7__["PodService"])
], ServerComponentComponent.prototype, "pod", void 0);
ServerComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-component',
        template: __webpack_require__(/*! ./server-component.component.html */ "./src/app/server-component/server-component.component.html"),
        styles: [__webpack_require__(/*! ./server-component.component.scss */ "./src/app/server-component/server-component.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_client_backend_client_component__WEBPACK_IMPORTED_MODULE_4__["BackendClientComponent"], _shared_snapshot_service__WEBPACK_IMPORTED_MODULE_5__["SnapshotService"]])
], ServerComponentComponent);



/***/ }),

/***/ "./src/app/shared/NotificationModel.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/NotificationModel.ts ***!
  \*********************************************/
/*! exports provided: NotificationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModel", function() { return NotificationModel; });
class NotificationModel {
    constructor(type, message) {
        this.date = new Date();
        this.type = type;
        this.message = message;
    }
    getTime() {
        let age = (new Date().getTime() - this.date.getTime()) / 1000;
        let duration = '1 sec';
        if (age >= (60 * 60 * 24)) {
            age = age / (60 * 60 * 24);
            duration = age.toFixed(0) + ' day';
        }
        else if (age >= (60 * 60)) {
            age = age / 3600;
            duration = age.toFixed(0) + ' hr';
        }
        else if (age >= 60) {
            age = age / 60;
            duration = age.toFixed(0) + ' min';
        }
        else {
            duration = '< 1 min';
        }
        return duration;
    }
}
NotificationModel.SUCCESS = 1;
NotificationModel.ERROR = 2;
NotificationModel.WARNING = 3;
NotificationModel.INFO = 4;


/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    click() {
        this.isOpen = true;
    }
    over() {
        this.isOpen = true;
    }
    out() {
        this.isOpen = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DropdownDirective.prototype, "click", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DropdownDirective.prototype, "over", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DropdownDirective.prototype, "out", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]',
        exportAs: 'appDropdown'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/random-id-generator.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/random-id-generator.ts ***!
  \***********************************************/
/*! exports provided: RandomIdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomIdGenerator", function() { return RandomIdGenerator; });
class RandomIdGenerator {
    constructor() {
    }
    static makeid(length = 6) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/shared/snapshot.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/snapshot.service.ts ***!
  \********************************************/
/*! exports provided: SnapshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotService", function() { return SnapshotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SnapshotService = class SnapshotService {
    constructor() {
        this.context = 'N/A';
        this.readNotifications = [];
        this.newNotifications = [];
        this.podLastRefresh = new Date();
        this.autoRefreshEnabled = true;
        this.podStatusChart = [
            ['Demo_Running', 45.0],
            ['Not ready', 26.8],
            ['Deleted', 12.8]
        ];
    }
    static getPodToString(pod) {
        return 'name= ' + pod.podName + '\n' +
            'namespace= ' + pod.namespace + '\n' +
            'ready= ' + pod.ready + '\n' +
            'status= ' + pod.status + '\n' +
            'restarts= ' + pod.restarts + '\n' +
            'age= ' + pod.age + '\n' +
            'ip= ' + pod.ip + '\n' +
            'node= ' + pod.node + '\n' +
            'podMemory= ' + (pod.podMemory ? pod.podMemory : 'Not found');
    }
    static getServiceString(svc) {
        return 'Namespace: ' + svc.namespace + '\n' +
            'Name: ' + svc.name + '\n' +
            'Type: ' + svc.type + '\n' +
            'ClusterIp: ' + svc.clusterIp + '\n' +
            'ExternalIp: ' + svc.externalIp + '\n' +
            'Ports: ' + svc.ports + '\n' +
            'Age: ' + svc.age;
    }
    getServiceNameDisplayLabel(name) {
        let nameArr = name.split('-');
        nameArr = nameArr.map(s => s.charAt(0).toUpperCase() + s.slice(1));
        return nameArr.join(' ');
    }
    addNewNotification(notification) {
        this.newNotifications.unshift(notification);
    }
    getNotificationCount() {
        return this.newNotifications.length + this.readNotifications.length;
    }
};
SnapshotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SnapshotService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\djain\IdeaProjects\cluster-snapshot-backend\cluster-snapshot-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map