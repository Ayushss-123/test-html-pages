(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9656)}])},9281:function(e,t,s){"use strict";var l=s(5893);t.Z=function(e){e.onClose;return(0,l.jsx)("div",{className:"relative rounded-lg bg-color1 w-[900px] flex flex-col p-5 box-border items-start justify-start max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border",children:(0,l.jsx)("iframe",{className:"self-stretch relative h-[560px] shrink-0 sm:h-[50.625vw!important]",src:"https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1",frameBorder:"0",allowFullScreen:!0})})}},3048:function(e,t,s){"use strict";var l=s(5893),r=s(7294),a=s(3935),i=function(e){var t=e.children,s=e.containerId,l=void 0===s?"portals":s,r=document.getElementById(l);return r||((r=document.createElement("div")).setAttribute("id",l),document.body.appendChild(r)),(0,a.createPortal)(t,r)};t.Z=function(e){var t=e.children,s=e.overlayColor,a=e.placement,o=void 0===a?"Centered":a,x=e.onOutsideClick,n=e.zIndex,c=void 0===n?100:n,d=e.left,p=void 0===d?0:d,m=e.right,f=void 0===m?0:m,u=e.top,h=void 0===u?0:u,b=e.bottom,v=void 0===b?0:b,g=e.relativeLayerRef,j=(0,r.useRef)(null),w=(0,r.useState)({}),N=w[0],k=w[1],y=(0,r.useMemo)((function(){var e={};if(e.zIndex=c,s&&(e.backgroundColor=s),!(null===g||void 0===g?void 0:g.current))switch(o){case"Centered":e.alignItems="center",e.justifyContent="center";break;case"Top left":e.alignItems="flex-start";break;case"Top center":e.alignItems="center";break;case"Top right":e.alignItems="flex-end";break;case"Bottom left":e.alignItems="flex-start",e.justifyContent="flex-end";break;case"Bottom center":e.alignItems="center",e.justifyContent="flex-end";break;case"Bottom right":e.alignItems="flex-end",e.justifyContent="flex-end"}return e}),[o,s,c,null===g||void 0===g?void 0:g.current]),C=(0,r.useCallback)((function(){var e,t,s=null===g||void 0===g||null===(e=g.current)||void 0===e?void 0:e.getBoundingClientRect(),l=null===j||void 0===j||null===(t=j.current)||void 0===t?void 0:t.getBoundingClientRect(),r={};if(s&&l){var a=s.x,i=s.y,x=s.width,n=s.height,c=l.width,d=l.height;switch(r.position="absolute",o){case"Top left":r.top=i-d-h,r.left=a+p;break;case"Top right":r.top=i-d-h,r.left=a+x-c-f;break;case"Bottom left":r.top=i+n+v,r.left=a+p;break;case"Bottom right":r.top=i+n+v,r.left=a+x-c-f}k(r)}else r.maxWidth="90%",r.maxHeight="90%",k(r)}),[p,f,h,v,o,null===g||void 0===g?void 0:g.current,null===j||void 0===j?void 0:j.current]);(0,r.useEffect)((function(){return C(),window.addEventListener("resize",C),window.addEventListener("scroll",C,!0),function(){window.removeEventListener("resize",C),window.removeEventListener("scroll",C,!0)}}),[C]);var _=(0,r.useCallback)((function(e){x&&e.target.classList.contains("portalPopupOverlay")&&x(),e.stopPropagation()}),[x]);return(0,l.jsx)(i,{children:(0,l.jsx)("div",{className:"flex flex-col fixed inset-0 portalPopupOverlay",style:y,onClick:_,children:(0,l.jsx)("div",{ref:j,style:N,children:t})})})}},9656:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var l=s(5893),r=s(7294),a=s(8293),i=s(1163),o=function(){return(0,l.jsx)("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font1 text-color1 text-center",children:"View Details"})},x=s(9281),n=s(3048),c=function(){var e=(0,i.useRouter)(),t=(0,r.useState)(!1),s=t[0],c=t[1],d=(0,r.useCallback)((function(){e.push("/homepage")}),[e]),p=(0,r.useCallback)((function(){e.push("/homepage")}),[e]),m=(0,r.useCallback)((function(){e.push("/homepage")}),[e]),f=(0,r.useCallback)((function(){e.push("/results-page")}),[e]),u=(0,r.useCallback)((function(){c(!0)}),[]),h=(0,r.useCallback)((function(){c(!1)}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"relative bg-color1 w-full overflow-hidden flex flex-col items-start justify-start text-left text-lg text-color1 font-font1",children:[(0,l.jsx)("header",{className:"self-stretch bg-color1 h-[77px] shrink-0 flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-xs text-darkslategray-200 font-font1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border",children:(0,l.jsxs)("div",{className:"flex-1 flex flex-row items-center justify-between",children:[(0,l.jsx)("div",{className:"relative w-[174px] h-[33px] shrink-0 overflow-hidden cursor-pointer",onClick:d,children:(0,l.jsx)("div",{className:"absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%]",children:(0,l.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer",alt:"",src:"../webscreen.svg",onClick:p})})}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[36px] sm:flex",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[30px] md:hidden",children:[(0,l.jsx)("div",{className:"relative cursor-pointer",onClick:m,children:"Explore"}),(0,l.jsx)("div",{className:"relative cursor-pointer",onClick:f,children:"Search"}),(0,l.jsx)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-font1 text-cornflowerblue-200 text-left inline-block",children:"Hotels"}),(0,l.jsx)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-font1 text-darkslategray-200 text-left inline-block",children:"Offers"})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center gap-[12px]",children:[(0,l.jsx)("img",{className:"relative w-6 h-6 shrink-0 overflow-hidden hidden md:flex",alt:"",src:"../notification.svg"}),(0,l.jsx)("img",{className:"relative w-6 h-6 shrink-0 overflow-hidden",alt:"",src:"../notification1.svg"}),(0,l.jsx)("img",{className:"rounded-large w-9 h-9 shrink-0 object-cover",alt:"",src:"../top_avatar@2x.png"})]})]})]})}),(0,l.jsx)("div",{className:"self-stretch flex flex-col items-start justify-start text-8xl font-baloo-bhai",children:(0,l.jsxs)("div",{className:"self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] shrink-0 lg:py-[21px] lg:pr-10 lg:pl-[41px] lg:box-border md:py-[21px] md:px-6 md:box-border",children:[(0,l.jsx)("img",{className:"absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"../banner-background@2x.png"}),(0,l.jsxs)("div",{className:"absolute top-[50px] left-[0px] w-[1440px] flex flex-col py-0 px-20 box-border items-start justify-start gap-[8px] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border",children:[(0,l.jsx)("div",{className:"relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-6xl",children:"Stays in Los Angeles"}),(0,l.jsxs)("div",{className:"flex flex-row items-start justify-start gap-[8px] text-center text-base font-font1",children:[(0,l.jsx)("div",{className:"rounded-small bg-color1 flex flex-row py-[11px] px-[21px] items-center justify-center text-cornflowerblue-200 border-[1px] border-solid border-color1",children:(0,l.jsx)("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-xs",children:"Recommended"})}),(0,l.jsx)("div",{className:"rounded-small flex flex-row py-[11px] px-[21px] items-center justify-center border-[1px] border-solid border-color1",children:(0,l.jsx)("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-xs",children:"Price"})}),(0,l.jsx)("div",{className:"rounded-small flex flex-row py-[11px] px-[21px] items-center justify-center border-[1px] border-solid border-color1",children:(0,l.jsx)("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-xs",children:"Rating"})})]})]})]})}),(0,l.jsxs)("div",{className:"self-stretch flex flex-col py-[50px] px-20 items-start justify-start gap-[20px] text-darkslategray-300 lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border",children:[(0,l.jsxs)("div",{className:"self-stretch flex flex-row items-start justify-start",children:[(0,l.jsx)("div",{className:"flex-1 relative tracking-[0.04em] uppercase font-medium",children:"200+ results"}),(0,l.jsxs)("div",{className:"relative w-[86px] h-6 shrink-0 text-base",children:[(0,l.jsx)("img",{className:"absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden",alt:"",src:"../filters.svg"}),(0,l.jsx)("div",{className:"absolute top-[2.5px] left-[0px] tracking-[0.04em]",children:"Filters"})]})]}),(0,l.jsxs)("div",{className:"self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100",children:[(0,l.jsxs)("div",{className:"w-[561.87px] shrink-0 flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]",children:[(0,l.jsxs)("div",{className:"self-stretch rounded-xxs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col",children:[(0,l.jsx)("img",{className:"relative rounded-tl-xxs rounded-tr-none rounded-br-none rounded-bl-xxs w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]",alt:"",src:"../unsplashs6ch7n3eoqy@2x.png"}),(0,l.jsxs)("div",{className:"flex-1 flex flex-col py-[15px] pr-3 pl-0 items-start justify-start gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch",children:[(0,l.jsxs)("div",{className:"self-stretch flex flex-row items-start justify-start",children:[(0,l.jsxs)("div",{className:"flex-1 flex flex-col items-start justify-start gap-[6px]",children:[(0,l.jsx)("div",{className:"relative tracking-[0.02em] inline-block w-[146.92px]",children:"1 king bed standard"}),(0,l.jsx)("b",{className:"relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.87px]",children:"Holiday Inn Expre..."}),(0,l.jsxs)("div",{className:"relative w-[173.91px] h-[19px] shrink-0 text-cornflowerblue-200",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]",children:"(1,136 reviews)"}),(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-darkslategray-300",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]",children:"4.7"}),(0,l.jsx)("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"../vector.svg"})]})]})]}),(0,l.jsx)("img",{className:"relative w-6 h-6 shrink-0 overflow-hidden",alt:"",src:"../video.svg"})]}),(0,l.jsxs)("div",{className:"relative w-[164.49px] h-[83.58px] shrink-0 text-3xl text-darkslategray-300",children:[(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]",children:[(0,l.jsx)("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize",children:"$S 286"}),(0,l.jsx)("div",{className:"absolute top-[8px] left-[73px] text-xs tracking-[0.02em]",children:"/night"})]}),(0,l.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]",children:[(0,l.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),(0,l.jsx)(o,{})]})]})]})]}),(0,l.jsxs)("div",{className:"self-stretch rounded-xxs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col",children:[(0,l.jsx)("img",{className:"relative rounded-tl-xxs rounded-tr-none rounded-br-none rounded-bl-xxs w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]",alt:"",src:"../unsplashs6ch7n3eoqy1@2x.png"}),(0,l.jsxs)("div",{className:"flex-1 flex flex-col py-[15px] pr-3 pl-0 items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch",children:[(0,l.jsx)("div",{className:"self-stretch flex flex-row items-start justify-start",children:(0,l.jsxs)("div",{className:"flex-1 relative h-[76px]",children:[(0,l.jsx)("b",{className:"absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.87px]",children:"Freehand Los Angeles"}),(0,l.jsx)("div",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.79px]",children:"Bed in Quad"}),(0,l.jsxs)("div",{className:"absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-cornflowerblue-200",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]",children:"(1,941 reviews)"}),(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-darkslategray-300",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]",children:"4.2"}),(0,l.jsx)("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"../vector1.svg"})]})]})]})}),(0,l.jsxs)("div",{className:"relative w-[164.49px] h-[83.58px] shrink-0 text-3xl",children:[(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]",children:[(0,l.jsx)("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize",children:"$S 198"}),(0,l.jsx)("div",{className:"absolute top-[8px] left-[73px] text-xs tracking-[0.02em]",children:"/night"})]}),(0,l.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]",children:[(0,l.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),(0,l.jsx)("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font1 text-color1 text-center",children:"View Details"})]})]})]})]}),(0,l.jsxs)("div",{className:"self-stretch rounded-xxs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col",children:[(0,l.jsx)("img",{className:"relative rounded-tl-xxs rounded-tr-none rounded-br-none rounded-bl-xxs w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]",alt:"",src:"../unsplashs6ch7n3eoqy2@2x.png"}),(0,l.jsxs)("div",{className:"flex-1 flex flex-col py-[15px] pr-3 pl-0 items-start justify-start gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch",children:[(0,l.jsx)("div",{className:"self-stretch flex flex-row items-start justify-start",children:(0,l.jsxs)("div",{className:"flex-1 relative h-[76px]",children:[(0,l.jsx)("b",{className:"absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.87px]",children:"The Westin Bonavent..."}),(0,l.jsx)("div",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.79px]",children:"1 King, City view"}),(0,l.jsxs)("div",{className:"absolute top-[57px] left-[0px] w-[202.77px] h-[19px] text-cornflowerblue-200",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]",children:"(1,002 reviews)"}),(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[54.07px] h-[19px] text-darkslategray-300",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.21px]",children:"4.1"}),(0,l.jsx)("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"../vector2.svg"})]})]})]})}),(0,l.jsxs)("div",{className:"relative w-[164.49px] h-[83.58px] shrink-0 text-3xl",children:[(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]",children:[(0,l.jsx)("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize",children:"$S 289"}),(0,l.jsx)("div",{className:"absolute top-[8px] left-[73px] text-xs tracking-[0.02em]",children:"/night"})]}),(0,l.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]",children:[(0,l.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),(0,l.jsx)("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font1 text-color1 text-center",children:"View Details"})]})]})]})]}),(0,l.jsxs)("div",{className:"self-stretch rounded-xxs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col",children:[(0,l.jsx)("img",{className:"relative rounded-tl-xxs rounded-tr-none rounded-br-none rounded-bl-xxs w-[260px] h-[220px] shrink-0 object-cover sm:w-[100%!important] sm:rounded-[10px!important]",alt:"",src:"../unsplashs6ch7n3eoqy3@2x.png"}),(0,l.jsxs)("div",{className:"flex-1 flex flex-col py-[15px] pr-3 pl-0 items-start justify-start gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch",children:[(0,l.jsxs)("div",{className:"self-stretch flex flex-row items-start justify-start",children:[(0,l.jsxs)("div",{className:"flex-1 flex flex-col items-start justify-start gap-[6px]",children:[(0,l.jsx)("div",{className:"relative tracking-[0.02em] inline-block w-[146.92px]",children:"Deluxe King"}),(0,l.jsx)("b",{className:"relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.87px]",children:"The Ritz-Carlton, L..."}),(0,l.jsxs)("div",{className:"relative w-[173.91px] h-[19px] shrink-0 text-cornflowerblue-200",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]",children:"(1,136 reviews)"}),(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-darkslategray-300",children:[(0,l.jsx)("div",{className:"absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]",children:"4.7"}),(0,l.jsx)("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"../vector3.svg"})]})]})]}),(0,l.jsx)("img",{className:"relative w-6 h-6 shrink-0 overflow-hidden cursor-pointer",alt:"",src:"../video1.svg",onClick:u})]}),(0,l.jsxs)("div",{className:"relative w-[164.49px] h-[83.58px] shrink-0 text-3xl text-darkslategray-300",children:[(0,l.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]",children:[(0,l.jsx)("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize",children:"$S 286"}),(0,l.jsx)("div",{className:"absolute top-[8px] left-[73px] text-xs tracking-[0.02em]",children:"/night"})]}),(0,l.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]",children:[(0,l.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),(0,l.jsx)("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font1 text-color1 text-center",children:"View Details"})]})]})]})]}),(0,l.jsx)("iframe",{className:"[border:none] self-stretch relative h-[600px] shrink-0 hidden md:flex md:max-w-[1000px]",src:"https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik"})]}),(0,l.jsx)("iframe",{className:"[border:none] self-stretch flex-1 relative md:hidden",src:"https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik"})]})]}),(0,l.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start text-center text-cornflowerblue-300",children:[(0,l.jsxs)("div",{className:"self-stretch relative bg-aliceblue h-[529px] shrink-0 overflow-hidden",children:[(0,l.jsx)("img",{className:"absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover",alt:"",src:"../newsletter-section-background@2x.png"}),(0,l.jsxs)("div",{className:"[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full",children:[(0,l.jsxs)("div",{className:"self-stretch flex flex-col items-center justify-start gap-[7px]",children:[(0,l.jsx)("b",{className:"self-stretch relative tracking-[0.04em] uppercase",children:"subscribe to our newsletter"}),(0,l.jsx)("b",{className:"self-stretch relative text-5xl text-darkslategray-100",children:"Get weekly updates"})]}),(0,l.jsxs)("div",{className:"self-stretch rounded-xl bg-color1 shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke",children:[(0,l.jsx)("div",{className:"self-stretch flex flex-col items-start justify-start",children:(0,l.jsx)("div",{className:"self-stretch relative leading-[34px]",children:"Fill in your details to join the party!"})}),(0,l.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[10px]",children:[(0,l.jsx)("div",{className:"self-stretch flex flex-col items-start justify-start",children:(0,l.jsx)(a.Z,{className:"[border:none] bg-[transparent] self-stretch",color:"primary",variant:"outlined",type:"text",label:"Your name",size:"medium",margin:"none"})}),(0,l.jsx)("div",{className:"self-stretch flex flex-col items-start justify-start",children:(0,l.jsx)(a.Z,{className:"[border:none] bg-[transparent] self-stretch",color:"primary",variant:"outlined",type:"text",label:"Email address",size:"medium",margin:"none"})})]}),(0,l.jsx)("button",{className:"cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200",children:(0,l.jsx)("div",{className:"overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start",children:(0,l.jsx)("div",{className:"relative text-sm tracking-[0.46px] leading-[26px] uppercase font-medium font-font1 text-color1 text-left",children:"submit"})})})]})]})]}),(0,l.jsxs)("footer",{className:"self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-color1 font-font1 lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border",children:[(0,l.jsxs)("div",{className:"flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch",children:[(0,l.jsx)("img",{className:"relative w-[174px] h-[33px] shrink-0 overflow-hidden",alt:"",src:"../logo.svg"}),(0,l.jsx)("div",{className:"self-stretch relative leading-[27px]",children:"Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop."}),(0,l.jsx)("img",{className:"relative w-[130px] h-[30px] shrink-0",alt:"",src:"../social-icons.svg"})]}),(0,l.jsx)("div",{className:"relative box-border w-px h-[157.87px] shrink-0 border-r-[1px] border-solid border-gray-500 md:hidden"}),(0,l.jsxs)("div",{className:"flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col",children:[(0,l.jsxs)("div",{className:"relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]",children:[(0,l.jsx)("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[135.67px]",children:"About Us"}),(0,l.jsx)("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]",children:"Company"}),(0,l.jsx)("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[84.28px]",children:"News"}),(0,l.jsx)("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[115.11px]",children:"Careers"}),(0,l.jsx)("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[197.33px]",children:"How we work"})]}),(0,l.jsxs)("div",{className:"relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]",children:[(0,l.jsx)("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[109.63px]",children:"Account"}),(0,l.jsx)("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]",children:"Support"}),(0,l.jsx)("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[197.33px]",children:"Support Center"}),(0,l.jsx)("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[52.99px]",children:"FAQ"}),(0,l.jsx)("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[164.44px]",children:"Accessibility"})]}),(0,l.jsxs)("div",{className:"relative w-[197.33px] h-[159.76px] shrink-0",children:[(0,l.jsx)("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[172.87px]",children:"Covid Advisory"}),(0,l.jsx)("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]",children:"More"}),(0,l.jsx)("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[135.36px]",children:"Airline Fees"}),(0,l.jsx)("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[50.56px]",children:"Tips"}),(0,l.jsx)("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[197.33px]",children:"Quarantine Rules"})]})]})]})]})]}),s&&(0,l.jsx)(n.Z,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:h,children:(0,l.jsx)(x.Z,{onClose:h})})]})}}},function(e){e.O(0,[82,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);