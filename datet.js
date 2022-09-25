"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.DateT=exports.Date=void 0;class DateT extends Date{format(format){const T=this.getTime(),YYYY=this.getFullYear().toString(),YY=YYYY.substring(2),M=this.getMonth()+1,MM=(10>M?"0":"")+M,D=this.getDate(),DD=(10>D?"0":"")+D,startday=new Date(YYYY+"-01-01"),diff=T-startday.getTime()+1e3*(60*(startday.getTimezoneOffset()-this.getTimezoneOffset()));let DDDa=Math.floor(diff/(24*(60*(1e3*60))));DDDa=(10>DDDa?"0":"")+DDDa,DDDa=(100>DDDa?"0":"")+DDDa;const DDD=DDDa,h=this.getHours(),hh=(10>h?"0":"")+h,hm=h%12,hhm=(10>hm?"0":"")+hm,m=this.getMinutes(),mm=(10>m?"0":"")+m,mmmm=60*h+m,s=this.getSeconds(),ss=(10>s?"0":"")+s;let CCC=this.getMilliseconds();10>CCC?CCC="00"+CCC:100>CCC&&(CCC="0"+CCC);const CC=CCC.toString().slice(0,-1),C=CC.toString().slice(0,-1);let DH="";1<=1*hh&&3>=1*hh?DH="Night":1<=4*hh&&5>=1*hh?DH="Daybreak":6<=1*hh&&8>=1*hh?DH="Morning":9<=1*hh&&12>=1*hh?DH="Daytime":13<=1*hh&&17>=1*hh?DH="Afternoon":18<=1*hh&&21>=1*hh?DH="Evening":(22<=1*hh&&24>=1*hh||0==1*hh)&&(DH="Night");let DHK="";1<=1*hh&&5>=1*hh?DHK="\uC0C8\uBCBD":6<=1*hh&&8>=1*hh?DHK="\uC544\uCE68":9<=1*hh&&12>=1*hh?DHK="\uB0AE":13<=1*hh&&17>=1*hh?DHK="\uC624\uD6C4":18<=1*hh&&21>=1*hh?DHK="\uC800\uB141":(22<=1*hh&&24>=1*hh||0==1*hh)&&(DHK="\uBC24");const APM=13>h?"AM":"PM",APMK=13>h?"\uC624\uC804":"\uC624\uD6C4";return format+="",format=format.replace(/YYYY/g,YYYY),format=format.replace(/YY/g,YY),format=format.replace(/MM/g,MM),format=format.replace(/M/g,M),format=format.replace(/DDD/g,DDD),format=format.replace(/DD/g,DD),format=format.replace(/D/g,D),format=format.replace(/hhm/g,hhm),format=format.replace(/hm/g,hm),format=format.replace(/hh/g,hh),format=format.replace(/h/g,h),format=format.replace(/mmmm/g,mmmm),format=format.replace(/mm/g,mm),format=format.replace(/m/g,m),format=format.replace(/sssss/g,60*mmmm+s),format=format.replace(/ss/g,ss),format=format.replace(/s/g,s),format=format.replace(/CCC/g,CCC),format=format.replace(/CC/g,CC),format=format.replace(/C/g,C),format=format.replace(/T/g,T),format=format.replace(/GK/g,DHK),format=format.replace(/G/g,DH),format=format.replace(/NK/g,APMK),format=format.replace(/N/g,APM),format}compare(target,options={}){function ko_kr(){if(0==P)return"\uC9C0\uAE08";if(0<P){if(P>=365*(24*(60*(1e3*60)))){const Y=Math.floor(P/(365*(24*(60*(1e3*60)))));return options.number?Y+"\uB144 \uC804":1===Y?"\uC791\uB144":2===Y?"\uC7AC\uC791\uB144":Y+"\uB144 \uC804"}if(P>=30*(24*(60*(60*1e3)))){if("Y"==options.detail)return"\uBC29\uAE08 \uC804";const M=Math.floor(P/(30*(24*(60*(60*1e3)))));return options.number?M+"\uAC1C\uC6D4 \uC804":1===M?"\uD55C \uB2EC \uC804":2===M?"\uB450 \uB2EC \uC804":3===M?"\uC138 \uB2EC \uC804":4===M?"\uB124 \uB2EC \uC804":5===M?"\uB2E4\uC12F \uB2EC \uC804":6===M?"\uC5EC\uC12F \uB2EC \uC804":7===M?"\uC77C\uACF1 \uB2EC \uC804":8===M?"\uC5EC\uB35F \uB2EC \uC804":9===M?"\uC544\uD649 \uB2EC \uC804":10===M?"\uC5F4 \uB2EC \uC804":11===M?"\uC5F4\uD55C \uB2EC \uC804":12===M?"\uC5F4\uB450 \uB2EC \uC804":M+"\uAC1C\uC6D4 \uC804"}if(P>=24*(60*(1e3*60))){if("M"==options.detail)return"\uBC29\uAE08 \uC804";const D=Math.floor(P/(24*(60*(1e3*60))));return options.number?D+"\uC77C \uC804":1===D?"\uC5B4\uC81C":2===D?"\uADF8\uC800\uAED8":3===D?"\uC0AC\uD758 \uC804":4===D?"\uB098\uD758 \uC804":5===D?"\uB2F7\uC138 \uC804":6===D?"\uC5FF\uC138 \uC804":7===D?"\uC774\uB808 \uC804":8===D?"\uC5EC\uB4DC\uB808 \uC804":9===D?"\uC544\uD750\uB808 \uC804":10===D?"\uC5F4\uD758 \uC804":15===D?"\uBCF4\uB984 \uC804":D+"\uC77C \uC804"}if(P>=60*(60*1e3)){if("D"==options.detail)return"\uBC29\uAE08 \uC804";const h=Math.floor(P/(60*(60*1e3)));return h+"\uC2DC\uAC04 \uC804"}if(P>=1e3*60){if("h"==options.detail)return"\uBC29\uAE08 \uC804";const m=Math.floor(P/(1e3*60));return m+"\uBD84 \uC804"}if(1e3<=P){if("m"==options.detail)return"\uBC29\uAE08 \uC804";const s=Math.floor(P/1e3);return s+"\uCD08 \uC804"}else{if("s"==options.detail)return"\uBC29\uAE08 \uC804";return P+"\uBC00\uB9AC\uCD08 \uC804"}}else if(0>P){if(P>=365*(24*(60*(1e3*60)))){const Y=Math.floor(P/(365*(24*(60*(1e3*60)))));return options.number?Y+"\uB144 \uD6C4":1===Y?"\uB0B4\uB144":2===Y?"\uB0B4\uD6C4\uB144":Y+"\uB144 \uD6C4"}if(P>=30*(24*(60*(60*1e3)))){if("Y"==options.detail)return"\uC870\uAE08 \uB4A4";const M=Math.floor(P/(30*(24*(60*(60*1e3)))));return options.number?M+"\uAC1C\uC6D4 \uD6C4":1===M?"\uD55C \uB2EC \uD6C4":2===M?"\uB450 \uB2EC \uD6C4":3===M?"\uC138 \uB2EC \uD6C4":4===M?"\uB124 \uB2EC \uD6C4":5===M?"\uB2E4\uC12F \uB2EC \uD6C4":6===M?"\uC5EC\uC12F \uB2EC \uD6C4":7===M?"\uC77C\uACF1 \uB2EC \uD6C4":8===M?"\uC5EC\uB35F \uB2EC \uD6C4":9===M?"\uC544\uD649 \uB2EC \uD6C4":10===M?"\uC5F4 \uB2EC \uD6C4":11===M?"\uC5F4\uD55C \uB2EC \uD6C4":12===M?"\uC5F4\uB450 \uB2EC \uD6C4":M+"\uAC1C\uC6D4 \uD6C4"}if(P>=24*(60*(1e3*60))){if("M"==options.detail)return"\uC870\uAE08 \uB4A4";const D=Math.floor(P/(24*(60*(1e3*60))));return options.number?D+"\uC77C \uD6C4":1===D?"\uB0B4\uC77C":2===D?"\uBAA8\uB798":3===D?"\uC0AC\uD758 \uB4A4":4===D?"\uB098\uD758 \uB4A4":5===D?"\uB2F7\uC138 \uB4A4":6===D?"\uC5FF\uC138 \uB4A4":7===D?"\uC774\uB808 \uB4A4":8===D?"\uC5EC\uB4DC\uB808 \uB4A4":9===D?"\uC544\uD750\uB808 \uB4A4":10===D?"\uC5F4\uD758 \uB4A4":15===D?"\uBCF4\uB984 \uB4A4":D+"\uC77C \uD6C4"}if(P>=60*(60*1e3)){if("D"==options.detail)return"\uC870\uAE08 \uB4A4";const h=Math.floor(P/(60*(60*1e3)));return h+"\uC2DC\uAC04 \uD6C4"}if(P>=1e3*60){if("h"==options.detail)return"\uC870\uAE08 \uB4A4";const m=Math.floor(P/(1e3*60));return m+"\uBD84 \uD6C4"}if(1e3<=P){if("m"==options.detail)return"\uC870\uAE08 \uB4A4";const s=Math.floor(P/1e3);return s+"\uCD08 \uD6C4"}else{if("s"==options.detail)return"\uC870\uAE08 \uB4A4";return P+"\uBC00\uB9AC\uCD08 \uD6C4"}}else return"?"}function en_us(){if(0==p)return"now";if(0<P){if(P>=365*(24*(60*(1e3*60)))){const Y=Math.floor(P/(365*(24*(60*(1e3*60)))));return 1==Y?Y+" year ago":Y+" years ago"}if(P>=30*(24*(60*(60*1e3)))){if("Y"==options.detail)return"just before";const M=Math.floor(P/(30*(24*(60*(60*1e3)))));return 1==M?M+" month ago":M+" months ago"}if(P>=24*(60*(1e3*60))){if("M"==options.detail)return"just before";const D=Math.floor(P/(24*(60*(1e3*60))));return 1==D?D+" day ago":D+" days ago"}if(P>=60*(60*1e3)){if("D"==options.detail)return"just before";const h=Math.floor(P/(60*(60*1e3)));return 1==h?h+" hour ago":h+" hours ago"}if(P>=1e3*60){if("h"==options.detail)return"just before";const m=Math.floor(P/(1e3*60));return 1==m?m+" minute ago":m+" minutes ago"}if(1e3<=P){if("m"==options.detail)return"just before";const s=Math.floor(P/1e3);return 1==s?s+" second ago":s+" seconds ago"}else{if("s"==options.detail)return"just before";const c=p;return 1==c?c+" millisecond ago":c+" milliseconds ago"}}else return 0>P?"future":"?"}target&&target.getTime||(target=new Date(target));const C=this.getTime(),T=target.getTime(),P=C-T;switch(options.lang||(options.lang="ko_kr"),options.detail||(options.detail="m"),options.number||(options.number=!1),options.lang){case"ko_kr":{return ko_kr()}case"en_us":{return en_us()}default:{return ko_kr()}}}stamp(type){return"log"===type?"\x1B[0m\x1B[36m"+new Date().format("YYYY-MM-DD hh:mm:ss")+"\x1B[0m":"logm"===type?"["+new Date().format("YYYY-MM-DD hh:mm:ss.CCC")+"]: ":"db"===type?new Date().format("YYYY-MM-DD;hh-mm-ss"):"["+new Date().format("YYYY-MM-DD hh:mm:ss")+"]: "}}exports.Date=exports.DateT=DateT;var _default=DateT;exports.default=_default;
