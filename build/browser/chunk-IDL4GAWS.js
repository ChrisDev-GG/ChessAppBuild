import{A as p,c as n,e as a,f as c,g as l,i as s,k as h,ma as f,na as d}from"./chunk-X37O4XGY.js";var m={production:!0,baseUrl:"https://chess-api.christopher-dev.cl"};var u=(()=>{let t=class t{constructor(){this._isLoading=p(!1)}get isLoading(){return this._isLoading()}showLoader(){this._isLoading.set(!0)}hideLoader(){this._isLoading.set(!1)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var U=(()=>{let t=class t{constructor(o,e){this.http=o,this.loaderService=e,this._baseUrl=m.baseUrl}verifyJwtToken(){let o=`${this._baseUrl}/chess/verifyToken`,e=new f().set("x-token",localStorage.getItem("token")||"");return this.http.get(o,{headers:e}).pipe(a(i=>n(i.error)),c(()=>{}))}login(o){this.loaderService.showLoader();let e=`${this._baseUrl}/chess/enter`;return this.http.post(e,{email:o}).pipe(l(i=>{i.ok&&localStorage.setItem("token",i.token)}),a(i=>n(i.error)),c(()=>{this.loaderService.hideLoader()}))}};t.\u0275fac=function(e){return new(e||t)(h(d),h(u))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a,m as b,U as c};
