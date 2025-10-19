this is the style of the old website. don't import anything from it, except for make boxes, buttons, rounded corners etc the same style. https://amandadelara.com/images/Delara-logo.png

@font-face {
  font-family: 'webflow-icons';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-icon-"],
[class*=" w-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'webflow-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-icon-slider-right:before {
  content: "\e600";
}
.w-icon-slider-left:before {
  content: "\e601";
}
.w-icon-nav-menu:before {
  content: "\e602";
}
.w-icon-arrow-down:before,
.w-icon-dropdown-toggle:before {
  content: "\e603";
}
.w-icon-file-upload-remove:before {
  content: "\e900";
}
.w-icon-file-upload-icon:before {
  content: "\e903";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  margin: 0;
  min-height: 100%;
  background-color: #fff;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
html.w-mod-touch * {
  background-attachment: scroll !important;
}
.w-block {
  display: block;
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
.w-clearfix:before,
.w-clearfix:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-clearfix:after {
  clear: both;
}
.w-hidden {
  display: none;
}
.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
input.w-button {
  -webkit-appearance: button;
}
html[data-w-dynpage] [data-w-cloak] {
  color: transparent !important;
}
.w-webflow-badge,
.w-webflow-badge * {
  position: static;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  z-index: auto;
  display: block;
  visibility: visible;
  overflow: visible;
  overflow-x: visible;
  overflow-y: visible;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  margin: 0;
  padding: 0;
  float: none;
  clear: none;
  border: 0 none transparent;
  border-radius: 0;
  background: none;
  background-image: none;
  background-position: 0% 0%;
  background-size: auto auto;
  background-repeat: repeat;
  background-origin: padding-box;
  background-clip: border-box;
  background-attachment: scroll;
  background-color: transparent;
  box-shadow: none;
  opacity: 1;
  transform: none;
  transition: none;
  direction: ltr;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-align: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: inherit;
  list-style-type: disc;
  text-shadow: none;
  font-smoothing: auto;
  vertical-align: baseline;
  cursor: inherit;
  white-space: inherit;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}
.w-webflow-badge {
  position: fixed !important;
  display: inline-block !important;
  visibility: visible !important;
  z-index: 2147483647 !important;
  top: auto !important;
  right: 12px !important;
  bottom: 12px !important;
  left: auto !important;
  color: #AAADB0 !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  padding: 6px 8px 6px 6px !important;
  font-size: 12px !important;
  opacity: 1 !important;
  line-height: 14px !important;
  text-decoration: none !important;
  transform: none !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.w-webflow-badge > img {
  display: inline-block !important;
  visibility: visible !important;
  opacity: 1 !important;
  vertical-align: middle !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  margin-bottom: 10px;
}
h1 {
  font-size: 38px;
  line-height: 44px;
  margin-top: 20px;
}
h2 {
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
}
h3 {
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;
}
h4 {
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
}
h5 {
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
}
h6 {
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
}
p {
  margin-top: 0;
  margin-bottom: 10px;
}
blockquote {
  margin: 0 0 10px 0;
  padding: 10px 20px;
  border-left: 5px solid #E2E2E2;
  font-size: 18px;
  line-height: 22px;
}
figure {
  margin: 0;
  margin-bottom: 10px;
}
figcaption {
  margin-top: 5px;
  text-align: center;
}
ul,
ol {
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 40px;
}
.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}
.w-embed:before,
.w-embed:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-embed:after {
  clear: both;
}
.w-video {
  width: 100%;
  position: relative;
  padding: 0;
}
.w-video iframe,
.w-video object,
.w-video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}
button,
[type='button'],
[type='reset'] {
  border: 0;
  cursor: pointer;
  -webkit-appearance: button;
}
.w-form {
  margin: 0 0 15px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.w-input,
.w-select {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}
.w-input:-moz-placeholder,
.w-select:-moz-placeholder {
  color: #999;
}
.w-input::-moz-placeholder,
.w-select::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.w-input::-webkit-input-placeholder,
.w-select::-webkit-input-placeholder {
  color: #999;
}
.w-input:focus,
.w-select:focus {
  border-color: #3898EC;
  outline: 0;
}
.w-input[disabled],
.w-select[disabled],
.w-input[readonly],
.w-select[readonly],
fieldset[disabled] .w-input,
fieldset[disabled] .w-select {
  cursor: not-allowed;
}
.w-input[disabled]:not(.w-input-disabled),
.w-select[disabled]:not(.w-input-disabled),
.w-input[readonly],
.w-select[readonly],
fieldset[disabled]:not(.w-input-disabled) .w-input,
fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eeeeee;
}
textarea.w-input,
textarea.w-select {
  height: auto;
}
.w-select {
  background-color: #f3f3f3;
}
.w-select[multiple] {
  height: auto;
}
.w-form-label {
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0px;
}
.w-radio {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
}
.w-radio:before,
.w-radio:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-radio:after {
  clear: both;
}
.w-radio-input {
  margin: 4px 0 0;
  line-height: normal;
  float: left;
  margin-left: -20px;
}
.w-radio-input {
  margin-top: 3px;
}
.w-file-upload {
  display: block;
  margin-bottom: 10px;
}
.w-file-upload-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -100;
}
.w-file-upload-default,
.w-file-upload-uploading,
.w-file-upload-success {
  display: inline-block;
  color: #333333;
}
.w-file-upload-error {
  display: block;
  margin-top: 10px;
}
.w-file-upload-default.w-hidden,
.w-file-upload-uploading.w-hidden,
.w-file-upload-error.w-hidden,
.w-file-upload-success.w-hidden {
  display: none;
}
.w-file-upload-uploading-btn {
  display: flex;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
}
.w-file-upload-file {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
}
.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}
.w-file-remove-link {
  margin-top: 3px;
  margin-left: 10px;
  width: auto;
  height: auto;
  padding: 3px;
  display: block;
  cursor: pointer;
}
.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}
.w-file-upload-error-msg {
  display: inline-block;
  color: #ea384c;
  padding: 2px 0;
}
.w-file-upload-info {
  display: inline-block;
  line-height: 38px;
  padding: 0 12px;
}
.w-file-upload-label {
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
}
.w-icon-file-upload-icon,
.w-icon-file-upload-uploading {
  display: inline-block;
  margin-right: 8px;
  width: 20px;
}
.w-icon-file-upload-uploading {
  height: 20px;
}
.w-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}
.w-container:before,
.w-container:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-container:after {
  clear: both;
}
.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}
.w-row:before,
.w-row:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-row:after {
  clear: both;
}
.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}
.w-col {
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
}
.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}
.w-col-1 {
  width: 8.33333333%;
}
.w-col-2 {
  width: 16.66666667%;
}
.w-col-3 {
  width: 25%;
}
.w-col-4 {
  width: 33.33333333%;
}
.w-col-5 {
  width: 41.66666667%;
}
.w-col-6 {
  width: 50%;
}
.w-col-7 {
  width: 58.33333333%;
}
.w-col-8 {
  width: 66.66666667%;
}
.w-col-9 {
  width: 75%;
}
.w-col-10 {
  width: 83.33333333%;
}
.w-col-11 {
  width: 91.66666667%;
}
.w-col-12 {
  width: 100%;
}
.w-hidden-main {
  display: none !important;
}
@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: none !important;
  }
  .w-col-medium-1 {
    width: 8.33333333%;
  }
  .w-col-medium-2 {
    width: 16.66666667%;
  }
  .w-col-medium-3 {
    width: 25%;
  }
  .w-col-medium-4 {
    width: 33.33333333%;
  }
  .w-col-medium-5 {
    width: 41.66666667%;
  }
  .w-col-medium-6 {
    width: 50%;
  }
  .w-col-medium-7 {
    width: 58.33333333%;
  }
  .w-col-medium-8 {
    width: 66.66666667%;
  }
  .w-col-medium-9 {
    width: 75%;
  }
  .w-col-medium-10 {
    width: 83.33333333%;
  }
  .w-col-medium-11 {
    width: 91.66666667%;
  }
  .w-col-medium-12 {
    width: 100%;
  }
  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}
@media screen and (max-width: 767px) {
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-hidden-small {
    display: none !important;
  }
  .w-row,
  .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }
  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }
  .w-col-small-1 {
    width: 8.33333333%;
  }
  .w-col-small-2 {
    width: 16.66666667%;
  }
  .w-col-small-3 {
    width: 25%;
  }
  .w-col-small-4 {
    width: 33.33333333%;
  }
  .w-col-small-5 {
    width: 41.66666667%;
  }
  .w-col-small-6 {
    width: 50%;
  }
  .w-col-small-7 {
    width: 58.33333333%;
  }
  .w-col-small-8 {
    width: 66.66666667%;
  }
  .w-col-small-9 {
    width: 75%;
  }
  .w-col-small-10 {
    width: 83.33333333%;
  }
  .w-col-small-11 {
    width: 91.66666667%;
  }
  .w-col-small-12 {
    width: 100%;
  }
}
@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-hidden-small {
    display: inherit !important;
  }
  .w-hidden-tiny {
    display: none !important;
  }
  .w-col {
    width: 100%;
  }
  .w-col-tiny-1 {
    width: 8.33333333%;
  }
  .w-col-tiny-2 {
    width: 16.66666667%;
  }
  .w-col-tiny-3 {
    width: 25%;
  }
  .w-col-tiny-4 {
    width: 33.33333333%;
  }
  .w-col-tiny-5 {
    width: 41.66666667%;
  }
  .w-col-tiny-6 {
    width: 50%;
  }
  .w-col-tiny-7 {
    width: 58.33333333%;
  }
  .w-col-tiny-8 {
    width: 66.66666667%;
  }
  .w-col-tiny-9 {
    width: 75%;
  }
  .w-col-tiny-10 {
    width: 83.33333333%;
  }
  .w-col-tiny-11 {
    width: 91.66666667%;
  }
  .w-col-tiny-12 {
    width: 100%;
  }
}
.w-widget {
  position: relative;
}
.w-widget-map {
  width: 100%;
  height: 400px;
}
.w-widget-map label {
  width: auto;
  display: inline;
}
.w-widget-map img {
  max-width: inherit;
}
.w-widget-map .gm-style-iw {
  text-align: center;
}
.w-widget-map .gm-style-iw > button {
  display: none !important;
}
.w-widget-twitter {
  overflow: hidden;
}
.w-widget-twitter-count-shim {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 28px;
  height: 20px;
  text-align: center;
  background: white;
  border: #758696 solid 1px;
  border-radius: 3px;
}
.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  position: relative;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #999;
  font-family: serif;
}
.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  position: relative;
  display: block;
}
.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}
.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}
.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}
.w-widget-twitter-count-shim:not(.w--vertical):before,
.w-widget-twitter-count-shim:not(.w--vertical):after {
  top: 50%;
  left: 0;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-color: rgba(117, 134, 150, 0);
  border-right-color: #5d6c7b;
  border-width: 4px;
  margin-left: -9px;
  margin-top: -4px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-left: -10px;
  margin-top: -5px;
}
.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-color: rgba(255, 255, 255, 0);
  border-right-color: white;
  border-width: 4px;
  margin-left: -8px;
  margin-top: -4px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-left: -9px;
  margin-top: -5px;
}
.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}
.w-widget-twitter-count-shim.w--vertical:before,
.w-widget-twitter-count-shim.w--vertical:after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.w-widget-twitter-count-shim.w--vertical:before {
  border-color: rgba(117, 134, 150, 0);
  border-top-color: #5d6c7b;
  border-width: 5px;
  margin-left: -5px;
}
.w-widget-twitter-count-shim.w--vertical:after {
  border-color: rgba(255, 255, 255, 0);
  border-top-color: white;
  border-width: 4px;
  margin-left: -4px;
}
.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}
.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}
.w-background-video {
  position: relative;
  overflow: hidden;
  height: 500px;
  color: white;
}
.w-background-video > video {
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  object-fit: cover;
  z-index: -100;
}
.w-background-video > video::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}
.w-background-video--control {
  position: absolute;
  bottom: 1em;
  right: 1em;
  background-color: transparent;
  padding: 0;
}
.w-background-video--control > [hidden] {
  display: none !important;
}
.w-slider {
  position: relative;
  height: 300px;
  text-align: center;
  background: #dddddd;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
.w-slider-mask {
  position: relative;
  display: block;
  overflow: hidden;
  z-index: 1;
  left: 0;
  right: 0;
  height: 100%;
  white-space: nowrap;
}
.w-slide {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
}
.w-slider-nav {
  position: absolute;
  z-index: 2;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding-top: 10px;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
.w-slider-nav.w-round > div {
  border-radius: 100%;
}
.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  padding: 0.2em 0.5em;
  font-size: inherit;
  line-height: inherit;
}
.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);
}
.w-slider-nav-invert {
  color: #fff;
}
.w-slider-nav-invert > div {
  background-color: rgba(34, 34, 34, 0.4);
}
.w-slider-nav-invert > div.w-active {
  background-color: #222;
}
.w-slider-dot {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  margin: 0 3px 0.5em;
  transition: background-color 100ms, color 100ms;
}
.w-slider-dot.w-active {
  background-color: #fff;
}
.w-slider-dot:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px #fff;
}
.w-slider-dot:focus.w-active {
  box-shadow: none;
}
.w-slider-arrow-left,
.w-slider-arrow-right {
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  color: white;
  font-size: 40px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-slider-arrow-left [class^='w-icon-'],
.w-slider-arrow-right [class^='w-icon-'],
.w-slider-arrow-left [class*=' w-icon-'],
.w-slider-arrow-right [class*=' w-icon-'] {
  position: absolute;
}
.w-slider-arrow-left:focus,
.w-slider-arrow-right:focus {
  outline: 0;
}
.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}
.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}
.w-icon-slider-left,
.w-icon-slider-right {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 1em;
  height: 1em;
}
.w-slider-aria-label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.w-slider-force-show {
  display: block !important;
}
.w-dropdown {
  display: inline-block;
  position: relative;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  z-index: 900;
}
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  position: relative;
  vertical-align: top;
  text-decoration: none;
  color: #222222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
}
.w-dropdown-toggle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  padding-right: 40px;
}
.w-dropdown-toggle:focus {
  outline: 0;
}
.w-icon-dropdown-toggle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-right: 20px;
  width: 1em;
  height: 1em;
}
.w-dropdown-list {
  position: absolute;
  background: #dddddd;
  display: none;
  min-width: 100%;
}
.w-dropdown-list.w--open {
  display: block;
}
.w-dropdown-link {
  padding: 10px 20px;
  display: block;
  color: #222222;
}
.w-dropdown-link.w--current {
  color: #0082f3;
}
.w-dropdown-link:focus {
  outline: 0;
}
@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}
/**
 * ## Note
 * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.
 * For example percentage units do not work on descendants of elements that
 * have any dimensions expressed in viewport units. It also doesn’t handle them at
 * all in `calc()`.
 */
/**
 * Wrapper around all lightbox elements
 *
 * 1. Since the lightbox can receive focus, IE also gives it an outline.
 * 2. Fixes flickering on Chrome when a transition is in progress
 *    underneath the lightbox.
 */
.w-lightbox-backdrop {
  cursor: auto;
  font-style: normal;
  letter-spacing: normal;
  list-style: disc;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Ubuntu, "Segoe UI", Verdana, sans-serif;
  font-size: 17px;
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  outline: 0;
  /* 1 */
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-transform: translate(0, 0);
  /* 2 */
}
/**
 * Neat trick to bind the rubberband effect to our canvas instead of the whole
 * document on iOS. It also prevents a bug that causes the document underneath to scroll.
 */
.w-lightbox-backdrop,
.w-lightbox-container {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.w-lightbox-content {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.w-lightbox-view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0;
}
.w-lightbox-view:before {
  content: "";
  height: 100vh;
}
/* .w-lightbox-content */
.w-lightbox-group,
.w-lightbox-group .w-lightbox-view,
.w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}
.w-lightbox-frame,
.w-lightbox-view:before {
  display: inline-block;
  vertical-align: middle;
}
/*
 * 1. Remove default margin set by user-agent on the <figure> element.
 */
.w-lightbox-figure {
  position: relative;
  margin: 0;
  /* 1 */
}
.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}
/**
 * IE adds image dimensions as width and height attributes on the IMG tag,
 * but we need both width and height to be set to auto to enable scaling.
 */
.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none;
}
/**
 * 1. Reset if style is set by user on "All Images"
 */
.w-lightbox-image {
  display: block;
  float: none;
  /* 1 */
  max-width: 100vw;
  max-height: 100vh;
}
.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}
.w-lightbox-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.5em 1em;
  background: rgba(0, 0, 0, 0.4);
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.w-lightbox-embed {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.w-lightbox-control {
  position: absolute;
  top: 0;
  width: 4em;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.w-lightbox-left {
  display: none;
  bottom: 0;
  left: 0;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 24 40" width="24" height="40"><g transform="rotate(45)"><path d="m0 0h5v23h23v5h-28z" opacity=".4"/><path d="m1 1h3v23h23v3h-26z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
}
.w-lightbox-right {
  display: none;
  right: 0;
  bottom: 0;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 24 40" width="24" height="40"><g transform="rotate(45)"><path d="m0-0h28v28h-5v-23h-23z" opacity=".4"/><path d="m1 1h26v26h-3v-23h-23z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
}
/*
 * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.
 * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.
 * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)
 */
.w-lightbox-close {
  right: 0;
  height: 2.6em;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 18 17" width="18" height="17"><g transform="rotate(45)"><path d="m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z" opacity=".4"/><path d="m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
}
/**
 * 1. All IE versions add extra space at the bottom without this.
 */
.w-lightbox-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1vh;
  line-height: 0;
  /* 1 */
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
/*
 * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`
 *    which doesn’t work in Safari anyway.
 * 2. Chrome renders images pixelated when switching to GPU. Making sure
 *    the parent is also rendered on the GPU (by setting translate3d for
 *    example) fixes this behavior.
 */
.w-lightbox-item {
  display: inline-block;
  width: 10vh;
  padding: 2vh 1vh;
  box-sizing: content-box;
  /* 1 */
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  /* 2 */
}
.w-lightbox-active {
  opacity: 0.3;
}
.w-lightbox-thumbnail {
  position: relative;
  height: 10vh;
  background: #222;
  overflow: hidden;
}
.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}
.w-lightbox-thumbnail .w-lightbox-tall {
  top: 50%;
  width: 100%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.w-lightbox-thumbnail .w-lightbox-wide {
  left: 50%;
  height: 100%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
/*
 * Spinner
 *
 * Absolute pixel values are used to avoid rounding errors that would cause
 * the white spinning element to be misaligned with the track.
 */
.w-lightbox-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  -webkit-animation: spin 0.8s infinite linear;
  animation: spin 0.8s infinite linear;
}
.w-lightbox-spinner:after {
  content: "";
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
  border: 3px solid transparent;
  border-bottom-color: #fff;
  border-radius: 50%;
}
/*
 * Utility classes
 */
.w-lightbox-hide {
  display: none;
}
.w-lightbox-noscroll {
  overflow: hidden;
}
@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }
  .w-lightbox-view,
  .w-lightbox-view:before {
    height: 96vh;
  }
  /* .w-lightbox-content */
  .w-lightbox-group,
  .w-lightbox-group .w-lightbox-view,
  .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }
  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }
  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }
  .w-lightbox-left,
  .w-lightbox-right {
    display: block;
    opacity: 0.5;
  }
  .w-lightbox-close {
    opacity: 0.8;
  }
  .w-lightbox-control:hover {
    opacity: 1;
  }
}
.w-lightbox-inactive,
.w-lightbox-inactive:hover {
  opacity: 0;
}
.w-richtext:before,
.w-richtext:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-richtext:after {
  clear: both;
}
.w-richtext[contenteditable="true"]:before,
.w-richtext[contenteditable="true"]:after {
  white-space: initial;
}
.w-richtext ol,
.w-richtext ul {
  overflow: hidden;
}
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,
.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after {
  outline: 2px solid #2895f7;
}
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,
.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}
.w-richtext figure.w-richtext-figure-type-video > div:after,
.w-richtext figure[data-rt-type="video"] > div:after {
  content: '';
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.w-richtext figure {
  position: relative;
  max-width: 60%;
}
.w-richtext figure > div:before {
  cursor: default!important;
}
.w-richtext figure img {
  width: 100%;
}
.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: 0.6;
}
.w-richtext figure div {
  /* fix incorrectly sized selection border in the data manager */
  font-size: 0px;
  color: transparent;
}
.w-richtext figure.w-richtext-figure-type-image,
.w-richtext figure[data-rt-type="image"] {
  display: table;
}
.w-richtext figure.w-richtext-figure-type-image > div,
.w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}
.w-richtext figure.w-richtext-figure-type-image > figcaption,
.w-richtext figure[data-rt-type="image"] > figcaption {
  display: table-caption;
  caption-side: bottom;
}
.w-richtext figure.w-richtext-figure-type-video,
.w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}
.w-richtext figure.w-richtext-figure-type-video iframe,
.w-richtext figure[data-rt-type="video"] iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.w-richtext figure.w-richtext-figure-type-video > div,
.w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}
.w-richtext figure.w-richtext-align-center {
  margin-right: auto;
  margin-left: auto;
  clear: both;
}
.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,
.w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}
.w-richtext figure.w-richtext-align-normal {
  clear: both;
}
.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.w-richtext figure.w-richtext-align-fullwidth > div {
  display: inline-block;
  /* padding-bottom is used for aspect ratios in video figures
      we want the div to inherit that so hover/selection borders in the designer-canvas
      fit right*/
  padding-bottom: inherit;
}
.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}
.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  margin-right: 15px;
  clear: none;
}
.w-richtext figure.w-richtext-align-floatright {
  float: right;
  margin-left: 15px;
  clear: none;
}
.w-nav {
  position: relative;
  background: #dddddd;
  z-index: 1000;
}
.w-nav:before,
.w-nav:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-nav:after {
  clear: both;
}
.w-nav-brand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
}
.w-nav-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: #222222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.w-nav-link.w--current {
  color: #0082f3;
}
.w-nav-menu {
  position: relative;
  float: right;
}
[data-nav-menu-open] {
  display: block !important;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #C8C8C8;
  text-align: center;
  overflow: visible;
  min-width: 200px;
}
.w--nav-link-open {
  display: block;
  position: relative;
}
.w-nav-overlay {
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
}
.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}
.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] [data-nav-menu-open] {
  right: auto;
  z-index: 1;
  top: 0;
}
.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] [data-nav-menu-open] {
  left: auto;
  z-index: 1;
  top: 0;
}
.w-nav-button {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-nav-button:focus {
  outline: 0;
}
.w-nav-button.w--open {
  background-color: #C8C8C8;
  color: white;
}
.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}
.w-nav[data-collapse="all"] .w-nav-button {
  display: block;
}
.w--nav-dropdown-open {
  display: block;
}
.w--nav-dropdown-toggle-open {
  display: block;
}
.w--nav-dropdown-list-open {
  position: static;
}
@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}
@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }
  .w-nav-brand {
    padding-left: 10px;
  }
}
@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}
.w-tabs {
  position: relative;
}
.w-tabs:before,
.w-tabs:after {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}
.w-tabs:after {
  clear: both;
}
.w-tab-menu {
  position: relative;
}
.w-tab-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  padding: 9px 30px;
  text-align: left;
  cursor: pointer;
  color: #222222;
  background-color: #dddddd;
}
.w-tab-link.w--current {
  background-color: #C8C8C8;
}
.w-tab-link:focus {
  outline: 0;
}
.w-tab-content {
  position: relative;
  display: block;
  overflow: hidden;
}
.w-tab-pane {
  position: relative;
  display: none;
}
.w--tab-active {
  display: block;
}
@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}
.w-ix-emptyfix:after {
  content: "";
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.w-dyn-empty {
  padding: 10px;
  background-color: #dddddd;
}
.w-dyn-hide {
  display: none !important;
}
.w-dyn-bind-empty {
  display: none !important;
}
.w-condition-invisible {
  display: none !important;
}
.wf-layout-layout {
  display: grid;
}


.w-layout-grid {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.w-embed-youtubevideo {
  width: 100%;
  background-image: url('https://d3e54v103j8qbb.cloudfront.net/static/youtube-placeholder.2b05e7d68d.svg');
  background-position: 50%;
  background-size: cover;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  position: relative;
}

.w-embed-youtubevideo:empty {
  min-height: 75px;
  padding-bottom: 56.25%;
}

.w-layout-blockcontainer {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

@media screen and (max-width: 991px) {
  .w-layout-blockcontainer {
    max-width: 728px;
  }
}

@media screen and (max-width: 767px) {
  .w-layout-blockcontainer {
    max-width: none;
  }
}

.body {
  color: #b5b4b0;
  background-image: linear-gradient(#000, #000);
  font-family: Helveticaneue, sans-serif;
  font-weight: 500;
}

.background-video {
  height: 100vh;
  background-color: #000;
  background-image: url('../images/About-3.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.play-pause-button {
  display: none;
}

.heading {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: none;
}

.section {
  z-index: 9;
  height: 100vh;
  background-color: rgba(0, 0, 0, .45);
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.navbar {
  z-index: 3;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 20px;
  display: block;
  position: absolute;
}

.container {
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
}

.brand {
  margin-left: 20px;
  display: block;
}

.menu-button, .icon {
  display: none;
}

.text-block {
  color: #b5b4b0;
  text-transform: lowercase;
  font-size: 2rem;
  font-weight: 700;
}

.icon-2 {
  color: #b68543;
}

.dropdown {
  width: auto;
  max-width: 100%;
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  margin-left: 511px;
  margin-right: auto;
  display: none;
}

.dropdown-toggle {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.socials {
  z-index: 9999;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 40px;
  display: flex;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.social-link {
  width: 1.5rem;
  height: auto;
  margin: 0 0 .5rem;
  transition: all .2s;
  display: block;
}

.social-link:hover {
  box-shadow: none;
  transform: scale(1.1);
}

.social-icon-2 {
  width: auto;
  height: 100%;
  filter: none;
  color: #bd1d1d;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}

.image {
  width: 60%;
  margin-right: 10px;
}

.div-block, .nav-menu {
  display: none;
}

.socials-2 {
  z-index: 2;
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40vh 20px 50vh 2em;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: auto;
}

.body-2 {
  background-image: url('../images/Delara_Animate.jpg');
  background-position: 0 0;
  background-size: cover;
  background-attachment: fixed;
  font-family: Helveticaneue, sans-serif;
  font-weight: 700;
}

.html-embed {
  width: 96%;
  max-width: 960px;
  color: #b68543;
}

.heading-2 {
  color: #fff;
  text-align: center;
  font-size: 3em;
}

.container-2 {
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
}

.div-block-2 {
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
}

.menu_outer-wrapper {
  z-index: 99;
  opacity: 0;
  background-color: rgba(0, 0, 0, .82);
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.menu_item_wrapper {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  overflow: hidden;
}

.menu-link {
  color: #b5b4b0;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: Helveticaneue, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3rem;
  text-decoration: none;
}

.menu-link.w--current {
  color: #e72403;
  font-weight: 700;
}

.exit-icon {
  z-index: 9999;
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.nav {
  z-index: 9990;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  display: flex;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.nav_wrap.container-col-12 {
  width: 100%;
  max-width: 100vw;
  background-image: linear-gradient(#000, rgba(0, 0, 0, 0));
  justify-content: space-around;
  align-items: center;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
}

.logo-link {
  z-index: 999;
  width: 300px;
  position: -webkit-sticky;
  position: sticky;
}

.nav-inner {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 50vw;
  margin-right: 50vw;
  padding-left: 0;
  padding-right: 0;
  display: flex;
}

.nav-menu {
  display: block;
}

.icon-3 {
  display: none;
}

.nav-ham {
  padding-left: 0;
  padding-right: 0;
}

.nav-logo {
  width: auto;
  height: auto;
  margin-top: -16px;
  transition: width .4s;
  position: relative;
  overflow: visible;
}

.nav-link {
  padding: 1em 1.5em;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-link.is-ham {
  color: #e72403;
  padding-left: 0;
  padding-right: 0;
  font-weight: 700;
  line-height: 100%;
}

.text-block-2 {
  display: none;
}

.nav-page {
  align-items: stretch;
  display: none;
  position: static;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.nav-grid {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "Area";
  grid-auto-flow: row;
}

.nav-col {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#000, #000);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3.5em;
  padding-right: 3.5em;
  display: flex;
}

.container-3 {
  height: 100%;
  max-width: none;
  min-height: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
}

.section-2 {
  height: auto;
  min-height: 100vh;
  background-image: url('../images/Delara_Animate-T-2.jpg');
  background-position: 50%;
  background-size: cover;
  background-attachment: scroll;
  flex-direction: column;
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: flex;
	background-attachment: fixed;
}

.heading-3 {
  color: #fff;
  text-align: center;
  letter-spacing: 0;
  -webkit-text-stroke-color: #faebea;
  text-transform: lowercase;
  text-shadow: none;
  margin-top: auto;
  margin-bottom: 0;
  font-family: Helveticaneue, sans-serif;
  font-size: 3rem;
  font-weight: 700;
}

.heading-3.top {
  color: #fff;
  letter-spacing: 0;
  -webkit-text-stroke-color: #c8e4ed;
  text-transform: uppercase;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  border: 0 #000;
  border-radius: 0;
  margin-top: auto;
  margin-bottom: 20px;
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  display: block;
}

.div-block-19 {
  width: 55vh;
  text-align: center;
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: flex;
}

.image-7 {
  width: 4%;
  opacity: .55;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: none;
}

.button-2 {
  width: 200px;
  opacity: 1;
  color: #b5b4b0;
  letter-spacing: 0;
  -webkit-text-stroke-color: #411635;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #e72403;
  border: 1px #411635;
  border-radius: 3px;
  flex: 1;
  margin-top: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 20px;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 24px;
  transition: transform .2s ease-in-out;
  display: block;
}

.button-2:hover {
  color: #ea5386;
  background-color: #faebea;
  transform: scale(1.1);
}

.image-59 {
  margin-bottom: 20px;
  display: none;
}

.image-59:hover {
  filter: hue-rotate(180deg);
}

.heading-4 {
  color: #c8e4ed;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 900;
  display: none;
}

.image-57 {
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: none;
}

.image-57:hover {
  filter: hue-rotate(180deg);
}

.image-58 {
  margin: auto auto 20px;
  padding-top: 0;
  padding-bottom: 20px;
  display: block;
  position: static;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.image-58:hover {
  opacity: .73;
  filter: grayscale(57%);
}

.text-span-2 {
  color: #ea5386;
}

.section-3 {
  height: auto;
  background-image: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25));
  flex-direction: column;
	justify-content: flex-end;
  align-items: center;
  padding top: 5rem;
  display: flex;
}

.container-4 {
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: auto;
  display: flex;
}

.body-3 {
  background-image: url('../images/Delara_Animate-T-.jpg');
	background-color: #000000;
  background-position: 0 0;
  background-repeat: repeat;
  background-size: cover;
	background-attachment: fixed;
}

.grid {
  width: 80%;
	height: 70%;
  max-width: 92%;
	
  grid-template: "Area"
  / 1fr;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 2rem auto auto;
}

.shop-item {
  width: auto;
  text-align: center;
  border: 1px #bd1d1d;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
  display: flex;
}

.merch-item {
  transition: transform .3s ease-in-out;
}

.merch-item:hover {
  transform: translate(0, -5px);
}

.product-link {
  color: #e72403;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: pre-line;
  padding-top: 10px;
  font-family: Helveticaneue, sans-serif;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5em;
  text-decoration: none;
  transition: letter-spacing .2s ease-in-out;
  display: block;
}

.product-link:hover {
  color: #cfcfcf;
  letter-spacing: 2px;
  text-decoration: none;
}

.button-3 {
  width: 300px;
  opacity: 1;
  color: #000;
	align-self: center;
  letter-spacing: 2px;
  -webkit-text-stroke-color: #411635;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;
  flex: 1;
  margin-top: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 20px;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  transition: transform .2s ease-in-out;
  display: block;
}

.button-3:hover {
  color: #fff;
  background-color: #B31316;
  transform: scale(1.1);
}

.button-3.shop {
  width: 100%;
  color: #000;
  background-color: #fff;
  margin-top: 20px;
}

.button-3.shop:hover {
  background-color: #b68543;
}

.cd {
  border-radius: 12px;
}

.heading-5 {
  color: #e72403;
  text-align: center;
  letter-spacing: 2px;
  -webkit-text-stroke-color: #faebea;
  text-transform: uppercase;
  text-shadow: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 300;
  display: flex;
}

.section-4 {
  height: 100vh;
  background-image: url('../images/Delara_Animate-T-2.jpg');
	background-color: #000000;
  background-position: 0 0;
  background-size: cover;
  display: none;
	background-attachment: fixed;
}

.container-5 {
  height: auto;
}

.hero-stack {
  background-color: rgba(0, 0, 0, .45);
  background-image: url('../images/Delara_Animate-T-2.jpg');
  background-position: 0 0;
  background-size: cover;
  background-attachment: scroll;
  border-bottom: 1px solid #e4ebf3;
  padding: 80px 30px;
  display: none;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.container-6 {
  width: 100%;
  max-width: 940px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.hero-wrapper-two {
  max-width: 750px;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.margin-bottom-24px {
  color: #b5b4b0;
  margin-bottom: 24px;
  font-size: 1.5rem;
  line-height: 3rem;
}

.button-primary {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #1a1b1f;
  padding: 12px 25px;
  font-size: 12px;
  line-height: 20px;
  transition: all .2s;
}

.button-primary:hover {
  color: #fff;
  background-color: #32343a;
}

.button-primary:active {
  background-color: #43464d;
}

.hero-image {
  width: 100%;
  margin-top: 50px;
}

.heading-6 {
  color: #b5b4b0;
}

.slider-2 {
  width: 50vw;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
  display: block;
}

.mask {
  margin-bottom: 0;
  margin-left: 70px;
  margin-right: 70px;
  padding-bottom: 0;
}

.youtube {
  width: 100%;
  display: none;
}

.gallery-scroll {
  background-color: #f5f7fa;
  background-image: linear-gradient(#d1cec9, #d1cec9);
  background-position: 0 0;
  border-bottom: 1px solid #e4ebf3;
  padding: 80px 30px;
  position: relative;
}

.container-7 {
  width: 100%;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-wrapper {
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: start;
  display: grid;
}

.gallery-sticky {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}

.gallery-link {
  color: #1a1b1f;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 32px;
  text-decoration: none;
}

.gallery-link:hover {
  color: rgba(26, 27, 31, .8);
}

.gallery-link.w--current {
  font-weight: 600;
}

.gallery-grid {
  grid-row-gap: 40px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.gallery-image-wrapper {
  position: relative;
}

.gallery-image {
  width: 100%;
}

.gallery-image.shadow-two {
  border-radius: 12px;
  position: relative;
}

.gallery-image-text {
  color: #f5f7fa;
  margin-bottom: 0;
  display: none;
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
}

.rich-text-block {
  color: #000;
  font-family: Helveticaneue, sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
}

.heading-7 {
  color: #000;
  font-family: Helveticaneue, sans-serif;
  font-size: 3em;
}

.image-60 {
  object-fit: fill;
  margin-bottom: 40px;
  display: none;
  position: static;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.waves-gradient-hero-1 {
  z-index: 9;
  height: 220px;
  background-image: linear-gradient(#faebe3, rgba(250, 235, 227, 0));
  position: absolute;
  top: -1px;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.waves-gradient-hero-1.bottom {
  background-image: linear-gradient(to top, #faebe3, rgba(250, 235, 227, 0));
  top: auto;
  bottom: -1px;
  left: 0%;
  right: 0%;
}

.waves-image-hero-1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.waves-image-wrap-hero-1 {
  width: 100%;
  height: 410px;
  border-radius: 12px;
  overflow: hidden;
}

.waves-item-gallery-hero-1 {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.waves-inside-hero-1 {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  flex-direction: column;
  display: flex;
}

.waves-inside-hero-1.reverse {
  justify-content: flex-end;
}

.waves-column-hero-1 {
  width: 48%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.waves-gallery-hero-1 {
  width: 100%;
  height: 740px;
  max-width: 550px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  display: none;
  position: relative;
  overflow: hidden;
}

.waves---cta-dark {
  height: 52px;
  background-color: #131313;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: 700;
  transition: background-color .2s;
  display: flex;
}

.waves---cta-dark:hover {
  background-color: rgba(19, 19, 19, .9);
}

.waves---cta-dark.wide-cta {
  min-width: 200px;
  background-color: #e72403;
  display: none;
}

.waves---mg-top-16 {
  margin-top: 16px;
}

.waves---subtitle {
  color: #b5b4b0;
  font-size: 24px;
  line-height: 40px;
  display: none;
}

.waves---limit-480 {
  width: 100%;
  max-width: 480px;
}

.waves---mega-heading-1 {
  color: #e72403;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Helveticaneue, sans-serif;
  font-size: 7.5em;
  font-weight: 700;
  line-height: 100%;
}

.waves-content-hero-1 {
  grid-row-gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.waves-grid-hero-1 {
  grid-column-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1.1fr 1fr;
}

.waves---main-container {
  max-width: 1352px;
  padding-left: 24px;
  padding-right: 24px;
}

.waves---section-hero-primary {
  background-color: #d1cec9;
  background-image: url('../images/Delara_ABOUT-BG.jpg');
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 100px;
  padding-bottom: 100px;
}

.italic-text {
  color: #000;
  -webkit-text-stroke-color: #e72403;
}

.body-4 {
  font-family: Helveticaneue, sans-serif;
}

.footer-divider-two {
  width: 100%;
  height: 1px;
  color: #f1b24d;
  background-color: #f1b24d;
  margin-top: 40px;
  margin-bottom: 40px;
}

.subscribemodal {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background-color: rgba(250, 250, 250, .0);
  border-radius: 0;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.newslettermodaldiv {
  width: 96%;
  height: auto;
  max-width: 560px;
  border: 5px #000;
  border-radius: 8px;
  margin: auto;
  padding: 2rem .5rem;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.exit-icon-2 {
  filter: invert();
  justify-content: center;
  margin-top: 16px;
  margin-right: 10px;
  display: block;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.image-56 {
  width: 80%;
  filter: invert();
  color: #411635;
  display: block;
}

.heading-8 {
  color: #ffffff;
  text-align: center;
}

.heading-8.modal-text {
  color: #FFFFFF;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  position: relative;
}

.html-embed-9 {
  width: 96%;
  max-width: none;
  color: #131313;
  letter-spacing: 0;
  margin: 1rem auto auto;
  font-size: 1rem;
  font-weight: 400;
  display: block;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
}

.bold-text {
  color: #fff;
  letter-spacing: 0;
  -webkit-text-stroke-color: rgba(0, 0, 0, .45);
}

.image-61, .image-62, .image-63 {
  border-radius: 12px;
}

.navbar-2 {
  background-color: #265fca;
  display: none;
}

.navmenulink {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
}

.logoblock {
  width: 100%;
  height: auto;
  max-width: 9%;
  justify-content: center;
  align-items: center;
  display: block;
  position: absolute;
}

.image-64 {
  width: 100%;
  display: block;
}

.menublock {
  width: auto;
  max-width: 20vw;
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  color: red;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  font-family: Helveticaneue, sans-serif;
  display: none;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.text-block-3 {
  color: #d1cec9;
  letter-spacing: 0;
  text-transform: lowercase;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;
  display: inline-block;
}

.menumodal {
  z-index: 9999;
  opacity: 0;
  background-color: rgba(0, 0, 0, .9);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.textlinklist {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.link {
  color: #d1cec9;
  font-size: 2rem;
  font-weight: 700;
  line-height: 100%;
  text-decoration: none;
}

.link.w--current:hover {
  opacity: 1;
  color: #e72403;
}

.closemenumodalbutton {
  color: #fff;
  text-transform: none;
  font-weight: 700;
  position: absolute;
  top: 1rem;
  bottom: auto;
  left: auto;
  right: 2rem;
}

.logobox {
  width: 15vw;
  max-width: 120px;
  display: none;
  position: absolute;
  top: 1rem;
  bottom: auto;
  left: 1rem;
  right: auto;
}

.div-block-34 {
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  position: static;
}

.div-block-35 {
  width: 50%;
  max-width: 30vw;
  margin-left: 0;
}

.image-66 {
  width: 40%;
  height: 200%;
  max-height: 30vh;
  color: #e72403;
}

.links-list {
  grid-column-gap: 1.5em;
  grid-row-gap: 1.5em;
  margin-left: auto;
  display: flex;
}

.link-2 {
  color: #fff;
  text-transform: lowercase;
  font-family: Helveticaneue, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
}

.link-2:hover {
  color: #b68543;
}

.link-2.w--current {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: underline;
}

.desktopmenu {
  z-index: 89;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.closenewsletterbutton {
  cursor: pointer;
}

.section-5 {
  height: auto;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: flex;
}

.section-6 {
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../images/bg.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  position: relative;
}

@media screen and (max-width: 991px) {
  .brand {
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: auto;
  }

  .dropdown {
    margin-left: 175px;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
  }

  .social-link {
    width: 1.2rem;
    margin-bottom: .4rem;
    margin-right: 0;
  }

  .socials-2 {
    height: 300px;
    min-height: 0%;
    margin: auto 0 auto 1em;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto;
  }

  .nav {
    flex-direction: column;
    justify-content: center;
  }

  .nav-inner {
    z-index: 999;
    width: 300px;
    height: 300px;
    color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    flex-direction: column;
    align-items: flex-end;
    margin-top: 24px;
    margin-left: 0;
    margin-right: 0;
    display: block;
    position: relative;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .nav-menu.w--open {
    background-color: rgba(0, 0, 0, 0);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .nav-logo {
    margin-top: 10px;
  }

  .nav-link.is-ham {
    text-align: center;
    padding-bottom: 1em;
  }

  .div-block-19 {
    padding-top: 0;
	width: 400px;
	  align-content: center;
  }

  .image-59, .image-57 {
    width: 60%;
  }

  .image-58 {
    display: block;
  }

  .section-3 {
    height: 100%;
    min-height: 100vh;
	  padding-top: 3rem;
  }

  .body-3 {
    height: auto;
    background-image: url('../images/Delara_Animate-T-.jpg');
	  background-color: #000000;
    background-position: 0%;
    
    background-size: cover;
    background-attachment: scroll;
  }

  .grid {
    width: 88%;
    max-width: 1000%;
    grid-template-columns: 1fr 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .shop-item {
    width: auto;
  }

  .product-link {
    line-height: 100%;
  }

  .button-3 {
    width: auto;
    max-width: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    line-height: 100%;
  }

  .button-3.shop {
    width: 100%;
    margin-left: auto;
    margin-right: 0;
  }

  .container-6, .container-7 {
    max-width: 728px;
  }

  .gallery-wrapper {
    grid-template-columns: 1fr 1fr;
  }

  .gallery-sticky {
    position: relative;
    top: 0;
  }

  .waves-gradient-hero-1 {
    height: 140px;
  }

  .waves-image-wrap-hero-1 {
    height: 320px;
  }

  .waves-gallery-hero-1 {
    height: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .waves---mega-heading-1 {
    font-size: 72px;
    line-height: 110%;
  }

  .waves-content-hero-1 {
    text-align: center;
    align-items: center;
  }

  .waves-grid-hero-1 {
    grid-row-gap: 64px;
    grid-template-columns: 1fr;
  }

  .waves---section-hero-primary {
    text-align: center;
  }

  .exit-icon-2 {
    margin-top: 16px;
  }

  .bold-text {
    line-height: 100%;
  }

  .navmenulink {
    position: relative;
  }

  .link-2, .link-2.w--current {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .socials {
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
  }

  .social-link {
    margin-right: 0;
  }

  .socials-2 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1em;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto;
  }

  .body-2 {
    background-position: 0%;
  }

  .div-block-19 {
    margin-top: auto;
    padding-top: 0;
  }

  .image-7 {
    margin-top: 25px;
  }

  .image-58 {
    width: 50%;
  }

  .section-3 {
    background-image: none;
  }

  .body-3 {
    background-image: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('../images/Delara_Animate-T-.jpg');
	  background-color: #000000;
    background-position: 0 0, 15%;
    background-repeat: repeat;
    background-size: auto, cover;
    background-attachment: scroll; 
  }

  .grid {
    width: 80vw;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    align-content: center;
    justify-content: center;
    justify-items: center;
    padding-left: .5rem;
    padding-right: .5rem;
    display: grid;
  }

  .shop-item {
    width: auto;
    display: block;
  }

  .product-link {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 0;
  }

  .button-3.shop {
    width: auto;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    font-size: .75rem;
  }

  .hero-stack {
    padding: 60px 15px;
  }

  .slider-2 {
    width: 97vw;
  }

  .gallery-scroll {
    padding: 60px 15px;
  }

  .waves---subtitle {
    font-size: 22px;
    line-height: 34px;
  }

  .waves---mega-heading-1 {
    font-size: 56px;
  }

  .waves-grid-hero-1 {
    grid-row-gap: 40px;
  }

  .waves---main-container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .waves---section-hero-primary {
    background-position: 80%;
  }

  .menublock {
    cursor: pointer;
    display: flex;
  }

  .link {
    transition: all .2s;
  }

  .closemenumodalbutton {
    cursor: pointer;
  }

  .div-block-34, .desktopmenu {
    display: none;
  }
}

@media screen and (max-width: 479px) {
  .socials {
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-right: 20px;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
  }

  .social-link {
    width: 1.1rem;
    margin-bottom: 0;
    margin-left: .25rem;
    margin-right: .25rem;
  }

  .social-icon-2 {
    width: 100%;
  }

  .socials-2 {
    height: auto;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
    margin-left: 0;
    margin-right: 0;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
  }

  .body-2 {
    background-position: 18%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .div-block-2 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .nav-logo {
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .heading-3 {
    font-size: 2rem;
  }

  .heading-3.top {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .div-block-19 {
    width: 780%;
    max-width: 100%;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .button-2 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .image-58 {
    width: 70%;
  }

  .section-3 {
    height: auto;
    padding-top: auto;
    
  }

  .body-3 {
    background-image: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('../images/Delara_Animate-T-.jpg');
	  background-color: #000000;
    background-position: 0 0, 22% 100%;
    background-repeat: repeat;
    background-size: auto, cover;
    background-attachment: scroll;
  }

  .grid {
    width: 86vw;
	  height: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin: 1rem;
  }

  .shop-item {
    width: auto;
  }

  .product-link {
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 1rem;
    line-height: 100%;
  }

  .button-3 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .button-3.shop {
    width: auto;
    margin-bottom: 2rem;
    margin-left: 0;
    margin-right: 0;
    font-size: .75rem;
  }

  .heading-5 {
    font-size: 2rem;
  }

  .container-6, .container-7 {
    max-width: none;
  }

  .gallery-wrapper {
    grid-template-columns: 1fr;
  }

  .waves-gradient-hero-1 {
    top: -1px;
  }

  .waves-gradient-hero-1.bottom {
    bottom: -1px;
  }

  .waves-column-hero-1 {
    width: 48%;
  }

  .waves-column-hero-1.column-two, .waves-column-hero-1.column-one {
    flex: none;
  }

  .waves-gallery-hero-1 {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .waves---subtitle {
    font-size: 20px;
  }

  .waves---mega-heading-1 {
    font-size: 36px;
  }

  .waves---main-container {
    max-width: none;
    margin-top: auto;
    margin-bottom: auto;
  }

  .waves---section-hero-primary {
    height: auto;
    background-image: linear-gradient(rgba(0, 0, 0, .66), rgba(255, 255, 255, 0) 41%), url('../images/Delara_ABOUT-BG.jpg');
    background-position: 0 0, 76%;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    background-attachment: scroll, fixed;
    padding-top: 25vh;
    padding-bottom: 25vh;
  }

  .subscribemodal {
    display: none;
  }

  .html-embed-9 {
    width: 550px;
    max-width: 100%;
    margin: auto;
    padding-left: 0;
  }

  .bold-text {
    font-size: 1.2rem;
  }

  .menublock {
    width: auto;
    max-width: none;
    flex-direction: row;
    margin-left: auto;
    display: flex;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
  }

  .link:hover {
    color: red;
  }

  .div-block-34, .desktopmenu {
    display: none;
  }
}

#w-node-_8c2e7274-6788-ae88-3b2a-b5b46bb52dac-e24f6457 {
  grid-area: Area;
}

#w-node-_8c2e7274-6788-ae88-3b2a-b5b46bb52db6-e24f6457, #w-node-_37da4360-ddb4-c2bd-1ec8-0e63da8b9c6a-e24f6457, #w-node-_71bd78e4-278c-2f3c-627d-b8759c6734ce-e24f6457 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_5efb21d0-07f5-a337-edf6-f6307613edf2-4ed1ca05 {
  grid-area: span 1 / span 1 / span 1 / span 1;
  align-self: center;
  justify-self: start;
}

#w-node-_5efb21d0-07f5-a337-edf6-f6307613edfb-4ed1ca05 {
  grid-area: span 1 / span 1 / span 1 / span 1;
  align-self: stretch;
  justify-self: center;
}

#w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaed0-4ed1ca05 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee0-4ed1ca05 {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

#virtual-booths.w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee1-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee2-4ed1ca05, #access-dash.w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee5-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee6-4ed1ca05, #lead-retrieval.w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee9-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaeea-4ed1ca05, #lead-scoring.w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaeed-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaeee-4ed1ca05, #sponsored-sections.w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaef1-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaef2-4ed1ca05 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

@media screen and (max-width: 991px) {
  #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaed0-4ed1ca05 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
}

@media screen and (max-width: 479px) {
  #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaed0-4ed1ca05, #w-node-_705f72a9-66a4-4492-6e33-1c8c3aebaee0-4ed1ca05 {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
}

#mc_embed_signup input.email {
    width: 300px;
	text-align: center;
	justify-content: center;
  	align-items: center;
    height: 35px
}

@font-face {
  font-family: 'Helveticaneue';
  src: url('../fonts/HelveticaNeue-MediumCond.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Helveticaneue';
  src: url('../fonts/HelveticaNeue-BoldCond.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}


/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS and IE text size adjust after device orientation change,
 *    without disabling user zoom.
 */
html {
  font-family: sans-serif;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}
/**
 * Remove default margin.
 */
body {
  margin: 0;
}
/* HTML5 display definitions
   ========================================================================== */
/**
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11
 * and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
/**
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
 */
audio,
canvas,
progress,
video {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}
/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}
/**
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
 */
[hidden],
template {
  display: none;
}
/* Links
   ========================================================================== */
/**
 * Remove the gray background color from active links in IE 10.
 */
a {
  background-color: transparent;
}
/**
 * Improve readability of focused elements when they are also in an
 * active/hover state.
 */
a:active,
a:hover {
  outline: 0;
}
/* Text-level semantics
   ========================================================================== */
/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */
abbr[title] {
  border-bottom: 1px dotted;
}
/**
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
 */
b,
strong {
  font-weight: bold;
}
/**
 * Address styling not present in Safari and Chrome.
 */
dfn {
  font-style: italic;
}
/**
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/**
 * Address styling not present in IE 8/9.
 */
mark {
  background: #ff0;
  color: #000;
}
/**
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%;
}
/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
/* Embedded content
   ========================================================================== */
/**
 * Remove border when inside `a` element in IE 8/9/10.
 */
img {
  border: 0;
}
/**
 * Correct overflow not hidden in IE 9/10/11.
 */
svg:not(:root) {
  overflow: hidden;
}
/* Grouping content
   ========================================================================== */
/**
 * Address margin not present in IE 8/9 and Safari.
 */
figure {
  margin: 1em 40px;
}
/**
 * Address differences between Firefox and other browsers.
 */
hr {
  box-sizing: content-box;
  height: 0;
}
/**
 * Contain overflow in all browsers.
 */
pre {
  overflow: auto;
}
/**
 * Address odd `em`-unit font size rendering in all browsers.
 */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
/* Forms
   ========================================================================== */
/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
 */
/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  /* 1 */
  font: inherit;
  /* 2 */
  margin: 0;
  /* 3 */
}
/**
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
 */
button {
  overflow: visible;
}
/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
 */
button,
select {
  text-transform: none;
}
/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. CUSTOM FOR WEBFLOW: Removed the input[type="submit"] selector to reduce
 *    specificity and defer to the .w-button selector
 */
button,
html input[type="button"],
input[type="reset"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}
/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}
/**
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
/**
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */
input {
  line-height: normal;
}
/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}
/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. CUSTOM FOR WEBFLOW: changed from `textfield` to `none` to normalize iOS rounded input
 * 2. CUSTOM FOR WEBFLOW: box-sizing: content-box rule removed
 *    (similar to normalize.css >=4.0.0)
 */
input[type='search'] {
  -webkit-appearance: none;
  /* 1 */
}
/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
 */
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * Define consistent border, margin, and padding.
 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
/**
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */
legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}
/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */
textarea {
  overflow: auto;
}
/**
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */
optgroup {
  font-weight: bold;
}
/* Tables
   ========================================================================== */
/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}

/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Fi = u( () => {
        window.tram = function(e) {
            function t(l, E) {
                var _ = new L.Bare;
                return _.init(l, E)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }
            function n(l) {
                var E = parseInt(l.slice(1), 16)
                  , _ = E >> 16 & 255
                  , O = E >> 8 & 255
                  , N = 255 & E;
                return [_, O, N]
            }
            function o(l, E, _) {
                return "#" + (1 << 24 | l << 16 | E << 8 | _).toString(16).slice(1)
            }
            function i() {}
            function a(l, E) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
            }
            function s(l, E, _) {
                f("Units do not match [" + l + "]: " + E + ", " + _)
            }
            function c(l, E, _) {
                if (E !== void 0 && (_ = E),
                l === void 0)
                    return _;
                var O = _;
                return Pt.test(l) || !an.test(l) ? O = parseInt(l, 10) : an.test(l) && (O = 1e3 * parseFloat(l)),
                0 > O && (O = 0),
                O === O ? O : _
            }
            function f(l) {
                fe.debug && window && window.console.warn(l)
            }
            function v(l) {
                for (var E = -1, _ = l ? l.length : 0, O = []; ++E < _; ) {
                    var N = l[E];
                    N && O.push(N)
                }
                return O
            }
            var p = function(l, E, _) {
                function O(Y) {
                    return typeof Y == "object"
                }
                function N(Y) {
                    return typeof Y == "function"
                }
                function S() {}
                function j(Y, le) {
                    function U() {
                        var Ne = new ee;
                        return N(Ne.init) && Ne.init.apply(Ne, arguments),
                        Ne
                    }
                    function ee() {}
                    le === _ && (le = Y,
                    Y = Object),
                    U.Bare = ee;
                    var re, ge = S[l] = Y[l], tt = ee[l] = U[l] = new S;
                    return tt.constructor = U,
                    U.mixin = function(Ne) {
                        return ee[l] = U[l] = j(U, Ne)[l],
                        U
                    }
                    ,
                    U.open = function(Ne) {
                        if (re = {},
                        N(Ne) ? re = Ne.call(U, tt, ge, U, Y) : O(Ne) && (re = Ne),
                        O(re))
                            for (var Or in re)
                                E.call(re, Or) && (tt[Or] = re[Or]);
                        return N(tt.init) || (tt.init = Y),
                        U
                    }
                    ,
                    U.open(le)
                }
                return j
            }("prototype", {}.hasOwnProperty)
              , h = {
                ease: ["ease", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (-2.75 * S * N + 11 * N * N + -15.5 * S + 8 * N + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (-1 * S * N + 3 * N * N + -3 * S + 2 * N)
                }
                ],
                "ease-out": ["ease-out", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (.3 * S * N + -1.6 * N * N + 2.2 * S + -1.8 * N + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (2 * S * N + -5 * N * N + 2 * S + 2 * N)
                }
                ],
                linear: ["linear", function(l, E, _, O) {
                    return _ * l / O + E
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, _, O) {
                    return _ * (l /= O) * l + E
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, _, O) {
                    return -_ * (l /= O) * (l - 2) + E
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l + E : -_ / 2 * (--l * (l - 2) - 1) + E
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l + E
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, _, O) {
                    return _ * ((l = l / O - 1) * l * l + 1) + E
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l + E : _ / 2 * ((l -= 2) * l * l + 2) + E
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l * l + E
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, _, O) {
                    return -_ * ((l = l / O - 1) * l * l * l - 1) + E
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l * l + E : -_ / 2 * ((l -= 2) * l * l * l - 2) + E
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l * l * l + E
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, _, O) {
                    return _ * ((l = l / O - 1) * l * l * l * l + 1) + E
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l * l * l + E : _ / 2 * ((l -= 2) * l * l * l * l + 2) + E
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, _, O) {
                    return -_ * Math.cos(l / O * (Math.PI / 2)) + _ + E
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, _, O) {
                    return _ * Math.sin(l / O * (Math.PI / 2)) + E
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, _, O) {
                    return -_ / 2 * (Math.cos(Math.PI * l / O) - 1) + E
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, _, O) {
                    return l === 0 ? E : _ * Math.pow(2, 10 * (l / O - 1)) + E
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, _, O) {
                    return l === O ? E + _ : _ * (-Math.pow(2, -10 * l / O) + 1) + E
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, _, O) {
                    return l === 0 ? E : l === O ? E + _ : (l /= O / 2) < 1 ? _ / 2 * Math.pow(2, 10 * (l - 1)) + E : _ / 2 * (-Math.pow(2, -10 * --l) + 2) + E
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, _, O) {
                    return -_ * (Math.sqrt(1 - (l /= O) * l) - 1) + E
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, _, O) {
                    return _ * Math.sqrt(1 - (l = l / O - 1) * l) + E
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? -_ / 2 * (Math.sqrt(1 - l * l) - 1) + E : _ / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    _ * (l /= O) * l * ((N + 1) * l - N) + E
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    _ * ((l = l / O - 1) * l * ((N + 1) * l + N) + 1) + E
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    (l /= O / 2) < 1 ? _ / 2 * l * l * (((N *= 1.525) + 1) * l - N) + E : _ / 2 * ((l -= 2) * l * (((N *= 1.525) + 1) * l + N) + 2) + E
                }
                ]
            }
              , y = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , m = document
              , I = window
              , q = "bkwld-tram"
              , R = /[\-\.0-9]/g
              , w = /[A-Z]/
              , T = "number"
              , G = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , P = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , B = "unitless"
              , W = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , K = " "
              , M = m.createElement("a")
              , g = ["Webkit", "Moz", "O", "ms"]
              , x = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , F = function(l) {
                if (l in M.style)
                    return {
                        dom: l,
                        css: l
                    };
                var E, _, O = "", N = l.split("-");
                for (E = 0; E < N.length; E++)
                    O += N[E].charAt(0).toUpperCase() + N[E].slice(1);
                for (E = 0; E < g.length; E++)
                    if (_ = g[E] + O,
                    _ in M.style)
                        return {
                            dom: _,
                            css: x[E] + l
                        }
            }
              , X = t.support = {
                bind: Function.prototype.bind,
                transform: F("transform"),
                transition: F("transition"),
                backface: F("backface-visibility"),
                timing: F("transition-timing-function")
            };
            if (X.transition) {
                var H = X.timing.dom;
                if (M.style[H] = h["ease-in-back"][0],
                !M.style[H])
                    for (var z in y)
                        h[z][0] = y[z]
            }
            var ie = t.frame = function() {
                var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return l && X.bind ? l.bind(I) : function(E) {
                    I.setTimeout(E, 16)
                }
            }()
              , Ce = t.now = function() {
                var l = I.performance
                  , E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return E && X.bind ? E.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , d = p(function(l) {
                function E(k, ne) {
                    var pe = v(("" + k).split(K))
                      , ae = pe[0];
                    ne = ne || {};
                    var qe = It[ae];
                    if (!qe)
                        return f("Unsupported property: " + ae);
                    if (!ne.weak || !this.props[ae]) {
                        var je = qe[0]
                          , Me = this.props[ae];
                        return Me || (Me = this.props[ae] = new je.Bare),
                        Me.init(this.$el, pe, qe, ne),
                        Me
                    }
                }
                function _(k, ne, pe) {
                    if (k) {
                        var ae = typeof k;
                        if (ne || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        ae == "number" && ne)
                            return this.timer = new et({
                                duration: k,
                                context: this,
                                complete: S
                            }),
                            void (this.active = !0);
                        if (ae == "string" && ne) {
                            switch (k) {
                            case "hide":
                                U.call(this);
                                break;
                            case "stop":
                                j.call(this);
                                break;
                            case "redraw":
                                ee.call(this);
                                break;
                            default:
                                E.call(this, k, pe && pe[1])
                            }
                            return S.call(this)
                        }
                        if (ae == "function")
                            return void k.call(this, this);
                        if (ae == "object") {
                            var qe = 0;
                            tt.call(this, k, function(_e, lI) {
                                _e.span > qe && (qe = _e.span),
                                _e.stop(),
                                _e.animate(lI)
                            }, function(_e) {
                                "wait"in _e && (qe = c(_e.wait, 0))
                            }),
                            ge.call(this),
                            qe > 0 && (this.timer = new et({
                                duration: qe,
                                context: this
                            }),
                            this.active = !0,
                            ne && (this.timer.complete = S));
                            var je = this
                              , Me = !1
                              , sn = {};
                            ie(function() {
                                tt.call(je, k, function(_e) {
                                    _e.active && (Me = !0,
                                    sn[_e.name] = _e.nextStyle)
                                }),
                                Me && je.$el.css(sn)
                            })
                        }
                    }
                }
                function O(k) {
                    k = c(k, 0),
                    this.active ? this.queue.push({
                        options: k
                    }) : (this.timer = new et({
                        duration: k,
                        context: this,
                        complete: S
                    }),
                    this.active = !0)
                }
                function N(k) {
                    return this.active ? (this.queue.push({
                        options: k,
                        args: arguments
                    }),
                    void (this.timer.complete = S)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function S() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var k = this.queue.shift();
                        _.call(this, k.options, !0, k.args)
                    }
                }
                function j(k) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ne;
                    typeof k == "string" ? (ne = {},
                    ne[k] = 1) : ne = typeof k == "object" && k != null ? k : this.props,
                    tt.call(this, ne, Ne),
                    ge.call(this)
                }
                function Y(k) {
                    j.call(this, k),
                    tt.call(this, k, Or, uI)
                }
                function le(k) {
                    typeof k != "string" && (k = "block"),
                    this.el.style.display = k
                }
                function U() {
                    j.call(this),
                    this.el.style.display = "none"
                }
                function ee() {
                    this.el.offsetHeight
                }
                function re() {
                    j.call(this),
                    e.removeData(this.el, q),
                    this.$el = this.el = null
                }
                function ge() {
                    var k, ne, pe = [];
                    this.upstream && pe.push(this.upstream);
                    for (k in this.props)
                        ne = this.props[k],
                        ne.active && pe.push(ne.string);
                    pe = pe.join(","),
                    this.style !== pe && (this.style = pe,
                    this.el.style[X.transition.dom] = pe)
                }
                function tt(k, ne, pe) {
                    var ae, qe, je, Me, sn = ne !== Ne, _e = {};
                    for (ae in k)
                        je = k[ae],
                        ae in Ve ? (_e.transform || (_e.transform = {}),
                        _e.transform[ae] = je) : (w.test(ae) && (ae = r(ae)),
                        ae in It ? _e[ae] = je : (Me || (Me = {}),
                        Me[ae] = je));
                    for (ae in _e) {
                        if (je = _e[ae],
                        qe = this.props[ae],
                        !qe) {
                            if (!sn)
                                continue;
                            qe = E.call(this, ae)
                        }
                        ne.call(this, qe, je)
                    }
                    pe && Me && pe.call(this, Me)
                }
                function Ne(k) {
                    k.stop()
                }
                function Or(k, ne) {
                    k.set(ne)
                }
                function uI(k) {
                    this.$el.css(k)
                }
                function We(k, ne) {
                    l[k] = function() {
                        return this.children ? cI.call(this, ne, arguments) : (this.el && ne.apply(this, arguments),
                        this)
                    }
                }
                function cI(k, ne) {
                    var pe, ae = this.children.length;
                    for (pe = 0; ae > pe; pe++)
                        k.apply(this.children[pe], ne);
                    return this
                }
                l.init = function(k) {
                    if (this.$el = e(k),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    fe.keepInherited && !fe.fallback) {
                        var ne = dt(this.el, "transition");
                        ne && !W.test(ne) && (this.upstream = ne)
                    }
                    X.backface && fe.hideBackface && he(this.el, X.backface.css, "hidden")
                }
                ,
                We("add", E),
                We("start", _),
                We("wait", O),
                We("then", N),
                We("next", S),
                We("stop", j),
                We("set", Y),
                We("show", le),
                We("hide", U),
                We("redraw", ee),
                We("destroy", re)
            })
              , L = p(d, function(l) {
                function E(_, O) {
                    var N = e.data(_, q) || e.data(_, q, new d.Bare);
                    return N.el || N.init(_),
                    O ? N.start(O) : N
                }
                l.init = function(_, O) {
                    var N = e(_);
                    if (!N.length)
                        return this;
                    if (N.length === 1)
                        return E(N[0], O);
                    var S = [];
                    return N.each(function(j, Y) {
                        S.push(E(Y, O))
                    }),
                    this.children = S,
                    this
                }
            })
              , C = p(function(l) {
                function E() {
                    var S = this.get();
                    this.update("auto");
                    var j = this.get();
                    return this.update(S),
                    j
                }
                function _(S, j, Y) {
                    return j !== void 0 && (Y = j),
                    S in h ? S : Y
                }
                function O(S) {
                    var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
                    return (j ? o(j[1], j[2], j[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var N = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(S, j, Y, le) {
                    this.$el = S,
                    this.el = S[0];
                    var U = j[0];
                    Y[2] && (U = Y[2]),
                    pt[U] && (U = pt[U]),
                    this.name = U,
                    this.type = Y[1],
                    this.duration = c(j[1], this.duration, N.duration),
                    this.ease = _(j[2], this.ease, N.ease),
                    this.delay = c(j[3], this.delay, N.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = le.unit || this.unit || fe.defaultUnit,
                    this.angle = le.angle || this.angle || fe.defaultAngle,
                    fe.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + K + this.duration + "ms" + (this.ease != "ease" ? K + h[this.ease][0] : "") + (this.delay ? K + this.delay + "ms" : ""))
                }
                ,
                l.set = function(S) {
                    S = this.convert(S, this.type),
                    this.update(S),
                    this.redraw()
                }
                ,
                l.transition = function(S) {
                    this.active = !0,
                    S = this.convert(S, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    S == "auto" && (S = E.call(this))),
                    this.nextStyle = S
                }
                ,
                l.fallback = function(S) {
                    var j = this.el.style[this.name] || this.convert(this.get(), this.type);
                    S = this.convert(S, this.type),
                    this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)),
                    S == "auto" && (S = E.call(this))),
                    this.tween = new Oe({
                        from: j,
                        to: S,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return dt(this.el, this.name)
                }
                ,
                l.update = function(S) {
                    he(this.el, this.name, S)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    he(this.el, this.name, this.get()));
                    var S = this.tween;
                    S && S.context && S.destroy()
                }
                ,
                l.convert = function(S, j) {
                    if (S == "auto" && this.auto)
                        return S;
                    var Y, le = typeof S == "number", U = typeof S == "string";
                    switch (j) {
                    case T:
                        if (le)
                            return S;
                        if (U && S.replace(R, "") === "")
                            return +S;
                        Y = "number(unitless)";
                        break;
                    case G:
                        if (U) {
                            if (S === "" && this.original)
                                return this.original;
                            if (j.test(S))
                                return S.charAt(0) == "#" && S.length == 7 ? S : O(S)
                        }
                        Y = "hex or rgb string";
                        break;
                    case D:
                        if (le)
                            return S + this.unit;
                        if (U && j.test(S))
                            return S;
                        Y = "number(px) or string(unit)";
                        break;
                    case P:
                        if (le)
                            return S + this.unit;
                        if (U && j.test(S))
                            return S;
                        Y = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (le)
                            return S + this.angle;
                        if (U && j.test(S))
                            return S;
                        Y = "number(deg) or string(angle)";
                        break;
                    case B:
                        if (le || U && P.test(S))
                            return S;
                        Y = "number(unitless) or string(unit or %)"
                    }
                    return a(Y, S),
                    S
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , b = p(C, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), G))
                }
            })
              , te = p(C, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(_) {
                    this.$el[this.name](_)
                }
            })
              , oe = p(C, function(l, E) {
                function _(O, N) {
                    var S, j, Y, le, U;
                    for (S in O)
                        le = Ve[S],
                        Y = le[0],
                        j = le[1] || S,
                        U = this.convert(O[S], Y),
                        N.call(this, j, U, Y)
                }
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.current || (this.current = {},
                    Ve.perspective && fe.perspective && (this.current.perspective = fe.perspective,
                    he(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(O) {
                    _.call(this, O, function(N, S) {
                        this.current[N] = S
                    }),
                    he(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(O) {
                    var N = this.values(O);
                    this.tween = new Xe({
                        current: this.current,
                        values: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var S, j = {};
                    for (S in this.current)
                        j[S] = S in N ? N[S] : this.current[S];
                    this.active = !0,
                    this.nextStyle = this.style(j)
                }
                ,
                l.fallback = function(O) {
                    var N = this.values(O);
                    this.tween = new Xe({
                        current: this.current,
                        values: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    he(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(O) {
                    var N, S = "";
                    for (N in O)
                        S += N + "(" + O[N] + ") ";
                    return S
                }
                ,
                l.values = function(O) {
                    var N, S = {};
                    return _.call(this, O, function(j, Y, le) {
                        S[j] = Y,
                        this.current[j] === void 0 && (N = 0,
                        ~j.indexOf("scale") && (N = 1),
                        this.current[j] = this.convert(N, le))
                    }),
                    S
                }
            })
              , Oe = p(function(l) {
                function E(U) {
                    Y.push(U) === 1 && ie(_)
                }
                function _() {
                    var U, ee, re, ge = Y.length;
                    if (ge)
                        for (ie(_),
                        ee = Ce(),
                        U = ge; U--; )
                            re = Y[U],
                            re && re.render(ee)
                }
                function O(U) {
                    var ee, re = e.inArray(U, Y);
                    re >= 0 && (ee = Y.slice(re + 1),
                    Y.length = re,
                    ee.length && (Y = Y.concat(ee)))
                }
                function N(U) {
                    return Math.round(U * le) / le
                }
                function S(U, ee, re) {
                    return o(U[0] + re * (ee[0] - U[0]), U[1] + re * (ee[1] - U[1]), U[2] + re * (ee[2] - U[2]))
                }
                var j = {
                    ease: h.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(U) {
                    this.duration = U.duration || 0,
                    this.delay = U.delay || 0;
                    var ee = U.ease || j.ease;
                    h[ee] && (ee = h[ee][1]),
                    typeof ee != "function" && (ee = j.ease),
                    this.ease = ee,
                    this.update = U.update || i,
                    this.complete = U.complete || i,
                    this.context = U.context || this,
                    this.name = U.name;
                    var re = U.from
                      , ge = U.to;
                    re === void 0 && (re = j.from),
                    ge === void 0 && (ge = j.to),
                    this.unit = U.unit || "",
                    typeof re == "number" && typeof ge == "number" ? (this.begin = re,
                    this.change = ge - re) : this.format(ge, re),
                    this.value = this.begin + this.unit,
                    this.start = Ce(),
                    U.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = Ce()),
                    this.active = !0,
                    E(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    O(this))
                }
                ,
                l.render = function(U) {
                    var ee, re = U - this.start;
                    if (this.delay) {
                        if (re <= this.delay)
                            return;
                        re -= this.delay
                    }
                    if (re < this.duration) {
                        var ge = this.ease(re, 0, 1, this.duration);
                        return ee = this.startRGB ? S(this.startRGB, this.endRGB, ge) : N(this.begin + ge * this.change),
                        this.value = ee + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ee = this.endHex || this.begin + this.change,
                    this.value = ee + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(U, ee) {
                    if (ee += "",
                    U += "",
                    U.charAt(0) == "#")
                        return this.startRGB = n(ee),
                        this.endRGB = n(U),
                        this.endHex = U,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var re = ee.replace(R, "")
                          , ge = U.replace(R, "");
                        re !== ge && s("tween", ee, U),
                        this.unit = re
                    }
                    ee = parseFloat(ee),
                    U = parseFloat(U),
                    this.begin = this.value = ee,
                    this.change = U - ee
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var Y = []
                  , le = 1e3
            })
              , et = p(Oe, function(l) {
                l.init = function(E) {
                    this.duration = E.duration || 0,
                    this.complete = E.complete || i,
                    this.context = E.context,
                    this.play()
                }
                ,
                l.render = function(E) {
                    var _ = E - this.start;
                    _ < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , Xe = p(Oe, function(l, E) {
                l.init = function(_) {
                    this.context = _.context,
                    this.update = _.update,
                    this.tweens = [],
                    this.current = _.current;
                    var O, N;
                    for (O in _.values)
                        N = _.values[O],
                        this.current[O] !== N && this.tweens.push(new Oe({
                            name: O,
                            from: this.current[O],
                            to: N,
                            duration: _.duration,
                            delay: _.delay,
                            ease: _.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(_) {
                    var O, N, S = this.tweens.length, j = !1;
                    for (O = S; O--; )
                        N = this.tweens[O],
                        N.context && (N.render(_),
                        this.current[N.name] = N.value,
                        j = !0);
                    return j ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (E.destroy.call(this),
                    this.tweens) {
                        var _, O = this.tweens.length;
                        for (_ = O; _--; )
                            this.tweens[_].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , fe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !X.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!X.transition)
                    return fe.fallback = !0;
                fe.agentTests.push("(" + l + ")");
                var E = new RegExp(fe.agentTests.join("|"),"i");
                fe.fallback = E.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new Oe(l)
            }
            ,
            t.delay = function(l, E, _) {
                return new et({
                    complete: E,
                    duration: l,
                    context: _
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var he = e.style
              , dt = e.css
              , pt = {
                transform: X.transform && X.transform.css
            }
              , It = {
                color: [b, G],
                background: [b, G, "background-color"],
                "outline-color": [b, G],
                "border-color": [b, G],
                "border-top-color": [b, G],
                "border-right-color": [b, G],
                "border-bottom-color": [b, G],
                "border-left-color": [b, G],
                "border-width": [C, D],
                "border-top-width": [C, D],
                "border-right-width": [C, D],
                "border-bottom-width": [C, D],
                "border-left-width": [C, D],
                "border-spacing": [C, D],
                "letter-spacing": [C, D],
                margin: [C, D],
                "margin-top": [C, D],
                "margin-right": [C, D],
                "margin-bottom": [C, D],
                "margin-left": [C, D],
                padding: [C, D],
                "padding-top": [C, D],
                "padding-right": [C, D],
                "padding-bottom": [C, D],
                "padding-left": [C, D],
                "outline-width": [C, D],
                opacity: [C, T],
                top: [C, P],
                right: [C, P],
                bottom: [C, P],
                left: [C, P],
                "font-size": [C, P],
                "text-indent": [C, P],
                "word-spacing": [C, P],
                width: [C, P],
                "min-width": [C, P],
                "max-width": [C, P],
                height: [C, P],
                "min-height": [C, P],
                "max-height": [C, P],
                "line-height": [C, B],
                "scroll-top": [te, T, "scrollTop"],
                "scroll-left": [te, T, "scrollLeft"]
            }
              , Ve = {};
            X.transform && (It.transform = [oe],
            Ve = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [T],
                scaleX: [T],
                scaleY: [T],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            X.transform && X.backface && (Ve.z = [P, "translateZ"],
            Ve.rotateZ = [V],
            Ve.scaleZ = [T],
            Ve.perspective = [D]);
            var Pt = /ms/
              , an = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Os = u( (SB, ms) => {
        var fI = window.$
          , dI = Fi() && fI.tram;
        ms.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , f = n.hasOwnProperty
              , v = r.forEach
              , p = r.map
              , h = r.reduce
              , y = r.reduceRight
              , m = r.filter
              , I = r.every
              , q = r.some
              , R = r.indexOf
              , w = r.lastIndexOf
              , T = Array.isArray
              , G = Object.keys
              , D = o.bind
              , P = e.each = e.forEach = function(g, x, F) {
                if (g == null)
                    return g;
                if (v && g.forEach === v)
                    g.forEach(x, F);
                else if (g.length === +g.length) {
                    for (var X = 0, H = g.length; X < H; X++)
                        if (x.call(F, g[X], X, g) === t)
                            return
                } else
                    for (var z = e.keys(g), X = 0, H = z.length; X < H; X++)
                        if (x.call(F, g[z[X]], z[X], g) === t)
                            return;
                return g
            }
            ;
            e.map = e.collect = function(g, x, F) {
                var X = [];
                return g == null ? X : p && g.map === p ? g.map(x, F) : (P(g, function(H, z, ie) {
                    X.push(x.call(F, H, z, ie))
                }),
                X)
            }
            ,
            e.find = e.detect = function(g, x, F) {
                var X;
                return V(g, function(H, z, ie) {
                    if (x.call(F, H, z, ie))
                        return X = H,
                        !0
                }),
                X
            }
            ,
            e.filter = e.select = function(g, x, F) {
                var X = [];
                return g == null ? X : m && g.filter === m ? g.filter(x, F) : (P(g, function(H, z, ie) {
                    x.call(F, H, z, ie) && X.push(H)
                }),
                X)
            }
            ;
            var V = e.some = e.any = function(g, x, F) {
                x || (x = e.identity);
                var X = !1;
                return g == null ? X : q && g.some === q ? g.some(x, F) : (P(g, function(H, z, ie) {
                    if (X || (X = x.call(F, H, z, ie)))
                        return t
                }),
                !!X)
            }
            ;
            e.contains = e.include = function(g, x) {
                return g == null ? !1 : R && g.indexOf === R ? g.indexOf(x) != -1 : V(g, function(F) {
                    return F === x
                })
            }
            ,
            e.delay = function(g, x) {
                var F = a.call(arguments, 2);
                return setTimeout(function() {
                    return g.apply(null, F)
                }, x)
            }
            ,
            e.defer = function(g) {
                return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(g) {
                var x, F, X;
                return function() {
                    x || (x = !0,
                    F = arguments,
                    X = this,
                    dI.frame(function() {
                        x = !1,
                        g.apply(X, F)
                    }))
                }
            }
            ,
            e.debounce = function(g, x, F) {
                var X, H, z, ie, Ce, d = function() {
                    var L = e.now() - ie;
                    L < x ? X = setTimeout(d, x - L) : (X = null,
                    F || (Ce = g.apply(z, H),
                    z = H = null))
                };
                return function() {
                    z = this,
                    H = arguments,
                    ie = e.now();
                    var L = F && !X;
                    return X || (X = setTimeout(d, x)),
                    L && (Ce = g.apply(z, H),
                    z = H = null),
                    Ce
                }
            }
            ,
            e.defaults = function(g) {
                if (!e.isObject(g))
                    return g;
                for (var x = 1, F = arguments.length; x < F; x++) {
                    var X = arguments[x];
                    for (var H in X)
                        g[H] === void 0 && (g[H] = X[H])
                }
                return g
            }
            ,
            e.keys = function(g) {
                if (!e.isObject(g))
                    return [];
                if (G)
                    return G(g);
                var x = [];
                for (var F in g)
                    e.has(g, F) && x.push(F);
                return x
            }
            ,
            e.has = function(g, x) {
                return f.call(g, x)
            }
            ,
            e.isObject = function(g) {
                return g === Object(g)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/
              , W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , K = function(g) {
                return "\\" + W[g]
            }
              , M = /^\s*(\w|\$)+\s*$/;
            return e.template = function(g, x, F) {
                !x && F && (x = F),
                x = e.defaults({}, x, e.templateSettings);
                var X = RegExp([(x.escape || B).source, (x.interpolate || B).source, (x.evaluate || B).source].join("|") + "|$", "g")
                  , H = 0
                  , z = "__p+='";
                g.replace(X, function(L, C, b, te, oe) {
                    return z += g.slice(H, oe).replace(J, K),
                    H = oe + L.length,
                    C ? z += `'+
((__t=(` + C + `))==null?'':_.escape(__t))+
'` : b ? z += `'+
((__t=(` + b + `))==null?'':__t)+
'` : te && (z += `';
` + te + `
__p+='`),
                    L
                }),
                z += `';
`;
                var ie = x.variable;
                if (ie) {
                    if (!M.test(ie))
                        throw new Error("variable is not a bare identifier: " + ie)
                } else
                    z = `with(obj||{}){
` + z + `}
`,
                    ie = "obj";
                z = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + z + `return __p;
`;
                var Ce;
                try {
                    Ce = new Function(x.variable || "obj","_",z)
                } catch (L) {
                    throw L.source = z,
                    L
                }
                var d = function(L) {
                    return Ce.call(this, L, e)
                };
                return d.source = "function(" + ie + `){
` + z + "}",
                d
            }
            ,
            e
        }()
    }
    );
    var vt = u( (RB, qs) => {
        var se = {}
          , kt = {}
          , Kt = []
          , Xi = window.Webflow || []
          , Tt = window.jQuery
          , ke = Tt(window)
          , pI = Tt(document)
          , rt = Tt.isFunction
          , He = se._ = Os()
          , As = se.tram = Fi() && Tt.tram
          , cn = !1
          , Vi = !1;
        As.config.hideBackface = !1;
        As.config.keepInherited = !0;
        se.define = function(e, t, r) {
            kt[e] && Rs(kt[e]);
            var n = kt[e] = t(Tt, He, r) || {};
            return Ss(n),
            n
        }
        ;
        se.require = function(e) {
            return kt[e]
        }
        ;
        function Ss(e) {
            se.env() && (rt(e.design) && ke.on("__wf_design", e.design),
            rt(e.preview) && ke.on("__wf_preview", e.preview)),
            rt(e.destroy) && ke.on("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && vI(e)
        }
        function vI(e) {
            if (cn) {
                e.ready();
                return
            }
            He.contains(Kt, e.ready) || Kt.push(e.ready)
        }
        function Rs(e) {
            rt(e.design) && ke.off("__wf_design", e.design),
            rt(e.preview) && ke.off("__wf_preview", e.preview),
            rt(e.destroy) && ke.off("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && hI(e)
        }
        function hI(e) {
            Kt = He.filter(Kt, function(t) {
                return t !== e.ready
            })
        }
        se.push = function(e) {
            if (cn) {
                rt(e) && e();
                return
            }
            Xi.push(e)
        }
        ;
        se.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var un = navigator.userAgent.toLowerCase()
          , ws = se.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , EI = se.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10)
          , gI = se.env.ios = /(ipod|iphone|ipad)/.test(un);
        se.env.safari = /safari/.test(un) && !EI && !gI;
        var Gi;
        ws && pI.on("touchstart mousedown", function(e) {
            Gi = e.target
        });
        se.validClick = ws ? function(e) {
            return e === Gi || Tt.contains(e, Gi)
        }
        : function() {
            return !0
        }
        ;
        var Cs = "resize.webflow orientationchange.webflow load.webflow"
          , _I = "scroll.webflow " + Cs;
        se.resize = Ui(ke, Cs);
        se.scroll = Ui(ke, _I);
        se.redraw = Ui();
        function Ui(e, t) {
            var r = []
              , n = {};
            return n.up = He.throttle(function(o) {
                He.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (He.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = He.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        se.location = function(e) {
            window.location = e
        }
        ;
        se.env() && (se.location = function() {}
        );
        se.ready = function() {
            cn = !0,
            Vi ? yI() : He.each(Kt, bs),
            He.each(Xi, bs),
            se.resize.up()
        }
        ;
        function bs(e) {
            rt(e) && e()
        }
        function yI() {
            Vi = !1,
            He.each(kt, Ss)
        }
        var xt;
        se.load = function(e) {
            xt.then(e)
        }
        ;
        function Ns() {
            xt && (xt.reject(),
            ke.off("load", xt.resolve)),
            xt = new Tt.Deferred,
            ke.on("load", xt.resolve)
        }
        se.destroy = function(e) {
            e = e || {},
            Vi = !0,
            ke.triggerHandler("__wf_destroy"),
            e.domready != null && (cn = e.domready),
            He.each(kt, Rs),
            se.resize.off(),
            se.scroll.off(),
            se.redraw.off(),
            Kt = [],
            Xi = [],
            xt.state() === "pending" && Ns()
        }
        ;
        Tt(se.ready);
        Ns();
        qs.exports = window.Webflow = se
    }
    );
    var Ls = u( (wB, xs) => {
        var Ps = vt();
        Ps.define("brand", xs.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var y = n.attr("data-wf-status")
                  , m = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(m) && a.hostname !== m && (y = !0),
                y && !s && (f = f || p(),
                h(),
                setTimeout(h, 500),
                e(r).off(c, v).on(c, v))
            }
            ;
            function v() {
                var y = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", y ? "display: none !important;" : "")
            }
            function p() {
                var y = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                })
                  , I = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return y.append(m, I),
                y[0]
            }
            function h() {
                var y = o.children(i)
                  , m = y.length && y.get(0) === f
                  , I = Ps.env("editor");
                if (m) {
                    I && y.remove();
                    return
                }
                y.length && y.remove(),
                I || o.append(f)
            }
            return t
        }
        )
    }
    );
    var Ds = u( (CB, Ms) => {
        var II = vt();
        II.define("focus-visible", Ms.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(T) {
                    return !!(T && T !== document && T.nodeName !== "HTML" && T.nodeName !== "BODY" && "classList"in T && "contains"in T.classList)
                }
                function c(T) {
                    var G = T.type
                      , D = T.tagName;
                    return !!(D === "INPUT" && a[G] && !T.readOnly || D === "TEXTAREA" && !T.readOnly || T.isContentEditable)
                }
                function f(T) {
                    T.getAttribute("data-wf-focus-visible") || T.setAttribute("data-wf-focus-visible", "true")
                }
                function v(T) {
                    T.getAttribute("data-wf-focus-visible") && T.removeAttribute("data-wf-focus-visible")
                }
                function p(T) {
                    T.metaKey || T.altKey || T.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                    n = !0)
                }
                function h() {
                    n = !1
                }
                function y(T) {
                    s(T.target) && (n || c(T.target)) && f(T.target)
                }
                function m(T) {
                    s(T.target) && T.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    v(T.target))
                }
                function I() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    q())
                }
                function q() {
                    document.addEventListener("mousemove", w),
                    document.addEventListener("mousedown", w),
                    document.addEventListener("mouseup", w),
                    document.addEventListener("pointermove", w),
                    document.addEventListener("pointerdown", w),
                    document.addEventListener("pointerup", w),
                    document.addEventListener("touchmove", w),
                    document.addEventListener("touchstart", w),
                    document.addEventListener("touchend", w)
                }
                function R() {
                    document.removeEventListener("mousemove", w),
                    document.removeEventListener("mousedown", w),
                    document.removeEventListener("mouseup", w),
                    document.removeEventListener("pointermove", w),
                    document.removeEventListener("pointerdown", w),
                    document.removeEventListener("pointerup", w),
                    document.removeEventListener("touchmove", w),
                    document.removeEventListener("touchstart", w),
                    document.removeEventListener("touchend", w)
                }
                function w(T) {
                    T.target.nodeName && T.target.nodeName.toLowerCase() === "html" || (n = !1,
                    R())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", h, !0),
                document.addEventListener("pointerdown", h, !0),
                document.addEventListener("touchstart", h, !0),
                document.addEventListener("visibilitychange", I, !0),
                q(),
                r.addEventListener("focus", y, !0),
                r.addEventListener("blur", m, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Xs = u( (NB, Gs) => {
        var Fs = vt();
        Fs.define("focus", Gs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Fs.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var Bs = u( (qB, Us) => {
        "use strict";
        var Bi = window.jQuery
          , nt = {}
          , ln = []
          , Vs = ".w-ix"
          , fn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Bi(t).triggerHandler(nt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Bi(t).triggerHandler(nt.types.OUTRO))
            }
        };
        nt.triggers = {};
        nt.types = {
            INTRO: "w-ix-intro" + Vs,
            OUTRO: "w-ix-outro" + Vs
        };
        nt.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [],
            Bi.extend(nt.triggers, fn)
        }
        ;
        nt.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (nt.triggers[e] = function(r, n) {
                    ln.push([t, n])
                }
                )
            }
        }
        ;
        nt.async();
        Us.exports = nt
    }
    );
    var ji = u( (PB, Hs) => {
        "use strict";
        var Wi = Bs();
        function Ws(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var TI = window.jQuery
          , dn = {}
          , js = ".w-ix"
          , mI = {
            reset: function(e, t) {
                Wi.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Wi.triggers.intro(e, t),
                Ws(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Wi.triggers.outro(e, t),
                Ws(t, "COMPONENT_INACTIVE")
            }
        };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + js,
            OUTRO: "w-ix-outro" + js
        };
        TI.extend(dn.triggers, mI);
        Hs.exports = dn
    }
    );
    var ks = u( (xB, ht) => {
        function Hi(e) {
            return ht.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ht.exports.__esModule = !0,
            ht.exports.default = ht.exports,
            Hi(e)
        }
        ht.exports = Hi,
        ht.exports.__esModule = !0,
        ht.exports.default = ht.exports
    }
    );
    var Lt = u( (LB, br) => {
        var OI = ks().default;
        function Ks(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Ks = function(o) {
                return o ? r : t
            }
            )(e)
        }
        function bI(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || OI(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Ks(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        br.exports = bI,
        br.exports.__esModule = !0,
        br.exports.default = br.exports
    }
    );
    var Ke = u( (MB, Ar) => {
        function AI(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ar.exports = AI,
        Ar.exports.__esModule = !0,
        Ar.exports.default = Ar.exports
    }
    );
    var de = u( (DB, zs) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        zs.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var zt = u( (FB, Ys) => {
        Ys.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Mt = u( (GB, $s) => {
        var SI = zt();
        $s.exports = !SI(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var vn = u( (XB, Qs) => {
        var Sr = Function.prototype.call;
        Qs.exports = Sr.bind ? Sr.bind(Sr) : function() {
            return Sr.apply(Sr, arguments)
        }
    }
    );
    var tu = u(eu => {
        "use strict";
        var Zs = {}.propertyIsEnumerable
          , Js = Object.getOwnPropertyDescriptor
          , RI = Js && !Zs.call({
            1: 2
        }, 1);
        eu.f = RI ? function(t) {
            var r = Js(this, t);
            return !!r && r.enumerable
        }
        : Zs
    }
    );
    var ki = u( (UB, ru) => {
        ru.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var ze = u( (BB, iu) => {
        var nu = Function.prototype
          , Ki = nu.bind
          , zi = nu.call
          , wI = Ki && Ki.bind(zi);
        iu.exports = Ki ? function(e) {
            return e && wI(zi, e)
        }
        : function(e) {
            return e && function() {
                return zi.apply(e, arguments)
            }
        }
    }
    );
    var su = u( (WB, au) => {
        var ou = ze()
          , CI = ou({}.toString)
          , NI = ou("".slice);
        au.exports = function(e) {
            return NI(CI(e), 8, -1)
        }
    }
    );
    var cu = u( (jB, uu) => {
        var qI = de()
          , PI = ze()
          , xI = zt()
          , LI = su()
          , Yi = qI.Object
          , MI = PI("".split);
        uu.exports = xI(function() {
            return !Yi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return LI(e) == "String" ? MI(e, "") : Yi(e)
        }
        : Yi
    }
    );
    var $i = u( (HB, lu) => {
        var DI = de()
          , FI = DI.TypeError;
        lu.exports = function(e) {
            if (e == null)
                throw FI("Can't call method on " + e);
            return e
        }
    }
    );
    var Rr = u( (kB, fu) => {
        var GI = cu()
          , XI = $i();
        fu.exports = function(e) {
            return GI(XI(e))
        }
    }
    );
    var it = u( (KB, du) => {
        du.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Yt = u( (zB, pu) => {
        var VI = it();
        pu.exports = function(e) {
            return typeof e == "object" ? e !== null : VI(e)
        }
    }
    );
    var wr = u( (YB, vu) => {
        var Qi = de()
          , UI = it()
          , BI = function(e) {
            return UI(e) ? e : void 0
        };
        vu.exports = function(e, t) {
            return arguments.length < 2 ? BI(Qi[e]) : Qi[e] && Qi[e][t]
        }
    }
    );
    var Eu = u( ($B, hu) => {
        var WI = ze();
        hu.exports = WI({}.isPrototypeOf)
    }
    );
    var _u = u( (QB, gu) => {
        var jI = wr();
        gu.exports = jI("navigator", "userAgent") || ""
    }
    );
    var Au = u( (ZB, bu) => {
        var Ou = de(), Zi = _u(), yu = Ou.process, Iu = Ou.Deno, Tu = yu && yu.versions || Iu && Iu.version, mu = Tu && Tu.v8, Ye, hn;
        mu && (Ye = mu.split("."),
        hn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1]));
        !hn && Zi && (Ye = Zi.match(/Edge\/(\d+)/),
        (!Ye || Ye[1] >= 74) && (Ye = Zi.match(/Chrome\/(\d+)/),
        Ye && (hn = +Ye[1])));
        bu.exports = hn
    }
    );
    var Ji = u( (JB, Ru) => {
        var Su = Au()
          , HI = zt();
        Ru.exports = !!Object.getOwnPropertySymbols && !HI(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Su && Su < 41
        })
    }
    );
    var eo = u( (eW, wu) => {
        var kI = Ji();
        wu.exports = kI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var to = u( (tW, Cu) => {
        var KI = de()
          , zI = wr()
          , YI = it()
          , $I = Eu()
          , QI = eo()
          , ZI = KI.Object;
        Cu.exports = QI ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = zI("Symbol");
            return YI(t) && $I(t.prototype, ZI(e))
        }
    }
    );
    var qu = u( (rW, Nu) => {
        var JI = de()
          , eT = JI.String;
        Nu.exports = function(e) {
            try {
                return eT(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var xu = u( (nW, Pu) => {
        var tT = de()
          , rT = it()
          , nT = qu()
          , iT = tT.TypeError;
        Pu.exports = function(e) {
            if (rT(e))
                return e;
            throw iT(nT(e) + " is not a function")
        }
    }
    );
    var Mu = u( (iW, Lu) => {
        var oT = xu();
        Lu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : oT(r)
        }
    }
    );
    var Fu = u( (oW, Du) => {
        var aT = de()
          , ro = vn()
          , no = it()
          , io = Yt()
          , sT = aT.TypeError;
        Du.exports = function(e, t) {
            var r, n;
            if (t === "string" && no(r = e.toString) && !io(n = ro(r, e)) || no(r = e.valueOf) && !io(n = ro(r, e)) || t !== "string" && no(r = e.toString) && !io(n = ro(r, e)))
                return n;
            throw sT("Can't convert object to primitive value")
        }
    }
    );
    var Xu = u( (aW, Gu) => {
        Gu.exports = !1
    }
    );
    var En = u( (sW, Uu) => {
        var Vu = de()
          , uT = Object.defineProperty;
        Uu.exports = function(e, t) {
            try {
                uT(Vu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Vu[e] = t
            }
            return t
        }
    }
    );
    var gn = u( (uW, Wu) => {
        var cT = de()
          , lT = En()
          , Bu = "__core-js_shared__"
          , fT = cT[Bu] || lT(Bu, {});
        Wu.exports = fT
    }
    );
    var oo = u( (cW, Hu) => {
        var dT = Xu()
          , ju = gn();
        (Hu.exports = function(e, t) {
            return ju[e] || (ju[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: dT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var Ku = u( (lW, ku) => {
        var pT = de()
          , vT = $i()
          , hT = pT.Object;
        ku.exports = function(e) {
            return hT(vT(e))
        }
    }
    );
    var mt = u( (fW, zu) => {
        var ET = ze()
          , gT = Ku()
          , _T = ET({}.hasOwnProperty);
        zu.exports = Object.hasOwn || function(t, r) {
            return _T(gT(t), r)
        }
    }
    );
    var ao = u( (dW, Yu) => {
        var yT = ze()
          , IT = 0
          , TT = Math.random()
          , mT = yT(1 .toString);
        Yu.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + mT(++IT + TT, 36)
        }
    }
    );
    var so = u( (pW, ec) => {
        var OT = de()
          , bT = oo()
          , $u = mt()
          , AT = ao()
          , Qu = Ji()
          , Ju = eo()
          , $t = bT("wks")
          , Dt = OT.Symbol
          , Zu = Dt && Dt.for
          , ST = Ju ? Dt : Dt && Dt.withoutSetter || AT;
        ec.exports = function(e) {
            if (!$u($t, e) || !(Qu || typeof $t[e] == "string")) {
                var t = "Symbol." + e;
                Qu && $u(Dt, e) ? $t[e] = Dt[e] : Ju && Zu ? $t[e] = Zu(t) : $t[e] = ST(t)
            }
            return $t[e]
        }
    }
    );
    var ic = u( (vW, nc) => {
        var RT = de()
          , wT = vn()
          , tc = Yt()
          , rc = to()
          , CT = Mu()
          , NT = Fu()
          , qT = so()
          , PT = RT.TypeError
          , xT = qT("toPrimitive");
        nc.exports = function(e, t) {
            if (!tc(e) || rc(e))
                return e;
            var r = CT(e, xT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = wT(r, e, t),
                !tc(n) || rc(n))
                    return n;
                throw PT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            NT(e, t)
        }
    }
    );
    var uo = u( (hW, oc) => {
        var LT = ic()
          , MT = to();
        oc.exports = function(e) {
            var t = LT(e, "string");
            return MT(t) ? t : t + ""
        }
    }
    );
    var lo = u( (EW, sc) => {
        var DT = de()
          , ac = Yt()
          , co = DT.document
          , FT = ac(co) && ac(co.createElement);
        sc.exports = function(e) {
            return FT ? co.createElement(e) : {}
        }
    }
    );
    var fo = u( (gW, uc) => {
        var GT = Mt()
          , XT = zt()
          , VT = lo();
        uc.exports = !GT && !XT(function() {
            return Object.defineProperty(VT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var po = u(lc => {
        var UT = Mt()
          , BT = vn()
          , WT = tu()
          , jT = ki()
          , HT = Rr()
          , kT = uo()
          , KT = mt()
          , zT = fo()
          , cc = Object.getOwnPropertyDescriptor;
        lc.f = UT ? cc : function(t, r) {
            if (t = HT(t),
            r = kT(r),
            zT)
                try {
                    return cc(t, r)
                } catch {}
            if (KT(t, r))
                return jT(!BT(WT.f, t, r), t[r])
        }
    }
    );
    var Cr = u( (yW, dc) => {
        var fc = de()
          , YT = Yt()
          , $T = fc.String
          , QT = fc.TypeError;
        dc.exports = function(e) {
            if (YT(e))
                return e;
            throw QT($T(e) + " is not an object")
        }
    }
    );
    var Nr = u(hc => {
        var ZT = de()
          , JT = Mt()
          , em = fo()
          , pc = Cr()
          , tm = uo()
          , rm = ZT.TypeError
          , vc = Object.defineProperty;
        hc.f = JT ? vc : function(t, r, n) {
            if (pc(t),
            r = tm(r),
            pc(n),
            em)
                try {
                    return vc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw rm("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var _n = u( (TW, Ec) => {
        var nm = Mt()
          , im = Nr()
          , om = ki();
        Ec.exports = nm ? function(e, t, r) {
            return im.f(e, t, om(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var ho = u( (mW, gc) => {
        var am = ze()
          , sm = it()
          , vo = gn()
          , um = am(Function.toString);
        sm(vo.inspectSource) || (vo.inspectSource = function(e) {
            return um(e)
        }
        );
        gc.exports = vo.inspectSource
    }
    );
    var Ic = u( (OW, yc) => {
        var cm = de()
          , lm = it()
          , fm = ho()
          , _c = cm.WeakMap;
        yc.exports = lm(_c) && /native code/.test(fm(_c))
    }
    );
    var Eo = u( (bW, mc) => {
        var dm = oo()
          , pm = ao()
          , Tc = dm("keys");
        mc.exports = function(e) {
            return Tc[e] || (Tc[e] = pm(e))
        }
    }
    );
    var yn = u( (AW, Oc) => {
        Oc.exports = {}
    }
    );
    var Cc = u( (SW, wc) => {
        var vm = Ic(), Rc = de(), go = ze(), hm = Yt(), Em = _n(), _o = mt(), yo = gn(), gm = Eo(), _m = yn(), bc = "Object already initialized", To = Rc.TypeError, ym = Rc.WeakMap, In, qr, Tn, Im = function(e) {
            return Tn(e) ? qr(e) : In(e, {})
        }, Tm = function(e) {
            return function(t) {
                var r;
                if (!hm(t) || (r = qr(t)).type !== e)
                    throw To("Incompatible receiver, " + e + " required");
                return r
            }
        };
        vm || yo.state ? (Ot = yo.state || (yo.state = new ym),
        Ac = go(Ot.get),
        Io = go(Ot.has),
        Sc = go(Ot.set),
        In = function(e, t) {
            if (Io(Ot, e))
                throw new To(bc);
            return t.facade = e,
            Sc(Ot, e, t),
            t
        }
        ,
        qr = function(e) {
            return Ac(Ot, e) || {}
        }
        ,
        Tn = function(e) {
            return Io(Ot, e)
        }
        ) : (Ft = gm("state"),
        _m[Ft] = !0,
        In = function(e, t) {
            if (_o(e, Ft))
                throw new To(bc);
            return t.facade = e,
            Em(e, Ft, t),
            t
        }
        ,
        qr = function(e) {
            return _o(e, Ft) ? e[Ft] : {}
        }
        ,
        Tn = function(e) {
            return _o(e, Ft)
        }
        );
        var Ot, Ac, Io, Sc, Ft;
        wc.exports = {
            set: In,
            get: qr,
            has: Tn,
            enforce: Im,
            getterFor: Tm
        }
    }
    );
    var Pc = u( (RW, qc) => {
        var mo = Mt()
          , mm = mt()
          , Nc = Function.prototype
          , Om = mo && Object.getOwnPropertyDescriptor
          , Oo = mm(Nc, "name")
          , bm = Oo && function() {}
        .name === "something"
          , Am = Oo && (!mo || mo && Om(Nc, "name").configurable);
        qc.exports = {
            EXISTS: Oo,
            PROPER: bm,
            CONFIGURABLE: Am
        }
    }
    );
    var Fc = u( (wW, Dc) => {
        var Sm = de()
          , xc = it()
          , Rm = mt()
          , Lc = _n()
          , wm = En()
          , Cm = ho()
          , Mc = Cc()
          , Nm = Pc().CONFIGURABLE
          , qm = Mc.get
          , Pm = Mc.enforce
          , xm = String(String).split("String");
        (Dc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1, i = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (xc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!Rm(r, "name") || Nm && r.name !== s) && Lc(r, "name", s),
            c = Pm(r),
            c.source || (c.source = xm.join(typeof s == "string" ? s : ""))),
            e === Sm) {
                i ? e[t] = r : wm(t, r);
                return
            } else
                o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : Lc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return xc(this) && qm(this).source || Cm(this)
        })
    }
    );
    var bo = u( (CW, Gc) => {
        var Lm = Math.ceil
          , Mm = Math.floor;
        Gc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? Mm : Lm)(t)
        }
    }
    );
    var Vc = u( (NW, Xc) => {
        var Dm = bo()
          , Fm = Math.max
          , Gm = Math.min;
        Xc.exports = function(e, t) {
            var r = Dm(e);
            return r < 0 ? Fm(r + t, 0) : Gm(r, t)
        }
    }
    );
    var Bc = u( (qW, Uc) => {
        var Xm = bo()
          , Vm = Math.min;
        Uc.exports = function(e) {
            return e > 0 ? Vm(Xm(e), 9007199254740991) : 0
        }
    }
    );
    var jc = u( (PW, Wc) => {
        var Um = Bc();
        Wc.exports = function(e) {
            return Um(e.length)
        }
    }
    );
    var Ao = u( (xW, kc) => {
        var Bm = Rr()
          , Wm = Vc()
          , jm = jc()
          , Hc = function(e) {
            return function(t, r, n) {
                var o = Bm(t), i = jm(o), a = Wm(n, i), s;
                if (e && r != r) {
                    for (; i > a; )
                        if (s = o[a++],
                        s != s)
                            return !0
                } else
                    for (; i > a; a++)
                        if ((e || a in o) && o[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        kc.exports = {
            includes: Hc(!0),
            indexOf: Hc(!1)
        }
    }
    );
    var Ro = u( (LW, zc) => {
        var Hm = ze()
          , So = mt()
          , km = Rr()
          , Km = Ao().indexOf
          , zm = yn()
          , Kc = Hm([].push);
        zc.exports = function(e, t) {
            var r = km(e), n = 0, o = [], i;
            for (i in r)
                !So(zm, i) && So(r, i) && Kc(o, i);
            for (; t.length > n; )
                So(r, i = t[n++]) && (~Km(o, i) || Kc(o, i));
            return o
        }
    }
    );
    var mn = u( (MW, Yc) => {
        Yc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var Qc = u($c => {
        var Ym = Ro()
          , $m = mn()
          , Qm = $m.concat("length", "prototype");
        $c.f = Object.getOwnPropertyNames || function(t) {
            return Ym(t, Qm)
        }
    }
    );
    var Jc = u(Zc => {
        Zc.f = Object.getOwnPropertySymbols
    }
    );
    var tl = u( (GW, el) => {
        var Zm = wr()
          , Jm = ze()
          , eO = Qc()
          , tO = Jc()
          , rO = Cr()
          , nO = Jm([].concat);
        el.exports = Zm("Reflect", "ownKeys") || function(t) {
            var r = eO.f(rO(t))
              , n = tO.f;
            return n ? nO(r, n(t)) : r
        }
    }
    );
    var nl = u( (XW, rl) => {
        var iO = mt()
          , oO = tl()
          , aO = po()
          , sO = Nr();
        rl.exports = function(e, t) {
            for (var r = oO(t), n = sO.f, o = aO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                iO(e, a) || n(e, a, o(t, a))
            }
        }
    }
    );
    var ol = u( (VW, il) => {
        var uO = zt()
          , cO = it()
          , lO = /#|\.prototype\./
          , Pr = function(e, t) {
            var r = dO[fO(e)];
            return r == vO ? !0 : r == pO ? !1 : cO(t) ? uO(t) : !!t
        }
          , fO = Pr.normalize = function(e) {
            return String(e).replace(lO, ".").toLowerCase()
        }
          , dO = Pr.data = {}
          , pO = Pr.NATIVE = "N"
          , vO = Pr.POLYFILL = "P";
        il.exports = Pr
    }
    );
    var sl = u( (UW, al) => {
        var wo = de()
          , hO = po().f
          , EO = _n()
          , gO = Fc()
          , _O = En()
          , yO = nl()
          , IO = ol();
        al.exports = function(e, t) {
            var r = e.target, n = e.global, o = e.stat, i, a, s, c, f, v;
            if (n ? a = wo : o ? a = wo[r] || _O(r, {}) : a = (wo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (f = t[s],
                    e.noTargetGet ? (v = hO(a, s),
                    c = v && v.value) : c = a[s],
                    i = IO(n ? s : r + (o ? "." : "#") + s, e.forced),
                    !i && c !== void 0) {
                        if (typeof f == typeof c)
                            continue;
                        yO(f, c)
                    }
                    (e.sham || c && c.sham) && EO(f, "sham", !0),
                    gO(a, s, f, e)
                }
        }
    }
    );
    var cl = u( (BW, ul) => {
        var TO = Ro()
          , mO = mn();
        ul.exports = Object.keys || function(t) {
            return TO(t, mO)
        }
    }
    );
    var fl = u( (WW, ll) => {
        var OO = Mt()
          , bO = Nr()
          , AO = Cr()
          , SO = Rr()
          , RO = cl();
        ll.exports = OO ? Object.defineProperties : function(t, r) {
            AO(t);
            for (var n = SO(r), o = RO(r), i = o.length, a = 0, s; i > a; )
                bO.f(t, s = o[a++], n[s]);
            return t
        }
    }
    );
    var pl = u( (jW, dl) => {
        var wO = wr();
        dl.exports = wO("document", "documentElement")
    }
    );
    var Tl = u( (HW, Il) => {
        var CO = Cr(), NO = fl(), vl = mn(), qO = yn(), PO = pl(), xO = lo(), LO = Eo(), hl = ">", El = "<", No = "prototype", qo = "script", _l = LO("IE_PROTO"), Co = function() {}, yl = function(e) {
            return El + qo + hl + e + El + "/" + qo + hl
        }, gl = function(e) {
            e.write(yl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, MO = function() {
            var e = xO("iframe"), t = "java" + qo + ":", r;
            return e.style.display = "none",
            PO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(yl("document.F=Object")),
            r.close(),
            r.F
        }, On, bn = function() {
            try {
                On = new ActiveXObject("htmlfile")
            } catch {}
            bn = typeof document < "u" ? document.domain && On ? gl(On) : MO() : gl(On);
            for (var e = vl.length; e--; )
                delete bn[No][vl[e]];
            return bn()
        };
        qO[_l] = !0;
        Il.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Co[No] = CO(t),
            n = new Co,
            Co[No] = null,
            n[_l] = t) : n = bn(),
            r === void 0 ? n : NO(n, r)
        }
    }
    );
    var Ol = u( (kW, ml) => {
        var DO = so()
          , FO = Tl()
          , GO = Nr()
          , Po = DO("unscopables")
          , xo = Array.prototype;
        xo[Po] == null && GO.f(xo, Po, {
            configurable: !0,
            value: FO(null)
        });
        ml.exports = function(e) {
            xo[Po][e] = !0
        }
    }
    );
    var bl = u( () => {
        "use strict";
        var XO = sl()
          , VO = Ao().includes
          , UO = Ol();
        XO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return VO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        UO("includes")
    }
    );
    var Sl = u( (YW, Al) => {
        var BO = de()
          , WO = ze();
        Al.exports = function(e, t) {
            return WO(BO[e].prototype[t])
        }
    }
    );
    var wl = u( ($W, Rl) => {
        bl();
        var jO = Sl();
        Rl.exports = jO("Array", "includes")
    }
    );
    var Nl = u( (QW, Cl) => {
        var HO = wl();
        Cl.exports = HO
    }
    );
    var Pl = u( (ZW, ql) => {
        var kO = Nl();
        ql.exports = kO
    }
    );
    var Lo = u( (JW, xl) => {
        var KO = typeof global == "object" && global && global.Object === Object && global;
        xl.exports = KO
    }
    );
    var $e = u( (e5, Ll) => {
        var zO = Lo()
          , YO = typeof self == "object" && self && self.Object === Object && self
          , $O = zO || YO || Function("return this")();
        Ll.exports = $O
    }
    );
    var Qt = u( (t5, Ml) => {
        var QO = $e()
          , ZO = QO.Symbol;
        Ml.exports = ZO
    }
    );
    var Xl = u( (r5, Gl) => {
        var Dl = Qt()
          , Fl = Object.prototype
          , JO = Fl.hasOwnProperty
          , e0 = Fl.toString
          , xr = Dl ? Dl.toStringTag : void 0;
        function t0(e) {
            var t = JO.call(e, xr)
              , r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var o = e0.call(e);
            return n && (t ? e[xr] = r : delete e[xr]),
            o
        }
        Gl.exports = t0
    }
    );
    var Ul = u( (n5, Vl) => {
        var r0 = Object.prototype
          , n0 = r0.toString;
        function i0(e) {
            return n0.call(e)
        }
        Vl.exports = i0
    }
    );
    var bt = u( (i5, jl) => {
        var Bl = Qt()
          , o0 = Xl()
          , a0 = Ul()
          , s0 = "[object Null]"
          , u0 = "[object Undefined]"
          , Wl = Bl ? Bl.toStringTag : void 0;
        function c0(e) {
            return e == null ? e === void 0 ? u0 : s0 : Wl && Wl in Object(e) ? o0(e) : a0(e)
        }
        jl.exports = c0
    }
    );
    var Mo = u( (o5, Hl) => {
        function l0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Hl.exports = l0
    }
    );
    var Do = u( (a5, kl) => {
        var f0 = Mo()
          , d0 = f0(Object.getPrototypeOf, Object);
        kl.exports = d0
    }
    );
    var Et = u( (s5, Kl) => {
        function p0(e) {
            return e != null && typeof e == "object"
        }
        Kl.exports = p0
    }
    );
    var Fo = u( (u5, Yl) => {
        var v0 = bt()
          , h0 = Do()
          , E0 = Et()
          , g0 = "[object Object]"
          , _0 = Function.prototype
          , y0 = Object.prototype
          , zl = _0.toString
          , I0 = y0.hasOwnProperty
          , T0 = zl.call(Object);
        function m0(e) {
            if (!E0(e) || v0(e) != g0)
                return !1;
            var t = h0(e);
            if (t === null)
                return !0;
            var r = I0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && zl.call(r) == T0
        }
        Yl.exports = m0
    }
    );
    var $l = u(Go => {
        "use strict";
        Object.defineProperty(Go, "__esModule", {
            value: !0
        });
        Go.default = O0;
        function O0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Ql = u( (Vo, Xo) => {
        "use strict";
        Object.defineProperty(Vo, "__esModule", {
            value: !0
        });
        var b0 = $l()
          , A0 = S0(b0);
        function S0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Zt;
        typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Xo < "u" ? Zt = Xo : Zt = Function("return this")();
        var R0 = (0,
        A0.default)(Zt);
        Vo.default = R0
    }
    );
    var Uo = u(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = tf;
        var w0 = Fo()
          , C0 = ef(w0)
          , N0 = Ql()
          , Zl = ef(N0);
        function ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Jl = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function tf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(tf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , s = a
              , c = !1;
            function f() {
                s === a && (s = a.slice())
            }
            function v() {
                return i
            }
            function p(I) {
                if (typeof I != "function")
                    throw new Error("Expected listener to be a function.");
                var q = !0;
                return f(),
                s.push(I),
                function() {
                    if (q) {
                        q = !1,
                        f();
                        var w = s.indexOf(I);
                        s.splice(w, 1)
                    }
                }
            }
            function h(I) {
                if (!(0,
                C0.default)(I))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    i = o(i, I)
                } finally {
                    c = !1
                }
                for (var q = a = s, R = 0; R < q.length; R++)
                    q[R]();
                return I
            }
            function y(I) {
                if (typeof I != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = I,
                h({
                    type: Jl.INIT
                })
            }
            function m() {
                var I, q = p;
                return I = {
                    subscribe: function(w) {
                        if (typeof w != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function T() {
                            w.next && w.next(v())
                        }
                        T();
                        var G = q(T);
                        return {
                            unsubscribe: G
                        }
                    }
                },
                I[Zl.default] = function() {
                    return this
                }
                ,
                I
            }
            return h({
                type: Jl.INIT
            }),
            n = {
                dispatch: h,
                subscribe: p,
                getState: v,
                replaceReducer: y
            },
            n[Zl.default] = m,
            n
        }
    }
    );
    var Wo = u(Bo => {
        "use strict";
        Bo.__esModule = !0;
        Bo.default = q0;
        function q0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var of = u(jo => {
        "use strict";
        jo.__esModule = !0;
        jo.default = D0;
        var rf = Uo()
          , P0 = Fo()
          , d5 = nf(P0)
          , x0 = Wo()
          , p5 = nf(x0);
        function nf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function L0(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function M0(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: rf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + rf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function D0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                M0(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , v = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var h = !1, y = {}, m = 0; m < i.length; m++) {
                    var I = i[m]
                      , q = r[I]
                      , R = f[I]
                      , w = q(R, v);
                    if (typeof w > "u") {
                        var T = L0(I, v);
                        throw new Error(T)
                    }
                    y[I] = w,
                    h = h || w !== R
                }
                return h ? y : f
            }
        }
    }
    );
    var sf = u(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = F0;
        function af(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function F0(e, t) {
            if (typeof e == "function")
                return af(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = af(a, t))
            }
            return n
        }
    }
    );
    var Ko = u(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = G0;
        function G0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var uf = u(zo => {
        "use strict";
        zo.__esModule = !0;
        var X0 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        zo.default = W0;
        var V0 = Ko()
          , U0 = B0(V0);
        function B0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function W0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a)
                      , c = s.dispatch
                      , f = []
                      , v = {
                        getState: s.getState,
                        dispatch: function(h) {
                            return c(h)
                        }
                    };
                    return f = t.map(function(p) {
                        return p(v)
                    }),
                    c = U0.default.apply(void 0, f)(s.dispatch),
                    X0({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var Yo = u(Ue => {
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var j0 = Uo()
          , H0 = Jt(j0)
          , k0 = of()
          , K0 = Jt(k0)
          , z0 = sf()
          , Y0 = Jt(z0)
          , $0 = uf()
          , Q0 = Jt($0)
          , Z0 = Ko()
          , J0 = Jt(Z0)
          , eb = Wo()
          , _5 = Jt(eb);
        function Jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ue.createStore = H0.default;
        Ue.combineReducers = K0.default;
        Ue.bindActionCreators = Y0.default;
        Ue.applyMiddleware = Q0.default;
        Ue.compose = J0.default
    }
    );
    var cf = u(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        be.QuickEffectIds = be.QuickEffectDirectionConsts = be.EventTypeConsts = be.EventLimitAffectedElements = be.EventContinuousMouseAxes = be.EventBasedOn = be.EventAppliesTo = void 0;
        var tb = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        be.EventTypeConsts = tb;
        var rb = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        be.EventAppliesTo = rb;
        var nb = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        be.EventBasedOn = nb;
        var ib = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        be.EventContinuousMouseAxes = ib;
        var ob = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        be.EventLimitAffectedElements = ob;
        var ab = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        be.QuickEffectIds = ab;
        var sb = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        be.QuickEffectDirectionConsts = sb
    }
    );
    var $o = u(er => {
        "use strict";
        Object.defineProperty(er, "__esModule", {
            value: !0
        });
        er.ActionTypeConsts = er.ActionAppliesTo = void 0;
        var ub = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        er.ActionTypeConsts = ub;
        var cb = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        er.ActionAppliesTo = cb
    }
    );
    var lf = u(An => {
        "use strict";
        Object.defineProperty(An, "__esModule", {
            value: !0
        });
        An.InteractionTypeConsts = void 0;
        var lb = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        An.InteractionTypeConsts = lb
    }
    );
    var ff = u(Sn => {
        "use strict";
        Object.defineProperty(Sn, "__esModule", {
            value: !0
        });
        Sn.ReducedMotionTypes = void 0;
        var fb = $o()
          , {TRANSFORM_MOVE: db, TRANSFORM_SCALE: pb, TRANSFORM_ROTATE: vb, TRANSFORM_SKEW: hb, STYLE_SIZE: Eb, STYLE_FILTER: gb, STYLE_FONT_VARIATION: _b} = fb.ActionTypeConsts
          , yb = {
            [db]: !0,
            [pb]: !0,
            [vb]: !0,
            [hb]: !0,
            [Eb]: !0,
            [gb]: !0,
            [_b]: !0
        };
        Sn.ReducedMotionTypes = yb
    }
    );
    var df = u(Q => {
        "use strict";
        Object.defineProperty(Q, "__esModule", {
            value: !0
        });
        Q.IX2_VIEWPORT_WIDTH_CHANGED = Q.IX2_TEST_FRAME_RENDERED = Q.IX2_STOP_REQUESTED = Q.IX2_SESSION_STOPPED = Q.IX2_SESSION_STARTED = Q.IX2_SESSION_INITIALIZED = Q.IX2_RAW_DATA_IMPORTED = Q.IX2_PREVIEW_REQUESTED = Q.IX2_PLAYBACK_REQUESTED = Q.IX2_PARAMETER_CHANGED = Q.IX2_MEDIA_QUERIES_DEFINED = Q.IX2_INSTANCE_STARTED = Q.IX2_INSTANCE_REMOVED = Q.IX2_INSTANCE_ADDED = Q.IX2_EVENT_STATE_CHANGED = Q.IX2_EVENT_LISTENER_ADDED = Q.IX2_ELEMENT_STATE_CHANGED = Q.IX2_CLEAR_REQUESTED = Q.IX2_ANIMATION_FRAME_CHANGED = Q.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var Ib = "IX2_RAW_DATA_IMPORTED";
        Q.IX2_RAW_DATA_IMPORTED = Ib;
        var Tb = "IX2_SESSION_INITIALIZED";
        Q.IX2_SESSION_INITIALIZED = Tb;
        var mb = "IX2_SESSION_STARTED";
        Q.IX2_SESSION_STARTED = mb;
        var Ob = "IX2_SESSION_STOPPED";
        Q.IX2_SESSION_STOPPED = Ob;
        var bb = "IX2_PREVIEW_REQUESTED";
        Q.IX2_PREVIEW_REQUESTED = bb;
        var Ab = "IX2_PLAYBACK_REQUESTED";
        Q.IX2_PLAYBACK_REQUESTED = Ab;
        var Sb = "IX2_STOP_REQUESTED";
        Q.IX2_STOP_REQUESTED = Sb;
        var Rb = "IX2_CLEAR_REQUESTED";
        Q.IX2_CLEAR_REQUESTED = Rb;
        var wb = "IX2_EVENT_LISTENER_ADDED";
        Q.IX2_EVENT_LISTENER_ADDED = wb;
        var Cb = "IX2_EVENT_STATE_CHANGED";
        Q.IX2_EVENT_STATE_CHANGED = Cb;
        var Nb = "IX2_ANIMATION_FRAME_CHANGED";
        Q.IX2_ANIMATION_FRAME_CHANGED = Nb;
        var qb = "IX2_PARAMETER_CHANGED";
        Q.IX2_PARAMETER_CHANGED = qb;
        var Pb = "IX2_INSTANCE_ADDED";
        Q.IX2_INSTANCE_ADDED = Pb;
        var xb = "IX2_INSTANCE_STARTED";
        Q.IX2_INSTANCE_STARTED = xb;
        var Lb = "IX2_INSTANCE_REMOVED";
        Q.IX2_INSTANCE_REMOVED = Lb;
        var Mb = "IX2_ELEMENT_STATE_CHANGED";
        Q.IX2_ELEMENT_STATE_CHANGED = Mb;
        var Db = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        Q.IX2_ACTION_LIST_PLAYBACK_CHANGED = Db;
        var Fb = "IX2_VIEWPORT_WIDTH_CHANGED";
        Q.IX2_VIEWPORT_WIDTH_CHANGED = Fb;
        var Gb = "IX2_MEDIA_QUERIES_DEFINED";
        Q.IX2_MEDIA_QUERIES_DEFINED = Gb;
        var Xb = "IX2_TEST_FRAME_RENDERED";
        Q.IX2_TEST_FRAME_RENDERED = Xb
    }
    );
    var pf = u(A => {
        "use strict";
        Object.defineProperty(A, "__esModule", {
            value: !0
        });
        A.W_MOD_JS = A.W_MOD_IX = A.WILL_CHANGE = A.WIDTH = A.WF_PAGE = A.TRANSLATE_Z = A.TRANSLATE_Y = A.TRANSLATE_X = A.TRANSLATE_3D = A.TRANSFORM = A.SKEW_Y = A.SKEW_X = A.SKEW = A.SIBLINGS = A.SCALE_Z = A.SCALE_Y = A.SCALE_X = A.SCALE_3D = A.ROTATE_Z = A.ROTATE_Y = A.ROTATE_X = A.RENDER_TRANSFORM = A.RENDER_STYLE = A.RENDER_PLUGIN = A.RENDER_GENERAL = A.PRESERVE_3D = A.PLAIN_OBJECT = A.PARENT = A.OPACITY = A.IX2_ID_DELIMITER = A.IMMEDIATE_CHILDREN = A.HTML_ELEMENT = A.HEIGHT = A.FONT_VARIATION_SETTINGS = A.FLEX = A.FILTER = A.DISPLAY = A.CONFIG_Z_VALUE = A.CONFIG_Z_UNIT = A.CONFIG_Y_VALUE = A.CONFIG_Y_UNIT = A.CONFIG_X_VALUE = A.CONFIG_X_UNIT = A.CONFIG_VALUE = A.CONFIG_UNIT = A.COMMA_DELIMITER = A.COLOR = A.COLON_DELIMITER = A.CHILDREN = A.BOUNDARY_SELECTOR = A.BORDER_COLOR = A.BAR_DELIMITER = A.BACKGROUND_COLOR = A.BACKGROUND = A.AUTO = A.ABSTRACT_NODE = void 0;
        var Vb = "|";
        A.IX2_ID_DELIMITER = Vb;
        var Ub = "data-wf-page";
        A.WF_PAGE = Ub;
        var Bb = "w-mod-js";
        A.W_MOD_JS = Bb;
        var Wb = "w-mod-ix";
        A.W_MOD_IX = Wb;
        var jb = ".w-dyn-item";
        A.BOUNDARY_SELECTOR = jb;
        var Hb = "xValue";
        A.CONFIG_X_VALUE = Hb;
        var kb = "yValue";
        A.CONFIG_Y_VALUE = kb;
        var Kb = "zValue";
        A.CONFIG_Z_VALUE = Kb;
        var zb = "value";
        A.CONFIG_VALUE = zb;
        var Yb = "xUnit";
        A.CONFIG_X_UNIT = Yb;
        var $b = "yUnit";
        A.CONFIG_Y_UNIT = $b;
        var Qb = "zUnit";
        A.CONFIG_Z_UNIT = Qb;
        var Zb = "unit";
        A.CONFIG_UNIT = Zb;
        var Jb = "transform";
        A.TRANSFORM = Jb;
        var eA = "translateX";
        A.TRANSLATE_X = eA;
        var tA = "translateY";
        A.TRANSLATE_Y = tA;
        var rA = "translateZ";
        A.TRANSLATE_Z = rA;
        var nA = "translate3d";
        A.TRANSLATE_3D = nA;
        var iA = "scaleX";
        A.SCALE_X = iA;
        var oA = "scaleY";
        A.SCALE_Y = oA;
        var aA = "scaleZ";
        A.SCALE_Z = aA;
        var sA = "scale3d";
        A.SCALE_3D = sA;
        var uA = "rotateX";
        A.ROTATE_X = uA;
        var cA = "rotateY";
        A.ROTATE_Y = cA;
        var lA = "rotateZ";
        A.ROTATE_Z = lA;
        var fA = "skew";
        A.SKEW = fA;
        var dA = "skewX";
        A.SKEW_X = dA;
        var pA = "skewY";
        A.SKEW_Y = pA;
        var vA = "opacity";
        A.OPACITY = vA;
        var hA = "filter";
        A.FILTER = hA;
        var EA = "font-variation-settings";
        A.FONT_VARIATION_SETTINGS = EA;
        var gA = "width";
        A.WIDTH = gA;
        var _A = "height";
        A.HEIGHT = _A;
        var yA = "backgroundColor";
        A.BACKGROUND_COLOR = yA;
        var IA = "background";
        A.BACKGROUND = IA;
        var TA = "borderColor";
        A.BORDER_COLOR = TA;
        var mA = "color";
        A.COLOR = mA;
        var OA = "display";
        A.DISPLAY = OA;
        var bA = "flex";
        A.FLEX = bA;
        var AA = "willChange";
        A.WILL_CHANGE = AA;
        var SA = "AUTO";
        A.AUTO = SA;
        var RA = ",";
        A.COMMA_DELIMITER = RA;
        var wA = ":";
        A.COLON_DELIMITER = wA;
        var CA = "|";
        A.BAR_DELIMITER = CA;
        var NA = "CHILDREN";
        A.CHILDREN = NA;
        var qA = "IMMEDIATE_CHILDREN";
        A.IMMEDIATE_CHILDREN = qA;
        var PA = "SIBLINGS";
        A.SIBLINGS = PA;
        var xA = "PARENT";
        A.PARENT = xA;
        var LA = "preserve-3d";
        A.PRESERVE_3D = LA;
        var MA = "HTML_ELEMENT";
        A.HTML_ELEMENT = MA;
        var DA = "PLAIN_OBJECT";
        A.PLAIN_OBJECT = DA;
        var FA = "ABSTRACT_NODE";
        A.ABSTRACT_NODE = FA;
        var GA = "RENDER_TRANSFORM";
        A.RENDER_TRANSFORM = GA;
        var XA = "RENDER_GENERAL";
        A.RENDER_GENERAL = XA;
        var VA = "RENDER_STYLE";
        A.RENDER_STYLE = VA;
        var UA = "RENDER_PLUGIN";
        A.RENDER_PLUGIN = UA
    }
    );
    var De = u(ye => {
        "use strict";
        var vf = Lt().default;
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var Rn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        ye.IX2EngineConstants = ye.IX2EngineActionTypes = void 0;
        var Qo = cf();
        Object.keys(Qo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Qo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Qo[e]
                }
            })
        });
        var Zo = $o();
        Object.keys(Zo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Zo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Zo[e]
                }
            })
        });
        var Jo = lf();
        Object.keys(Jo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Jo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Jo[e]
                }
            })
        });
        var ea = ff();
        Object.keys(ea).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === ea[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return ea[e]
                }
            })
        });
        var BA = vf(df());
        ye.IX2EngineActionTypes = BA;
        var WA = vf(pf());
        ye.IX2EngineConstants = WA
    }
    );
    var hf = u(wn => {
        "use strict";
        Object.defineProperty(wn, "__esModule", {
            value: !0
        });
        wn.ixData = void 0;
        var jA = De()
          , {IX2_RAW_DATA_IMPORTED: HA} = jA.IX2EngineActionTypes
          , kA = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case HA:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
        ;
        wn.ixData = kA
    }
    );
    var tr = u( (w5, gt) => {
        function ta() {
            return gt.exports = ta = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            gt.exports.__esModule = !0,
            gt.exports.default = gt.exports,
            ta.apply(this, arguments)
        }
        gt.exports = ta,
        gt.exports.__esModule = !0,
        gt.exports.default = gt.exports
    }
    );
    var rr = u(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        var KA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ve.clone = Nn;
        ve.addLast = _f;
        ve.addFirst = yf;
        ve.removeLast = If;
        ve.removeFirst = Tf;
        ve.insert = mf;
        ve.removeAt = Of;
        ve.replaceAt = bf;
        ve.getIn = qn;
        ve.set = Pn;
        ve.setIn = xn;
        ve.update = Sf;
        ve.updateIn = Rf;
        ve.merge = wf;
        ve.mergeDeep = Cf;
        ve.mergeIn = Nf;
        ve.omit = qf;
        ve.addDefaults = Pf;
        var Ef = "INVALID_ARGS";
        function gf(e) {
            throw new Error(e)
        }
        function ra(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var zA = {}.hasOwnProperty;
        function Nn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = ra(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function Fe(e, t, r) {
            var n = r;
            n == null && gf(Ef);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var v = ra(f);
                    if (v.length)
                        for (var p = 0; p <= v.length; p++) {
                            var h = v[p];
                            if (!(e && n[h] !== void 0)) {
                                var y = f[h];
                                t && Cn(n[h]) && Cn(y) && (y = Fe(e, t, n[h], y)),
                                !(y === void 0 || y === n[h]) && (o || (o = !0,
                                n = Nn(n)),
                                n[h] = y)
                            }
                        }
                }
            }
            return n
        }
        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : KA(e);
            return e != null && (t === "object" || t === "function")
        }
        function _f(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function yf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function If(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Tf(e) {
            return e.length ? e.slice(1) : e
        }
        function mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Of(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function bf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function qn(e, t) {
            if (!Array.isArray(t) && gf(Ef),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Pn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Nn(o);
            return i[t] = r,
            i
        }
        function Af(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Cn(e) && Cn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Af(a, t, r, n + 1)
            }
            return Pn(e, i, o)
        }
        function xn(e, t, r) {
            return t.length ? Af(e, t, r, 0) : r
        }
        function Sf(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return Pn(e, t, o)
        }
        function Rf(e, t, r) {
            var n = qn(e, t)
              , o = r(n);
            return xn(e, t, o)
        }
        function wf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, o, i].concat(s)) : Fe(!1, !1, e, t, r, n, o, i)
        }
        function Cf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, o, i].concat(s)) : Fe(!1, !0, e, t, r, n, o, i)
        }
        function Nf(e, t, r, n, o, i, a) {
            var s = qn(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, v = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++)
                v[p - 7] = arguments[p];
            return v.length ? c = Fe.call.apply(Fe, [null, !1, !1, s, r, n, o, i, a].concat(v)) : c = Fe(!1, !1, s, r, n, o, i, a),
            xn(e, t, c)
        }
        function qf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (zA.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = ra(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }
        function Pf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, o, i].concat(s)) : Fe(!0, !1, e, t, r, n, o, i)
        }
        var YA = {
            clone: Nn,
            addLast: _f,
            addFirst: yf,
            removeLast: If,
            removeFirst: Tf,
            insert: mf,
            removeAt: Of,
            replaceAt: bf,
            getIn: qn,
            set: Pn,
            setIn: xn,
            update: Sf,
            updateIn: Rf,
            merge: wf,
            mergeDeep: Cf,
            mergeIn: Nf,
            omit: qf,
            addDefaults: Pf
        };
        ve.default = YA
    }
    );
    var Lf = u(Ln => {
        "use strict";
        var $A = Ke().default;
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ixRequest = void 0;
        var QA = $A(tr())
          , ZA = De()
          , JA = rr()
          , {IX2_PREVIEW_REQUESTED: eS, IX2_PLAYBACK_REQUESTED: tS, IX2_STOP_REQUESTED: rS, IX2_CLEAR_REQUESTED: nS} = ZA.IX2EngineActionTypes
          , iS = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , xf = Object.create(null, {
            [eS]: {
                value: "preview"
            },
            [tS]: {
                value: "playback"
            },
            [rS]: {
                value: "stop"
            },
            [nS]: {
                value: "clear"
            }
        })
          , oS = (e=iS, t) => {
            if (t.type in xf) {
                let r = [xf[t.type]];
                return (0,
                JA.setIn)(e, [r], (0,
                QA.default)({}, t.payload))
            }
            return e
        }
        ;
        Ln.ixRequest = oS
    }
    );
    var Df = u(Mn => {
        "use strict";
        Object.defineProperty(Mn, "__esModule", {
            value: !0
        });
        Mn.ixSession = void 0;
        var aS = De()
          , ot = rr()
          , {IX2_SESSION_INITIALIZED: sS, IX2_SESSION_STARTED: uS, IX2_TEST_FRAME_RENDERED: cS, IX2_SESSION_STOPPED: lS, IX2_EVENT_LISTENER_ADDED: fS, IX2_EVENT_STATE_CHANGED: dS, IX2_ANIMATION_FRAME_CHANGED: pS, IX2_ACTION_LIST_PLAYBACK_CHANGED: vS, IX2_VIEWPORT_WIDTH_CHANGED: hS, IX2_MEDIA_QUERIES_DEFINED: ES} = aS.IX2EngineActionTypes
          , Mf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , gS = 20
          , _S = (e=Mf, t) => {
            switch (t.type) {
            case sS:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    ot.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case uS:
                return (0,
                ot.set)(e, "active", !0);
            case cS:
                {
                    let {payload: {step: r=gS}} = t;
                    return (0,
                    ot.set)(e, "tick", e.tick + r)
                }
            case lS:
                return Mf;
            case pS:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    ot.set)(e, "tick", r)
                }
            case fS:
                {
                    let r = (0,
                    ot.addLast)(e.eventListeners, t.payload);
                    return (0,
                    ot.set)(e, "eventListeners", r)
                }
            case dS:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    ot.setIn)(e, ["eventState", r], n)
                }
            case vS:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    ot.setIn)(e, ["playbackState", r], n)
                }
            case hS:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: s, min: c, max: f} = n[a];
                        if (r >= c && r <= f) {
                            i = s;
                            break
                        }
                    }
                    return (0,
                    ot.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case ES:
                return (0,
                ot.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
        ;
        Mn.ixSession = _S
    }
    );
    var Gf = u( (P5, Ff) => {
        function yS() {
            this.__data__ = [],
            this.size = 0
        }
        Ff.exports = yS
    }
    );
    var Dn = u( (x5, Xf) => {
        function IS(e, t) {
            return e === t || e !== e && t !== t
        }
        Xf.exports = IS
    }
    );
    var Mr = u( (L5, Vf) => {
        var TS = Dn();
        function mS(e, t) {
            for (var r = e.length; r--; )
                if (TS(e[r][0], t))
                    return r;
            return -1
        }
        Vf.exports = mS
    }
    );
    var Bf = u( (M5, Uf) => {
        var OS = Mr()
          , bS = Array.prototype
          , AS = bS.splice;
        function SS(e) {
            var t = this.__data__
              , r = OS(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : AS.call(t, r, 1),
            --this.size,
            !0
        }
        Uf.exports = SS
    }
    );
    var jf = u( (D5, Wf) => {
        var RS = Mr();
        function wS(e) {
            var t = this.__data__
              , r = RS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Wf.exports = wS
    }
    );
    var kf = u( (F5, Hf) => {
        var CS = Mr();
        function NS(e) {
            return CS(this.__data__, e) > -1
        }
        Hf.exports = NS
    }
    );
    var zf = u( (G5, Kf) => {
        var qS = Mr();
        function PS(e, t) {
            var r = this.__data__
              , n = qS(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        Kf.exports = PS
    }
    );
    var Dr = u( (X5, Yf) => {
        var xS = Gf()
          , LS = Bf()
          , MS = jf()
          , DS = kf()
          , FS = zf();
        function nr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        nr.prototype.clear = xS;
        nr.prototype.delete = LS;
        nr.prototype.get = MS;
        nr.prototype.has = DS;
        nr.prototype.set = FS;
        Yf.exports = nr
    }
    );
    var Qf = u( (V5, $f) => {
        var GS = Dr();
        function XS() {
            this.__data__ = new GS,
            this.size = 0
        }
        $f.exports = XS
    }
    );
    var Jf = u( (U5, Zf) => {
        function VS(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        Zf.exports = VS
    }
    );
    var td = u( (B5, ed) => {
        function US(e) {
            return this.__data__.get(e)
        }
        ed.exports = US
    }
    );
    var nd = u( (W5, rd) => {
        function BS(e) {
            return this.__data__.has(e)
        }
        rd.exports = BS
    }
    );
    var at = u( (j5, id) => {
        function WS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        id.exports = WS
    }
    );
    var na = u( (H5, od) => {
        var jS = bt()
          , HS = at()
          , kS = "[object AsyncFunction]"
          , KS = "[object Function]"
          , zS = "[object GeneratorFunction]"
          , YS = "[object Proxy]";
        function $S(e) {
            if (!HS(e))
                return !1;
            var t = jS(e);
            return t == KS || t == zS || t == kS || t == YS
        }
        od.exports = $S
    }
    );
    var sd = u( (k5, ad) => {
        var QS = $e()
          , ZS = QS["__core-js_shared__"];
        ad.exports = ZS
    }
    );
    var ld = u( (K5, cd) => {
        var ia = sd()
          , ud = function() {
            var e = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function JS(e) {
            return !!ud && ud in e
        }
        cd.exports = JS
    }
    );
    var oa = u( (z5, fd) => {
        var eR = Function.prototype
          , tR = eR.toString;
        function rR(e) {
            if (e != null) {
                try {
                    return tR.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        fd.exports = rR
    }
    );
    var pd = u( (Y5, dd) => {
        var nR = na()
          , iR = ld()
          , oR = at()
          , aR = oa()
          , sR = /[\\^$.*+?()[\]{}|]/g
          , uR = /^\[object .+?Constructor\]$/
          , cR = Function.prototype
          , lR = Object.prototype
          , fR = cR.toString
          , dR = lR.hasOwnProperty
          , pR = RegExp("^" + fR.call(dR).replace(sR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function vR(e) {
            if (!oR(e) || iR(e))
                return !1;
            var t = nR(e) ? pR : uR;
            return t.test(aR(e))
        }
        dd.exports = vR
    }
    );
    var hd = u( ($5, vd) => {
        function hR(e, t) {
            return e?.[t]
        }
        vd.exports = hR
    }
    );
    var At = u( (Q5, Ed) => {
        var ER = pd()
          , gR = hd();
        function _R(e, t) {
            var r = gR(e, t);
            return ER(r) ? r : void 0
        }
        Ed.exports = _R
    }
    );
    var Fn = u( (Z5, gd) => {
        var yR = At()
          , IR = $e()
          , TR = yR(IR, "Map");
        gd.exports = TR
    }
    );
    var Fr = u( (J5, _d) => {
        var mR = At()
          , OR = mR(Object, "create");
        _d.exports = OR
    }
    );
    var Td = u( (ej, Id) => {
        var yd = Fr();
        function bR() {
            this.__data__ = yd ? yd(null) : {},
            this.size = 0
        }
        Id.exports = bR
    }
    );
    var Od = u( (tj, md) => {
        function AR(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        md.exports = AR
    }
    );
    var Ad = u( (rj, bd) => {
        var SR = Fr()
          , RR = "__lodash_hash_undefined__"
          , wR = Object.prototype
          , CR = wR.hasOwnProperty;
        function NR(e) {
            var t = this.__data__;
            if (SR) {
                var r = t[e];
                return r === RR ? void 0 : r
            }
            return CR.call(t, e) ? t[e] : void 0
        }
        bd.exports = NR
    }
    );
    var Rd = u( (nj, Sd) => {
        var qR = Fr()
          , PR = Object.prototype
          , xR = PR.hasOwnProperty;
        function LR(e) {
            var t = this.__data__;
            return qR ? t[e] !== void 0 : xR.call(t, e)
        }
        Sd.exports = LR
    }
    );
    var Cd = u( (ij, wd) => {
        var MR = Fr()
          , DR = "__lodash_hash_undefined__";
        function FR(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = MR && t === void 0 ? DR : t,
            this
        }
        wd.exports = FR
    }
    );
    var qd = u( (oj, Nd) => {
        var GR = Td()
          , XR = Od()
          , VR = Ad()
          , UR = Rd()
          , BR = Cd();
        function ir(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ir.prototype.clear = GR;
        ir.prototype.delete = XR;
        ir.prototype.get = VR;
        ir.prototype.has = UR;
        ir.prototype.set = BR;
        Nd.exports = ir
    }
    );
    var Ld = u( (aj, xd) => {
        var Pd = qd()
          , WR = Dr()
          , jR = Fn();
        function HR() {
            this.size = 0,
            this.__data__ = {
                hash: new Pd,
                map: new (jR || WR),
                string: new Pd
            }
        }
        xd.exports = HR
    }
    );
    var Dd = u( (sj, Md) => {
        function kR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Md.exports = kR
    }
    );
    var Gr = u( (uj, Fd) => {
        var KR = Dd();
        function zR(e, t) {
            var r = e.__data__;
            return KR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Fd.exports = zR
    }
    );
    var Xd = u( (cj, Gd) => {
        var YR = Gr();
        function $R(e) {
            var t = YR(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Gd.exports = $R
    }
    );
    var Ud = u( (lj, Vd) => {
        var QR = Gr();
        function ZR(e) {
            return QR(this, e).get(e)
        }
        Vd.exports = ZR
    }
    );
    var Wd = u( (fj, Bd) => {
        var JR = Gr();
        function ew(e) {
            return JR(this, e).has(e)
        }
        Bd.exports = ew
    }
    );
    var Hd = u( (dj, jd) => {
        var tw = Gr();
        function rw(e, t) {
            var r = tw(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        jd.exports = rw
    }
    );
    var Gn = u( (pj, kd) => {
        var nw = Ld()
          , iw = Xd()
          , ow = Ud()
          , aw = Wd()
          , sw = Hd();
        function or(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        or.prototype.clear = nw;
        or.prototype.delete = iw;
        or.prototype.get = ow;
        or.prototype.has = aw;
        or.prototype.set = sw;
        kd.exports = or
    }
    );
    var zd = u( (vj, Kd) => {
        var uw = Dr()
          , cw = Fn()
          , lw = Gn()
          , fw = 200;
        function dw(e, t) {
            var r = this.__data__;
            if (r instanceof uw) {
                var n = r.__data__;
                if (!cw || n.length < fw - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new lw(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        Kd.exports = dw
    }
    );
    var aa = u( (hj, Yd) => {
        var pw = Dr()
          , vw = Qf()
          , hw = Jf()
          , Ew = td()
          , gw = nd()
          , _w = zd();
        function ar(e) {
            var t = this.__data__ = new pw(e);
            this.size = t.size
        }
        ar.prototype.clear = vw;
        ar.prototype.delete = hw;
        ar.prototype.get = Ew;
        ar.prototype.has = gw;
        ar.prototype.set = _w;
        Yd.exports = ar
    }
    );
    var Qd = u( (Ej, $d) => {
        var yw = "__lodash_hash_undefined__";
        function Iw(e) {
            return this.__data__.set(e, yw),
            this
        }
        $d.exports = Iw
    }
    );
    var Jd = u( (gj, Zd) => {
        function Tw(e) {
            return this.__data__.has(e)
        }
        Zd.exports = Tw
    }
    );
    var tp = u( (_j, ep) => {
        var mw = Gn()
          , Ow = Qd()
          , bw = Jd();
        function Xn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new mw; ++t < r; )
                this.add(e[t])
        }
        Xn.prototype.add = Xn.prototype.push = Ow;
        Xn.prototype.has = bw;
        ep.exports = Xn
    }
    );
    var np = u( (yj, rp) => {
        function Aw(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        rp.exports = Aw
    }
    );
    var op = u( (Ij, ip) => {
        function Sw(e, t) {
            return e.has(t)
        }
        ip.exports = Sw
    }
    );
    var sa = u( (Tj, ap) => {
        var Rw = tp()
          , ww = np()
          , Cw = op()
          , Nw = 1
          , qw = 2;
        function Pw(e, t, r, n, o, i) {
            var a = r & Nw
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var f = i.get(e)
              , v = i.get(t);
            if (f && v)
                return f == t && v == e;
            var p = -1
              , h = !0
              , y = r & qw ? new Rw : void 0;
            for (i.set(e, t),
            i.set(t, e); ++p < s; ) {
                var m = e[p]
                  , I = t[p];
                if (n)
                    var q = a ? n(I, m, p, t, e, i) : n(m, I, p, e, t, i);
                if (q !== void 0) {
                    if (q)
                        continue;
                    h = !1;
                    break
                }
                if (y) {
                    if (!ww(t, function(R, w) {
                        if (!Cw(y, w) && (m === R || o(m, R, r, n, i)))
                            return y.push(w)
                    })) {
                        h = !1;
                        break
                    }
                } else if (!(m === I || o(m, I, r, n, i))) {
                    h = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            h
        }
        ap.exports = Pw
    }
    );
    var up = u( (mj, sp) => {
        var xw = $e()
          , Lw = xw.Uint8Array;
        sp.exports = Lw
    }
    );
    var lp = u( (Oj, cp) => {
        function Mw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        cp.exports = Mw
    }
    );
    var dp = u( (bj, fp) => {
        function Dw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        fp.exports = Dw
    }
    );
    var gp = u( (Aj, Ep) => {
        var pp = Qt()
          , vp = up()
          , Fw = Dn()
          , Gw = sa()
          , Xw = lp()
          , Vw = dp()
          , Uw = 1
          , Bw = 2
          , Ww = "[object Boolean]"
          , jw = "[object Date]"
          , Hw = "[object Error]"
          , kw = "[object Map]"
          , Kw = "[object Number]"
          , zw = "[object RegExp]"
          , Yw = "[object Set]"
          , $w = "[object String]"
          , Qw = "[object Symbol]"
          , Zw = "[object ArrayBuffer]"
          , Jw = "[object DataView]"
          , hp = pp ? pp.prototype : void 0
          , ua = hp ? hp.valueOf : void 0;
        function eC(e, t, r, n, o, i, a) {
            switch (r) {
            case Jw:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case Zw:
                return !(e.byteLength != t.byteLength || !i(new vp(e), new vp(t)));
            case Ww:
            case jw:
            case Kw:
                return Fw(+e, +t);
            case Hw:
                return e.name == t.name && e.message == t.message;
            case zw:
            case $w:
                return e == t + "";
            case kw:
                var s = Xw;
            case Yw:
                var c = n & Uw;
                if (s || (s = Vw),
                e.size != t.size && !c)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                n |= Bw,
                a.set(e, t);
                var v = Gw(s(e), s(t), n, o, i, a);
                return a.delete(e),
                v;
            case Qw:
                if (ua)
                    return ua.call(e) == ua.call(t)
            }
            return !1
        }
        Ep.exports = eC
    }
    );
    var Vn = u( (Sj, _p) => {
        function tC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        _p.exports = tC
    }
    );
    var Ae = u( (Rj, yp) => {
        var rC = Array.isArray;
        yp.exports = rC
    }
    );
    var ca = u( (wj, Ip) => {
        var nC = Vn()
          , iC = Ae();
        function oC(e, t, r) {
            var n = t(e);
            return iC(e) ? n : nC(n, r(e))
        }
        Ip.exports = oC
    }
    );
    var mp = u( (Cj, Tp) => {
        function aC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Tp.exports = aC
    }
    );
    var la = u( (Nj, Op) => {
        function sC() {
            return []
        }
        Op.exports = sC
    }
    );
    var fa = u( (qj, Ap) => {
        var uC = mp()
          , cC = la()
          , lC = Object.prototype
          , fC = lC.propertyIsEnumerable
          , bp = Object.getOwnPropertySymbols
          , dC = bp ? function(e) {
            return e == null ? [] : (e = Object(e),
            uC(bp(e), function(t) {
                return fC.call(e, t)
            }))
        }
        : cC;
        Ap.exports = dC
    }
    );
    var Rp = u( (Pj, Sp) => {
        function pC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Sp.exports = pC
    }
    );
    var Cp = u( (xj, wp) => {
        var vC = bt()
          , hC = Et()
          , EC = "[object Arguments]";
        function gC(e) {
            return hC(e) && vC(e) == EC
        }
        wp.exports = gC
    }
    );
    var Xr = u( (Lj, Pp) => {
        var Np = Cp()
          , _C = Et()
          , qp = Object.prototype
          , yC = qp.hasOwnProperty
          , IC = qp.propertyIsEnumerable
          , TC = Np(function() {
            return arguments
        }()) ? Np : function(e) {
            return _C(e) && yC.call(e, "callee") && !IC.call(e, "callee")
        }
        ;
        Pp.exports = TC
    }
    );
    var Lp = u( (Mj, xp) => {
        function mC() {
            return !1
        }
        xp.exports = mC
    }
    );
    var Un = u( (Vr, sr) => {
        var OC = $e()
          , bC = Lp()
          , Fp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr
          , Mp = Fp && typeof sr == "object" && sr && !sr.nodeType && sr
          , AC = Mp && Mp.exports === Fp
          , Dp = AC ? OC.Buffer : void 0
          , SC = Dp ? Dp.isBuffer : void 0
          , RC = SC || bC;
        sr.exports = RC
    }
    );
    var Bn = u( (Dj, Gp) => {
        var wC = 9007199254740991
          , CC = /^(?:0|[1-9]\d*)$/;
        function NC(e, t) {
            var r = typeof e;
            return t = t ?? wC,
            !!t && (r == "number" || r != "symbol" && CC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Gp.exports = NC
    }
    );
    var Wn = u( (Fj, Xp) => {
        var qC = 9007199254740991;
        function PC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qC
        }
        Xp.exports = PC
    }
    );
    var Up = u( (Gj, Vp) => {
        var xC = bt()
          , LC = Wn()
          , MC = Et()
          , DC = "[object Arguments]"
          , FC = "[object Array]"
          , GC = "[object Boolean]"
          , XC = "[object Date]"
          , VC = "[object Error]"
          , UC = "[object Function]"
          , BC = "[object Map]"
          , WC = "[object Number]"
          , jC = "[object Object]"
          , HC = "[object RegExp]"
          , kC = "[object Set]"
          , KC = "[object String]"
          , zC = "[object WeakMap]"
          , YC = "[object ArrayBuffer]"
          , $C = "[object DataView]"
          , QC = "[object Float32Array]"
          , ZC = "[object Float64Array]"
          , JC = "[object Int8Array]"
          , eN = "[object Int16Array]"
          , tN = "[object Int32Array]"
          , rN = "[object Uint8Array]"
          , nN = "[object Uint8ClampedArray]"
          , iN = "[object Uint16Array]"
          , oN = "[object Uint32Array]"
          , ce = {};
        ce[QC] = ce[ZC] = ce[JC] = ce[eN] = ce[tN] = ce[rN] = ce[nN] = ce[iN] = ce[oN] = !0;
        ce[DC] = ce[FC] = ce[YC] = ce[GC] = ce[$C] = ce[XC] = ce[VC] = ce[UC] = ce[BC] = ce[WC] = ce[jC] = ce[HC] = ce[kC] = ce[KC] = ce[zC] = !1;
        function aN(e) {
            return MC(e) && LC(e.length) && !!ce[xC(e)]
        }
        Vp.exports = aN
    }
    );
    var Wp = u( (Xj, Bp) => {
        function sN(e) {
            return function(t) {
                return e(t)
            }
        }
        Bp.exports = sN
    }
    );
    var Hp = u( (Ur, ur) => {
        var uN = Lo()
          , jp = typeof Ur == "object" && Ur && !Ur.nodeType && Ur
          , Br = jp && typeof ur == "object" && ur && !ur.nodeType && ur
          , cN = Br && Br.exports === jp
          , da = cN && uN.process
          , lN = function() {
            try {
                var e = Br && Br.require && Br.require("util").types;
                return e || da && da.binding && da.binding("util")
            } catch {}
        }();
        ur.exports = lN
    }
    );
    var jn = u( (Vj, zp) => {
        var fN = Up()
          , dN = Wp()
          , kp = Hp()
          , Kp = kp && kp.isTypedArray
          , pN = Kp ? dN(Kp) : fN;
        zp.exports = pN
    }
    );
    var pa = u( (Uj, Yp) => {
        var vN = Rp()
          , hN = Xr()
          , EN = Ae()
          , gN = Un()
          , _N = Bn()
          , yN = jn()
          , IN = Object.prototype
          , TN = IN.hasOwnProperty;
        function mN(e, t) {
            var r = EN(e)
              , n = !r && hN(e)
              , o = !r && !n && gN(e)
              , i = !r && !n && !o && yN(e)
              , a = r || n || o || i
              , s = a ? vN(e.length, String) : []
              , c = s.length;
            for (var f in e)
                (t || TN.call(e, f)) && !(a && (f == "length" || o && (f == "offset" || f == "parent") || i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || _N(f, c))) && s.push(f);
            return s
        }
        Yp.exports = mN
    }
    );
    var Hn = u( (Bj, $p) => {
        var ON = Object.prototype;
        function bN(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || ON;
            return e === r
        }
        $p.exports = bN
    }
    );
    var Zp = u( (Wj, Qp) => {
        var AN = Mo()
          , SN = AN(Object.keys, Object);
        Qp.exports = SN
    }
    );
    var kn = u( (jj, Jp) => {
        var RN = Hn()
          , wN = Zp()
          , CN = Object.prototype
          , NN = CN.hasOwnProperty;
        function qN(e) {
            if (!RN(e))
                return wN(e);
            var t = [];
            for (var r in Object(e))
                NN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Jp.exports = qN
    }
    );
    var Gt = u( (Hj, ev) => {
        var PN = na()
          , xN = Wn();
        function LN(e) {
            return e != null && xN(e.length) && !PN(e)
        }
        ev.exports = LN
    }
    );
    var Wr = u( (kj, tv) => {
        var MN = pa()
          , DN = kn()
          , FN = Gt();
        function GN(e) {
            return FN(e) ? MN(e) : DN(e)
        }
        tv.exports = GN
    }
    );
    var nv = u( (Kj, rv) => {
        var XN = ca()
          , VN = fa()
          , UN = Wr();
        function BN(e) {
            return XN(e, UN, VN)
        }
        rv.exports = BN
    }
    );
    var av = u( (zj, ov) => {
        var iv = nv()
          , WN = 1
          , jN = Object.prototype
          , HN = jN.hasOwnProperty;
        function kN(e, t, r, n, o, i) {
            var a = r & WN
              , s = iv(e)
              , c = s.length
              , f = iv(t)
              , v = f.length;
            if (c != v && !a)
                return !1;
            for (var p = c; p--; ) {
                var h = s[p];
                if (!(a ? h in t : HN.call(t, h)))
                    return !1
            }
            var y = i.get(e)
              , m = i.get(t);
            if (y && m)
                return y == t && m == e;
            var I = !0;
            i.set(e, t),
            i.set(t, e);
            for (var q = a; ++p < c; ) {
                h = s[p];
                var R = e[h]
                  , w = t[h];
                if (n)
                    var T = a ? n(w, R, h, t, e, i) : n(R, w, h, e, t, i);
                if (!(T === void 0 ? R === w || o(R, w, r, n, i) : T)) {
                    I = !1;
                    break
                }
                q || (q = h == "constructor")
            }
            if (I && !q) {
                var G = e.constructor
                  , D = t.constructor;
                G != D && "constructor"in e && "constructor"in t && !(typeof G == "function" && G instanceof G && typeof D == "function" && D instanceof D) && (I = !1)
            }
            return i.delete(e),
            i.delete(t),
            I
        }
        ov.exports = kN
    }
    );
    var uv = u( (Yj, sv) => {
        var KN = At()
          , zN = $e()
          , YN = KN(zN, "DataView");
        sv.exports = YN
    }
    );
    var lv = u( ($j, cv) => {
        var $N = At()
          , QN = $e()
          , ZN = $N(QN, "Promise");
        cv.exports = ZN
    }
    );
    var dv = u( (Qj, fv) => {
        var JN = At()
          , eq = $e()
          , tq = JN(eq, "Set");
        fv.exports = tq
    }
    );
    var va = u( (Zj, pv) => {
        var rq = At()
          , nq = $e()
          , iq = rq(nq, "WeakMap");
        pv.exports = iq
    }
    );
    var Kn = u( (Jj, Iv) => {
        var ha = uv()
          , Ea = Fn()
          , ga = lv()
          , _a = dv()
          , ya = va()
          , yv = bt()
          , cr = oa()
          , vv = "[object Map]"
          , oq = "[object Object]"
          , hv = "[object Promise]"
          , Ev = "[object Set]"
          , gv = "[object WeakMap]"
          , _v = "[object DataView]"
          , aq = cr(ha)
          , sq = cr(Ea)
          , uq = cr(ga)
          , cq = cr(_a)
          , lq = cr(ya)
          , Xt = yv;
        (ha && Xt(new ha(new ArrayBuffer(1))) != _v || Ea && Xt(new Ea) != vv || ga && Xt(ga.resolve()) != hv || _a && Xt(new _a) != Ev || ya && Xt(new ya) != gv) && (Xt = function(e) {
            var t = yv(e)
              , r = t == oq ? e.constructor : void 0
              , n = r ? cr(r) : "";
            if (n)
                switch (n) {
                case aq:
                    return _v;
                case sq:
                    return vv;
                case uq:
                    return hv;
                case cq:
                    return Ev;
                case lq:
                    return gv
                }
            return t
        }
        );
        Iv.exports = Xt
    }
    );
    var wv = u( (eH, Rv) => {
        var Ia = aa()
          , fq = sa()
          , dq = gp()
          , pq = av()
          , Tv = Kn()
          , mv = Ae()
          , Ov = Un()
          , vq = jn()
          , hq = 1
          , bv = "[object Arguments]"
          , Av = "[object Array]"
          , zn = "[object Object]"
          , Eq = Object.prototype
          , Sv = Eq.hasOwnProperty;
        function gq(e, t, r, n, o, i) {
            var a = mv(e)
              , s = mv(t)
              , c = a ? Av : Tv(e)
              , f = s ? Av : Tv(t);
            c = c == bv ? zn : c,
            f = f == bv ? zn : f;
            var v = c == zn
              , p = f == zn
              , h = c == f;
            if (h && Ov(e)) {
                if (!Ov(t))
                    return !1;
                a = !0,
                v = !1
            }
            if (h && !v)
                return i || (i = new Ia),
                a || vq(e) ? fq(e, t, r, n, o, i) : dq(e, t, c, r, n, o, i);
            if (!(r & hq)) {
                var y = v && Sv.call(e, "__wrapped__")
                  , m = p && Sv.call(t, "__wrapped__");
                if (y || m) {
                    var I = y ? e.value() : e
                      , q = m ? t.value() : t;
                    return i || (i = new Ia),
                    o(I, q, r, n, i)
                }
            }
            return h ? (i || (i = new Ia),
            pq(e, t, r, n, o, i)) : !1
        }
        Rv.exports = gq
    }
    );
    var Ta = u( (tH, qv) => {
        var _q = wv()
          , Cv = Et();
        function Nv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Cv(e) && !Cv(t) ? e !== e && t !== t : _q(e, t, r, n, Nv, o)
        }
        qv.exports = Nv
    }
    );
    var xv = u( (rH, Pv) => {
        var yq = aa()
          , Iq = Ta()
          , Tq = 1
          , mq = 2;
        function Oq(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                s = r[o];
                var c = s[0]
                  , f = e[c]
                  , v = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e))
                        return !1
                } else {
                    var p = new yq;
                    if (n)
                        var h = n(f, v, c, e, t, p);
                    if (!(h === void 0 ? Iq(v, f, Tq | mq, n, p) : h))
                        return !1
                }
            }
            return !0
        }
        Pv.exports = Oq
    }
    );
    var ma = u( (nH, Lv) => {
        var bq = at();
        function Aq(e) {
            return e === e && !bq(e)
        }
        Lv.exports = Aq
    }
    );
    var Dv = u( (iH, Mv) => {
        var Sq = ma()
          , Rq = Wr();
        function wq(e) {
            for (var t = Rq(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, Sq(o)]
            }
            return t
        }
        Mv.exports = wq
    }
    );
    var Oa = u( (oH, Fv) => {
        function Cq(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Fv.exports = Cq
    }
    );
    var Xv = u( (aH, Gv) => {
        var Nq = xv()
          , qq = Dv()
          , Pq = Oa();
        function xq(e) {
            var t = qq(e);
            return t.length == 1 && t[0][2] ? Pq(t[0][0], t[0][1]) : function(r) {
                return r === e || Nq(r, e, t)
            }
        }
        Gv.exports = xq
    }
    );
    var jr = u( (sH, Vv) => {
        var Lq = bt()
          , Mq = Et()
          , Dq = "[object Symbol]";
        function Fq(e) {
            return typeof e == "symbol" || Mq(e) && Lq(e) == Dq
        }
        Vv.exports = Fq
    }
    );
    var Yn = u( (uH, Uv) => {
        var Gq = Ae()
          , Xq = jr()
          , Vq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , Uq = /^\w*$/;
        function Bq(e, t) {
            if (Gq(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || Xq(e) ? !0 : Uq.test(e) || !Vq.test(e) || t != null && e in Object(t)
        }
        Uv.exports = Bq
    }
    );
    var jv = u( (cH, Wv) => {
        var Bv = Gn()
          , Wq = "Expected a function";
        function ba(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(Wq);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (ba.Cache || Bv),
            r
        }
        ba.Cache = Bv;
        Wv.exports = ba
    }
    );
    var kv = u( (lH, Hv) => {
        var jq = jv()
          , Hq = 500;
        function kq(e) {
            var t = jq(e, function(n) {
                return r.size === Hq && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Hv.exports = kq
    }
    );
    var zv = u( (fH, Kv) => {
        var Kq = kv()
          , zq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , Yq = /\\(\\)?/g
          , $q = Kq(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(zq, function(r, n, o, i) {
                t.push(o ? i.replace(Yq, "$1") : n || r)
            }),
            t
        });
        Kv.exports = $q
    }
    );
    var Aa = u( (dH, Yv) => {
        function Qq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        Yv.exports = Qq
    }
    );
    var th = u( (pH, eh) => {
        var $v = Qt()
          , Zq = Aa()
          , Jq = Ae()
          , eP = jr()
          , tP = 1 / 0
          , Qv = $v ? $v.prototype : void 0
          , Zv = Qv ? Qv.toString : void 0;
        function Jv(e) {
            if (typeof e == "string")
                return e;
            if (Jq(e))
                return Zq(e, Jv) + "";
            if (eP(e))
                return Zv ? Zv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -tP ? "-0" : t
        }
        eh.exports = Jv
    }
    );
    var nh = u( (vH, rh) => {
        var rP = th();
        function nP(e) {
            return e == null ? "" : rP(e)
        }
        rh.exports = nP
    }
    );
    var Hr = u( (hH, ih) => {
        var iP = Ae()
          , oP = Yn()
          , aP = zv()
          , sP = nh();
        function uP(e, t) {
            return iP(e) ? e : oP(e, t) ? [e] : aP(sP(e))
        }
        ih.exports = uP
    }
    );
    var lr = u( (EH, oh) => {
        var cP = jr()
          , lP = 1 / 0;
        function fP(e) {
            if (typeof e == "string" || cP(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -lP ? "-0" : t
        }
        oh.exports = fP
    }
    );
    var $n = u( (gH, ah) => {
        var dP = Hr()
          , pP = lr();
        function vP(e, t) {
            t = dP(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[pP(t[r++])];
            return r && r == n ? e : void 0
        }
        ah.exports = vP
    }
    );
    var Qn = u( (_H, sh) => {
        var hP = $n();
        function EP(e, t, r) {
            var n = e == null ? void 0 : hP(e, t);
            return n === void 0 ? r : n
        }
        sh.exports = EP
    }
    );
    var ch = u( (yH, uh) => {
        function gP(e, t) {
            return e != null && t in Object(e)
        }
        uh.exports = gP
    }
    );
    var fh = u( (IH, lh) => {
        var _P = Hr()
          , yP = Xr()
          , IP = Ae()
          , TP = Bn()
          , mP = Wn()
          , OP = lr();
        function bP(e, t, r) {
            t = _P(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = OP(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && mP(o) && TP(a, o) && (IP(e) || yP(e)))
        }
        lh.exports = bP
    }
    );
    var ph = u( (TH, dh) => {
        var AP = ch()
          , SP = fh();
        function RP(e, t) {
            return e != null && SP(e, t, AP)
        }
        dh.exports = RP
    }
    );
    var hh = u( (mH, vh) => {
        var wP = Ta()
          , CP = Qn()
          , NP = ph()
          , qP = Yn()
          , PP = ma()
          , xP = Oa()
          , LP = lr()
          , MP = 1
          , DP = 2;
        function FP(e, t) {
            return qP(e) && PP(t) ? xP(LP(e), t) : function(r) {
                var n = CP(r, e);
                return n === void 0 && n === t ? NP(r, e) : wP(t, n, MP | DP)
            }
        }
        vh.exports = FP
    }
    );
    var Zn = u( (OH, Eh) => {
        function GP(e) {
            return e
        }
        Eh.exports = GP
    }
    );
    var Sa = u( (bH, gh) => {
        function XP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        gh.exports = XP
    }
    );
    var yh = u( (AH, _h) => {
        var VP = $n();
        function UP(e) {
            return function(t) {
                return VP(t, e)
            }
        }
        _h.exports = UP
    }
    );
    var Th = u( (SH, Ih) => {
        var BP = Sa()
          , WP = yh()
          , jP = Yn()
          , HP = lr();
        function kP(e) {
            return jP(e) ? BP(HP(e)) : WP(e)
        }
        Ih.exports = kP
    }
    );
    var St = u( (RH, mh) => {
        var KP = Xv()
          , zP = hh()
          , YP = Zn()
          , $P = Ae()
          , QP = Th();
        function ZP(e) {
            return typeof e == "function" ? e : e == null ? YP : typeof e == "object" ? $P(e) ? zP(e[0], e[1]) : KP(e) : QP(e)
        }
        mh.exports = ZP
    }
    );
    var Ra = u( (wH, Oh) => {
        var JP = St()
          , ex = Gt()
          , tx = Wr();
        function rx(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!ex(t)) {
                    var i = JP(r, 3);
                    t = tx(t),
                    r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Oh.exports = rx
    }
    );
    var wa = u( (CH, bh) => {
        function nx(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        bh.exports = nx
    }
    );
    var Sh = u( (NH, Ah) => {
        var ix = /\s/;
        function ox(e) {
            for (var t = e.length; t-- && ix.test(e.charAt(t)); )
                ;
            return t
        }
        Ah.exports = ox
    }
    );
    var wh = u( (qH, Rh) => {
        var ax = Sh()
          , sx = /^\s+/;
        function ux(e) {
            return e && e.slice(0, ax(e) + 1).replace(sx, "")
        }
        Rh.exports = ux
    }
    );
    var Jn = u( (PH, qh) => {
        var cx = wh()
          , Ch = at()
          , lx = jr()
          , Nh = 0 / 0
          , fx = /^[-+]0x[0-9a-f]+$/i
          , dx = /^0b[01]+$/i
          , px = /^0o[0-7]+$/i
          , vx = parseInt;
        function hx(e) {
            if (typeof e == "number")
                return e;
            if (lx(e))
                return Nh;
            if (Ch(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Ch(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = cx(e);
            var r = dx.test(e);
            return r || px.test(e) ? vx(e.slice(2), r ? 2 : 8) : fx.test(e) ? Nh : +e
        }
        qh.exports = hx
    }
    );
    var Lh = u( (xH, xh) => {
        var Ex = Jn()
          , Ph = 1 / 0
          , gx = 17976931348623157e292;
        function _x(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = Ex(e),
            e === Ph || e === -Ph) {
                var t = e < 0 ? -1 : 1;
                return t * gx
            }
            return e === e ? e : 0
        }
        xh.exports = _x
    }
    );
    var Ca = u( (LH, Mh) => {
        var yx = Lh();
        function Ix(e) {
            var t = yx(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Mh.exports = Ix
    }
    );
    var Fh = u( (MH, Dh) => {
        var Tx = wa()
          , mx = St()
          , Ox = Ca()
          , bx = Math.max;
        function Ax(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : Ox(r);
            return o < 0 && (o = bx(n + o, 0)),
            Tx(e, mx(t, 3), o)
        }
        Dh.exports = Ax
    }
    );
    var Na = u( (DH, Gh) => {
        var Sx = Ra()
          , Rx = Fh()
          , wx = Sx(Rx);
        Gh.exports = wx
    }
    );
    var ti = u(Pe => {
        "use strict";
        var Cx = Ke().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.withBrowser = Pe.TRANSFORM_STYLE_PREFIXED = Pe.TRANSFORM_PREFIXED = Pe.IS_BROWSER_ENV = Pe.FLEX_PREFIXED = Pe.ELEMENT_MATCHES = void 0;
        var Nx = Cx(Na())
          , Vh = typeof window < "u";
        Pe.IS_BROWSER_ENV = Vh;
        var ei = (e, t) => Vh ? e() : t;
        Pe.withBrowser = ei;
        var qx = ei( () => (0,
        Nx.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Pe.ELEMENT_MATCHES = qx;
        var Px = ei( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex");
        Pe.FLEX_PREFIXED = Px;
        var Uh = ei( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform");
        Pe.TRANSFORM_PREFIXED = Uh;
        var Xh = Uh.split("transform")[0]
          , xx = Xh ? Xh + "TransformStyle" : "transformStyle";
        Pe.TRANSFORM_STYLE_PREFIXED = xx
    }
    );
    var qa = u( (GH, kh) => {
        var Lx = 4
          , Mx = .001
          , Dx = 1e-7
          , Fx = 10
          , kr = 11
          , ri = 1 / (kr - 1)
          , Gx = typeof Float32Array == "function";
        function Bh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Wh(e, t) {
            return 3 * t - 6 * e
        }
        function jh(e) {
            return 3 * e
        }
        function ni(e, t, r) {
            return ((Bh(t, r) * e + Wh(t, r)) * e + jh(t)) * e
        }
        function Hh(e, t, r) {
            return 3 * Bh(t, r) * e * e + 2 * Wh(t, r) * e + jh(t)
        }
        function Xx(e, t, r, n, o) {
            var i, a, s = 0;
            do
                a = t + (r - t) / 2,
                i = ni(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > Dx && ++s < Fx);
            return a
        }
        function Vx(e, t, r, n) {
            for (var o = 0; o < Lx; ++o) {
                var i = Hh(t, r, n);
                if (i === 0)
                    return t;
                var a = ni(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        kh.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = Gx ? new Float32Array(kr) : new Array(kr);
            if (t !== r || n !== o)
                for (var a = 0; a < kr; ++a)
                    i[a] = ni(a * ri, t, n);
            function s(c) {
                for (var f = 0, v = 1, p = kr - 1; v !== p && i[v] <= c; ++v)
                    f += ri;
                --v;
                var h = (c - i[v]) / (i[v + 1] - i[v])
                  , y = f + h * ri
                  , m = Hh(y, t, n);
                return m >= Mx ? Vx(c, y, t, n) : m === 0 ? y : Xx(c, f, f + ri, t, n)
            }
            return function(f) {
                return t === r && n === o ? f : f === 0 ? 0 : f === 1 ? 1 : ni(s(f), r, o)
            }
        }
    }
    );
    var Pa = u($ => {
        "use strict";
        var Ux = Ke().default;
        Object.defineProperty($, "__esModule", {
            value: !0
        });
        $.bounce = OL;
        $.bouncePast = bL;
        $.easeOut = $.easeInOut = $.easeIn = $.ease = void 0;
        $.inBack = vL;
        $.inCirc = lL;
        $.inCubic = Yx;
        $.inElastic = gL;
        $.inExpo = sL;
        $.inOutBack = EL;
        $.inOutCirc = dL;
        $.inOutCubic = Qx;
        $.inOutElastic = yL;
        $.inOutExpo = cL;
        $.inOutQuad = zx;
        $.inOutQuart = eL;
        $.inOutQuint = nL;
        $.inOutSine = aL;
        $.inQuad = kx;
        $.inQuart = Zx;
        $.inQuint = tL;
        $.inSine = iL;
        $.outBack = hL;
        $.outBounce = pL;
        $.outCirc = fL;
        $.outCubic = $x;
        $.outElastic = _L;
        $.outExpo = uL;
        $.outQuad = Kx;
        $.outQuart = Jx;
        $.outQuint = rL;
        $.outSine = oL;
        $.swingFrom = TL;
        $.swingFromTo = IL;
        $.swingTo = mL;
        var ii = Ux(qa())
          , _t = 1.70158
          , Bx = (0,
        ii.default)(.25, .1, .25, 1);
        $.ease = Bx;
        var Wx = (0,
        ii.default)(.42, 0, 1, 1);
        $.easeIn = Wx;
        var jx = (0,
        ii.default)(0, 0, .58, 1);
        $.easeOut = jx;
        var Hx = (0,
        ii.default)(.42, 0, .58, 1);
        $.easeInOut = Hx;
        function kx(e) {
            return Math.pow(e, 2)
        }
        function Kx(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function zx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function Yx(e) {
            return Math.pow(e, 3)
        }
        function $x(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function Qx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function Zx(e) {
            return Math.pow(e, 4)
        }
        function Jx(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function eL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function tL(e) {
            return Math.pow(e, 5)
        }
        function rL(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function nL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function iL(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }
        function oL(e) {
            return Math.sin(e * (Math.PI / 2))
        }
        function aL(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function sL(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function uL(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function cL(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function lL(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function fL(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function dL(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function pL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function vL(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }
        function hL(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function EL(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function gL(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }
        function _L(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }
        function yL(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }
        function IL(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function TL(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }
        function mL(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function OL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function bL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    }
    );
    var La = u(Kr => {
        "use strict";
        var AL = Ke().default
          , SL = Lt().default;
        Object.defineProperty(Kr, "__esModule", {
            value: !0
        });
        Kr.applyEasing = CL;
        Kr.createBezierEasing = wL;
        Kr.optimizeFloat = xa;
        var Kh = SL(Pa())
          , RL = AL(qa());
        function xa(e, t=5, r=10) {
            let n = Math.pow(r, t)
              , o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }
        function wL(e) {
            return (0,
            RL.default)(...e)
        }
        function CL(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : xa(r ? t > 0 ? r(t) : t : t > 0 && e && Kh[e] ? Kh[e](t) : t)
        }
    }
    );
    var Qh = u(fr => {
        "use strict";
        Object.defineProperty(fr, "__esModule", {
            value: !0
        });
        fr.createElementState = $h;
        fr.ixElements = void 0;
        fr.mergeActionState = Ma;
        var oi = rr()
          , Yh = De()
          , {HTML_ELEMENT: UH, PLAIN_OBJECT: NL, ABSTRACT_NODE: BH, CONFIG_X_VALUE: qL, CONFIG_Y_VALUE: PL, CONFIG_Z_VALUE: xL, CONFIG_VALUE: LL, CONFIG_X_UNIT: ML, CONFIG_Y_UNIT: DL, CONFIG_Z_UNIT: FL, CONFIG_UNIT: GL} = Yh.IX2EngineConstants
          , {IX2_SESSION_STOPPED: XL, IX2_INSTANCE_ADDED: VL, IX2_ELEMENT_STATE_CHANGED: UL} = Yh.IX2EngineActionTypes
          , zh = {}
          , BL = "refState"
          , WL = (e=zh, t={}) => {
            switch (t.type) {
            case XL:
                return zh;
            case VL:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: s} = i
                      , c = e;
                    return (0,
                    oi.getIn)(c, [r, n]) !== n && (c = $h(c, n, a, r, i)),
                    Ma(c, r, s, o, i)
                }
            case UL:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return Ma(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        fr.ixElements = WL;
        function $h(e, t, r, n, o) {
            let i = r === NL ? (0,
            oi.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0,
            oi.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }
        function Ma(e, t, r, n, o) {
            let i = HL(o)
              , a = [t, BL, r];
            return (0,
            oi.mergeIn)(e, a, n, i)
        }
        var jL = [[qL, ML], [PL, DL], [xL, FL], [LL, GL]];
        function HL(e) {
            let {config: t} = e;
            return jL.reduce( (r, n) => {
                let o = n[0]
                  , i = n[1]
                  , a = t[o]
                  , s = t[i];
                return a != null && s != null && (r[i] = s),
                r
            }
            , {})
        }
    }
    );
    var Zh = u(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var kL = e => e.value;
        Se.getPluginConfig = kL;
        var KL = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Se.getPluginDuration = KL;
        var zL = e => e || {
            value: 0
        };
        Se.getPluginOrigin = zL;
        var YL = e => ({
            value: e.value
        });
        Se.getPluginDestination = YL;
        var $L = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Se.createPluginInstance = $L;
        var QL = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Se.renderPlugin = QL;
        var ZL = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Se.clearPlugin = ZL
    }
    );
    var eE = u(Re => {
        "use strict";
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.renderPlugin = Re.getPluginOrigin = Re.getPluginDuration = Re.getPluginDestination = Re.getPluginConfig = Re.createPluginInstance = Re.clearPlugin = void 0;
        var JL = e => document.querySelector(`[data-w-id="${e}"]`)
          , eM = () => window.Webflow.require("spline")
          , tM = (e, t) => e.filter(r => !t.includes(r))
          , rM = (e, t) => e.value[t];
        Re.getPluginConfig = rM;
        var nM = () => null;
        Re.getPluginDuration = nM;
        var Jh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , iM = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = tM(n, i);
                return a.length ? a.reduce( (c, f) => (c[f] = Jh[f],
                c), e) : e
            }
            return n.reduce( (i, a) => (i[a] = Jh[a],
            i), {})
        }
        ;
        Re.getPluginOrigin = iM;
        var oM = e => e.value;
        Re.getPluginDestination = oM;
        var aM = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? JL(o) : null
        }
        ;
        Re.createPluginInstance = aM;
        var sM = (e, t, r) => {
            let n = eM().getInstance(e)
              , o = r.config.target.objectId;
            if (!n || !o)
                return;
            let i = n.spline.findObjectById(o);
            if (!i)
                return;
            let {PLUGIN_SPLINE: a} = t;
            a.positionX != null && (i.position.x = a.positionX),
            a.positionY != null && (i.position.y = a.positionY),
            a.positionZ != null && (i.position.z = a.positionZ),
            a.rotationX != null && (i.rotation.x = a.rotationX),
            a.rotationY != null && (i.rotation.y = a.rotationY),
            a.rotationZ != null && (i.rotation.z = a.rotationZ),
            a.scaleX != null && (i.scale.x = a.scaleX),
            a.scaleY != null && (i.scale.y = a.scaleY),
            a.scaleZ != null && (i.scale.z = a.scaleZ)
        }
        ;
        Re.renderPlugin = sM;
        var uM = () => null;
        Re.clearPlugin = uM
    }
    );
    var rE = u(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        Te.normalizeColor = tE;
        Te.renderPlugin = void 0;
        function tE(e) {
            let t, r, n, o = 1, i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16),
                r = parseInt(a[1] + a[1], 16),
                n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16),
                r = parseInt(a.substring(2, 4), 16),
                n = parseInt(a.substring(4, 6), 16))
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10),
                o = parseFloat(a[3])
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10)
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , s = parseFloat(a[0])
                  , c = parseFloat(a[1].replace("%", "")) / 100
                  , f = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let v = (1 - Math.abs(2 * f - 1)) * c, p = v * (1 - Math.abs(s / 60 % 2 - 1)), h = f - v / 2, y, m, I;
                s >= 0 && s < 60 ? (y = v,
                m = p,
                I = 0) : s >= 60 && s < 120 ? (y = p,
                m = v,
                I = 0) : s >= 120 && s < 180 ? (y = 0,
                m = v,
                I = p) : s >= 180 && s < 240 ? (y = 0,
                m = p,
                I = v) : s >= 240 && s < 300 ? (y = p,
                m = 0,
                I = v) : (y = v,
                m = 0,
                I = p),
                t = Math.round((y + h) * 255),
                r = Math.round((m + h) * 255),
                n = Math.round((I + h) * 255)
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","), s = parseFloat(a[0]), c = parseFloat(a[1].replace("%", "")) / 100, f = parseFloat(a[2].replace("%", "")) / 100, v = (1 - Math.abs(2 * f - 1)) * c, p = v * (1 - Math.abs(s / 60 % 2 - 1)), h = f - v / 2, y, m, I;
                s >= 0 && s < 60 ? (y = v,
                m = p,
                I = 0) : s >= 60 && s < 120 ? (y = p,
                m = v,
                I = 0) : s >= 120 && s < 180 ? (y = 0,
                m = v,
                I = p) : s >= 180 && s < 240 ? (y = 0,
                m = p,
                I = v) : s >= 240 && s < 300 ? (y = p,
                m = 0,
                I = v) : (y = v,
                m = 0,
                I = p),
                t = Math.round((y + h) * 255),
                r = Math.round((m + h) * 255),
                n = Math.round((I + h) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
            {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
        var cM = (e, t) => e.value[t];
        Te.getPluginConfig = cM;
        var lM = () => null;
        Te.getPluginDuration = lM;
        var fM = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(o, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return tE(o)
        }
        ;
        Te.getPluginOrigin = fM;
        var dM = e => e.value;
        Te.getPluginDestination = dM;
        var pM = () => null;
        Te.createPluginInstance = pM;
        var vM = (e, t, r) => {
            let n = r.config.target.objectId, o = r.config.value.unit, {PLUGIN_VARIABLE: i} = t, {size: a, red: s, green: c, blue: f, alpha: v} = i, p;
            a != null && (p = a + o),
            s != null && f != null && c != null && v != null && (p = `rgba(${s}, ${c}, ${f}, ${v})`),
            p != null && document.documentElement.style.setProperty(n, p)
        }
        ;
        Te.renderPlugin = vM;
        var hM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        Te.clearPlugin = hM
    }
    );
    var nE = u(ai => {
        "use strict";
        var Ga = Lt().default
          , EM = Ke().default;
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        ai.pluginMethodMap = void 0;
        var Da = EM(tr())
          , Fa = De()
          , gM = Ga(Zh())
          , _M = Ga(eE())
          , yM = Ga(rE())
          , IM = new Map([[Fa.ActionTypeConsts.PLUGIN_LOTTIE, (0,
        Da.default)({}, gM)], [Fa.ActionTypeConsts.PLUGIN_SPLINE, (0,
        Da.default)({}, _M)], [Fa.ActionTypeConsts.PLUGIN_VARIABLE, (0,
        Da.default)({}, yM)]]);
        ai.pluginMethodMap = IM
    }
    );
    var Xa = u(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        me.getPluginOrigin = me.getPluginDuration = me.getPluginDestination = me.getPluginConfig = me.createPluginInstance = me.clearPlugin = void 0;
        me.isPluginType = mM;
        me.renderPlugin = void 0;
        var TM = ti()
          , iE = nE();
        function mM(e) {
            return iE.pluginMethodMap.has(e)
        }
        var Vt = e => t => {
            if (!TM.IS_BROWSER_ENV)
                return () => null;
            let r = iE.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , OM = Vt("getPluginConfig");
        me.getPluginConfig = OM;
        var bM = Vt("getPluginOrigin");
        me.getPluginOrigin = bM;
        var AM = Vt("getPluginDuration");
        me.getPluginDuration = AM;
        var SM = Vt("getPluginDestination");
        me.getPluginDestination = SM;
        var RM = Vt("createPluginInstance");
        me.createPluginInstance = RM;
        var wM = Vt("renderPlugin");
        me.renderPlugin = wM;
        var CM = Vt("clearPlugin");
        me.clearPlugin = CM
    }
    );
    var aE = u( (YH, oE) => {
        function NM(e, t) {
            return e == null || e !== e ? t : e
        }
        oE.exports = NM
    }
    );
    var uE = u( ($H, sE) => {
        function qM(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        sE.exports = qM
    }
    );
    var lE = u( (QH, cE) => {
        function PM(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1)
                        break
                }
                return t
            }
        }
        cE.exports = PM
    }
    );
    var dE = u( (ZH, fE) => {
        var xM = lE()
          , LM = xM();
        fE.exports = LM
    }
    );
    var Va = u( (JH, pE) => {
        var MM = dE()
          , DM = Wr();
        function FM(e, t) {
            return e && MM(e, t, DM)
        }
        pE.exports = FM
    }
    );
    var hE = u( (ek, vE) => {
        var GM = Gt();
        function XM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!GM(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        vE.exports = XM
    }
    );
    var Ua = u( (tk, EE) => {
        var VM = Va()
          , UM = hE()
          , BM = UM(VM);
        EE.exports = BM
    }
    );
    var _E = u( (rk, gE) => {
        function WM(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1,
                i) : t(r, i, a, s)
            }),
            r
        }
        gE.exports = WM
    }
    );
    var IE = u( (nk, yE) => {
        var jM = uE()
          , HM = Ua()
          , kM = St()
          , KM = _E()
          , zM = Ae();
        function YM(e, t, r) {
            var n = zM(e) ? jM : KM
              , o = arguments.length < 3;
            return n(e, kM(t, 4), r, o, HM)
        }
        yE.exports = YM
    }
    );
    var mE = u( (ik, TE) => {
        var $M = wa()
          , QM = St()
          , ZM = Ca()
          , JM = Math.max
          , eD = Math.min;
        function tD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = ZM(r),
            o = r < 0 ? JM(n + o, 0) : eD(o, n - 1)),
            $M(e, QM(t, 3), o, !0)
        }
        TE.exports = tD
    }
    );
    var bE = u( (ok, OE) => {
        var rD = Ra()
          , nD = mE()
          , iD = rD(nD);
        OE.exports = iD
    }
    );
    var SE = u(si => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = void 0;
        var oD = Object.prototype.hasOwnProperty;
        function AE(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }
        function aD(e, t) {
            if (AE(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            let r = Object.keys(e)
              , n = Object.keys(t);
            if (r.length !== n.length)
                return !1;
            for (let o = 0; o < r.length; o++)
                if (!oD.call(t, r[o]) || !AE(e[r[o]], t[r[o]]))
                    return !1;
            return !0
        }
        var sD = aD;
        si.default = sD
    }
    );
    var HE = u(ue => {
        "use strict";
        var fi = Ke().default;
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        ue.cleanupHTMLElement = o1;
        ue.clearAllStyles = i1;
        ue.clearObjectCache = AD;
        ue.getActionListProgress = s1;
        ue.getAffectedElements = za;
        ue.getComputedStyle = xD;
        ue.getDestinationValues = VD;
        ue.getElementId = CD;
        ue.getInstanceId = RD;
        ue.getInstanceOrigin = DD;
        ue.getItemConfigByKey = void 0;
        ue.getMaxDurationItemIndex = jE;
        ue.getNamespacedParameterId = l1;
        ue.getRenderType = UE;
        ue.getStyleProp = UD;
        ue.mediaQueriesEqual = d1;
        ue.observeStore = PD;
        ue.reduceListToGroup = u1;
        ue.reifyState = ND;
        ue.renderHTMLElement = BD;
        Object.defineProperty(ue, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return LE.default
            }
        });
        ue.shouldAllowMediaQuery = f1;
        ue.shouldNamespaceEventParameter = c1;
        ue.stringifyTarget = p1;
        var Rt = fi(aE())
          , ja = fi(IE())
          , Wa = fi(bE())
          , RE = rr()
          , Ut = De()
          , LE = fi(SE())
          , uD = La()
          , ct = Xa()
          , xe = ti()
          , {BACKGROUND: cD, TRANSFORM: lD, TRANSLATE_3D: fD, SCALE_3D: dD, ROTATE_X: pD, ROTATE_Y: vD, ROTATE_Z: hD, SKEW: ED, PRESERVE_3D: gD, FLEX: _D, OPACITY: ci, FILTER: zr, FONT_VARIATION_SETTINGS: Yr, WIDTH: st, HEIGHT: ut, BACKGROUND_COLOR: ME, BORDER_COLOR: yD, COLOR: ID, CHILDREN: wE, IMMEDIATE_CHILDREN: TD, SIBLINGS: CE, PARENT: mD, DISPLAY: li, WILL_CHANGE: dr, AUTO: wt, COMMA_DELIMITER: $r, COLON_DELIMITER: OD, BAR_DELIMITER: Ba, RENDER_TRANSFORM: DE, RENDER_GENERAL: Ha, RENDER_STYLE: ka, RENDER_PLUGIN: FE} = Ut.IX2EngineConstants
          , {TRANSFORM_MOVE: pr, TRANSFORM_SCALE: vr, TRANSFORM_ROTATE: hr, TRANSFORM_SKEW: Qr, STYLE_OPACITY: GE, STYLE_FILTER: Zr, STYLE_FONT_VARIATION: Jr, STYLE_SIZE: Er, STYLE_BACKGROUND_COLOR: gr, STYLE_BORDER: _r, STYLE_TEXT_COLOR: yr, GENERAL_DISPLAY: di, OBJECT_VALUE: bD} = Ut.ActionTypeConsts
          , XE = e => e.trim()
          , Ka = Object.freeze({
            [gr]: ME,
            [_r]: yD,
            [yr]: ID
        })
          , VE = Object.freeze({
            [xe.TRANSFORM_PREFIXED]: lD,
            [ME]: cD,
            [ci]: ci,
            [zr]: zr,
            [st]: st,
            [ut]: ut,
            [Yr]: Yr
        })
          , ui = new Map;
        function AD() {
            ui.clear()
        }
        var SD = 1;
        function RD() {
            return "i" + SD++
        }
        var wD = 1;
        function CD(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + wD++
        }
        function ND({events: e, actionLists: t, site: r}={}) {
            let n = (0,
            ja.default)(e, (a, s) => {
                let {eventTypeId: c} = s;
                return a[c] || (a[c] = {}),
                a[c][s.id] = s,
                a
            }
            , {})
              , o = r && r.mediaQueries
              , i = [];
            return o ? i = o.map(a => a.key) : (o = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var qD = (e, t) => e === t;
        function PD({store: e, select: t, onChange: r, comparator: n=qD}) {
            let {getState: o, subscribe: i} = e
              , a = i(c)
              , s = t(o());
            function c() {
                let f = t(o());
                if (f == null) {
                    a();
                    return
                }
                n(f, s) || (s = f,
                r(s, e))
            }
            return a
        }
        function NE(e) {
            let t = typeof e;
            if (t === "string")
                return {
                    id: e
                };
            if (e != null && t === "object") {
                let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s} = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }
        function za({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
            var i, a, s;
            if (!o)
                throw new Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce( (F, X) => F.concat(za({
                    config: {
                        target: X
                    },
                    event: t,
                    eventTarget: r,
                    elementRoot: n,
                    elementApi: o
                })), []);
            let {getValidDocument: f, getQuerySelector: v, queryDocument: p, getChildElements: h, getSiblingElements: y, matchSelector: m, elementContains: I, isSiblingNode: q} = o
              , {target: R} = e;
            if (!R)
                return [];
            let {id: w, objectId: T, selector: G, selectorGuids: D, appliesTo: P, useEventTarget: V} = NE(R);
            if (T)
                return [ui.has(T) ? ui.get(T) : ui.set(T, {}).get(T)];
            if (P === Ut.EventAppliesTo.PAGE) {
                let F = f(w);
                return F ? [F] : []
            }
            let W = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[w || G] || {}, J = !!(W.id || W.selector), K, M, g, x = t && v(NE(t.target));
            if (J ? (K = W.limitAffectedElements,
            M = x,
            g = v(W)) : M = g = v({
                id: w,
                selector: G,
                selectorGuids: D
            }),
            t && V) {
                let F = r && (g || V === !0) ? [r] : p(x);
                if (g) {
                    if (V === mD)
                        return p(g).filter(X => F.some(H => I(X, H)));
                    if (V === wE)
                        return p(g).filter(X => F.some(H => I(H, X)));
                    if (V === CE)
                        return p(g).filter(X => F.some(H => q(H, X)))
                }
                return F
            }
            return M == null || g == null ? [] : xe.IS_BROWSER_ENV && n ? p(g).filter(F => n.contains(F)) : K === wE ? p(M, g) : K === TD ? h(p(M)).filter(m(g)) : K === CE ? y(p(M)).filter(m(g)) : p(g)
        }
        function xD({element: e, actionItem: t}) {
            if (!xe.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: r} = t;
            switch (r) {
            case Er:
            case gr:
            case _r:
            case yr:
            case di:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        var qE = /px/
          , LD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = WD[n.type]),
        r), e || {})
          , MD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = jD[n.type] || n.defaultValue || 0),
        r), e || {});
        function DD(e, t={}, r={}, n, o) {
            let {getStyle: i} = o
              , {actionTypeId: a} = n;
            if ((0,
            ct.isPluginType)(a))
                return (0,
                ct.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
            case pr:
            case vr:
            case hr:
            case Qr:
                return t[n.actionTypeId] || Ya[n.actionTypeId];
            case Zr:
                return LD(t[n.actionTypeId], n.config.filters);
            case Jr:
                return MD(t[n.actionTypeId], n.config.fontVariations);
            case GE:
                return {
                    value: (0,
                    Rt.default)(parseFloat(i(e, ci)), 1)
                };
            case Er:
                {
                    let s = i(e, st), c = i(e, ut), f, v;
                    return n.config.widthUnit === wt ? f = qE.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
                    Rt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === wt ? v = qE.test(c) ? parseFloat(c) : parseFloat(r.height) : v = (0,
                    Rt.default)(parseFloat(c), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: v
                    }
                }
            case gr:
            case _r:
            case yr:
                return t1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: i
                });
            case di:
                return {
                    value: (0,
                    Rt.default)(i(e, li), r.display)
                };
            case bD:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        var FD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , GD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , XD = (e, t, r) => {
            if ((0,
            ct.isPluginType)(e))
                return (0,
                ct.getPluginConfig)(e)(r, t);
            switch (e) {
            case Zr:
                {
                    let n = (0,
                    Wa.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case Jr:
                {
                    let n = (0,
                    Wa.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        ue.getItemConfigByKey = XD;
        function VD({element: e, actionItem: t, elementApi: r}) {
            if ((0,
            ct.isPluginType)(t.actionTypeId))
                return (0,
                ct.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case pr:
            case vr:
            case hr:
            case Qr:
                {
                    let {xValue: n, yValue: o, zValue: i} = t.config;
                    return {
                        xValue: n,
                        yValue: o,
                        zValue: i
                    }
                }
            case Er:
                {
                    let {getStyle: n, setStyle: o, getProperty: i} = r
                      , {widthUnit: a, heightUnit: s} = t.config
                      , {widthValue: c, heightValue: f} = t.config;
                    if (!xe.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: f
                        };
                    if (a === wt) {
                        let v = n(e, st);
                        o(e, st, ""),
                        c = i(e, "offsetWidth"),
                        o(e, st, v)
                    }
                    if (s === wt) {
                        let v = n(e, ut);
                        o(e, ut, ""),
                        f = i(e, "offsetHeight"),
                        o(e, ut, v)
                    }
                    return {
                        widthValue: c,
                        heightValue: f
                    }
                }
            case gr:
            case _r:
            case yr:
                {
                    let {rValue: n, gValue: o, bValue: i, aValue: a} = t.config;
                    return {
                        rValue: n,
                        gValue: o,
                        bValue: i,
                        aValue: a
                    }
                }
            case Zr:
                return t.config.filters.reduce(FD, {});
            case Jr:
                return t.config.fontVariations.reduce(GD, {});
            default:
                {
                    let {value: n} = t.config;
                    return {
                        value: n
                    }
                }
            }
        }
        function UE(e) {
            if (/^TRANSFORM_/.test(e))
                return DE;
            if (/^STYLE_/.test(e))
                return ka;
            if (/^GENERAL_/.test(e))
                return Ha;
            if (/^PLUGIN_/.test(e))
                return FE
        }
        function UD(e, t) {
            return e === ka ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function BD(e, t, r, n, o, i, a, s, c) {
            switch (s) {
            case DE:
                return KD(e, t, r, o, a);
            case ka:
                return r1(e, t, r, o, i, a);
            case Ha:
                return n1(e, o, a);
            case FE:
                {
                    let {actionTypeId: f} = o;
                    if ((0,
                    ct.isPluginType)(f))
                        return (0,
                        ct.renderPlugin)(f)(c, t, o)
                }
            }
        }
        var Ya = {
            [pr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [vr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [hr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , WD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , jD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , HD = (e, t) => {
            let r = (0,
            Wa.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , kD = Object.keys(Ya);
        function KD(e, t, r, n, o) {
            let i = kD.map(s => {
                let c = Ya[s]
                  , {xValue: f=c.xValue, yValue: v=c.yValue, zValue: p=c.zValue, xUnit: h="", yUnit: y="", zUnit: m=""} = t[s] || {};
                switch (s) {
                case pr:
                    return `${fD}(${f}${h}, ${v}${y}, ${p}${m})`;
                case vr:
                    return `${dD}(${f}${h}, ${v}${y}, ${p}${m})`;
                case hr:
                    return `${pD}(${f}${h}) ${vD}(${v}${y}) ${hD}(${p}${m})`;
                case Qr:
                    return `${ED}(${f}${h}, ${v}${y})`;
                default:
                    return ""
                }
            }
            ).join(" ")
              , {setStyle: a} = o;
            Bt(e, xe.TRANSFORM_PREFIXED, o),
            a(e, xe.TRANSFORM_PREFIXED, i),
            $D(n, r) && a(e, xe.TRANSFORM_STYLE_PREFIXED, gD)
        }
        function zD(e, t, r, n) {
            let o = (0,
            ja.default)(t, (a, s, c) => `${a} ${c}(${s}${HD(c, r)})`, "")
              , {setStyle: i} = n;
            Bt(e, zr, n),
            i(e, zr, o)
        }
        function YD(e, t, r, n) {
            let o = (0,
            ja.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`),
            a), []).join(", ")
              , {setStyle: i} = n;
            Bt(e, Yr, n),
            i(e, Yr, o)
        }
        function $D({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
            return e === pr && n !== void 0 || e === vr && n !== void 0 || e === hr && (t !== void 0 || r !== void 0)
        }
        var QD = "\\(([^)]+)\\)"
          , ZD = /^rgb/
          , JD = RegExp(`rgba?${QD}`);
        function e1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }
        function t1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
            let o = Ka[t]
              , i = n(e, o)
              , a = ZD.test(i) ? i : r[o]
              , s = e1(JD, a).split($r);
            return {
                rValue: (0,
                Rt.default)(parseInt(s[0], 10), 255),
                gValue: (0,
                Rt.default)(parseInt(s[1], 10), 255),
                bValue: (0,
                Rt.default)(parseInt(s[2], 10), 255),
                aValue: (0,
                Rt.default)(parseFloat(s[3]), 1)
            }
        }
        function r1(e, t, r, n, o, i) {
            let {setStyle: a} = i;
            switch (n.actionTypeId) {
            case Er:
                {
                    let {widthUnit: s="", heightUnit: c=""} = n.config
                      , {widthValue: f, heightValue: v} = r;
                    f !== void 0 && (s === wt && (s = "px"),
                    Bt(e, st, i),
                    a(e, st, f + s)),
                    v !== void 0 && (c === wt && (c = "px"),
                    Bt(e, ut, i),
                    a(e, ut, v + c));
                    break
                }
            case Zr:
                {
                    zD(e, r, n.config, i);
                    break
                }
            case Jr:
                {
                    YD(e, r, n.config, i);
                    break
                }
            case gr:
            case _r:
            case yr:
                {
                    let s = Ka[n.actionTypeId]
                      , c = Math.round(r.rValue)
                      , f = Math.round(r.gValue)
                      , v = Math.round(r.bValue)
                      , p = r.aValue;
                    Bt(e, s, i),
                    a(e, s, p >= 1 ? `rgb(${c},${f},${v})` : `rgba(${c},${f},${v},${p})`);
                    break
                }
            default:
                {
                    let {unit: s=""} = n.config;
                    Bt(e, o, i),
                    a(e, o, r.value + s);
                    break
                }
            }
        }
        function n1(e, t, r) {
            let {setStyle: n} = r;
            switch (t.actionTypeId) {
            case di:
                {
                    let {value: o} = t.config;
                    o === _D && xe.IS_BROWSER_ENV ? n(e, li, xe.FLEX_PREFIXED) : n(e, li, o);
                    return
                }
            }
        }
        function Bt(e, t, r) {
            if (!xe.IS_BROWSER_ENV)
                return;
            let n = VE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, dr);
            if (!a) {
                i(e, dr, n);
                return
            }
            let s = a.split($r).map(XE);
            s.indexOf(n) === -1 && i(e, dr, s.concat(n).join($r))
        }
        function BE(e, t, r) {
            if (!xe.IS_BROWSER_ENV)
                return;
            let n = VE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, dr);
            !a || a.indexOf(n) === -1 || i(e, dr, a.split($r).map(XE).filter(s => s !== n).join($r))
        }
        function i1({store: e, elementApi: t}) {
            let {ixData: r} = e.getState()
              , {events: n={}, actionLists: o={}} = r;
            Object.keys(n).forEach(i => {
                let a = n[i]
                  , {config: s} = a.action
                  , {actionListId: c} = s
                  , f = o[c];
                f && PE({
                    actionList: f,
                    event: a,
                    elementApi: t
                })
            }
            ),
            Object.keys(o).forEach(i => {
                PE({
                    actionList: o[i],
                    elementApi: t
                })
            }
            )
        }
        function PE({actionList: e={}, event: t, elementApi: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e;
            n && n.forEach(i => {
                xE({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }
            ),
            o && o.forEach(i => {
                let {continuousActionGroups: a} = i;
                a.forEach(s => {
                    xE({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                }
                )
            }
            )
        }
        function xE({actionGroup: e, event: t, elementApi: r}) {
            let {actionItems: n} = e;
            n.forEach(o => {
                let {actionTypeId: i, config: a} = o, s;
                (0,
                ct.isPluginType)(i) ? s = c => (0,
                ct.clearPlugin)(i)(c, o) : s = WE({
                    effect: a1,
                    actionTypeId: i,
                    elementApi: r
                }),
                za({
                    config: a,
                    event: t,
                    elementApi: r
                }).forEach(s)
            }
            )
        }
        function o1(e, t, r) {
            let {setStyle: n, getStyle: o} = r
              , {actionTypeId: i} = t;
            if (i === Er) {
                let {config: a} = t;
                a.widthUnit === wt && n(e, st, ""),
                a.heightUnit === wt && n(e, ut, "")
            }
            o(e, dr) && WE({
                effect: BE,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var WE = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case pr:
            case vr:
            case hr:
            case Qr:
                e(n, xe.TRANSFORM_PREFIXED, r);
                break;
            case Zr:
                e(n, zr, r);
                break;
            case Jr:
                e(n, Yr, r);
                break;
            case GE:
                e(n, ci, r);
                break;
            case Er:
                e(n, st, r),
                e(n, ut, r);
                break;
            case gr:
            case _r:
            case yr:
                e(n, Ka[t], r);
                break;
            case di:
                e(n, li, r);
                break
            }
        }
        ;
        function a1(e, t, r) {
            let {setStyle: n} = r;
            BE(e, t, r),
            n(e, t, ""),
            t === xe.TRANSFORM_PREFIXED && n(e, xe.TRANSFORM_STYLE_PREFIXED, "")
        }
        function jE(e) {
            let t = 0
              , r = 0;
            return e.forEach( (n, o) => {
                let {config: i} = n
                  , a = i.delay + i.duration;
                a >= t && (t = a,
                r = o)
            }
            ),
            r
        }
        function s1(e, t) {
            let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
              , {actionItem: o, verboseTimeElapsed: i=0} = t
              , a = 0
              , s = 0;
            return r.forEach( (c, f) => {
                if (n && f === 0)
                    return;
                let {actionItems: v} = c
                  , p = v[jE(v)]
                  , {config: h, actionTypeId: y} = p;
                o.id === p.id && (s = a + i);
                let m = UE(y) === Ha ? 0 : h.duration;
                a += h.delay + m
            }
            ),
            a > 0 ? (0,
            uD.optimizeFloat)(s / a) : 0
        }
        function u1({actionList: e, actionItemId: t, rawData: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e
              , i = []
              , a = s => (i.push((0,
            RE.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })),
            s.id === t);
            return n && n.some( ({actionItems: s}) => s.some(a)),
            o && o.some(s => {
                let {continuousActionGroups: c} = s;
                return c.some( ({actionItems: f}) => f.some(a))
            }
            ),
            (0,
            RE.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }
        function c1(e, {basedOn: t}) {
            return e === Ut.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ut.EventBasedOn.ELEMENT || t == null) || e === Ut.EventTypeConsts.MOUSE_MOVE && t === Ut.EventBasedOn.ELEMENT
        }
        function l1(e, t) {
            return e + OD + t
        }
        function f1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }
        function d1(e, t) {
            return (0,
            LE.default)(e && e.sort(), t && t.sort())
        }
        function p1(e) {
            if (typeof e == "string")
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + Ba + e.objectId;
            if (e.objectId)
                return e.objectId;
            let {id: t="", selector: r="", useEventTarget: n=""} = e;
            return t + Ba + r + Ba + n
        }
    }
    );
    var Wt = u(Le => {
        "use strict";
        var Ir = Lt().default;
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        Le.IX2VanillaUtils = Le.IX2VanillaPlugins = Le.IX2ElementsReducer = Le.IX2Easings = Le.IX2EasingUtils = Le.IX2BrowserSupport = void 0;
        var v1 = Ir(ti());
        Le.IX2BrowserSupport = v1;
        var h1 = Ir(Pa());
        Le.IX2Easings = h1;
        var E1 = Ir(La());
        Le.IX2EasingUtils = E1;
        var g1 = Ir(Qh());
        Le.IX2ElementsReducer = g1;
        var _1 = Ir(Xa());
        Le.IX2VanillaPlugins = _1;
        var y1 = Ir(HE());
        Le.IX2VanillaUtils = y1
    }
    );
    var YE = u(vi => {
        "use strict";
        Object.defineProperty(vi, "__esModule", {
            value: !0
        });
        vi.ixInstances = void 0;
        var kE = De()
          , KE = Wt()
          , Tr = rr()
          , {IX2_RAW_DATA_IMPORTED: I1, IX2_SESSION_STOPPED: T1, IX2_INSTANCE_ADDED: m1, IX2_INSTANCE_STARTED: O1, IX2_INSTANCE_REMOVED: b1, IX2_ANIMATION_FRAME_CHANGED: A1} = kE.IX2EngineActionTypes
          , {optimizeFloat: pi, applyEasing: zE, createBezierEasing: S1} = KE.IX2EasingUtils
          , {RENDER_GENERAL: R1} = kE.IX2EngineConstants
          , {getItemConfigByKey: $a, getRenderType: w1, getStyleProp: C1} = KE.IX2VanillaUtils
          , N1 = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: f, skipMotion: v, skipToValue: p} = e
              , {parameters: h} = t.payload
              , y = Math.max(1 - a, .01)
              , m = h[n];
            m == null && (y = 1,
            m = s);
            let I = Math.max(m, 0) || 0
              , q = pi(I - r)
              , R = v ? p : pi(r + q * y)
              , w = R * 100;
            if (R === r && e.current)
                return e;
            let T, G, D, P;
            for (let B = 0, {length: W} = o; B < W; B++) {
                let {keyframe: J, actionItems: K} = o[B];
                if (B === 0 && (T = K[0]),
                w >= J) {
                    T = K[0];
                    let M = o[B + 1]
                      , g = M && w !== J;
                    G = g ? M.actionItems[0] : null,
                    g && (D = J / 100,
                    P = (M.keyframe - J) / 100)
                }
            }
            let V = {};
            if (T && !G)
                for (let B = 0, {length: W} = i; B < W; B++) {
                    let J = i[B];
                    V[J] = $a(c, J, T.config)
                }
            else if (T && G && D !== void 0 && P !== void 0) {
                let B = (R - D) / P
                  , W = T.config.easing
                  , J = zE(W, B, f);
                for (let K = 0, {length: M} = i; K < M; K++) {
                    let g = i[K]
                      , x = $a(c, g, T.config)
                      , H = ($a(c, g, G.config) - x) * J + x;
                    V[g] = H
                }
            }
            return (0,
            Tr.merge)(e, {
                position: R,
                current: V
            })
        }
          , q1 = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: f, destinationKeys: v, pluginDuration: p, instanceDelay: h, customEasingFn: y, skipMotion: m} = e
              , I = c.config.easing
              , {duration: q, delay: R} = c.config;
            p != null && (q = p),
            R = h ?? R,
            a === R1 ? q = 0 : (i || m) && (q = R = 0);
            let {now: w} = t.payload;
            if (r && n) {
                let T = w - (o + R);
                if (s) {
                    let B = w - o
                      , W = q + R
                      , J = pi(Math.min(Math.max(0, B / W), 1));
                    e = (0,
                    Tr.set)(e, "verboseTimeElapsed", W * J)
                }
                if (T < 0)
                    return e;
                let G = pi(Math.min(Math.max(0, T / q), 1))
                  , D = zE(I, G, y)
                  , P = {}
                  , V = null;
                return v.length && (V = v.reduce( (B, W) => {
                    let J = f[W]
                      , K = parseFloat(n[W]) || 0
                      , g = (parseFloat(J) - K) * D + K;
                    return B[W] = g,
                    B
                }
                , {})),
                P.current = V,
                P.position = G,
                G === 1 && (P.active = !1,
                P.complete = !0),
                (0,
                Tr.merge)(e, P)
            }
            return e
        }
          , P1 = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case I1:
                return t.payload.ixInstances || Object.freeze({});
            case T1:
                return Object.freeze({});
            case m1:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: f, isCarrier: v, origin: p, destination: h, immediate: y, verbose: m, continuous: I, parameterId: q, actionGroups: R, smoothing: w, restingValue: T, pluginInstance: G, pluginDuration: D, instanceDelay: P, skipMotion: V, skipToValue: B} = t.payload
                      , {actionTypeId: W} = o
                      , J = w1(W)
                      , K = C1(J, W)
                      , M = Object.keys(h).filter(x => h[x] != null && typeof h[x] != "string")
                      , {easing: g} = o.config;
                    return (0,
                    Tr.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: h,
                        destinationKeys: M,
                        immediate: y,
                        verbose: m,
                        current: null,
                        actionItem: o,
                        actionTypeId: W,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: f,
                        renderType: J,
                        isCarrier: v,
                        styleProp: K,
                        continuous: I,
                        parameterId: q,
                        actionGroups: R,
                        smoothing: w,
                        restingValue: T,
                        pluginInstance: G,
                        pluginDuration: D,
                        instanceDelay: P,
                        skipMotion: V,
                        skipToValue: B,
                        customEasingFn: Array.isArray(g) && g.length === 4 ? S1(g) : void 0
                    })
                }
            case O1:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    Tr.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case b1:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let s = o[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case A1:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , s = e[a]
                          , c = s.continuous ? N1 : q1;
                        r = (0,
                        Tr.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
        ;
        vi.ixInstances = P1
    }
    );
    var $E = u(hi => {
        "use strict";
        Object.defineProperty(hi, "__esModule", {
            value: !0
        });
        hi.ixParameters = void 0;
        var x1 = De()
          , {IX2_RAW_DATA_IMPORTED: L1, IX2_SESSION_STOPPED: M1, IX2_PARAMETER_CHANGED: D1} = x1.IX2EngineActionTypes
          , F1 = (e={}, t) => {
            switch (t.type) {
            case L1:
                return t.payload.ixParameters || {};
            case M1:
                return {};
            case D1:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
        ;
        hi.ixParameters = F1
    }
    );
    var QE = u(Ei => {
        "use strict";
        Object.defineProperty(Ei, "__esModule", {
            value: !0
        });
        Ei.default = void 0;
        var G1 = Yo()
          , X1 = hf()
          , V1 = Lf()
          , U1 = Df()
          , B1 = Wt()
          , W1 = YE()
          , j1 = $E()
          , {ixElements: H1} = B1.IX2ElementsReducer
          , k1 = (0,
        G1.combineReducers)({
            ixData: X1.ixData,
            ixRequest: V1.ixRequest,
            ixSession: U1.ixSession,
            ixElements: H1,
            ixInstances: W1.ixInstances,
            ixParameters: j1.ixParameters
        });
        Ei.default = k1
    }
    );
    var ZE = u( (dk, en) => {
        function K1(e, t) {
            if (e == null)
                return {};
            var r = {}, n = Object.keys(e), o, i;
            for (i = 0; i < n.length; i++)
                o = n[i],
                !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        en.exports = K1,
        en.exports.__esModule = !0,
        en.exports.default = en.exports
    }
    );
    var eg = u( (pk, JE) => {
        var z1 = bt()
          , Y1 = Ae()
          , $1 = Et()
          , Q1 = "[object String]";
        function Z1(e) {
            return typeof e == "string" || !Y1(e) && $1(e) && z1(e) == Q1
        }
        JE.exports = Z1
    }
    );
    var rg = u( (vk, tg) => {
        var J1 = Sa()
          , e2 = J1("length");
        tg.exports = e2
    }
    );
    var ig = u( (hk, ng) => {
        var t2 = "\\ud800-\\udfff"
          , r2 = "\\u0300-\\u036f"
          , n2 = "\\ufe20-\\ufe2f"
          , i2 = "\\u20d0-\\u20ff"
          , o2 = r2 + n2 + i2
          , a2 = "\\ufe0e\\ufe0f"
          , s2 = "\\u200d"
          , u2 = RegExp("[" + s2 + t2 + o2 + a2 + "]");
        function c2(e) {
            return u2.test(e)
        }
        ng.exports = c2
    }
    );
    var pg = u( (Ek, dg) => {
        var ag = "\\ud800-\\udfff"
          , l2 = "\\u0300-\\u036f"
          , f2 = "\\ufe20-\\ufe2f"
          , d2 = "\\u20d0-\\u20ff"
          , p2 = l2 + f2 + d2
          , v2 = "\\ufe0e\\ufe0f"
          , h2 = "[" + ag + "]"
          , Qa = "[" + p2 + "]"
          , Za = "\\ud83c[\\udffb-\\udfff]"
          , E2 = "(?:" + Qa + "|" + Za + ")"
          , sg = "[^" + ag + "]"
          , ug = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , cg = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , g2 = "\\u200d"
          , lg = E2 + "?"
          , fg = "[" + v2 + "]?"
          , _2 = "(?:" + g2 + "(?:" + [sg, ug, cg].join("|") + ")" + fg + lg + ")*"
          , y2 = fg + lg + _2
          , I2 = "(?:" + [sg + Qa + "?", Qa, ug, cg, h2].join("|") + ")"
          , og = RegExp(Za + "(?=" + Za + ")|" + I2 + y2, "g");
        function T2(e) {
            for (var t = og.lastIndex = 0; og.test(e); )
                ++t;
            return t
        }
        dg.exports = T2
    }
    );
    var hg = u( (gk, vg) => {
        var m2 = rg()
          , O2 = ig()
          , b2 = pg();
        function A2(e) {
            return O2(e) ? b2(e) : m2(e)
        }
        vg.exports = A2
    }
    );
    var gg = u( (_k, Eg) => {
        var S2 = kn()
          , R2 = Kn()
          , w2 = Gt()
          , C2 = eg()
          , N2 = hg()
          , q2 = "[object Map]"
          , P2 = "[object Set]";
        function x2(e) {
            if (e == null)
                return 0;
            if (w2(e))
                return C2(e) ? N2(e) : e.length;
            var t = R2(e);
            return t == q2 || t == P2 ? e.size : S2(e).length
        }
        Eg.exports = x2
    }
    );
    var yg = u( (yk, _g) => {
        var L2 = "Expected a function";
        function M2(e) {
            if (typeof e != "function")
                throw new TypeError(L2);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        _g.exports = M2
    }
    );
    var Ja = u( (Ik, Ig) => {
        var D2 = At()
          , F2 = function() {
            try {
                var e = D2(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Ig.exports = F2
    }
    );
    var es = u( (Tk, mg) => {
        var Tg = Ja();
        function G2(e, t, r) {
            t == "__proto__" && Tg ? Tg(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        mg.exports = G2
    }
    );
    var bg = u( (mk, Og) => {
        var X2 = es()
          , V2 = Dn()
          , U2 = Object.prototype
          , B2 = U2.hasOwnProperty;
        function W2(e, t, r) {
            var n = e[t];
            (!(B2.call(e, t) && V2(n, r)) || r === void 0 && !(t in e)) && X2(e, t, r)
        }
        Og.exports = W2
    }
    );
    var Rg = u( (Ok, Sg) => {
        var j2 = bg()
          , H2 = Hr()
          , k2 = Bn()
          , Ag = at()
          , K2 = lr();
        function z2(e, t, r, n) {
            if (!Ag(e))
                return e;
            t = H2(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var c = K2(t[o])
                  , f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (o != a) {
                    var v = s[c];
                    f = n ? n(v, c, s) : void 0,
                    f === void 0 && (f = Ag(v) ? v : k2(t[o + 1]) ? [] : {})
                }
                j2(s, c, f),
                s = s[c]
            }
            return e
        }
        Sg.exports = z2
    }
    );
    var Cg = u( (bk, wg) => {
        var Y2 = $n()
          , $2 = Rg()
          , Q2 = Hr();
        function Z2(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , s = Y2(e, a);
                r(s, a) && $2(i, Q2(a, e), s)
            }
            return i
        }
        wg.exports = Z2
    }
    );
    var qg = u( (Ak, Ng) => {
        var J2 = Vn()
          , eF = Do()
          , tF = fa()
          , rF = la()
          , nF = Object.getOwnPropertySymbols
          , iF = nF ? function(e) {
            for (var t = []; e; )
                J2(t, tF(e)),
                e = eF(e);
            return t
        }
        : rF;
        Ng.exports = iF
    }
    );
    var xg = u( (Sk, Pg) => {
        function oF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        Pg.exports = oF
    }
    );
    var Mg = u( (Rk, Lg) => {
        var aF = at()
          , sF = Hn()
          , uF = xg()
          , cF = Object.prototype
          , lF = cF.hasOwnProperty;
        function fF(e) {
            if (!aF(e))
                return uF(e);
            var t = sF(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !lF.call(e, n)) || r.push(n);
            return r
        }
        Lg.exports = fF
    }
    );
    var Fg = u( (wk, Dg) => {
        var dF = pa()
          , pF = Mg()
          , vF = Gt();
        function hF(e) {
            return vF(e) ? dF(e, !0) : pF(e)
        }
        Dg.exports = hF
    }
    );
    var Xg = u( (Ck, Gg) => {
        var EF = ca()
          , gF = qg()
          , _F = Fg();
        function yF(e) {
            return EF(e, _F, gF)
        }
        Gg.exports = yF
    }
    );
    var Ug = u( (Nk, Vg) => {
        var IF = Aa()
          , TF = St()
          , mF = Cg()
          , OF = Xg();
        function bF(e, t) {
            if (e == null)
                return {};
            var r = IF(OF(e), function(n) {
                return [n]
            });
            return t = TF(t),
            mF(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        Vg.exports = bF
    }
    );
    var Wg = u( (qk, Bg) => {
        var AF = St()
          , SF = yg()
          , RF = Ug();
        function wF(e, t) {
            return RF(e, SF(AF(t)))
        }
        Bg.exports = wF
    }
    );
    var Hg = u( (Pk, jg) => {
        var CF = kn()
          , NF = Kn()
          , qF = Xr()
          , PF = Ae()
          , xF = Gt()
          , LF = Un()
          , MF = Hn()
          , DF = jn()
          , FF = "[object Map]"
          , GF = "[object Set]"
          , XF = Object.prototype
          , VF = XF.hasOwnProperty;
        function UF(e) {
            if (e == null)
                return !0;
            if (xF(e) && (PF(e) || typeof e == "string" || typeof e.splice == "function" || LF(e) || DF(e) || qF(e)))
                return !e.length;
            var t = NF(e);
            if (t == FF || t == GF)
                return !e.size;
            if (MF(e))
                return !CF(e).length;
            for (var r in e)
                if (VF.call(e, r))
                    return !1;
            return !0
        }
        jg.exports = UF
    }
    );
    var Kg = u( (xk, kg) => {
        var BF = es()
          , WF = Va()
          , jF = St();
        function HF(e, t) {
            var r = {};
            return t = jF(t, 3),
            WF(e, function(n, o, i) {
                BF(r, o, t(n, o, i))
            }),
            r
        }
        kg.exports = HF
    }
    );
    var Yg = u( (Lk, zg) => {
        function kF(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        zg.exports = kF
    }
    );
    var Qg = u( (Mk, $g) => {
        var KF = Zn();
        function zF(e) {
            return typeof e == "function" ? e : KF
        }
        $g.exports = zF
    }
    );
    var Jg = u( (Dk, Zg) => {
        var YF = Yg()
          , $F = Ua()
          , QF = Qg()
          , ZF = Ae();
        function JF(e, t) {
            var r = ZF(e) ? YF : $F;
            return r(e, QF(t))
        }
        Zg.exports = JF
    }
    );
    var t_ = u( (Fk, e_) => {
        var eG = $e()
          , tG = function() {
            return eG.Date.now()
        };
        e_.exports = tG
    }
    );
    var i_ = u( (Gk, n_) => {
        var rG = at()
          , ts = t_()
          , r_ = Jn()
          , nG = "Expected a function"
          , iG = Math.max
          , oG = Math.min;
        function aG(e, t, r) {
            var n, o, i, a, s, c, f = 0, v = !1, p = !1, h = !0;
            if (typeof e != "function")
                throw new TypeError(nG);
            t = r_(t) || 0,
            rG(r) && (v = !!r.leading,
            p = "maxWait"in r,
            i = p ? iG(r_(r.maxWait) || 0, t) : i,
            h = "trailing"in r ? !!r.trailing : h);
            function y(P) {
                var V = n
                  , B = o;
                return n = o = void 0,
                f = P,
                a = e.apply(B, V),
                a
            }
            function m(P) {
                return f = P,
                s = setTimeout(R, t),
                v ? y(P) : a
            }
            function I(P) {
                var V = P - c
                  , B = P - f
                  , W = t - V;
                return p ? oG(W, i - B) : W
            }
            function q(P) {
                var V = P - c
                  , B = P - f;
                return c === void 0 || V >= t || V < 0 || p && B >= i
            }
            function R() {
                var P = ts();
                if (q(P))
                    return w(P);
                s = setTimeout(R, I(P))
            }
            function w(P) {
                return s = void 0,
                h && n ? y(P) : (n = o = void 0,
                a)
            }
            function T() {
                s !== void 0 && clearTimeout(s),
                f = 0,
                n = c = o = s = void 0
            }
            function G() {
                return s === void 0 ? a : w(ts())
            }
            function D() {
                var P = ts()
                  , V = q(P);
                if (n = arguments,
                o = this,
                c = P,
                V) {
                    if (s === void 0)
                        return m(c);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(R, t),
                        y(c)
                }
                return s === void 0 && (s = setTimeout(R, t)),
                a
            }
            return D.cancel = T,
            D.flush = G,
            D
        }
        n_.exports = aG
    }
    );
    var a_ = u( (Xk, o_) => {
        var sG = i_()
          , uG = at()
          , cG = "Expected a function";
        function lG(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(cG);
            return uG(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            sG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        o_.exports = lG
    }
    );
    var gi = u(Z => {
        "use strict";
        var fG = Ke().default;
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        Z.viewportWidthChanged = Z.testFrameRendered = Z.stopRequested = Z.sessionStopped = Z.sessionStarted = Z.sessionInitialized = Z.rawDataImported = Z.previewRequested = Z.playbackRequested = Z.parameterChanged = Z.mediaQueriesDefined = Z.instanceStarted = Z.instanceRemoved = Z.instanceAdded = Z.eventStateChanged = Z.eventListenerAdded = Z.elementStateChanged = Z.clearRequested = Z.animationFrameChanged = Z.actionListPlaybackChanged = void 0;
        var s_ = fG(tr())
          , u_ = De()
          , dG = Wt()
          , {IX2_RAW_DATA_IMPORTED: pG, IX2_SESSION_INITIALIZED: vG, IX2_SESSION_STARTED: hG, IX2_SESSION_STOPPED: EG, IX2_PREVIEW_REQUESTED: gG, IX2_PLAYBACK_REQUESTED: _G, IX2_STOP_REQUESTED: yG, IX2_CLEAR_REQUESTED: IG, IX2_EVENT_LISTENER_ADDED: TG, IX2_TEST_FRAME_RENDERED: mG, IX2_EVENT_STATE_CHANGED: OG, IX2_ANIMATION_FRAME_CHANGED: bG, IX2_PARAMETER_CHANGED: AG, IX2_INSTANCE_ADDED: SG, IX2_INSTANCE_STARTED: RG, IX2_INSTANCE_REMOVED: wG, IX2_ELEMENT_STATE_CHANGED: CG, IX2_ACTION_LIST_PLAYBACK_CHANGED: NG, IX2_VIEWPORT_WIDTH_CHANGED: qG, IX2_MEDIA_QUERIES_DEFINED: PG} = u_.IX2EngineActionTypes
          , {reifyState: xG} = dG.IX2VanillaUtils
          , LG = e => ({
            type: pG,
            payload: (0,
            s_.default)({}, xG(e))
        });
        Z.rawDataImported = LG;
        var MG = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: vG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        Z.sessionInitialized = MG;
        var DG = () => ({
            type: hG
        });
        Z.sessionStarted = DG;
        var FG = () => ({
            type: EG
        });
        Z.sessionStopped = FG;
        var GG = ({rawData: e, defer: t}) => ({
            type: gG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        Z.previewRequested = GG;
        var XG = ({actionTypeId: e=u_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c}) => ({
            type: _G,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        Z.playbackRequested = XG;
        var VG = e => ({
            type: yG,
            payload: {
                actionListId: e
            }
        });
        Z.stopRequested = VG;
        var UG = () => ({
            type: IG
        });
        Z.clearRequested = UG;
        var BG = (e, t) => ({
            type: TG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        Z.eventListenerAdded = BG;
        var WG = (e=1) => ({
            type: mG,
            payload: {
                step: e
            }
        });
        Z.testFrameRendered = WG;
        var jG = (e, t) => ({
            type: OG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        Z.eventStateChanged = jG;
        var HG = (e, t) => ({
            type: bG,
            payload: {
                now: e,
                parameters: t
            }
        });
        Z.animationFrameChanged = HG;
        var kG = (e, t) => ({
            type: AG,
            payload: {
                key: e,
                value: t
            }
        });
        Z.parameterChanged = kG;
        var KG = e => ({
            type: SG,
            payload: (0,
            s_.default)({}, e)
        });
        Z.instanceAdded = KG;
        var zG = (e, t) => ({
            type: RG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        Z.instanceStarted = zG;
        var YG = e => ({
            type: wG,
            payload: {
                instanceId: e
            }
        });
        Z.instanceRemoved = YG;
        var $G = (e, t, r, n) => ({
            type: CG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        Z.elementStateChanged = $G;
        var QG = ({actionListId: e, isPlaying: t}) => ({
            type: NG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        Z.actionListPlaybackChanged = QG;
        var ZG = ({width: e, mediaQueries: t}) => ({
            type: qG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        Z.viewportWidthChanged = ZG;
        var JG = () => ({
            type: PG
        });
        Z.mediaQueriesDefined = JG
    }
    );
    var f_ = u(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.elementContains = fX;
        we.getChildElements = pX;
        we.getClosestElement = void 0;
        we.getProperty = aX;
        we.getQuerySelector = uX;
        we.getRefType = EX;
        we.getSiblingElements = vX;
        we.getStyle = oX;
        we.getValidDocument = cX;
        we.isSiblingNode = dX;
        we.matchSelector = sX;
        we.queryDocument = lX;
        we.setStyle = iX;
        var eX = Wt()
          , tX = De()
          , {ELEMENT_MATCHES: rs} = eX.IX2BrowserSupport
          , {IX2_ID_DELIMITER: c_, HTML_ELEMENT: rX, PLAIN_OBJECT: nX, WF_PAGE: l_} = tX.IX2EngineConstants;
        function iX(e, t, r) {
            e.style[t] = r
        }
        function oX(e, t) {
            return e.style[t]
        }
        function aX(e, t) {
            return e[t]
        }
        function sX(e) {
            return t => t[rs](e)
        }
        function uX({id: e, selector: t}) {
            if (e) {
                let r = e;
                if (e.indexOf(c_) !== -1) {
                    let n = e.split(c_)
                      , o = n[0];
                    if (r = n[1],
                    o !== document.documentElement.getAttribute(l_))
                        return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }
        function cX(e) {
            return e == null || e === document.documentElement.getAttribute(l_) ? document : null
        }
        function lX(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function fX(e, t) {
            return e.contains(t)
        }
        function dX(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function pX(e) {
            let t = [];
            for (let r = 0, {length: n} = e || []; r < n; r++) {
                let {children: o} = e[r]
                  , {length: i} = o;
                if (i)
                    for (let a = 0; a < i; a++)
                        t.push(o[a])
            }
            return t
        }
        function vX(e=[]) {
            let t = []
              , r = [];
            for (let n = 0, {length: o} = e; n < o; n++) {
                let {parentNode: i} = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                    continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null; )
                    e.indexOf(a) === -1 && t.push(a),
                    a = a.nextElementSibling
            }
            return t
        }
        var hX = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[rs] && r[rs](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
        ;
        we.getClosestElement = hX;
        function EX(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? rX : nX : null
        }
    }
    );
    var ns = u( (Bk, p_) => {
        var gX = at()
          , d_ = Object.create
          , _X = function() {
            function e() {}
            return function(t) {
                if (!gX(t))
                    return {};
                if (d_)
                    return d_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        p_.exports = _X
    }
    );
    var _i = u( (Wk, v_) => {
        function yX() {}
        v_.exports = yX
    }
    );
    var Ii = u( (jk, h_) => {
        var IX = ns()
          , TX = _i();
        function yi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        yi.prototype = IX(TX.prototype);
        yi.prototype.constructor = yi;
        h_.exports = yi
    }
    );
    var y_ = u( (Hk, __) => {
        var E_ = Qt()
          , mX = Xr()
          , OX = Ae()
          , g_ = E_ ? E_.isConcatSpreadable : void 0;
        function bX(e) {
            return OX(e) || mX(e) || !!(g_ && e && e[g_])
        }
        __.exports = bX
    }
    );
    var m_ = u( (kk, T_) => {
        var AX = Vn()
          , SX = y_();
        function I_(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = SX),
            o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? I_(s, t - 1, r, n, o) : AX(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        T_.exports = I_
    }
    );
    var b_ = u( (Kk, O_) => {
        var RX = m_();
        function wX(e) {
            var t = e == null ? 0 : e.length;
            return t ? RX(e, 1) : []
        }
        O_.exports = wX
    }
    );
    var S_ = u( (zk, A_) => {
        function CX(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        A_.exports = CX
    }
    );
    var C_ = u( (Yk, w_) => {
        var NX = S_()
          , R_ = Math.max;
        function qX(e, t, r) {
            return t = R_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = R_(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t; )
                    s[o] = n[o];
                return s[t] = r(a),
                NX(e, this, s)
            }
        }
        w_.exports = qX
    }
    );
    var q_ = u( ($k, N_) => {
        function PX(e) {
            return function() {
                return e
            }
        }
        N_.exports = PX
    }
    );
    var L_ = u( (Qk, x_) => {
        var xX = q_()
          , P_ = Ja()
          , LX = Zn()
          , MX = P_ ? function(e, t) {
            return P_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: xX(t),
                writable: !0
            })
        }
        : LX;
        x_.exports = MX
    }
    );
    var D_ = u( (Zk, M_) => {
        var DX = 800
          , FX = 16
          , GX = Date.now;
        function XX(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = GX()
                  , o = FX - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= DX)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        M_.exports = XX
    }
    );
    var G_ = u( (Jk, F_) => {
        var VX = L_()
          , UX = D_()
          , BX = UX(VX);
        F_.exports = BX
    }
    );
    var V_ = u( (eK, X_) => {
        var WX = b_()
          , jX = C_()
          , HX = G_();
        function kX(e) {
            return HX(jX(e, void 0, WX), e + "")
        }
        X_.exports = kX
    }
    );
    var W_ = u( (tK, B_) => {
        var U_ = va()
          , KX = U_ && new U_;
        B_.exports = KX
    }
    );
    var H_ = u( (rK, j_) => {
        function zX() {}
        j_.exports = zX
    }
    );
    var is = u( (nK, K_) => {
        var k_ = W_()
          , YX = H_()
          , $X = k_ ? function(e) {
            return k_.get(e)
        }
        : YX;
        K_.exports = $X
    }
    );
    var Y_ = u( (iK, z_) => {
        var QX = {};
        z_.exports = QX
    }
    );
    var os = u( (oK, Q_) => {
        var $_ = Y_()
          , ZX = Object.prototype
          , JX = ZX.hasOwnProperty;
        function eV(e) {
            for (var t = e.name + "", r = $_[t], n = JX.call($_, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        Q_.exports = eV
    }
    );
    var mi = u( (aK, Z_) => {
        var tV = ns()
          , rV = _i()
          , nV = 4294967295;
        function Ti(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = nV,
            this.__views__ = []
        }
        Ti.prototype = tV(rV.prototype);
        Ti.prototype.constructor = Ti;
        Z_.exports = Ti
    }
    );
    var ey = u( (sK, J_) => {
        function iV(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        J_.exports = iV
    }
    );
    var ry = u( (uK, ty) => {
        var oV = mi()
          , aV = Ii()
          , sV = ey();
        function uV(e) {
            if (e instanceof oV)
                return e.clone();
            var t = new aV(e.__wrapped__,e.__chain__);
            return t.__actions__ = sV(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        ty.exports = uV
    }
    );
    var oy = u( (cK, iy) => {
        var cV = mi()
          , ny = Ii()
          , lV = _i()
          , fV = Ae()
          , dV = Et()
          , pV = ry()
          , vV = Object.prototype
          , hV = vV.hasOwnProperty;
        function Oi(e) {
            if (dV(e) && !fV(e) && !(e instanceof cV)) {
                if (e instanceof ny)
                    return e;
                if (hV.call(e, "__wrapped__"))
                    return pV(e)
            }
            return new ny(e)
        }
        Oi.prototype = lV.prototype;
        Oi.prototype.constructor = Oi;
        iy.exports = Oi
    }
    );
    var sy = u( (lK, ay) => {
        var EV = mi()
          , gV = is()
          , _V = os()
          , yV = oy();
        function IV(e) {
            var t = _V(e)
              , r = yV[t];
            if (typeof r != "function" || !(t in EV.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = gV(r);
            return !!n && e === n[0]
        }
        ay.exports = IV
    }
    );
    var fy = u( (fK, ly) => {
        var uy = Ii()
          , TV = V_()
          , mV = is()
          , as = os()
          , OV = Ae()
          , cy = sy()
          , bV = "Expected a function"
          , AV = 8
          , SV = 32
          , RV = 128
          , wV = 256;
        function CV(e) {
            return TV(function(t) {
                var r = t.length
                  , n = r
                  , o = uy.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(bV);
                    if (o && !a && as(i) == "wrapper")
                        var a = new uy([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = as(i)
                      , c = s == "wrapper" ? mV(i) : void 0;
                    c && cy(c[0]) && c[1] == (RV | AV | SV | wV) && !c[4].length && c[9] == 1 ? a = a[as(c[0])].apply(a, c[3]) : a = i.length == 1 && cy(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var f = arguments
                      , v = f[0];
                    if (a && f.length == 1 && OV(v))
                        return a.plant(v).value();
                    for (var p = 0, h = r ? t[p].apply(this, f) : v; ++p < r; )
                        h = t[p].call(this, h);
                    return h
                }
            })
        }
        ly.exports = CV
    }
    );
    var py = u( (dK, dy) => {
        var NV = fy()
          , qV = NV();
        dy.exports = qV
    }
    );
    var hy = u( (pK, vy) => {
        function PV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        vy.exports = PV
    }
    );
    var gy = u( (vK, Ey) => {
        var xV = hy()
          , ss = Jn();
        function LV(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ss(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ss(t),
            t = t === t ? t : 0),
            xV(ss(e), t, r)
        }
        Ey.exports = LV
    }
    );
    var My = u(wi => {
        "use strict";
        var Ri = Ke().default;
        Object.defineProperty(wi, "__esModule", {
            value: !0
        });
        wi.default = void 0;
        var Be = Ri(tr())
          , MV = Ri(py())
          , DV = Ri(Qn())
          , FV = Ri(gy())
          , jt = De()
          , us = ds()
          , bi = gi()
          , GV = Wt()
          , {MOUSE_CLICK: XV, MOUSE_SECOND_CLICK: VV, MOUSE_DOWN: UV, MOUSE_UP: BV, MOUSE_OVER: WV, MOUSE_OUT: jV, DROPDOWN_CLOSE: HV, DROPDOWN_OPEN: kV, SLIDER_ACTIVE: KV, SLIDER_INACTIVE: zV, TAB_ACTIVE: YV, TAB_INACTIVE: $V, NAVBAR_CLOSE: QV, NAVBAR_OPEN: ZV, MOUSE_MOVE: JV, PAGE_SCROLL_DOWN: Sy, SCROLL_INTO_VIEW: Ry, SCROLL_OUT_OF_VIEW: eU, PAGE_SCROLL_UP: tU, SCROLLING_IN_VIEW: rU, PAGE_FINISH: wy, ECOMMERCE_CART_CLOSE: nU, ECOMMERCE_CART_OPEN: iU, PAGE_START: Cy, PAGE_SCROLL: oU} = jt.EventTypeConsts
          , cs = "COMPONENT_ACTIVE"
          , Ny = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: _y} = jt.IX2EngineConstants
          , {getNamespacedParameterId: yy} = GV.IX2VanillaUtils
          , qy = e => t => typeof t == "object" && e(t) ? !0 : t
          , rn = qy( ({element: e, nativeEvent: t}) => e === t.target)
          , aU = qy( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , lt = (0,
        MV.default)([rn, aU])
          , Py = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !uU[o.eventTypeId])
                    return o
            }
            return null
        }
          , sU = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Py(e, n)
        }
          , Ge = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: s, autoStopEventId: c} = i.config
              , f = Py(e, c);
            return f && (0,
            us.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + _y + n.split(_y)[1],
                actionListId: (0,
                DV.default)(f, "action.config.actionListId")
            }),
            (0,
            us.stopActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            (0,
            us.startActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            o
        }
          , Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n
          , nn = {
            handler: Qe(lt, Ge)
        }
          , xy = (0,
        Be.default)({}, nn, {
            types: [cs, Ny].join(" ")
        })
          , ls = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , Iy = "mouseover mouseout"
          , fs = {
            types: ls
        }
          , uU = {
            PAGE_START: Cy,
            PAGE_FINISH: wy
        }
          , tn = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                FV.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , cU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , lU = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
          , fU = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = tn()
              , i = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return cU(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: o - c
            })
        }
          , Ly = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [cs, Ny].indexOf(n) !== -1 ? n === cs : r.isActive
              , i = (0,
            Be.default)({}, r, {
                isActive: o
            });
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
          , Ty = e => (t, r) => {
            let n = {
                elementHovered: lU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , dU = e => (t, r) => {
            let n = (0,
            Be.default)({}, r, {
                elementVisible: fU(t)
            });
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
          , my = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = tn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: f} = a
              , v = f === "PX"
              , p = o - i
              , h = Number((n / p).toFixed(2));
            if (r && r.percentTop === h)
                return r;
            let y = (v ? c : i * (c || 0) / 100) / p, m, I, q = 0;
            r && (m = h > r.percentTop,
            I = r.scrollingDown !== m,
            q = I ? h : r.anchorTop);
            let R = s === Sy ? h >= q + y : h <= q - y
              , w = (0,
            Be.default)({}, r, {
                percentTop: h,
                inBounds: R,
                anchorTop: q,
                scrollingDown: m
            });
            return r && R && (I || w.inBounds !== r.inBounds) && e(t, w) || w
        }
          , pU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , vU = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
          , hU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
          , Oy = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
          , Ai = (e=!0) => (0,
        Be.default)({}, xy, {
            handler: Qe(e ? lt : rn, Ly( (t, r) => r.isActive ? nn.handler(t, r) : r))
        })
          , Si = (e=!0) => (0,
        Be.default)({}, xy, {
            handler: Qe(e ? lt : rn, Ly( (t, r) => r.isActive ? r : nn.handler(t, r)))
        })
          , by = (0,
        Be.default)({}, fs, {
            handler: dU( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ry === r ? (Ge(e),
                (0,
                Be.default)({}, t, {
                    triggered: !0
                })) : t
            }
            )
        })
          , Ay = .05
          , EU = {
            [KV]: Ai(),
            [zV]: Si(),
            [kV]: Ai(),
            [HV]: Si(),
            [ZV]: Ai(!1),
            [QV]: Si(!1),
            [YV]: Ai(),
            [$V]: Si(),
            [iU]: {
                types: "ecommerce-cart-open",
                handler: Qe(lt, Ge)
            },
            [nU]: {
                types: "ecommerce-cart-close",
                handler: Qe(lt, Ge)
            },
            [XV]: {
                types: "click",
                handler: Qe(lt, Oy( (e, {clickCount: t}) => {
                    sU(e) ? t === 1 && Ge(e) : Ge(e)
                }
                ))
            },
            [VV]: {
                types: "click",
                handler: Qe(lt, Oy( (e, {clickCount: t}) => {
                    t === 2 && Ge(e)
                }
                ))
            },
            [UV]: (0,
            Be.default)({}, nn, {
                types: "mousedown"
            }),
            [BV]: (0,
            Be.default)({}, nn, {
                types: "mouseup"
            }),
            [WV]: {
                types: Iy,
                handler: Qe(lt, Ty( (e, t) => {
                    t.elementHovered && Ge(e)
                }
                ))
            },
            [jV]: {
                types: Iy,
                handler: Qe(lt, Ty( (e, t) => {
                    t.elementHovered || Ge(e)
                }
                ))
            },
            [JV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: v=0} = r
                      , {clientX: p=i.clientX, clientY: h=i.clientY, pageX: y=i.pageX, pageY: m=i.pageY} = n
                      , I = s === "X_AXIS"
                      , q = n.type === "mouseout"
                      , R = v / 100
                      , w = c
                      , T = !1;
                    switch (a) {
                    case jt.EventBasedOn.VIEWPORT:
                        {
                            R = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case jt.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: G, scrollTop: D, scrollWidth: P, scrollHeight: V} = tn();
                            R = I ? Math.min(G + y, P) / P : Math.min(D + m, V) / V;
                            break
                        }
                    case jt.EventBasedOn.ELEMENT:
                    default:
                        {
                            w = yy(o, c);
                            let G = n.type.indexOf("mouse") === 0;
                            if (G && lt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: P, top: V, width: B, height: W} = D;
                            if (!G && !pU({
                                left: p,
                                top: h
                            }, D))
                                break;
                            T = !0,
                            R = I ? (p - P) / B : (h - V) / W;
                            break
                        }
                    }
                    return q && (R > 1 - Ay || R < Ay) && (R = Math.round(R)),
                    (a !== jt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) && (R = f ? 1 - R : R,
                    e.dispatch((0,
                    bi.parameterChanged)(w, R))),
                    {
                        elementHovered: T,
                        clientX: p,
                        clientY: h,
                        pageX: y,
                        pageY: m
                    }
                }
            },
            [oU]: {
                types: ls,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = tn()
                      , s = o / (i - a);
                    s = n ? 1 - s : s,
                    e.dispatch((0,
                    bi.parameterChanged)(r, s))
                }
            },
            [rU]: {
                types: ls,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f} = tn()
                      , {basedOn: v, selectedAxis: p, continuousParameterGroupId: h, startsEntering: y, startsExiting: m, addEndOffset: I, addStartOffset: q, addOffsetValue: R=0, endOffsetValue: w=0} = r
                      , T = p === "X_AXIS";
                    if (v === jt.EventBasedOn.VIEWPORT) {
                        let G = T ? i / s : a / c;
                        return G !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(h, G)),
                        {
                            scrollPercent: G
                        }
                    } else {
                        let G = yy(n, h)
                          , D = e.getBoundingClientRect()
                          , P = (q ? R : 0) / 100
                          , V = (I ? w : 0) / 100;
                        P = y ? P : 1 - P,
                        V = m ? V : 1 - V;
                        let B = D.top + Math.min(D.height * P, f)
                          , J = D.top + D.height * V - B
                          , K = Math.min(f + J, c)
                          , g = Math.min(Math.max(0, f - B), K) / K;
                        return g !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(G, g)),
                        {
                            scrollPercent: g
                        }
                    }
                }
            },
            [Ry]: by,
            [eU]: by,
            [Sy]: (0,
            Be.default)({}, fs, {
                handler: my( (e, t) => {
                    t.scrollingDown && Ge(e)
                }
                )
            }),
            [tU]: (0,
            Be.default)({}, fs, {
                handler: my( (e, t) => {
                    t.scrollingDown || Ge(e)
                }
                )
            }),
            [wy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, vU(Ge))
            },
            [Cy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, hU(Ge))
            }
        };
        wi.default = EU
    }
    );
    var ds = u(Nt => {
        "use strict";
        var Je = Ke().default
          , gU = Lt().default;
        Object.defineProperty(Nt, "__esModule", {
            value: !0
        });
        Nt.observeRequests = KU;
        Nt.startActionGroup = _s;
        Nt.startEngine = xi;
        Nt.stopActionGroup = gs;
        Nt.stopAllActionGroups = jy;
        Nt.stopEngine = Li;
        var _U = Je(tr())
          , yU = Je(ZE())
          , IU = Je(Na())
          , Ct = Je(Qn())
          , TU = Je(gg())
          , mU = Je(Wg())
          , OU = Je(Hg())
          , bU = Je(Kg())
          , on = Je(Jg())
          , AU = Je(a_())
          , Ze = De()
          , Gy = Wt()
          , Ee = gi()
          , Ie = gU(f_())
          , SU = Je(My())
          , RU = ["store", "computedStyle"]
          , wU = Object.keys(Ze.QuickEffectIds)
          , ps = e => wU.includes(e)
          , {COLON_DELIMITER: vs, BOUNDARY_SELECTOR: Ci, HTML_ELEMENT: Xy, RENDER_GENERAL: CU, W_MOD_IX: Dy} = Ze.IX2EngineConstants
          , {getAffectedElements: Ni, getElementId: NU, getDestinationValues: hs, observeStore: Ht, getInstanceId: qU, renderHTMLElement: PU, clearAllStyles: Vy, getMaxDurationItemIndex: xU, getComputedStyle: LU, getInstanceOrigin: MU, reduceListToGroup: DU, shouldNamespaceEventParameter: FU, getNamespacedParameterId: GU, shouldAllowMediaQuery: qi, cleanupHTMLElement: XU, clearObjectCache: VU, stringifyTarget: UU, mediaQueriesEqual: BU, shallowEqual: WU} = Gy.IX2VanillaUtils
          , {isPluginType: Pi, createPluginInstance: Es, getPluginDuration: jU} = Gy.IX2VanillaPlugins
          , Fy = navigator.userAgent
          , HU = Fy.match(/iPad/i) || Fy.match(/iPhone/)
          , kU = 12;
        function KU(e) {
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.preview,
                onChange: $U
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.playback,
                onChange: QU
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.stop,
                onChange: ZU
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.clear,
                onChange: JU
            })
        }
        function zU(e) {
            Ht({
                store: e,
                select: ({ixSession: t}) => t.mediaQueryKey,
                onChange: () => {
                    Li(e),
                    Vy({
                        store: e,
                        elementApi: Ie
                    }),
                    xi({
                        store: e,
                        allowEvents: !0
                    }),
                    Uy()
                }
            })
        }
        function YU(e, t) {
            let r = Ht({
                store: e,
                select: ({ixSession: n}) => n.tick,
                onChange: n => {
                    t(n),
                    r()
                }
            })
        }
        function $U({rawData: e, defer: t}, r) {
            let n = () => {
                xi({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }),
                Uy()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function Uy() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function QU(e, t) {
            let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: f=!0} = e
              , {rawData: v} = e;
            if (n && o && v && s) {
                let p = v.actionLists[n];
                p && (v = DU({
                    actionList: p,
                    actionItemId: o,
                    rawData: v
                }))
            }
            if (xi({
                store: t,
                rawData: v,
                allowEvents: a,
                testManual: c
            }),
            n && r === Ze.ActionTypeConsts.GENERAL_START_ACTION || ps(r)) {
                gs({
                    store: t,
                    actionListId: n
                }),
                Wy({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let p = _s({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: f
                });
                f && p && t.dispatch((0,
                Ee.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }
        function ZU({actionListId: e}, t) {
            e ? gs({
                store: t,
                actionListId: e
            }) : jy({
                store: t
            }),
            Li(t)
        }
        function JU(e, t) {
            Li(t),
            Vy({
                store: t,
                elementApi: Ie
            })
        }
        function xi({store: e, rawData: t, allowEvents: r, testManual: n}) {
            let {ixSession: o} = e.getState();
            t && e.dispatch((0,
            Ee.rawDataImported)(t)),
            o.active || (e.dispatch((0,
            Ee.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Ci),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })),
            r && (oB(e),
            eB(),
            e.getState().ixSession.hasDefinedMediaQueries && zU(e)),
            e.dispatch((0,
            Ee.sessionStarted)()),
            tB(e, n))
        }
        function eB() {
            let {documentElement: e} = document;
            e.className.indexOf(Dy) === -1 && (e.className += ` ${Dy}`)
        }
        function tB(e, t) {
            let r = n => {
                let {ixSession: o, ixParameters: i} = e.getState();
                o.active && (e.dispatch((0,
                Ee.animationFrameChanged)(n, i)),
                t ? YU(e, r) : requestAnimationFrame(r))
            }
            ;
            r(window.performance.now())
        }
        function Li(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: r} = t;
                r.forEach(rB),
                VU(),
                e.dispatch((0,
                Ee.sessionStopped)())
            }
        }
        function rB({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        function nB({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c}) {
            let {ixData: f, ixSession: v} = e.getState()
              , {events: p} = f
              , h = p[n]
              , {eventTypeId: y} = h
              , m = {}
              , I = {}
              , q = []
              , {continuousActionGroups: R} = a
              , {id: w} = a;
            FU(y, o) && (w = GU(t, w));
            let T = v.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null;
            R.forEach(G => {
                let {keyframe: D, actionItems: P} = G;
                P.forEach(V => {
                    let {actionTypeId: B} = V
                      , {target: W} = V.config;
                    if (!W)
                        return;
                    let J = W.boundaryMode ? T : null
                      , K = UU(W) + vs + B;
                    if (I[K] = iB(I[K], D, V),
                    !m[K]) {
                        m[K] = !0;
                        let {config: M} = V;
                        Ni({
                            config: M,
                            event: h,
                            eventTarget: r,
                            elementRoot: J,
                            elementApi: Ie
                        }).forEach(g => {
                            q.push({
                                element: g,
                                key: K
                            })
                        }
                        )
                    }
                }
                )
            }
            ),
            q.forEach( ({element: G, key: D}) => {
                let P = I[D]
                  , V = (0,
                Ct.default)(P, "[0].actionItems[0]", {})
                  , {actionTypeId: B} = V
                  , W = Pi(B) ? Es(B)(G, V) : null
                  , J = hs({
                    element: G,
                    actionItem: V,
                    elementApi: Ie
                }, W);
                ys({
                    store: e,
                    element: G,
                    eventId: n,
                    actionListId: i,
                    actionItem: V,
                    destination: J,
                    continuous: !0,
                    parameterId: w,
                    actionGroups: P,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: W
                })
            }
            )
        }
        function iB(e=[], t, r) {
            let n = [...e], o;
            return n.some( (i, a) => i.keyframe === t ? (o = a,
            !0) : !1),
            o == null && (o = n.length,
            n.push({
                keyframe: t,
                actionItems: []
            })),
            n[o].actionItems.push(r),
            n
        }
        function oB(e) {
            let {ixData: t} = e.getState()
              , {eventTypeMap: r} = t;
            By(e),
            (0,
            on.default)(r, (o, i) => {
                let a = SU.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                fB({
                    logic: a,
                    store: e,
                    events: o
                })
            }
            );
            let {ixSession: n} = e.getState();
            n.eventListeners.length && sB(e)
        }
        var aB = ["resize", "orientationchange"];
        function sB(e) {
            let t = () => {
                By(e)
            }
            ;
            aB.forEach(r => {
                window.addEventListener(r, t),
                e.dispatch((0,
                Ee.eventListenerAdded)(window, [r, t]))
            }
            ),
            t()
        }
        function By(e) {
            let {ixSession: t, ixData: r} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: o} = r;
                e.dispatch((0,
                Ee.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var uB = (e, t) => (0,
        mU.default)((0,
        bU.default)(e, t), OU.default)
          , cB = (e, t) => {
            (0,
            on.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + vs + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
          , lB = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ni({
                config: t,
                elementApi: Ie
            })
        }
        ;
        function fB({logic: e, store: t, events: r}) {
            dB(r);
            let {types: n, handler: o} = e
              , {ixData: i} = t.getState()
              , {actionLists: a} = i
              , s = uB(r, lB);
            if (!(0,
            TU.default)(s))
                return;
            (0,
            on.default)(s, (p, h) => {
                let y = r[h]
                  , {action: m, id: I, mediaQueries: q=i.mediaQueryKeys} = y
                  , {actionListId: R} = m.config;
                BU(q, i.mediaQueryKeys) || t.dispatch((0,
                Ee.mediaQueriesDefined)()),
                m.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(y.config) ? y.config : [y.config]).forEach(T => {
                    let {continuousParameterGroupId: G} = T
                      , D = (0,
                    Ct.default)(a, `${R}.continuousParameterGroups`, [])
                      , P = (0,
                    IU.default)(D, ({id: W}) => W === G)
                      , V = (T.smoothing || 0) / 100
                      , B = (T.restingState || 0) / 100;
                    P && p.forEach( (W, J) => {
                        let K = I + vs + J;
                        nB({
                            store: t,
                            eventStateKey: K,
                            eventTarget: W,
                            eventId: I,
                            eventConfig: T,
                            actionListId: R,
                            parameterGroup: P,
                            smoothing: V,
                            restingValue: B
                        })
                    }
                    )
                }
                ),
                (m.actionTypeId === Ze.ActionTypeConsts.GENERAL_START_ACTION || ps(m.actionTypeId)) && Wy({
                    store: t,
                    actionListId: R,
                    eventId: I
                })
            }
            );
            let c = p => {
                let {ixSession: h} = t.getState();
                cB(s, (y, m, I) => {
                    let q = r[m]
                      , R = h.eventState[I]
                      , {action: w, mediaQueries: T=i.mediaQueryKeys} = q;
                    if (!qi(T, h.mediaQueryKey))
                        return;
                    let G = (D={}) => {
                        let P = o({
                            store: t,
                            element: y,
                            event: q,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: I
                        }, R);
                        WU(P, R) || t.dispatch((0,
                        Ee.eventStateChanged)(I, P))
                    }
                    ;
                    w.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(G) : G()
                }
                )
            }
              , f = (0,
            AU.default)(c, kU)
              , v = ({target: p=document, types: h, throttle: y}) => {
                h.split(" ").filter(Boolean).forEach(m => {
                    let I = y ? f : c;
                    p.addEventListener(m, I),
                    t.dispatch((0,
                    Ee.eventListenerAdded)(p, [m, I]))
                }
                )
            }
            ;
            Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
        }
        function dB(e) {
            if (!HU)
                return;
            let t = {}
              , r = "";
            for (let n in e) {
                let {eventTypeId: o, target: i} = e[n]
                  , a = Ie.getQuerySelector(i);
                t[a] || (o === Ze.EventTypeConsts.MOUSE_CLICK || o === Ze.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0,
                r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r,
                document.body.appendChild(n)
            }
        }
        function Wy({store: e, actionListId: t, eventId: r}) {
            let {ixData: n, ixSession: o} = e.getState()
              , {actionLists: i, events: a} = n
              , s = a[r]
              , c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let f = (0,
                Ct.default)(c, "actionItemGroups[0].actionItems", [])
                  , v = (0,
                Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!qi(v, o.mediaQueryKey))
                    return;
                f.forEach(p => {
                    var h;
                    let {config: y, actionTypeId: m} = p
                      , I = (y == null || (h = y.target) === null || h === void 0 ? void 0 : h.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : y
                      , q = Ni({
                        config: I,
                        event: s,
                        elementApi: Ie
                    })
                      , R = Pi(m);
                    q.forEach(w => {
                        let T = R ? Es(m)(w, p) : null;
                        ys({
                            destination: hs({
                                element: w,
                                actionItem: p,
                                elementApi: Ie
                            }, T),
                            immediate: !0,
                            store: e,
                            element: w,
                            eventId: r,
                            actionItem: p,
                            actionListId: t,
                            pluginInstance: T
                        })
                    }
                    )
                }
                )
            }
        }
        function jy({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            on.default)(t, r => {
                if (!r.continuous) {
                    let {actionListId: n, verbose: o} = r;
                    Is(r, e),
                    o && e.dispatch((0,
                    Ee.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function gs({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
            let {ixInstances: i, ixSession: a} = e.getState()
              , s = a.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null;
            (0,
            on.default)(i, c => {
                let f = (0,
                Ct.default)(c, "actionItem.config.target.boundaryMode")
                  , v = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && v) {
                    if (s && f && !Ie.elementContains(s, c.element))
                        return;
                    Is(c, e),
                    c.verbose && e.dispatch((0,
                    Ee.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function _s({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: s}) {
            var c;
            let {ixData: f, ixSession: v} = e.getState()
              , {events: p} = f
              , h = p[t] || {}
              , {mediaQueries: y=f.mediaQueryKeys} = h
              , m = (0,
            Ct.default)(f, `actionLists.${o}`, {})
              , {actionItemGroups: I, useFirstGroupAsInitialState: q} = m;
            if (!I || !I.length)
                return !1;
            i >= I.length && (0,
            Ct.default)(h, "config.loop") && (i = 0),
            i === 0 && q && i++;
            let w = (i === 0 || i === 1 && q) && ps((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? h.config.delay : void 0
              , T = (0,
            Ct.default)(I, [i, "actionItems"], []);
            if (!T.length || !qi(y, v.mediaQueryKey))
                return !1;
            let G = v.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null
              , D = xU(T)
              , P = !1;
            return T.forEach( (V, B) => {
                let {config: W, actionTypeId: J} = V
                  , K = Pi(J)
                  , {target: M} = W;
                if (!M)
                    return;
                let g = M.boundaryMode ? G : null;
                Ni({
                    config: W,
                    event: h,
                    eventTarget: r,
                    elementRoot: g,
                    elementApi: Ie
                }).forEach( (F, X) => {
                    let H = K ? Es(J)(F, V) : null
                      , z = K ? jU(J)(F, V) : null;
                    P = !0;
                    let ie = D === B && X === 0
                      , Ce = LU({
                        element: F,
                        actionItem: V
                    })
                      , d = hs({
                        element: F,
                        actionItem: V,
                        elementApi: Ie
                    }, H);
                    ys({
                        store: e,
                        element: F,
                        actionItem: V,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: ie,
                        computedStyle: Ce,
                        destination: d,
                        immediate: a,
                        verbose: s,
                        pluginInstance: H,
                        pluginDuration: z,
                        instanceDelay: w
                    })
                }
                )
            }
            ),
            P
        }
        function ys(e) {
            var t;
            let {store: r, computedStyle: n} = e, o = (0,
            yU.default)(e, RU), {element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: f, restingValue: v, eventId: p} = o, h = !f, y = qU(), {ixElements: m, ixSession: I, ixData: q} = r.getState(), R = NU(m, i), {refState: w} = m[R] || {}, T = Ie.getRefType(i), G = I.reducedMotion && Ze.ReducedMotionTypes[a.actionTypeId], D;
            if (G && f)
                switch ((t = q.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case Ze.EventTypeConsts.MOUSE_MOVE:
                case Ze.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    D = v;
                    break;
                default:
                    D = .5;
                    break
                }
            let P = MU(i, w, n, a, Ie, c);
            if (r.dispatch((0,
            Ee.instanceAdded)((0,
            _U.default)({
                instanceId: y,
                elementId: R,
                origin: P,
                refType: T,
                skipMotion: G,
                skipToValue: D
            }, o))),
            Hy(document.body, "ix2-animation-started", y),
            s) {
                pB(r, y);
                return
            }
            Ht({
                store: r,
                select: ({ixInstances: V}) => V[y],
                onChange: ky
            }),
            h && r.dispatch((0,
            Ee.instanceStarted)(y, I.tick))
        }
        function Is(e, t) {
            Hy(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: r, actionItem: n} = e
              , {ixElements: o} = t.getState()
              , {ref: i, refType: a} = o[r] || {};
            a === Xy && XU(i, n, Ie),
            t.dispatch((0,
            Ee.instanceRemoved)(e.id))
        }
        function Hy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r),
            e.dispatchEvent(n)
        }
        function pB(e, t) {
            let {ixParameters: r} = e.getState();
            e.dispatch((0,
            Ee.instanceStarted)(t, 0)),
            e.dispatch((0,
            Ee.animationFrameChanged)(performance.now(), r));
            let {ixInstances: n} = e.getState();
            ky(n[t], e)
        }
        function ky(e, t) {
            let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: s, renderType: c, current: f, groupIndex: v, eventId: p, eventTarget: h, eventStateKey: y, actionListId: m, isCarrier: I, styleProp: q, verbose: R, pluginInstance: w} = e
              , {ixData: T, ixSession: G} = t.getState()
              , {events: D} = T
              , P = D[p] || {}
              , {mediaQueries: V=T.mediaQueryKeys} = P;
            if (qi(V, G.mediaQueryKey) && (n || r || o)) {
                if (f || c === CU && o) {
                    t.dispatch((0,
                    Ee.elementStateChanged)(i, s, f, a));
                    let {ixElements: B} = t.getState()
                      , {ref: W, refType: J, refState: K} = B[i] || {}
                      , M = K && K[s];
                    (J === Xy || Pi(s)) && PU(W, K, M, p, a, q, Ie, c, w)
                }
                if (o) {
                    if (I) {
                        let B = _s({
                            store: t,
                            eventId: p,
                            eventTarget: h,
                            eventStateKey: y,
                            actionListId: m,
                            groupIndex: v + 1,
                            verbose: R
                        });
                        R && !B && t.dispatch((0,
                        Ee.actionListPlaybackChanged)({
                            actionListId: m,
                            isPlaying: !1
                        }))
                    }
                    Is(e, t)
                }
            }
        }
    }
    );
    var zy = u(yt => {
        "use strict";
        var vB = Lt().default
          , hB = Ke().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = Ky;
        yt.init = IB;
        yt.setEnv = yB;
        yt.store = void 0;
        Pl();
        var EB = Yo()
          , gB = hB(QE())
          , Ts = ds()
          , _B = vB(gi());
        yt.actions = _B;
        var Mi = (0,
        EB.createStore)(gB.default);
        yt.store = Mi;
        function yB(e) {
            e() && (0,
            Ts.observeRequests)(Mi)
        }
        function IB(e) {
            Ky(),
            (0,
            Ts.startEngine)({
                store: Mi,
                rawData: e,
                allowEvents: !0
            })
        }
        function Ky() {
            (0,
            Ts.stopEngine)(Mi)
        }
    }
    );
    var Zy = u( (_K, Qy) => {
        var Yy = vt()
          , $y = zy();
        $y.setEnv(Yy.env);
        Yy.define("ix2", Qy.exports = function() {
            return $y
        }
        )
    }
    );
    var eI = u( (yK, Jy) => {
        var mr = vt();
        mr.define("links", Jy.exports = function(e, t) {
            var r = {}, n = e(window), o, i = mr.env(), a = window.location, s = document.createElement("a"), c = "w--current", f = /index\.(html|php)$/, v = /\/$/, p, h;
            r.ready = r.design = r.preview = y;
            function y() {
                o = i && mr.env("design"),
                h = mr.env("slug") || a.pathname || "",
                mr.scroll.off(I),
                p = [];
                for (var R = document.links, w = 0; w < R.length; ++w)
                    m(R[w]);
                p.length && (mr.scroll.on(I),
                I())
            }
            function m(R) {
                var w = o && R.getAttribute("href-disabled") || R.getAttribute("href");
                if (s.href = w,
                !(w.indexOf(":") >= 0)) {
                    var T = e(R);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var G = e(s.hash);
                        G.length && p.push({
                            link: T,
                            sec: G,
                            active: !1
                        });
                        return
                    }
                    if (!(w === "#" || w === "")) {
                        var D = s.href === a.href || w === h || f.test(w) && v.test(h);
                        q(T, c, D)
                    }
                }
            }
            function I() {
                var R = n.scrollTop()
                  , w = n.height();
                t.each(p, function(T) {
                    var G = T.link
                      , D = T.sec
                      , P = D.offset().top
                      , V = D.outerHeight()
                      , B = w * .5
                      , W = D.is(":visible") && P + V - B >= R && P + B <= R + w;
                    T.active !== W && (T.active = W,
                    q(G, c, W))
                })
            }
            function q(R, w, T) {
                var G = R.hasClass(w);
                T && G || !T && !G || (T ? R.addClass(w) : R.removeClass(w))
            }
            return r
        }
        )
    }
    );
    var rI = u( (IK, tI) => {
        var Di = vt();
        Di.define("scroll", tI.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = m() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(M) {
                window.setTimeout(M, 15)
            }
              , c = Di.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , v = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")"
              , h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , y = document.createElement("style");
            y.appendChild(document.createTextNode(h));
            function m() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            function q(M) {
                return I.test(M.hash) && M.host + M.pathname === r.host + r.pathname
            }
            let R = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function w() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || R.matches
            }
            function T(M, g) {
                var x;
                switch (g) {
                case "add":
                    x = M.attr("tabindex"),
                    x ? M.attr("data-wf-tabindex-swap", x) : M.attr("tabindex", "-1");
                    break;
                case "remove":
                    x = M.attr("data-wf-tabindex-swap"),
                    x ? (M.attr("tabindex", x),
                    M.removeAttr("data-wf-tabindex-swap")) : M.removeAttr("tabindex");
                    break
                }
                M.toggleClass("wf-force-outline-none", g === "add")
            }
            function G(M) {
                var g = M.currentTarget;
                if (!(Di.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var x = q(g) ? g.hash : "";
                    if (x !== "") {
                        var F = e(x);
                        F.length && (M && (M.preventDefault(),
                        M.stopPropagation()),
                        D(x, M),
                        window.setTimeout(function() {
                            P(F, function() {
                                T(F, "add"),
                                F.get(0).focus({
                                    preventScroll: !0
                                }),
                                T(F, "remove")
                            })
                        }, M ? 0 : 300))
                    }
                }
            }
            function D(M) {
                if (r.hash !== M && n && n.pushState && !(Di.env.chrome && r.protocol === "file:")) {
                    var g = n.state && n.state.hash;
                    g !== M && n.pushState({
                        hash: M
                    }, "", M)
                }
            }
            function P(M, g) {
                var x = o.scrollTop()
                  , F = V(M);
                if (x !== F) {
                    var X = B(M, x, F)
                      , H = Date.now()
                      , z = function() {
                        var ie = Date.now() - H;
                        window.scroll(0, W(x, F, ie, X)),
                        ie <= X ? s(z) : typeof g == "function" && g()
                    };
                    s(z)
                }
            }
            function V(M) {
                var g = e(f)
                  , x = g.css("position") === "fixed" ? g.outerHeight() : 0
                  , F = M.offset().top - x;
                if (M.data("scroll") === "mid") {
                    var X = o.height() - x
                      , H = M.outerHeight();
                    H < X && (F -= Math.round((X - H) / 2))
                }
                return F
            }
            function B(M, g, x) {
                if (w())
                    return 0;
                var F = 1;
                return a.add(M).each(function(X, H) {
                    var z = parseFloat(H.getAttribute("data-scroll-time"));
                    !isNaN(z) && z >= 0 && (F = z)
                }),
                (472.143 * Math.log(Math.abs(g - x) + 125) - 2e3) * F
            }
            function W(M, g, x, F) {
                return x > F ? g : M + (g - M) * J(x / F)
            }
            function J(M) {
                return M < .5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1
            }
            function K() {
                var {WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: g} = t;
                i.on(g, p, G),
                i.on(M, v, function(x) {
                    x.preventDefault()
                }),
                document.head.insertBefore(y, document.head.firstChild)
            }
            return {
                ready: K
            }
        }
        )
    }
    );
    var iI = u( (TK, nI) => {
        var TB = vt();
        TB.define("touch", nI.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), f, v;
                i.addEventListener("touchstart", p, !1),
                i.addEventListener("touchmove", h, !1),
                i.addEventListener("touchend", y, !1),
                i.addEventListener("touchcancel", m, !1),
                i.addEventListener("mousedown", p, !1),
                i.addEventListener("mousemove", h, !1),
                i.addEventListener("mouseup", y, !1),
                i.addEventListener("mouseout", m, !1);
                function p(q) {
                    var R = q.touches;
                    R && R.length > 1 || (a = !0,
                    R ? (s = !0,
                    f = R[0].clientX) : f = q.clientX,
                    v = f)
                }
                function h(q) {
                    if (a) {
                        if (s && q.type === "mousemove") {
                            q.preventDefault(),
                            q.stopPropagation();
                            return
                        }
                        var R = q.touches
                          , w = R ? R[0].clientX : q.clientX
                          , T = w - v;
                        v = w,
                        Math.abs(T) > c && r && String(r()) === "" && (o("swipe", q, {
                            direction: T > 0 ? "right" : "left"
                        }),
                        m())
                    }
                }
                function y(q) {
                    if (a && (a = !1,
                    s && q.type === "mouseup")) {
                        q.preventDefault(),
                        q.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function m() {
                    a = !1
                }
                function I() {
                    i.removeEventListener("touchstart", p, !1),
                    i.removeEventListener("touchmove", h, !1),
                    i.removeEventListener("touchend", y, !1),
                    i.removeEventListener("touchcancel", m, !1),
                    i.removeEventListener("mousedown", p, !1),
                    i.removeEventListener("mousemove", h, !1),
                    i.removeEventListener("mouseup", y, !1),
                    i.removeEventListener("mouseout", m, !1),
                    i = null
                }
                this.destroy = I
            }
            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var sI = u( (mK, aI) => {
        var qt = vt()
          , mB = ji()
          , ft = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , oI = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        qt.define("slider", aI.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, s = qt.env(), c = ".w-slider", f = '<div class="w-slider-dot" data-wf-ignore />', v = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', p = "w-slider-force-show", h = mB.triggers, y, m = !1;
            r.ready = function() {
                a = qt.env("design"),
                I()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(I, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                I()
            }
            ,
            r.redraw = function() {
                m = !0,
                I(),
                m = !1
            }
            ,
            r.destroy = q;
            function I() {
                i = o.find(c),
                i.length && (i.each(T),
                !y && (q(),
                R()))
            }
            function q() {
                qt.resize.off(w),
                qt.redraw.off(r.redraw)
            }
            function R() {
                qt.resize.on(w),
                qt.redraw.on(r.redraw)
            }
            function w() {
                i.filter(":visible").each(X)
            }
            function T(d, L) {
                var C = e(L)
                  , b = e.data(L, c);
                b || (b = e.data(L, c, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: C,
                    config: {}
                })),
                b.mask = C.children(".w-slider-mask"),
                b.left = C.children(".w-slider-arrow-left"),
                b.right = C.children(".w-slider-arrow-right"),
                b.nav = C.children(".w-slider-nav"),
                b.slides = b.mask.children(".w-slide"),
                b.slides.each(h.reset),
                m && (b.maskWidth = 0),
                C.attr("role") === void 0 && C.attr("role", "region"),
                C.attr("aria-label") === void 0 && C.attr("aria-label", "carousel");
                var te = b.mask.attr("id");
                if (te || (te = "w-slider-mask-" + d,
                b.mask.attr("id", te)),
                !a && !b.ariaLiveLabel && (b.ariaLiveLabel = e(v).appendTo(b.mask)),
                b.left.attr("role", "button"),
                b.left.attr("tabindex", "0"),
                b.left.attr("aria-controls", te),
                b.left.attr("aria-label") === void 0 && b.left.attr("aria-label", "previous slide"),
                b.right.attr("role", "button"),
                b.right.attr("tabindex", "0"),
                b.right.attr("aria-controls", te),
                b.right.attr("aria-label") === void 0 && b.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    b.left.hide(),
                    b.right.hide(),
                    b.nav.hide(),
                    y = !0;
                    return
                }
                b.el.off(c),
                b.left.off(c),
                b.right.off(c),
                b.nav.off(c),
                G(b),
                a ? (b.el.on("setting" + c, g(b)),
                M(b),
                b.hasTimer = !1) : (b.el.on("swipe" + c, g(b)),
                b.left.on("click" + c, B(b)),
                b.right.on("click" + c, W(b)),
                b.left.on("keydown" + c, V(b, B)),
                b.right.on("keydown" + c, V(b, W)),
                b.nav.on("keydown" + c, "> div", g(b)),
                b.config.autoplay && !b.hasTimer && (b.hasTimer = !0,
                b.timerCount = 1,
                K(b)),
                b.el.on("mouseenter" + c, P(b, !0, "mouse")),
                b.el.on("focusin" + c, P(b, !0, "keyboard")),
                b.el.on("mouseleave" + c, P(b, !1, "mouse")),
                b.el.on("focusout" + c, P(b, !1, "keyboard"))),
                b.nav.on("click" + c, "> div", g(b)),
                s || b.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var oe = C.filter(":hidden");
                oe.addClass(p);
                var Oe = C.parents(":hidden");
                Oe.addClass(p),
                m || X(d, L),
                oe.removeClass(p),
                Oe.removeClass(p)
            }
            function G(d) {
                var L = {};
                L.crossOver = 0,
                L.animation = d.el.attr("data-animation") || "slide",
                L.animation === "outin" && (L.animation = "cross",
                L.crossOver = .5),
                L.easing = d.el.attr("data-easing") || "ease";
                var C = d.el.attr("data-duration");
                if (L.duration = C != null ? parseInt(C, 10) : 500,
                D(d.el.attr("data-infinite")) && (L.infinite = !0),
                D(d.el.attr("data-disable-swipe")) && (L.disableSwipe = !0),
                D(d.el.attr("data-hide-arrows")) ? L.hideArrows = !0 : d.config.hideArrows && (d.left.show(),
                d.right.show()),
                D(d.el.attr("data-autoplay"))) {
                    L.autoplay = !0,
                    L.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3,
                    L.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var b = "mousedown" + c + " touchstart" + c;
                    a || d.el.off(b).one(b, function() {
                        M(d)
                    })
                }
                var te = d.right.width();
                L.edge = te ? te + 40 : 100,
                d.config = L
            }
            function D(d) {
                return d === "1" || d === "true"
            }
            function P(d, L, C) {
                return function(b) {
                    if (L)
                        d.hasFocus[C] = L;
                    else if (e.contains(d.el.get(0), b.relatedTarget) || (d.hasFocus[C] = L,
                    d.hasFocus.mouse && C === "keyboard" || d.hasFocus.keyboard && C === "mouse"))
                        return;
                    L ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                    d.hasTimer && M(d)) : (d.ariaLiveLabel.attr("aria-live", "off"),
                    d.hasTimer && K(d))
                }
            }
            function V(d, L) {
                return function(C) {
                    switch (C.keyCode) {
                    case ft.SPACE:
                    case ft.ENTER:
                        return L(d)(),
                        C.preventDefault(),
                        C.stopPropagation()
                    }
                }
            }
            function B(d) {
                return function() {
                    F(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }
            function W(d) {
                return function() {
                    F(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }
            function J(d, L) {
                var C = null;
                L === d.slides.length && (I(),
                H(d)),
                t.each(d.anchors, function(b, te) {
                    e(b.els).each(function(oe, Oe) {
                        e(Oe).index() === L && (C = te)
                    })
                }),
                C != null && F(d, {
                    index: C,
                    immediate: !0
                })
            }
            function K(d) {
                M(d);
                var L = d.config
                  , C = L.timerMax;
                C && d.timerCount++ > C || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || a || (W(d)(),
                    K(d))
                }, L.delay))
            }
            function M(d) {
                window.clearTimeout(d.timerId),
                d.timerId = null
            }
            function g(d) {
                return function(L, C) {
                    C = C || {};
                    var b = d.config;
                    if (a && L.type === "setting") {
                        if (C.select === "prev")
                            return B(d)();
                        if (C.select === "next")
                            return W(d)();
                        if (G(d),
                        H(d),
                        C.select == null)
                            return;
                        J(d, C.select);
                        return
                    }
                    if (L.type === "swipe")
                        return b.disableSwipe || qt.env("editor") ? void 0 : C.direction === "left" ? W(d)() : C.direction === "right" ? B(d)() : void 0;
                    if (d.nav.has(L.target).length) {
                        var te = e(L.target).index();
                        if (L.type === "click" && F(d, {
                            index: te
                        }),
                        L.type === "keydown")
                            switch (L.keyCode) {
                            case ft.ENTER:
                            case ft.SPACE:
                                {
                                    F(d, {
                                        index: te
                                    }),
                                    L.preventDefault();
                                    break
                                }
                            case ft.ARROW_LEFT:
                            case ft.ARROW_UP:
                                {
                                    x(d.nav, Math.max(te - 1, 0)),
                                    L.preventDefault();
                                    break
                                }
                            case ft.ARROW_RIGHT:
                            case ft.ARROW_DOWN:
                                {
                                    x(d.nav, Math.min(te + 1, d.pages)),
                                    L.preventDefault();
                                    break
                                }
                            case ft.HOME:
                                {
                                    x(d.nav, 0),
                                    L.preventDefault();
                                    break
                                }
                            case ft.END:
                                {
                                    x(d.nav, d.pages),
                                    L.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function x(d, L) {
                var C = d.children().eq(L).focus();
                d.children().not(C)
            }
            function F(d, L) {
                L = L || {};
                var C = d.config
                  , b = d.anchors;
                d.previous = d.index;
                var te = L.index
                  , oe = {};
                te < 0 ? (te = b.length - 1,
                C.infinite && (oe.x = -d.endX,
                oe.from = 0,
                oe.to = b[0].width)) : te >= b.length && (te = 0,
                C.infinite && (oe.x = b[b.length - 1].width,
                oe.from = -b[b.length - 1].x,
                oe.to = oe.from - oe.x)),
                d.index = te;
                var Oe = d.nav.children().eq(te).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(Oe).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                C.hideArrows && (d.index === b.length - 1 ? d.right.hide() : d.right.show(),
                d.index === 0 ? d.left.hide() : d.left.show());
                var et = d.offsetX || 0
                  , Xe = d.offsetX = -b[d.index].x
                  , fe = {
                    x: Xe,
                    opacity: 1,
                    visibility: ""
                }
                  , he = e(b[d.index].els)
                  , dt = e(b[d.previous] && b[d.previous].els)
                  , pt = d.slides.not(he)
                  , It = C.animation
                  , Ve = C.easing
                  , Pt = Math.round(C.duration)
                  , an = L.vector || (d.index > d.previous ? 1 : -1)
                  , l = "opacity " + Pt + "ms " + Ve
                  , E = "transform " + Pt + "ms " + Ve;
                if (he.find(oI).removeAttr("tabindex"),
                he.removeAttr("aria-hidden"),
                he.find("*").removeAttr("aria-hidden"),
                pt.find(oI).attr("tabindex", "-1"),
                pt.attr("aria-hidden", "true"),
                pt.find("*").attr("aria-hidden", "true"),
                a || (he.each(h.intro),
                pt.each(h.outro)),
                L.immediate && !m) {
                    n(he).set(fe),
                    N();
                    return
                }
                if (d.index === d.previous)
                    return;
                if (a || d.ariaLiveLabel.text(`Slide ${te + 1} of ${b.length}.`),
                It === "cross") {
                    var _ = Math.round(Pt - Pt * C.crossOver)
                      , O = Math.round(Pt - _);
                    l = "opacity " + _ + "ms " + Ve,
                    n(dt).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }),
                    n(he).set({
                        visibility: "",
                        x: Xe,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).wait(O).then({
                        opacity: 1
                    }).then(N);
                    return
                }
                if (It === "fade") {
                    n(dt).set({
                        visibility: ""
                    }).stop(),
                    n(he).set({
                        visibility: "",
                        x: Xe,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(N);
                    return
                }
                if (It === "over") {
                    fe = {
                        x: d.endX
                    },
                    n(dt).set({
                        visibility: ""
                    }).stop(),
                    n(he).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: Xe + b[d.index].width * an
                    }).add(E).start({
                        x: Xe
                    }).then(N);
                    return
                }
                C.infinite && oe.x ? (n(d.slides.not(dt)).set({
                    visibility: "",
                    x: oe.x
                }).add(E).start({
                    x: Xe
                }),
                n(dt).set({
                    visibility: "",
                    x: oe.from
                }).add(E).start({
                    x: oe.to
                }),
                d.shifted = dt) : (C.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: et
                }),
                d.shifted = null),
                n(d.slides).set({
                    visibility: ""
                }).add(E).start({
                    x: Xe
                }));
                function N() {
                    he = e(b[d.index].els),
                    pt = d.slides.not(he),
                    It !== "slide" && (fe.visibility = "hidden"),
                    n(pt).set(fe)
                }
            }
            function X(d, L) {
                var C = e.data(L, c);
                if (C) {
                    if (ie(C))
                        return H(C);
                    a && Ce(C) && H(C)
                }
            }
            function H(d) {
                var L = 1
                  , C = 0
                  , b = 0
                  , te = 0
                  , oe = d.maskWidth
                  , Oe = oe - d.config.edge;
                Oe < 0 && (Oe = 0),
                d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                d.slides.each(function(Xe, fe) {
                    b - C > Oe && (L++,
                    C += oe,
                    d.anchors[L - 1] = {
                        els: [],
                        x: b,
                        width: 0
                    }),
                    te = e(fe).outerWidth(!0),
                    b += te,
                    d.anchors[L - 1].width += te,
                    d.anchors[L - 1].els.push(fe);
                    var he = Xe + 1 + " of " + d.slides.length;
                    e(fe).attr("aria-label", he),
                    e(fe).attr("role", "group")
                }),
                d.endX = b,
                a && (d.pages = null),
                d.nav.length && d.pages !== L && (d.pages = L,
                z(d));
                var et = d.index;
                et >= L && (et = L - 1),
                F(d, {
                    immediate: !0,
                    index: et
                })
            }
            function z(d) {
                var L = [], C, b = d.el.attr("data-nav-spacing");
                b && (b = parseFloat(b) + "px");
                for (var te = 0, oe = d.pages; te < oe; te++)
                    C = e(f),
                    C.attr("aria-label", "Show slide " + (te + 1) + " of " + oe).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    d.nav.hasClass("w-num") && C.text(te + 1),
                    b != null && C.css({
                        "margin-left": b,
                        "margin-right": b
                    }),
                    L.push(C);
                d.nav.empty().append(L)
            }
            function ie(d) {
                var L = d.mask.width();
                return d.maskWidth !== L ? (d.maskWidth = L,
                !0) : !1
            }
            function Ce(d) {
                var L = 0;
                return d.slides.each(function(C, b) {
                    L += e(b).outerWidth(!0)
                }),
                d.slidesWidth !== L ? (d.slidesWidth = L,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Ls();
    Ds();
    Xs();
    ji();
    Zy();
    eI();
    rI();
    iI();
    sI();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1672777917054
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679028167920
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075952",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075952",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691696595836
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|be0123ff-9c76-1a87-485c-26eeb90ca755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|be0123ff-9c76-1a87-485c-26eeb90ca755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692737851617
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|e79022d7-ab40-8f6c-3544-08017c044609",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|e79022d7-ab40-8f6c-3544-08017c044609",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692738113564
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64de6234400f08a69888b343|6ac59c42-cc62-5d88-d6b8-83f101d0ab50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64de6234400f08a69888b343|6ac59c42-cc62-5d88-d6b8-83f101d0ab50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102770005
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfa919d9beb6ec90507c39|a034b355-5158-6245-ee0a-17ad06ee1a72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfa919d9beb6ec90507c39|a034b355-5158-6245-ee0a-17ad06ee1a72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102777767
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfab02cc42b1c1e24f6457|9c9c086f-d412-5f75-8f74-0901bd291027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfab02cc42b1c1e24f6457|9c9c086f-d412-5f75-8f74-0901bd291027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102782821
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|a11ddef1-15b3-f343-f32f-ecf2feb7e049",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|a11ddef1-15b3-f343-f32f-ecf2feb7e049",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102788241
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64de6234400f08a69888b343|c8ac3149-792c-a4b3-17af-0d0a8b85c6a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64de6234400f08a69888b343|c8ac3149-792c-a4b3-17af-0d0a8b85c6a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102965482
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfa919d9beb6ec90507c39|348ea3dc-7cd9-3853-b014-aef044517dc2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfa919d9beb6ec90507c39|348ea3dc-7cd9-3853-b014-aef044517dc2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102969325
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfab02cc42b1c1e24f6457|ad090454-c5a6-62fc-1702-5c796c992f8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfab02cc42b1c1e24f6457|ad090454-c5a6-62fc-1702-5c796c992f8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102973119
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|c4d51101-3c95-868a-6dc8-e67a43ae43ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|c4d51101-3c95-868a-6dc8-e67a43ae43ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102977564
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694103914412
        }
    },
    "actionLists": {
        "a-4": {
            "id": "a-4",
            "title": "WAVES / Hero 1 Gallery",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672935446453
        },
        "a-6": {
            "id": "a-6",
            "title": "exit popup",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".subscribemodal",
                            "selectorGuids": ["0db840f8-5b5c-a2f7-c355-18ea479e5456"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".subscribemodal",
                            "selectorGuids": ["0db840f8-5b5c-a2f7-c355-18ea479e5456"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691697313623
        },
        "a-10": {
            "id": "a-10",
            "title": "openMenuModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692737856456
        },
        "a-11": {
            "id": "a-11",
            "title": "closeMenuModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692738116688
        },
        "a-12": {
            "id": "a-12",
            "title": "openSubscribeModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694103918094
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});


<!DOCTYPE html>
<!--  Last Published: Thu Oct 05 2023 15:26:52 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="64dce1d3cfc7ccedc2a29450" data-wf-site="64dce1d2cfc7ccedc2a2944b">
    <head>
        <meta charset="utf-8">
        <title>Delara - ‘Volare’ out now</title>
        <meta content="Official artist website" name="description">
        <meta content="Delara - ‘Shahrazad’ out now" property="og:title">
        <meta content="Official artist website" property="og:description">
        <meta content="Delara - ‘Shahrazad’ out now" property="twitter:title">
        <meta content="Official artist website" property="twitter:description">
        <meta property="og:type" content="website">
        <meta content="summary_large_image" name="twitter:card">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link href="css/normalize.css" rel="stylesheet" type="text/css">
        <link href="css/components.css" rel="stylesheet" type="text/css">
        <link href="css/delara-site.css" rel="stylesheet" type="text/css">
        <script type="text/javascript">
            !function(o, c) {
                var n = c.documentElement
                  , t = " w-mod-";
                n.className += t + "js",
                ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
            }(window, document);
        </script>
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
        <link href="images/webclip.png" rel="apple-touch-icon">
        <!--  Google Tag Manager  -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0]
                  , j = d.createElement(s)
                  , dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-TSKTK3ZS');
        </script>
        <!--  End Google Tag Manager  -->
        <title>Delara - ‘Volare’ out now</title>
        <meta name="title" content="Delara - ‘Volare’ out now">
        <meta name="description" content="Official artist website">
        <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single, Delara didn't you know, delara feat beam, delara unbound, delara selfish, delara Shahrazad, delara debut album, Shahrazad album, norwegian pop artist, delara billetter, Delara festival, delara tickets, delara øya, delara månefestivalen, delara vogue, amanda sentrum scene, delara sentrum, best new nordic artists, delara roskilde, roskilde worm up artists, månefestivalen lineup, albin lee meldau cover, delara merch, amanda Shahrazad">
        <meta property="og:title" content="'Shahrazad' out now">
        <meta property="og:site_name" content="Delara – Official website">
        <meta property="og:description " content="Delara – Official website">
    </head>
    <body class="body-4">
        <section class="section-2">
            <div class="div-block-19">
                <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                    <style type="text/css">
                               #mc_embed_signup {
                            background: rgba(0,0,0,0);
                            false;clear: center;
                            font: 15px Helvetica,Arial,sans-serif;
                            width: 600px;
                            align-content: center
                        }

                        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                        <h2 class="heading-8 modal-text" align="center">EARLY ACCESS TO THE NEWS THAT MATTERS.</h2>
                        <form action="https://grindandown.us5.list-manage.com/subscribe/post?u=41bff5f564a0a9323a3c60016&amp;id=b07b9448f5&amp;f_id=004255e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <div class="indicates-required">
                                    <div class="mc-field-group" align="center" style="width: 100%">
                                        <label for="mce-EMAIL" class="heading-8">
                                            EMAIL ADDRESS <span class="asterisk">*</span>
                                        </label>
                                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display: none;"></div>
                                        <div class="response" id="mce-success-response" style="display: none;"></div>
                                    </div>
                                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                        <input type="text" name="b_41bff5f564a0a9323a3c60016_b07b9448f5" tabindex="-1" value="">
                                    </div>
                                    <div class="clear" align="center">
                                        <input target="_blank" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-3 w-button" value="Subscribe">
                                    </div>
                                </div>
        </section>
        <div class="socials-2">
            <a href="https://www.instagram.com/amandadelara/" target="_blank" class="social-link w-inline-block">
                <img src="images/ig.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.tiktok.com/@delara_official" target="_blank" class="social-link w-inline-block">
                <img src="images/tt.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.youtube.com/@delara_official" target="_blank" class="social-link w-inline-block">
                <img src="images/yt.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.facebook.com/AmandaDelaraMusic" target="_blank" class="social-link w-inline-block">
                <img src="images/fb.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://open.spotify.com/artist/2PVHjhJWIKgb2yfBTmQerg?si=92wdaOpdSNWOZlKzx7eZIA&amp;nd=1" target="_blank" class="social-link w-inline-block">
                <img src="images/sp.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://music.apple.com/us/artist/delara/1146802538" target="_blank" class="social-link w-inline-block">
                <img src="images/ap.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
        </div>
        <div data-w-id="a034b355-5158-6245-ee0a-17ad06ee1a72" class="menublock">
            <div class="text-block-3">MENU</div>
            <img src="images/down-Icon.svg" loading="lazy" alt="" class="image-65">
        </div>
        <section style="display:none;opacity:0" class="menumodal">
            <div data-w-id="348ea3dc-7cd9-3853-b014-aef044517dc2" class="closemenumodalbutton">CLOSE X</div>
            <div class="textlinklist">
                <a href="index.html" class="link">home</a>
                <a href="shop.html" class="link">shop</a>
                <a href="tour.html" class="link">concerts</a>
                <a href="bio.html" class="link">bio</a>
                <a href="music.html" aria-current="page" class="link w--current">music</a>
                <!--  <a href="#" class="link">diary</a>-->
            </div>
        </section>
        <div class="desktopmenu">
            <div class="div-block-35">
                <img src="images/Delara-logo.png" loading="lazy" alt="" class="image-66">
            </div>
            <div class="links-list">
                <a href="index.html" class="link-2">home</a>
                <a href="shop.html" class="link-2">shop</a>
                <a href="tour.html" class="link-2">concerts</a>
                <a href="bio.html" class="link-2">bio</a>
                <a href="music.html" aria-current="page" class="link-2 w--current">music</a>
            </div>
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64dce1d2cfc7ccedc2a2944b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="js/delara-site.js" type="text/javascript"></script>
        <!--  Primary Meta Tags  -->
        <title>Delara - ‘Volare’ out now</title>
        <meta name="title" content="Delara - ‘Volare’ out now>
<meta name=" description"="">
  <meta name=" keywords " content=" Amanda Delara, delara, Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube, Delara stockholm, Delara Oslo, Delara london, Amanda Delara roskilde, Amanda Delara great escape, Delara live, Amanda Delara konsert, Delara tickets, Delara bandcamp, Delara instagram, Delara new music, Delara concert, Delara music video, delara single ">
  <meta property=" og:title " content="'Volare' out now/>
        <meta property=" og:site_name"="">
        <meta property="og:description " content="Delara – Official website" -→<!--="" google="" tag="" manager="" (noscript)="" --="">
  <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSKTK3ZS" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!--  End Google Tag Manager (noscript)  -->
</body></html>

<html data-wf-page="64dce1d3cfc7ccedc2a29450" data-wf-site="64dce1d2cfc7ccedc2a2944b" class=" w-mod-js w-mod-ix"><head><style>.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}</style>
  <meta charset="utf-8">
  <title>Delara - ‘Volare’ out now</title>
  <meta content="Official artist website" name="description">
  <meta content="Delara - ‘Shahrazad’ out now" property="og:title">
  <meta content="Official artist website" property="og:description">
  <meta content="Delara - ‘Shahrazad’ out now" property="twitter:title">
  <meta content="Official artist website" property="twitter:description">
  <meta property="og:type" content="website">
  <meta content="summary_large_image" name="twitter:card">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/components.css" rel="stylesheet" type="text/css">
  <link href="css/delara-site.css" rel="stylesheet" type="text/css">
  <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TSKTK3ZS"></script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon"><!--  Google Tag Manager  -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSKTK3ZS');</script>
  <!--  End Google Tag Manager  -->
  <title> Delara - ‘Volare’ out now</title>
  <meta name="title" content="Delara - ‘Volare’ out now">
  <meta name="description" content="Official artist website">
  <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single, Delara didn't you know, delara feat beam, delara unbound, delara selfish, delara Shahrazad, delara debut album, Shahrazad album, norwegian pop artist, delara billetter, Delara festival, delara tickets, delara øya, delara månefestivalen, delara vogue, amanda sentrum scene, delara sentrum, best new nordic artists, delara roskilde, roskilde worm up artists, månefestivalen lineup, albin lee meldau cover, delara merch, amanda Shahrazad">
  <meta property="og:title" content="'Shahrazad' out now">
  <meta property="og:site_name" content="Delara – Official website">
  <meta property="og:description " content="Delara – Official website">
</head>
<body class="body-4">
  <section class="section-2">
    <div class="div-block-19">
      <div id="mc_embed_shell">&nbsp; &nbsp; &nbsp;
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">&nbsp;
          <style type="text/css">        #mc_embed_signup{background:rgba(0,0,0,0); false;clear:center; font:15px Helvetica,Arial,sans-serif; width: 600px; align-content: center }/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */</style>
          <div id="mc_embed_signup">&nbsp; <h2 class="heading-8 modal-text" align="center">EARLY ACCESS TO THE NEWS THAT MATTERS.</h2>&nbsp; <form action="https://grindandown.us5.list-manage.com/subscribe/post?u=41bff5f564a0a9323a3c60016&amp;id=b07b9448f5&amp;f_id=004255e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"><div id="mc_embed_signup_scroll"><div class="indicates-required">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <div class="mc-field-group" align="center" style="width: 100%"><label for="mce-EMAIL" class="heading-8">EMAIL ADDRESS <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display: none;"></div><div class="response" id="mce-success-response" style="display: none;"></div></div>
                <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_41bff5f564a0a9323a3c60016_b07b9448f5" tabindex="-1" value=""></div>
                <div class="clear" align="center"><input target="_blank" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-3 w-button" value="Subscribe"></div>&nbsp; &nbsp;
    </div>
  </div></form></div></div></div></section>
  <div class="socials-2">
    <a href="https://www.instagram.com/amandadelara/" target="_blank" class="social-link w-inline-block"><img src="images/ig.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.tiktok.com/@delara_official" target="_blank" class="social-link w-inline-block"><img src="images/tt.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.youtube.com/@delara_official" target="_blank" class="social-link w-inline-block"><img src="images/yt.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.facebook.com/AmandaDelaraMusic" target="_blank" class="social-link w-inline-block"><img src="images/fb.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://open.spotify.com/artist/2PVHjhJWIKgb2yfBTmQerg?si=92wdaOpdSNWOZlKzx7eZIA&amp;nd=1" target="_blank" class="social-link w-inline-block"><img src="images/sp.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://music.apple.com/us/artist/delara/1146802538" target="_blank" class="social-link w-inline-block"><img src="images/ap.svg" loading="lazy" alt="" class="social-icon-2"></a>
  </div>
  <div data-w-id="a034b355-5158-6245-ee0a-17ad06ee1a72" class="menublock">
    <div class="text-block-3">MENU</div><img src="images/down-Icon.svg" loading="lazy" alt="" class="image-65">
  </div>
  <section style="display:none;opacity:0" class="menumodal">
    <div data-w-id="348ea3dc-7cd9-3853-b014-aef044517dc2" class="closemenumodalbutton">CLOSE&nbsp;X</div>
    <div class="textlinklist">
      <a href="index.html" class="link w--current">home</a>
      <a href="shop.html" class="link">shop</a>
      <a href="tour.html" class="link">concerts</a>
      <a href="bio.html" class="link">bio</a>
      <a href="music.html" aria-current="page" class="link">music</a>
    <!--  <a href="#" class="link">diary</a>-->
    </div>
  </section>
  <div class="desktopmenu">
    <div class="div-block-35"><img src="images/Delara-logo.png" loading="lazy" alt="" class="image-66"></div>
    <div class="links-list">
      <a href="index.html" class="link-2 w--current">home</a>
      <a href="shop.html" class="link-2">shop</a>
      <a href="tour.html" class="link-2">concerts</a>
      <a href="bio.html" class="link-2">bio</a>
      <a href="music.html" aria-current="page" class="link-2">music</a>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64dce1d2cfc7ccedc2a2944b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/delara-site.js" type="text/javascript"></script><!--  Primary Meta Tags  -->
  <title> Delara - ‘Volare’ out now</title>
  <meta name="title" content="Delara - ‘Volare’ out now&gt;
&lt;meta name=" description"="">
  <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single">
  <meta property="og:title" content="'Volare' out now/&gt;
&lt;meta property=" og:site_name"="">
  <meta property="og:description " content="Delara – Official website" -→<!--="" google="" tag="" manager="" (noscript)="" --="">
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSKTK3ZS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!--  End Google Tag Manager (noscript)  -->

<browser-mcp-container data-wxt-shadow-root=""><template shadowrootmode="open"><html><head><style>/*! tailwindcss v4.0.17 | MIT License | https://tailwindcss.com */@layer theme{:host,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-700:oklch(.505 .213 27.518);--color-blue-300:oklch(.809 .105 251.813);--color-blue-700:oklch(.488 .243 264.376);--color-gray-50:oklch(.985 .002 247.839);--color-gray-100:oklch(.967 .003 264.542);--color-gray-300:oklch(.872 .01 258.338);--color-gray-400:oklch(.707 .022 261.325);--color-gray-500:oklch(.551 .027 264.364);--color-gray-700:oklch(.373 .034 259.733);--color-gray-800:oklch(.278 .033 256.848);--color-gray-900:oklch(.21 .034 264.665);--color-black:#000;--color-white:#fff;--spacing:4px;--container-lg:512px;--text-xs:12px;--text-xs--line-height:calc(1/.75);--text-sm:14px;--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg:18px;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-widest:.1em;--leading-relaxed:1.625;--radius-xs:2px;--ease-in:cubic-bezier(.4,0,1,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:initial;font-variation-settings:initial;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-feature-settings:initial;font-variation-settings:initial;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:color-mix(in oklab,var(--ring)50%,transparent)}body{background-color:var(--background);color:var(--foreground)}button:not(:disabled),[role=button]:not(:disabled){cursor:pointer}:host{all:initial!important;font-family:var(--font-sans)!important;font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}:host,:host *{border-color:var(--border)}:host{background-color:var(--background)!important;color:var(--foreground)!important}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:#6a7282;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-radius:0;padding:8px 12px;font-size:16px;line-height:24px}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(.546 .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(0.551 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right 8px center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:40px}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:12px}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;width:16px;height:16px;color:#155dfc;border-color:#6a7282;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;flex-shrink:0;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(.546 .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.top-\(--line-offset\){top:var(--line-offset)}.top-\(--terminal-radius\){top:var(--terminal-radius)}.top-0{top:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\[50\%\]{top:50%}.right-\(--line-offset\){right:var(--line-offset)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.bottom-\(--line-offset\){bottom:var(--line-offset)}.bottom-0{bottom:calc(var(--spacing)*0)}.-left-1{left:calc(var(--spacing)*-1)}.left-\(--line-offset\){left:var(--line-offset)}.left-\(--terminal-radius\){left:var(--terminal-radius)}.left-0{left:calc(var(--spacing)*0)}.left-2{left:calc(var(--spacing)*2)}.left-\[50\%\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-2147483647{z-index:2147483647}.col-start-2{grid-column-start:2}.container{width:100%}@media (width>=40rem){.container{max-width:640px}}@media (width>=48rem){.container{max-width:768px}}@media (width>=64rem){.container{max-width:1024px}}@media (width>=80rem){.container{max-width:1280px}}@media (width>=96rem){.container{max-width:1536px}}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-4{margin-inline:calc(var(--spacing)*4)}.my-1{margin-block:calc(var(--spacing)*1)}.my-4{margin-block:calc(var(--spacing)*4)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.inline{display:inline}.inline-flex{display:inline-flex}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-row{display:table-row}.field-sizing-content{field-sizing:content}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-2\.5{width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.size-3\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-full{width:100%;height:100%}.h-\(--line-thickness\){height:var(--line-thickness)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-\[22px\]{height:22px}.h-\[var\(--radix-select-trigger-height\)\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\(--radix-dropdown-menu-content-available-height\){max-height:var(--radix-dropdown-menu-content-available-height)}.max-h-80{max-height:calc(var(--spacing)*80)}.max-h-96{max-height:calc(var(--spacing)*96)}.min-h-4{min-height:calc(var(--spacing)*4)}.min-h-16{min-height:calc(var(--spacing)*16)}.w-\(--line-thickness\){width:var(--line-thickness)}.w-3\/4{width:75%}.w-9{width:calc(var(--spacing)*9)}.w-72{width:calc(var(--spacing)*72)}.w-fit{width:fit-content}.w-full{width:100%}.w-px{width:1px}.max-w-\[calc\(100\%-2rem\)\]{max-width:calc(100% - 32px)}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\[8rem\]{min-width:128px}.min-w-\[300px\]{min-width:300px}.min-w-\[var\(--radix-select-trigger-width\)\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.caption-bottom{caption-side:bottom}.translate-x-\[-50\%\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0\.5{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\[-50\%\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\[calc\(-50\%_-_2px\)\]{--tw-translate-y: calc(-50% - 2px) ;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x)var(--tw-rotate-y)var(--tw-rotate-z)var(--tw-skew-x)var(--tw-skew-y)}.animate-caret-blink{animation:1.25s ease-out infinite caret-blink}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-col-resize{cursor:col-resize}.cursor-default{cursor:default}.resize-none{resize:none}.scroll-my-1{scroll-margin-block:calc(var(--spacing)*1)}.grid-cols-\[0_1fr\]{grid-template-columns:0 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-items-start{justify-items:start}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-0\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*.5)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0\.5{row-gap:calc(var(--spacing)*.5)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\[2px\]{border-radius:2px}.rounded-\[4px\]{border-radius:4px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-xs{border-radius:var(--radius-xs)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.border-input{border-color:var(--input)}.border-transparent{border-color:#0000}.bg-background{background-color:var(--background)}.bg-background\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}.bg-black\/80{background-color:color-mix(in oklab,var(--color-black)80%,transparent)}.bg-blue-700{background-color:var(--color-blue-700)}.bg-border{background-color:var(--border)}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-foreground{background-color:var(--foreground)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-muted{background-color:var(--muted)}.bg-muted\/50{background-color:color-mix(in oklab,var(--muted)50%,transparent)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.fill-black{fill:var(--color-black)}.fill-current{fill:currentColor}.fill-primary{fill:var(--primary)}.stroke-white{stroke:var(--color-white)}.stroke-\[1\.5\]{stroke-width:1.5px}.p-0{padding:calc(var(--spacing)*0)}.p-0\.5{padding:calc(var(--spacing)*.5)}.p-1{padding:calc(var(--spacing)*1)}.p-1\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-\[1px\]{padding-block:1px}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-left{text-align:left}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-balance{text-wrap:balance}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-black{color:var(--color-black)}.text-card-foreground{color:var(--card-foreground)}.text-current{color:currentColor}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-red-700{color:var(--color-red-700)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-gray-500\/10{--tw-ring-color:color-mix(in oklab,var(--color-gray-500)10%,transparent)}.ring-offset-background{--tw-ring-offset-color:var(--background)}.outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.outline-hidden{outline-offset:2px;outline:2px solid #0000}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-\[color\,box-shadow\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-1000{--tw-duration:1s;transition-duration:1s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.animate-in{--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial;animation-name:enter;animation-duration:.15s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.duration-200{animation-duration:.2s}.duration-500{animation-duration:.5s}.duration-1000{animation-duration:1s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.fade-in-0{--tw-enter-opacity:0}.ring-inset{--tw-ring-inset:inset}.running{animation-play-state:running}.zoom-in-95{--tw-enter-scale:.95}@media (hover:hover){.group-hover\:opacity-100:is(:where(.group):hover *){opacity:1}}.group-data-\[disabled\=true\]\:pointer-events-none:is(:where(.group)[data-disabled=true] *){pointer-events:none}.group-data-\[disabled\=true\]\:opacity-50:is(:where(.group)[data-disabled=true] *){opacity:.5}.group-\[\.toast\]\:bg-muted:is(:where(.group).toast *){background-color:var(--muted)}.group-\[\.toast\]\:bg-primary:is(:where(.group).toast *){background-color:var(--primary)}.group-\[\.toast\]\:text-muted-foreground:is(:where(.group).toast *){color:var(--muted-foreground)}.group-\[\.toast\]\:text-primary-foreground:is(:where(.group).toast *){color:var(--primary-foreground)}.group-\[\.toaster\]\:border-border:is(:where(.group).toaster *){border-color:var(--border)}.group-\[\.toaster\]\:bg-background:is(:where(.group).toaster *){background-color:var(--background)}.group-\[\.toaster\]\:text-foreground:is(:where(.group).toaster *){color:var(--foreground)}.group-\[\.toaster\]\:shadow-lg:is(:where(.group).toaster *){--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.peer-disabled\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\:opacity-50:is(:where(.peer):disabled~*){opacity:.5}.selection\:bg-primary ::selection{background-color:var(--primary)}.selection\:bg-primary::selection{background-color:var(--primary)}.selection\:text-primary-foreground ::selection{color:var(--primary-foreground)}.selection\:text-primary-foreground::selection{color:var(--primary-foreground)}.file\:inline-flex::file-selector-button{display:inline-flex}.file\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.file\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\:bg-transparent::file-selector-button{background-color:#0000}.file\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.before\:absolute:before{content:var(--tw-content);position:absolute}.before\:top-\(--negative-terminal-size\):before{content:var(--tw-content);top:var(--negative-terminal-size)}.before\:top-\(--offset-terminal\):before{content:var(--tw-content);top:var(--offset-terminal)}.before\:right-\(--offset-terminal\):before{content:var(--tw-content);right:var(--offset-terminal)}.before\:bottom-\(--offset-terminal\):before{content:var(--tw-content);bottom:var(--offset-terminal)}.before\:left-\(--negative-terminal-size\):before{content:var(--tw-content);left:var(--negative-terminal-size)}.before\:left-\(--offset-terminal\):before{content:var(--tw-content);left:var(--offset-terminal)}.before\:h-\(--terminal-size\):before{content:var(--tw-content);height:var(--terminal-size)}.before\:w-\(--terminal-size\):before{content:var(--tw-content);width:var(--terminal-size)}.before\:rounded-full:before{content:var(--tw-content);border-radius:3.40282e38px}.before\:border-\(length\:--line-thickness\):before{content:var(--tw-content);border-style:var(--tw-border-style);border-width:var(--line-thickness)}.before\:border-solid:before{content:var(--tw-content);--tw-border-style:solid;border-style:solid}.before\:border-blue-700:before{content:var(--tw-content);border-color:var(--color-blue-700)}.before\:content-\[\'\'\]:before{--tw-content:"";content:var(--tw-content)}.first\:rounded-l-md:first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.first\:border-l:first-child{border-left-style:var(--tw-border-style);border-left-width:1px}.last\:rounded-r-md:last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.last\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\:bg-accent:hover{background-color:var(--accent)}.hover\:bg-background:hover{background-color:var(--background)}.hover\:bg-destructive\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}.hover\:bg-gray-500:hover{background-color:var(--color-gray-500)}.hover\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\:bg-muted\/50:hover{background-color:color-mix(in oklab,var(--muted)50%,transparent)}.hover\:bg-primary\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}.hover\:bg-secondary\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}.hover\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\:text-gray-400:hover{color:var(--color-gray-400)}.hover\:underline:hover{text-decoration-line:underline}.hover\:opacity-100:hover{opacity:1}}.focus\:bg-accent:focus{background-color:var(--accent)}.focus\:bg-white:focus{background-color:var(--color-white)}.focus\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\:ring-blue-300:focus{--tw-ring-color:var(--color-blue-300)}.focus\:ring-ring:focus{--tw-ring-color:var(--ring)}.focus\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\:ring-inset:focus{--tw-ring-inset:inset}.focus-visible\:border-ring:focus-visible{border-color:var(--ring)}.focus-visible\:ring-\[3px\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\:ring-destructive\/20:focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.focus-visible\:ring-ring\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}.focus-visible\:outline-1:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\:outline-ring:focus-visible{outline-color:var(--ring)}.disabled\:pointer-events-none:disabled{pointer-events:none}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled,.has-disabled\:opacity-50:has(:disabled){opacity:.5}.has-\[\>svg\]\:grid-cols-\[calc\(var\(--spacing\)\*4\)_1fr\]:has(>svg){grid-template-columns:calc(var(--spacing)*4)1fr}.has-\[\>svg\]\:gap-x-3:has(>svg){column-gap:calc(var(--spacing)*3)}.has-\[\>svg\]\:px-2\.5:has(>svg){padding-inline:calc(var(--spacing)*2.5)}.has-\[\>svg\]\:px-3:has(>svg){padding-inline:calc(var(--spacing)*3)}.has-\[\>svg\]\:px-4:has(>svg){padding-inline:calc(var(--spacing)*4)}.aria-invalid\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.aria-invalid\:ring-destructive\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.data-\[active\=true\]\:z-10[data-active=true]{z-index:10}.data-\[active\=true\]\:border-ring[data-active=true]{border-color:var(--ring)}.data-\[active\=true\]\:ring-\[3px\][data-active=true]{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.data-\[active\=true\]\:ring-ring\/50[data-active=true]{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}.data-\[active\=true\]\:aria-invalid\:border-destructive[data-active=true][aria-invalid=true]{border-color:var(--destructive)}.data-\[active\=true\]\:aria-invalid\:ring-destructive\/20[data-active=true][aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.data-\[disabled\]\:pointer-events-none[data-disabled]{pointer-events:none}.data-\[disabled\]\:opacity-50[data-disabled]{opacity:.5}.data-\[error\=true\]\:text-destructive-foreground[data-error=true]{color:var(--destructive-foreground)}.data-\[inset\]\:pl-8[data-inset]{padding-left:calc(var(--spacing)*8)}.data-\[orientation\=horizontal\]\:h-px[data-orientation=horizontal]{height:1px}.data-\[orientation\=horizontal\]\:w-full[data-orientation=horizontal]{width:100%}.data-\[orientation\=vertical\]\:h-full[data-orientation=vertical]{height:100%}.data-\[orientation\=vertical\]\:w-px[data-orientation=vertical]{width:1px}.data-\[placeholder\]\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.data-\[side\=bottom\]\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=bottom\]\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:-8px}.data-\[side\=left\]\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=left\]\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:8px}.data-\[side\=right\]\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=right\]\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:-8px}.data-\[side\=top\]\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=top\]\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:8px}:is(.\*\:data-\[slot\=alert-description\]\:text-destructive-foreground\/80>*)[data-slot=alert-description]{color:color-mix(in oklab,var(--destructive-foreground)80%,transparent)}:is(.\*\:data-\[slot\=select-value\]\:line-clamp-1>*)[data-slot=select-value]{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}:is(.\*\:data-\[slot\=select-value\]\:flex>*)[data-slot=select-value]{display:flex}:is(.\*\:data-\[slot\=select-value\]\:items-center>*)[data-slot=select-value]{align-items:center}:is(.\*\:data-\[slot\=select-value\]\:gap-2>*)[data-slot=select-value]{gap:calc(var(--spacing)*2)}.data-\[state\=active\]\:bg-background[data-state=active]{background-color:var(--background)}.data-\[state\=active\]\:text-foreground[data-state=active]{color:var(--foreground)}.data-\[state\=active\]\:shadow-sm[data-state=active]{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.data-\[state\=checked\]\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[state\=checked\]\:border-primary[data-state=checked]{border-color:var(--primary)}.data-\[state\=checked\]\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\[state\=checked\]\:text-primary-foreground[data-state=checked]{color:var(--primary-foreground)}.data-\[state\=closed\]\:animate-accordion-up[data-state=closed]{animation:.2s ease-out accordion-up}.data-\[state\=closed\]\:animate-out[data-state=closed]{--tw-exit-opacity:initial;--tw-exit-scale:initial;--tw-exit-rotate:initial;--tw-exit-translate-x:initial;--tw-exit-translate-y:initial;animation-name:exit;animation-duration:.15s}.data-\[state\=closed\]\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\[state\=closed\]\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\[state\=open\]\:animate-accordion-down[data-state=open]{animation:.2s ease-out accordion-down}.data-\[state\=open\]\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\[state\=open\]\:text-accent-foreground[data-state=open]{color:var(--accent-foreground)}.data-\[state\=open\]\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.data-\[state\=open\]\:animate-in[data-state=open]{--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial;animation-name:enter;animation-duration:.15s}.data-\[state\=open\]\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\[state\=open\]\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\[state\=selected\]\:bg-muted[data-state=selected]{background-color:var(--muted)}.data-\[state\=unchecked\]\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[state\=unchecked\]\:bg-input[data-state=unchecked]{background-color:var(--input)}.data-\[variant\=destructive\]\:text-destructive-foreground[data-variant=destructive]{color:var(--destructive-foreground)}.data-\[variant\=destructive\]\:focus\:bg-destructive\/10[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.data-\[variant\=destructive\]\:focus\:text-destructive-foreground[data-variant=destructive]:focus{color:var(--destructive-foreground)}@media (width>=40rem){.sm\:max-w-lg{max-width:var(--container-lg)}.sm\:flex-row{flex-direction:row}.sm\:justify-end{justify-content:flex-end}.sm\:text-left{text-align:left}}@media (width>=48rem){.md\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}.dark\:focus-visible\:ring-destructive\/40:is(.dark *):focus-visible,.dark\:aria-invalid\:ring-destructive\/40:is(.dark *)[aria-invalid=true],.dark\:data-\[active\=true\]\:aria-invalid\:ring-destructive\/40:is(.dark *)[data-active=true][aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}.dark\:data-\[variant\=destructive\]\:focus\:bg-destructive\/40:is(.dark *)[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)40%,transparent)}.\[\&_p\]\:leading-relaxed p{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.\[\&_svg\]\:pointer-events-none svg{pointer-events:none}.\[\&_svg\]\:shrink-0 svg{flex-shrink:0}.\[\&_svg\:not\(\[class\*\=\'size-\'\]\)\]\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\[\&_svg\:not\(\[class\*\=\'text-\'\]\)\]\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.\[\&_tr\]\:border-b tr{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\[\&_tr\:last-child\]\:border-0 tr:last-child{border-style:var(--tw-border-style);border-width:0}.\[\&\:has\(\[role\=checkbox\]\)\]\:pr-0:has([role=checkbox]){padding-right:calc(var(--spacing)*0)}:is(.\*\:\[span\]\:last\:flex>*):is(span):last-child{display:flex}:is(.\*\:\[span\]\:last\:items-center>*):is(span):last-child{align-items:center}:is(.\*\:\[span\]\:last\:gap-2>*):is(span):last-child{gap:calc(var(--spacing)*2)}:is(.data-\[variant\=destructive\]\:\*\:\[svg\]\:\!text-destructive-foreground[data-variant=destructive]>*):is(svg){color:var(--destructive-foreground)!important}.\[\&\>\[role\=checkbox\]\]\:translate-y-\[2px\]>[role=checkbox]{--tw-translate-y:2px;translate:var(--tw-translate-x)var(--tw-translate-y)}.\[\&\>svg\]\:pointer-events-none>svg{pointer-events:none}.\[\&\>svg\]\:size-3>svg{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.\[\&\>svg\]\:size-4>svg{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\[\&\>svg\]\:translate-y-0\.5>svg{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.\[\&\>svg\]\:text-current>svg{color:currentColor}.\[\&\>tr\]\:last\:border-b-0>tr:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.\[\&\[data-state\=open\]\>svg\]\:rotate-180[data-state=open]>svg{rotate:180deg}@media (hover:hover){a.\[a\&\]\:hover\:bg-accent:hover{background-color:var(--accent)}a.\[a\&\]\:hover\:bg-destructive\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}a.\[a\&\]\:hover\:bg-primary\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}a.\[a\&\]\:hover\:bg-secondary\/90:hover{background-color:color-mix(in oklab,var(--secondary)90%,transparent)}a.\[a\&\]\:hover\:text-accent-foreground:hover{color:var(--accent-foreground)}}}:host{--background:oklch(1 0 0);--foreground:oklch(.145 0 0);--card:oklch(1 0 0);--card-foreground:oklch(.145 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(.205 0 0);--primary-foreground:oklch(.985 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.577 .245 27.325);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--chart-1:oklch(.646 .222 41.116);--chart-2:oklch(.6 .118 184.704);--chart-3:oklch(.398 .07 227.392);--chart-4:oklch(.828 .189 84.429);--chart-5:oklch(.769 .188 70.08);--radius:10px;--sidebar:oklch(.985 0 0);--sidebar-foreground:oklch(.145 0 0);--sidebar-primary:oklch(.205 0 0);--sidebar-primary-foreground:oklch(.985 0 0);--sidebar-accent:oklch(.97 0 0);--sidebar-accent-foreground:oklch(.205 0 0);--sidebar-border:oklch(.922 0 0);--sidebar-ring:oklch(.708 0 0)}.dark{--background:oklch(.145 0 0);--foreground:oklch(.985 0 0);--card:oklch(.145 0 0);--card-foreground:oklch(.985 0 0);--popover:oklch(.145 0 0);--popover-foreground:oklch(.985 0 0);--primary:oklch(.985 0 0);--primary-foreground:oklch(.205 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.269 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.396 .141 25.723);--destructive-foreground:oklch(.637 .237 25.331);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.556 0 0);--chart-1:oklch(.488 .243 264.376);--chart-2:oklch(.696 .17 162.48);--chart-3:oklch(.769 .188 70.08);--chart-4:oklch(.627 .265 303.9);--chart-5:oklch(.645 .246 16.439);--sidebar:oklch(.205 0 0);--sidebar-foreground:oklch(.985 0 0);--sidebar-primary:oklch(.488 .243 264.376);--sidebar-primary-foreground:oklch(.985 0 0);--sidebar-accent:oklch(.269 0 0);--sidebar-accent-foreground:oklch(.985 0 0);--sidebar-border:oklch(.269 0 0);--sidebar-ring:oklch(.439 0 0)}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0))}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0)}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0)}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0)}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0)}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0)}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes caret-blink{0%,70%,to{opacity:1}20%,50%{opacity:0}}</style></head><body><div></div></body></html></template></browser-mcp-container></body></html>


<html data-wf-page="64dce1d3cfc7ccedc2a29450" data-wf-site="64dce1d2cfc7ccedc2a2944b" class=" w-mod-js w-mod-ix"><head><style>.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}</style>
  <meta charset="utf-8">
  <title>Delara - ‘Volare’ out now</title>
  <meta content="Official artist website" name="description">
  <meta content="Delara - ‘Shahrazad’ out now" property="og:title">
  <meta content="Official artist website" property="og:description">
  <meta content="Delara - ‘Shahrazad’ out now" property="twitter:title">
  <meta content="Official artist website" property="twitter:description">
  <meta property="og:type" content="website">
  <meta content="summary_large_image" name="twitter:card">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/components.css" rel="stylesheet" type="text/css">
  <link href="css/delara-site.css" rel="stylesheet" type="text/css">
  <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TSKTK3ZS"></script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon"><!--  Google Tag Manager  -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSKTK3ZS');</script>
  <!--  End Google Tag Manager  -->
  <title> Delara - ‘Volare’ out now</title>
  <meta name="title" content="Delara - ‘Volare’ out now">
  <meta name="description" content="Official artist website">
  <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single, Delara didn't you know, delara feat beam, delara unbound, delara selfish, delara Shahrazad, delara debut album, Shahrazad album, norwegian pop artist, delara billetter, Delara festival, delara tickets, delara øya, delara månefestivalen, delara vogue, amanda sentrum scene, delara sentrum, best new nordic artists, delara roskilde, roskilde worm up artists, månefestivalen lineup, albin lee meldau cover, delara merch, amanda Shahrazad">
  <meta property="og:title" content="'Shahrazad' out now">
  <meta property="og:site_name" content="Delara – Official website">
  <meta property="og:description " content="Delara – Official website">
</head>
<body class="body-4">
  <section class="section-2">
    <div class="div-block-19">
      <div id="mc_embed_shell">&nbsp; &nbsp; &nbsp;
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">&nbsp;
          <style type="text/css">        #mc_embed_signup{background:rgba(0,0,0,0); false;clear:center; font:15px Helvetica,Arial,sans-serif; width: 600px; align-content: center }/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */</style>
          <div id="mc_embed_signup">&nbsp; <h2 class="heading-8 modal-text" align="center">EARLY ACCESS TO THE NEWS THAT MATTERS.</h2>&nbsp; <form action="https://grindandown.us5.list-manage.com/subscribe/post?u=41bff5f564a0a9323a3c60016&amp;id=b07b9448f5&amp;f_id=004255e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"><div id="mc_embed_signup_scroll"><div class="indicates-required">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <div class="mc-field-group" align="center" style="width: 100%"><label for="mce-EMAIL" class="heading-8">EMAIL ADDRESS <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display: none;"></div><div class="response" id="mce-success-response" style="display: none;"></div></div>
                <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_41bff5f564a0a9323a3c60016_b07b9448f5" tabindex="-1" value=""></div>
                <div class="clear" align="center"><input target="_blank" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-3 w-button" value="Subscribe"></div>&nbsp; &nbsp;
    </div>
  </div></form></div></div></div></section>
  <div class="socials-2">
    <a href="https://www.instagram.com/amandadelara/" target="_blank" class="social-link w-inline-block"><img src="images/ig.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.tiktok.com/@delara_official" target="_blank" class="social-link w-inline-block"><img src="images/tt.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.youtube.com/@delara_official" target="_blank" class="social-link w-inline-block"><img src="images/yt.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://www.facebook.com/AmandaDelaraMusic" target="_blank" class="social-link w-inline-block"><img src="images/fb.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://open.spotify.com/artist/2PVHjhJWIKgb2yfBTmQerg?si=92wdaOpdSNWOZlKzx7eZIA&amp;nd=1" target="_blank" class="social-link w-inline-block"><img src="images/sp.svg" loading="lazy" alt="" class="social-icon-2"></a>
    <a href="https://music.apple.com/us/artist/delara/1146802538" target="_blank" class="social-link w-inline-block"><img src="images/ap.svg" loading="lazy" alt="" class="social-icon-2"></a>
  </div>
  <div data-w-id="a034b355-5158-6245-ee0a-17ad06ee1a72" class="menublock">
    <div class="text-block-3">MENU</div><img src="images/down-Icon.svg" loading="lazy" alt="" class="image-65">
  </div>
  <section style="display:none;opacity:0" class="menumodal">
    <div data-w-id="348ea3dc-7cd9-3853-b014-aef044517dc2" class="closemenumodalbutton">CLOSE&nbsp;X</div>
    <div class="textlinklist">
      <a href="index.html" class="link w--current">home</a>
      <a href="shop.html" class="link">shop</a>
      <a href="tour.html" class="link">concerts</a>
      <a href="bio.html" class="link">bio</a>
      <a href="music.html" aria-current="page" class="link">music</a>
    <!--  <a href="#" class="link">diary</a>-->
    </div>
  </section>
  <div class="desktopmenu">
    <div class="div-block-35"><img src="images/Delara-logo.png" loading="lazy" alt="" class="image-66"></div>
    <div class="links-list">
      <a href="index.html" class="link-2 w--current">home</a>
      <a href="shop.html" class="link-2">shop</a>
      <a href="tour.html" class="link-2">concerts</a>
      <a href="bio.html" class="link-2">bio</a>
      <a href="music.html" aria-current="page" class="link-2">music</a>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64dce1d2cfc7ccedc2a2944b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/delara-site.js" type="text/javascript"></script><!--  Primary Meta Tags  -->
  <title> Delara - ‘Volare’ out now</title>
  <meta name="title" content="Delara - ‘Volare’ out now&gt;
&lt;meta name=" description"="">
  <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single">
  <meta property="og:title" content="'Volare' out now/&gt;
&lt;meta property=" og:site_name"="">
  <meta property="og:description " content="Delara – Official website" -→<!--="" google="" tag="" manager="" (noscript)="" --="">
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSKTK3ZS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!--  End Google Tag Manager (noscript)  -->

<browser-mcp-container data-wxt-shadow-root=""><template shadowrootmode="open"><html><head><style>/*! tailwindcss v4.0.17 | MIT License | https://tailwindcss.com */@layer theme{:host,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-700:oklch(.505 .213 27.518);--color-blue-300:oklch(.809 .105 251.813);--color-blue-700:oklch(.488 .243 264.376);--color-gray-50:oklch(.985 .002 247.839);--color-gray-100:oklch(.967 .003 264.542);--color-gray-300:oklch(.872 .01 258.338);--color-gray-400:oklch(.707 .022 261.325);--color-gray-500:oklch(.551 .027 264.364);--color-gray-700:oklch(.373 .034 259.733);--color-gray-800:oklch(.278 .033 256.848);--color-gray-900:oklch(.21 .034 264.665);--color-black:#000;--color-white:#fff;--spacing:4px;--container-lg:512px;--text-xs:12px;--text-xs--line-height:calc(1/.75);--text-sm:14px;--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg:18px;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-widest:.1em;--leading-relaxed:1.625;--radius-xs:2px;--ease-in:cubic-bezier(.4,0,1,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-feature-settings:initial;font-variation-settings:initial;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-feature-settings:initial;font-variation-settings:initial;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{border-color:var(--border);outline-color:color-mix(in oklab,var(--ring)50%,transparent)}body{background-color:var(--background);color:var(--foreground)}button:not(:disabled),[role=button]:not(:disabled){cursor:pointer}:host{all:initial!important;font-family:var(--font-sans)!important;font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}:host,:host *{border-color:var(--border)}:host{background-color:var(--background)!important;color:var(--foreground)!important}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:#6a7282;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-radius:0;padding:8px 12px;font-size:16px;line-height:24px}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(.546 .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(0.551 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right 8px center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:40px}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:12px}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;width:16px;height:16px;color:#155dfc;border-color:#6a7282;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;flex-shrink:0;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(.546 .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.top-\(--line-offset\){top:var(--line-offset)}.top-\(--terminal-radius\){top:var(--terminal-radius)}.top-0{top:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\[50\%\]{top:50%}.right-\(--line-offset\){right:var(--line-offset)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.bottom-\(--line-offset\){bottom:var(--line-offset)}.bottom-0{bottom:calc(var(--spacing)*0)}.-left-1{left:calc(var(--spacing)*-1)}.left-\(--line-offset\){left:var(--line-offset)}.left-\(--terminal-radius\){left:var(--terminal-radius)}.left-0{left:calc(var(--spacing)*0)}.left-2{left:calc(var(--spacing)*2)}.left-\[50\%\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-2147483647{z-index:2147483647}.col-start-2{grid-column-start:2}.container{width:100%}@media (width>=40rem){.container{max-width:640px}}@media (width>=48rem){.container{max-width:768px}}@media (width>=64rem){.container{max-width:1024px}}@media (width>=80rem){.container{max-width:1280px}}@media (width>=96rem){.container{max-width:1536px}}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-4{margin-inline:calc(var(--spacing)*4)}.my-1{margin-block:calc(var(--spacing)*1)}.my-4{margin-block:calc(var(--spacing)*4)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.inline{display:inline}.inline-flex{display:inline-flex}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-row{display:table-row}.field-sizing-content{field-sizing:content}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-2\.5{width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.size-3\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-full{width:100%;height:100%}.h-\(--line-thickness\){height:var(--line-thickness)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-\[22px\]{height:22px}.h-\[var\(--radix-select-trigger-height\)\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\(--radix-dropdown-menu-content-available-height\){max-height:var(--radix-dropdown-menu-content-available-height)}.max-h-80{max-height:calc(var(--spacing)*80)}.max-h-96{max-height:calc(var(--spacing)*96)}.min-h-4{min-height:calc(var(--spacing)*4)}.min-h-16{min-height:calc(var(--spacing)*16)}.w-\(--line-thickness\){width:var(--line-thickness)}.w-3\/4{width:75%}.w-9{width:calc(var(--spacing)*9)}.w-72{width:calc(var(--spacing)*72)}.w-fit{width:fit-content}.w-full{width:100%}.w-px{width:1px}.max-w-\[calc\(100\%-2rem\)\]{max-width:calc(100% - 32px)}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\[8rem\]{min-width:128px}.min-w-\[300px\]{min-width:300px}.min-w-\[var\(--radix-select-trigger-width\)\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.caption-bottom{caption-side:bottom}.translate-x-\[-50\%\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0\.5{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\[-50\%\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-\[calc\(-50\%_-_2px\)\]{--tw-translate-y: calc(-50% - 2px) ;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x)var(--tw-rotate-y)var(--tw-rotate-z)var(--tw-skew-x)var(--tw-skew-y)}.animate-caret-blink{animation:1.25s ease-out infinite caret-blink}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-col-resize{cursor:col-resize}.cursor-default{cursor:default}.resize-none{resize:none}.scroll-my-1{scroll-margin-block:calc(var(--spacing)*1)}.grid-cols-\[0_1fr\]{grid-template-columns:0 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-items-start{justify-items:start}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-0\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*.5)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0\.5{row-gap:calc(var(--spacing)*.5)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\[2px\]{border-radius:2px}.rounded-\[4px\]{border-radius:4px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-xs{border-radius:var(--radius-xs)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-gray-300{border-color:var(--color-gray-300)}.border-input{border-color:var(--input)}.border-transparent{border-color:#0000}.bg-background{background-color:var(--background)}.bg-background\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}.bg-black\/80{background-color:color-mix(in oklab,var(--color-black)80%,transparent)}.bg-blue-700{background-color:var(--color-blue-700)}.bg-border{background-color:var(--border)}.bg-card{background-color:var(--card)}.bg-destructive{background-color:var(--destructive)}.bg-foreground{background-color:var(--foreground)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-muted{background-color:var(--muted)}.bg-muted\/50{background-color:color-mix(in oklab,var(--muted)50%,transparent)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}.bg-secondary{background-color:var(--secondary)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.fill-black{fill:var(--color-black)}.fill-current{fill:currentColor}.fill-primary{fill:var(--primary)}.stroke-white{stroke:var(--color-white)}.stroke-\[1\.5\]{stroke-width:1.5px}.p-0{padding:calc(var(--spacing)*0)}.p-0\.5{padding:calc(var(--spacing)*.5)}.p-1{padding:calc(var(--spacing)*1)}.p-1\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-\[1px\]{padding-block:1px}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-left{text-align:left}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-balance{text-wrap:balance}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-black{color:var(--color-black)}.text-card-foreground{color:var(--card-foreground)}.text-current{color:currentColor}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-red-700{color:var(--color-red-700)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-white{color:var(--color-white)}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-gray-500\/10{--tw-ring-color:color-mix(in oklab,var(--color-gray-500)10%,transparent)}.ring-offset-background{--tw-ring-offset-color:var(--background)}.outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.outline-hidden{outline-offset:2px;outline:2px solid #0000}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition-\[color\,box-shadow\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-1000{--tw-duration:1s;transition-duration:1s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.animate-in{--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial;animation-name:enter;animation-duration:.15s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.duration-200{animation-duration:.2s}.duration-500{animation-duration:.5s}.duration-1000{animation-duration:1s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.fade-in-0{--tw-enter-opacity:0}.ring-inset{--tw-ring-inset:inset}.running{animation-play-state:running}.zoom-in-95{--tw-enter-scale:.95}@media (hover:hover){.group-hover\:opacity-100:is(:where(.group):hover *){opacity:1}}.group-data-\[disabled\=true\]\:pointer-events-none:is(:where(.group)[data-disabled=true] *){pointer-events:none}.group-data-\[disabled\=true\]\:opacity-50:is(:where(.group)[data-disabled=true] *){opacity:.5}.group-\[\.toast\]\:bg-muted:is(:where(.group).toast *){background-color:var(--muted)}.group-\[\.toast\]\:bg-primary:is(:where(.group).toast *){background-color:var(--primary)}.group-\[\.toast\]\:text-muted-foreground:is(:where(.group).toast *){color:var(--muted-foreground)}.group-\[\.toast\]\:text-primary-foreground:is(:where(.group).toast *){color:var(--primary-foreground)}.group-\[\.toaster\]\:border-border:is(:where(.group).toaster *){border-color:var(--border)}.group-\[\.toaster\]\:bg-background:is(:where(.group).toaster *){background-color:var(--background)}.group-\[\.toaster\]\:text-foreground:is(:where(.group).toaster *){color:var(--foreground)}.group-\[\.toaster\]\:shadow-lg:is(:where(.group).toaster *){--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.peer-disabled\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\:opacity-50:is(:where(.peer):disabled~*){opacity:.5}.selection\:bg-primary ::selection{background-color:var(--primary)}.selection\:bg-primary::selection{background-color:var(--primary)}.selection\:text-primary-foreground ::selection{color:var(--primary-foreground)}.selection\:text-primary-foreground::selection{color:var(--primary-foreground)}.file\:inline-flex::file-selector-button{display:inline-flex}.file\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.file\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.file\:bg-transparent::file-selector-button{background-color:#0000}.file\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.file\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.file\:text-foreground::file-selector-button{color:var(--foreground)}.placeholder\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.before\:absolute:before{content:var(--tw-content);position:absolute}.before\:top-\(--negative-terminal-size\):before{content:var(--tw-content);top:var(--negative-terminal-size)}.before\:top-\(--offset-terminal\):before{content:var(--tw-content);top:var(--offset-terminal)}.before\:right-\(--offset-terminal\):before{content:var(--tw-content);right:var(--offset-terminal)}.before\:bottom-\(--offset-terminal\):before{content:var(--tw-content);bottom:var(--offset-terminal)}.before\:left-\(--negative-terminal-size\):before{content:var(--tw-content);left:var(--negative-terminal-size)}.before\:left-\(--offset-terminal\):before{content:var(--tw-content);left:var(--offset-terminal)}.before\:h-\(--terminal-size\):before{content:var(--tw-content);height:var(--terminal-size)}.before\:w-\(--terminal-size\):before{content:var(--tw-content);width:var(--terminal-size)}.before\:rounded-full:before{content:var(--tw-content);border-radius:3.40282e38px}.before\:border-\(length\:--line-thickness\):before{content:var(--tw-content);border-style:var(--tw-border-style);border-width:var(--line-thickness)}.before\:border-solid:before{content:var(--tw-content);--tw-border-style:solid;border-style:solid}.before\:border-blue-700:before{content:var(--tw-content);border-color:var(--color-blue-700)}.before\:content-\[\'\'\]:before{--tw-content:"";content:var(--tw-content)}.first\:rounded-l-md:first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.first\:border-l:first-child{border-left-style:var(--tw-border-style);border-left-width:1px}.last\:rounded-r-md:last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.last\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\:bg-accent:hover{background-color:var(--accent)}.hover\:bg-background:hover{background-color:var(--background)}.hover\:bg-destructive\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}.hover\:bg-gray-500:hover{background-color:var(--color-gray-500)}.hover\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\:bg-muted\/50:hover{background-color:color-mix(in oklab,var(--muted)50%,transparent)}.hover\:bg-primary\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}.hover\:bg-secondary\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}.hover\:text-accent-foreground:hover{color:var(--accent-foreground)}.hover\:text-gray-400:hover{color:var(--color-gray-400)}.hover\:underline:hover{text-decoration-line:underline}.hover\:opacity-100:hover{opacity:1}}.focus\:bg-accent:focus{background-color:var(--accent)}.focus\:bg-white:focus{background-color:var(--color-white)}.focus\:text-accent-foreground:focus{color:var(--accent-foreground)}.focus\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\:ring-blue-300:focus{--tw-ring-color:var(--color-blue-300)}.focus\:ring-ring:focus{--tw-ring-color:var(--ring)}.focus\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\:ring-inset:focus{--tw-ring-inset:inset}.focus-visible\:border-ring:focus-visible{border-color:var(--ring)}.focus-visible\:ring-\[3px\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\:ring-destructive\/20:focus-visible{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.focus-visible\:ring-ring\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}.focus-visible\:outline-1:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\:outline-ring:focus-visible{outline-color:var(--ring)}.disabled\:pointer-events-none:disabled{pointer-events:none}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled,.has-disabled\:opacity-50:has(:disabled){opacity:.5}.has-\[\>svg\]\:grid-cols-\[calc\(var\(--spacing\)\*4\)_1fr\]:has(>svg){grid-template-columns:calc(var(--spacing)*4)1fr}.has-\[\>svg\]\:gap-x-3:has(>svg){column-gap:calc(var(--spacing)*3)}.has-\[\>svg\]\:px-2\.5:has(>svg){padding-inline:calc(var(--spacing)*2.5)}.has-\[\>svg\]\:px-3:has(>svg){padding-inline:calc(var(--spacing)*3)}.has-\[\>svg\]\:px-4:has(>svg){padding-inline:calc(var(--spacing)*4)}.aria-invalid\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.aria-invalid\:ring-destructive\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.data-\[active\=true\]\:z-10[data-active=true]{z-index:10}.data-\[active\=true\]\:border-ring[data-active=true]{border-color:var(--ring)}.data-\[active\=true\]\:ring-\[3px\][data-active=true]{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.data-\[active\=true\]\:ring-ring\/50[data-active=true]{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}.data-\[active\=true\]\:aria-invalid\:border-destructive[data-active=true][aria-invalid=true]{border-color:var(--destructive)}.data-\[active\=true\]\:aria-invalid\:ring-destructive\/20[data-active=true][aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}.data-\[disabled\]\:pointer-events-none[data-disabled]{pointer-events:none}.data-\[disabled\]\:opacity-50[data-disabled]{opacity:.5}.data-\[error\=true\]\:text-destructive-foreground[data-error=true]{color:var(--destructive-foreground)}.data-\[inset\]\:pl-8[data-inset]{padding-left:calc(var(--spacing)*8)}.data-\[orientation\=horizontal\]\:h-px[data-orientation=horizontal]{height:1px}.data-\[orientation\=horizontal\]\:w-full[data-orientation=horizontal]{width:100%}.data-\[orientation\=vertical\]\:h-full[data-orientation=vertical]{height:100%}.data-\[orientation\=vertical\]\:w-px[data-orientation=vertical]{width:1px}.data-\[placeholder\]\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.data-\[side\=bottom\]\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=bottom\]\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:-8px}.data-\[side\=left\]\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=left\]\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:8px}.data-\[side\=right\]\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=right\]\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:-8px}.data-\[side\=top\]\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[side\=top\]\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:8px}:is(.\*\:data-\[slot\=alert-description\]\:text-destructive-foreground\/80>*)[data-slot=alert-description]{color:color-mix(in oklab,var(--destructive-foreground)80%,transparent)}:is(.\*\:data-\[slot\=select-value\]\:line-clamp-1>*)[data-slot=select-value]{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}:is(.\*\:data-\[slot\=select-value\]\:flex>*)[data-slot=select-value]{display:flex}:is(.\*\:data-\[slot\=select-value\]\:items-center>*)[data-slot=select-value]{align-items:center}:is(.\*\:data-\[slot\=select-value\]\:gap-2>*)[data-slot=select-value]{gap:calc(var(--spacing)*2)}.data-\[state\=active\]\:bg-background[data-state=active]{background-color:var(--background)}.data-\[state\=active\]\:text-foreground[data-state=active]{color:var(--foreground)}.data-\[state\=active\]\:shadow-sm[data-state=active]{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.data-\[state\=checked\]\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[state\=checked\]\:border-primary[data-state=checked]{border-color:var(--primary)}.data-\[state\=checked\]\:bg-primary[data-state=checked]{background-color:var(--primary)}.data-\[state\=checked\]\:text-primary-foreground[data-state=checked]{color:var(--primary-foreground)}.data-\[state\=closed\]\:animate-accordion-up[data-state=closed]{animation:.2s ease-out accordion-up}.data-\[state\=closed\]\:animate-out[data-state=closed]{--tw-exit-opacity:initial;--tw-exit-scale:initial;--tw-exit-rotate:initial;--tw-exit-translate-x:initial;--tw-exit-translate-y:initial;animation-name:exit;animation-duration:.15s}.data-\[state\=closed\]\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\[state\=closed\]\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\[state\=open\]\:animate-accordion-down[data-state=open]{animation:.2s ease-out accordion-down}.data-\[state\=open\]\:bg-accent[data-state=open]{background-color:var(--accent)}.data-\[state\=open\]\:text-accent-foreground[data-state=open]{color:var(--accent-foreground)}.data-\[state\=open\]\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.data-\[state\=open\]\:animate-in[data-state=open]{--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial;animation-name:enter;animation-duration:.15s}.data-\[state\=open\]\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\[state\=open\]\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\[state\=selected\]\:bg-muted[data-state=selected]{background-color:var(--muted)}.data-\[state\=unchecked\]\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.data-\[state\=unchecked\]\:bg-input[data-state=unchecked]{background-color:var(--input)}.data-\[variant\=destructive\]\:text-destructive-foreground[data-variant=destructive]{color:var(--destructive-foreground)}.data-\[variant\=destructive\]\:focus\:bg-destructive\/10[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}.data-\[variant\=destructive\]\:focus\:text-destructive-foreground[data-variant=destructive]:focus{color:var(--destructive-foreground)}@media (width>=40rem){.sm\:max-w-lg{max-width:var(--container-lg)}.sm\:flex-row{flex-direction:row}.sm\:justify-end{justify-content:flex-end}.sm\:text-left{text-align:left}}@media (width>=48rem){.md\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}.dark\:focus-visible\:ring-destructive\/40:is(.dark *):focus-visible,.dark\:aria-invalid\:ring-destructive\/40:is(.dark *)[aria-invalid=true],.dark\:data-\[active\=true\]\:aria-invalid\:ring-destructive\/40:is(.dark *)[data-active=true][aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}.dark\:data-\[variant\=destructive\]\:focus\:bg-destructive\/40:is(.dark *)[data-variant=destructive]:focus{background-color:color-mix(in oklab,var(--destructive)40%,transparent)}.\[\&_p\]\:leading-relaxed p{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.\[\&_svg\]\:pointer-events-none svg{pointer-events:none}.\[\&_svg\]\:shrink-0 svg{flex-shrink:0}.\[\&_svg\:not\(\[class\*\=\'size-\'\]\)\]\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\[\&_svg\:not\(\[class\*\=\'text-\'\]\)\]\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.\[\&_tr\]\:border-b tr{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.\[\&_tr\:last-child\]\:border-0 tr:last-child{border-style:var(--tw-border-style);border-width:0}.\[\&\:has\(\[role\=checkbox\]\)\]\:pr-0:has([role=checkbox]){padding-right:calc(var(--spacing)*0)}:is(.\*\:\[span\]\:last\:flex>*):is(span):last-child{display:flex}:is(.\*\:\[span\]\:last\:items-center>*):is(span):last-child{align-items:center}:is(.\*\:\[span\]\:last\:gap-2>*):is(span):last-child{gap:calc(var(--spacing)*2)}:is(.data-\[variant\=destructive\]\:\*\:\[svg\]\:\!text-destructive-foreground[data-variant=destructive]>*):is(svg){color:var(--destructive-foreground)!important}.\[\&\>\[role\=checkbox\]\]\:translate-y-\[2px\]>[role=checkbox]{--tw-translate-y:2px;translate:var(--tw-translate-x)var(--tw-translate-y)}.\[\&\>svg\]\:pointer-events-none>svg{pointer-events:none}.\[\&\>svg\]\:size-3>svg{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.\[\&\>svg\]\:size-4>svg{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.\[\&\>svg\]\:translate-y-0\.5>svg{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.\[\&\>svg\]\:text-current>svg{color:currentColor}.\[\&\>tr\]\:last\:border-b-0>tr:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.\[\&\[data-state\=open\]\>svg\]\:rotate-180[data-state=open]>svg{rotate:180deg}@media (hover:hover){a.\[a\&\]\:hover\:bg-accent:hover{background-color:var(--accent)}a.\[a\&\]\:hover\:bg-destructive\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}a.\[a\&\]\:hover\:bg-primary\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}a.\[a\&\]\:hover\:bg-secondary\/90:hover{background-color:color-mix(in oklab,var(--secondary)90%,transparent)}a.\[a\&\]\:hover\:text-accent-foreground:hover{color:var(--accent-foreground)}}}:host{--background:oklch(1 0 0);--foreground:oklch(.145 0 0);--card:oklch(1 0 0);--card-foreground:oklch(.145 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(.205 0 0);--primary-foreground:oklch(.985 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.577 .245 27.325);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--chart-1:oklch(.646 .222 41.116);--chart-2:oklch(.6 .118 184.704);--chart-3:oklch(.398 .07 227.392);--chart-4:oklch(.828 .189 84.429);--chart-5:oklch(.769 .188 70.08);--radius:10px;--sidebar:oklch(.985 0 0);--sidebar-foreground:oklch(.145 0 0);--sidebar-primary:oklch(.205 0 0);--sidebar-primary-foreground:oklch(.985 0 0);--sidebar-accent:oklch(.97 0 0);--sidebar-accent-foreground:oklch(.205 0 0);--sidebar-border:oklch(.922 0 0);--sidebar-ring:oklch(.708 0 0)}.dark{--background:oklch(.145 0 0);--foreground:oklch(.985 0 0);--card:oklch(.145 0 0);--card-foreground:oklch(.985 0 0);--popover:oklch(.145 0 0);--popover-foreground:oklch(.985 0 0);--primary:oklch(.985 0 0);--primary-foreground:oklch(.205 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.269 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.396 .141 25.723);--destructive-foreground:oklch(.637 .237 25.331);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.556 0 0);--chart-1:oklch(.488 .243 264.376);--chart-2:oklch(.696 .17 162.48);--chart-3:oklch(.769 .188 70.08);--chart-4:oklch(.627 .265 303.9);--chart-5:oklch(.645 .246 16.439);--sidebar:oklch(.205 0 0);--sidebar-foreground:oklch(.985 0 0);--sidebar-primary:oklch(.488 .243 264.376);--sidebar-primary-foreground:oklch(.985 0 0);--sidebar-accent:oklch(.269 0 0);--sidebar-accent-foreground:oklch(.985 0 0);--sidebar-border:oklch(.269 0 0);--sidebar-ring:oklch(.439 0 0)}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0))}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0)}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0)}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0)}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0)}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0)}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}@keyframes caret-blink{0%,70%,to{opacity:1}20%,50%{opacity:0}}</style></head><body><div></div></body></html></template></browser-mcp-container></body></html>


<!DOCTYPE html>
<!--  Last Published: Thu Oct 05 2023 15:26:52 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="64dce1d3cfc7ccedc2a29450" data-wf-site="64dce1d2cfc7ccedc2a2944b">
    <head>
        <meta charset="utf-8">
        <title>Delara - ‘Volare’ out now</title>
        <meta content="Official artist website" name="description">
        <meta content="Delara - ‘Shahrazad’ out now" property="og:title">
        <meta content="Official artist website" property="og:description">
        <meta content="Delara - ‘Shahrazad’ out now" property="twitter:title">
        <meta content="Official artist website" property="twitter:description">
        <meta property="og:type" content="website">
        <meta content="summary_large_image" name="twitter:card">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link href="css/normalize.css" rel="stylesheet" type="text/css">
        <link href="css/components.css" rel="stylesheet" type="text/css">
        <link href="css/delara-site.css" rel="stylesheet" type="text/css">
        <script type="text/javascript">
            !function(o, c) {
                var n = c.documentElement
                  , t = " w-mod-";
                n.className += t + "js",
                ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
            }(window, document);
        </script>
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
        <link href="images/webclip.png" rel="apple-touch-icon">
        <!--  Google Tag Manager  -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0]
                  , j = d.createElement(s)
                  , dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-TSKTK3ZS');
        </script>
        <!--  End Google Tag Manager  -->
        <title>Delara - ‘Volare’ out now</title>
        <meta name="title" content="Delara - ‘Volare’ out now">
        <meta name="description" content="Official artist website">
        <meta name="keywords" content="Amanda Delara, delara,  Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube,  Delara stockholm,  Delara Oslo,  Delara london, Amanda Delara roskilde, Amanda Delara great escape,  Delara live, Amanda Delara konsert,  Delara tickets,  Delara bandcamp,  Delara instagram,  Delara new music,  Delara concert, Delara music video, delara single, Delara didn't you know, delara feat beam, delara unbound, delara selfish, delara Shahrazad, delara debut album, Shahrazad album, norwegian pop artist, delara billetter, Delara festival, delara tickets, delara øya, delara månefestivalen, delara vogue, amanda sentrum scene, delara sentrum, best new nordic artists, delara roskilde, roskilde worm up artists, månefestivalen lineup, albin lee meldau cover, delara merch, amanda Shahrazad">
        <meta property="og:title" content="'Shahrazad' out now">
        <meta property="og:site_name" content="Delara – Official website">
        <meta property="og:description " content="Delara – Official website">
    </head>
    <body class="body-4">
        <section class="section-2">
            <div class="div-block-19">
                <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                    <style type="text/css">
                               #mc_embed_signup {
                            background: rgba(0,0,0,0);
                            false;clear: center;
                            font: 15px Helvetica,Arial,sans-serif;
                            width: 600px;
                            align-content: center
                        }

                        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                        <h2 class="heading-8 modal-text" align="center">EARLY ACCESS TO THE NEWS THAT MATTERS.</h2>
                        <form action="https://grindandown.us5.list-manage.com/subscribe/post?u=41bff5f564a0a9323a3c60016&amp;id=b07b9448f5&amp;f_id=004255e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <div class="indicates-required">
                                    <div class="mc-field-group" align="center" style="width: 100%">
                                        <label for="mce-EMAIL" class="heading-8">
                                            EMAIL ADDRESS <span class="asterisk">*</span>
                                        </label>
                                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display: none;"></div>
                                        <div class="response" id="mce-success-response" style="display: none;"></div>
                                    </div>
                                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                        <input type="text" name="b_41bff5f564a0a9323a3c60016_b07b9448f5" tabindex="-1" value="">
                                    </div>
                                    <div class="clear" align="center">
                                        <input target="_blank" type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-3 w-button" value="Subscribe">
                                    </div>
                                </div>
        </section>
        <div class="socials-2">
            <a href="https://www.instagram.com/amandadelara/" target="_blank" class="social-link w-inline-block">
                <img src="images/ig.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.tiktok.com/@delara_official" target="_blank" class="social-link w-inline-block">
                <img src="images/tt.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.youtube.com/@delara_official" target="_blank" class="social-link w-inline-block">
                <img src="images/yt.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://www.facebook.com/AmandaDelaraMusic" target="_blank" class="social-link w-inline-block">
                <img src="images/fb.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://open.spotify.com/artist/2PVHjhJWIKgb2yfBTmQerg?si=92wdaOpdSNWOZlKzx7eZIA&amp;nd=1" target="_blank" class="social-link w-inline-block">
                <img src="images/sp.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
            <a href="https://music.apple.com/us/artist/delara/1146802538" target="_blank" class="social-link w-inline-block">
                <img src="images/ap.svg" loading="lazy" alt="" class="social-icon-2">
            </a>
        </div>
        <div data-w-id="a034b355-5158-6245-ee0a-17ad06ee1a72" class="menublock">
            <div class="text-block-3">MENU</div>
            <img src="images/down-Icon.svg" loading="lazy" alt="" class="image-65">
        </div>
        <section style="display:none;opacity:0" class="menumodal">
            <div data-w-id="348ea3dc-7cd9-3853-b014-aef044517dc2" class="closemenumodalbutton">CLOSE X</div>
            <div class="textlinklist">
                <a href="index.html" class="link">home</a>
                <a href="shop.html" class="link">shop</a>
                <a href="tour.html" class="link">concerts</a>
                <a href="bio.html" class="link">bio</a>
                <a href="music.html" aria-current="page" class="link w--current">music</a>
                <!--  <a href="#" class="link">diary</a>-->
            </div>
        </section>
        <div class="desktopmenu">
            <div class="div-block-35">
                <img src="images/Delara-logo.png" loading="lazy" alt="" class="image-66">
            </div>
            <div class="links-list">
                <a href="index.html" class="link-2">home</a>
                <a href="shop.html" class="link-2">shop</a>
                <a href="tour.html" class="link-2">concerts</a>
                <a href="bio.html" class="link-2">bio</a>
                <a href="music.html" aria-current="page" class="link-2 w--current">music</a>
            </div>
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64dce1d2cfc7ccedc2a2944b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="js/delara-site.js" type="text/javascript"></script>
        <!--  Primary Meta Tags  -->
        <title>Delara - ‘Volare’ out now</title>
        <meta name="title" content="Delara - ‘Volare’ out now>
<meta name=" description"="">
  <meta name=" keywords " content=" Amanda Delara, delara, Delara josefin lyrics, Amanda Delara nå er det oss lyrics, Amanda Delara unbound lyrics, Amanda Delara checka lyrics, Amanda Delara gunerius lyrics, Amanda Delara følsom lyrics, Amanda Delara vinyl, Amanda Delara youtube, Delara stockholm, Delara Oslo, Delara london, Amanda Delara roskilde, Amanda Delara great escape, Delara live, Amanda Delara konsert, Delara tickets, Delara bandcamp, Delara instagram, Delara new music, Delara concert, Delara music video, delara single ">
  <meta property=" og:title " content="'Volare' out now/>
        <meta property=" og:site_name"="">
        <meta property="og:description " content="Delara – Official website" -→<!--="" google="" tag="" manager="" (noscript)="" --="">
  <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSKTK3ZS" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!--  End Google Tag Manager (noscript)  -->
</body></html>


/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Fi = u( () => {
        window.tram = function(e) {
            function t(l, E) {
                var _ = new L.Bare;
                return _.init(l, E)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }
            function n(l) {
                var E = parseInt(l.slice(1), 16)
                  , _ = E >> 16 & 255
                  , O = E >> 8 & 255
                  , N = 255 & E;
                return [_, O, N]
            }
            function o(l, E, _) {
                return "#" + (1 << 24 | l << 16 | E << 8 | _).toString(16).slice(1)
            }
            function i() {}
            function a(l, E) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
            }
            function s(l, E, _) {
                f("Units do not match [" + l + "]: " + E + ", " + _)
            }
            function c(l, E, _) {
                if (E !== void 0 && (_ = E),
                l === void 0)
                    return _;
                var O = _;
                return Pt.test(l) || !an.test(l) ? O = parseInt(l, 10) : an.test(l) && (O = 1e3 * parseFloat(l)),
                0 > O && (O = 0),
                O === O ? O : _
            }
            function f(l) {
                fe.debug && window && window.console.warn(l)
            }
            function v(l) {
                for (var E = -1, _ = l ? l.length : 0, O = []; ++E < _; ) {
                    var N = l[E];
                    N && O.push(N)
                }
                return O
            }
            var p = function(l, E, _) {
                function O(Y) {
                    return typeof Y == "object"
                }
                function N(Y) {
                    return typeof Y == "function"
                }
                function S() {}
                function j(Y, le) {
                    function U() {
                        var Ne = new ee;
                        return N(Ne.init) && Ne.init.apply(Ne, arguments),
                        Ne
                    }
                    function ee() {}
                    le === _ && (le = Y,
                    Y = Object),
                    U.Bare = ee;
                    var re, ge = S[l] = Y[l], tt = ee[l] = U[l] = new S;
                    return tt.constructor = U,
                    U.mixin = function(Ne) {
                        return ee[l] = U[l] = j(U, Ne)[l],
                        U
                    }
                    ,
                    U.open = function(Ne) {
                        if (re = {},
                        N(Ne) ? re = Ne.call(U, tt, ge, U, Y) : O(Ne) && (re = Ne),
                        O(re))
                            for (var Or in re)
                                E.call(re, Or) && (tt[Or] = re[Or]);
                        return N(tt.init) || (tt.init = Y),
                        U
                    }
                    ,
                    U.open(le)
                }
                return j
            }("prototype", {}.hasOwnProperty)
              , h = {
                ease: ["ease", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (-2.75 * S * N + 11 * N * N + -15.5 * S + 8 * N + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (-1 * S * N + 3 * N * N + -3 * S + 2 * N)
                }
                ],
                "ease-out": ["ease-out", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (.3 * S * N + -1.6 * N * N + 2.2 * S + -1.8 * N + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, E, _, O) {
                    var N = (l /= O) * l
                      , S = N * l;
                    return E + _ * (2 * S * N + -5 * N * N + 2 * S + 2 * N)
                }
                ],
                linear: ["linear", function(l, E, _, O) {
                    return _ * l / O + E
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, _, O) {
                    return _ * (l /= O) * l + E
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, _, O) {
                    return -_ * (l /= O) * (l - 2) + E
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l + E : -_ / 2 * (--l * (l - 2) - 1) + E
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l + E
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, _, O) {
                    return _ * ((l = l / O - 1) * l * l + 1) + E
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l + E : _ / 2 * ((l -= 2) * l * l + 2) + E
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l * l + E
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, _, O) {
                    return -_ * ((l = l / O - 1) * l * l * l - 1) + E
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l * l + E : -_ / 2 * ((l -= 2) * l * l * l - 2) + E
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, _, O) {
                    return _ * (l /= O) * l * l * l * l + E
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, _, O) {
                    return _ * ((l = l / O - 1) * l * l * l * l + 1) + E
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? _ / 2 * l * l * l * l * l + E : _ / 2 * ((l -= 2) * l * l * l * l + 2) + E
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, _, O) {
                    return -_ * Math.cos(l / O * (Math.PI / 2)) + _ + E
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, _, O) {
                    return _ * Math.sin(l / O * (Math.PI / 2)) + E
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, _, O) {
                    return -_ / 2 * (Math.cos(Math.PI * l / O) - 1) + E
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, _, O) {
                    return l === 0 ? E : _ * Math.pow(2, 10 * (l / O - 1)) + E
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, _, O) {
                    return l === O ? E + _ : _ * (-Math.pow(2, -10 * l / O) + 1) + E
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, _, O) {
                    return l === 0 ? E : l === O ? E + _ : (l /= O / 2) < 1 ? _ / 2 * Math.pow(2, 10 * (l - 1)) + E : _ / 2 * (-Math.pow(2, -10 * --l) + 2) + E
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, _, O) {
                    return -_ * (Math.sqrt(1 - (l /= O) * l) - 1) + E
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, _, O) {
                    return _ * Math.sqrt(1 - (l = l / O - 1) * l) + E
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, _, O) {
                    return (l /= O / 2) < 1 ? -_ / 2 * (Math.sqrt(1 - l * l) - 1) + E : _ / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    _ * (l /= O) * l * ((N + 1) * l - N) + E
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    _ * ((l = l / O - 1) * l * ((N + 1) * l + N) + 1) + E
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, _, O, N) {
                    return N === void 0 && (N = 1.70158),
                    (l /= O / 2) < 1 ? _ / 2 * l * l * (((N *= 1.525) + 1) * l - N) + E : _ / 2 * ((l -= 2) * l * (((N *= 1.525) + 1) * l + N) + 2) + E
                }
                ]
            }
              , y = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , m = document
              , I = window
              , q = "bkwld-tram"
              , R = /[\-\.0-9]/g
              , w = /[A-Z]/
              , T = "number"
              , G = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , P = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , B = "unitless"
              , W = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , K = " "
              , M = m.createElement("a")
              , g = ["Webkit", "Moz", "O", "ms"]
              , x = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , F = function(l) {
                if (l in M.style)
                    return {
                        dom: l,
                        css: l
                    };
                var E, _, O = "", N = l.split("-");
                for (E = 0; E < N.length; E++)
                    O += N[E].charAt(0).toUpperCase() + N[E].slice(1);
                for (E = 0; E < g.length; E++)
                    if (_ = g[E] + O,
                    _ in M.style)
                        return {
                            dom: _,
                            css: x[E] + l
                        }
            }
              , X = t.support = {
                bind: Function.prototype.bind,
                transform: F("transform"),
                transition: F("transition"),
                backface: F("backface-visibility"),
                timing: F("transition-timing-function")
            };
            if (X.transition) {
                var H = X.timing.dom;
                if (M.style[H] = h["ease-in-back"][0],
                !M.style[H])
                    for (var z in y)
                        h[z][0] = y[z]
            }
            var ie = t.frame = function() {
                var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return l && X.bind ? l.bind(I) : function(E) {
                    I.setTimeout(E, 16)
                }
            }()
              , Ce = t.now = function() {
                var l = I.performance
                  , E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return E && X.bind ? E.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , d = p(function(l) {
                function E(k, ne) {
                    var pe = v(("" + k).split(K))
                      , ae = pe[0];
                    ne = ne || {};
                    var qe = It[ae];
                    if (!qe)
                        return f("Unsupported property: " + ae);
                    if (!ne.weak || !this.props[ae]) {
                        var je = qe[0]
                          , Me = this.props[ae];
                        return Me || (Me = this.props[ae] = new je.Bare),
                        Me.init(this.$el, pe, qe, ne),
                        Me
                    }
                }
                function _(k, ne, pe) {
                    if (k) {
                        var ae = typeof k;
                        if (ne || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        ae == "number" && ne)
                            return this.timer = new et({
                                duration: k,
                                context: this,
                                complete: S
                            }),
                            void (this.active = !0);
                        if (ae == "string" && ne) {
                            switch (k) {
                            case "hide":
                                U.call(this);
                                break;
                            case "stop":
                                j.call(this);
                                break;
                            case "redraw":
                                ee.call(this);
                                break;
                            default:
                                E.call(this, k, pe && pe[1])
                            }
                            return S.call(this)
                        }
                        if (ae == "function")
                            return void k.call(this, this);
                        if (ae == "object") {
                            var qe = 0;
                            tt.call(this, k, function(_e, lI) {
                                _e.span > qe && (qe = _e.span),
                                _e.stop(),
                                _e.animate(lI)
                            }, function(_e) {
                                "wait"in _e && (qe = c(_e.wait, 0))
                            }),
                            ge.call(this),
                            qe > 0 && (this.timer = new et({
                                duration: qe,
                                context: this
                            }),
                            this.active = !0,
                            ne && (this.timer.complete = S));
                            var je = this
                              , Me = !1
                              , sn = {};
                            ie(function() {
                                tt.call(je, k, function(_e) {
                                    _e.active && (Me = !0,
                                    sn[_e.name] = _e.nextStyle)
                                }),
                                Me && je.$el.css(sn)
                            })
                        }
                    }
                }
                function O(k) {
                    k = c(k, 0),
                    this.active ? this.queue.push({
                        options: k
                    }) : (this.timer = new et({
                        duration: k,
                        context: this,
                        complete: S
                    }),
                    this.active = !0)
                }
                function N(k) {
                    return this.active ? (this.queue.push({
                        options: k,
                        args: arguments
                    }),
                    void (this.timer.complete = S)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function S() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var k = this.queue.shift();
                        _.call(this, k.options, !0, k.args)
                    }
                }
                function j(k) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ne;
                    typeof k == "string" ? (ne = {},
                    ne[k] = 1) : ne = typeof k == "object" && k != null ? k : this.props,
                    tt.call(this, ne, Ne),
                    ge.call(this)
                }
                function Y(k) {
                    j.call(this, k),
                    tt.call(this, k, Or, uI)
                }
                function le(k) {
                    typeof k != "string" && (k = "block"),
                    this.el.style.display = k
                }
                function U() {
                    j.call(this),
                    this.el.style.display = "none"
                }
                function ee() {
                    this.el.offsetHeight
                }
                function re() {
                    j.call(this),
                    e.removeData(this.el, q),
                    this.$el = this.el = null
                }
                function ge() {
                    var k, ne, pe = [];
                    this.upstream && pe.push(this.upstream);
                    for (k in this.props)
                        ne = this.props[k],
                        ne.active && pe.push(ne.string);
                    pe = pe.join(","),
                    this.style !== pe && (this.style = pe,
                    this.el.style[X.transition.dom] = pe)
                }
                function tt(k, ne, pe) {
                    var ae, qe, je, Me, sn = ne !== Ne, _e = {};
                    for (ae in k)
                        je = k[ae],
                        ae in Ve ? (_e.transform || (_e.transform = {}),
                        _e.transform[ae] = je) : (w.test(ae) && (ae = r(ae)),
                        ae in It ? _e[ae] = je : (Me || (Me = {}),
                        Me[ae] = je));
                    for (ae in _e) {
                        if (je = _e[ae],
                        qe = this.props[ae],
                        !qe) {
                            if (!sn)
                                continue;
                            qe = E.call(this, ae)
                        }
                        ne.call(this, qe, je)
                    }
                    pe && Me && pe.call(this, Me)
                }
                function Ne(k) {
                    k.stop()
                }
                function Or(k, ne) {
                    k.set(ne)
                }
                function uI(k) {
                    this.$el.css(k)
                }
                function We(k, ne) {
                    l[k] = function() {
                        return this.children ? cI.call(this, ne, arguments) : (this.el && ne.apply(this, arguments),
                        this)
                    }
                }
                function cI(k, ne) {
                    var pe, ae = this.children.length;
                    for (pe = 0; ae > pe; pe++)
                        k.apply(this.children[pe], ne);
                    return this
                }
                l.init = function(k) {
                    if (this.$el = e(k),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    fe.keepInherited && !fe.fallback) {
                        var ne = dt(this.el, "transition");
                        ne && !W.test(ne) && (this.upstream = ne)
                    }
                    X.backface && fe.hideBackface && he(this.el, X.backface.css, "hidden")
                }
                ,
                We("add", E),
                We("start", _),
                We("wait", O),
                We("then", N),
                We("next", S),
                We("stop", j),
                We("set", Y),
                We("show", le),
                We("hide", U),
                We("redraw", ee),
                We("destroy", re)
            })
              , L = p(d, function(l) {
                function E(_, O) {
                    var N = e.data(_, q) || e.data(_, q, new d.Bare);
                    return N.el || N.init(_),
                    O ? N.start(O) : N
                }
                l.init = function(_, O) {
                    var N = e(_);
                    if (!N.length)
                        return this;
                    if (N.length === 1)
                        return E(N[0], O);
                    var S = [];
                    return N.each(function(j, Y) {
                        S.push(E(Y, O))
                    }),
                    this.children = S,
                    this
                }
            })
              , C = p(function(l) {
                function E() {
                    var S = this.get();
                    this.update("auto");
                    var j = this.get();
                    return this.update(S),
                    j
                }
                function _(S, j, Y) {
                    return j !== void 0 && (Y = j),
                    S in h ? S : Y
                }
                function O(S) {
                    var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
                    return (j ? o(j[1], j[2], j[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var N = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(S, j, Y, le) {
                    this.$el = S,
                    this.el = S[0];
                    var U = j[0];
                    Y[2] && (U = Y[2]),
                    pt[U] && (U = pt[U]),
                    this.name = U,
                    this.type = Y[1],
                    this.duration = c(j[1], this.duration, N.duration),
                    this.ease = _(j[2], this.ease, N.ease),
                    this.delay = c(j[3], this.delay, N.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = le.unit || this.unit || fe.defaultUnit,
                    this.angle = le.angle || this.angle || fe.defaultAngle,
                    fe.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + K + this.duration + "ms" + (this.ease != "ease" ? K + h[this.ease][0] : "") + (this.delay ? K + this.delay + "ms" : ""))
                }
                ,
                l.set = function(S) {
                    S = this.convert(S, this.type),
                    this.update(S),
                    this.redraw()
                }
                ,
                l.transition = function(S) {
                    this.active = !0,
                    S = this.convert(S, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    S == "auto" && (S = E.call(this))),
                    this.nextStyle = S
                }
                ,
                l.fallback = function(S) {
                    var j = this.el.style[this.name] || this.convert(this.get(), this.type);
                    S = this.convert(S, this.type),
                    this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)),
                    S == "auto" && (S = E.call(this))),
                    this.tween = new Oe({
                        from: j,
                        to: S,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return dt(this.el, this.name)
                }
                ,
                l.update = function(S) {
                    he(this.el, this.name, S)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    he(this.el, this.name, this.get()));
                    var S = this.tween;
                    S && S.context && S.destroy()
                }
                ,
                l.convert = function(S, j) {
                    if (S == "auto" && this.auto)
                        return S;
                    var Y, le = typeof S == "number", U = typeof S == "string";
                    switch (j) {
                    case T:
                        if (le)
                            return S;
                        if (U && S.replace(R, "") === "")
                            return +S;
                        Y = "number(unitless)";
                        break;
                    case G:
                        if (U) {
                            if (S === "" && this.original)
                                return this.original;
                            if (j.test(S))
                                return S.charAt(0) == "#" && S.length == 7 ? S : O(S)
                        }
                        Y = "hex or rgb string";
                        break;
                    case D:
                        if (le)
                            return S + this.unit;
                        if (U && j.test(S))
                            return S;
                        Y = "number(px) or string(unit)";
                        break;
                    case P:
                        if (le)
                            return S + this.unit;
                        if (U && j.test(S))
                            return S;
                        Y = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (le)
                            return S + this.angle;
                        if (U && j.test(S))
                            return S;
                        Y = "number(deg) or string(angle)";
                        break;
                    case B:
                        if (le || U && P.test(S))
                            return S;
                        Y = "number(unitless) or string(unit or %)"
                    }
                    return a(Y, S),
                    S
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , b = p(C, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), G))
                }
            })
              , te = p(C, function(l, E) {
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(_) {
                    this.$el[this.name](_)
                }
            })
              , oe = p(C, function(l, E) {
                function _(O, N) {
                    var S, j, Y, le, U;
                    for (S in O)
                        le = Ve[S],
                        Y = le[0],
                        j = le[1] || S,
                        U = this.convert(O[S], Y),
                        N.call(this, j, U, Y)
                }
                l.init = function() {
                    E.init.apply(this, arguments),
                    this.current || (this.current = {},
                    Ve.perspective && fe.perspective && (this.current.perspective = fe.perspective,
                    he(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(O) {
                    _.call(this, O, function(N, S) {
                        this.current[N] = S
                    }),
                    he(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(O) {
                    var N = this.values(O);
                    this.tween = new Xe({
                        current: this.current,
                        values: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var S, j = {};
                    for (S in this.current)
                        j[S] = S in N ? N[S] : this.current[S];
                    this.active = !0,
                    this.nextStyle = this.style(j)
                }
                ,
                l.fallback = function(O) {
                    var N = this.values(O);
                    this.tween = new Xe({
                        current: this.current,
                        values: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    he(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(O) {
                    var N, S = "";
                    for (N in O)
                        S += N + "(" + O[N] + ") ";
                    return S
                }
                ,
                l.values = function(O) {
                    var N, S = {};
                    return _.call(this, O, function(j, Y, le) {
                        S[j] = Y,
                        this.current[j] === void 0 && (N = 0,
                        ~j.indexOf("scale") && (N = 1),
                        this.current[j] = this.convert(N, le))
                    }),
                    S
                }
            })
              , Oe = p(function(l) {
                function E(U) {
                    Y.push(U) === 1 && ie(_)
                }
                function _() {
                    var U, ee, re, ge = Y.length;
                    if (ge)
                        for (ie(_),
                        ee = Ce(),
                        U = ge; U--; )
                            re = Y[U],
                            re && re.render(ee)
                }
                function O(U) {
                    var ee, re = e.inArray(U, Y);
                    re >= 0 && (ee = Y.slice(re + 1),
                    Y.length = re,
                    ee.length && (Y = Y.concat(ee)))
                }
                function N(U) {
                    return Math.round(U * le) / le
                }
                function S(U, ee, re) {
                    return o(U[0] + re * (ee[0] - U[0]), U[1] + re * (ee[1] - U[1]), U[2] + re * (ee[2] - U[2]))
                }
                var j = {
                    ease: h.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(U) {
                    this.duration = U.duration || 0,
                    this.delay = U.delay || 0;
                    var ee = U.ease || j.ease;
                    h[ee] && (ee = h[ee][1]),
                    typeof ee != "function" && (ee = j.ease),
                    this.ease = ee,
                    this.update = U.update || i,
                    this.complete = U.complete || i,
                    this.context = U.context || this,
                    this.name = U.name;
                    var re = U.from
                      , ge = U.to;
                    re === void 0 && (re = j.from),
                    ge === void 0 && (ge = j.to),
                    this.unit = U.unit || "",
                    typeof re == "number" && typeof ge == "number" ? (this.begin = re,
                    this.change = ge - re) : this.format(ge, re),
                    this.value = this.begin + this.unit,
                    this.start = Ce(),
                    U.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = Ce()),
                    this.active = !0,
                    E(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    O(this))
                }
                ,
                l.render = function(U) {
                    var ee, re = U - this.start;
                    if (this.delay) {
                        if (re <= this.delay)
                            return;
                        re -= this.delay
                    }
                    if (re < this.duration) {
                        var ge = this.ease(re, 0, 1, this.duration);
                        return ee = this.startRGB ? S(this.startRGB, this.endRGB, ge) : N(this.begin + ge * this.change),
                        this.value = ee + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ee = this.endHex || this.begin + this.change,
                    this.value = ee + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(U, ee) {
                    if (ee += "",
                    U += "",
                    U.charAt(0) == "#")
                        return this.startRGB = n(ee),
                        this.endRGB = n(U),
                        this.endHex = U,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var re = ee.replace(R, "")
                          , ge = U.replace(R, "");
                        re !== ge && s("tween", ee, U),
                        this.unit = re
                    }
                    ee = parseFloat(ee),
                    U = parseFloat(U),
                    this.begin = this.value = ee,
                    this.change = U - ee
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var Y = []
                  , le = 1e3
            })
              , et = p(Oe, function(l) {
                l.init = function(E) {
                    this.duration = E.duration || 0,
                    this.complete = E.complete || i,
                    this.context = E.context,
                    this.play()
                }
                ,
                l.render = function(E) {
                    var _ = E - this.start;
                    _ < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , Xe = p(Oe, function(l, E) {
                l.init = function(_) {
                    this.context = _.context,
                    this.update = _.update,
                    this.tweens = [],
                    this.current = _.current;
                    var O, N;
                    for (O in _.values)
                        N = _.values[O],
                        this.current[O] !== N && this.tweens.push(new Oe({
                            name: O,
                            from: this.current[O],
                            to: N,
                            duration: _.duration,
                            delay: _.delay,
                            ease: _.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(_) {
                    var O, N, S = this.tweens.length, j = !1;
                    for (O = S; O--; )
                        N = this.tweens[O],
                        N.context && (N.render(_),
                        this.current[N.name] = N.value,
                        j = !0);
                    return j ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (E.destroy.call(this),
                    this.tweens) {
                        var _, O = this.tweens.length;
                        for (_ = O; _--; )
                            this.tweens[_].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , fe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !X.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!X.transition)
                    return fe.fallback = !0;
                fe.agentTests.push("(" + l + ")");
                var E = new RegExp(fe.agentTests.join("|"),"i");
                fe.fallback = E.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new Oe(l)
            }
            ,
            t.delay = function(l, E, _) {
                return new et({
                    complete: E,
                    duration: l,
                    context: _
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var he = e.style
              , dt = e.css
              , pt = {
                transform: X.transform && X.transform.css
            }
              , It = {
                color: [b, G],
                background: [b, G, "background-color"],
                "outline-color": [b, G],
                "border-color": [b, G],
                "border-top-color": [b, G],
                "border-right-color": [b, G],
                "border-bottom-color": [b, G],
                "border-left-color": [b, G],
                "border-width": [C, D],
                "border-top-width": [C, D],
                "border-right-width": [C, D],
                "border-bottom-width": [C, D],
                "border-left-width": [C, D],
                "border-spacing": [C, D],
                "letter-spacing": [C, D],
                margin: [C, D],
                "margin-top": [C, D],
                "margin-right": [C, D],
                "margin-bottom": [C, D],
                "margin-left": [C, D],
                padding: [C, D],
                "padding-top": [C, D],
                "padding-right": [C, D],
                "padding-bottom": [C, D],
                "padding-left": [C, D],
                "outline-width": [C, D],
                opacity: [C, T],
                top: [C, P],
                right: [C, P],
                bottom: [C, P],
                left: [C, P],
                "font-size": [C, P],
                "text-indent": [C, P],
                "word-spacing": [C, P],
                width: [C, P],
                "min-width": [C, P],
                "max-width": [C, P],
                height: [C, P],
                "min-height": [C, P],
                "max-height": [C, P],
                "line-height": [C, B],
                "scroll-top": [te, T, "scrollTop"],
                "scroll-left": [te, T, "scrollLeft"]
            }
              , Ve = {};
            X.transform && (It.transform = [oe],
            Ve = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [T],
                scaleX: [T],
                scaleY: [T],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            X.transform && X.backface && (Ve.z = [P, "translateZ"],
            Ve.rotateZ = [V],
            Ve.scaleZ = [T],
            Ve.perspective = [D]);
            var Pt = /ms/
              , an = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Os = u( (SB, ms) => {
        var fI = window.$
          , dI = Fi() && fI.tram;
        ms.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , f = n.hasOwnProperty
              , v = r.forEach
              , p = r.map
              , h = r.reduce
              , y = r.reduceRight
              , m = r.filter
              , I = r.every
              , q = r.some
              , R = r.indexOf
              , w = r.lastIndexOf
              , T = Array.isArray
              , G = Object.keys
              , D = o.bind
              , P = e.each = e.forEach = function(g, x, F) {
                if (g == null)
                    return g;
                if (v && g.forEach === v)
                    g.forEach(x, F);
                else if (g.length === +g.length) {
                    for (var X = 0, H = g.length; X < H; X++)
                        if (x.call(F, g[X], X, g) === t)
                            return
                } else
                    for (var z = e.keys(g), X = 0, H = z.length; X < H; X++)
                        if (x.call(F, g[z[X]], z[X], g) === t)
                            return;
                return g
            }
            ;
            e.map = e.collect = function(g, x, F) {
                var X = [];
                return g == null ? X : p && g.map === p ? g.map(x, F) : (P(g, function(H, z, ie) {
                    X.push(x.call(F, H, z, ie))
                }),
                X)
            }
            ,
            e.find = e.detect = function(g, x, F) {
                var X;
                return V(g, function(H, z, ie) {
                    if (x.call(F, H, z, ie))
                        return X = H,
                        !0
                }),
                X
            }
            ,
            e.filter = e.select = function(g, x, F) {
                var X = [];
                return g == null ? X : m && g.filter === m ? g.filter(x, F) : (P(g, function(H, z, ie) {
                    x.call(F, H, z, ie) && X.push(H)
                }),
                X)
            }
            ;
            var V = e.some = e.any = function(g, x, F) {
                x || (x = e.identity);
                var X = !1;
                return g == null ? X : q && g.some === q ? g.some(x, F) : (P(g, function(H, z, ie) {
                    if (X || (X = x.call(F, H, z, ie)))
                        return t
                }),
                !!X)
            }
            ;
            e.contains = e.include = function(g, x) {
                return g == null ? !1 : R && g.indexOf === R ? g.indexOf(x) != -1 : V(g, function(F) {
                    return F === x
                })
            }
            ,
            e.delay = function(g, x) {
                var F = a.call(arguments, 2);
                return setTimeout(function() {
                    return g.apply(null, F)
                }, x)
            }
            ,
            e.defer = function(g) {
                return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(g) {
                var x, F, X;
                return function() {
                    x || (x = !0,
                    F = arguments,
                    X = this,
                    dI.frame(function() {
                        x = !1,
                        g.apply(X, F)
                    }))
                }
            }
            ,
            e.debounce = function(g, x, F) {
                var X, H, z, ie, Ce, d = function() {
                    var L = e.now() - ie;
                    L < x ? X = setTimeout(d, x - L) : (X = null,
                    F || (Ce = g.apply(z, H),
                    z = H = null))
                };
                return function() {
                    z = this,
                    H = arguments,
                    ie = e.now();
                    var L = F && !X;
                    return X || (X = setTimeout(d, x)),
                    L && (Ce = g.apply(z, H),
                    z = H = null),
                    Ce
                }
            }
            ,
            e.defaults = function(g) {
                if (!e.isObject(g))
                    return g;
                for (var x = 1, F = arguments.length; x < F; x++) {
                    var X = arguments[x];
                    for (var H in X)
                        g[H] === void 0 && (g[H] = X[H])
                }
                return g
            }
            ,
            e.keys = function(g) {
                if (!e.isObject(g))
                    return [];
                if (G)
                    return G(g);
                var x = [];
                for (var F in g)
                    e.has(g, F) && x.push(F);
                return x
            }
            ,
            e.has = function(g, x) {
                return f.call(g, x)
            }
            ,
            e.isObject = function(g) {
                return g === Object(g)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/
              , W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , K = function(g) {
                return "\\" + W[g]
            }
              , M = /^\s*(\w|\$)+\s*$/;
            return e.template = function(g, x, F) {
                !x && F && (x = F),
                x = e.defaults({}, x, e.templateSettings);
                var X = RegExp([(x.escape || B).source, (x.interpolate || B).source, (x.evaluate || B).source].join("|") + "|$", "g")
                  , H = 0
                  , z = "__p+='";
                g.replace(X, function(L, C, b, te, oe) {
                    return z += g.slice(H, oe).replace(J, K),
                    H = oe + L.length,
                    C ? z += `'+
((__t=(` + C + `))==null?'':_.escape(__t))+
'` : b ? z += `'+
((__t=(` + b + `))==null?'':__t)+
'` : te && (z += `';
` + te + `
__p+='`),
                    L
                }),
                z += `';
`;
                var ie = x.variable;
                if (ie) {
                    if (!M.test(ie))
                        throw new Error("variable is not a bare identifier: " + ie)
                } else
                    z = `with(obj||{}){
` + z + `}
`,
                    ie = "obj";
                z = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + z + `return __p;
`;
                var Ce;
                try {
                    Ce = new Function(x.variable || "obj","_",z)
                } catch (L) {
                    throw L.source = z,
                    L
                }
                var d = function(L) {
                    return Ce.call(this, L, e)
                };
                return d.source = "function(" + ie + `){
` + z + "}",
                d
            }
            ,
            e
        }()
    }
    );
    var vt = u( (RB, qs) => {
        var se = {}
          , kt = {}
          , Kt = []
          , Xi = window.Webflow || []
          , Tt = window.jQuery
          , ke = Tt(window)
          , pI = Tt(document)
          , rt = Tt.isFunction
          , He = se._ = Os()
          , As = se.tram = Fi() && Tt.tram
          , cn = !1
          , Vi = !1;
        As.config.hideBackface = !1;
        As.config.keepInherited = !0;
        se.define = function(e, t, r) {
            kt[e] && Rs(kt[e]);
            var n = kt[e] = t(Tt, He, r) || {};
            return Ss(n),
            n
        }
        ;
        se.require = function(e) {
            return kt[e]
        }
        ;
        function Ss(e) {
            se.env() && (rt(e.design) && ke.on("__wf_design", e.design),
            rt(e.preview) && ke.on("__wf_preview", e.preview)),
            rt(e.destroy) && ke.on("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && vI(e)
        }
        function vI(e) {
            if (cn) {
                e.ready();
                return
            }
            He.contains(Kt, e.ready) || Kt.push(e.ready)
        }
        function Rs(e) {
            rt(e.design) && ke.off("__wf_design", e.design),
            rt(e.preview) && ke.off("__wf_preview", e.preview),
            rt(e.destroy) && ke.off("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && hI(e)
        }
        function hI(e) {
            Kt = He.filter(Kt, function(t) {
                return t !== e.ready
            })
        }
        se.push = function(e) {
            if (cn) {
                rt(e) && e();
                return
            }
            Xi.push(e)
        }
        ;
        se.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var un = navigator.userAgent.toLowerCase()
          , ws = se.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , EI = se.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10)
          , gI = se.env.ios = /(ipod|iphone|ipad)/.test(un);
        se.env.safari = /safari/.test(un) && !EI && !gI;
        var Gi;
        ws && pI.on("touchstart mousedown", function(e) {
            Gi = e.target
        });
        se.validClick = ws ? function(e) {
            return e === Gi || Tt.contains(e, Gi)
        }
        : function() {
            return !0
        }
        ;
        var Cs = "resize.webflow orientationchange.webflow load.webflow"
          , _I = "scroll.webflow " + Cs;
        se.resize = Ui(ke, Cs);
        se.scroll = Ui(ke, _I);
        se.redraw = Ui();
        function Ui(e, t) {
            var r = []
              , n = {};
            return n.up = He.throttle(function(o) {
                He.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (He.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = He.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        se.location = function(e) {
            window.location = e
        }
        ;
        se.env() && (se.location = function() {}
        );
        se.ready = function() {
            cn = !0,
            Vi ? yI() : He.each(Kt, bs),
            He.each(Xi, bs),
            se.resize.up()
        }
        ;
        function bs(e) {
            rt(e) && e()
        }
        function yI() {
            Vi = !1,
            He.each(kt, Ss)
        }
        var xt;
        se.load = function(e) {
            xt.then(e)
        }
        ;
        function Ns() {
            xt && (xt.reject(),
            ke.off("load", xt.resolve)),
            xt = new Tt.Deferred,
            ke.on("load", xt.resolve)
        }
        se.destroy = function(e) {
            e = e || {},
            Vi = !0,
            ke.triggerHandler("__wf_destroy"),
            e.domready != null && (cn = e.domready),
            He.each(kt, Rs),
            se.resize.off(),
            se.scroll.off(),
            se.redraw.off(),
            Kt = [],
            Xi = [],
            xt.state() === "pending" && Ns()
        }
        ;
        Tt(se.ready);
        Ns();
        qs.exports = window.Webflow = se
    }
    );
    var Ls = u( (wB, xs) => {
        var Ps = vt();
        Ps.define("brand", xs.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var y = n.attr("data-wf-status")
                  , m = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(m) && a.hostname !== m && (y = !0),
                y && !s && (f = f || p(),
                h(),
                setTimeout(h, 500),
                e(r).off(c, v).on(c, v))
            }
            ;
            function v() {
                var y = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", y ? "display: none !important;" : "")
            }
            function p() {
                var y = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                })
                  , I = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return y.append(m, I),
                y[0]
            }
            function h() {
                var y = o.children(i)
                  , m = y.length && y.get(0) === f
                  , I = Ps.env("editor");
                if (m) {
                    I && y.remove();
                    return
                }
                y.length && y.remove(),
                I || o.append(f)
            }
            return t
        }
        )
    }
    );
    var Ds = u( (CB, Ms) => {
        var II = vt();
        II.define("focus-visible", Ms.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(T) {
                    return !!(T && T !== document && T.nodeName !== "HTML" && T.nodeName !== "BODY" && "classList"in T && "contains"in T.classList)
                }
                function c(T) {
                    var G = T.type
                      , D = T.tagName;
                    return !!(D === "INPUT" && a[G] && !T.readOnly || D === "TEXTAREA" && !T.readOnly || T.isContentEditable)
                }
                function f(T) {
                    T.getAttribute("data-wf-focus-visible") || T.setAttribute("data-wf-focus-visible", "true")
                }
                function v(T) {
                    T.getAttribute("data-wf-focus-visible") && T.removeAttribute("data-wf-focus-visible")
                }
                function p(T) {
                    T.metaKey || T.altKey || T.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                    n = !0)
                }
                function h() {
                    n = !1
                }
                function y(T) {
                    s(T.target) && (n || c(T.target)) && f(T.target)
                }
                function m(T) {
                    s(T.target) && T.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    v(T.target))
                }
                function I() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    q())
                }
                function q() {
                    document.addEventListener("mousemove", w),
                    document.addEventListener("mousedown", w),
                    document.addEventListener("mouseup", w),
                    document.addEventListener("pointermove", w),
                    document.addEventListener("pointerdown", w),
                    document.addEventListener("pointerup", w),
                    document.addEventListener("touchmove", w),
                    document.addEventListener("touchstart", w),
                    document.addEventListener("touchend", w)
                }
                function R() {
                    document.removeEventListener("mousemove", w),
                    document.removeEventListener("mousedown", w),
                    document.removeEventListener("mouseup", w),
                    document.removeEventListener("pointermove", w),
                    document.removeEventListener("pointerdown", w),
                    document.removeEventListener("pointerup", w),
                    document.removeEventListener("touchmove", w),
                    document.removeEventListener("touchstart", w),
                    document.removeEventListener("touchend", w)
                }
                function w(T) {
                    T.target.nodeName && T.target.nodeName.toLowerCase() === "html" || (n = !1,
                    R())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", h, !0),
                document.addEventListener("pointerdown", h, !0),
                document.addEventListener("touchstart", h, !0),
                document.addEventListener("visibilitychange", I, !0),
                q(),
                r.addEventListener("focus", y, !0),
                r.addEventListener("blur", m, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Xs = u( (NB, Gs) => {
        var Fs = vt();
        Fs.define("focus", Gs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Fs.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var Bs = u( (qB, Us) => {
        "use strict";
        var Bi = window.jQuery
          , nt = {}
          , ln = []
          , Vs = ".w-ix"
          , fn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Bi(t).triggerHandler(nt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Bi(t).triggerHandler(nt.types.OUTRO))
            }
        };
        nt.triggers = {};
        nt.types = {
            INTRO: "w-ix-intro" + Vs,
            OUTRO: "w-ix-outro" + Vs
        };
        nt.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [],
            Bi.extend(nt.triggers, fn)
        }
        ;
        nt.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (nt.triggers[e] = function(r, n) {
                    ln.push([t, n])
                }
                )
            }
        }
        ;
        nt.async();
        Us.exports = nt
    }
    );
    var ji = u( (PB, Hs) => {
        "use strict";
        var Wi = Bs();
        function Ws(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var TI = window.jQuery
          , dn = {}
          , js = ".w-ix"
          , mI = {
            reset: function(e, t) {
                Wi.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Wi.triggers.intro(e, t),
                Ws(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Wi.triggers.outro(e, t),
                Ws(t, "COMPONENT_INACTIVE")
            }
        };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + js,
            OUTRO: "w-ix-outro" + js
        };
        TI.extend(dn.triggers, mI);
        Hs.exports = dn
    }
    );
    var ks = u( (xB, ht) => {
        function Hi(e) {
            return ht.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ht.exports.__esModule = !0,
            ht.exports.default = ht.exports,
            Hi(e)
        }
        ht.exports = Hi,
        ht.exports.__esModule = !0,
        ht.exports.default = ht.exports
    }
    );
    var Lt = u( (LB, br) => {
        var OI = ks().default;
        function Ks(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Ks = function(o) {
                return o ? r : t
            }
            )(e)
        }
        function bI(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || OI(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Ks(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        br.exports = bI,
        br.exports.__esModule = !0,
        br.exports.default = br.exports
    }
    );
    var Ke = u( (MB, Ar) => {
        function AI(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ar.exports = AI,
        Ar.exports.__esModule = !0,
        Ar.exports.default = Ar.exports
    }
    );
    var de = u( (DB, zs) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        zs.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var zt = u( (FB, Ys) => {
        Ys.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Mt = u( (GB, $s) => {
        var SI = zt();
        $s.exports = !SI(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var vn = u( (XB, Qs) => {
        var Sr = Function.prototype.call;
        Qs.exports = Sr.bind ? Sr.bind(Sr) : function() {
            return Sr.apply(Sr, arguments)
        }
    }
    );
    var tu = u(eu => {
        "use strict";
        var Zs = {}.propertyIsEnumerable
          , Js = Object.getOwnPropertyDescriptor
          , RI = Js && !Zs.call({
            1: 2
        }, 1);
        eu.f = RI ? function(t) {
            var r = Js(this, t);
            return !!r && r.enumerable
        }
        : Zs
    }
    );
    var ki = u( (UB, ru) => {
        ru.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var ze = u( (BB, iu) => {
        var nu = Function.prototype
          , Ki = nu.bind
          , zi = nu.call
          , wI = Ki && Ki.bind(zi);
        iu.exports = Ki ? function(e) {
            return e && wI(zi, e)
        }
        : function(e) {
            return e && function() {
                return zi.apply(e, arguments)
            }
        }
    }
    );
    var su = u( (WB, au) => {
        var ou = ze()
          , CI = ou({}.toString)
          , NI = ou("".slice);
        au.exports = function(e) {
            return NI(CI(e), 8, -1)
        }
    }
    );
    var cu = u( (jB, uu) => {
        var qI = de()
          , PI = ze()
          , xI = zt()
          , LI = su()
          , Yi = qI.Object
          , MI = PI("".split);
        uu.exports = xI(function() {
            return !Yi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return LI(e) == "String" ? MI(e, "") : Yi(e)
        }
        : Yi
    }
    );
    var $i = u( (HB, lu) => {
        var DI = de()
          , FI = DI.TypeError;
        lu.exports = function(e) {
            if (e == null)
                throw FI("Can't call method on " + e);
            return e
        }
    }
    );
    var Rr = u( (kB, fu) => {
        var GI = cu()
          , XI = $i();
        fu.exports = function(e) {
            return GI(XI(e))
        }
    }
    );
    var it = u( (KB, du) => {
        du.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Yt = u( (zB, pu) => {
        var VI = it();
        pu.exports = function(e) {
            return typeof e == "object" ? e !== null : VI(e)
        }
    }
    );
    var wr = u( (YB, vu) => {
        var Qi = de()
          , UI = it()
          , BI = function(e) {
            return UI(e) ? e : void 0
        };
        vu.exports = function(e, t) {
            return arguments.length < 2 ? BI(Qi[e]) : Qi[e] && Qi[e][t]
        }
    }
    );
    var Eu = u( ($B, hu) => {
        var WI = ze();
        hu.exports = WI({}.isPrototypeOf)
    }
    );
    var _u = u( (QB, gu) => {
        var jI = wr();
        gu.exports = jI("navigator", "userAgent") || ""
    }
    );
    var Au = u( (ZB, bu) => {
        var Ou = de(), Zi = _u(), yu = Ou.process, Iu = Ou.Deno, Tu = yu && yu.versions || Iu && Iu.version, mu = Tu && Tu.v8, Ye, hn;
        mu && (Ye = mu.split("."),
        hn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1]));
        !hn && Zi && (Ye = Zi.match(/Edge\/(\d+)/),
        (!Ye || Ye[1] >= 74) && (Ye = Zi.match(/Chrome\/(\d+)/),
        Ye && (hn = +Ye[1])));
        bu.exports = hn
    }
    );
    var Ji = u( (JB, Ru) => {
        var Su = Au()
          , HI = zt();
        Ru.exports = !!Object.getOwnPropertySymbols && !HI(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Su && Su < 41
        })
    }
    );
    var eo = u( (eW, wu) => {
        var kI = Ji();
        wu.exports = kI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var to = u( (tW, Cu) => {
        var KI = de()
          , zI = wr()
          , YI = it()
          , $I = Eu()
          , QI = eo()
          , ZI = KI.Object;
        Cu.exports = QI ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = zI("Symbol");
            return YI(t) && $I(t.prototype, ZI(e))
        }
    }
    );
    var qu = u( (rW, Nu) => {
        var JI = de()
          , eT = JI.String;
        Nu.exports = function(e) {
            try {
                return eT(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var xu = u( (nW, Pu) => {
        var tT = de()
          , rT = it()
          , nT = qu()
          , iT = tT.TypeError;
        Pu.exports = function(e) {
            if (rT(e))
                return e;
            throw iT(nT(e) + " is not a function")
        }
    }
    );
    var Mu = u( (iW, Lu) => {
        var oT = xu();
        Lu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : oT(r)
        }
    }
    );
    var Fu = u( (oW, Du) => {
        var aT = de()
          , ro = vn()
          , no = it()
          , io = Yt()
          , sT = aT.TypeError;
        Du.exports = function(e, t) {
            var r, n;
            if (t === "string" && no(r = e.toString) && !io(n = ro(r, e)) || no(r = e.valueOf) && !io(n = ro(r, e)) || t !== "string" && no(r = e.toString) && !io(n = ro(r, e)))
                return n;
            throw sT("Can't convert object to primitive value")
        }
    }
    );
    var Xu = u( (aW, Gu) => {
        Gu.exports = !1
    }
    );
    var En = u( (sW, Uu) => {
        var Vu = de()
          , uT = Object.defineProperty;
        Uu.exports = function(e, t) {
            try {
                uT(Vu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Vu[e] = t
            }
            return t
        }
    }
    );
    var gn = u( (uW, Wu) => {
        var cT = de()
          , lT = En()
          , Bu = "__core-js_shared__"
          , fT = cT[Bu] || lT(Bu, {});
        Wu.exports = fT
    }
    );
    var oo = u( (cW, Hu) => {
        var dT = Xu()
          , ju = gn();
        (Hu.exports = function(e, t) {
            return ju[e] || (ju[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: dT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var Ku = u( (lW, ku) => {
        var pT = de()
          , vT = $i()
          , hT = pT.Object;
        ku.exports = function(e) {
            return hT(vT(e))
        }
    }
    );
    var mt = u( (fW, zu) => {
        var ET = ze()
          , gT = Ku()
          , _T = ET({}.hasOwnProperty);
        zu.exports = Object.hasOwn || function(t, r) {
            return _T(gT(t), r)
        }
    }
    );
    var ao = u( (dW, Yu) => {
        var yT = ze()
          , IT = 0
          , TT = Math.random()
          , mT = yT(1 .toString);
        Yu.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + mT(++IT + TT, 36)
        }
    }
    );
    var so = u( (pW, ec) => {
        var OT = de()
          , bT = oo()
          , $u = mt()
          , AT = ao()
          , Qu = Ji()
          , Ju = eo()
          , $t = bT("wks")
          , Dt = OT.Symbol
          , Zu = Dt && Dt.for
          , ST = Ju ? Dt : Dt && Dt.withoutSetter || AT;
        ec.exports = function(e) {
            if (!$u($t, e) || !(Qu || typeof $t[e] == "string")) {
                var t = "Symbol." + e;
                Qu && $u(Dt, e) ? $t[e] = Dt[e] : Ju && Zu ? $t[e] = Zu(t) : $t[e] = ST(t)
            }
            return $t[e]
        }
    }
    );
    var ic = u( (vW, nc) => {
        var RT = de()
          , wT = vn()
          , tc = Yt()
          , rc = to()
          , CT = Mu()
          , NT = Fu()
          , qT = so()
          , PT = RT.TypeError
          , xT = qT("toPrimitive");
        nc.exports = function(e, t) {
            if (!tc(e) || rc(e))
                return e;
            var r = CT(e, xT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = wT(r, e, t),
                !tc(n) || rc(n))
                    return n;
                throw PT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            NT(e, t)
        }
    }
    );
    var uo = u( (hW, oc) => {
        var LT = ic()
          , MT = to();
        oc.exports = function(e) {
            var t = LT(e, "string");
            return MT(t) ? t : t + ""
        }
    }
    );
    var lo = u( (EW, sc) => {
        var DT = de()
          , ac = Yt()
          , co = DT.document
          , FT = ac(co) && ac(co.createElement);
        sc.exports = function(e) {
            return FT ? co.createElement(e) : {}
        }
    }
    );
    var fo = u( (gW, uc) => {
        var GT = Mt()
          , XT = zt()
          , VT = lo();
        uc.exports = !GT && !XT(function() {
            return Object.defineProperty(VT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var po = u(lc => {
        var UT = Mt()
          , BT = vn()
          , WT = tu()
          , jT = ki()
          , HT = Rr()
          , kT = uo()
          , KT = mt()
          , zT = fo()
          , cc = Object.getOwnPropertyDescriptor;
        lc.f = UT ? cc : function(t, r) {
            if (t = HT(t),
            r = kT(r),
            zT)
                try {
                    return cc(t, r)
                } catch {}
            if (KT(t, r))
                return jT(!BT(WT.f, t, r), t[r])
        }
    }
    );
    var Cr = u( (yW, dc) => {
        var fc = de()
          , YT = Yt()
          , $T = fc.String
          , QT = fc.TypeError;
        dc.exports = function(e) {
            if (YT(e))
                return e;
            throw QT($T(e) + " is not an object")
        }
    }
    );
    var Nr = u(hc => {
        var ZT = de()
          , JT = Mt()
          , em = fo()
          , pc = Cr()
          , tm = uo()
          , rm = ZT.TypeError
          , vc = Object.defineProperty;
        hc.f = JT ? vc : function(t, r, n) {
            if (pc(t),
            r = tm(r),
            pc(n),
            em)
                try {
                    return vc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw rm("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var _n = u( (TW, Ec) => {
        var nm = Mt()
          , im = Nr()
          , om = ki();
        Ec.exports = nm ? function(e, t, r) {
            return im.f(e, t, om(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var ho = u( (mW, gc) => {
        var am = ze()
          , sm = it()
          , vo = gn()
          , um = am(Function.toString);
        sm(vo.inspectSource) || (vo.inspectSource = function(e) {
            return um(e)
        }
        );
        gc.exports = vo.inspectSource
    }
    );
    var Ic = u( (OW, yc) => {
        var cm = de()
          , lm = it()
          , fm = ho()
          , _c = cm.WeakMap;
        yc.exports = lm(_c) && /native code/.test(fm(_c))
    }
    );
    var Eo = u( (bW, mc) => {
        var dm = oo()
          , pm = ao()
          , Tc = dm("keys");
        mc.exports = function(e) {
            return Tc[e] || (Tc[e] = pm(e))
        }
    }
    );
    var yn = u( (AW, Oc) => {
        Oc.exports = {}
    }
    );
    var Cc = u( (SW, wc) => {
        var vm = Ic(), Rc = de(), go = ze(), hm = Yt(), Em = _n(), _o = mt(), yo = gn(), gm = Eo(), _m = yn(), bc = "Object already initialized", To = Rc.TypeError, ym = Rc.WeakMap, In, qr, Tn, Im = function(e) {
            return Tn(e) ? qr(e) : In(e, {})
        }, Tm = function(e) {
            return function(t) {
                var r;
                if (!hm(t) || (r = qr(t)).type !== e)
                    throw To("Incompatible receiver, " + e + " required");
                return r
            }
        };
        vm || yo.state ? (Ot = yo.state || (yo.state = new ym),
        Ac = go(Ot.get),
        Io = go(Ot.has),
        Sc = go(Ot.set),
        In = function(e, t) {
            if (Io(Ot, e))
                throw new To(bc);
            return t.facade = e,
            Sc(Ot, e, t),
            t
        }
        ,
        qr = function(e) {
            return Ac(Ot, e) || {}
        }
        ,
        Tn = function(e) {
            return Io(Ot, e)
        }
        ) : (Ft = gm("state"),
        _m[Ft] = !0,
        In = function(e, t) {
            if (_o(e, Ft))
                throw new To(bc);
            return t.facade = e,
            Em(e, Ft, t),
            t
        }
        ,
        qr = function(e) {
            return _o(e, Ft) ? e[Ft] : {}
        }
        ,
        Tn = function(e) {
            return _o(e, Ft)
        }
        );
        var Ot, Ac, Io, Sc, Ft;
        wc.exports = {
            set: In,
            get: qr,
            has: Tn,
            enforce: Im,
            getterFor: Tm
        }
    }
    );
    var Pc = u( (RW, qc) => {
        var mo = Mt()
          , mm = mt()
          , Nc = Function.prototype
          , Om = mo && Object.getOwnPropertyDescriptor
          , Oo = mm(Nc, "name")
          , bm = Oo && function() {}
        .name === "something"
          , Am = Oo && (!mo || mo && Om(Nc, "name").configurable);
        qc.exports = {
            EXISTS: Oo,
            PROPER: bm,
            CONFIGURABLE: Am
        }
    }
    );
    var Fc = u( (wW, Dc) => {
        var Sm = de()
          , xc = it()
          , Rm = mt()
          , Lc = _n()
          , wm = En()
          , Cm = ho()
          , Mc = Cc()
          , Nm = Pc().CONFIGURABLE
          , qm = Mc.get
          , Pm = Mc.enforce
          , xm = String(String).split("String");
        (Dc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1, i = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (xc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!Rm(r, "name") || Nm && r.name !== s) && Lc(r, "name", s),
            c = Pm(r),
            c.source || (c.source = xm.join(typeof s == "string" ? s : ""))),
            e === Sm) {
                i ? e[t] = r : wm(t, r);
                return
            } else
                o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : Lc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return xc(this) && qm(this).source || Cm(this)
        })
    }
    );
    var bo = u( (CW, Gc) => {
        var Lm = Math.ceil
          , Mm = Math.floor;
        Gc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? Mm : Lm)(t)
        }
    }
    );
    var Vc = u( (NW, Xc) => {
        var Dm = bo()
          , Fm = Math.max
          , Gm = Math.min;
        Xc.exports = function(e, t) {
            var r = Dm(e);
            return r < 0 ? Fm(r + t, 0) : Gm(r, t)
        }
    }
    );
    var Bc = u( (qW, Uc) => {
        var Xm = bo()
          , Vm = Math.min;
        Uc.exports = function(e) {
            return e > 0 ? Vm(Xm(e), 9007199254740991) : 0
        }
    }
    );
    var jc = u( (PW, Wc) => {
        var Um = Bc();
        Wc.exports = function(e) {
            return Um(e.length)
        }
    }
    );
    var Ao = u( (xW, kc) => {
        var Bm = Rr()
          , Wm = Vc()
          , jm = jc()
          , Hc = function(e) {
            return function(t, r, n) {
                var o = Bm(t), i = jm(o), a = Wm(n, i), s;
                if (e && r != r) {
                    for (; i > a; )
                        if (s = o[a++],
                        s != s)
                            return !0
                } else
                    for (; i > a; a++)
                        if ((e || a in o) && o[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        kc.exports = {
            includes: Hc(!0),
            indexOf: Hc(!1)
        }
    }
    );
    var Ro = u( (LW, zc) => {
        var Hm = ze()
          , So = mt()
          , km = Rr()
          , Km = Ao().indexOf
          , zm = yn()
          , Kc = Hm([].push);
        zc.exports = function(e, t) {
            var r = km(e), n = 0, o = [], i;
            for (i in r)
                !So(zm, i) && So(r, i) && Kc(o, i);
            for (; t.length > n; )
                So(r, i = t[n++]) && (~Km(o, i) || Kc(o, i));
            return o
        }
    }
    );
    var mn = u( (MW, Yc) => {
        Yc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var Qc = u($c => {
        var Ym = Ro()
          , $m = mn()
          , Qm = $m.concat("length", "prototype");
        $c.f = Object.getOwnPropertyNames || function(t) {
            return Ym(t, Qm)
        }
    }
    );
    var Jc = u(Zc => {
        Zc.f = Object.getOwnPropertySymbols
    }
    );
    var tl = u( (GW, el) => {
        var Zm = wr()
          , Jm = ze()
          , eO = Qc()
          , tO = Jc()
          , rO = Cr()
          , nO = Jm([].concat);
        el.exports = Zm("Reflect", "ownKeys") || function(t) {
            var r = eO.f(rO(t))
              , n = tO.f;
            return n ? nO(r, n(t)) : r
        }
    }
    );
    var nl = u( (XW, rl) => {
        var iO = mt()
          , oO = tl()
          , aO = po()
          , sO = Nr();
        rl.exports = function(e, t) {
            for (var r = oO(t), n = sO.f, o = aO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                iO(e, a) || n(e, a, o(t, a))
            }
        }
    }
    );
    var ol = u( (VW, il) => {
        var uO = zt()
          , cO = it()
          , lO = /#|\.prototype\./
          , Pr = function(e, t) {
            var r = dO[fO(e)];
            return r == vO ? !0 : r == pO ? !1 : cO(t) ? uO(t) : !!t
        }
          , fO = Pr.normalize = function(e) {
            return String(e).replace(lO, ".").toLowerCase()
        }
          , dO = Pr.data = {}
          , pO = Pr.NATIVE = "N"
          , vO = Pr.POLYFILL = "P";
        il.exports = Pr
    }
    );
    var sl = u( (UW, al) => {
        var wo = de()
          , hO = po().f
          , EO = _n()
          , gO = Fc()
          , _O = En()
          , yO = nl()
          , IO = ol();
        al.exports = function(e, t) {
            var r = e.target, n = e.global, o = e.stat, i, a, s, c, f, v;
            if (n ? a = wo : o ? a = wo[r] || _O(r, {}) : a = (wo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (f = t[s],
                    e.noTargetGet ? (v = hO(a, s),
                    c = v && v.value) : c = a[s],
                    i = IO(n ? s : r + (o ? "." : "#") + s, e.forced),
                    !i && c !== void 0) {
                        if (typeof f == typeof c)
                            continue;
                        yO(f, c)
                    }
                    (e.sham || c && c.sham) && EO(f, "sham", !0),
                    gO(a, s, f, e)
                }
        }
    }
    );
    var cl = u( (BW, ul) => {
        var TO = Ro()
          , mO = mn();
        ul.exports = Object.keys || function(t) {
            return TO(t, mO)
        }
    }
    );
    var fl = u( (WW, ll) => {
        var OO = Mt()
          , bO = Nr()
          , AO = Cr()
          , SO = Rr()
          , RO = cl();
        ll.exports = OO ? Object.defineProperties : function(t, r) {
            AO(t);
            for (var n = SO(r), o = RO(r), i = o.length, a = 0, s; i > a; )
                bO.f(t, s = o[a++], n[s]);
            return t
        }
    }
    );
    var pl = u( (jW, dl) => {
        var wO = wr();
        dl.exports = wO("document", "documentElement")
    }
    );
    var Tl = u( (HW, Il) => {
        var CO = Cr(), NO = fl(), vl = mn(), qO = yn(), PO = pl(), xO = lo(), LO = Eo(), hl = ">", El = "<", No = "prototype", qo = "script", _l = LO("IE_PROTO"), Co = function() {}, yl = function(e) {
            return El + qo + hl + e + El + "/" + qo + hl
        }, gl = function(e) {
            e.write(yl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, MO = function() {
            var e = xO("iframe"), t = "java" + qo + ":", r;
            return e.style.display = "none",
            PO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(yl("document.F=Object")),
            r.close(),
            r.F
        }, On, bn = function() {
            try {
                On = new ActiveXObject("htmlfile")
            } catch {}
            bn = typeof document < "u" ? document.domain && On ? gl(On) : MO() : gl(On);
            for (var e = vl.length; e--; )
                delete bn[No][vl[e]];
            return bn()
        };
        qO[_l] = !0;
        Il.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Co[No] = CO(t),
            n = new Co,
            Co[No] = null,
            n[_l] = t) : n = bn(),
            r === void 0 ? n : NO(n, r)
        }
    }
    );
    var Ol = u( (kW, ml) => {
        var DO = so()
          , FO = Tl()
          , GO = Nr()
          , Po = DO("unscopables")
          , xo = Array.prototype;
        xo[Po] == null && GO.f(xo, Po, {
            configurable: !0,
            value: FO(null)
        });
        ml.exports = function(e) {
            xo[Po][e] = !0
        }
    }
    );
    var bl = u( () => {
        "use strict";
        var XO = sl()
          , VO = Ao().includes
          , UO = Ol();
        XO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return VO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        UO("includes")
    }
    );
    var Sl = u( (YW, Al) => {
        var BO = de()
          , WO = ze();
        Al.exports = function(e, t) {
            return WO(BO[e].prototype[t])
        }
    }
    );
    var wl = u( ($W, Rl) => {
        bl();
        var jO = Sl();
        Rl.exports = jO("Array", "includes")
    }
    );
    var Nl = u( (QW, Cl) => {
        var HO = wl();
        Cl.exports = HO
    }
    );
    var Pl = u( (ZW, ql) => {
        var kO = Nl();
        ql.exports = kO
    }
    );
    var Lo = u( (JW, xl) => {
        var KO = typeof global == "object" && global && global.Object === Object && global;
        xl.exports = KO
    }
    );
    var $e = u( (e5, Ll) => {
        var zO = Lo()
          , YO = typeof self == "object" && self && self.Object === Object && self
          , $O = zO || YO || Function("return this")();
        Ll.exports = $O
    }
    );
    var Qt = u( (t5, Ml) => {
        var QO = $e()
          , ZO = QO.Symbol;
        Ml.exports = ZO
    }
    );
    var Xl = u( (r5, Gl) => {
        var Dl = Qt()
          , Fl = Object.prototype
          , JO = Fl.hasOwnProperty
          , e0 = Fl.toString
          , xr = Dl ? Dl.toStringTag : void 0;
        function t0(e) {
            var t = JO.call(e, xr)
              , r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var o = e0.call(e);
            return n && (t ? e[xr] = r : delete e[xr]),
            o
        }
        Gl.exports = t0
    }
    );
    var Ul = u( (n5, Vl) => {
        var r0 = Object.prototype
          , n0 = r0.toString;
        function i0(e) {
            return n0.call(e)
        }
        Vl.exports = i0
    }
    );
    var bt = u( (i5, jl) => {
        var Bl = Qt()
          , o0 = Xl()
          , a0 = Ul()
          , s0 = "[object Null]"
          , u0 = "[object Undefined]"
          , Wl = Bl ? Bl.toStringTag : void 0;
        function c0(e) {
            return e == null ? e === void 0 ? u0 : s0 : Wl && Wl in Object(e) ? o0(e) : a0(e)
        }
        jl.exports = c0
    }
    );
    var Mo = u( (o5, Hl) => {
        function l0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Hl.exports = l0
    }
    );
    var Do = u( (a5, kl) => {
        var f0 = Mo()
          , d0 = f0(Object.getPrototypeOf, Object);
        kl.exports = d0
    }
    );
    var Et = u( (s5, Kl) => {
        function p0(e) {
            return e != null && typeof e == "object"
        }
        Kl.exports = p0
    }
    );
    var Fo = u( (u5, Yl) => {
        var v0 = bt()
          , h0 = Do()
          , E0 = Et()
          , g0 = "[object Object]"
          , _0 = Function.prototype
          , y0 = Object.prototype
          , zl = _0.toString
          , I0 = y0.hasOwnProperty
          , T0 = zl.call(Object);
        function m0(e) {
            if (!E0(e) || v0(e) != g0)
                return !1;
            var t = h0(e);
            if (t === null)
                return !0;
            var r = I0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && zl.call(r) == T0
        }
        Yl.exports = m0
    }
    );
    var $l = u(Go => {
        "use strict";
        Object.defineProperty(Go, "__esModule", {
            value: !0
        });
        Go.default = O0;
        function O0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Ql = u( (Vo, Xo) => {
        "use strict";
        Object.defineProperty(Vo, "__esModule", {
            value: !0
        });
        var b0 = $l()
          , A0 = S0(b0);
        function S0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Zt;
        typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Xo < "u" ? Zt = Xo : Zt = Function("return this")();
        var R0 = (0,
        A0.default)(Zt);
        Vo.default = R0
    }
    );
    var Uo = u(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = tf;
        var w0 = Fo()
          , C0 = ef(w0)
          , N0 = Ql()
          , Zl = ef(N0);
        function ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Jl = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function tf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(tf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , s = a
              , c = !1;
            function f() {
                s === a && (s = a.slice())
            }
            function v() {
                return i
            }
            function p(I) {
                if (typeof I != "function")
                    throw new Error("Expected listener to be a function.");
                var q = !0;
                return f(),
                s.push(I),
                function() {
                    if (q) {
                        q = !1,
                        f();
                        var w = s.indexOf(I);
                        s.splice(w, 1)
                    }
                }
            }
            function h(I) {
                if (!(0,
                C0.default)(I))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    i = o(i, I)
                } finally {
                    c = !1
                }
                for (var q = a = s, R = 0; R < q.length; R++)
                    q[R]();
                return I
            }
            function y(I) {
                if (typeof I != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = I,
                h({
                    type: Jl.INIT
                })
            }
            function m() {
                var I, q = p;
                return I = {
                    subscribe: function(w) {
                        if (typeof w != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function T() {
                            w.next && w.next(v())
                        }
                        T();
                        var G = q(T);
                        return {
                            unsubscribe: G
                        }
                    }
                },
                I[Zl.default] = function() {
                    return this
                }
                ,
                I
            }
            return h({
                type: Jl.INIT
            }),
            n = {
                dispatch: h,
                subscribe: p,
                getState: v,
                replaceReducer: y
            },
            n[Zl.default] = m,
            n
        }
    }
    );
    var Wo = u(Bo => {
        "use strict";
        Bo.__esModule = !0;
        Bo.default = q0;
        function q0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var of = u(jo => {
        "use strict";
        jo.__esModule = !0;
        jo.default = D0;
        var rf = Uo()
          , P0 = Fo()
          , d5 = nf(P0)
          , x0 = Wo()
          , p5 = nf(x0);
        function nf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function L0(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function M0(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: rf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + rf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function D0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                M0(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , v = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var h = !1, y = {}, m = 0; m < i.length; m++) {
                    var I = i[m]
                      , q = r[I]
                      , R = f[I]
                      , w = q(R, v);
                    if (typeof w > "u") {
                        var T = L0(I, v);
                        throw new Error(T)
                    }
                    y[I] = w,
                    h = h || w !== R
                }
                return h ? y : f
            }
        }
    }
    );
    var sf = u(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = F0;
        function af(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function F0(e, t) {
            if (typeof e == "function")
                return af(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = af(a, t))
            }
            return n
        }
    }
    );
    var Ko = u(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = G0;
        function G0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var uf = u(zo => {
        "use strict";
        zo.__esModule = !0;
        var X0 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        zo.default = W0;
        var V0 = Ko()
          , U0 = B0(V0);
        function B0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function W0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a)
                      , c = s.dispatch
                      , f = []
                      , v = {
                        getState: s.getState,
                        dispatch: function(h) {
                            return c(h)
                        }
                    };
                    return f = t.map(function(p) {
                        return p(v)
                    }),
                    c = U0.default.apply(void 0, f)(s.dispatch),
                    X0({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var Yo = u(Ue => {
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var j0 = Uo()
          , H0 = Jt(j0)
          , k0 = of()
          , K0 = Jt(k0)
          , z0 = sf()
          , Y0 = Jt(z0)
          , $0 = uf()
          , Q0 = Jt($0)
          , Z0 = Ko()
          , J0 = Jt(Z0)
          , eb = Wo()
          , _5 = Jt(eb);
        function Jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ue.createStore = H0.default;
        Ue.combineReducers = K0.default;
        Ue.bindActionCreators = Y0.default;
        Ue.applyMiddleware = Q0.default;
        Ue.compose = J0.default
    }
    );
    var cf = u(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        be.QuickEffectIds = be.QuickEffectDirectionConsts = be.EventTypeConsts = be.EventLimitAffectedElements = be.EventContinuousMouseAxes = be.EventBasedOn = be.EventAppliesTo = void 0;
        var tb = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        be.EventTypeConsts = tb;
        var rb = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        be.EventAppliesTo = rb;
        var nb = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        be.EventBasedOn = nb;
        var ib = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        be.EventContinuousMouseAxes = ib;
        var ob = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        be.EventLimitAffectedElements = ob;
        var ab = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        be.QuickEffectIds = ab;
        var sb = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        be.QuickEffectDirectionConsts = sb
    }
    );
    var $o = u(er => {
        "use strict";
        Object.defineProperty(er, "__esModule", {
            value: !0
        });
        er.ActionTypeConsts = er.ActionAppliesTo = void 0;
        var ub = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        er.ActionTypeConsts = ub;
        var cb = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        er.ActionAppliesTo = cb
    }
    );
    var lf = u(An => {
        "use strict";
        Object.defineProperty(An, "__esModule", {
            value: !0
        });
        An.InteractionTypeConsts = void 0;
        var lb = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        An.InteractionTypeConsts = lb
    }
    );
    var ff = u(Sn => {
        "use strict";
        Object.defineProperty(Sn, "__esModule", {
            value: !0
        });
        Sn.ReducedMotionTypes = void 0;
        var fb = $o()
          , {TRANSFORM_MOVE: db, TRANSFORM_SCALE: pb, TRANSFORM_ROTATE: vb, TRANSFORM_SKEW: hb, STYLE_SIZE: Eb, STYLE_FILTER: gb, STYLE_FONT_VARIATION: _b} = fb.ActionTypeConsts
          , yb = {
            [db]: !0,
            [pb]: !0,
            [vb]: !0,
            [hb]: !0,
            [Eb]: !0,
            [gb]: !0,
            [_b]: !0
        };
        Sn.ReducedMotionTypes = yb
    }
    );
    var df = u(Q => {
        "use strict";
        Object.defineProperty(Q, "__esModule", {
            value: !0
        });
        Q.IX2_VIEWPORT_WIDTH_CHANGED = Q.IX2_TEST_FRAME_RENDERED = Q.IX2_STOP_REQUESTED = Q.IX2_SESSION_STOPPED = Q.IX2_SESSION_STARTED = Q.IX2_SESSION_INITIALIZED = Q.IX2_RAW_DATA_IMPORTED = Q.IX2_PREVIEW_REQUESTED = Q.IX2_PLAYBACK_REQUESTED = Q.IX2_PARAMETER_CHANGED = Q.IX2_MEDIA_QUERIES_DEFINED = Q.IX2_INSTANCE_STARTED = Q.IX2_INSTANCE_REMOVED = Q.IX2_INSTANCE_ADDED = Q.IX2_EVENT_STATE_CHANGED = Q.IX2_EVENT_LISTENER_ADDED = Q.IX2_ELEMENT_STATE_CHANGED = Q.IX2_CLEAR_REQUESTED = Q.IX2_ANIMATION_FRAME_CHANGED = Q.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var Ib = "IX2_RAW_DATA_IMPORTED";
        Q.IX2_RAW_DATA_IMPORTED = Ib;
        var Tb = "IX2_SESSION_INITIALIZED";
        Q.IX2_SESSION_INITIALIZED = Tb;
        var mb = "IX2_SESSION_STARTED";
        Q.IX2_SESSION_STARTED = mb;
        var Ob = "IX2_SESSION_STOPPED";
        Q.IX2_SESSION_STOPPED = Ob;
        var bb = "IX2_PREVIEW_REQUESTED";
        Q.IX2_PREVIEW_REQUESTED = bb;
        var Ab = "IX2_PLAYBACK_REQUESTED";
        Q.IX2_PLAYBACK_REQUESTED = Ab;
        var Sb = "IX2_STOP_REQUESTED";
        Q.IX2_STOP_REQUESTED = Sb;
        var Rb = "IX2_CLEAR_REQUESTED";
        Q.IX2_CLEAR_REQUESTED = Rb;
        var wb = "IX2_EVENT_LISTENER_ADDED";
        Q.IX2_EVENT_LISTENER_ADDED = wb;
        var Cb = "IX2_EVENT_STATE_CHANGED";
        Q.IX2_EVENT_STATE_CHANGED = Cb;
        var Nb = "IX2_ANIMATION_FRAME_CHANGED";
        Q.IX2_ANIMATION_FRAME_CHANGED = Nb;
        var qb = "IX2_PARAMETER_CHANGED";
        Q.IX2_PARAMETER_CHANGED = qb;
        var Pb = "IX2_INSTANCE_ADDED";
        Q.IX2_INSTANCE_ADDED = Pb;
        var xb = "IX2_INSTANCE_STARTED";
        Q.IX2_INSTANCE_STARTED = xb;
        var Lb = "IX2_INSTANCE_REMOVED";
        Q.IX2_INSTANCE_REMOVED = Lb;
        var Mb = "IX2_ELEMENT_STATE_CHANGED";
        Q.IX2_ELEMENT_STATE_CHANGED = Mb;
        var Db = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        Q.IX2_ACTION_LIST_PLAYBACK_CHANGED = Db;
        var Fb = "IX2_VIEWPORT_WIDTH_CHANGED";
        Q.IX2_VIEWPORT_WIDTH_CHANGED = Fb;
        var Gb = "IX2_MEDIA_QUERIES_DEFINED";
        Q.IX2_MEDIA_QUERIES_DEFINED = Gb;
        var Xb = "IX2_TEST_FRAME_RENDERED";
        Q.IX2_TEST_FRAME_RENDERED = Xb
    }
    );
    var pf = u(A => {
        "use strict";
        Object.defineProperty(A, "__esModule", {
            value: !0
        });
        A.W_MOD_JS = A.W_MOD_IX = A.WILL_CHANGE = A.WIDTH = A.WF_PAGE = A.TRANSLATE_Z = A.TRANSLATE_Y = A.TRANSLATE_X = A.TRANSLATE_3D = A.TRANSFORM = A.SKEW_Y = A.SKEW_X = A.SKEW = A.SIBLINGS = A.SCALE_Z = A.SCALE_Y = A.SCALE_X = A.SCALE_3D = A.ROTATE_Z = A.ROTATE_Y = A.ROTATE_X = A.RENDER_TRANSFORM = A.RENDER_STYLE = A.RENDER_PLUGIN = A.RENDER_GENERAL = A.PRESERVE_3D = A.PLAIN_OBJECT = A.PARENT = A.OPACITY = A.IX2_ID_DELIMITER = A.IMMEDIATE_CHILDREN = A.HTML_ELEMENT = A.HEIGHT = A.FONT_VARIATION_SETTINGS = A.FLEX = A.FILTER = A.DISPLAY = A.CONFIG_Z_VALUE = A.CONFIG_Z_UNIT = A.CONFIG_Y_VALUE = A.CONFIG_Y_UNIT = A.CONFIG_X_VALUE = A.CONFIG_X_UNIT = A.CONFIG_VALUE = A.CONFIG_UNIT = A.COMMA_DELIMITER = A.COLOR = A.COLON_DELIMITER = A.CHILDREN = A.BOUNDARY_SELECTOR = A.BORDER_COLOR = A.BAR_DELIMITER = A.BACKGROUND_COLOR = A.BACKGROUND = A.AUTO = A.ABSTRACT_NODE = void 0;
        var Vb = "|";
        A.IX2_ID_DELIMITER = Vb;
        var Ub = "data-wf-page";
        A.WF_PAGE = Ub;
        var Bb = "w-mod-js";
        A.W_MOD_JS = Bb;
        var Wb = "w-mod-ix";
        A.W_MOD_IX = Wb;
        var jb = ".w-dyn-item";
        A.BOUNDARY_SELECTOR = jb;
        var Hb = "xValue";
        A.CONFIG_X_VALUE = Hb;
        var kb = "yValue";
        A.CONFIG_Y_VALUE = kb;
        var Kb = "zValue";
        A.CONFIG_Z_VALUE = Kb;
        var zb = "value";
        A.CONFIG_VALUE = zb;
        var Yb = "xUnit";
        A.CONFIG_X_UNIT = Yb;
        var $b = "yUnit";
        A.CONFIG_Y_UNIT = $b;
        var Qb = "zUnit";
        A.CONFIG_Z_UNIT = Qb;
        var Zb = "unit";
        A.CONFIG_UNIT = Zb;
        var Jb = "transform";
        A.TRANSFORM = Jb;
        var eA = "translateX";
        A.TRANSLATE_X = eA;
        var tA = "translateY";
        A.TRANSLATE_Y = tA;
        var rA = "translateZ";
        A.TRANSLATE_Z = rA;
        var nA = "translate3d";
        A.TRANSLATE_3D = nA;
        var iA = "scaleX";
        A.SCALE_X = iA;
        var oA = "scaleY";
        A.SCALE_Y = oA;
        var aA = "scaleZ";
        A.SCALE_Z = aA;
        var sA = "scale3d";
        A.SCALE_3D = sA;
        var uA = "rotateX";
        A.ROTATE_X = uA;
        var cA = "rotateY";
        A.ROTATE_Y = cA;
        var lA = "rotateZ";
        A.ROTATE_Z = lA;
        var fA = "skew";
        A.SKEW = fA;
        var dA = "skewX";
        A.SKEW_X = dA;
        var pA = "skewY";
        A.SKEW_Y = pA;
        var vA = "opacity";
        A.OPACITY = vA;
        var hA = "filter";
        A.FILTER = hA;
        var EA = "font-variation-settings";
        A.FONT_VARIATION_SETTINGS = EA;
        var gA = "width";
        A.WIDTH = gA;
        var _A = "height";
        A.HEIGHT = _A;
        var yA = "backgroundColor";
        A.BACKGROUND_COLOR = yA;
        var IA = "background";
        A.BACKGROUND = IA;
        var TA = "borderColor";
        A.BORDER_COLOR = TA;
        var mA = "color";
        A.COLOR = mA;
        var OA = "display";
        A.DISPLAY = OA;
        var bA = "flex";
        A.FLEX = bA;
        var AA = "willChange";
        A.WILL_CHANGE = AA;
        var SA = "AUTO";
        A.AUTO = SA;
        var RA = ",";
        A.COMMA_DELIMITER = RA;
        var wA = ":";
        A.COLON_DELIMITER = wA;
        var CA = "|";
        A.BAR_DELIMITER = CA;
        var NA = "CHILDREN";
        A.CHILDREN = NA;
        var qA = "IMMEDIATE_CHILDREN";
        A.IMMEDIATE_CHILDREN = qA;
        var PA = "SIBLINGS";
        A.SIBLINGS = PA;
        var xA = "PARENT";
        A.PARENT = xA;
        var LA = "preserve-3d";
        A.PRESERVE_3D = LA;
        var MA = "HTML_ELEMENT";
        A.HTML_ELEMENT = MA;
        var DA = "PLAIN_OBJECT";
        A.PLAIN_OBJECT = DA;
        var FA = "ABSTRACT_NODE";
        A.ABSTRACT_NODE = FA;
        var GA = "RENDER_TRANSFORM";
        A.RENDER_TRANSFORM = GA;
        var XA = "RENDER_GENERAL";
        A.RENDER_GENERAL = XA;
        var VA = "RENDER_STYLE";
        A.RENDER_STYLE = VA;
        var UA = "RENDER_PLUGIN";
        A.RENDER_PLUGIN = UA
    }
    );
    var De = u(ye => {
        "use strict";
        var vf = Lt().default;
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var Rn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        ye.IX2EngineConstants = ye.IX2EngineActionTypes = void 0;
        var Qo = cf();
        Object.keys(Qo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Qo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Qo[e]
                }
            })
        });
        var Zo = $o();
        Object.keys(Zo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Zo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Zo[e]
                }
            })
        });
        var Jo = lf();
        Object.keys(Jo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === Jo[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return Jo[e]
                }
            })
        });
        var ea = ff();
        Object.keys(ea).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in ye && ye[e] === ea[e] || Object.defineProperty(ye, e, {
                enumerable: !0,
                get: function() {
                    return ea[e]
                }
            })
        });
        var BA = vf(df());
        ye.IX2EngineActionTypes = BA;
        var WA = vf(pf());
        ye.IX2EngineConstants = WA
    }
    );
    var hf = u(wn => {
        "use strict";
        Object.defineProperty(wn, "__esModule", {
            value: !0
        });
        wn.ixData = void 0;
        var jA = De()
          , {IX2_RAW_DATA_IMPORTED: HA} = jA.IX2EngineActionTypes
          , kA = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case HA:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
        ;
        wn.ixData = kA
    }
    );
    var tr = u( (w5, gt) => {
        function ta() {
            return gt.exports = ta = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            gt.exports.__esModule = !0,
            gt.exports.default = gt.exports,
            ta.apply(this, arguments)
        }
        gt.exports = ta,
        gt.exports.__esModule = !0,
        gt.exports.default = gt.exports
    }
    );
    var rr = u(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        var KA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ve.clone = Nn;
        ve.addLast = _f;
        ve.addFirst = yf;
        ve.removeLast = If;
        ve.removeFirst = Tf;
        ve.insert = mf;
        ve.removeAt = Of;
        ve.replaceAt = bf;
        ve.getIn = qn;
        ve.set = Pn;
        ve.setIn = xn;
        ve.update = Sf;
        ve.updateIn = Rf;
        ve.merge = wf;
        ve.mergeDeep = Cf;
        ve.mergeIn = Nf;
        ve.omit = qf;
        ve.addDefaults = Pf;
        var Ef = "INVALID_ARGS";
        function gf(e) {
            throw new Error(e)
        }
        function ra(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var zA = {}.hasOwnProperty;
        function Nn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = ra(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function Fe(e, t, r) {
            var n = r;
            n == null && gf(Ef);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var v = ra(f);
                    if (v.length)
                        for (var p = 0; p <= v.length; p++) {
                            var h = v[p];
                            if (!(e && n[h] !== void 0)) {
                                var y = f[h];
                                t && Cn(n[h]) && Cn(y) && (y = Fe(e, t, n[h], y)),
                                !(y === void 0 || y === n[h]) && (o || (o = !0,
                                n = Nn(n)),
                                n[h] = y)
                            }
                        }
                }
            }
            return n
        }
        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : KA(e);
            return e != null && (t === "object" || t === "function")
        }
        function _f(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function yf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function If(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Tf(e) {
            return e.length ? e.slice(1) : e
        }
        function mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Of(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function bf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function qn(e, t) {
            if (!Array.isArray(t) && gf(Ef),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Pn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Nn(o);
            return i[t] = r,
            i
        }
        function Af(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Cn(e) && Cn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Af(a, t, r, n + 1)
            }
            return Pn(e, i, o)
        }
        function xn(e, t, r) {
            return t.length ? Af(e, t, r, 0) : r
        }
        function Sf(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return Pn(e, t, o)
        }
        function Rf(e, t, r) {
            var n = qn(e, t)
              , o = r(n);
            return xn(e, t, o)
        }
        function wf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, o, i].concat(s)) : Fe(!1, !1, e, t, r, n, o, i)
        }
        function Cf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, o, i].concat(s)) : Fe(!1, !0, e, t, r, n, o, i)
        }
        function Nf(e, t, r, n, o, i, a) {
            var s = qn(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, v = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++)
                v[p - 7] = arguments[p];
            return v.length ? c = Fe.call.apply(Fe, [null, !1, !1, s, r, n, o, i, a].concat(v)) : c = Fe(!1, !1, s, r, n, o, i, a),
            xn(e, t, c)
        }
        function qf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (zA.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = ra(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }
        function Pf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, o, i].concat(s)) : Fe(!0, !1, e, t, r, n, o, i)
        }
        var YA = {
            clone: Nn,
            addLast: _f,
            addFirst: yf,
            removeLast: If,
            removeFirst: Tf,
            insert: mf,
            removeAt: Of,
            replaceAt: bf,
            getIn: qn,
            set: Pn,
            setIn: xn,
            update: Sf,
            updateIn: Rf,
            merge: wf,
            mergeDeep: Cf,
            mergeIn: Nf,
            omit: qf,
            addDefaults: Pf
        };
        ve.default = YA
    }
    );
    var Lf = u(Ln => {
        "use strict";
        var $A = Ke().default;
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ixRequest = void 0;
        var QA = $A(tr())
          , ZA = De()
          , JA = rr()
          , {IX2_PREVIEW_REQUESTED: eS, IX2_PLAYBACK_REQUESTED: tS, IX2_STOP_REQUESTED: rS, IX2_CLEAR_REQUESTED: nS} = ZA.IX2EngineActionTypes
          , iS = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , xf = Object.create(null, {
            [eS]: {
                value: "preview"
            },
            [tS]: {
                value: "playback"
            },
            [rS]: {
                value: "stop"
            },
            [nS]: {
                value: "clear"
            }
        })
          , oS = (e=iS, t) => {
            if (t.type in xf) {
                let r = [xf[t.type]];
                return (0,
                JA.setIn)(e, [r], (0,
                QA.default)({}, t.payload))
            }
            return e
        }
        ;
        Ln.ixRequest = oS
    }
    );
    var Df = u(Mn => {
        "use strict";
        Object.defineProperty(Mn, "__esModule", {
            value: !0
        });
        Mn.ixSession = void 0;
        var aS = De()
          , ot = rr()
          , {IX2_SESSION_INITIALIZED: sS, IX2_SESSION_STARTED: uS, IX2_TEST_FRAME_RENDERED: cS, IX2_SESSION_STOPPED: lS, IX2_EVENT_LISTENER_ADDED: fS, IX2_EVENT_STATE_CHANGED: dS, IX2_ANIMATION_FRAME_CHANGED: pS, IX2_ACTION_LIST_PLAYBACK_CHANGED: vS, IX2_VIEWPORT_WIDTH_CHANGED: hS, IX2_MEDIA_QUERIES_DEFINED: ES} = aS.IX2EngineActionTypes
          , Mf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , gS = 20
          , _S = (e=Mf, t) => {
            switch (t.type) {
            case sS:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    ot.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case uS:
                return (0,
                ot.set)(e, "active", !0);
            case cS:
                {
                    let {payload: {step: r=gS}} = t;
                    return (0,
                    ot.set)(e, "tick", e.tick + r)
                }
            case lS:
                return Mf;
            case pS:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    ot.set)(e, "tick", r)
                }
            case fS:
                {
                    let r = (0,
                    ot.addLast)(e.eventListeners, t.payload);
                    return (0,
                    ot.set)(e, "eventListeners", r)
                }
            case dS:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    ot.setIn)(e, ["eventState", r], n)
                }
            case vS:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    ot.setIn)(e, ["playbackState", r], n)
                }
            case hS:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: s, min: c, max: f} = n[a];
                        if (r >= c && r <= f) {
                            i = s;
                            break
                        }
                    }
                    return (0,
                    ot.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case ES:
                return (0,
                ot.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
        ;
        Mn.ixSession = _S
    }
    );
    var Gf = u( (P5, Ff) => {
        function yS() {
            this.__data__ = [],
            this.size = 0
        }
        Ff.exports = yS
    }
    );
    var Dn = u( (x5, Xf) => {
        function IS(e, t) {
            return e === t || e !== e && t !== t
        }
        Xf.exports = IS
    }
    );
    var Mr = u( (L5, Vf) => {
        var TS = Dn();
        function mS(e, t) {
            for (var r = e.length; r--; )
                if (TS(e[r][0], t))
                    return r;
            return -1
        }
        Vf.exports = mS
    }
    );
    var Bf = u( (M5, Uf) => {
        var OS = Mr()
          , bS = Array.prototype
          , AS = bS.splice;
        function SS(e) {
            var t = this.__data__
              , r = OS(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : AS.call(t, r, 1),
            --this.size,
            !0
        }
        Uf.exports = SS
    }
    );
    var jf = u( (D5, Wf) => {
        var RS = Mr();
        function wS(e) {
            var t = this.__data__
              , r = RS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Wf.exports = wS
    }
    );
    var kf = u( (F5, Hf) => {
        var CS = Mr();
        function NS(e) {
            return CS(this.__data__, e) > -1
        }
        Hf.exports = NS
    }
    );
    var zf = u( (G5, Kf) => {
        var qS = Mr();
        function PS(e, t) {
            var r = this.__data__
              , n = qS(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        Kf.exports = PS
    }
    );
    var Dr = u( (X5, Yf) => {
        var xS = Gf()
          , LS = Bf()
          , MS = jf()
          , DS = kf()
          , FS = zf();
        function nr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        nr.prototype.clear = xS;
        nr.prototype.delete = LS;
        nr.prototype.get = MS;
        nr.prototype.has = DS;
        nr.prototype.set = FS;
        Yf.exports = nr
    }
    );
    var Qf = u( (V5, $f) => {
        var GS = Dr();
        function XS() {
            this.__data__ = new GS,
            this.size = 0
        }
        $f.exports = XS
    }
    );
    var Jf = u( (U5, Zf) => {
        function VS(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        Zf.exports = VS
    }
    );
    var td = u( (B5, ed) => {
        function US(e) {
            return this.__data__.get(e)
        }
        ed.exports = US
    }
    );
    var nd = u( (W5, rd) => {
        function BS(e) {
            return this.__data__.has(e)
        }
        rd.exports = BS
    }
    );
    var at = u( (j5, id) => {
        function WS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        id.exports = WS
    }
    );
    var na = u( (H5, od) => {
        var jS = bt()
          , HS = at()
          , kS = "[object AsyncFunction]"
          , KS = "[object Function]"
          , zS = "[object GeneratorFunction]"
          , YS = "[object Proxy]";
        function $S(e) {
            if (!HS(e))
                return !1;
            var t = jS(e);
            return t == KS || t == zS || t == kS || t == YS
        }
        od.exports = $S
    }
    );
    var sd = u( (k5, ad) => {
        var QS = $e()
          , ZS = QS["__core-js_shared__"];
        ad.exports = ZS
    }
    );
    var ld = u( (K5, cd) => {
        var ia = sd()
          , ud = function() {
            var e = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function JS(e) {
            return !!ud && ud in e
        }
        cd.exports = JS
    }
    );
    var oa = u( (z5, fd) => {
        var eR = Function.prototype
          , tR = eR.toString;
        function rR(e) {
            if (e != null) {
                try {
                    return tR.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        fd.exports = rR
    }
    );
    var pd = u( (Y5, dd) => {
        var nR = na()
          , iR = ld()
          , oR = at()
          , aR = oa()
          , sR = /[\\^$.*+?()[\]{}|]/g
          , uR = /^\[object .+?Constructor\]$/
          , cR = Function.prototype
          , lR = Object.prototype
          , fR = cR.toString
          , dR = lR.hasOwnProperty
          , pR = RegExp("^" + fR.call(dR).replace(sR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function vR(e) {
            if (!oR(e) || iR(e))
                return !1;
            var t = nR(e) ? pR : uR;
            return t.test(aR(e))
        }
        dd.exports = vR
    }
    );
    var hd = u( ($5, vd) => {
        function hR(e, t) {
            return e?.[t]
        }
        vd.exports = hR
    }
    );
    var At = u( (Q5, Ed) => {
        var ER = pd()
          , gR = hd();
        function _R(e, t) {
            var r = gR(e, t);
            return ER(r) ? r : void 0
        }
        Ed.exports = _R
    }
    );
    var Fn = u( (Z5, gd) => {
        var yR = At()
          , IR = $e()
          , TR = yR(IR, "Map");
        gd.exports = TR
    }
    );
    var Fr = u( (J5, _d) => {
        var mR = At()
          , OR = mR(Object, "create");
        _d.exports = OR
    }
    );
    var Td = u( (ej, Id) => {
        var yd = Fr();
        function bR() {
            this.__data__ = yd ? yd(null) : {},
            this.size = 0
        }
        Id.exports = bR
    }
    );
    var Od = u( (tj, md) => {
        function AR(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        md.exports = AR
    }
    );
    var Ad = u( (rj, bd) => {
        var SR = Fr()
          , RR = "__lodash_hash_undefined__"
          , wR = Object.prototype
          , CR = wR.hasOwnProperty;
        function NR(e) {
            var t = this.__data__;
            if (SR) {
                var r = t[e];
                return r === RR ? void 0 : r
            }
            return CR.call(t, e) ? t[e] : void 0
        }
        bd.exports = NR
    }
    );
    var Rd = u( (nj, Sd) => {
        var qR = Fr()
          , PR = Object.prototype
          , xR = PR.hasOwnProperty;
        function LR(e) {
            var t = this.__data__;
            return qR ? t[e] !== void 0 : xR.call(t, e)
        }
        Sd.exports = LR
    }
    );
    var Cd = u( (ij, wd) => {
        var MR = Fr()
          , DR = "__lodash_hash_undefined__";
        function FR(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = MR && t === void 0 ? DR : t,
            this
        }
        wd.exports = FR
    }
    );
    var qd = u( (oj, Nd) => {
        var GR = Td()
          , XR = Od()
          , VR = Ad()
          , UR = Rd()
          , BR = Cd();
        function ir(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ir.prototype.clear = GR;
        ir.prototype.delete = XR;
        ir.prototype.get = VR;
        ir.prototype.has = UR;
        ir.prototype.set = BR;
        Nd.exports = ir
    }
    );
    var Ld = u( (aj, xd) => {
        var Pd = qd()
          , WR = Dr()
          , jR = Fn();
        function HR() {
            this.size = 0,
            this.__data__ = {
                hash: new Pd,
                map: new (jR || WR),
                string: new Pd
            }
        }
        xd.exports = HR
    }
    );
    var Dd = u( (sj, Md) => {
        function kR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Md.exports = kR
    }
    );
    var Gr = u( (uj, Fd) => {
        var KR = Dd();
        function zR(e, t) {
            var r = e.__data__;
            return KR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Fd.exports = zR
    }
    );
    var Xd = u( (cj, Gd) => {
        var YR = Gr();
        function $R(e) {
            var t = YR(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Gd.exports = $R
    }
    );
    var Ud = u( (lj, Vd) => {
        var QR = Gr();
        function ZR(e) {
            return QR(this, e).get(e)
        }
        Vd.exports = ZR
    }
    );
    var Wd = u( (fj, Bd) => {
        var JR = Gr();
        function ew(e) {
            return JR(this, e).has(e)
        }
        Bd.exports = ew
    }
    );
    var Hd = u( (dj, jd) => {
        var tw = Gr();
        function rw(e, t) {
            var r = tw(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        jd.exports = rw
    }
    );
    var Gn = u( (pj, kd) => {
        var nw = Ld()
          , iw = Xd()
          , ow = Ud()
          , aw = Wd()
          , sw = Hd();
        function or(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        or.prototype.clear = nw;
        or.prototype.delete = iw;
        or.prototype.get = ow;
        or.prototype.has = aw;
        or.prototype.set = sw;
        kd.exports = or
    }
    );
    var zd = u( (vj, Kd) => {
        var uw = Dr()
          , cw = Fn()
          , lw = Gn()
          , fw = 200;
        function dw(e, t) {
            var r = this.__data__;
            if (r instanceof uw) {
                var n = r.__data__;
                if (!cw || n.length < fw - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new lw(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        Kd.exports = dw
    }
    );
    var aa = u( (hj, Yd) => {
        var pw = Dr()
          , vw = Qf()
          , hw = Jf()
          , Ew = td()
          , gw = nd()
          , _w = zd();
        function ar(e) {
            var t = this.__data__ = new pw(e);
            this.size = t.size
        }
        ar.prototype.clear = vw;
        ar.prototype.delete = hw;
        ar.prototype.get = Ew;
        ar.prototype.has = gw;
        ar.prototype.set = _w;
        Yd.exports = ar
    }
    );
    var Qd = u( (Ej, $d) => {
        var yw = "__lodash_hash_undefined__";
        function Iw(e) {
            return this.__data__.set(e, yw),
            this
        }
        $d.exports = Iw
    }
    );
    var Jd = u( (gj, Zd) => {
        function Tw(e) {
            return this.__data__.has(e)
        }
        Zd.exports = Tw
    }
    );
    var tp = u( (_j, ep) => {
        var mw = Gn()
          , Ow = Qd()
          , bw = Jd();
        function Xn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new mw; ++t < r; )
                this.add(e[t])
        }
        Xn.prototype.add = Xn.prototype.push = Ow;
        Xn.prototype.has = bw;
        ep.exports = Xn
    }
    );
    var np = u( (yj, rp) => {
        function Aw(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        rp.exports = Aw
    }
    );
    var op = u( (Ij, ip) => {
        function Sw(e, t) {
            return e.has(t)
        }
        ip.exports = Sw
    }
    );
    var sa = u( (Tj, ap) => {
        var Rw = tp()
          , ww = np()
          , Cw = op()
          , Nw = 1
          , qw = 2;
        function Pw(e, t, r, n, o, i) {
            var a = r & Nw
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var f = i.get(e)
              , v = i.get(t);
            if (f && v)
                return f == t && v == e;
            var p = -1
              , h = !0
              , y = r & qw ? new Rw : void 0;
            for (i.set(e, t),
            i.set(t, e); ++p < s; ) {
                var m = e[p]
                  , I = t[p];
                if (n)
                    var q = a ? n(I, m, p, t, e, i) : n(m, I, p, e, t, i);
                if (q !== void 0) {
                    if (q)
                        continue;
                    h = !1;
                    break
                }
                if (y) {
                    if (!ww(t, function(R, w) {
                        if (!Cw(y, w) && (m === R || o(m, R, r, n, i)))
                            return y.push(w)
                    })) {
                        h = !1;
                        break
                    }
                } else if (!(m === I || o(m, I, r, n, i))) {
                    h = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            h
        }
        ap.exports = Pw
    }
    );
    var up = u( (mj, sp) => {
        var xw = $e()
          , Lw = xw.Uint8Array;
        sp.exports = Lw
    }
    );
    var lp = u( (Oj, cp) => {
        function Mw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        cp.exports = Mw
    }
    );
    var dp = u( (bj, fp) => {
        function Dw(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        fp.exports = Dw
    }
    );
    var gp = u( (Aj, Ep) => {
        var pp = Qt()
          , vp = up()
          , Fw = Dn()
          , Gw = sa()
          , Xw = lp()
          , Vw = dp()
          , Uw = 1
          , Bw = 2
          , Ww = "[object Boolean]"
          , jw = "[object Date]"
          , Hw = "[object Error]"
          , kw = "[object Map]"
          , Kw = "[object Number]"
          , zw = "[object RegExp]"
          , Yw = "[object Set]"
          , $w = "[object String]"
          , Qw = "[object Symbol]"
          , Zw = "[object ArrayBuffer]"
          , Jw = "[object DataView]"
          , hp = pp ? pp.prototype : void 0
          , ua = hp ? hp.valueOf : void 0;
        function eC(e, t, r, n, o, i, a) {
            switch (r) {
            case Jw:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case Zw:
                return !(e.byteLength != t.byteLength || !i(new vp(e), new vp(t)));
            case Ww:
            case jw:
            case Kw:
                return Fw(+e, +t);
            case Hw:
                return e.name == t.name && e.message == t.message;
            case zw:
            case $w:
                return e == t + "";
            case kw:
                var s = Xw;
            case Yw:
                var c = n & Uw;
                if (s || (s = Vw),
                e.size != t.size && !c)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                n |= Bw,
                a.set(e, t);
                var v = Gw(s(e), s(t), n, o, i, a);
                return a.delete(e),
                v;
            case Qw:
                if (ua)
                    return ua.call(e) == ua.call(t)
            }
            return !1
        }
        Ep.exports = eC
    }
    );
    var Vn = u( (Sj, _p) => {
        function tC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        _p.exports = tC
    }
    );
    var Ae = u( (Rj, yp) => {
        var rC = Array.isArray;
        yp.exports = rC
    }
    );
    var ca = u( (wj, Ip) => {
        var nC = Vn()
          , iC = Ae();
        function oC(e, t, r) {
            var n = t(e);
            return iC(e) ? n : nC(n, r(e))
        }
        Ip.exports = oC
    }
    );
    var mp = u( (Cj, Tp) => {
        function aC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Tp.exports = aC
    }
    );
    var la = u( (Nj, Op) => {
        function sC() {
            return []
        }
        Op.exports = sC
    }
    );
    var fa = u( (qj, Ap) => {
        var uC = mp()
          , cC = la()
          , lC = Object.prototype
          , fC = lC.propertyIsEnumerable
          , bp = Object.getOwnPropertySymbols
          , dC = bp ? function(e) {
            return e == null ? [] : (e = Object(e),
            uC(bp(e), function(t) {
                return fC.call(e, t)
            }))
        }
        : cC;
        Ap.exports = dC
    }
    );
    var Rp = u( (Pj, Sp) => {
        function pC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Sp.exports = pC
    }
    );
    var Cp = u( (xj, wp) => {
        var vC = bt()
          , hC = Et()
          , EC = "[object Arguments]";
        function gC(e) {
            return hC(e) && vC(e) == EC
        }
        wp.exports = gC
    }
    );
    var Xr = u( (Lj, Pp) => {
        var Np = Cp()
          , _C = Et()
          , qp = Object.prototype
          , yC = qp.hasOwnProperty
          , IC = qp.propertyIsEnumerable
          , TC = Np(function() {
            return arguments
        }()) ? Np : function(e) {
            return _C(e) && yC.call(e, "callee") && !IC.call(e, "callee")
        }
        ;
        Pp.exports = TC
    }
    );
    var Lp = u( (Mj, xp) => {
        function mC() {
            return !1
        }
        xp.exports = mC
    }
    );
    var Un = u( (Vr, sr) => {
        var OC = $e()
          , bC = Lp()
          , Fp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr
          , Mp = Fp && typeof sr == "object" && sr && !sr.nodeType && sr
          , AC = Mp && Mp.exports === Fp
          , Dp = AC ? OC.Buffer : void 0
          , SC = Dp ? Dp.isBuffer : void 0
          , RC = SC || bC;
        sr.exports = RC
    }
    );
    var Bn = u( (Dj, Gp) => {
        var wC = 9007199254740991
          , CC = /^(?:0|[1-9]\d*)$/;
        function NC(e, t) {
            var r = typeof e;
            return t = t ?? wC,
            !!t && (r == "number" || r != "symbol" && CC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Gp.exports = NC
    }
    );
    var Wn = u( (Fj, Xp) => {
        var qC = 9007199254740991;
        function PC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qC
        }
        Xp.exports = PC
    }
    );
    var Up = u( (Gj, Vp) => {
        var xC = bt()
          , LC = Wn()
          , MC = Et()
          , DC = "[object Arguments]"
          , FC = "[object Array]"
          , GC = "[object Boolean]"
          , XC = "[object Date]"
          , VC = "[object Error]"
          , UC = "[object Function]"
          , BC = "[object Map]"
          , WC = "[object Number]"
          , jC = "[object Object]"
          , HC = "[object RegExp]"
          , kC = "[object Set]"
          , KC = "[object String]"
          , zC = "[object WeakMap]"
          , YC = "[object ArrayBuffer]"
          , $C = "[object DataView]"
          , QC = "[object Float32Array]"
          , ZC = "[object Float64Array]"
          , JC = "[object Int8Array]"
          , eN = "[object Int16Array]"
          , tN = "[object Int32Array]"
          , rN = "[object Uint8Array]"
          , nN = "[object Uint8ClampedArray]"
          , iN = "[object Uint16Array]"
          , oN = "[object Uint32Array]"
          , ce = {};
        ce[QC] = ce[ZC] = ce[JC] = ce[eN] = ce[tN] = ce[rN] = ce[nN] = ce[iN] = ce[oN] = !0;
        ce[DC] = ce[FC] = ce[YC] = ce[GC] = ce[$C] = ce[XC] = ce[VC] = ce[UC] = ce[BC] = ce[WC] = ce[jC] = ce[HC] = ce[kC] = ce[KC] = ce[zC] = !1;
        function aN(e) {
            return MC(e) && LC(e.length) && !!ce[xC(e)]
        }
        Vp.exports = aN
    }
    );
    var Wp = u( (Xj, Bp) => {
        function sN(e) {
            return function(t) {
                return e(t)
            }
        }
        Bp.exports = sN
    }
    );
    var Hp = u( (Ur, ur) => {
        var uN = Lo()
          , jp = typeof Ur == "object" && Ur && !Ur.nodeType && Ur
          , Br = jp && typeof ur == "object" && ur && !ur.nodeType && ur
          , cN = Br && Br.exports === jp
          , da = cN && uN.process
          , lN = function() {
            try {
                var e = Br && Br.require && Br.require("util").types;
                return e || da && da.binding && da.binding("util")
            } catch {}
        }();
        ur.exports = lN
    }
    );
    var jn = u( (Vj, zp) => {
        var fN = Up()
          , dN = Wp()
          , kp = Hp()
          , Kp = kp && kp.isTypedArray
          , pN = Kp ? dN(Kp) : fN;
        zp.exports = pN
    }
    );
    var pa = u( (Uj, Yp) => {
        var vN = Rp()
          , hN = Xr()
          , EN = Ae()
          , gN = Un()
          , _N = Bn()
          , yN = jn()
          , IN = Object.prototype
          , TN = IN.hasOwnProperty;
        function mN(e, t) {
            var r = EN(e)
              , n = !r && hN(e)
              , o = !r && !n && gN(e)
              , i = !r && !n && !o && yN(e)
              , a = r || n || o || i
              , s = a ? vN(e.length, String) : []
              , c = s.length;
            for (var f in e)
                (t || TN.call(e, f)) && !(a && (f == "length" || o && (f == "offset" || f == "parent") || i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || _N(f, c))) && s.push(f);
            return s
        }
        Yp.exports = mN
    }
    );
    var Hn = u( (Bj, $p) => {
        var ON = Object.prototype;
        function bN(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || ON;
            return e === r
        }
        $p.exports = bN
    }
    );
    var Zp = u( (Wj, Qp) => {
        var AN = Mo()
          , SN = AN(Object.keys, Object);
        Qp.exports = SN
    }
    );
    var kn = u( (jj, Jp) => {
        var RN = Hn()
          , wN = Zp()
          , CN = Object.prototype
          , NN = CN.hasOwnProperty;
        function qN(e) {
            if (!RN(e))
                return wN(e);
            var t = [];
            for (var r in Object(e))
                NN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Jp.exports = qN
    }
    );
    var Gt = u( (Hj, ev) => {
        var PN = na()
          , xN = Wn();
        function LN(e) {
            return e != null && xN(e.length) && !PN(e)
        }
        ev.exports = LN
    }
    );
    var Wr = u( (kj, tv) => {
        var MN = pa()
          , DN = kn()
          , FN = Gt();
        function GN(e) {
            return FN(e) ? MN(e) : DN(e)
        }
        tv.exports = GN
    }
    );
    var nv = u( (Kj, rv) => {
        var XN = ca()
          , VN = fa()
          , UN = Wr();
        function BN(e) {
            return XN(e, UN, VN)
        }
        rv.exports = BN
    }
    );
    var av = u( (zj, ov) => {
        var iv = nv()
          , WN = 1
          , jN = Object.prototype
          , HN = jN.hasOwnProperty;
        function kN(e, t, r, n, o, i) {
            var a = r & WN
              , s = iv(e)
              , c = s.length
              , f = iv(t)
              , v = f.length;
            if (c != v && !a)
                return !1;
            for (var p = c; p--; ) {
                var h = s[p];
                if (!(a ? h in t : HN.call(t, h)))
                    return !1
            }
            var y = i.get(e)
              , m = i.get(t);
            if (y && m)
                return y == t && m == e;
            var I = !0;
            i.set(e, t),
            i.set(t, e);
            for (var q = a; ++p < c; ) {
                h = s[p];
                var R = e[h]
                  , w = t[h];
                if (n)
                    var T = a ? n(w, R, h, t, e, i) : n(R, w, h, e, t, i);
                if (!(T === void 0 ? R === w || o(R, w, r, n, i) : T)) {
                    I = !1;
                    break
                }
                q || (q = h == "constructor")
            }
            if (I && !q) {
                var G = e.constructor
                  , D = t.constructor;
                G != D && "constructor"in e && "constructor"in t && !(typeof G == "function" && G instanceof G && typeof D == "function" && D instanceof D) && (I = !1)
            }
            return i.delete(e),
            i.delete(t),
            I
        }
        ov.exports = kN
    }
    );
    var uv = u( (Yj, sv) => {
        var KN = At()
          , zN = $e()
          , YN = KN(zN, "DataView");
        sv.exports = YN
    }
    );
    var lv = u( ($j, cv) => {
        var $N = At()
          , QN = $e()
          , ZN = $N(QN, "Promise");
        cv.exports = ZN
    }
    );
    var dv = u( (Qj, fv) => {
        var JN = At()
          , eq = $e()
          , tq = JN(eq, "Set");
        fv.exports = tq
    }
    );
    var va = u( (Zj, pv) => {
        var rq = At()
          , nq = $e()
          , iq = rq(nq, "WeakMap");
        pv.exports = iq
    }
    );
    var Kn = u( (Jj, Iv) => {
        var ha = uv()
          , Ea = Fn()
          , ga = lv()
          , _a = dv()
          , ya = va()
          , yv = bt()
          , cr = oa()
          , vv = "[object Map]"
          , oq = "[object Object]"
          , hv = "[object Promise]"
          , Ev = "[object Set]"
          , gv = "[object WeakMap]"
          , _v = "[object DataView]"
          , aq = cr(ha)
          , sq = cr(Ea)
          , uq = cr(ga)
          , cq = cr(_a)
          , lq = cr(ya)
          , Xt = yv;
        (ha && Xt(new ha(new ArrayBuffer(1))) != _v || Ea && Xt(new Ea) != vv || ga && Xt(ga.resolve()) != hv || _a && Xt(new _a) != Ev || ya && Xt(new ya) != gv) && (Xt = function(e) {
            var t = yv(e)
              , r = t == oq ? e.constructor : void 0
              , n = r ? cr(r) : "";
            if (n)
                switch (n) {
                case aq:
                    return _v;
                case sq:
                    return vv;
                case uq:
                    return hv;
                case cq:
                    return Ev;
                case lq:
                    return gv
                }
            return t
        }
        );
        Iv.exports = Xt
    }
    );
    var wv = u( (eH, Rv) => {
        var Ia = aa()
          , fq = sa()
          , dq = gp()
          , pq = av()
          , Tv = Kn()
          , mv = Ae()
          , Ov = Un()
          , vq = jn()
          , hq = 1
          , bv = "[object Arguments]"
          , Av = "[object Array]"
          , zn = "[object Object]"
          , Eq = Object.prototype
          , Sv = Eq.hasOwnProperty;
        function gq(e, t, r, n, o, i) {
            var a = mv(e)
              , s = mv(t)
              , c = a ? Av : Tv(e)
              , f = s ? Av : Tv(t);
            c = c == bv ? zn : c,
            f = f == bv ? zn : f;
            var v = c == zn
              , p = f == zn
              , h = c == f;
            if (h && Ov(e)) {
                if (!Ov(t))
                    return !1;
                a = !0,
                v = !1
            }
            if (h && !v)
                return i || (i = new Ia),
                a || vq(e) ? fq(e, t, r, n, o, i) : dq(e, t, c, r, n, o, i);
            if (!(r & hq)) {
                var y = v && Sv.call(e, "__wrapped__")
                  , m = p && Sv.call(t, "__wrapped__");
                if (y || m) {
                    var I = y ? e.value() : e
                      , q = m ? t.value() : t;
                    return i || (i = new Ia),
                    o(I, q, r, n, i)
                }
            }
            return h ? (i || (i = new Ia),
            pq(e, t, r, n, o, i)) : !1
        }
        Rv.exports = gq
    }
    );
    var Ta = u( (tH, qv) => {
        var _q = wv()
          , Cv = Et();
        function Nv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Cv(e) && !Cv(t) ? e !== e && t !== t : _q(e, t, r, n, Nv, o)
        }
        qv.exports = Nv
    }
    );
    var xv = u( (rH, Pv) => {
        var yq = aa()
          , Iq = Ta()
          , Tq = 1
          , mq = 2;
        function Oq(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                s = r[o];
                var c = s[0]
                  , f = e[c]
                  , v = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e))
                        return !1
                } else {
                    var p = new yq;
                    if (n)
                        var h = n(f, v, c, e, t, p);
                    if (!(h === void 0 ? Iq(v, f, Tq | mq, n, p) : h))
                        return !1
                }
            }
            return !0
        }
        Pv.exports = Oq
    }
    );
    var ma = u( (nH, Lv) => {
        var bq = at();
        function Aq(e) {
            return e === e && !bq(e)
        }
        Lv.exports = Aq
    }
    );
    var Dv = u( (iH, Mv) => {
        var Sq = ma()
          , Rq = Wr();
        function wq(e) {
            for (var t = Rq(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, Sq(o)]
            }
            return t
        }
        Mv.exports = wq
    }
    );
    var Oa = u( (oH, Fv) => {
        function Cq(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Fv.exports = Cq
    }
    );
    var Xv = u( (aH, Gv) => {
        var Nq = xv()
          , qq = Dv()
          , Pq = Oa();
        function xq(e) {
            var t = qq(e);
            return t.length == 1 && t[0][2] ? Pq(t[0][0], t[0][1]) : function(r) {
                return r === e || Nq(r, e, t)
            }
        }
        Gv.exports = xq
    }
    );
    var jr = u( (sH, Vv) => {
        var Lq = bt()
          , Mq = Et()
          , Dq = "[object Symbol]";
        function Fq(e) {
            return typeof e == "symbol" || Mq(e) && Lq(e) == Dq
        }
        Vv.exports = Fq
    }
    );
    var Yn = u( (uH, Uv) => {
        var Gq = Ae()
          , Xq = jr()
          , Vq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , Uq = /^\w*$/;
        function Bq(e, t) {
            if (Gq(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || Xq(e) ? !0 : Uq.test(e) || !Vq.test(e) || t != null && e in Object(t)
        }
        Uv.exports = Bq
    }
    );
    var jv = u( (cH, Wv) => {
        var Bv = Gn()
          , Wq = "Expected a function";
        function ba(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(Wq);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (ba.Cache || Bv),
            r
        }
        ba.Cache = Bv;
        Wv.exports = ba
    }
    );
    var kv = u( (lH, Hv) => {
        var jq = jv()
          , Hq = 500;
        function kq(e) {
            var t = jq(e, function(n) {
                return r.size === Hq && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Hv.exports = kq
    }
    );
    var zv = u( (fH, Kv) => {
        var Kq = kv()
          , zq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , Yq = /\\(\\)?/g
          , $q = Kq(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(zq, function(r, n, o, i) {
                t.push(o ? i.replace(Yq, "$1") : n || r)
            }),
            t
        });
        Kv.exports = $q
    }
    );
    var Aa = u( (dH, Yv) => {
        function Qq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        Yv.exports = Qq
    }
    );
    var th = u( (pH, eh) => {
        var $v = Qt()
          , Zq = Aa()
          , Jq = Ae()
          , eP = jr()
          , tP = 1 / 0
          , Qv = $v ? $v.prototype : void 0
          , Zv = Qv ? Qv.toString : void 0;
        function Jv(e) {
            if (typeof e == "string")
                return e;
            if (Jq(e))
                return Zq(e, Jv) + "";
            if (eP(e))
                return Zv ? Zv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -tP ? "-0" : t
        }
        eh.exports = Jv
    }
    );
    var nh = u( (vH, rh) => {
        var rP = th();
        function nP(e) {
            return e == null ? "" : rP(e)
        }
        rh.exports = nP
    }
    );
    var Hr = u( (hH, ih) => {
        var iP = Ae()
          , oP = Yn()
          , aP = zv()
          , sP = nh();
        function uP(e, t) {
            return iP(e) ? e : oP(e, t) ? [e] : aP(sP(e))
        }
        ih.exports = uP
    }
    );
    var lr = u( (EH, oh) => {
        var cP = jr()
          , lP = 1 / 0;
        function fP(e) {
            if (typeof e == "string" || cP(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -lP ? "-0" : t
        }
        oh.exports = fP
    }
    );
    var $n = u( (gH, ah) => {
        var dP = Hr()
          , pP = lr();
        function vP(e, t) {
            t = dP(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[pP(t[r++])];
            return r && r == n ? e : void 0
        }
        ah.exports = vP
    }
    );
    var Qn = u( (_H, sh) => {
        var hP = $n();
        function EP(e, t, r) {
            var n = e == null ? void 0 : hP(e, t);
            return n === void 0 ? r : n
        }
        sh.exports = EP
    }
    );
    var ch = u( (yH, uh) => {
        function gP(e, t) {
            return e != null && t in Object(e)
        }
        uh.exports = gP
    }
    );
    var fh = u( (IH, lh) => {
        var _P = Hr()
          , yP = Xr()
          , IP = Ae()
          , TP = Bn()
          , mP = Wn()
          , OP = lr();
        function bP(e, t, r) {
            t = _P(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = OP(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && mP(o) && TP(a, o) && (IP(e) || yP(e)))
        }
        lh.exports = bP
    }
    );
    var ph = u( (TH, dh) => {
        var AP = ch()
          , SP = fh();
        function RP(e, t) {
            return e != null && SP(e, t, AP)
        }
        dh.exports = RP
    }
    );
    var hh = u( (mH, vh) => {
        var wP = Ta()
          , CP = Qn()
          , NP = ph()
          , qP = Yn()
          , PP = ma()
          , xP = Oa()
          , LP = lr()
          , MP = 1
          , DP = 2;
        function FP(e, t) {
            return qP(e) && PP(t) ? xP(LP(e), t) : function(r) {
                var n = CP(r, e);
                return n === void 0 && n === t ? NP(r, e) : wP(t, n, MP | DP)
            }
        }
        vh.exports = FP
    }
    );
    var Zn = u( (OH, Eh) => {
        function GP(e) {
            return e
        }
        Eh.exports = GP
    }
    );
    var Sa = u( (bH, gh) => {
        function XP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        gh.exports = XP
    }
    );
    var yh = u( (AH, _h) => {
        var VP = $n();
        function UP(e) {
            return function(t) {
                return VP(t, e)
            }
        }
        _h.exports = UP
    }
    );
    var Th = u( (SH, Ih) => {
        var BP = Sa()
          , WP = yh()
          , jP = Yn()
          , HP = lr();
        function kP(e) {
            return jP(e) ? BP(HP(e)) : WP(e)
        }
        Ih.exports = kP
    }
    );
    var St = u( (RH, mh) => {
        var KP = Xv()
          , zP = hh()
          , YP = Zn()
          , $P = Ae()
          , QP = Th();
        function ZP(e) {
            return typeof e == "function" ? e : e == null ? YP : typeof e == "object" ? $P(e) ? zP(e[0], e[1]) : KP(e) : QP(e)
        }
        mh.exports = ZP
    }
    );
    var Ra = u( (wH, Oh) => {
        var JP = St()
          , ex = Gt()
          , tx = Wr();
        function rx(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!ex(t)) {
                    var i = JP(r, 3);
                    t = tx(t),
                    r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Oh.exports = rx
    }
    );
    var wa = u( (CH, bh) => {
        function nx(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        bh.exports = nx
    }
    );
    var Sh = u( (NH, Ah) => {
        var ix = /\s/;
        function ox(e) {
            for (var t = e.length; t-- && ix.test(e.charAt(t)); )
                ;
            return t
        }
        Ah.exports = ox
    }
    );
    var wh = u( (qH, Rh) => {
        var ax = Sh()
          , sx = /^\s+/;
        function ux(e) {
            return e && e.slice(0, ax(e) + 1).replace(sx, "")
        }
        Rh.exports = ux
    }
    );
    var Jn = u( (PH, qh) => {
        var cx = wh()
          , Ch = at()
          , lx = jr()
          , Nh = 0 / 0
          , fx = /^[-+]0x[0-9a-f]+$/i
          , dx = /^0b[01]+$/i
          , px = /^0o[0-7]+$/i
          , vx = parseInt;
        function hx(e) {
            if (typeof e == "number")
                return e;
            if (lx(e))
                return Nh;
            if (Ch(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Ch(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = cx(e);
            var r = dx.test(e);
            return r || px.test(e) ? vx(e.slice(2), r ? 2 : 8) : fx.test(e) ? Nh : +e
        }
        qh.exports = hx
    }
    );
    var Lh = u( (xH, xh) => {
        var Ex = Jn()
          , Ph = 1 / 0
          , gx = 17976931348623157e292;
        function _x(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = Ex(e),
            e === Ph || e === -Ph) {
                var t = e < 0 ? -1 : 1;
                return t * gx
            }
            return e === e ? e : 0
        }
        xh.exports = _x
    }
    );
    var Ca = u( (LH, Mh) => {
        var yx = Lh();
        function Ix(e) {
            var t = yx(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Mh.exports = Ix
    }
    );
    var Fh = u( (MH, Dh) => {
        var Tx = wa()
          , mx = St()
          , Ox = Ca()
          , bx = Math.max;
        function Ax(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : Ox(r);
            return o < 0 && (o = bx(n + o, 0)),
            Tx(e, mx(t, 3), o)
        }
        Dh.exports = Ax
    }
    );
    var Na = u( (DH, Gh) => {
        var Sx = Ra()
          , Rx = Fh()
          , wx = Sx(Rx);
        Gh.exports = wx
    }
    );
    var ti = u(Pe => {
        "use strict";
        var Cx = Ke().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.withBrowser = Pe.TRANSFORM_STYLE_PREFIXED = Pe.TRANSFORM_PREFIXED = Pe.IS_BROWSER_ENV = Pe.FLEX_PREFIXED = Pe.ELEMENT_MATCHES = void 0;
        var Nx = Cx(Na())
          , Vh = typeof window < "u";
        Pe.IS_BROWSER_ENV = Vh;
        var ei = (e, t) => Vh ? e() : t;
        Pe.withBrowser = ei;
        var qx = ei( () => (0,
        Nx.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Pe.ELEMENT_MATCHES = qx;
        var Px = ei( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex");
        Pe.FLEX_PREFIXED = Px;
        var Uh = ei( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform");
        Pe.TRANSFORM_PREFIXED = Uh;
        var Xh = Uh.split("transform")[0]
          , xx = Xh ? Xh + "TransformStyle" : "transformStyle";
        Pe.TRANSFORM_STYLE_PREFIXED = xx
    }
    );
    var qa = u( (GH, kh) => {
        var Lx = 4
          , Mx = .001
          , Dx = 1e-7
          , Fx = 10
          , kr = 11
          , ri = 1 / (kr - 1)
          , Gx = typeof Float32Array == "function";
        function Bh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Wh(e, t) {
            return 3 * t - 6 * e
        }
        function jh(e) {
            return 3 * e
        }
        function ni(e, t, r) {
            return ((Bh(t, r) * e + Wh(t, r)) * e + jh(t)) * e
        }
        function Hh(e, t, r) {
            return 3 * Bh(t, r) * e * e + 2 * Wh(t, r) * e + jh(t)
        }
        function Xx(e, t, r, n, o) {
            var i, a, s = 0;
            do
                a = t + (r - t) / 2,
                i = ni(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > Dx && ++s < Fx);
            return a
        }
        function Vx(e, t, r, n) {
            for (var o = 0; o < Lx; ++o) {
                var i = Hh(t, r, n);
                if (i === 0)
                    return t;
                var a = ni(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        kh.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = Gx ? new Float32Array(kr) : new Array(kr);
            if (t !== r || n !== o)
                for (var a = 0; a < kr; ++a)
                    i[a] = ni(a * ri, t, n);
            function s(c) {
                for (var f = 0, v = 1, p = kr - 1; v !== p && i[v] <= c; ++v)
                    f += ri;
                --v;
                var h = (c - i[v]) / (i[v + 1] - i[v])
                  , y = f + h * ri
                  , m = Hh(y, t, n);
                return m >= Mx ? Vx(c, y, t, n) : m === 0 ? y : Xx(c, f, f + ri, t, n)
            }
            return function(f) {
                return t === r && n === o ? f : f === 0 ? 0 : f === 1 ? 1 : ni(s(f), r, o)
            }
        }
    }
    );
    var Pa = u($ => {
        "use strict";
        var Ux = Ke().default;
        Object.defineProperty($, "__esModule", {
            value: !0
        });
        $.bounce = OL;
        $.bouncePast = bL;
        $.easeOut = $.easeInOut = $.easeIn = $.ease = void 0;
        $.inBack = vL;
        $.inCirc = lL;
        $.inCubic = Yx;
        $.inElastic = gL;
        $.inExpo = sL;
        $.inOutBack = EL;
        $.inOutCirc = dL;
        $.inOutCubic = Qx;
        $.inOutElastic = yL;
        $.inOutExpo = cL;
        $.inOutQuad = zx;
        $.inOutQuart = eL;
        $.inOutQuint = nL;
        $.inOutSine = aL;
        $.inQuad = kx;
        $.inQuart = Zx;
        $.inQuint = tL;
        $.inSine = iL;
        $.outBack = hL;
        $.outBounce = pL;
        $.outCirc = fL;
        $.outCubic = $x;
        $.outElastic = _L;
        $.outExpo = uL;
        $.outQuad = Kx;
        $.outQuart = Jx;
        $.outQuint = rL;
        $.outSine = oL;
        $.swingFrom = TL;
        $.swingFromTo = IL;
        $.swingTo = mL;
        var ii = Ux(qa())
          , _t = 1.70158
          , Bx = (0,
        ii.default)(.25, .1, .25, 1);
        $.ease = Bx;
        var Wx = (0,
        ii.default)(.42, 0, 1, 1);
        $.easeIn = Wx;
        var jx = (0,
        ii.default)(0, 0, .58, 1);
        $.easeOut = jx;
        var Hx = (0,
        ii.default)(.42, 0, .58, 1);
        $.easeInOut = Hx;
        function kx(e) {
            return Math.pow(e, 2)
        }
        function Kx(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function zx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function Yx(e) {
            return Math.pow(e, 3)
        }
        function $x(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function Qx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function Zx(e) {
            return Math.pow(e, 4)
        }
        function Jx(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function eL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function tL(e) {
            return Math.pow(e, 5)
        }
        function rL(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function nL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function iL(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }
        function oL(e) {
            return Math.sin(e * (Math.PI / 2))
        }
        function aL(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function sL(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function uL(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function cL(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function lL(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function fL(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function dL(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function pL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function vL(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }
        function hL(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function EL(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function gL(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }
        function _L(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }
        function yL(e) {
            let t = _t
              , r = 0
              , n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }
        function IL(e) {
            let t = _t;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function TL(e) {
            let t = _t;
            return e * e * ((t + 1) * e - t)
        }
        function mL(e) {
            let t = _t;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function OL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function bL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    }
    );
    var La = u(Kr => {
        "use strict";
        var AL = Ke().default
          , SL = Lt().default;
        Object.defineProperty(Kr, "__esModule", {
            value: !0
        });
        Kr.applyEasing = CL;
        Kr.createBezierEasing = wL;
        Kr.optimizeFloat = xa;
        var Kh = SL(Pa())
          , RL = AL(qa());
        function xa(e, t=5, r=10) {
            let n = Math.pow(r, t)
              , o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }
        function wL(e) {
            return (0,
            RL.default)(...e)
        }
        function CL(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : xa(r ? t > 0 ? r(t) : t : t > 0 && e && Kh[e] ? Kh[e](t) : t)
        }
    }
    );
    var Qh = u(fr => {
        "use strict";
        Object.defineProperty(fr, "__esModule", {
            value: !0
        });
        fr.createElementState = $h;
        fr.ixElements = void 0;
        fr.mergeActionState = Ma;
        var oi = rr()
          , Yh = De()
          , {HTML_ELEMENT: UH, PLAIN_OBJECT: NL, ABSTRACT_NODE: BH, CONFIG_X_VALUE: qL, CONFIG_Y_VALUE: PL, CONFIG_Z_VALUE: xL, CONFIG_VALUE: LL, CONFIG_X_UNIT: ML, CONFIG_Y_UNIT: DL, CONFIG_Z_UNIT: FL, CONFIG_UNIT: GL} = Yh.IX2EngineConstants
          , {IX2_SESSION_STOPPED: XL, IX2_INSTANCE_ADDED: VL, IX2_ELEMENT_STATE_CHANGED: UL} = Yh.IX2EngineActionTypes
          , zh = {}
          , BL = "refState"
          , WL = (e=zh, t={}) => {
            switch (t.type) {
            case XL:
                return zh;
            case VL:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: s} = i
                      , c = e;
                    return (0,
                    oi.getIn)(c, [r, n]) !== n && (c = $h(c, n, a, r, i)),
                    Ma(c, r, s, o, i)
                }
            case UL:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return Ma(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        fr.ixElements = WL;
        function $h(e, t, r, n, o) {
            let i = r === NL ? (0,
            oi.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0,
            oi.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }
        function Ma(e, t, r, n, o) {
            let i = HL(o)
              , a = [t, BL, r];
            return (0,
            oi.mergeIn)(e, a, n, i)
        }
        var jL = [[qL, ML], [PL, DL], [xL, FL], [LL, GL]];
        function HL(e) {
            let {config: t} = e;
            return jL.reduce( (r, n) => {
                let o = n[0]
                  , i = n[1]
                  , a = t[o]
                  , s = t[i];
                return a != null && s != null && (r[i] = s),
                r
            }
            , {})
        }
    }
    );
    var Zh = u(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var kL = e => e.value;
        Se.getPluginConfig = kL;
        var KL = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Se.getPluginDuration = KL;
        var zL = e => e || {
            value: 0
        };
        Se.getPluginOrigin = zL;
        var YL = e => ({
            value: e.value
        });
        Se.getPluginDestination = YL;
        var $L = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Se.createPluginInstance = $L;
        var QL = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Se.renderPlugin = QL;
        var ZL = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Se.clearPlugin = ZL
    }
    );
    var eE = u(Re => {
        "use strict";
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.renderPlugin = Re.getPluginOrigin = Re.getPluginDuration = Re.getPluginDestination = Re.getPluginConfig = Re.createPluginInstance = Re.clearPlugin = void 0;
        var JL = e => document.querySelector(`[data-w-id="${e}"]`)
          , eM = () => window.Webflow.require("spline")
          , tM = (e, t) => e.filter(r => !t.includes(r))
          , rM = (e, t) => e.value[t];
        Re.getPluginConfig = rM;
        var nM = () => null;
        Re.getPluginDuration = nM;
        var Jh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , iM = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = tM(n, i);
                return a.length ? a.reduce( (c, f) => (c[f] = Jh[f],
                c), e) : e
            }
            return n.reduce( (i, a) => (i[a] = Jh[a],
            i), {})
        }
        ;
        Re.getPluginOrigin = iM;
        var oM = e => e.value;
        Re.getPluginDestination = oM;
        var aM = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? JL(o) : null
        }
        ;
        Re.createPluginInstance = aM;
        var sM = (e, t, r) => {
            let n = eM().getInstance(e)
              , o = r.config.target.objectId;
            if (!n || !o)
                return;
            let i = n.spline.findObjectById(o);
            if (!i)
                return;
            let {PLUGIN_SPLINE: a} = t;
            a.positionX != null && (i.position.x = a.positionX),
            a.positionY != null && (i.position.y = a.positionY),
            a.positionZ != null && (i.position.z = a.positionZ),
            a.rotationX != null && (i.rotation.x = a.rotationX),
            a.rotationY != null && (i.rotation.y = a.rotationY),
            a.rotationZ != null && (i.rotation.z = a.rotationZ),
            a.scaleX != null && (i.scale.x = a.scaleX),
            a.scaleY != null && (i.scale.y = a.scaleY),
            a.scaleZ != null && (i.scale.z = a.scaleZ)
        }
        ;
        Re.renderPlugin = sM;
        var uM = () => null;
        Re.clearPlugin = uM
    }
    );
    var rE = u(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        Te.normalizeColor = tE;
        Te.renderPlugin = void 0;
        function tE(e) {
            let t, r, n, o = 1, i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16),
                r = parseInt(a[1] + a[1], 16),
                n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16),
                r = parseInt(a.substring(2, 4), 16),
                n = parseInt(a.substring(4, 6), 16))
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10),
                o = parseFloat(a[3])
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10)
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , s = parseFloat(a[0])
                  , c = parseFloat(a[1].replace("%", "")) / 100
                  , f = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let v = (1 - Math.abs(2 * f - 1)) * c, p = v * (1 - Math.abs(s / 60 % 2 - 1)), h = f - v / 2, y, m, I;
                s >= 0 && s < 60 ? (y = v,
                m = p,
                I = 0) : s >= 60 && s < 120 ? (y = p,
                m = v,
                I = 0) : s >= 120 && s < 180 ? (y = 0,
                m = v,
                I = p) : s >= 180 && s < 240 ? (y = 0,
                m = p,
                I = v) : s >= 240 && s < 300 ? (y = p,
                m = 0,
                I = v) : (y = v,
                m = 0,
                I = p),
                t = Math.round((y + h) * 255),
                r = Math.round((m + h) * 255),
                n = Math.round((I + h) * 255)
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","), s = parseFloat(a[0]), c = parseFloat(a[1].replace("%", "")) / 100, f = parseFloat(a[2].replace("%", "")) / 100, v = (1 - Math.abs(2 * f - 1)) * c, p = v * (1 - Math.abs(s / 60 % 2 - 1)), h = f - v / 2, y, m, I;
                s >= 0 && s < 60 ? (y = v,
                m = p,
                I = 0) : s >= 60 && s < 120 ? (y = p,
                m = v,
                I = 0) : s >= 120 && s < 180 ? (y = 0,
                m = v,
                I = p) : s >= 180 && s < 240 ? (y = 0,
                m = p,
                I = v) : s >= 240 && s < 300 ? (y = p,
                m = 0,
                I = v) : (y = v,
                m = 0,
                I = p),
                t = Math.round((y + h) * 255),
                r = Math.round((m + h) * 255),
                n = Math.round((I + h) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
            {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
        var cM = (e, t) => e.value[t];
        Te.getPluginConfig = cM;
        var lM = () => null;
        Te.getPluginDuration = lM;
        var fM = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(o, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return tE(o)
        }
        ;
        Te.getPluginOrigin = fM;
        var dM = e => e.value;
        Te.getPluginDestination = dM;
        var pM = () => null;
        Te.createPluginInstance = pM;
        var vM = (e, t, r) => {
            let n = r.config.target.objectId, o = r.config.value.unit, {PLUGIN_VARIABLE: i} = t, {size: a, red: s, green: c, blue: f, alpha: v} = i, p;
            a != null && (p = a + o),
            s != null && f != null && c != null && v != null && (p = `rgba(${s}, ${c}, ${f}, ${v})`),
            p != null && document.documentElement.style.setProperty(n, p)
        }
        ;
        Te.renderPlugin = vM;
        var hM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        Te.clearPlugin = hM
    }
    );
    var nE = u(ai => {
        "use strict";
        var Ga = Lt().default
          , EM = Ke().default;
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        ai.pluginMethodMap = void 0;
        var Da = EM(tr())
          , Fa = De()
          , gM = Ga(Zh())
          , _M = Ga(eE())
          , yM = Ga(rE())
          , IM = new Map([[Fa.ActionTypeConsts.PLUGIN_LOTTIE, (0,
        Da.default)({}, gM)], [Fa.ActionTypeConsts.PLUGIN_SPLINE, (0,
        Da.default)({}, _M)], [Fa.ActionTypeConsts.PLUGIN_VARIABLE, (0,
        Da.default)({}, yM)]]);
        ai.pluginMethodMap = IM
    }
    );
    var Xa = u(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        me.getPluginOrigin = me.getPluginDuration = me.getPluginDestination = me.getPluginConfig = me.createPluginInstance = me.clearPlugin = void 0;
        me.isPluginType = mM;
        me.renderPlugin = void 0;
        var TM = ti()
          , iE = nE();
        function mM(e) {
            return iE.pluginMethodMap.has(e)
        }
        var Vt = e => t => {
            if (!TM.IS_BROWSER_ENV)
                return () => null;
            let r = iE.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , OM = Vt("getPluginConfig");
        me.getPluginConfig = OM;
        var bM = Vt("getPluginOrigin");
        me.getPluginOrigin = bM;
        var AM = Vt("getPluginDuration");
        me.getPluginDuration = AM;
        var SM = Vt("getPluginDestination");
        me.getPluginDestination = SM;
        var RM = Vt("createPluginInstance");
        me.createPluginInstance = RM;
        var wM = Vt("renderPlugin");
        me.renderPlugin = wM;
        var CM = Vt("clearPlugin");
        me.clearPlugin = CM
    }
    );
    var aE = u( (YH, oE) => {
        function NM(e, t) {
            return e == null || e !== e ? t : e
        }
        oE.exports = NM
    }
    );
    var uE = u( ($H, sE) => {
        function qM(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        sE.exports = qM
    }
    );
    var lE = u( (QH, cE) => {
        function PM(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1)
                        break
                }
                return t
            }
        }
        cE.exports = PM
    }
    );
    var dE = u( (ZH, fE) => {
        var xM = lE()
          , LM = xM();
        fE.exports = LM
    }
    );
    var Va = u( (JH, pE) => {
        var MM = dE()
          , DM = Wr();
        function FM(e, t) {
            return e && MM(e, t, DM)
        }
        pE.exports = FM
    }
    );
    var hE = u( (ek, vE) => {
        var GM = Gt();
        function XM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!GM(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        vE.exports = XM
    }
    );
    var Ua = u( (tk, EE) => {
        var VM = Va()
          , UM = hE()
          , BM = UM(VM);
        EE.exports = BM
    }
    );
    var _E = u( (rk, gE) => {
        function WM(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1,
                i) : t(r, i, a, s)
            }),
            r
        }
        gE.exports = WM
    }
    );
    var IE = u( (nk, yE) => {
        var jM = uE()
          , HM = Ua()
          , kM = St()
          , KM = _E()
          , zM = Ae();
        function YM(e, t, r) {
            var n = zM(e) ? jM : KM
              , o = arguments.length < 3;
            return n(e, kM(t, 4), r, o, HM)
        }
        yE.exports = YM
    }
    );
    var mE = u( (ik, TE) => {
        var $M = wa()
          , QM = St()
          , ZM = Ca()
          , JM = Math.max
          , eD = Math.min;
        function tD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = ZM(r),
            o = r < 0 ? JM(n + o, 0) : eD(o, n - 1)),
            $M(e, QM(t, 3), o, !0)
        }
        TE.exports = tD
    }
    );
    var bE = u( (ok, OE) => {
        var rD = Ra()
          , nD = mE()
          , iD = rD(nD);
        OE.exports = iD
    }
    );
    var SE = u(si => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = void 0;
        var oD = Object.prototype.hasOwnProperty;
        function AE(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }
        function aD(e, t) {
            if (AE(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            let r = Object.keys(e)
              , n = Object.keys(t);
            if (r.length !== n.length)
                return !1;
            for (let o = 0; o < r.length; o++)
                if (!oD.call(t, r[o]) || !AE(e[r[o]], t[r[o]]))
                    return !1;
            return !0
        }
        var sD = aD;
        si.default = sD
    }
    );
    var HE = u(ue => {
        "use strict";
        var fi = Ke().default;
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        ue.cleanupHTMLElement = o1;
        ue.clearAllStyles = i1;
        ue.clearObjectCache = AD;
        ue.getActionListProgress = s1;
        ue.getAffectedElements = za;
        ue.getComputedStyle = xD;
        ue.getDestinationValues = VD;
        ue.getElementId = CD;
        ue.getInstanceId = RD;
        ue.getInstanceOrigin = DD;
        ue.getItemConfigByKey = void 0;
        ue.getMaxDurationItemIndex = jE;
        ue.getNamespacedParameterId = l1;
        ue.getRenderType = UE;
        ue.getStyleProp = UD;
        ue.mediaQueriesEqual = d1;
        ue.observeStore = PD;
        ue.reduceListToGroup = u1;
        ue.reifyState = ND;
        ue.renderHTMLElement = BD;
        Object.defineProperty(ue, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return LE.default
            }
        });
        ue.shouldAllowMediaQuery = f1;
        ue.shouldNamespaceEventParameter = c1;
        ue.stringifyTarget = p1;
        var Rt = fi(aE())
          , ja = fi(IE())
          , Wa = fi(bE())
          , RE = rr()
          , Ut = De()
          , LE = fi(SE())
          , uD = La()
          , ct = Xa()
          , xe = ti()
          , {BACKGROUND: cD, TRANSFORM: lD, TRANSLATE_3D: fD, SCALE_3D: dD, ROTATE_X: pD, ROTATE_Y: vD, ROTATE_Z: hD, SKEW: ED, PRESERVE_3D: gD, FLEX: _D, OPACITY: ci, FILTER: zr, FONT_VARIATION_SETTINGS: Yr, WIDTH: st, HEIGHT: ut, BACKGROUND_COLOR: ME, BORDER_COLOR: yD, COLOR: ID, CHILDREN: wE, IMMEDIATE_CHILDREN: TD, SIBLINGS: CE, PARENT: mD, DISPLAY: li, WILL_CHANGE: dr, AUTO: wt, COMMA_DELIMITER: $r, COLON_DELIMITER: OD, BAR_DELIMITER: Ba, RENDER_TRANSFORM: DE, RENDER_GENERAL: Ha, RENDER_STYLE: ka, RENDER_PLUGIN: FE} = Ut.IX2EngineConstants
          , {TRANSFORM_MOVE: pr, TRANSFORM_SCALE: vr, TRANSFORM_ROTATE: hr, TRANSFORM_SKEW: Qr, STYLE_OPACITY: GE, STYLE_FILTER: Zr, STYLE_FONT_VARIATION: Jr, STYLE_SIZE: Er, STYLE_BACKGROUND_COLOR: gr, STYLE_BORDER: _r, STYLE_TEXT_COLOR: yr, GENERAL_DISPLAY: di, OBJECT_VALUE: bD} = Ut.ActionTypeConsts
          , XE = e => e.trim()
          , Ka = Object.freeze({
            [gr]: ME,
            [_r]: yD,
            [yr]: ID
        })
          , VE = Object.freeze({
            [xe.TRANSFORM_PREFIXED]: lD,
            [ME]: cD,
            [ci]: ci,
            [zr]: zr,
            [st]: st,
            [ut]: ut,
            [Yr]: Yr
        })
          , ui = new Map;
        function AD() {
            ui.clear()
        }
        var SD = 1;
        function RD() {
            return "i" + SD++
        }
        var wD = 1;
        function CD(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + wD++
        }
        function ND({events: e, actionLists: t, site: r}={}) {
            let n = (0,
            ja.default)(e, (a, s) => {
                let {eventTypeId: c} = s;
                return a[c] || (a[c] = {}),
                a[c][s.id] = s,
                a
            }
            , {})
              , o = r && r.mediaQueries
              , i = [];
            return o ? i = o.map(a => a.key) : (o = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var qD = (e, t) => e === t;
        function PD({store: e, select: t, onChange: r, comparator: n=qD}) {
            let {getState: o, subscribe: i} = e
              , a = i(c)
              , s = t(o());
            function c() {
                let f = t(o());
                if (f == null) {
                    a();
                    return
                }
                n(f, s) || (s = f,
                r(s, e))
            }
            return a
        }
        function NE(e) {
            let t = typeof e;
            if (t === "string")
                return {
                    id: e
                };
            if (e != null && t === "object") {
                let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s} = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }
        function za({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
            var i, a, s;
            if (!o)
                throw new Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce( (F, X) => F.concat(za({
                    config: {
                        target: X
                    },
                    event: t,
                    eventTarget: r,
                    elementRoot: n,
                    elementApi: o
                })), []);
            let {getValidDocument: f, getQuerySelector: v, queryDocument: p, getChildElements: h, getSiblingElements: y, matchSelector: m, elementContains: I, isSiblingNode: q} = o
              , {target: R} = e;
            if (!R)
                return [];
            let {id: w, objectId: T, selector: G, selectorGuids: D, appliesTo: P, useEventTarget: V} = NE(R);
            if (T)
                return [ui.has(T) ? ui.get(T) : ui.set(T, {}).get(T)];
            if (P === Ut.EventAppliesTo.PAGE) {
                let F = f(w);
                return F ? [F] : []
            }
            let W = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[w || G] || {}, J = !!(W.id || W.selector), K, M, g, x = t && v(NE(t.target));
            if (J ? (K = W.limitAffectedElements,
            M = x,
            g = v(W)) : M = g = v({
                id: w,
                selector: G,
                selectorGuids: D
            }),
            t && V) {
                let F = r && (g || V === !0) ? [r] : p(x);
                if (g) {
                    if (V === mD)
                        return p(g).filter(X => F.some(H => I(X, H)));
                    if (V === wE)
                        return p(g).filter(X => F.some(H => I(H, X)));
                    if (V === CE)
                        return p(g).filter(X => F.some(H => q(H, X)))
                }
                return F
            }
            return M == null || g == null ? [] : xe.IS_BROWSER_ENV && n ? p(g).filter(F => n.contains(F)) : K === wE ? p(M, g) : K === TD ? h(p(M)).filter(m(g)) : K === CE ? y(p(M)).filter(m(g)) : p(g)
        }
        function xD({element: e, actionItem: t}) {
            if (!xe.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: r} = t;
            switch (r) {
            case Er:
            case gr:
            case _r:
            case yr:
            case di:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        var qE = /px/
          , LD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = WD[n.type]),
        r), e || {})
          , MD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = jD[n.type] || n.defaultValue || 0),
        r), e || {});
        function DD(e, t={}, r={}, n, o) {
            let {getStyle: i} = o
              , {actionTypeId: a} = n;
            if ((0,
            ct.isPluginType)(a))
                return (0,
                ct.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
            case pr:
            case vr:
            case hr:
            case Qr:
                return t[n.actionTypeId] || Ya[n.actionTypeId];
            case Zr:
                return LD(t[n.actionTypeId], n.config.filters);
            case Jr:
                return MD(t[n.actionTypeId], n.config.fontVariations);
            case GE:
                return {
                    value: (0,
                    Rt.default)(parseFloat(i(e, ci)), 1)
                };
            case Er:
                {
                    let s = i(e, st), c = i(e, ut), f, v;
                    return n.config.widthUnit === wt ? f = qE.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
                    Rt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === wt ? v = qE.test(c) ? parseFloat(c) : parseFloat(r.height) : v = (0,
                    Rt.default)(parseFloat(c), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: v
                    }
                }
            case gr:
            case _r:
            case yr:
                return t1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: i
                });
            case di:
                return {
                    value: (0,
                    Rt.default)(i(e, li), r.display)
                };
            case bD:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        var FD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , GD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , XD = (e, t, r) => {
            if ((0,
            ct.isPluginType)(e))
                return (0,
                ct.getPluginConfig)(e)(r, t);
            switch (e) {
            case Zr:
                {
                    let n = (0,
                    Wa.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case Jr:
                {
                    let n = (0,
                    Wa.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        ue.getItemConfigByKey = XD;
        function VD({element: e, actionItem: t, elementApi: r}) {
            if ((0,
            ct.isPluginType)(t.actionTypeId))
                return (0,
                ct.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case pr:
            case vr:
            case hr:
            case Qr:
                {
                    let {xValue: n, yValue: o, zValue: i} = t.config;
                    return {
                        xValue: n,
                        yValue: o,
                        zValue: i
                    }
                }
            case Er:
                {
                    let {getStyle: n, setStyle: o, getProperty: i} = r
                      , {widthUnit: a, heightUnit: s} = t.config
                      , {widthValue: c, heightValue: f} = t.config;
                    if (!xe.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: f
                        };
                    if (a === wt) {
                        let v = n(e, st);
                        o(e, st, ""),
                        c = i(e, "offsetWidth"),
                        o(e, st, v)
                    }
                    if (s === wt) {
                        let v = n(e, ut);
                        o(e, ut, ""),
                        f = i(e, "offsetHeight"),
                        o(e, ut, v)
                    }
                    return {
                        widthValue: c,
                        heightValue: f
                    }
                }
            case gr:
            case _r:
            case yr:
                {
                    let {rValue: n, gValue: o, bValue: i, aValue: a} = t.config;
                    return {
                        rValue: n,
                        gValue: o,
                        bValue: i,
                        aValue: a
                    }
                }
            case Zr:
                return t.config.filters.reduce(FD, {});
            case Jr:
                return t.config.fontVariations.reduce(GD, {});
            default:
                {
                    let {value: n} = t.config;
                    return {
                        value: n
                    }
                }
            }
        }
        function UE(e) {
            if (/^TRANSFORM_/.test(e))
                return DE;
            if (/^STYLE_/.test(e))
                return ka;
            if (/^GENERAL_/.test(e))
                return Ha;
            if (/^PLUGIN_/.test(e))
                return FE
        }
        function UD(e, t) {
            return e === ka ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function BD(e, t, r, n, o, i, a, s, c) {
            switch (s) {
            case DE:
                return KD(e, t, r, o, a);
            case ka:
                return r1(e, t, r, o, i, a);
            case Ha:
                return n1(e, o, a);
            case FE:
                {
                    let {actionTypeId: f} = o;
                    if ((0,
                    ct.isPluginType)(f))
                        return (0,
                        ct.renderPlugin)(f)(c, t, o)
                }
            }
        }
        var Ya = {
            [pr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [vr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [hr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , WD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , jD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , HD = (e, t) => {
            let r = (0,
            Wa.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , kD = Object.keys(Ya);
        function KD(e, t, r, n, o) {
            let i = kD.map(s => {
                let c = Ya[s]
                  , {xValue: f=c.xValue, yValue: v=c.yValue, zValue: p=c.zValue, xUnit: h="", yUnit: y="", zUnit: m=""} = t[s] || {};
                switch (s) {
                case pr:
                    return `${fD}(${f}${h}, ${v}${y}, ${p}${m})`;
                case vr:
                    return `${dD}(${f}${h}, ${v}${y}, ${p}${m})`;
                case hr:
                    return `${pD}(${f}${h}) ${vD}(${v}${y}) ${hD}(${p}${m})`;
                case Qr:
                    return `${ED}(${f}${h}, ${v}${y})`;
                default:
                    return ""
                }
            }
            ).join(" ")
              , {setStyle: a} = o;
            Bt(e, xe.TRANSFORM_PREFIXED, o),
            a(e, xe.TRANSFORM_PREFIXED, i),
            $D(n, r) && a(e, xe.TRANSFORM_STYLE_PREFIXED, gD)
        }
        function zD(e, t, r, n) {
            let o = (0,
            ja.default)(t, (a, s, c) => `${a} ${c}(${s}${HD(c, r)})`, "")
              , {setStyle: i} = n;
            Bt(e, zr, n),
            i(e, zr, o)
        }
        function YD(e, t, r, n) {
            let o = (0,
            ja.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`),
            a), []).join(", ")
              , {setStyle: i} = n;
            Bt(e, Yr, n),
            i(e, Yr, o)
        }
        function $D({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
            return e === pr && n !== void 0 || e === vr && n !== void 0 || e === hr && (t !== void 0 || r !== void 0)
        }
        var QD = "\\(([^)]+)\\)"
          , ZD = /^rgb/
          , JD = RegExp(`rgba?${QD}`);
        function e1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }
        function t1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
            let o = Ka[t]
              , i = n(e, o)
              , a = ZD.test(i) ? i : r[o]
              , s = e1(JD, a).split($r);
            return {
                rValue: (0,
                Rt.default)(parseInt(s[0], 10), 255),
                gValue: (0,
                Rt.default)(parseInt(s[1], 10), 255),
                bValue: (0,
                Rt.default)(parseInt(s[2], 10), 255),
                aValue: (0,
                Rt.default)(parseFloat(s[3]), 1)
            }
        }
        function r1(e, t, r, n, o, i) {
            let {setStyle: a} = i;
            switch (n.actionTypeId) {
            case Er:
                {
                    let {widthUnit: s="", heightUnit: c=""} = n.config
                      , {widthValue: f, heightValue: v} = r;
                    f !== void 0 && (s === wt && (s = "px"),
                    Bt(e, st, i),
                    a(e, st, f + s)),
                    v !== void 0 && (c === wt && (c = "px"),
                    Bt(e, ut, i),
                    a(e, ut, v + c));
                    break
                }
            case Zr:
                {
                    zD(e, r, n.config, i);
                    break
                }
            case Jr:
                {
                    YD(e, r, n.config, i);
                    break
                }
            case gr:
            case _r:
            case yr:
                {
                    let s = Ka[n.actionTypeId]
                      , c = Math.round(r.rValue)
                      , f = Math.round(r.gValue)
                      , v = Math.round(r.bValue)
                      , p = r.aValue;
                    Bt(e, s, i),
                    a(e, s, p >= 1 ? `rgb(${c},${f},${v})` : `rgba(${c},${f},${v},${p})`);
                    break
                }
            default:
                {
                    let {unit: s=""} = n.config;
                    Bt(e, o, i),
                    a(e, o, r.value + s);
                    break
                }
            }
        }
        function n1(e, t, r) {
            let {setStyle: n} = r;
            switch (t.actionTypeId) {
            case di:
                {
                    let {value: o} = t.config;
                    o === _D && xe.IS_BROWSER_ENV ? n(e, li, xe.FLEX_PREFIXED) : n(e, li, o);
                    return
                }
            }
        }
        function Bt(e, t, r) {
            if (!xe.IS_BROWSER_ENV)
                return;
            let n = VE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, dr);
            if (!a) {
                i(e, dr, n);
                return
            }
            let s = a.split($r).map(XE);
            s.indexOf(n) === -1 && i(e, dr, s.concat(n).join($r))
        }
        function BE(e, t, r) {
            if (!xe.IS_BROWSER_ENV)
                return;
            let n = VE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, dr);
            !a || a.indexOf(n) === -1 || i(e, dr, a.split($r).map(XE).filter(s => s !== n).join($r))
        }
        function i1({store: e, elementApi: t}) {
            let {ixData: r} = e.getState()
              , {events: n={}, actionLists: o={}} = r;
            Object.keys(n).forEach(i => {
                let a = n[i]
                  , {config: s} = a.action
                  , {actionListId: c} = s
                  , f = o[c];
                f && PE({
                    actionList: f,
                    event: a,
                    elementApi: t
                })
            }
            ),
            Object.keys(o).forEach(i => {
                PE({
                    actionList: o[i],
                    elementApi: t
                })
            }
            )
        }
        function PE({actionList: e={}, event: t, elementApi: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e;
            n && n.forEach(i => {
                xE({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }
            ),
            o && o.forEach(i => {
                let {continuousActionGroups: a} = i;
                a.forEach(s => {
                    xE({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                }
                )
            }
            )
        }
        function xE({actionGroup: e, event: t, elementApi: r}) {
            let {actionItems: n} = e;
            n.forEach(o => {
                let {actionTypeId: i, config: a} = o, s;
                (0,
                ct.isPluginType)(i) ? s = c => (0,
                ct.clearPlugin)(i)(c, o) : s = WE({
                    effect: a1,
                    actionTypeId: i,
                    elementApi: r
                }),
                za({
                    config: a,
                    event: t,
                    elementApi: r
                }).forEach(s)
            }
            )
        }
        function o1(e, t, r) {
            let {setStyle: n, getStyle: o} = r
              , {actionTypeId: i} = t;
            if (i === Er) {
                let {config: a} = t;
                a.widthUnit === wt && n(e, st, ""),
                a.heightUnit === wt && n(e, ut, "")
            }
            o(e, dr) && WE({
                effect: BE,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var WE = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case pr:
            case vr:
            case hr:
            case Qr:
                e(n, xe.TRANSFORM_PREFIXED, r);
                break;
            case Zr:
                e(n, zr, r);
                break;
            case Jr:
                e(n, Yr, r);
                break;
            case GE:
                e(n, ci, r);
                break;
            case Er:
                e(n, st, r),
                e(n, ut, r);
                break;
            case gr:
            case _r:
            case yr:
                e(n, Ka[t], r);
                break;
            case di:
                e(n, li, r);
                break
            }
        }
        ;
        function a1(e, t, r) {
            let {setStyle: n} = r;
            BE(e, t, r),
            n(e, t, ""),
            t === xe.TRANSFORM_PREFIXED && n(e, xe.TRANSFORM_STYLE_PREFIXED, "")
        }
        function jE(e) {
            let t = 0
              , r = 0;
            return e.forEach( (n, o) => {
                let {config: i} = n
                  , a = i.delay + i.duration;
                a >= t && (t = a,
                r = o)
            }
            ),
            r
        }
        function s1(e, t) {
            let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
              , {actionItem: o, verboseTimeElapsed: i=0} = t
              , a = 0
              , s = 0;
            return r.forEach( (c, f) => {
                if (n && f === 0)
                    return;
                let {actionItems: v} = c
                  , p = v[jE(v)]
                  , {config: h, actionTypeId: y} = p;
                o.id === p.id && (s = a + i);
                let m = UE(y) === Ha ? 0 : h.duration;
                a += h.delay + m
            }
            ),
            a > 0 ? (0,
            uD.optimizeFloat)(s / a) : 0
        }
        function u1({actionList: e, actionItemId: t, rawData: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e
              , i = []
              , a = s => (i.push((0,
            RE.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })),
            s.id === t);
            return n && n.some( ({actionItems: s}) => s.some(a)),
            o && o.some(s => {
                let {continuousActionGroups: c} = s;
                return c.some( ({actionItems: f}) => f.some(a))
            }
            ),
            (0,
            RE.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }
        function c1(e, {basedOn: t}) {
            return e === Ut.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ut.EventBasedOn.ELEMENT || t == null) || e === Ut.EventTypeConsts.MOUSE_MOVE && t === Ut.EventBasedOn.ELEMENT
        }
        function l1(e, t) {
            return e + OD + t
        }
        function f1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }
        function d1(e, t) {
            return (0,
            LE.default)(e && e.sort(), t && t.sort())
        }
        function p1(e) {
            if (typeof e == "string")
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + Ba + e.objectId;
            if (e.objectId)
                return e.objectId;
            let {id: t="", selector: r="", useEventTarget: n=""} = e;
            return t + Ba + r + Ba + n
        }
    }
    );
    var Wt = u(Le => {
        "use strict";
        var Ir = Lt().default;
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        Le.IX2VanillaUtils = Le.IX2VanillaPlugins = Le.IX2ElementsReducer = Le.IX2Easings = Le.IX2EasingUtils = Le.IX2BrowserSupport = void 0;
        var v1 = Ir(ti());
        Le.IX2BrowserSupport = v1;
        var h1 = Ir(Pa());
        Le.IX2Easings = h1;
        var E1 = Ir(La());
        Le.IX2EasingUtils = E1;
        var g1 = Ir(Qh());
        Le.IX2ElementsReducer = g1;
        var _1 = Ir(Xa());
        Le.IX2VanillaPlugins = _1;
        var y1 = Ir(HE());
        Le.IX2VanillaUtils = y1
    }
    );
    var YE = u(vi => {
        "use strict";
        Object.defineProperty(vi, "__esModule", {
            value: !0
        });
        vi.ixInstances = void 0;
        var kE = De()
          , KE = Wt()
          , Tr = rr()
          , {IX2_RAW_DATA_IMPORTED: I1, IX2_SESSION_STOPPED: T1, IX2_INSTANCE_ADDED: m1, IX2_INSTANCE_STARTED: O1, IX2_INSTANCE_REMOVED: b1, IX2_ANIMATION_FRAME_CHANGED: A1} = kE.IX2EngineActionTypes
          , {optimizeFloat: pi, applyEasing: zE, createBezierEasing: S1} = KE.IX2EasingUtils
          , {RENDER_GENERAL: R1} = kE.IX2EngineConstants
          , {getItemConfigByKey: $a, getRenderType: w1, getStyleProp: C1} = KE.IX2VanillaUtils
          , N1 = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: f, skipMotion: v, skipToValue: p} = e
              , {parameters: h} = t.payload
              , y = Math.max(1 - a, .01)
              , m = h[n];
            m == null && (y = 1,
            m = s);
            let I = Math.max(m, 0) || 0
              , q = pi(I - r)
              , R = v ? p : pi(r + q * y)
              , w = R * 100;
            if (R === r && e.current)
                return e;
            let T, G, D, P;
            for (let B = 0, {length: W} = o; B < W; B++) {
                let {keyframe: J, actionItems: K} = o[B];
                if (B === 0 && (T = K[0]),
                w >= J) {
                    T = K[0];
                    let M = o[B + 1]
                      , g = M && w !== J;
                    G = g ? M.actionItems[0] : null,
                    g && (D = J / 100,
                    P = (M.keyframe - J) / 100)
                }
            }
            let V = {};
            if (T && !G)
                for (let B = 0, {length: W} = i; B < W; B++) {
                    let J = i[B];
                    V[J] = $a(c, J, T.config)
                }
            else if (T && G && D !== void 0 && P !== void 0) {
                let B = (R - D) / P
                  , W = T.config.easing
                  , J = zE(W, B, f);
                for (let K = 0, {length: M} = i; K < M; K++) {
                    let g = i[K]
                      , x = $a(c, g, T.config)
                      , H = ($a(c, g, G.config) - x) * J + x;
                    V[g] = H
                }
            }
            return (0,
            Tr.merge)(e, {
                position: R,
                current: V
            })
        }
          , q1 = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: f, destinationKeys: v, pluginDuration: p, instanceDelay: h, customEasingFn: y, skipMotion: m} = e
              , I = c.config.easing
              , {duration: q, delay: R} = c.config;
            p != null && (q = p),
            R = h ?? R,
            a === R1 ? q = 0 : (i || m) && (q = R = 0);
            let {now: w} = t.payload;
            if (r && n) {
                let T = w - (o + R);
                if (s) {
                    let B = w - o
                      , W = q + R
                      , J = pi(Math.min(Math.max(0, B / W), 1));
                    e = (0,
                    Tr.set)(e, "verboseTimeElapsed", W * J)
                }
                if (T < 0)
                    return e;
                let G = pi(Math.min(Math.max(0, T / q), 1))
                  , D = zE(I, G, y)
                  , P = {}
                  , V = null;
                return v.length && (V = v.reduce( (B, W) => {
                    let J = f[W]
                      , K = parseFloat(n[W]) || 0
                      , g = (parseFloat(J) - K) * D + K;
                    return B[W] = g,
                    B
                }
                , {})),
                P.current = V,
                P.position = G,
                G === 1 && (P.active = !1,
                P.complete = !0),
                (0,
                Tr.merge)(e, P)
            }
            return e
        }
          , P1 = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case I1:
                return t.payload.ixInstances || Object.freeze({});
            case T1:
                return Object.freeze({});
            case m1:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: f, isCarrier: v, origin: p, destination: h, immediate: y, verbose: m, continuous: I, parameterId: q, actionGroups: R, smoothing: w, restingValue: T, pluginInstance: G, pluginDuration: D, instanceDelay: P, skipMotion: V, skipToValue: B} = t.payload
                      , {actionTypeId: W} = o
                      , J = w1(W)
                      , K = C1(J, W)
                      , M = Object.keys(h).filter(x => h[x] != null && typeof h[x] != "string")
                      , {easing: g} = o.config;
                    return (0,
                    Tr.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: h,
                        destinationKeys: M,
                        immediate: y,
                        verbose: m,
                        current: null,
                        actionItem: o,
                        actionTypeId: W,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: f,
                        renderType: J,
                        isCarrier: v,
                        styleProp: K,
                        continuous: I,
                        parameterId: q,
                        actionGroups: R,
                        smoothing: w,
                        restingValue: T,
                        pluginInstance: G,
                        pluginDuration: D,
                        instanceDelay: P,
                        skipMotion: V,
                        skipToValue: B,
                        customEasingFn: Array.isArray(g) && g.length === 4 ? S1(g) : void 0
                    })
                }
            case O1:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    Tr.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case b1:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let s = o[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case A1:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , s = e[a]
                          , c = s.continuous ? N1 : q1;
                        r = (0,
                        Tr.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
        ;
        vi.ixInstances = P1
    }
    );
    var $E = u(hi => {
        "use strict";
        Object.defineProperty(hi, "__esModule", {
            value: !0
        });
        hi.ixParameters = void 0;
        var x1 = De()
          , {IX2_RAW_DATA_IMPORTED: L1, IX2_SESSION_STOPPED: M1, IX2_PARAMETER_CHANGED: D1} = x1.IX2EngineActionTypes
          , F1 = (e={}, t) => {
            switch (t.type) {
            case L1:
                return t.payload.ixParameters || {};
            case M1:
                return {};
            case D1:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
        ;
        hi.ixParameters = F1
    }
    );
    var QE = u(Ei => {
        "use strict";
        Object.defineProperty(Ei, "__esModule", {
            value: !0
        });
        Ei.default = void 0;
        var G1 = Yo()
          , X1 = hf()
          , V1 = Lf()
          , U1 = Df()
          , B1 = Wt()
          , W1 = YE()
          , j1 = $E()
          , {ixElements: H1} = B1.IX2ElementsReducer
          , k1 = (0,
        G1.combineReducers)({
            ixData: X1.ixData,
            ixRequest: V1.ixRequest,
            ixSession: U1.ixSession,
            ixElements: H1,
            ixInstances: W1.ixInstances,
            ixParameters: j1.ixParameters
        });
        Ei.default = k1
    }
    );
    var ZE = u( (dk, en) => {
        function K1(e, t) {
            if (e == null)
                return {};
            var r = {}, n = Object.keys(e), o, i;
            for (i = 0; i < n.length; i++)
                o = n[i],
                !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        en.exports = K1,
        en.exports.__esModule = !0,
        en.exports.default = en.exports
    }
    );
    var eg = u( (pk, JE) => {
        var z1 = bt()
          , Y1 = Ae()
          , $1 = Et()
          , Q1 = "[object String]";
        function Z1(e) {
            return typeof e == "string" || !Y1(e) && $1(e) && z1(e) == Q1
        }
        JE.exports = Z1
    }
    );
    var rg = u( (vk, tg) => {
        var J1 = Sa()
          , e2 = J1("length");
        tg.exports = e2
    }
    );
    var ig = u( (hk, ng) => {
        var t2 = "\\ud800-\\udfff"
          , r2 = "\\u0300-\\u036f"
          , n2 = "\\ufe20-\\ufe2f"
          , i2 = "\\u20d0-\\u20ff"
          , o2 = r2 + n2 + i2
          , a2 = "\\ufe0e\\ufe0f"
          , s2 = "\\u200d"
          , u2 = RegExp("[" + s2 + t2 + o2 + a2 + "]");
        function c2(e) {
            return u2.test(e)
        }
        ng.exports = c2
    }
    );
    var pg = u( (Ek, dg) => {
        var ag = "\\ud800-\\udfff"
          , l2 = "\\u0300-\\u036f"
          , f2 = "\\ufe20-\\ufe2f"
          , d2 = "\\u20d0-\\u20ff"
          , p2 = l2 + f2 + d2
          , v2 = "\\ufe0e\\ufe0f"
          , h2 = "[" + ag + "]"
          , Qa = "[" + p2 + "]"
          , Za = "\\ud83c[\\udffb-\\udfff]"
          , E2 = "(?:" + Qa + "|" + Za + ")"
          , sg = "[^" + ag + "]"
          , ug = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , cg = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , g2 = "\\u200d"
          , lg = E2 + "?"
          , fg = "[" + v2 + "]?"
          , _2 = "(?:" + g2 + "(?:" + [sg, ug, cg].join("|") + ")" + fg + lg + ")*"
          , y2 = fg + lg + _2
          , I2 = "(?:" + [sg + Qa + "?", Qa, ug, cg, h2].join("|") + ")"
          , og = RegExp(Za + "(?=" + Za + ")|" + I2 + y2, "g");
        function T2(e) {
            for (var t = og.lastIndex = 0; og.test(e); )
                ++t;
            return t
        }
        dg.exports = T2
    }
    );
    var hg = u( (gk, vg) => {
        var m2 = rg()
          , O2 = ig()
          , b2 = pg();
        function A2(e) {
            return O2(e) ? b2(e) : m2(e)
        }
        vg.exports = A2
    }
    );
    var gg = u( (_k, Eg) => {
        var S2 = kn()
          , R2 = Kn()
          , w2 = Gt()
          , C2 = eg()
          , N2 = hg()
          , q2 = "[object Map]"
          , P2 = "[object Set]";
        function x2(e) {
            if (e == null)
                return 0;
            if (w2(e))
                return C2(e) ? N2(e) : e.length;
            var t = R2(e);
            return t == q2 || t == P2 ? e.size : S2(e).length
        }
        Eg.exports = x2
    }
    );
    var yg = u( (yk, _g) => {
        var L2 = "Expected a function";
        function M2(e) {
            if (typeof e != "function")
                throw new TypeError(L2);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        _g.exports = M2
    }
    );
    var Ja = u( (Ik, Ig) => {
        var D2 = At()
          , F2 = function() {
            try {
                var e = D2(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Ig.exports = F2
    }
    );
    var es = u( (Tk, mg) => {
        var Tg = Ja();
        function G2(e, t, r) {
            t == "__proto__" && Tg ? Tg(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        mg.exports = G2
    }
    );
    var bg = u( (mk, Og) => {
        var X2 = es()
          , V2 = Dn()
          , U2 = Object.prototype
          , B2 = U2.hasOwnProperty;
        function W2(e, t, r) {
            var n = e[t];
            (!(B2.call(e, t) && V2(n, r)) || r === void 0 && !(t in e)) && X2(e, t, r)
        }
        Og.exports = W2
    }
    );
    var Rg = u( (Ok, Sg) => {
        var j2 = bg()
          , H2 = Hr()
          , k2 = Bn()
          , Ag = at()
          , K2 = lr();
        function z2(e, t, r, n) {
            if (!Ag(e))
                return e;
            t = H2(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var c = K2(t[o])
                  , f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (o != a) {
                    var v = s[c];
                    f = n ? n(v, c, s) : void 0,
                    f === void 0 && (f = Ag(v) ? v : k2(t[o + 1]) ? [] : {})
                }
                j2(s, c, f),
                s = s[c]
            }
            return e
        }
        Sg.exports = z2
    }
    );
    var Cg = u( (bk, wg) => {
        var Y2 = $n()
          , $2 = Rg()
          , Q2 = Hr();
        function Z2(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , s = Y2(e, a);
                r(s, a) && $2(i, Q2(a, e), s)
            }
            return i
        }
        wg.exports = Z2
    }
    );
    var qg = u( (Ak, Ng) => {
        var J2 = Vn()
          , eF = Do()
          , tF = fa()
          , rF = la()
          , nF = Object.getOwnPropertySymbols
          , iF = nF ? function(e) {
            for (var t = []; e; )
                J2(t, tF(e)),
                e = eF(e);
            return t
        }
        : rF;
        Ng.exports = iF
    }
    );
    var xg = u( (Sk, Pg) => {
        function oF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        Pg.exports = oF
    }
    );
    var Mg = u( (Rk, Lg) => {
        var aF = at()
          , sF = Hn()
          , uF = xg()
          , cF = Object.prototype
          , lF = cF.hasOwnProperty;
        function fF(e) {
            if (!aF(e))
                return uF(e);
            var t = sF(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !lF.call(e, n)) || r.push(n);
            return r
        }
        Lg.exports = fF
    }
    );
    var Fg = u( (wk, Dg) => {
        var dF = pa()
          , pF = Mg()
          , vF = Gt();
        function hF(e) {
            return vF(e) ? dF(e, !0) : pF(e)
        }
        Dg.exports = hF
    }
    );
    var Xg = u( (Ck, Gg) => {
        var EF = ca()
          , gF = qg()
          , _F = Fg();
        function yF(e) {
            return EF(e, _F, gF)
        }
        Gg.exports = yF
    }
    );
    var Ug = u( (Nk, Vg) => {
        var IF = Aa()
          , TF = St()
          , mF = Cg()
          , OF = Xg();
        function bF(e, t) {
            if (e == null)
                return {};
            var r = IF(OF(e), function(n) {
                return [n]
            });
            return t = TF(t),
            mF(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        Vg.exports = bF
    }
    );
    var Wg = u( (qk, Bg) => {
        var AF = St()
          , SF = yg()
          , RF = Ug();
        function wF(e, t) {
            return RF(e, SF(AF(t)))
        }
        Bg.exports = wF
    }
    );
    var Hg = u( (Pk, jg) => {
        var CF = kn()
          , NF = Kn()
          , qF = Xr()
          , PF = Ae()
          , xF = Gt()
          , LF = Un()
          , MF = Hn()
          , DF = jn()
          , FF = "[object Map]"
          , GF = "[object Set]"
          , XF = Object.prototype
          , VF = XF.hasOwnProperty;
        function UF(e) {
            if (e == null)
                return !0;
            if (xF(e) && (PF(e) || typeof e == "string" || typeof e.splice == "function" || LF(e) || DF(e) || qF(e)))
                return !e.length;
            var t = NF(e);
            if (t == FF || t == GF)
                return !e.size;
            if (MF(e))
                return !CF(e).length;
            for (var r in e)
                if (VF.call(e, r))
                    return !1;
            return !0
        }
        jg.exports = UF
    }
    );
    var Kg = u( (xk, kg) => {
        var BF = es()
          , WF = Va()
          , jF = St();
        function HF(e, t) {
            var r = {};
            return t = jF(t, 3),
            WF(e, function(n, o, i) {
                BF(r, o, t(n, o, i))
            }),
            r
        }
        kg.exports = HF
    }
    );
    var Yg = u( (Lk, zg) => {
        function kF(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        zg.exports = kF
    }
    );
    var Qg = u( (Mk, $g) => {
        var KF = Zn();
        function zF(e) {
            return typeof e == "function" ? e : KF
        }
        $g.exports = zF
    }
    );
    var Jg = u( (Dk, Zg) => {
        var YF = Yg()
          , $F = Ua()
          , QF = Qg()
          , ZF = Ae();
        function JF(e, t) {
            var r = ZF(e) ? YF : $F;
            return r(e, QF(t))
        }
        Zg.exports = JF
    }
    );
    var t_ = u( (Fk, e_) => {
        var eG = $e()
          , tG = function() {
            return eG.Date.now()
        };
        e_.exports = tG
    }
    );
    var i_ = u( (Gk, n_) => {
        var rG = at()
          , ts = t_()
          , r_ = Jn()
          , nG = "Expected a function"
          , iG = Math.max
          , oG = Math.min;
        function aG(e, t, r) {
            var n, o, i, a, s, c, f = 0, v = !1, p = !1, h = !0;
            if (typeof e != "function")
                throw new TypeError(nG);
            t = r_(t) || 0,
            rG(r) && (v = !!r.leading,
            p = "maxWait"in r,
            i = p ? iG(r_(r.maxWait) || 0, t) : i,
            h = "trailing"in r ? !!r.trailing : h);
            function y(P) {
                var V = n
                  , B = o;
                return n = o = void 0,
                f = P,
                a = e.apply(B, V),
                a
            }
            function m(P) {
                return f = P,
                s = setTimeout(R, t),
                v ? y(P) : a
            }
            function I(P) {
                var V = P - c
                  , B = P - f
                  , W = t - V;
                return p ? oG(W, i - B) : W
            }
            function q(P) {
                var V = P - c
                  , B = P - f;
                return c === void 0 || V >= t || V < 0 || p && B >= i
            }
            function R() {
                var P = ts();
                if (q(P))
                    return w(P);
                s = setTimeout(R, I(P))
            }
            function w(P) {
                return s = void 0,
                h && n ? y(P) : (n = o = void 0,
                a)
            }
            function T() {
                s !== void 0 && clearTimeout(s),
                f = 0,
                n = c = o = s = void 0
            }
            function G() {
                return s === void 0 ? a : w(ts())
            }
            function D() {
                var P = ts()
                  , V = q(P);
                if (n = arguments,
                o = this,
                c = P,
                V) {
                    if (s === void 0)
                        return m(c);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(R, t),
                        y(c)
                }
                return s === void 0 && (s = setTimeout(R, t)),
                a
            }
            return D.cancel = T,
            D.flush = G,
            D
        }
        n_.exports = aG
    }
    );
    var a_ = u( (Xk, o_) => {
        var sG = i_()
          , uG = at()
          , cG = "Expected a function";
        function lG(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(cG);
            return uG(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            sG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        o_.exports = lG
    }
    );
    var gi = u(Z => {
        "use strict";
        var fG = Ke().default;
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        Z.viewportWidthChanged = Z.testFrameRendered = Z.stopRequested = Z.sessionStopped = Z.sessionStarted = Z.sessionInitialized = Z.rawDataImported = Z.previewRequested = Z.playbackRequested = Z.parameterChanged = Z.mediaQueriesDefined = Z.instanceStarted = Z.instanceRemoved = Z.instanceAdded = Z.eventStateChanged = Z.eventListenerAdded = Z.elementStateChanged = Z.clearRequested = Z.animationFrameChanged = Z.actionListPlaybackChanged = void 0;
        var s_ = fG(tr())
          , u_ = De()
          , dG = Wt()
          , {IX2_RAW_DATA_IMPORTED: pG, IX2_SESSION_INITIALIZED: vG, IX2_SESSION_STARTED: hG, IX2_SESSION_STOPPED: EG, IX2_PREVIEW_REQUESTED: gG, IX2_PLAYBACK_REQUESTED: _G, IX2_STOP_REQUESTED: yG, IX2_CLEAR_REQUESTED: IG, IX2_EVENT_LISTENER_ADDED: TG, IX2_TEST_FRAME_RENDERED: mG, IX2_EVENT_STATE_CHANGED: OG, IX2_ANIMATION_FRAME_CHANGED: bG, IX2_PARAMETER_CHANGED: AG, IX2_INSTANCE_ADDED: SG, IX2_INSTANCE_STARTED: RG, IX2_INSTANCE_REMOVED: wG, IX2_ELEMENT_STATE_CHANGED: CG, IX2_ACTION_LIST_PLAYBACK_CHANGED: NG, IX2_VIEWPORT_WIDTH_CHANGED: qG, IX2_MEDIA_QUERIES_DEFINED: PG} = u_.IX2EngineActionTypes
          , {reifyState: xG} = dG.IX2VanillaUtils
          , LG = e => ({
            type: pG,
            payload: (0,
            s_.default)({}, xG(e))
        });
        Z.rawDataImported = LG;
        var MG = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: vG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        Z.sessionInitialized = MG;
        var DG = () => ({
            type: hG
        });
        Z.sessionStarted = DG;
        var FG = () => ({
            type: EG
        });
        Z.sessionStopped = FG;
        var GG = ({rawData: e, defer: t}) => ({
            type: gG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        Z.previewRequested = GG;
        var XG = ({actionTypeId: e=u_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c}) => ({
            type: _G,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        Z.playbackRequested = XG;
        var VG = e => ({
            type: yG,
            payload: {
                actionListId: e
            }
        });
        Z.stopRequested = VG;
        var UG = () => ({
            type: IG
        });
        Z.clearRequested = UG;
        var BG = (e, t) => ({
            type: TG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        Z.eventListenerAdded = BG;
        var WG = (e=1) => ({
            type: mG,
            payload: {
                step: e
            }
        });
        Z.testFrameRendered = WG;
        var jG = (e, t) => ({
            type: OG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        Z.eventStateChanged = jG;
        var HG = (e, t) => ({
            type: bG,
            payload: {
                now: e,
                parameters: t
            }
        });
        Z.animationFrameChanged = HG;
        var kG = (e, t) => ({
            type: AG,
            payload: {
                key: e,
                value: t
            }
        });
        Z.parameterChanged = kG;
        var KG = e => ({
            type: SG,
            payload: (0,
            s_.default)({}, e)
        });
        Z.instanceAdded = KG;
        var zG = (e, t) => ({
            type: RG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        Z.instanceStarted = zG;
        var YG = e => ({
            type: wG,
            payload: {
                instanceId: e
            }
        });
        Z.instanceRemoved = YG;
        var $G = (e, t, r, n) => ({
            type: CG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        Z.elementStateChanged = $G;
        var QG = ({actionListId: e, isPlaying: t}) => ({
            type: NG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        Z.actionListPlaybackChanged = QG;
        var ZG = ({width: e, mediaQueries: t}) => ({
            type: qG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        Z.viewportWidthChanged = ZG;
        var JG = () => ({
            type: PG
        });
        Z.mediaQueriesDefined = JG
    }
    );
    var f_ = u(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.elementContains = fX;
        we.getChildElements = pX;
        we.getClosestElement = void 0;
        we.getProperty = aX;
        we.getQuerySelector = uX;
        we.getRefType = EX;
        we.getSiblingElements = vX;
        we.getStyle = oX;
        we.getValidDocument = cX;
        we.isSiblingNode = dX;
        we.matchSelector = sX;
        we.queryDocument = lX;
        we.setStyle = iX;
        var eX = Wt()
          , tX = De()
          , {ELEMENT_MATCHES: rs} = eX.IX2BrowserSupport
          , {IX2_ID_DELIMITER: c_, HTML_ELEMENT: rX, PLAIN_OBJECT: nX, WF_PAGE: l_} = tX.IX2EngineConstants;
        function iX(e, t, r) {
            e.style[t] = r
        }
        function oX(e, t) {
            return e.style[t]
        }
        function aX(e, t) {
            return e[t]
        }
        function sX(e) {
            return t => t[rs](e)
        }
        function uX({id: e, selector: t}) {
            if (e) {
                let r = e;
                if (e.indexOf(c_) !== -1) {
                    let n = e.split(c_)
                      , o = n[0];
                    if (r = n[1],
                    o !== document.documentElement.getAttribute(l_))
                        return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }
        function cX(e) {
            return e == null || e === document.documentElement.getAttribute(l_) ? document : null
        }
        function lX(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function fX(e, t) {
            return e.contains(t)
        }
        function dX(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function pX(e) {
            let t = [];
            for (let r = 0, {length: n} = e || []; r < n; r++) {
                let {children: o} = e[r]
                  , {length: i} = o;
                if (i)
                    for (let a = 0; a < i; a++)
                        t.push(o[a])
            }
            return t
        }
        function vX(e=[]) {
            let t = []
              , r = [];
            for (let n = 0, {length: o} = e; n < o; n++) {
                let {parentNode: i} = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                    continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null; )
                    e.indexOf(a) === -1 && t.push(a),
                    a = a.nextElementSibling
            }
            return t
        }
        var hX = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[rs] && r[rs](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
        ;
        we.getClosestElement = hX;
        function EX(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? rX : nX : null
        }
    }
    );
    var ns = u( (Bk, p_) => {
        var gX = at()
          , d_ = Object.create
          , _X = function() {
            function e() {}
            return function(t) {
                if (!gX(t))
                    return {};
                if (d_)
                    return d_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        p_.exports = _X
    }
    );
    var _i = u( (Wk, v_) => {
        function yX() {}
        v_.exports = yX
    }
    );
    var Ii = u( (jk, h_) => {
        var IX = ns()
          , TX = _i();
        function yi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        yi.prototype = IX(TX.prototype);
        yi.prototype.constructor = yi;
        h_.exports = yi
    }
    );
    var y_ = u( (Hk, __) => {
        var E_ = Qt()
          , mX = Xr()
          , OX = Ae()
          , g_ = E_ ? E_.isConcatSpreadable : void 0;
        function bX(e) {
            return OX(e) || mX(e) || !!(g_ && e && e[g_])
        }
        __.exports = bX
    }
    );
    var m_ = u( (kk, T_) => {
        var AX = Vn()
          , SX = y_();
        function I_(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = SX),
            o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? I_(s, t - 1, r, n, o) : AX(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        T_.exports = I_
    }
    );
    var b_ = u( (Kk, O_) => {
        var RX = m_();
        function wX(e) {
            var t = e == null ? 0 : e.length;
            return t ? RX(e, 1) : []
        }
        O_.exports = wX
    }
    );
    var S_ = u( (zk, A_) => {
        function CX(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        A_.exports = CX
    }
    );
    var C_ = u( (Yk, w_) => {
        var NX = S_()
          , R_ = Math.max;
        function qX(e, t, r) {
            return t = R_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = R_(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t; )
                    s[o] = n[o];
                return s[t] = r(a),
                NX(e, this, s)
            }
        }
        w_.exports = qX
    }
    );
    var q_ = u( ($k, N_) => {
        function PX(e) {
            return function() {
                return e
            }
        }
        N_.exports = PX
    }
    );
    var L_ = u( (Qk, x_) => {
        var xX = q_()
          , P_ = Ja()
          , LX = Zn()
          , MX = P_ ? function(e, t) {
            return P_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: xX(t),
                writable: !0
            })
        }
        : LX;
        x_.exports = MX
    }
    );
    var D_ = u( (Zk, M_) => {
        var DX = 800
          , FX = 16
          , GX = Date.now;
        function XX(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = GX()
                  , o = FX - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= DX)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        M_.exports = XX
    }
    );
    var G_ = u( (Jk, F_) => {
        var VX = L_()
          , UX = D_()
          , BX = UX(VX);
        F_.exports = BX
    }
    );
    var V_ = u( (eK, X_) => {
        var WX = b_()
          , jX = C_()
          , HX = G_();
        function kX(e) {
            return HX(jX(e, void 0, WX), e + "")
        }
        X_.exports = kX
    }
    );
    var W_ = u( (tK, B_) => {
        var U_ = va()
          , KX = U_ && new U_;
        B_.exports = KX
    }
    );
    var H_ = u( (rK, j_) => {
        function zX() {}
        j_.exports = zX
    }
    );
    var is = u( (nK, K_) => {
        var k_ = W_()
          , YX = H_()
          , $X = k_ ? function(e) {
            return k_.get(e)
        }
        : YX;
        K_.exports = $X
    }
    );
    var Y_ = u( (iK, z_) => {
        var QX = {};
        z_.exports = QX
    }
    );
    var os = u( (oK, Q_) => {
        var $_ = Y_()
          , ZX = Object.prototype
          , JX = ZX.hasOwnProperty;
        function eV(e) {
            for (var t = e.name + "", r = $_[t], n = JX.call($_, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        Q_.exports = eV
    }
    );
    var mi = u( (aK, Z_) => {
        var tV = ns()
          , rV = _i()
          , nV = 4294967295;
        function Ti(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = nV,
            this.__views__ = []
        }
        Ti.prototype = tV(rV.prototype);
        Ti.prototype.constructor = Ti;
        Z_.exports = Ti
    }
    );
    var ey = u( (sK, J_) => {
        function iV(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        J_.exports = iV
    }
    );
    var ry = u( (uK, ty) => {
        var oV = mi()
          , aV = Ii()
          , sV = ey();
        function uV(e) {
            if (e instanceof oV)
                return e.clone();
            var t = new aV(e.__wrapped__,e.__chain__);
            return t.__actions__ = sV(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        ty.exports = uV
    }
    );
    var oy = u( (cK, iy) => {
        var cV = mi()
          , ny = Ii()
          , lV = _i()
          , fV = Ae()
          , dV = Et()
          , pV = ry()
          , vV = Object.prototype
          , hV = vV.hasOwnProperty;
        function Oi(e) {
            if (dV(e) && !fV(e) && !(e instanceof cV)) {
                if (e instanceof ny)
                    return e;
                if (hV.call(e, "__wrapped__"))
                    return pV(e)
            }
            return new ny(e)
        }
        Oi.prototype = lV.prototype;
        Oi.prototype.constructor = Oi;
        iy.exports = Oi
    }
    );
    var sy = u( (lK, ay) => {
        var EV = mi()
          , gV = is()
          , _V = os()
          , yV = oy();
        function IV(e) {
            var t = _V(e)
              , r = yV[t];
            if (typeof r != "function" || !(t in EV.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = gV(r);
            return !!n && e === n[0]
        }
        ay.exports = IV
    }
    );
    var fy = u( (fK, ly) => {
        var uy = Ii()
          , TV = V_()
          , mV = is()
          , as = os()
          , OV = Ae()
          , cy = sy()
          , bV = "Expected a function"
          , AV = 8
          , SV = 32
          , RV = 128
          , wV = 256;
        function CV(e) {
            return TV(function(t) {
                var r = t.length
                  , n = r
                  , o = uy.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(bV);
                    if (o && !a && as(i) == "wrapper")
                        var a = new uy([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = as(i)
                      , c = s == "wrapper" ? mV(i) : void 0;
                    c && cy(c[0]) && c[1] == (RV | AV | SV | wV) && !c[4].length && c[9] == 1 ? a = a[as(c[0])].apply(a, c[3]) : a = i.length == 1 && cy(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var f = arguments
                      , v = f[0];
                    if (a && f.length == 1 && OV(v))
                        return a.plant(v).value();
                    for (var p = 0, h = r ? t[p].apply(this, f) : v; ++p < r; )
                        h = t[p].call(this, h);
                    return h
                }
            })
        }
        ly.exports = CV
    }
    );
    var py = u( (dK, dy) => {
        var NV = fy()
          , qV = NV();
        dy.exports = qV
    }
    );
    var hy = u( (pK, vy) => {
        function PV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        vy.exports = PV
    }
    );
    var gy = u( (vK, Ey) => {
        var xV = hy()
          , ss = Jn();
        function LV(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ss(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ss(t),
            t = t === t ? t : 0),
            xV(ss(e), t, r)
        }
        Ey.exports = LV
    }
    );
    var My = u(wi => {
        "use strict";
        var Ri = Ke().default;
        Object.defineProperty(wi, "__esModule", {
            value: !0
        });
        wi.default = void 0;
        var Be = Ri(tr())
          , MV = Ri(py())
          , DV = Ri(Qn())
          , FV = Ri(gy())
          , jt = De()
          , us = ds()
          , bi = gi()
          , GV = Wt()
          , {MOUSE_CLICK: XV, MOUSE_SECOND_CLICK: VV, MOUSE_DOWN: UV, MOUSE_UP: BV, MOUSE_OVER: WV, MOUSE_OUT: jV, DROPDOWN_CLOSE: HV, DROPDOWN_OPEN: kV, SLIDER_ACTIVE: KV, SLIDER_INACTIVE: zV, TAB_ACTIVE: YV, TAB_INACTIVE: $V, NAVBAR_CLOSE: QV, NAVBAR_OPEN: ZV, MOUSE_MOVE: JV, PAGE_SCROLL_DOWN: Sy, SCROLL_INTO_VIEW: Ry, SCROLL_OUT_OF_VIEW: eU, PAGE_SCROLL_UP: tU, SCROLLING_IN_VIEW: rU, PAGE_FINISH: wy, ECOMMERCE_CART_CLOSE: nU, ECOMMERCE_CART_OPEN: iU, PAGE_START: Cy, PAGE_SCROLL: oU} = jt.EventTypeConsts
          , cs = "COMPONENT_ACTIVE"
          , Ny = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: _y} = jt.IX2EngineConstants
          , {getNamespacedParameterId: yy} = GV.IX2VanillaUtils
          , qy = e => t => typeof t == "object" && e(t) ? !0 : t
          , rn = qy( ({element: e, nativeEvent: t}) => e === t.target)
          , aU = qy( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , lt = (0,
        MV.default)([rn, aU])
          , Py = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !uU[o.eventTypeId])
                    return o
            }
            return null
        }
          , sU = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Py(e, n)
        }
          , Ge = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: s, autoStopEventId: c} = i.config
              , f = Py(e, c);
            return f && (0,
            us.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + _y + n.split(_y)[1],
                actionListId: (0,
                DV.default)(f, "action.config.actionListId")
            }),
            (0,
            us.stopActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            (0,
            us.startActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            o
        }
          , Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n
          , nn = {
            handler: Qe(lt, Ge)
        }
          , xy = (0,
        Be.default)({}, nn, {
            types: [cs, Ny].join(" ")
        })
          , ls = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , Iy = "mouseover mouseout"
          , fs = {
            types: ls
        }
          , uU = {
            PAGE_START: Cy,
            PAGE_FINISH: wy
        }
          , tn = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                FV.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , cU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , lU = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
          , fU = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = tn()
              , i = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return cU(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: o - c
            })
        }
          , Ly = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [cs, Ny].indexOf(n) !== -1 ? n === cs : r.isActive
              , i = (0,
            Be.default)({}, r, {
                isActive: o
            });
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
          , Ty = e => (t, r) => {
            let n = {
                elementHovered: lU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , dU = e => (t, r) => {
            let n = (0,
            Be.default)({}, r, {
                elementVisible: fU(t)
            });
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
          , my = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = tn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: f} = a
              , v = f === "PX"
              , p = o - i
              , h = Number((n / p).toFixed(2));
            if (r && r.percentTop === h)
                return r;
            let y = (v ? c : i * (c || 0) / 100) / p, m, I, q = 0;
            r && (m = h > r.percentTop,
            I = r.scrollingDown !== m,
            q = I ? h : r.anchorTop);
            let R = s === Sy ? h >= q + y : h <= q - y
              , w = (0,
            Be.default)({}, r, {
                percentTop: h,
                inBounds: R,
                anchorTop: q,
                scrollingDown: m
            });
            return r && R && (I || w.inBounds !== r.inBounds) && e(t, w) || w
        }
          , pU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , vU = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
          , hU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
          , Oy = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
          , Ai = (e=!0) => (0,
        Be.default)({}, xy, {
            handler: Qe(e ? lt : rn, Ly( (t, r) => r.isActive ? nn.handler(t, r) : r))
        })
          , Si = (e=!0) => (0,
        Be.default)({}, xy, {
            handler: Qe(e ? lt : rn, Ly( (t, r) => r.isActive ? r : nn.handler(t, r)))
        })
          , by = (0,
        Be.default)({}, fs, {
            handler: dU( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ry === r ? (Ge(e),
                (0,
                Be.default)({}, t, {
                    triggered: !0
                })) : t
            }
            )
        })
          , Ay = .05
          , EU = {
            [KV]: Ai(),
            [zV]: Si(),
            [kV]: Ai(),
            [HV]: Si(),
            [ZV]: Ai(!1),
            [QV]: Si(!1),
            [YV]: Ai(),
            [$V]: Si(),
            [iU]: {
                types: "ecommerce-cart-open",
                handler: Qe(lt, Ge)
            },
            [nU]: {
                types: "ecommerce-cart-close",
                handler: Qe(lt, Ge)
            },
            [XV]: {
                types: "click",
                handler: Qe(lt, Oy( (e, {clickCount: t}) => {
                    sU(e) ? t === 1 && Ge(e) : Ge(e)
                }
                ))
            },
            [VV]: {
                types: "click",
                handler: Qe(lt, Oy( (e, {clickCount: t}) => {
                    t === 2 && Ge(e)
                }
                ))
            },
            [UV]: (0,
            Be.default)({}, nn, {
                types: "mousedown"
            }),
            [BV]: (0,
            Be.default)({}, nn, {
                types: "mouseup"
            }),
            [WV]: {
                types: Iy,
                handler: Qe(lt, Ty( (e, t) => {
                    t.elementHovered && Ge(e)
                }
                ))
            },
            [jV]: {
                types: Iy,
                handler: Qe(lt, Ty( (e, t) => {
                    t.elementHovered || Ge(e)
                }
                ))
            },
            [JV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: v=0} = r
                      , {clientX: p=i.clientX, clientY: h=i.clientY, pageX: y=i.pageX, pageY: m=i.pageY} = n
                      , I = s === "X_AXIS"
                      , q = n.type === "mouseout"
                      , R = v / 100
                      , w = c
                      , T = !1;
                    switch (a) {
                    case jt.EventBasedOn.VIEWPORT:
                        {
                            R = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case jt.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: G, scrollTop: D, scrollWidth: P, scrollHeight: V} = tn();
                            R = I ? Math.min(G + y, P) / P : Math.min(D + m, V) / V;
                            break
                        }
                    case jt.EventBasedOn.ELEMENT:
                    default:
                        {
                            w = yy(o, c);
                            let G = n.type.indexOf("mouse") === 0;
                            if (G && lt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: P, top: V, width: B, height: W} = D;
                            if (!G && !pU({
                                left: p,
                                top: h
                            }, D))
                                break;
                            T = !0,
                            R = I ? (p - P) / B : (h - V) / W;
                            break
                        }
                    }
                    return q && (R > 1 - Ay || R < Ay) && (R = Math.round(R)),
                    (a !== jt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) && (R = f ? 1 - R : R,
                    e.dispatch((0,
                    bi.parameterChanged)(w, R))),
                    {
                        elementHovered: T,
                        clientX: p,
                        clientY: h,
                        pageX: y,
                        pageY: m
                    }
                }
            },
            [oU]: {
                types: ls,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = tn()
                      , s = o / (i - a);
                    s = n ? 1 - s : s,
                    e.dispatch((0,
                    bi.parameterChanged)(r, s))
                }
            },
            [rU]: {
                types: ls,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f} = tn()
                      , {basedOn: v, selectedAxis: p, continuousParameterGroupId: h, startsEntering: y, startsExiting: m, addEndOffset: I, addStartOffset: q, addOffsetValue: R=0, endOffsetValue: w=0} = r
                      , T = p === "X_AXIS";
                    if (v === jt.EventBasedOn.VIEWPORT) {
                        let G = T ? i / s : a / c;
                        return G !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(h, G)),
                        {
                            scrollPercent: G
                        }
                    } else {
                        let G = yy(n, h)
                          , D = e.getBoundingClientRect()
                          , P = (q ? R : 0) / 100
                          , V = (I ? w : 0) / 100;
                        P = y ? P : 1 - P,
                        V = m ? V : 1 - V;
                        let B = D.top + Math.min(D.height * P, f)
                          , J = D.top + D.height * V - B
                          , K = Math.min(f + J, c)
                          , g = Math.min(Math.max(0, f - B), K) / K;
                        return g !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(G, g)),
                        {
                            scrollPercent: g
                        }
                    }
                }
            },
            [Ry]: by,
            [eU]: by,
            [Sy]: (0,
            Be.default)({}, fs, {
                handler: my( (e, t) => {
                    t.scrollingDown && Ge(e)
                }
                )
            }),
            [tU]: (0,
            Be.default)({}, fs, {
                handler: my( (e, t) => {
                    t.scrollingDown || Ge(e)
                }
                )
            }),
            [wy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, vU(Ge))
            },
            [Cy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, hU(Ge))
            }
        };
        wi.default = EU
    }
    );
    var ds = u(Nt => {
        "use strict";
        var Je = Ke().default
          , gU = Lt().default;
        Object.defineProperty(Nt, "__esModule", {
            value: !0
        });
        Nt.observeRequests = KU;
        Nt.startActionGroup = _s;
        Nt.startEngine = xi;
        Nt.stopActionGroup = gs;
        Nt.stopAllActionGroups = jy;
        Nt.stopEngine = Li;
        var _U = Je(tr())
          , yU = Je(ZE())
          , IU = Je(Na())
          , Ct = Je(Qn())
          , TU = Je(gg())
          , mU = Je(Wg())
          , OU = Je(Hg())
          , bU = Je(Kg())
          , on = Je(Jg())
          , AU = Je(a_())
          , Ze = De()
          , Gy = Wt()
          , Ee = gi()
          , Ie = gU(f_())
          , SU = Je(My())
          , RU = ["store", "computedStyle"]
          , wU = Object.keys(Ze.QuickEffectIds)
          , ps = e => wU.includes(e)
          , {COLON_DELIMITER: vs, BOUNDARY_SELECTOR: Ci, HTML_ELEMENT: Xy, RENDER_GENERAL: CU, W_MOD_IX: Dy} = Ze.IX2EngineConstants
          , {getAffectedElements: Ni, getElementId: NU, getDestinationValues: hs, observeStore: Ht, getInstanceId: qU, renderHTMLElement: PU, clearAllStyles: Vy, getMaxDurationItemIndex: xU, getComputedStyle: LU, getInstanceOrigin: MU, reduceListToGroup: DU, shouldNamespaceEventParameter: FU, getNamespacedParameterId: GU, shouldAllowMediaQuery: qi, cleanupHTMLElement: XU, clearObjectCache: VU, stringifyTarget: UU, mediaQueriesEqual: BU, shallowEqual: WU} = Gy.IX2VanillaUtils
          , {isPluginType: Pi, createPluginInstance: Es, getPluginDuration: jU} = Gy.IX2VanillaPlugins
          , Fy = navigator.userAgent
          , HU = Fy.match(/iPad/i) || Fy.match(/iPhone/)
          , kU = 12;
        function KU(e) {
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.preview,
                onChange: $U
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.playback,
                onChange: QU
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.stop,
                onChange: ZU
            }),
            Ht({
                store: e,
                select: ({ixRequest: t}) => t.clear,
                onChange: JU
            })
        }
        function zU(e) {
            Ht({
                store: e,
                select: ({ixSession: t}) => t.mediaQueryKey,
                onChange: () => {
                    Li(e),
                    Vy({
                        store: e,
                        elementApi: Ie
                    }),
                    xi({
                        store: e,
                        allowEvents: !0
                    }),
                    Uy()
                }
            })
        }
        function YU(e, t) {
            let r = Ht({
                store: e,
                select: ({ixSession: n}) => n.tick,
                onChange: n => {
                    t(n),
                    r()
                }
            })
        }
        function $U({rawData: e, defer: t}, r) {
            let n = () => {
                xi({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }),
                Uy()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function Uy() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function QU(e, t) {
            let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: f=!0} = e
              , {rawData: v} = e;
            if (n && o && v && s) {
                let p = v.actionLists[n];
                p && (v = DU({
                    actionList: p,
                    actionItemId: o,
                    rawData: v
                }))
            }
            if (xi({
                store: t,
                rawData: v,
                allowEvents: a,
                testManual: c
            }),
            n && r === Ze.ActionTypeConsts.GENERAL_START_ACTION || ps(r)) {
                gs({
                    store: t,
                    actionListId: n
                }),
                Wy({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let p = _s({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: f
                });
                f && p && t.dispatch((0,
                Ee.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }
        function ZU({actionListId: e}, t) {
            e ? gs({
                store: t,
                actionListId: e
            }) : jy({
                store: t
            }),
            Li(t)
        }
        function JU(e, t) {
            Li(t),
            Vy({
                store: t,
                elementApi: Ie
            })
        }
        function xi({store: e, rawData: t, allowEvents: r, testManual: n}) {
            let {ixSession: o} = e.getState();
            t && e.dispatch((0,
            Ee.rawDataImported)(t)),
            o.active || (e.dispatch((0,
            Ee.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Ci),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })),
            r && (oB(e),
            eB(),
            e.getState().ixSession.hasDefinedMediaQueries && zU(e)),
            e.dispatch((0,
            Ee.sessionStarted)()),
            tB(e, n))
        }
        function eB() {
            let {documentElement: e} = document;
            e.className.indexOf(Dy) === -1 && (e.className += ` ${Dy}`)
        }
        function tB(e, t) {
            let r = n => {
                let {ixSession: o, ixParameters: i} = e.getState();
                o.active && (e.dispatch((0,
                Ee.animationFrameChanged)(n, i)),
                t ? YU(e, r) : requestAnimationFrame(r))
            }
            ;
            r(window.performance.now())
        }
        function Li(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: r} = t;
                r.forEach(rB),
                VU(),
                e.dispatch((0,
                Ee.sessionStopped)())
            }
        }
        function rB({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        function nB({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c}) {
            let {ixData: f, ixSession: v} = e.getState()
              , {events: p} = f
              , h = p[n]
              , {eventTypeId: y} = h
              , m = {}
              , I = {}
              , q = []
              , {continuousActionGroups: R} = a
              , {id: w} = a;
            FU(y, o) && (w = GU(t, w));
            let T = v.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null;
            R.forEach(G => {
                let {keyframe: D, actionItems: P} = G;
                P.forEach(V => {
                    let {actionTypeId: B} = V
                      , {target: W} = V.config;
                    if (!W)
                        return;
                    let J = W.boundaryMode ? T : null
                      , K = UU(W) + vs + B;
                    if (I[K] = iB(I[K], D, V),
                    !m[K]) {
                        m[K] = !0;
                        let {config: M} = V;
                        Ni({
                            config: M,
                            event: h,
                            eventTarget: r,
                            elementRoot: J,
                            elementApi: Ie
                        }).forEach(g => {
                            q.push({
                                element: g,
                                key: K
                            })
                        }
                        )
                    }
                }
                )
            }
            ),
            q.forEach( ({element: G, key: D}) => {
                let P = I[D]
                  , V = (0,
                Ct.default)(P, "[0].actionItems[0]", {})
                  , {actionTypeId: B} = V
                  , W = Pi(B) ? Es(B)(G, V) : null
                  , J = hs({
                    element: G,
                    actionItem: V,
                    elementApi: Ie
                }, W);
                ys({
                    store: e,
                    element: G,
                    eventId: n,
                    actionListId: i,
                    actionItem: V,
                    destination: J,
                    continuous: !0,
                    parameterId: w,
                    actionGroups: P,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: W
                })
            }
            )
        }
        function iB(e=[], t, r) {
            let n = [...e], o;
            return n.some( (i, a) => i.keyframe === t ? (o = a,
            !0) : !1),
            o == null && (o = n.length,
            n.push({
                keyframe: t,
                actionItems: []
            })),
            n[o].actionItems.push(r),
            n
        }
        function oB(e) {
            let {ixData: t} = e.getState()
              , {eventTypeMap: r} = t;
            By(e),
            (0,
            on.default)(r, (o, i) => {
                let a = SU.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                fB({
                    logic: a,
                    store: e,
                    events: o
                })
            }
            );
            let {ixSession: n} = e.getState();
            n.eventListeners.length && sB(e)
        }
        var aB = ["resize", "orientationchange"];
        function sB(e) {
            let t = () => {
                By(e)
            }
            ;
            aB.forEach(r => {
                window.addEventListener(r, t),
                e.dispatch((0,
                Ee.eventListenerAdded)(window, [r, t]))
            }
            ),
            t()
        }
        function By(e) {
            let {ixSession: t, ixData: r} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: o} = r;
                e.dispatch((0,
                Ee.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var uB = (e, t) => (0,
        mU.default)((0,
        bU.default)(e, t), OU.default)
          , cB = (e, t) => {
            (0,
            on.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + vs + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
          , lB = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ni({
                config: t,
                elementApi: Ie
            })
        }
        ;
        function fB({logic: e, store: t, events: r}) {
            dB(r);
            let {types: n, handler: o} = e
              , {ixData: i} = t.getState()
              , {actionLists: a} = i
              , s = uB(r, lB);
            if (!(0,
            TU.default)(s))
                return;
            (0,
            on.default)(s, (p, h) => {
                let y = r[h]
                  , {action: m, id: I, mediaQueries: q=i.mediaQueryKeys} = y
                  , {actionListId: R} = m.config;
                BU(q, i.mediaQueryKeys) || t.dispatch((0,
                Ee.mediaQueriesDefined)()),
                m.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(y.config) ? y.config : [y.config]).forEach(T => {
                    let {continuousParameterGroupId: G} = T
                      , D = (0,
                    Ct.default)(a, `${R}.continuousParameterGroups`, [])
                      , P = (0,
                    IU.default)(D, ({id: W}) => W === G)
                      , V = (T.smoothing || 0) / 100
                      , B = (T.restingState || 0) / 100;
                    P && p.forEach( (W, J) => {
                        let K = I + vs + J;
                        nB({
                            store: t,
                            eventStateKey: K,
                            eventTarget: W,
                            eventId: I,
                            eventConfig: T,
                            actionListId: R,
                            parameterGroup: P,
                            smoothing: V,
                            restingValue: B
                        })
                    }
                    )
                }
                ),
                (m.actionTypeId === Ze.ActionTypeConsts.GENERAL_START_ACTION || ps(m.actionTypeId)) && Wy({
                    store: t,
                    actionListId: R,
                    eventId: I
                })
            }
            );
            let c = p => {
                let {ixSession: h} = t.getState();
                cB(s, (y, m, I) => {
                    let q = r[m]
                      , R = h.eventState[I]
                      , {action: w, mediaQueries: T=i.mediaQueryKeys} = q;
                    if (!qi(T, h.mediaQueryKey))
                        return;
                    let G = (D={}) => {
                        let P = o({
                            store: t,
                            element: y,
                            event: q,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: I
                        }, R);
                        WU(P, R) || t.dispatch((0,
                        Ee.eventStateChanged)(I, P))
                    }
                    ;
                    w.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(G) : G()
                }
                )
            }
              , f = (0,
            AU.default)(c, kU)
              , v = ({target: p=document, types: h, throttle: y}) => {
                h.split(" ").filter(Boolean).forEach(m => {
                    let I = y ? f : c;
                    p.addEventListener(m, I),
                    t.dispatch((0,
                    Ee.eventListenerAdded)(p, [m, I]))
                }
                )
            }
            ;
            Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
        }
        function dB(e) {
            if (!HU)
                return;
            let t = {}
              , r = "";
            for (let n in e) {
                let {eventTypeId: o, target: i} = e[n]
                  , a = Ie.getQuerySelector(i);
                t[a] || (o === Ze.EventTypeConsts.MOUSE_CLICK || o === Ze.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0,
                r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r,
                document.body.appendChild(n)
            }
        }
        function Wy({store: e, actionListId: t, eventId: r}) {
            let {ixData: n, ixSession: o} = e.getState()
              , {actionLists: i, events: a} = n
              , s = a[r]
              , c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let f = (0,
                Ct.default)(c, "actionItemGroups[0].actionItems", [])
                  , v = (0,
                Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!qi(v, o.mediaQueryKey))
                    return;
                f.forEach(p => {
                    var h;
                    let {config: y, actionTypeId: m} = p
                      , I = (y == null || (h = y.target) === null || h === void 0 ? void 0 : h.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : y
                      , q = Ni({
                        config: I,
                        event: s,
                        elementApi: Ie
                    })
                      , R = Pi(m);
                    q.forEach(w => {
                        let T = R ? Es(m)(w, p) : null;
                        ys({
                            destination: hs({
                                element: w,
                                actionItem: p,
                                elementApi: Ie
                            }, T),
                            immediate: !0,
                            store: e,
                            element: w,
                            eventId: r,
                            actionItem: p,
                            actionListId: t,
                            pluginInstance: T
                        })
                    }
                    )
                }
                )
            }
        }
        function jy({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            on.default)(t, r => {
                if (!r.continuous) {
                    let {actionListId: n, verbose: o} = r;
                    Is(r, e),
                    o && e.dispatch((0,
                    Ee.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function gs({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
            let {ixInstances: i, ixSession: a} = e.getState()
              , s = a.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null;
            (0,
            on.default)(i, c => {
                let f = (0,
                Ct.default)(c, "actionItem.config.target.boundaryMode")
                  , v = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && v) {
                    if (s && f && !Ie.elementContains(s, c.element))
                        return;
                    Is(c, e),
                    c.verbose && e.dispatch((0,
                    Ee.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function _s({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: s}) {
            var c;
            let {ixData: f, ixSession: v} = e.getState()
              , {events: p} = f
              , h = p[t] || {}
              , {mediaQueries: y=f.mediaQueryKeys} = h
              , m = (0,
            Ct.default)(f, `actionLists.${o}`, {})
              , {actionItemGroups: I, useFirstGroupAsInitialState: q} = m;
            if (!I || !I.length)
                return !1;
            i >= I.length && (0,
            Ct.default)(h, "config.loop") && (i = 0),
            i === 0 && q && i++;
            let w = (i === 0 || i === 1 && q) && ps((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? h.config.delay : void 0
              , T = (0,
            Ct.default)(I, [i, "actionItems"], []);
            if (!T.length || !qi(y, v.mediaQueryKey))
                return !1;
            let G = v.hasBoundaryNodes && r ? Ie.getClosestElement(r, Ci) : null
              , D = xU(T)
              , P = !1;
            return T.forEach( (V, B) => {
                let {config: W, actionTypeId: J} = V
                  , K = Pi(J)
                  , {target: M} = W;
                if (!M)
                    return;
                let g = M.boundaryMode ? G : null;
                Ni({
                    config: W,
                    event: h,
                    eventTarget: r,
                    elementRoot: g,
                    elementApi: Ie
                }).forEach( (F, X) => {
                    let H = K ? Es(J)(F, V) : null
                      , z = K ? jU(J)(F, V) : null;
                    P = !0;
                    let ie = D === B && X === 0
                      , Ce = LU({
                        element: F,
                        actionItem: V
                    })
                      , d = hs({
                        element: F,
                        actionItem: V,
                        elementApi: Ie
                    }, H);
                    ys({
                        store: e,
                        element: F,
                        actionItem: V,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: ie,
                        computedStyle: Ce,
                        destination: d,
                        immediate: a,
                        verbose: s,
                        pluginInstance: H,
                        pluginDuration: z,
                        instanceDelay: w
                    })
                }
                )
            }
            ),
            P
        }
        function ys(e) {
            var t;
            let {store: r, computedStyle: n} = e, o = (0,
            yU.default)(e, RU), {element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: f, restingValue: v, eventId: p} = o, h = !f, y = qU(), {ixElements: m, ixSession: I, ixData: q} = r.getState(), R = NU(m, i), {refState: w} = m[R] || {}, T = Ie.getRefType(i), G = I.reducedMotion && Ze.ReducedMotionTypes[a.actionTypeId], D;
            if (G && f)
                switch ((t = q.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case Ze.EventTypeConsts.MOUSE_MOVE:
                case Ze.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    D = v;
                    break;
                default:
                    D = .5;
                    break
                }
            let P = MU(i, w, n, a, Ie, c);
            if (r.dispatch((0,
            Ee.instanceAdded)((0,
            _U.default)({
                instanceId: y,
                elementId: R,
                origin: P,
                refType: T,
                skipMotion: G,
                skipToValue: D
            }, o))),
            Hy(document.body, "ix2-animation-started", y),
            s) {
                pB(r, y);
                return
            }
            Ht({
                store: r,
                select: ({ixInstances: V}) => V[y],
                onChange: ky
            }),
            h && r.dispatch((0,
            Ee.instanceStarted)(y, I.tick))
        }
        function Is(e, t) {
            Hy(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: r, actionItem: n} = e
              , {ixElements: o} = t.getState()
              , {ref: i, refType: a} = o[r] || {};
            a === Xy && XU(i, n, Ie),
            t.dispatch((0,
            Ee.instanceRemoved)(e.id))
        }
        function Hy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r),
            e.dispatchEvent(n)
        }
        function pB(e, t) {
            let {ixParameters: r} = e.getState();
            e.dispatch((0,
            Ee.instanceStarted)(t, 0)),
            e.dispatch((0,
            Ee.animationFrameChanged)(performance.now(), r));
            let {ixInstances: n} = e.getState();
            ky(n[t], e)
        }
        function ky(e, t) {
            let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: s, renderType: c, current: f, groupIndex: v, eventId: p, eventTarget: h, eventStateKey: y, actionListId: m, isCarrier: I, styleProp: q, verbose: R, pluginInstance: w} = e
              , {ixData: T, ixSession: G} = t.getState()
              , {events: D} = T
              , P = D[p] || {}
              , {mediaQueries: V=T.mediaQueryKeys} = P;
            if (qi(V, G.mediaQueryKey) && (n || r || o)) {
                if (f || c === CU && o) {
                    t.dispatch((0,
                    Ee.elementStateChanged)(i, s, f, a));
                    let {ixElements: B} = t.getState()
                      , {ref: W, refType: J, refState: K} = B[i] || {}
                      , M = K && K[s];
                    (J === Xy || Pi(s)) && PU(W, K, M, p, a, q, Ie, c, w)
                }
                if (o) {
                    if (I) {
                        let B = _s({
                            store: t,
                            eventId: p,
                            eventTarget: h,
                            eventStateKey: y,
                            actionListId: m,
                            groupIndex: v + 1,
                            verbose: R
                        });
                        R && !B && t.dispatch((0,
                        Ee.actionListPlaybackChanged)({
                            actionListId: m,
                            isPlaying: !1
                        }))
                    }
                    Is(e, t)
                }
            }
        }
    }
    );
    var zy = u(yt => {
        "use strict";
        var vB = Lt().default
          , hB = Ke().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = Ky;
        yt.init = IB;
        yt.setEnv = yB;
        yt.store = void 0;
        Pl();
        var EB = Yo()
          , gB = hB(QE())
          , Ts = ds()
          , _B = vB(gi());
        yt.actions = _B;
        var Mi = (0,
        EB.createStore)(gB.default);
        yt.store = Mi;
        function yB(e) {
            e() && (0,
            Ts.observeRequests)(Mi)
        }
        function IB(e) {
            Ky(),
            (0,
            Ts.startEngine)({
                store: Mi,
                rawData: e,
                allowEvents: !0
            })
        }
        function Ky() {
            (0,
            Ts.stopEngine)(Mi)
        }
    }
    );
    var Zy = u( (_K, Qy) => {
        var Yy = vt()
          , $y = zy();
        $y.setEnv(Yy.env);
        Yy.define("ix2", Qy.exports = function() {
            return $y
        }
        )
    }
    );
    var eI = u( (yK, Jy) => {
        var mr = vt();
        mr.define("links", Jy.exports = function(e, t) {
            var r = {}, n = e(window), o, i = mr.env(), a = window.location, s = document.createElement("a"), c = "w--current", f = /index\.(html|php)$/, v = /\/$/, p, h;
            r.ready = r.design = r.preview = y;
            function y() {
                o = i && mr.env("design"),
                h = mr.env("slug") || a.pathname || "",
                mr.scroll.off(I),
                p = [];
                for (var R = document.links, w = 0; w < R.length; ++w)
                    m(R[w]);
                p.length && (mr.scroll.on(I),
                I())
            }
            function m(R) {
                var w = o && R.getAttribute("href-disabled") || R.getAttribute("href");
                if (s.href = w,
                !(w.indexOf(":") >= 0)) {
                    var T = e(R);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var G = e(s.hash);
                        G.length && p.push({
                            link: T,
                            sec: G,
                            active: !1
                        });
                        return
                    }
                    if (!(w === "#" || w === "")) {
                        var D = s.href === a.href || w === h || f.test(w) && v.test(h);
                        q(T, c, D)
                    }
                }
            }
            function I() {
                var R = n.scrollTop()
                  , w = n.height();
                t.each(p, function(T) {
                    var G = T.link
                      , D = T.sec
                      , P = D.offset().top
                      , V = D.outerHeight()
                      , B = w * .5
                      , W = D.is(":visible") && P + V - B >= R && P + B <= R + w;
                    T.active !== W && (T.active = W,
                    q(G, c, W))
                })
            }
            function q(R, w, T) {
                var G = R.hasClass(w);
                T && G || !T && !G || (T ? R.addClass(w) : R.removeClass(w))
            }
            return r
        }
        )
    }
    );
    var rI = u( (IK, tI) => {
        var Di = vt();
        Di.define("scroll", tI.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = m() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(M) {
                window.setTimeout(M, 15)
            }
              , c = Di.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , v = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")"
              , h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , y = document.createElement("style");
            y.appendChild(document.createTextNode(h));
            function m() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            function q(M) {
                return I.test(M.hash) && M.host + M.pathname === r.host + r.pathname
            }
            let R = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function w() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || R.matches
            }
            function T(M, g) {
                var x;
                switch (g) {
                case "add":
                    x = M.attr("tabindex"),
                    x ? M.attr("data-wf-tabindex-swap", x) : M.attr("tabindex", "-1");
                    break;
                case "remove":
                    x = M.attr("data-wf-tabindex-swap"),
                    x ? (M.attr("tabindex", x),
                    M.removeAttr("data-wf-tabindex-swap")) : M.removeAttr("tabindex");
                    break
                }
                M.toggleClass("wf-force-outline-none", g === "add")
            }
            function G(M) {
                var g = M.currentTarget;
                if (!(Di.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var x = q(g) ? g.hash : "";
                    if (x !== "") {
                        var F = e(x);
                        F.length && (M && (M.preventDefault(),
                        M.stopPropagation()),
                        D(x, M),
                        window.setTimeout(function() {
                            P(F, function() {
                                T(F, "add"),
                                F.get(0).focus({
                                    preventScroll: !0
                                }),
                                T(F, "remove")
                            })
                        }, M ? 0 : 300))
                    }
                }
            }
            function D(M) {
                if (r.hash !== M && n && n.pushState && !(Di.env.chrome && r.protocol === "file:")) {
                    var g = n.state && n.state.hash;
                    g !== M && n.pushState({
                        hash: M
                    }, "", M)
                }
            }
            function P(M, g) {
                var x = o.scrollTop()
                  , F = V(M);
                if (x !== F) {
                    var X = B(M, x, F)
                      , H = Date.now()
                      , z = function() {
                        var ie = Date.now() - H;
                        window.scroll(0, W(x, F, ie, X)),
                        ie <= X ? s(z) : typeof g == "function" && g()
                    };
                    s(z)
                }
            }
            function V(M) {
                var g = e(f)
                  , x = g.css("position") === "fixed" ? g.outerHeight() : 0
                  , F = M.offset().top - x;
                if (M.data("scroll") === "mid") {
                    var X = o.height() - x
                      , H = M.outerHeight();
                    H < X && (F -= Math.round((X - H) / 2))
                }
                return F
            }
            function B(M, g, x) {
                if (w())
                    return 0;
                var F = 1;
                return a.add(M).each(function(X, H) {
                    var z = parseFloat(H.getAttribute("data-scroll-time"));
                    !isNaN(z) && z >= 0 && (F = z)
                }),
                (472.143 * Math.log(Math.abs(g - x) + 125) - 2e3) * F
            }
            function W(M, g, x, F) {
                return x > F ? g : M + (g - M) * J(x / F)
            }
            function J(M) {
                return M < .5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1
            }
            function K() {
                var {WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: g} = t;
                i.on(g, p, G),
                i.on(M, v, function(x) {
                    x.preventDefault()
                }),
                document.head.insertBefore(y, document.head.firstChild)
            }
            return {
                ready: K
            }
        }
        )
    }
    );
    var iI = u( (TK, nI) => {
        var TB = vt();
        TB.define("touch", nI.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), f, v;
                i.addEventListener("touchstart", p, !1),
                i.addEventListener("touchmove", h, !1),
                i.addEventListener("touchend", y, !1),
                i.addEventListener("touchcancel", m, !1),
                i.addEventListener("mousedown", p, !1),
                i.addEventListener("mousemove", h, !1),
                i.addEventListener("mouseup", y, !1),
                i.addEventListener("mouseout", m, !1);
                function p(q) {
                    var R = q.touches;
                    R && R.length > 1 || (a = !0,
                    R ? (s = !0,
                    f = R[0].clientX) : f = q.clientX,
                    v = f)
                }
                function h(q) {
                    if (a) {
                        if (s && q.type === "mousemove") {
                            q.preventDefault(),
                            q.stopPropagation();
                            return
                        }
                        var R = q.touches
                          , w = R ? R[0].clientX : q.clientX
                          , T = w - v;
                        v = w,
                        Math.abs(T) > c && r && String(r()) === "" && (o("swipe", q, {
                            direction: T > 0 ? "right" : "left"
                        }),
                        m())
                    }
                }
                function y(q) {
                    if (a && (a = !1,
                    s && q.type === "mouseup")) {
                        q.preventDefault(),
                        q.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function m() {
                    a = !1
                }
                function I() {
                    i.removeEventListener("touchstart", p, !1),
                    i.removeEventListener("touchmove", h, !1),
                    i.removeEventListener("touchend", y, !1),
                    i.removeEventListener("touchcancel", m, !1),
                    i.removeEventListener("mousedown", p, !1),
                    i.removeEventListener("mousemove", h, !1),
                    i.removeEventListener("mouseup", y, !1),
                    i.removeEventListener("mouseout", m, !1),
                    i = null
                }
                this.destroy = I
            }
            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var sI = u( (mK, aI) => {
        var qt = vt()
          , mB = ji()
          , ft = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , oI = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        qt.define("slider", aI.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, s = qt.env(), c = ".w-slider", f = '<div class="w-slider-dot" data-wf-ignore />', v = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', p = "w-slider-force-show", h = mB.triggers, y, m = !1;
            r.ready = function() {
                a = qt.env("design"),
                I()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(I, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                I()
            }
            ,
            r.redraw = function() {
                m = !0,
                I(),
                m = !1
            }
            ,
            r.destroy = q;
            function I() {
                i = o.find(c),
                i.length && (i.each(T),
                !y && (q(),
                R()))
            }
            function q() {
                qt.resize.off(w),
                qt.redraw.off(r.redraw)
            }
            function R() {
                qt.resize.on(w),
                qt.redraw.on(r.redraw)
            }
            function w() {
                i.filter(":visible").each(X)
            }
            function T(d, L) {
                var C = e(L)
                  , b = e.data(L, c);
                b || (b = e.data(L, c, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: C,
                    config: {}
                })),
                b.mask = C.children(".w-slider-mask"),
                b.left = C.children(".w-slider-arrow-left"),
                b.right = C.children(".w-slider-arrow-right"),
                b.nav = C.children(".w-slider-nav"),
                b.slides = b.mask.children(".w-slide"),
                b.slides.each(h.reset),
                m && (b.maskWidth = 0),
                C.attr("role") === void 0 && C.attr("role", "region"),
                C.attr("aria-label") === void 0 && C.attr("aria-label", "carousel");
                var te = b.mask.attr("id");
                if (te || (te = "w-slider-mask-" + d,
                b.mask.attr("id", te)),
                !a && !b.ariaLiveLabel && (b.ariaLiveLabel = e(v).appendTo(b.mask)),
                b.left.attr("role", "button"),
                b.left.attr("tabindex", "0"),
                b.left.attr("aria-controls", te),
                b.left.attr("aria-label") === void 0 && b.left.attr("aria-label", "previous slide"),
                b.right.attr("role", "button"),
                b.right.attr("tabindex", "0"),
                b.right.attr("aria-controls", te),
                b.right.attr("aria-label") === void 0 && b.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    b.left.hide(),
                    b.right.hide(),
                    b.nav.hide(),
                    y = !0;
                    return
                }
                b.el.off(c),
                b.left.off(c),
                b.right.off(c),
                b.nav.off(c),
                G(b),
                a ? (b.el.on("setting" + c, g(b)),
                M(b),
                b.hasTimer = !1) : (b.el.on("swipe" + c, g(b)),
                b.left.on("click" + c, B(b)),
                b.right.on("click" + c, W(b)),
                b.left.on("keydown" + c, V(b, B)),
                b.right.on("keydown" + c, V(b, W)),
                b.nav.on("keydown" + c, "> div", g(b)),
                b.config.autoplay && !b.hasTimer && (b.hasTimer = !0,
                b.timerCount = 1,
                K(b)),
                b.el.on("mouseenter" + c, P(b, !0, "mouse")),
                b.el.on("focusin" + c, P(b, !0, "keyboard")),
                b.el.on("mouseleave" + c, P(b, !1, "mouse")),
                b.el.on("focusout" + c, P(b, !1, "keyboard"))),
                b.nav.on("click" + c, "> div", g(b)),
                s || b.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var oe = C.filter(":hidden");
                oe.addClass(p);
                var Oe = C.parents(":hidden");
                Oe.addClass(p),
                m || X(d, L),
                oe.removeClass(p),
                Oe.removeClass(p)
            }
            function G(d) {
                var L = {};
                L.crossOver = 0,
                L.animation = d.el.attr("data-animation") || "slide",
                L.animation === "outin" && (L.animation = "cross",
                L.crossOver = .5),
                L.easing = d.el.attr("data-easing") || "ease";
                var C = d.el.attr("data-duration");
                if (L.duration = C != null ? parseInt(C, 10) : 500,
                D(d.el.attr("data-infinite")) && (L.infinite = !0),
                D(d.el.attr("data-disable-swipe")) && (L.disableSwipe = !0),
                D(d.el.attr("data-hide-arrows")) ? L.hideArrows = !0 : d.config.hideArrows && (d.left.show(),
                d.right.show()),
                D(d.el.attr("data-autoplay"))) {
                    L.autoplay = !0,
                    L.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3,
                    L.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var b = "mousedown" + c + " touchstart" + c;
                    a || d.el.off(b).one(b, function() {
                        M(d)
                    })
                }
                var te = d.right.width();
                L.edge = te ? te + 40 : 100,
                d.config = L
            }
            function D(d) {
                return d === "1" || d === "true"
            }
            function P(d, L, C) {
                return function(b) {
                    if (L)
                        d.hasFocus[C] = L;
                    else if (e.contains(d.el.get(0), b.relatedTarget) || (d.hasFocus[C] = L,
                    d.hasFocus.mouse && C === "keyboard" || d.hasFocus.keyboard && C === "mouse"))
                        return;
                    L ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                    d.hasTimer && M(d)) : (d.ariaLiveLabel.attr("aria-live", "off"),
                    d.hasTimer && K(d))
                }
            }
            function V(d, L) {
                return function(C) {
                    switch (C.keyCode) {
                    case ft.SPACE:
                    case ft.ENTER:
                        return L(d)(),
                        C.preventDefault(),
                        C.stopPropagation()
                    }
                }
            }
            function B(d) {
                return function() {
                    F(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }
            function W(d) {
                return function() {
                    F(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }
            function J(d, L) {
                var C = null;
                L === d.slides.length && (I(),
                H(d)),
                t.each(d.anchors, function(b, te) {
                    e(b.els).each(function(oe, Oe) {
                        e(Oe).index() === L && (C = te)
                    })
                }),
                C != null && F(d, {
                    index: C,
                    immediate: !0
                })
            }
            function K(d) {
                M(d);
                var L = d.config
                  , C = L.timerMax;
                C && d.timerCount++ > C || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || a || (W(d)(),
                    K(d))
                }, L.delay))
            }
            function M(d) {
                window.clearTimeout(d.timerId),
                d.timerId = null
            }
            function g(d) {
                return function(L, C) {
                    C = C || {};
                    var b = d.config;
                    if (a && L.type === "setting") {
                        if (C.select === "prev")
                            return B(d)();
                        if (C.select === "next")
                            return W(d)();
                        if (G(d),
                        H(d),
                        C.select == null)
                            return;
                        J(d, C.select);
                        return
                    }
                    if (L.type === "swipe")
                        return b.disableSwipe || qt.env("editor") ? void 0 : C.direction === "left" ? W(d)() : C.direction === "right" ? B(d)() : void 0;
                    if (d.nav.has(L.target).length) {
                        var te = e(L.target).index();
                        if (L.type === "click" && F(d, {
                            index: te
                        }),
                        L.type === "keydown")
                            switch (L.keyCode) {
                            case ft.ENTER:
                            case ft.SPACE:
                                {
                                    F(d, {
                                        index: te
                                    }),
                                    L.preventDefault();
                                    break
                                }
                            case ft.ARROW_LEFT:
                            case ft.ARROW_UP:
                                {
                                    x(d.nav, Math.max(te - 1, 0)),
                                    L.preventDefault();
                                    break
                                }
                            case ft.ARROW_RIGHT:
                            case ft.ARROW_DOWN:
                                {
                                    x(d.nav, Math.min(te + 1, d.pages)),
                                    L.preventDefault();
                                    break
                                }
                            case ft.HOME:
                                {
                                    x(d.nav, 0),
                                    L.preventDefault();
                                    break
                                }
                            case ft.END:
                                {
                                    x(d.nav, d.pages),
                                    L.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function x(d, L) {
                var C = d.children().eq(L).focus();
                d.children().not(C)
            }
            function F(d, L) {
                L = L || {};
                var C = d.config
                  , b = d.anchors;
                d.previous = d.index;
                var te = L.index
                  , oe = {};
                te < 0 ? (te = b.length - 1,
                C.infinite && (oe.x = -d.endX,
                oe.from = 0,
                oe.to = b[0].width)) : te >= b.length && (te = 0,
                C.infinite && (oe.x = b[b.length - 1].width,
                oe.from = -b[b.length - 1].x,
                oe.to = oe.from - oe.x)),
                d.index = te;
                var Oe = d.nav.children().eq(te).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(Oe).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                C.hideArrows && (d.index === b.length - 1 ? d.right.hide() : d.right.show(),
                d.index === 0 ? d.left.hide() : d.left.show());
                var et = d.offsetX || 0
                  , Xe = d.offsetX = -b[d.index].x
                  , fe = {
                    x: Xe,
                    opacity: 1,
                    visibility: ""
                }
                  , he = e(b[d.index].els)
                  , dt = e(b[d.previous] && b[d.previous].els)
                  , pt = d.slides.not(he)
                  , It = C.animation
                  , Ve = C.easing
                  , Pt = Math.round(C.duration)
                  , an = L.vector || (d.index > d.previous ? 1 : -1)
                  , l = "opacity " + Pt + "ms " + Ve
                  , E = "transform " + Pt + "ms " + Ve;
                if (he.find(oI).removeAttr("tabindex"),
                he.removeAttr("aria-hidden"),
                he.find("*").removeAttr("aria-hidden"),
                pt.find(oI).attr("tabindex", "-1"),
                pt.attr("aria-hidden", "true"),
                pt.find("*").attr("aria-hidden", "true"),
                a || (he.each(h.intro),
                pt.each(h.outro)),
                L.immediate && !m) {
                    n(he).set(fe),
                    N();
                    return
                }
                if (d.index === d.previous)
                    return;
                if (a || d.ariaLiveLabel.text(`Slide ${te + 1} of ${b.length}.`),
                It === "cross") {
                    var _ = Math.round(Pt - Pt * C.crossOver)
                      , O = Math.round(Pt - _);
                    l = "opacity " + _ + "ms " + Ve,
                    n(dt).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }),
                    n(he).set({
                        visibility: "",
                        x: Xe,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).wait(O).then({
                        opacity: 1
                    }).then(N);
                    return
                }
                if (It === "fade") {
                    n(dt).set({
                        visibility: ""
                    }).stop(),
                    n(he).set({
                        visibility: "",
                        x: Xe,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(N);
                    return
                }
                if (It === "over") {
                    fe = {
                        x: d.endX
                    },
                    n(dt).set({
                        visibility: ""
                    }).stop(),
                    n(he).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: Xe + b[d.index].width * an
                    }).add(E).start({
                        x: Xe
                    }).then(N);
                    return
                }
                C.infinite && oe.x ? (n(d.slides.not(dt)).set({
                    visibility: "",
                    x: oe.x
                }).add(E).start({
                    x: Xe
                }),
                n(dt).set({
                    visibility: "",
                    x: oe.from
                }).add(E).start({
                    x: oe.to
                }),
                d.shifted = dt) : (C.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: et
                }),
                d.shifted = null),
                n(d.slides).set({
                    visibility: ""
                }).add(E).start({
                    x: Xe
                }));
                function N() {
                    he = e(b[d.index].els),
                    pt = d.slides.not(he),
                    It !== "slide" && (fe.visibility = "hidden"),
                    n(pt).set(fe)
                }
            }
            function X(d, L) {
                var C = e.data(L, c);
                if (C) {
                    if (ie(C))
                        return H(C);
                    a && Ce(C) && H(C)
                }
            }
            function H(d) {
                var L = 1
                  , C = 0
                  , b = 0
                  , te = 0
                  , oe = d.maskWidth
                  , Oe = oe - d.config.edge;
                Oe < 0 && (Oe = 0),
                d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                d.slides.each(function(Xe, fe) {
                    b - C > Oe && (L++,
                    C += oe,
                    d.anchors[L - 1] = {
                        els: [],
                        x: b,
                        width: 0
                    }),
                    te = e(fe).outerWidth(!0),
                    b += te,
                    d.anchors[L - 1].width += te,
                    d.anchors[L - 1].els.push(fe);
                    var he = Xe + 1 + " of " + d.slides.length;
                    e(fe).attr("aria-label", he),
                    e(fe).attr("role", "group")
                }),
                d.endX = b,
                a && (d.pages = null),
                d.nav.length && d.pages !== L && (d.pages = L,
                z(d));
                var et = d.index;
                et >= L && (et = L - 1),
                F(d, {
                    immediate: !0,
                    index: et
                })
            }
            function z(d) {
                var L = [], C, b = d.el.attr("data-nav-spacing");
                b && (b = parseFloat(b) + "px");
                for (var te = 0, oe = d.pages; te < oe; te++)
                    C = e(f),
                    C.attr("aria-label", "Show slide " + (te + 1) + " of " + oe).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    d.nav.hasClass("w-num") && C.text(te + 1),
                    b != null && C.css({
                        "margin-left": b,
                        "margin-right": b
                    }),
                    L.push(C);
                d.nav.empty().append(L)
            }
            function ie(d) {
                var L = d.mask.width();
                return d.maskWidth !== L ? (d.maskWidth = L,
                !0) : !1
            }
            function Ce(d) {
                var L = 0;
                return d.slides.each(function(C, b) {
                    L += e(b).outerWidth(!0)
                }),
                d.slidesWidth !== L ? (d.slidesWidth = L,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Ls();
    Ds();
    Xs();
    ji();
    Zy();
    eI();
    rI();
    iI();
    sI();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1672777917054
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|5efb21d0-07f5-a337-edf6-f6307613edfb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679028167920
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075952",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075952",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1691696595836
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|be0123ff-9c76-1a87-485c-26eeb90ca755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|be0123ff-9c76-1a87-485c-26eeb90ca755",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692737851617
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450|e79022d7-ab40-8f6c-3544-08017c044609",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450|e79022d7-ab40-8f6c-3544-08017c044609",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692738113564
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64de6234400f08a69888b343|6ac59c42-cc62-5d88-d6b8-83f101d0ab50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64de6234400f08a69888b343|6ac59c42-cc62-5d88-d6b8-83f101d0ab50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102770005
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfa919d9beb6ec90507c39|a034b355-5158-6245-ee0a-17ad06ee1a72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfa919d9beb6ec90507c39|a034b355-5158-6245-ee0a-17ad06ee1a72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102777767
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfab02cc42b1c1e24f6457|9c9c086f-d412-5f75-8f74-0901bd291027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfab02cc42b1c1e24f6457|9c9c086f-d412-5f75-8f74-0901bd291027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102782821
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|a11ddef1-15b3-f343-f32f-ecf2feb7e049",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|a11ddef1-15b3-f343-f32f-ecf2feb7e049",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102788241
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64de6234400f08a69888b343|c8ac3149-792c-a4b3-17af-0d0a8b85c6a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64de6234400f08a69888b343|c8ac3149-792c-a4b3-17af-0d0a8b85c6a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102965482
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfa919d9beb6ec90507c39|348ea3dc-7cd9-3853-b014-aef044517dc2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfa919d9beb6ec90507c39|348ea3dc-7cd9-3853-b014-aef044517dc2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102969325
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfab02cc42b1c1e24f6457|ad090454-c5a6-62fc-1702-5c796c992f8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfab02cc42b1c1e24f6457|ad090454-c5a6-62fc-1702-5c796c992f8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102973119
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dfac4d3719d5b64ed1ca05|c4d51101-3c95-868a-6dc8-e67a43ae43ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dfac4d3719d5b64ed1ca05|c4d51101-3c95-868a-6dc8-e67a43ae43ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694102977564
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64dce1d3cfc7ccedc2a29450",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64dce1d3cfc7ccedc2a29450",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694103914412
        }
    },
    "actionLists": {
        "a-4": {
            "id": "a-4",
            "title": "WAVES / Hero 1 Gallery",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-one",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e05"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "selector": ".waves-column-hero-1.column-two",
                            "selectorGuids": ["bb500cd6-4815-52da-0481-969a94cc4df7", "bb500cd6-4815-52da-0481-969a94cc4e04"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672935446453
        },
        "a-6": {
            "id": "a-6",
            "title": "exit popup",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".subscribemodal",
                            "selectorGuids": ["0db840f8-5b5c-a2f7-c355-18ea479e5456"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".subscribemodal",
                            "selectorGuids": ["0db840f8-5b5c-a2f7-c355-18ea479e5456"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1691697313623
        },
        "a-10": {
            "id": "a-10",
            "title": "openMenuModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692737856456
        },
        "a-11": {
            "id": "a-11",
            "title": "closeMenuModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".menumodal",
                            "selectorGuids": ["9c74df0d-1f3c-6d26-65b7-0a715fc67a98"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692738116688
        },
        "a-12": {
            "id": "a-12",
            "title": "openSubscribeModal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "id": "64dce1d3cfc7ccedc2a29450|beb5a7b9-6e13-a66c-f23f-680ccc075950"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694103918094
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});


•
Formatting may be inconsistent from source
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS and IE text size adjust after device orientation change,
 *    without disabling user zoom.
 */
html {
  font-family: sans-serif;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}
/**
 * Remove default margin.
 */
body {
  margin: 0;
}
/* HTML5 display definitions
   ========================================================================== */
/**
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11
 * and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
/**
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
 */
audio,
canvas,
progress,
video {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}
/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}
/**
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
 */
[hidden],
template {
  display: none;
}
/* Links
   ========================================================================== */
/**
 * Remove the gray background color from active links in IE 10.
 */
a {
  background-color: transparent;
}
/**
 * Improve readability of focused elements when they are also in an
 * active/hover state.
 */
a:active,
a:hover {
  outline: 0;
}
/* Text-level semantics
   ========================================================================== */
/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */
abbr[title] {
  border-bottom: 1px dotted;
}
/**
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
 */
b,
strong {
  font-weight: bold;
}
/**
 * Address styling not present in Safari and Chrome.
 */
dfn {
  font-style: italic;
}
/**
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/**
 * Address styling not present in IE 8/9.
 */
mark {
  background: #ff0;
  color: #000;
}
/**
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%;
}
/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
/* Embedded content
   ========================================================================== */
/**
 * Remove border when inside `a` element in IE 8/9/10.
 */
img {
  border: 0;
}
/**
 * Correct overflow not hidden in IE 9/10/11.
 */
svg:not(:root) {
  overflow: hidden;
}
/* Grouping content
   ========================================================================== */
/**
 * Address margin not present in IE 8/9 and Safari.
 */
figure {
  margin: 1em 40px;
}
/**
 * Address differences between Firefox and other browsers.
 */
hr {
  box-sizing: content-box;
  height: 0;
}
/**
 * Contain overflow in all browsers.
 */
pre {
  overflow: auto;
}
/**
 * Address odd `em`-unit font size rendering in all browsers.
 */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
/* Forms
   ========================================================================== */
/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
 */
/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  /* 1 */
  font: inherit;
  /* 2 */
  margin: 0;
  /* 3 */
}
/**
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
 */
button {
  overflow: visible;
}
/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
 */
button,
select {
  text-transform: none;
}
/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. CUSTOM FOR WEBFLOW: Removed the input[type="submit"] selector to reduce
 *    specificity and defer to the .w-button selector
 */
button,
html input[type="button"],
input[type="reset"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}
/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}
/**
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
/**
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */
input {
  line-height: normal;
}
/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}
/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. CUSTOM FOR WEBFLOW: changed from `textfield` to `none` to normalize iOS rounded input
 * 2. CUSTOM FOR WEBFLOW: box-sizing: content-box rule removed
 *    (similar to normalize.css >=4.0.0)
 */
input[type='search'] {
  -webkit-appearance: none;
  /* 1 */
}
/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
 */
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * Define consistent border, margin, and padding.
 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
/**
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */
legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}
/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */
textarea {
  overflow: auto;
}
/**
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */
optgroup {
  font-weight: bold;
}
/* Tables
   ========================================================================== */
/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}