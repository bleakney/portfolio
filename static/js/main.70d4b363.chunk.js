(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{61:function(e,t,n){},69:function(e,t,n){e.exports={container:"styles_container__2aQSw",text:"styles_text__DutfG",number:"styles_number__3Zial",slopeBegin:"styles_slopeBegin__Z02a8",slopeEnd:"styles_slopeEnd__2FkSu",pink:"styles_pink__1TELn",teal:"styles_teal__1wywx",tomato:"styles_tomato__3fUoc"}},70:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(29),s=n.n(c),r=n(3),o=n(19),l=n(5),d=n(42),j=n.n(d),b=(n(61),n(43)),h=n.n(b),m=n(2);var u=function(e){var t=e.aboutSelected,n=e.setAboutSelected,a=e.workSelected,i=e.setWorkSelected;return Object(m.jsx)("header",{children:Object(m.jsxs)("nav",{children:[Object(m.jsxs)(o.b,{to:"/",onClick:function(){i(!1),n(!1)},children:[" ",Object(m.jsx)("h1",{children:"Bleakney Bissett"})," "]}),Object(m.jsxs)("div",{className:"navlinks-container",children:[Object(m.jsxs)(o.b,{to:"/work",children:[" ",Object(m.jsx)("span",{className:"nav-link navlink-margin ".concat(a&&"navlink-active"),onClick:function(){i(!0),n(!1)},children:"WORK"})," "]}),Object(m.jsx)("span",{className:"navlink-margin",children:" / "}),Object(m.jsxs)(o.b,{to:"/about",children:[" ",Object(m.jsx)("span",{className:"nav-link navlink-margin ".concat(t&&"navlink-active"),onClick:function(){n(!0),i(!1)},children:"ABOUT"})," "]})]})]})})},g=n(46),O=n(16),f=["height","width"];function x(e){var t=e.open,n=e.items,a=Object(O.useTrail)(n.length,{config:{mass:10,tension:210,friction:50},opacity:t?1:0,y:t?0:20,x:t?0:20,height:t?"100vh":"0vh",width:t?"80vw":"0vw",from:{opacity:0,y:20,x:20,height:"0vh",width:"0vw"}}),i=Object(O.useSpring)({from:{opacity:0},to:{opacity:1},delay:4e3});return Object(m.jsxs)("div",{className:"trail-container",children:[Object(m.jsx)("div",{children:a.map((function(e,t){var a=e.height,i=e.width,c=Object(g.a)(e,f);return Object(m.jsx)(O.animated.div,{className:"trail-text",style:c,children:Object(m.jsx)(O.animated.div,{style:{height:a,width:i},children:n[t]})},t)}))}),Object(m.jsxs)(o.b,{to:"/work",children:[" ",Object(m.jsx)(O.animated.span,{style:i,className:"pointer-symbol",children:"\u261e"})," "]})]})}function v(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(m.jsx)("section",{className:"jumbotron-container",onClick:function(){return i((function(e){return!e}))},children:Object(m.jsx)(x,{items:["hi there. welcome to my website.","i'm a former advertising creative","turned UI/UX engineer.","here's some stuff i made.","i hope you like it."],open:n})})}var p=function(){return Object(m.jsx)(v,{})},k=n(23);n(69);var y=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(O.useSpring)({reset:!0,reverse:n,from:{x:0},x:1,delay:100,config:{mass:10,tension:150,friction:1500},onRest:function(){return i(!n)}}).x;return Object(m.jsx)(O.animated.svg,{className:"svg-animated",viewBox:"0 0 207.764 191.057",xmlns:"http://www.w3.org/2000/svg",strokeWidth:.258,strokeDasharray:3341.994873046875,strokeDashoffset:c.to((function(e){return 3341.994873046875*(1-e)})),children:Object(m.jsx)("path",{d:"M21.215 122.485c.022-10.19-.566-20.454.99-30.571 1.1-7.158 3.56-14.146 7.551-20.218 3.154-4.798 7.056-9.132 11.596-12.632.97-.747 2.34-.801 3.408-.22 1.74.948 2.967 2.58 4.05 4.19 2.602 3.869 4.692 8.036 6.944 12.112 1.749 3.164 2.285 6.79 3.098 10.265.667 2.85 1.495 5.79 3.402 8.093.926 1.118 2.177 1.967 3.6 2.312 2.729.66 5.722.126 8.091-1.376 1.247-.791 2.15-2.021 2.678-3.4 1.23-3.206.993-6.722.614-10.067-.456-4.017-1.306-8.078-.702-12.125.417-2.79 1.689-5.385 3.212-7.723 4.151-6.372 10.684-11.054 17.899-13.35 5.962-1.897 12.61-2 18.464.388 2.768 1.129 5.157 2.969 7.405 4.924 2.421 2.107 5.128 4.147 8.347 4.783 2.975.588 5.978-.25 8.804-1.12 4.235-1.306 8.519-2.511 12.918-3.113 4.648-.636 9.341-1.058 14.03-1.01 3.159.033 6.42.047 9.424 1.14 1.298.471 2.633 1.458 2.775 2.932.177 1.85-.748 3.586-1.68 5.107-3.14 5.118-7.345 9.584-9.794 15.118-1.184 2.678-1.828 5.833-.698 8.644 1.23 3.062 4.08 5.084 6.923 6.535 2.866 1.462 5.994 2.266 9.045 3.246 4.343 1.396 7.974 4.361 11.059 7.637 3.372 3.583 6.519 7.394 9.234 11.487 1.635 2.466 2.592 5.34 3.048 8.244.41 2.614.496 5.372-.429 7.896-.627 1.713-2.08 2.907-3.299 4.186-4.049 4.25-8 8.689-12.76 12.146-1.65 1.199-3.388 2.468-5.44 2.85-1.076.201-2.191-.314-2.784-1.23-1.062-1.642-1.384-3.62-1.776-5.5-.732-3.51-1.43-7.18-3.545-10.172a9.527 9.527 0 00-6.656-3.923c-1.434-.157-2.972-.411-4.35.135-2.133.847-3.624 2.781-4.609 4.783-.954 1.942-1.374 4.117-1.29 6.291.238 6.133.818 12.37 2.997 18.158 1.446 3.844 3.895 7.304 7.096 9.889 4.189 3.382 9.132 5.613 13.897 8.037 6.447 3.28 13.474 6.227 18.273 11.655.831.94.846 2.297.74 3.474-.274 3.056-1.223 6.005-2.264 8.873-.925 2.547-2.745 4.827-3.097 7.514-1.127 8.595-2.653 17.27-6.107 25.263-2.038 4.716-4.82 9.345-9.078 12.381-3.119 2.223-7.076 3.113-10.864 2.653-5.073-.615-9.703-3.086-13.83-5.989a52.227 52.227 0 01-5.386-4.323c-1.79-1.652-2.478-4.138-2.617-6.497-.263-4.48.688-8.91.837-13.375.099-2.973-.02-6.17-1.648-8.743-1.498-2.367-4.037-3.936-6.687-4.69-2.163-.614-4.714-.82-6.653.474-1.173.783-2.05 1.924-2.944 2.994-2.692 3.223-4.972 7.061-5.314 11.34-.287 3.592 1.11 7.11 3.176 9.991 3.229 4.503 7.651 7.93 11.845 11.48 2.99 2.532 6.227 4.938 8.41 8.23 1.718 2.592 3.214 5.379 4.084 8.37.511 1.756.992 3.687.399 5.48a2.996 2.996 0 01-1.733 1.824c-5.535 2.182-11.287 4.185-17.28 4.465-3.574.168-7.38-.577-10.158-2.976-2.977-2.571-4.463-6.394-5.38-10.117-1.714-6.954-2.166-14.134-3.566-21.149-1.228-6.15-3.217-12.347-7.19-17.317-3.48-4.351-8.51-7.312-13.872-8.65-4.1-1.024-8.272-1.76-12.456-2.34-5.106-.71-10.307-1.53-15.448-.888-1.975.247-4.137.59-5.648 2.005-1.068 1-1.155 2.625-.714 3.946.865 2.589 2.632 4.759 4.457 6.732 4.667 5.048 10.123 9.273 15.516 13.509 1.558 1.223 3.533 2.041 4.686 3.652.487.68.682 1.55.813 2.366.496 3.088-.088 6.318-1.487 9.098-1.035 2.058-2.718 3.929-5.01 4.617-6.27 1.885-12.937 2.713-19.451 1.832-4.943-.67-9.8-2.54-13.61-5.835-3.672-3.175-6.64-7.335-7.759-12.12-1.167-4.99-.267-10.183 1.178-15.016 2.052-6.866 5.348-13.314 7.039-20.294.628-2.593.846-5.272.718-7.942-.26-5.396-.573-10.898-2.325-16.042-.88-2.582-2.194-5.3-4.67-6.685-2.208-1.235-4.878-.914-7.214-.25-4.313 1.226-8.224 3.642-12.65 4.499-2.045.395-4.334.156-5.986-1.216-2.154-1.788-3.179-4.546-3.826-7.18-1.45-5.908-1.621-12.03-1.676-18.08-.036-3.887-.23-7.837.59-11.652.32-1.483.71-3.152 1.968-4.123 1.132-.873 2.683-.69 3.963-.318 2.83.82 5.484 2.12 8.207 3.228 2.42.984 4.952 1.646 7.427 2.48 3.629 1.223 6.903 3.41 10.642 4.29 1.077.254 2.41.6 3.345-.146.848-.676.833-1.876.767-2.86-.162-2.413-1.586-4.529-3.27-6.177-3.51-3.436-7.873-5.774-11.637-8.911-4.726-3.938-9.881-7.324-14.638-11.225-4.562-3.741-8.993-7.864-11.933-13.048-2.086-3.677-3.057-8.045-2.31-12.246.937-5.268 4.074-9.857 7.694-13.664 5.904-6.21 13.039-11.115 20.426-15.374 5.096-2.938 10.283-6.03 16.088-7.3 2.82-.618 6.061-.71 8.515 1.04 2.424 1.728 3.534 4.694 4.077 7.506 1.046 5.413.79 10.96.737 16.44-.05 5.156-.334 10.39.742 15.462.555 2.616 1.566 5.404 3.861 6.981 2.307 1.586 5.319 1.464 7.92.829 4.26-1.04 8.286-2.937 11.955-5.29 3.577-2.294 6.486-5.546 8.659-9.17 2.037-3.4 3.605-7.254 3.584-11.266-.013-2.443-.677-5.01-2.358-6.842-1.314-1.43-3.325-1.952-5.212-1.909-3.228.074-6.327 1.103-9.408 1.967-3.217.903-6.501 2.12-9.867 1.822a108.157 108.157 0 00-4.85-.295c-2.796-.121-5.653-.152-8.337-1.04-1.477-.489-2.986-1.5-3.346-3.092-.317-1.404-.244-2.873-.054-4.289.614-4.57 2.66-8.924 5.678-12.393 2.29-2.632 5.328-4.706 8.807-5.429 4.655-.967 9.59-.307 13.87 1.757 5.681 2.738 10.183 7.333 14.224 12.072 5.05 5.921 9.277 12.527 14.66 18.161 2.689 2.814 5.742 5.526 9.532 6.713 2.913.913 6.045.269 8.803-.966.657-.294 1.427-.226 2.141-.271 6.96-.435 13.97-.763 20.915-.04 3.05.317 6.195.63 9 1.942 1.176.55 2.503 1.446 2.603 2.852.11 1.534-.899 2.878-1.907 3.914-2.758 2.837-6.246 4.805-9.584 6.876-2.432 1.508-5.216 2.53-7.29 4.575-1.091 1.077-1.803 2.7-1.335 4.23.62 2.029 2.344 3.481 4.064 4.584 3.74 2.398 7.998 3.918 12.326 4.813 3.305.683 6.75 1.27 10.099.66 1.35-.247 2.953-.67 3.606-1.987.637-1.283.04-2.763-.655-3.888-1.392-2.252-3.933-3.516-6.464-3.997-3.813-.726-7.833-.187-11.386 1.337-2.172.93-4.125 2.369-5.61 4.232-5.114 6.41-9.365 13.589-11.975 21.38-2.051 6.126-3.02 12.76-1.79 19.17.864 4.505 3.092 8.675 6.109 12.11 4.774 5.436 10.98 9.344 17.237 12.85 8.19 4.591 16.896 8.264 24.775 13.395 4.076 2.655 8.072 5.731 10.666 9.931 1.947 3.154 2.605 7.024 1.923 10.664-.83 4.423-3.591 8.264-6.96 11.142-4.19 3.582-9.366 6.129-14.845 6.846-2.293.301-4.668.336-6.92-.248-.845-.219-1.547-.98-1.51-1.889.065-1.534.867-2.91 1.656-4.178 2.753-4.419 6.248-8.35 8.7-12.964a13.252 13.252 0 001.452-4.72c.225-1.98.33-4.039-.239-5.975-.253-.862-.92-1.832-1.92-1.729-4.856.503-9.763 1.19-14.333 2.97-2.939 1.144-5.887 2.78-7.65 5.477-1.168 1.787-1.84 4.015-1.342 6.146.723 3.083 2.412 5.826 4.113 8.453 3.98 6.142 8.872 11.708 12.238 18.227 1.258 2.435 2.465 5.073 2.372 7.88-.062 1.858-1.185 3.557-2.765 4.503-2.722 1.63-5.98 2.027-9.086 2.15-7.284.29-14.571-.557-21.726-1.826-7.635-1.354-15.559-1.996-23.213-.365-3.7.789-7.158 2.363-10.553 3.995-2.135 1.026-4.42 2.19-6.86 1.898-2.63-.314-4.87-1.946-6.784-3.659-3.06-2.739-5.83-5.794-8.425-8.971-3.55-4.347-6.97-8.97-8.893-14.284-1.01-2.789-1.71-5.91-.842-8.821a6.104 6.104 0 013.055-3.683c.603-.308 1.565.081 1.248.87-.378.938-1.051 1.73-1.703 2.49-1.88 2.194-4.053 4.228-6.671 5.492-1.424.688-3.204 1.235-4.69.446-1.093-.581-1.749-1.702-2.316-2.752-1.778-3.295-2.063-7.13-2.096-10.803-.046-5 .676-10.104-.51-15.006-.242-.998-.353-2.088-.931-2.946-.893-1.325-2.558-1.804-4.047-2.044-3.663-.59-7.396-.333-11.075-.058-6.627.496-13.217 1.665-19.87 1.628-2.23-.012-4.54-.02-6.652-.836-.966-.374-2.018-1.247-1.838-2.332.113-.685.732-1.173 1.203-1.639 3.498-3.459 7.216-6.684 10.831-10.017 7.47-6.886 15.001-13.787 21.427-21.675 2.848-3.496 5.731-7.105 7.399-11.33.808-2.045 1.407-4.47.406-6.556-.895-1.866-2.94-2.722-4.807-3.322-4.49-1.443-8.979-3.113-13.678-3.65-1.542-.177-3.208-.404-4.678.238-.897.392-1.281 1.41-1.251 2.338.065 2.008.739 3.925 1.173 5.87.578 2.594.85 5.455-.36 7.915-1.057 2.147-2.992 3.84-5.21 4.684-2.694 1.025-5.752 1.213-8.514.338-1.72-.546-3.23-1.793-3.924-3.515-2.266-5.623-4.112-11.556-4.187-17.672-.053-4.316 1.108-8.646 3.415-12.307 2.95-4.679 7.24-8.326 11.718-11.469 1.432-1.005 2.784-2.151 4.331-2.971 3.47-1.838 7.568-1.837 11.082-3.565 1.736-.853 3.193-2.57 3.221-4.558.026-1.836-1.198-3.363-2.369-4.652-1.872-2.06-4.315-3.76-5.43-6.368-.562-1.311-.885-2.711-1.213-4.094-1.09-4.592-1.73-9.408-.881-14.097.598-3.306 2.209-6.49 4.827-8.653 2.51-2.075 5.682-3.258 8.888-3.675 2.439-.317 5.043.202 6.994 1.762 2.416 1.933 3.769 4.825 4.895 7.632 1.546 3.852 2.57 7.932 4.616 11.57.755 1.343 1.816 2.472 2.971 3.488 6.287 5.531 12.74 11.03 20.201 14.926 4.504 2.352 9.407 4.669 14.511 4.455 1.876-.079 3.673-.739 5.392-1.437a66.571 66.571 0 0015.871-9.208c4.411-3.445 8.552-7.45 11.238-12.417 1.858-3.435 2.754-7.52 1.819-11.375-.708-2.918-2.233-5.659-4.375-7.742-2.167-2.107-5.284-2.908-8.235-2.89-4.206.027-8.386 1.372-11.872 3.717a15.465 15.465 0 00-4.617 4.896c-2.45 4.094-3.804 8.812-4.12 13.555-.264 3.966.18 8.1 2.027 11.678.926 1.793 2.376 3.242 3.97 4.461 4.297 3.287 9.622 4.842 14.895 5.688 8.433 1.354 17.096 1.148 25.394 3.352 3.237.86 6.31 2.26 9.157 4.027 8.153 5.059 15.318 11.774 20.704 19.72 4.517 6.664 7.767 14.399 8.185 22.518.334 6.51-1.52 13.054-5.028 18.537-4.584 7.166-11.458 12.571-18.804 16.683-2.075 1.162-4.634.941-6.773.076-3.493-1.413-6.397-4-8.727-6.908-2.644-3.299-4.78-7.125-5.586-11.309-.48-2.49-.273-5.175.988-7.43 1.729-3.092 4.9-5.103 8.192-6.186 4.76-1.566 9.974-1.684 14.821-.458 3.322.84 6.474 2.493 8.848 5.02 5.013 5.339 8.285 12.132 10.102 19.176 1.99 7.715 2.537 15.954.615 23.717-.994 4.01-2.372 7.922-3.958 11.733-3.46 8.314-7.938 16.312-14.002 23.012-4.482 4.953-9.974 9.24-16.42 11.252-6.385 1.993-13.333 1.503-19.653-.495-7.824-2.474-14.858-6.845-21.653-11.347-8.357-5.537-16.321-11.842-25.492-15.982-2.936-1.326-5.417-3.435-7.885-5.464-3.066-2.521-5.926-5.356-9.354-7.38-1.268-.748-2.656-1.554-4.18-1.465-1.185.07-1.965 1.142-2.28 2.195-1.446 4.844-1.02 10.05.308 14.868 2.122 7.706 6.037 14.734 8.97 22.132 1.731 4.368 3.423 8.897 3.585 13.62.1 2.941-.275 5.957-1.445 8.665-.615 1.425-1.469 2.981-2.997 3.556-1.204.453-2.477-.055-3.644-.353-7.27-1.86-14.26-4.696-20.992-7.974-8.523-4.15-16.877-8.86-24.12-15.01-3.893-3.305-7.648-6.998-9.972-11.609-1.45-2.878-2.057-6.34-.908-9.435 1.32-3.556 4.384-6.115 7.56-7.99 4.312-2.549 9.023-4.454 13.894-5.514a1.036 1.036 0 00.679-1.548c-.736-1.286-1.927-2.224-3.012-3.201-1.918-1.729-4-3.363-5.418-5.553-.65-1.005-1.08-2.378-.417-3.48.832-1.385 2.425-2.056 3.886-2.554 2.552-.868 5.252-1.126 7.894-1.598 2.457-.44 4.599-2.022 5.967-4.084 2.012-3.031 2.858-6.661 3.354-10.215 1.049-7.527.828-15.14.93-22.716.062-4.603.095-9.27-.91-13.786-.577-2.594-1.7-5.22-3.847-6.899-2.279-1.782-5.132-2.53-7.824-3.443-2.355-.799-4.773-1.523-6.926-2.777-2.008-1.17-3.486-3.02-5.324-4.413z",fill:"none",stroke:"#FFF",transform:"matrix(0 .9363 -.90896 0 244.746 -3.106)"})})};function w(e){var t=e.offset;e.gradient,e.onClick;return Object(m.jsxs)("div",{className:"project-page-container",children:[Object(m.jsx)(k.b,{offset:t,speed:.6,children:Object(m.jsx)("div",{className:"svg-container centered",children:Object(m.jsx)(y,{})})}),Object(m.jsx)(k.b,{offset:t,children:Object(m.jsxs)("div",{className:"project-image-container centered",children:[Object(m.jsx)("img",{className:"project-page-image",src:["./images/free-maps.png","./images/movie-date.png","./images/broadcastr.png"][t]}),Object(m.jsx)("div",{className:"project-title-container",children:Object(m.jsx)("h1",{children:["Free Maps","Movie Date","broadcastr"][t]})})]})}),Object(m.jsx)(k.b,{offset:t,speed:.1})]})}var N=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1]);return Object(m.jsx)("section",{className:"work-section",children:Object(m.jsxs)(k.a,{pages:3,horizontal:!0,children:[Object(m.jsx)(w,{offset:0,gradient:"pink",onClick:function(){return n(1)}}),Object(m.jsx)(w,{offset:1,gradient:"teal",onClick:function(){return n(2)}}),Object(m.jsx)(w,{offset:2,gradient:"tomato",onClick:function(){return n(0)}})]})})};var S=function(){return Object(m.jsx)(N,{})};function _(){return Object(m.jsxs)("section",{className:"about-section",children:[Object(m.jsx)("h1",{children:"ABOUT ME"}),Object(m.jsxs)("div",{className:"about-content",children:[Object(m.jsxs)("div",{className:"about-image-container",children:[Object(m.jsx)("img",{src:"./images/me.jpg",alt:"headshot",style:{borderRadius:"50%"}}),Object(m.jsxs)("div",{className:"social-links-container",children:[Object(m.jsx)("a",{className:"svg-link-container",href:"https://github.com/bleakney",children:Object(m.jsx)("img",{src:"./images/svg/github.svg",alt:"linkedIn"})}),Object(m.jsx)("a",{className:"svg-link-container",href:"https://linkedin.com/in/bleakney-bissett",children:Object(m.jsx)("img",{src:"./images/svg/linkedin.svg",alt:"linkedIn"})}),Object(m.jsx)("a",{className:"svg-link-container",href:"mailto:bleakneybissett@gmail.com",children:Object(m.jsx)("img",{src:"./images/svg/envelope.svg",alt:"linkedIn"})})]})]}),Object(m.jsx)("div",{style:{width:"40%"},children:Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"paragraph-start",children:"G"}),"lad you asked. I'm a full-stack web developer experienced with the MERN stack. I received my B.S. in Advertising from the University of Texas at Austin in 2020. While there, I applied and was accepted to Texas Creative, a highly competitive portfolio program where I earned my chops at art direction and copywriting. I learned a ",Object(m.jsx)("span",{style:{fontStyle:"italic"},children:"lot"}),", including the fact that I didn't particularly want to work in advertising. Sometime after that we had a pandemic, and I needed a hobby. Boredom and curiosity led to me start fiddling around with coding, and it turns out, I loved it. I went back to UT and enrolled in their 6-month Full-Stack Coding Bootcamp, graduating with a 97.2 average. I love design and I love writing code. If you're looking to hire someone who can do both, drop me a line."]})})]})]})}var I=function(){return Object(m.jsx)(_,{})};var C=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),s=Object(r.a)(c,2),d=s[0],b=s[1];Object(a.useEffect)((function(){h.a.load({google:{families:["Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900","Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"]}})}));var g=Object(a.useState)(0),O=Object(r.a)(g,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){return f||x(j()({el:"#root",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,baseColor:852223})),function(){f&&f.destroy()}}),[f]),Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"vanta-container",children:[Object(m.jsx)(u,{aboutSelected:n,setAboutSelected:i,workSelected:d,setWorkSelected:b}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(m.jsx)(l.a,{exact:!0,path:"/work",component:S}),Object(m.jsx)(l.a,{exact:!0,path:"/about",component:I})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),B()}},[[70,1,2]]]);
//# sourceMappingURL=main.70d4b363.chunk.js.map