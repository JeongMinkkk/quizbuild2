(function(){"use strict";var e={595:function(e,t,s){var r=s(963),n=s(252);function i(e,t){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}var o=s(744);const l={},a=(0,o.Z)(l,[["render",i]]);var u=a,c=s(201),d=s(577);const m={class:"w-full flex justify-center items-center h-full bg-yellow-500"},b={class:"mx-auto w-10/12 lg:w-6/12 flex flex-wrap items-center"},p=(0,n._)("h3",{class:"font-black text-5xl bg-white rounded-md my-5 py-3 ring-offset-4 ring-1 ring-white border-red-600 border-2 px-2 w-full text-center shadow-md"},"퀴즈",-1),h={class:"w-full bg-white p-5 gap-x-5 flex flex-wrap justify-center border rounded"},w={class:"mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-bold"},y={key:0,class:"block lg:inline-block mb-5"},g={class:"w-full bg-white border rounded p-5 mt-5 flex justify-between items-center flex-wrap text-lg"},f={class:"flex justify-around basis-full items-center xl:basis-4/12"},x=(0,n._)("p",{class:"sm:text-sm text-xs btn-primary bg-white rounded-md ring-offset-4 ring-1 ring-slate-200 border-blue-600 border basis-5/12 text-center"},"랜덤설정",-1),v=(0,n._)("option",{value:"0"},"기본",-1),k=(0,n._)("option",{value:"1"},"랜덤",-1),C=[v,k],_={class:"flex justify-around basis-full items-center xl:basis-4/12 my-5 xl:my-0"},z=(0,n._)("p",{class:"sm:text-sm text-xs btn-primary bg-white rounded-md ring-offset-4 ring-1 ring-slate-200 border-blue-600 border basis-5/12 text-center"},"문제유형",-1),L={value:"전체"},q=["value"],T={class:"flex justify-around basis-full items-center xl:basis-4/12"},j=(0,n._)("p",{class:"sm:text-sm text-xs btn-primary bg-white rounded-md ring-offset-4 ring-1 ring-slate-200 border-blue-600 border basis-5/12 text-center"},"개수설정",-1),N=["value"],S={class:"fixed bg-white/90 left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg duration-700 transition-all w-3/4 sm:w-2/4 lg:w-1/6 error opacity-0 invisible text-center font-bold"},M=(0,n._)("h3",{class:"bg-yellow-300 p-2 pl-4"},"경고창",-1),D={class:"p-4 py-6"};function Q(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",b,[p,(0,n._)("div",h,[(0,n.wy)((0,n._)("input",{onKeyup:t[0]||(t[0]=(0,r.D2)(((...t)=>e.NameChk&&e.NameChk(...t)),["enter"])),onInput:t[1]||(t[1]=t=>e.chk()),type:"text",class:"border pl-4 py-2 rounded bg-yellow-300 shadow-md outline-none basis-full sm:basis-5/12 font-bold rotate-2","onUpdate:modelValue":t[2]||(t[2]=t=>e.userName=t)},null,544),[[r.nr,e.userName]]),(0,n._)("button",{onClick:t[3]||(t[3]=t=>e.NameChk()),class:"text-sm sm:text-base btn-primary hover:bg-amber-400 hover:border-amber-500 hover:border hover:ring-amber-500 bg-white rounded-md ring-offset-4 ring-1 ring-white border border-amber-500 sm:py-0 basis-full sm:basis-3/12 mt-5 sm:mt-0"},"시작하기"),(0,n._)("div",w,[""!=e.userName?((0,n.wg)(),(0,n.iD)("span",y,(0,d.zw)(e.userName)+" 님 반갑습니다.",1)):(0,n.kq)("",!0),(0,n.Uk)("문제 유형은 "+(0,d.zw)("0"===e.selectRandom?"기본":"랜덤")+"이며, "+(0,d.zw)(e.selectType)+" 카테고리를 선택 하였으며, 총 "+(0,d.zw)(e.dataList.length)+"개의 문제 중 "+(0,d.zw)(e.selectCount)+" 문제를 선택하셨습니다.",1)])]),(0,n._)("div",g,[(0,n._)("div",f,[x,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.selectRandom=t),class:"border rounded basis-6/12 pt-1 text-center font-bold py-2 shadow-sm"},C,512),[[r.bM,e.selectRandom]])]),(0,n._)("div",_,[z,(0,n.wy)((0,n._)("select",{onChange:t[5]||(t[5]=t=>e.selectCount=1),"onUpdate:modelValue":t[6]||(t[6]=t=>e.selectType=t),class:"border rounded basis-6/12 pt-1 text-center font-bold py-2 shadow-sm"},[(0,n._)("option",L,"전체 ("+(0,d.zw)(e.dataList.length)+"문제)",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.uniqueTypes,((t,s)=>((0,n.wg)(),(0,n.iD)("option",{key:t,value:t},(0,d.zw)(t)+"("+(0,d.zw)(e.cateCount[s])+"문제)",9,q)))),128))],544),[[r.bM,e.selectType]])]),(0,n._)("div",T,[j,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[7]||(t[7]=t=>e.selectCount=t),class:"border rounded basis-6/12 pt-1 text-center font-bold py-2 shadow-sm"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cateList.length,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e,value:e},(0,d.zw)(e)+"문제",9,N)))),128))],512),[[r.bM,e.selectCount]])])]),(0,n._)("div",S,[M,(0,n._)("p",D,(0,d.zw)(e.errorMsg),1)])])])}var O=JSON.parse('{"QuizList":[{"id":1,"question":"HTML의 의미를 보기에서 고르세요!","answer":"Hyper Text Markup Language","view":{"number1":"Hyperlinks and Text Markup Language","number2":"Home Tool Markup Language","number3":"Hyper Text Markup Language","number4":"Hyperlinks Tool Markup Language"},"type":"html","hint":"1번째 힌트"},{"id":2,"question":"태그요소 p의 display 속성을 고르세요!","answer":"block","view":{"number1":"inline","number2":"block","number3":"flex","number4":"inline-block"},"type":"html","hint":"2번째 힌트"},{"id":3,"question":"position의 기본값을 고르세요!","answer":"static","view":{"number1":"relative","number2":"absolute","number3":"fixed","number4":"static"},"type":"html","hint":"3번째 힌트"},{"id":4,"question":"이미지 태그에서 웹표준을 위해 반드시 작성해야하는 속성을 고르세요!","answer":"alt","view":{"number1":"title","number2":"alt","number3":"type","number4":"for"},"type":"html","hint":"4번째 힌트"},{"id":5,"question":"CSS의 의미를 보기에서 고르세요!","answer":"Cascading style Sheets","view":{"number1":"Cascading style Sheets","number2":"Computer style Sheets","number3":"Creative style Sheets","number4":"Colorful style Sheets"},"type":"css","hint":"폭포가 되어 떨어지다."},{"id":6,"question":"css를 활용해 배경색을 변경하고자 한다. 올바른 속성은?","answer":"background-color","view":{"number1":"background-color","number2":"backgroundcolor","number3":"bgcolor","number4":"backcolor"},"type":"css","hint":"배경-색 속성을 사용한다."},{"id":7,"question":"HTML 내 자바스크립트 파일을 링크해서 사용하고자 한다. 올바른 방법은?","answer":"<script src=\'script.js>","view":{"number1":"<script src=\'script.js>","number2":"<script href=\'script.js>","number3":"<script name=\'script.js>","number4":"<script type=\'script.js>"},"type":"js","hint":"소스"},{"id":8,"question":"경고창을 띄우고자 한다. 올바른 방법은?","answer":"alert(\'메세지\')","view":{"number1":"alert(\'메세지\')","number2":"msgBox(\'메세지\')","number3":"msg(\'메세지\')","number4":"alertBox(\'메세지\')"},"type":"js","hint":"알리다 라는 영어단어를 사용한다."},{"id":9,"question":"콘솔창에 데이터를 확인하고자 한다. 올바른 방법은?","answer":"console.log(데이터)","view":{"number1":"onsole.log(데이터)","number2":"onsole.data(데이터)","number3":"onsole(데이터)","number4":"log(데이터)"},"type":"js","hint":"힌트당"}]}'),U=(0,n.aZ)({name:"HomeView",data(){return{errorMsg:"이름을 입력해주세요",userName:"",dataList:[],selectRandom:"0",selectType:"전체",selectCount:1}},methods:{chk(){const e=/^[가-힣]*$/;e.test(this.userName)||(this.userName=this.userName.replace(/[^가-힣]*/,""))},NameChk(){if(this.userName){const e={name:"QuizView",query:{userName:this.userName,selectRandom:this.selectRandom,selectType:this.selectType,selectCount:this.selectCount},replace:!1};this.$router.push(e)}else{const e=document.querySelector(".error");null===e||void 0===e||e.classList.remove("invisible","opacity-0","top-[48%]"),null===e||void 0===e||e.classList.add("top-1/2","opacity-1"),setTimeout((()=>{null===e||void 0===e||e.classList.add("invisible","opacity-0","top-[48%]"),null===e||void 0===e||e.classList.remove("top-1/2","opacity-1")}),2500)}}},computed:{uniqueTypes(){return[...new Set(this.dataList.map((e=>e.type)))]},cateCount(){return this.uniqueTypes.map((e=>this.dataList.filter((t=>e===t.type)).length))},cateList(){return this.dataList.filter((e=>"전체"!==this.selectType?e.type===this.selectType:e.type))}},created(){this.dataList=O.QuizList},mounted(){var e;null===(e=document.querySelector("input"))||void 0===e||e.focus()}});const H=(0,o.Z)(U,[["render",Q]]);var R=H;const V={class:"w-full flex items-center justify-center flex-wrap h-auto note"},$={class:"mx-auto w-10/12 lg:w-7/12 flex items-center flex-wrap"},Z={class:"h-5 bg-gray-300 mt-4 basis-full relative rounded-lg shadow-md"},K={key:0,class:"absolute right-2 -top-4 text-xs font-bold"},P={key:1,class:"absolute right-2 -top-4 font-bold text-xs"},Y={class:"absolute right-2 top-0.5 text-xs"},B={class:"font-bold basis-full text-center text-red-500 text-2xl lg:text-3xl mt-5 sm:mt-10 bg-white rounded-lg p-2 border border-slate-700 shadow-md py-4"},W=(0,n._)("span",{class:"text-black ml-1.5"},"님 반갑습니다.",-1),E={key:0,class:"bg-white font-semibold rounded-lg mt-5 sm:mt-10 mb-20 p-8 basis-full border border-slate-600 shadow-md"},F={class:"bg-yellow-300 px-5 py-0.5 shadow-md"},I={class:"text-base sm:text-xl mt-4"},J={class:"flex mt-6 flex-wrap justify-between"},A=["onClick"],G={class:"break-all text-center basis-10/12"},X={class:"flex justify-between items-center flex-wrap py-4"},ee={key:0},te={key:1},se={key:1,class:"font-bold pt-24 pb-96 mx-auto"},re={class:"opacity-90 border-b-4 border-red-500 text-xl sm:text-2xl"};function ne(e,t,s,r,i,o){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",$,[(0,n._)("div",Z,[e.current!=Number(e.selectCount)?((0,n.wg)(),(0,n.iD)("p",K,(0,d.zw)(e.current+1)+" / "+(0,d.zw)(e.selectCount),1)):((0,n.wg)(),(0,n.iD)("p",P,"종료")),(0,n._)("p",Y,(0,d.zw)(e.progress+"%"),1),(0,n._)("div",{class:"h-5 rounded-lg bg-yellow-300 transition-all duration-500",style:(0,d.j5)({width:`${e.progress}%`})},null,4)]),(0,n._)("h3",B,[(0,n.Uk)('" '+(0,d.zw)(e.userName)+' "',1),W]),e.current<Number(e.selectCount)?((0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("span",F,(0,d.zw)(e.current+1)+"번 문제",1),(0,n._)("p",I,(0,d.zw)(e.selectQuestion[e.current].question),1),(0,n._)("ul",J,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.randomView[e.current],((t,s)=>((0,n.wg)(),(0,n.iD)("li",{onClick:s=>{e.current++,e.SelectValue(t),e.hintUse=!1},class:"cursor-pointer font-bold basis-full lg:basis-[49%] rounded-lg mb-6 border p-2.5 lg:p-5 hover:border-orange-500 hover:border-2 transition-all duration-500 flex text-sm md:text-base",key:s},[(0,n._)("span",null,(0,d.zw)(s+1)+" 번 :",1),(0,n._)("span",G,(0,d.zw)(t[1]),1)],8,A)))),128))]),(0,n._)("div",X,[(0,n._)("button",{onClick:t[0]||(t[0]=t=>{e.useHint()}),class:"btn-primary bg-red-400 hover:bg-red-600 focus:ring-red-400 hover:text-white basis-4/12 sm:basis-2/12 xl:basis-2/12 text-sm md:text-lg"},"힌트:"+(0,d.zw)(e.hint)+"개",1),e.hintUse?((0,n.wg)(),(0,n.iD)("p",ee,(0,d.zw)(e.dataList.QuizList[e.current].hint),1)):e.hint<1?((0,n.wg)(),(0,n.iD)("p",te,"힌트를 모두 사용하셨습니다.")):(0,n.kq)("",!0),(0,n.Wm)(l,{to:"/",class:"btn-primary bg-red-400 hover:bg-red-600 focus:ring-red-400 hover:text-white basis-4/12 sm:basis-2/12 text-center text-sm md:text-lg"},{default:(0,n.w5)((()=>[(0,n.Uk)("처음으로")])),_:1})])])):((0,n.wg)(),(0,n.iD)("div",se,[(0,n._)("span",re,(0,d.zw)(e.resultScore)+"개 맞음 "+(0,d.zw)(Math.floor(e.resultScore/e.dataList.QuizList.length*100))+"점임",1),(0,n.Wm)(l,{to:"/",class:"btn-primary bg-yellow-300 hover:bg-yellow-500 focus:ring-green-400 basis-4/12 sm:basis-2/12 text-center text-lg md:text-xl ml-6 hover:text-white"},{default:(0,n.w5)((()=>[(0,n.Uk)("처음으로")])),_:1})]))])])}var ie=(0,n.aZ)({neme:"QuizView",data(){return{dataList:O,current:0,userSelect:[],hint:3,hintUse:!1,userName:this.$route.query.userName,selectRandom:this.$route.query.selectRandom,selectType:this.$route.query.selectType,selectCount:this.$route.query.selectCount,MaxCount:0}},methods:{SelectValue(e){this.userSelect.push(e[1]),console.log(this.userSelect)},useHint(){this.hintUse||this.hint<1||(this.hint--,this.hintUse||(this.hintUse=!0))},questionCount(){this.MaxCount=this.dataList.QuizList.filter((e=>"전체"!==this.selectType?e.type===this.selectType:e.type)).length}},computed:{progress(){return Math.floor(this.current/Number(this.selectCount)*100)},resultScore(){return this.selectQuestion.filter(((e,t)=>e.answer===this.userSelect[t])).length},randomView(){return this.selectQuestion.map(((e,t)=>Object.entries(this.selectQuestion[t].view).sort((()=>Math.random()-.5))))},selectQuestion(){return this.dataList.QuizList.filter((e=>"전체"!==this.selectType?e.type===this.selectType:e.type))}},created(){0!=Number(this.selectRandom)&&(this.selectRandom="1"),"1"==this.selectRandom&&this.dataList.QuizList.sort((()=>Math.random()-.5)),this.questionCount(),Number(this.selectCount)>this.MaxCount&&(this.selectCount=this.MaxCount.toString())}});const oe=(0,o.Z)(ie,[["render",ne]]);var le=oe;const ae=[{path:"/",name:"home",component:R},{path:"/quiz",name:"QuizView",component:le,props:e=>({userName:e.query.userName,selectRandom:e.query.selectRandom,selectType:e.query.selectType,selectCount:e.query.selectCount})}],ue=(0,c.p7)({history:(0,c.PO)("/quizbuild2/"),routes:ae});var ce=ue;(0,r.ri)(u).use(ce).mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](r[a])}))?r.splice(a--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,o=r[0],l=r[1],a=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(a)var c=a(s)}for(t&&t(r);u<o.length;u++)i=o[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},r=self["webpackChunkquiz"]=self["webpackChunkquiz"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(595)}));r=s.O(r)})();
//# sourceMappingURL=app.def36265.js.map