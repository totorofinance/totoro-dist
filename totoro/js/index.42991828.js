(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"11ff":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,".color-blue[data-v-38ff69c5]{color:#1463a2!important}.color-tab[data-v-38ff69c5]{color:#5d8191!important}.color-gold[data-v-38ff69c5]{color:#ffc78a!important}.color-text[data-v-38ff69c5]{color:#8b572a!important}.color-yellow[data-v-38ff69c5]{color:#f5a623!important}.color-red[data-v-38ff69c5]{color:#ea573c!important}.color-green[data-v-38ff69c5]{color:#30a384!important}.color-add[data-v-38ff69c5]{color:#32af8d!important}.color-000[data-v-38ff69c5]{color:#000!important}.color-333[data-v-38ff69c5]{color:#333!important}.color-666[data-v-38ff69c5]{color:#666!important}.color-999[data-v-38ff69c5]{color:#999!important}.color-theme[data-v-38ff69c5]{color:#82a3b1!important}.color-golden[data-v-38ff69c5]{color:#f7b500!important}.bgcolor-blue[data-v-38ff69c5]{background-color:#1463a2!important}.bgcolor-yellow[data-v-38ff69c5]{background-color:#f5a623!important}.bgcolor-red[data-v-38ff69c5]{background-color:#ea573c!important}.bgcolor-green[data-v-38ff69c5]{background-color:#1463a2!important}.bgcolor-theme[data-v-38ff69c5]{background-color:#82a3b1!important}.bgcolor-f3f3f3[data-v-38ff69c5]{background-color:#f3f3f3!important}.mint-switch-input:checked+.mint-switch-core[data-v-38ff69c5]{border-color:#f5a623!important;background:#f5a623!important;overflow:hidden}@keyframes van-fade-in-data-v-38ff69c5{0%{opacity:0}to{opacity:1}}@keyframes van-fade-out-data-v-38ff69c5{0%{opacity:1}to{opacity:0}}@keyframes van-slide-down-enter-data-v-38ff69c5{0%{transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave-data-v-38ff69c5{to{transform:translate3d(0,-100%,0)}}@keyframes van-slide-up-enter-data-v-38ff69c5{0%{transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave-data-v-38ff69c5{to{transform:translate3d(0,100%,0)}}.van-slide-up-enter-active[data-v-38ff69c5]{animation:van-slide-up-enter-data-v-38ff69c5 .3s ease both}.van-slide-up-leave-active[data-v-38ff69c5]{animation:van-slide-up-leave-data-v-38ff69c5 .3s ease both}.van-slide-down-enter-active[data-v-38ff69c5]{animation:van-slide-down-enter-data-v-38ff69c5 .3s ease both}.van-slide-down-leave-active[data-v-38ff69c5]{animation:van-slide-down-leave-data-v-38ff69c5 .3s ease both}.van-fade-enter-active[data-v-38ff69c5]{animation:van-fade-in-data-v-38ff69c5 .3s}.van-fade-leave-active[data-v-38ff69c5]{animation:van-fade-out-data-v-38ff69c5 .3s;position:absolute;top:0;left:0;width:100%}.container[data-v-38ff69c5]{width:100%;height:auto;min-height:calc(100vh - 1.33333rem);overflow:hidden;position:relative}.container .tab[data-v-38ff69c5]{width:100%;height:1.17333rem;background:#fff;color:#949ba3}.container .tab .btn[data-v-38ff69c5]{color:#949ba3;font-weight:400;min-width:1.6rem;padding:0 .33333rem;height:1.17333rem;font-size:.42667rem;line-height:1.09333rem;text-align:center}.container .tab .btn span.label[data-v-38ff69c5]{display:block;width:100%;height:1.09333rem;text-align:center;cursor:pointer}.container .tab .btn span.underscore[data-v-38ff69c5]{width:1.22667rem;height:.08rem;background:#82a3b1;border-radius:.04rem;opacity:0}.container .tab .btn.active[data-v-38ff69c5]{color:#5d8191;font-weight:700}.container .tab .btn.active span.underscore[data-v-38ff69c5]{opacity:1}.container .main[data-v-38ff69c5]{flex:1;width:100%}",""]),t.exports=a},"25c2":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container flex-column fs"},[t.tabVisible?e("div",{staticClass:"tab flex-center"},t._l(t.menu,(function(a,o){return e("div",{key:o,staticClass:"btn flex-column",class:{active:t.menuActive===a.value},on:{click:function(a){return t.onMenuClick(o)}}},[e("span",{staticClass:"label"},[t._v(t._s(t.$t("swap."+a.label)))]),e("span",{staticClass:"underscore"})])})),0):t._e(),e("div",{staticClass:"main"},[e("keep-alive",[e("router-view",{attrs:{pairsLoading:t.pairsLoading,paramsPairId:t.paramsPairId},on:{refresh:t.onRefresh}})],1)],1),e("Footer")],1)},n=[],r=e("448a"),i=e.n(r),c=e("c973"),s=e.n(c),l=e("9523"),d=e.n(l),f=e("a34a"),v=e.n(f),u=e("d918"),p=e("b3e2"),b=e("5880");function m(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?m(Object(e),!0).forEach((function(a){d()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var g={name:"Totoro",data:function(){return{pairs:[],menu:[{value:0,label:"swap"},{value:1,label:"pools"}],menuActive:1,dataList:[],statusObj:{},getOneSymbolTimer:null,timer:null,coins:[],noticeVisible:!0,pairsLoading:!1,pairsLoadingTimer:null,tabVisible:!0,paramsPairId:0}},components:{Footer:p["a"]},props:{},watch:{"$route.name":{handler:function(t){this.menuActive="swap"===t?0:1},deep:!0}},activated:function(){this.onRefresh()},mounted:function(){this.menuActive="swap"===this.$route.name?0:1;var t=this.$route.query,a=t.pairId,e=t.tab;a&&e&&(this.paramsPairId=Number(a),this.onMenuClick(Number(e),{pairId:Number(a)}));var o=this.$store.state.pairs||[];o&&o.length>0&&(this.pairs=o,this.filterCoins(o))},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},methods:h(h({},Object(b["mapActions"])(["setPairs","setCoins"])),{},{onMenuClick:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=0===t?"swap":"pool";this.$route.name!==o&&this.$router.push({name:o,query:e}).then((function(){a.menuActive="swap"===a.$route.name?0:1}))},getPairs:function(){var t=this;return s()(v.a.mark((function a(){var e,o,n,r,i,c,s;return v.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.pairsLoading=!0,e={code:"swap.ttr",scope:"swap.ttr",table:"pairs",limit:1e3,json:!0},a.next=4,u["a"].getTableRows(e);case 4:return o=a.sent,n={code:"mine.ttr",scope:"mine.ttr",table:"pools",limit:300,json:!0},a.next=8,u["a"].getTableRows(n);case 8:return r=a.sent,i={code:"pools.ttr",scope:"pools.ttr",table:"pools",limit:300,json:!0},a.next=12,u["a"].getTableRows(i);case 12:c=a.sent,s=[],o.forEach((function(t){var a={mineWeight:0,poolWeight:0},e=r.find((function(a){return a.pair_id==t.id}));e&&(a.mineWeight=parseFloat(parseFloat(e.weight).toFixed(2)),a.mineInfo=r);var o=c.find((function(a){return a.pair_id==t.id}));o&&(a.poolWeight=parseFloat(parseFloat(o.weight).toFixed(2)),a.poolInfo=o),a.pairId=t.id,a.totalLiquidity=t.total_liquidity;var n=t.token0.sym.split(",")[1],i=parseInt(t.token0.sym.split(",")[0]),l=t.token1.sym.split(",")[1],d=parseInt(t.token1.sym.split(",")[0]);a.token0={coin:n,precision:i,contract:t.token0.contract,reserve:t.reserve0,tokenId:"".concat(t.token0.contract,"-").concat(n),eosAmount:"EOS"===n?parseFloat(t.reserve0):0},a.token1={coin:l,precision:d,contract:t.token1.contract,reserve:t.reserve1,tokenId:"".concat(t.token1.contract,"-").concat(l),eosAmount:"EOS"===l?parseFloat(t.reserve1):0},s.push(a)})),t.pairs=s,t.setPairs(s),t.filterCoins(s),t.pairsLoading=!1;case 19:case"end":return a.stop()}}),a)})))()},filterCoins:function(t){if(t.length>0){var a=t.map((function(t){return t.token0})),e=t.map((function(t){return t.token1}));a.push.apply(a,i()(e));var o=[];a.forEach((function(t){var a=o.findIndex((function(a){return a.tokenId===t.tokenId}));-1===a&&o.push(t)})),o.sort((function(t,a){return parseFloat(a.eosAmount)-parseFloat(t.eosAmount)})),this.coins=o,this.setCoins(o)}},onRefresh:function(t,a){this.pairsLoading=!0,this.pairsLoadingTimer&&clearTimeout(this.pairsLoadingTimer),this.pairsLoadingTimer=setTimeout(this.getPairs,100)},onClickAnnouncement:function(){this.noticeVisible=!1,this.$router.push({path:"/start"})}})},w=g,k=(e("4945"),e("2877")),y=Object(k["a"])(w,o,n,!1,null,"b4252954",null);a["default"]=y.exports},"2c94":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,".color-blue[data-v-b4252954]{color:#1463a2!important}.color-tab[data-v-b4252954]{color:#5d8191!important}.color-gold[data-v-b4252954]{color:#ffc78a!important}.color-text[data-v-b4252954]{color:#8b572a!important}.color-yellow[data-v-b4252954]{color:#f5a623!important}.color-red[data-v-b4252954]{color:#ea573c!important}.color-green[data-v-b4252954]{color:#30a384!important}.color-add[data-v-b4252954]{color:#32af8d!important}.color-000[data-v-b4252954]{color:#000!important}.color-333[data-v-b4252954]{color:#333!important}.color-666[data-v-b4252954]{color:#666!important}.color-999[data-v-b4252954]{color:#999!important}.color-theme[data-v-b4252954]{color:#82a3b1!important}.color-golden[data-v-b4252954]{color:#f7b500!important}.bgcolor-blue[data-v-b4252954]{background-color:#1463a2!important}.bgcolor-yellow[data-v-b4252954]{background-color:#f5a623!important}.bgcolor-red[data-v-b4252954]{background-color:#ea573c!important}.bgcolor-green[data-v-b4252954]{background-color:#1463a2!important}.bgcolor-theme[data-v-b4252954]{background-color:#82a3b1!important}.bgcolor-f3f3f3[data-v-b4252954]{background-color:#f3f3f3!important}.mint-switch-input:checked+.mint-switch-core[data-v-b4252954]{border-color:#f5a623!important;background:#f5a623!important;overflow:hidden}@keyframes van-fade-in-data-v-b4252954{0%{opacity:0}to{opacity:1}}@keyframes van-fade-out-data-v-b4252954{0%{opacity:1}to{opacity:0}}@keyframes van-slide-down-enter-data-v-b4252954{0%{transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave-data-v-b4252954{to{transform:translate3d(0,-100%,0)}}@keyframes van-slide-up-enter-data-v-b4252954{0%{transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave-data-v-b4252954{to{transform:translate3d(0,100%,0)}}.van-slide-up-enter-active[data-v-b4252954]{animation:van-slide-up-enter-data-v-b4252954 .3s ease both}.van-slide-up-leave-active[data-v-b4252954]{animation:van-slide-up-leave-data-v-b4252954 .3s ease both}.van-slide-down-enter-active[data-v-b4252954]{animation:van-slide-down-enter-data-v-b4252954 .3s ease both}.van-slide-down-leave-active[data-v-b4252954]{animation:van-slide-down-leave-data-v-b4252954 .3s ease both}.van-fade-enter-active[data-v-b4252954]{animation:van-fade-in-data-v-b4252954 .3s}.van-fade-leave-active[data-v-b4252954]{animation:van-fade-out-data-v-b4252954 .3s;position:absolute;top:0;left:0;width:100%}.container[data-v-b4252954]{width:100%;height:auto;min-height:calc(100vh - 1.33333rem);position:relative}.container .tab[data-v-b4252954]{width:100%;height:1.17333rem;background:#fff;color:#949ba3}.container .tab .btn[data-v-b4252954]{color:#949ba3;font-weight:400;min-width:1.6rem;padding:0 .33333rem;height:1.17333rem;font-size:.42667rem;line-height:1.09333rem;text-align:center}.container .tab .btn span.label[data-v-b4252954]{display:block;width:100%;height:1.09333rem;text-align:center;cursor:pointer}.container .tab .btn span.underscore[data-v-b4252954]{width:1.22667rem;height:.08rem;background:#82a3b1;border-radius:.04rem;opacity:0}.container .tab .btn.active[data-v-b4252954]{color:#5d8191;font-weight:700}.container .tab .btn.active span.underscore[data-v-b4252954]{opacity:1}.container .main[data-v-b4252954]{flex:1;width:100%}",""]),t.exports=a},4945:function(t,a,e){"use strict";var o=e("51b7"),n=e.n(o);n.a},"51b7":function(t,a,e){var o=e("2c94");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("499e").default;n("51edb42e",o,!0,{sourceMap:!1,shadowMode:!1})},"8ee4":function(t,a,e){var o=e("11ff");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("499e").default;n("f0f249b6",o,!0,{sourceMap:!1,shadowMode:!1})},b176:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container flex-column fs"},[e("div",{staticClass:"tab flex-center"},t._l(t.menu,(function(a,o){return e("div",{key:o,staticClass:"btn flex-column",class:{active:t.menuActive===a.value},on:{click:function(a){return t.onMenuClick(o)}}},[e("span",{staticClass:"label"},[t._v(t._s(t.$t("mining."+a.label)))]),e("span",{staticClass:"underscore"})])})),0),e("div",{staticClass:"main"},[e("router-view")],1),e("Footer")],1)},n=[],r=e("b3e2"),i={name:"Totoro",data:function(){return{menu:[{value:0,label:"liquidityMining"},{value:1,label:"tradeMining"}],menuActive:0,dataList:[]}},components:{Footer:r["a"]},props:{},watch:{"$route.name":{handler:function(t){this.menuActive="liquidityMining"===t?0:1},depth:!0}},computed:{},created:function(){},mounted:function(){this.menuActive="liquidityMining"===this.$route.name?0:1},beforeDestroy:function(){},methods:{onMenuClick:function(t){var a=this,e=0===t?"liquidityMining":"tradeMining";this.$route.name!==e&&this.$router.push({name:e}).then((function(){a.menuActive="liquidityMining"===a.$route.name?0:1}))}}},c=i,s=(e("b3d3"),e("2877")),l=Object(s["a"])(c,o,n,!1,null,"38ff69c5",null);a["default"]=l.exports},b3d3:function(t,a,e){"use strict";var o=e("8ee4"),n=e.n(o);n.a}}]);