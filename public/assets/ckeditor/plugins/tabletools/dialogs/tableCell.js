/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("cellProperties",function(e){function t(e){return function(t){for(var n=e(t[0]),i=1;i<t.length;i++)if(e(t[i])!==n){n=null;break}"undefined"!=typeof n&&(this.setValue(n),CKEDITOR.env.gecko&&"select"==this.type&&!n&&(this.getInputElement().$.selectedIndex=-1))}}function n(e){return(e=s.exec(e.getStyle("width")||e.getAttribute("width")))?e[2]:void 0}var i=e.lang.table,o=i.cell,r=e.lang.common,a=CKEDITOR.dialog.validate,s=/^(\d+(?:\.\d+)?)(px|%)$/,l={type:"html",html:"&nbsp;"},c="rtl"==e.lang.dir,u=e.plugins.colordialog;return{title:o.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:o.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:r.width,validate:a.number(o.invalidWidth),onLoad:function(){var e=this.getDialog().getContentElement("info","widthType").getElement(),t=this.getInputElement(),n=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[n,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("width"),10);return e=parseInt(e.getStyle("width"),10),isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10),i=this.getDialog().getValueOf("info","widthType")||n(e);isNaN(t)?e.removeStyle("width"):e.setStyle("width",t+i),e.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:e.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[i.widthPx,"px"],[i.widthPc,"%"]],setup:t(n)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:r.height,width:"100px","default":"",validate:a.number(o.invalidHeight),onLoad:function(){var e=this.getDialog().getContentElement("info","htmlHeightType").getElement(),t=this.getInputElement(),n=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[n,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("height"),10);return e=parseInt(e.getStyle("height"),10),isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10);isNaN(t)?e.removeStyle("height"):e.setStyle("height",CKEDITOR.tools.cssLength(t)),e.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+i.widthPx}]},l,{type:"select",id:"wordWrap",label:o.wordWrap,"default":"yes",items:[[o.yes,"yes"],[o.no,"no"]],setup:t(function(e){var t=e.getAttribute("noWrap");return"nowrap"==e.getStyle("white-space")||t?"no":void 0}),commit:function(e){"no"==this.getValue()?e.setStyle("white-space","nowrap"):e.removeStyle("white-space"),e.removeAttribute("noWrap")}},l,{type:"select",id:"hAlign",label:o.hAlign,"default":"",items:[[r.notSet,""],[r.alignLeft,"left"],[r.alignCenter,"center"],[r.alignRight,"right"],[r.alignJustify,"justify"]],setup:t(function(e){var t=e.getAttribute("align");return e.getStyle("text-align")||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("text-align",t):e.removeStyle("text-align"),e.removeAttribute("align")}},{type:"select",id:"vAlign",label:o.vAlign,"default":"",items:[[r.notSet,""],[r.alignTop,"top"],[r.alignMiddle,"middle"],[r.alignBottom,"bottom"],[o.alignBaseline,"baseline"]],setup:t(function(e){var t=e.getAttribute("vAlign");switch(e=e.getStyle("vertical-align")){case"top":case"middle":case"bottom":case"baseline":break;default:e=""}return e||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("vertical-align",t):e.removeStyle("vertical-align"),e.removeAttribute("vAlign")}}]},l,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:o.cellType,"default":"td",items:[[o.data,"td"],[o.header,"th"]],setup:t(function(e){return e.getName()}),commit:function(e){e.renameNode(this.getValue())}},l,{type:"text",id:"rowSpan",label:o.rowSpan,"default":"",validate:a.integer(o.invalidRowSpan),setup:t(function(e){return(e=parseInt(e.getAttribute("rowSpan"),10))&&1!=e?e:void 0}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("rowSpan",this.getValue()):e.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:o.colSpan,"default":"",validate:a.integer(o.invalidColSpan),setup:t(function(e){return(e=parseInt(e.getAttribute("colSpan"),10))&&1!=e?e:void 0}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("colSpan",this.getValue()):e.removeAttribute("colSpan")}},l,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:o.bgColor,"default":"",setup:t(function(e){var t=e.getAttribute("bgColor");return e.getStyle("background-color")||t}),commit:function(e){this.getValue()?e.setStyle("background-color",this.getValue()):e.removeStyle("background-color"),e.removeAttribute("bgColor")}},u?{type:"button",id:"bgColorChoose","class":"colorChooser",label:o.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","bgColor").setValue(e),this.focus()},this)}}:l]},l,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:o.borderColor,"default":"",setup:t(function(e){var t=e.getAttribute("borderColor");return e.getStyle("border-color")||t}),commit:function(e){this.getValue()?e.setStyle("border-color",this.getValue()):e.removeStyle("border-color"),e.removeAttribute("borderColor")}},u?{type:"button",id:"borderColorChoose","class":"colorChooser",label:o.chooseColor,style:(c?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","borderColor").setValue(e),this.focus()},this)}}:l]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var e=this._.editor.getSelection(),t=e.createBookmarks(),n=this.cells,i=0;i<n.length;i++)this.commitContent(n[i]);this._.editor.forceNextSelectionCheck(),e.selectBookmarks(t),this._.editor.selectionChange()},onLoad:function(){var e={};this.foreach(function(t){t.setup&&t.commit&&(t.setup=CKEDITOR.tools.override(t.setup,function(n){return function(){n.apply(this,arguments),e[t.id]=t.getValue()}}),t.commit=CKEDITOR.tools.override(t.commit,function(n){return function(){e[t.id]!==t.getValue()&&n.apply(this,arguments)}}))})}}});