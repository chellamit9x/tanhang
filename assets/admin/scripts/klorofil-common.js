$(document).ready(function () {

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------*/

	$('.btn-toggle-fullwidth').click(function () {
		if (!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');
			$(this).find('.lnr').addClass('lnr-arrow-right-circle');
		} else {
			$('body').removeClass('layout-fullwidth');
			$('body').removeClass('layout-default');
			$(this).find('.lnr').removeClass('lnr-arrow-right-circle');
			$(this).find('.lnr').addClass('lnr-arrow-left-circle');
		};
	});


// 	if ($(window).innerWidth() < 1025) {
// 		if (!$('body').hasClass('offcanvas-active')) {
// 			$('body').addClass('offcanvas-active');
// 		} else {
// 			$('body').removeClass('offcanvas-active');
// 		}
// 	}
// });

	// $(window).load( function () {
	// 	if ($(window).innerWidth() < 1025) {
	// 		$('.btn-toggle-fullwidth').find('.icon-arrows')
	// 			.removeClass('icon-arrows-move-left')
	// 			.addClass('icon-arrows-move-right');
	// 	}

	// 	// adjust right sidebar top position
	// 	$('.right-sidebar').css('top', $('.navbar').innerHeight());

	// 	// if page has content-menu, set top padding of main-content
	// 	if ($('.has-content-menu').length > 0) {
	// 		$('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
	// 	}

	// 	// for shorter main content
	// 	if ($('.main').height() < $('#sidebar-nav').height()) {
	// 		$('.main').css('min-height', $('#sidebar-nav').height());
	// 	}
	// });


	/*-----------------------------------/
	/*	SIDEBAR NAVIGATION
	/*----------------------------------*/

	// $('.sidebar a[data-toggle="collapse"]').click( function () {
	// 	if ($(this).hasClass('collapsed')) {
	// 		$(this).addClass('active');
	// 	} else {
	// 		$(this).removeClass('active');
	// 	}
	// });

	// if ($('.sidebar-scroll').length > 0) {
	// 	$('.sidebar-scroll').slimScroll({
	// 		height: '95%',
	// 		wheelStep: 2,
	// 	});
	// }


	/*-----------------------------------/
	/*	PANEL FUNCTIONS
	/*----------------------------------*/

	// panel remove
	// $('.panel .btn-remove').click(function (e) {

	// 	e.preventDefault();
	// 	$(this).parents('.panel').fadeOut(300, function () {
	// 		$(this).remove();
	// 	});
	// });

	// panel collapse/expand
	// var affectedElement = $('.panel-body');

	// $('.panel .btn-toggle-collapse').clickToggle(
	// 	function (e) {
	// 		e.preventDefault();

	// 		// if has scroll
	// 		if ($(this).parents('.panel').find('.slimScrollDiv').length > 0) {
	// 			affectedElement = $('.slimScrollDiv');
	// 		}

	// 		$(this).parents('.panel').find(affectedElement).slideUp(300);
	// 		$(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
	// 	},
	// 	function (e) {
	// 		e.preventDefault();

	// 		// if has scroll
	// 		if ($(this).parents('.panel').find('.slimScrollDiv').length > 0) {
	// 			affectedElement = $('.slimScrollDiv');
	// 		}

	// 		$(this).parents('.panel').find(affectedElement).slideDown(300);
	// 		$(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
	// 	}
	// );


	/*-----------------------------------/
	/*	PANEL SCROLLING
	/*----------------------------------*/

	// if ($('.panel-scrolling').length > 0) {
	// 	$('.panel-scrolling .panel-body').slimScroll({
	// 		height: '430px',
	// 		wheelStep: 2,
	// 	});
	// }

	// if ($('#panel-scrolling-demo').length > 0) {
	// 	$('#panel-scrolling-demo .panel-body').slimScroll({
	// 		height: '175px',
	// 		wheelStep: 2,
	// 	});
	// }

	/*-----------------------------------/
	/*	TODO LIST
	/*----------------------------------*/

	// $('.todo-list input').change(function () {
	// 	if ($(this).prop('checked')) {
	// 		$(this).parents('li').addClass('completed');
	// 	} else {
	// 		$(this).parents('li').removeClass('completed');
	// 	}
	// });


	/*-----------------------------------/
	/* TOASTR NOTIFICATION
	/*----------------------------------*/

	// if ($('#toastr-demo').length > 0) {
	// 	toastr.options.timeOut = "false";
	// 	toastr.options.closeButton = true;
	// 	toastr['info']('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="#">this link</a>');

	// 	$('.btn-toastr').click( function () {
	// 		$context = $(this).data('context');
	// 		$message = $(this).data('message');
	// 		$position = $(this).data('position');

	// 		if ($context == '') {
	// 			$context = 'info';
	// 		}

	// 		if ($position == '') {
	// 			$positionClass = 'toast-left-top';
	// 		} else {
	// 			$positionClass = 'toast-' + $position;
	// 		}

	// 		toastr.remove();
	// 		toastr[$context]($message, '', { positionClass: $positionClass });
	// 	});

	// 	$('#toastr-callback1').click( function () {
	// 		$message = $(this).data('message');

	// 		toastr.options = {
	// 			"timeOut": "300",
	// 			"onShown": function () { alert('onShown callback'); },
	// 			"onHidden": function () { alert('onHidden callback'); }
	// 		}

	// 		toastr['info']($message);
	// 	});

	// 	$('#toastr-callback2').click( function () {
	// 		$message = $(this).data('message');

	// 		toastr.options = {
	// 			"timeOut": "10000",
	// 			"onclick": function () { alert('onclick callback'); },
	// 		}

	// 		toastr['info']($message);

	// 	});

	// 	$('#toastr-callback3').click( function () {
	// 		$message = $(this).data('message');

	// 		toastr.options = {
	// 			"timeOut": "10000",
	// 			"closeButton": true,
	// 			"onCloseClick": function () { alert('onCloseClick callback'); }
	// 		}

	// 		toastr['info']($message);
	// 	});
	// }
});

// // toggle function
// $.fn.clickToggle = function (f1, f2) {
// 	return this.each(function () {
// 		var clicked = false;
// 		$(this).bind('click', function () {
// 			if (clicked) {
// 				clicked = false;
// 				return f2.apply(this, arguments);
// 			}

// 			clicked = true;
// 			return f1.apply(this, arguments);
// 		});
// 	});

// }



/*
 * bootstrap-tagsinput v0.8.0
 * 
 */

!function (a) { "use strict"; function b(b, c) { this.isInit = !0, this.itemsArray = [], this.$element = a(b), this.$element.hide(), this.isSelect = "SELECT" === b.tagName, this.multiple = this.isSelect && b.hasAttribute("multiple"), this.objectItems = c && c.itemValue, this.placeholderText = b.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = a('<div class="bootstrap-tagsinput"></div>'), this.$input = a('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.before(this.$container), this.build(c), this.isInit = !1 } function c(a, b) { if ("function" != typeof a[b]) { var c = a[b]; a[b] = function (a) { return a[c] } } } function d(a, b) { if ("function" != typeof a[b]) { var c = a[b]; a[b] = function () { return c } } } function e(a) { return a ? i.text(a).html() : "" } function f(a) { var b = 0; if (document.selection) { a.focus(); var c = document.selection.createRange(); c.moveStart("character", -a.value.length), b = c.text.length } else (a.selectionStart || "0" == a.selectionStart) && (b = a.selectionStart); return b } function g(b, c) { var d = !1; return a.each(c, function (a, c) { if ("number" == typeof c && b.which === c) return d = !0, !1; if (b.which === c.which) { var e = !c.hasOwnProperty("altKey") || b.altKey === c.altKey, f = !c.hasOwnProperty("shiftKey") || b.shiftKey === c.shiftKey, g = !c.hasOwnProperty("ctrlKey") || b.ctrlKey === c.ctrlKey; if (e && f && g) return d = !0, !1 } }), d } var h = { tagClass: function (a) { return "label label-info" }, focusClass: "focus", itemValue: function (a) { return a ? a.toString() : a }, itemText: function (a) { return this.itemValue(a) }, itemTitle: function (a) { return null }, freeInput: !0, addOnBlur: !0, maxTags: void 0, maxChars: void 0, confirmKeys: [13, 44], delimiter: ",", delimiterRegex: null, cancelConfirmKeysOnEmpty: !1, onTagExists: function (a, b) { b.hide().fadeIn() }, trimValue: !1, allowDuplicates: !1, triggerChange: !0 }; b.prototype = { constructor: b, add: function (b, c, d) { var f = this; if (!(f.options.maxTags && f.itemsArray.length >= f.options.maxTags) && (b === !1 || b)) { if ("string" == typeof b && f.options.trimValue && (b = a.trim(b)), "object" == typeof b && !f.objectItems) throw "Can't add objects when itemValue option is not set"; if (!b.toString().match(/^\s*$/)) { if (f.isSelect && !f.multiple && f.itemsArray.length > 0 && f.remove(f.itemsArray[0]), "string" == typeof b && "INPUT" === this.$element[0].tagName) { var g = f.options.delimiterRegex ? f.options.delimiterRegex : f.options.delimiter, h = b.split(g); if (h.length > 1) { for (var i = 0; i < h.length; i++)this.add(h[i], !0); return void (c || f.pushVal(f.options.triggerChange)) } } var j = f.options.itemValue(b), k = f.options.itemText(b), l = f.options.tagClass(b), m = f.options.itemTitle(b), n = a.grep(f.itemsArray, function (a) { return f.options.itemValue(a) === j })[0]; if (!n || f.options.allowDuplicates) { if (!(f.items().toString().length + b.length + 1 > f.options.maxInputLength)) { var o = a.Event("beforeItemAdd", { item: b, cancel: !1, options: d }); if (f.$element.trigger(o), !o.cancel) { f.itemsArray.push(b); var p = a('<span class="tag ' + e(l) + (null !== m ? '" title="' + m : "") + '">' + e(k) + '<span data-role="remove"></span></span>'); p.data("item", b), f.findInputWrapper().before(p), p.after(" "); var q = a('option[value="' + encodeURIComponent(j) + '"]', f.$element).length || a('option[value="' + e(j) + '"]', f.$element).length; if (f.isSelect && !q) { var r = a("<option selected>" + e(k) + "</option>"); r.data("item", b), r.attr("value", j), f.$element.append(r) } c || f.pushVal(f.options.triggerChange), (f.options.maxTags === f.itemsArray.length || f.items().toString().length === f.options.maxInputLength) && f.$container.addClass("bootstrap-tagsinput-max"), a(".typeahead, .twitter-typeahead", f.$container).length && f.$input.typeahead("val", ""), this.isInit ? f.$element.trigger(a.Event("itemAddedOnInit", { item: b, options: d })) : f.$element.trigger(a.Event("itemAdded", { item: b, options: d })) } } } else if (f.options.onTagExists) { var s = a(".tag", f.$container).filter(function () { return a(this).data("item") === n }); f.options.onTagExists(b, s) } } } }, remove: function (b, c, d) { var e = this; if (e.objectItems && (b = "object" == typeof b ? a.grep(e.itemsArray, function (a) { return e.options.itemValue(a) == e.options.itemValue(b) }) : a.grep(e.itemsArray, function (a) { return e.options.itemValue(a) == b }), b = b[b.length - 1]), b) { var f = a.Event("beforeItemRemove", { item: b, cancel: !1, options: d }); if (e.$element.trigger(f), f.cancel) return; a(".tag", e.$container).filter(function () { return a(this).data("item") === b }).remove(), a("option", e.$element).filter(function () { return a(this).data("item") === b }).remove(), -1 !== a.inArray(b, e.itemsArray) && e.itemsArray.splice(a.inArray(b, e.itemsArray), 1) } c || e.pushVal(e.options.triggerChange), e.options.maxTags > e.itemsArray.length && e.$container.removeClass("bootstrap-tagsinput-max"), e.$element.trigger(a.Event("itemRemoved", { item: b, options: d })) }, removeAll: function () { var b = this; for (a(".tag", b.$container).remove(), a("option", b.$element).remove(); b.itemsArray.length > 0;)b.itemsArray.pop(); b.pushVal(b.options.triggerChange) }, refresh: function () { var b = this; a(".tag", b.$container).each(function () { var c = a(this), d = c.data("item"), f = b.options.itemValue(d), g = b.options.itemText(d), h = b.options.tagClass(d); if (c.attr("class", null), c.addClass("tag " + e(h)), c.contents().filter(function () { return 3 == this.nodeType })[0].nodeValue = e(g), b.isSelect) { var i = a("option", b.$element).filter(function () { return a(this).data("item") === d }); i.attr("value", f) } }) }, items: function () { return this.itemsArray }, pushVal: function () { var b = this, c = a.map(b.items(), function (a) { return b.options.itemValue(a).toString() }); b.$element.val(c, !0), b.options.triggerChange && b.$element.trigger("change") }, build: function (b) { var e = this; if (e.options = a.extend({}, h, b), e.objectItems && (e.options.freeInput = !1), c(e.options, "itemValue"), c(e.options, "itemText"), d(e.options, "tagClass"), e.options.typeahead) { var i = e.options.typeahead || {}; d(i, "source"), e.$input.typeahead(a.extend({}, i, { source: function (b, c) { function d(a) { for (var b = [], d = 0; d < a.length; d++) { var g = e.options.itemText(a[d]); f[g] = a[d], b.push(g) } c(b) } this.map = {}; var f = this.map, g = i.source(b); a.isFunction(g.success) ? g.success(d) : a.isFunction(g.then) ? g.then(d) : a.when(g).then(d) }, updater: function (a) { return e.add(this.map[a]), this.map[a] }, matcher: function (a) { return -1 !== a.toLowerCase().indexOf(this.query.trim().toLowerCase()) }, sorter: function (a) { return a.sort() }, highlighter: function (a) { var b = new RegExp("(" + this.query + ")", "gi"); return a.replace(b, "<strong>$1</strong>") } })) } if (e.options.typeaheadjs) { var j = null, k = {}, l = e.options.typeaheadjs; a.isArray(l) ? (j = l[0], k = l[1]) : k = l, e.$input.typeahead(j, k).on("typeahead:selected", a.proxy(function (a, b) { k.valueKey ? e.add(b[k.valueKey]) : e.add(b), e.$input.typeahead("val", "") }, e)) } e.$container.on("click", a.proxy(function (a) { e.$element.attr("disabled") || e.$input.removeAttr("disabled"), e.$input.focus() }, e)), e.options.addOnBlur && e.options.freeInput && e.$input.on("focusout", a.proxy(function (b) { 0 === a(".typeahead, .twitter-typeahead", e.$container).length && (e.add(e.$input.val()), e.$input.val("")) }, e)), e.$container.on({ focusin: function () { e.$container.addClass(e.options.focusClass) }, focusout: function () { e.$container.removeClass(e.options.focusClass) } }), e.$container.on("keydown", "input", a.proxy(function (b) { var c = a(b.target), d = e.findInputWrapper(); if (e.$element.attr("disabled")) return void e.$input.attr("disabled", "disabled"); switch (b.which) { case 8: if (0 === f(c[0])) { var g = d.prev(); g.length && e.remove(g.data("item")) } break; case 46: if (0 === f(c[0])) { var h = d.next(); h.length && e.remove(h.data("item")) } break; case 37: var i = d.prev(); 0 === c.val().length && i[0] && (i.before(d), c.focus()); break; case 39: var j = d.next(); 0 === c.val().length && j[0] && (j.after(d), c.focus()) }var k = c.val().length; Math.ceil(k / 5); c.attr("size", Math.max(this.inputSize, c.val().length)) }, e)), e.$container.on("keypress", "input", a.proxy(function (b) { var c = a(b.target); if (e.$element.attr("disabled")) return void e.$input.attr("disabled", "disabled"); var d = c.val(), f = e.options.maxChars && d.length >= e.options.maxChars; e.options.freeInput && (g(b, e.options.confirmKeys) || f) && (0 !== d.length && (e.add(f ? d.substr(0, e.options.maxChars) : d), c.val("")), e.options.cancelConfirmKeysOnEmpty === !1 && b.preventDefault()); var h = c.val().length; Math.ceil(h / 5); c.attr("size", Math.max(this.inputSize, c.val().length)) }, e)), e.$container.on("click", "[data-role=remove]", a.proxy(function (b) { e.$element.attr("disabled") || e.remove(a(b.target).closest(".tag").data("item")) }, e)), e.options.itemValue === h.itemValue && ("INPUT" === e.$element[0].tagName ? e.add(e.$element.val()) : a("option", e.$element).each(function () { e.add(a(this).attr("value"), !0) })) }, destroy: function () { var a = this; a.$container.off("keypress", "input"), a.$container.off("click", "[role=remove]"), a.$container.remove(), a.$element.removeData("tagsinput"), a.$element.show() }, focus: function () { this.$input.focus() }, input: function () { return this.$input }, findInputWrapper: function () { for (var b = this.$input[0], c = this.$container[0]; b && b.parentNode !== c;)b = b.parentNode; return a(b) } }, a.fn.tagsinput = function (c, d, e) { var f = []; return this.each(function () { var g = a(this).data("tagsinput"); if (g) if (c || d) { if (void 0 !== g[c]) { if (3 === g[c].length && void 0 !== e) var h = g[c](d, null, e); else var h = g[c](d); void 0 !== h && f.push(h) } } else f.push(g); else g = new b(this, c), a(this).data("tagsinput", g), f.push(g), "SELECT" === this.tagName && a("option", a(this)).attr("selected", "selected"), a(this).val(a(this).val()) }), "string" == typeof c ? f.length > 1 ? f : f[0] : f }, a.fn.tagsinput.Constructor = b; var i = a("<div />"); a(function () { a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput() }) }(window.jQuery);
//# sourceMappingURL=bootstrap-tagsinput.min.js.map


function ConfirmDialogWait(message, id) {
	$('<div></div>').appendTo('body')
	  .html('<div><h6>' + message + '</h6></div>')
	  .dialog({
		modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
		width: 'auto', resizable: true,
	  });
  };



function ConfirmDialogBlog(message, id) {
	$('<div></div>').appendTo('body')
	  .html('<div><h6>' + message + '</h6></div>')
	  .dialog({
		modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
		width: 'auto', resizable: true,
		buttons: {
		  Yes: function () {
			let data = {
			  id: id
			}
			$.post("/admin/blog/delete", data);
			$(this).dialog("close");
			window.location.href = "/admin/blog"
		  },
		  No: function (event, ui) {
			$(this).remove();
		  }
		},
		close: function (event, ui) {
		  $(this).remove();
		}
	  });
  };

  $('.btnDeleteOneBlog').click(function () {
	let idBlog = $(this).attr('data-id');
	ConfirmDialogBlog('Are you sure delete it?', idBlog);


  });


  $('.row-blog').click(function () {
	let $this = $(this);
	if ($this.attr("data-select") === "true") {
	  $(this).css("background-color", "transparent")
	  $(this).removeAttr("data-select");
	  $(this).attr("data-select", "false")
	} else {
	  $(this).css("background-color", "#95D4F3")
	  $(this).attr("data-select", "true")
	}

  });

function ConfirmDialogArrayBlog(message, arrId) {
	$('<div></div>').appendTo('body')
	  .html('<div><h6>' + message + '</h6></div>')
	  .dialog({
		modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
		width: 'auto', resizable: true,
		buttons: {
		  Yes: function () {
			let data = {
			  arrId: arrId
			}
			$.post("/admin/blog/delete", data);
			$(this).dialog("close");
			ConfirmDialogWait('Deleting....', '1');
			setTimeout(
			  function () {
				window.location.href = "/admin/blog"
			  }, 3000
			);
		  },
		  No: function (event, ui) {
			$(this).remove();
		  }
		},
		close: function (event, ui) {
		  $(this).remove();
		}
	  });
  };


  $('#btnDeleteSelectBlog').click(function () {
	let arrSellectBlog = [];
	$(".row-blog").each(function () {
	  let $this = $(this);
	  if ($this.attr("data-select") === "true") {
		arrSellectBlog.push($this.attr('data-id'));
	  };
	});
	if (arrSellectBlog.length > 0) {
	  ConfirmDialogArrayBlog('Are you sure delete blogpost selected ?', arrSellectBlog);
	}
	return false;

  });





