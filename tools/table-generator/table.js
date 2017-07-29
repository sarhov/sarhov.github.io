var TableGenerator = (function () {
    function TableGenerator(columnCount, rowCount, columnMinLimit, columnMaxLimit, rowMinLimit, rowMaxLimit) {
        if (columnCount === void 0) { columnCount = 4; }
        if (rowCount === void 0) { rowCount = 2; }
        if (columnMinLimit === void 0) { columnMinLimit = 2; }
        if (columnMaxLimit === void 0) { columnMaxLimit = 7; }
        if (rowMinLimit === void 0) { rowMinLimit = 2; }
        if (rowMaxLimit === void 0) { rowMaxLimit = 20; }
        this.columnCount = columnCount;
        this.rowCount = rowCount;
        this.columnMinLimit = columnMinLimit;
        this.columnMaxLimit = columnMaxLimit;
        this.rowMinLimit = rowMinLimit;
        this.rowMaxLimit = rowMaxLimit;
    }
    TableGenerator.prototype.init = function () {
        this.cacheElements();
        this.attachEvents();
    };
    TableGenerator.prototype.cacheElements = function () {
        this.cache = {
            box: document.querySelector('.jsBox'),
            addRow: document.querySelector('.jsAddRow'),
            removeRow: document.querySelector('.jsRemoveRow'),
            addColumn: document.querySelector('.jsAddColumn'),
            removeColumn: document.querySelector('.jsRemoveColumn'),
            addNewBox: document.querySelector('.jsAddNewBox'),
            generate: document.querySelector('.jsGenerate'),
            addImages: document.querySelectorAll('.jsAddImage'),
            removeImages: document.querySelectorAll('.jsRemoveImage'),
            result: document.querySelector('.jsResult')
        };
        this.cache.table = this.cache.box.querySelector('table');
    };
    TableGenerator.prototype.addListener = function (elem, on, cb) {
        var _this = this;
        elem.addEventListener(on, function (event) {
            event.preventDefault();
            cb.call(_this, event);
            return false;
        });
    };
    TableGenerator.prototype.attachEvents = function () {
        this.addListener(this.cache.addColumn, 'click', this.addColumn);
        this.addListener(this.cache.removeColumn, 'click', this.removeColumn);
        this.addListener(this.cache.addRow, 'click', this.addRow);
        this.addListener(this.cache.removeRow, 'click', this.removeRow);
        this.addListener(this.cache.generate, 'click', this.generate);
        for (var _i = 0, _a = this.cache.addImages; _i < _a.length; _i++) {
            var elem = _a[_i];
            this.addListener(elem, 'click', this.addImage);
        }
        for (var _b = 0, _c = this.cache.removeImages; _b < _c.length; _b++) {
            var elem = _c[_b];
            this.addListener(elem, 'click', this.removeImage);
        }
    };
    TableGenerator.prototype.addColumn = function () {
        if (this.columnCount < this.columnMaxLimit) {
            var children = this.cache.table.querySelectorAll('tr');
            for (var _i = 0, _a = children; _i < _a.length; _i++) {
                var tr = _a[_i];
                var clone = tr.lastElementChild.cloneNode(true);
                tr.appendChild(clone);
            }
            this.columnCount++;
        }
    };
    TableGenerator.prototype.removeColumn = function () {
        if (this.columnCount > this.columnMinLimit) {
            var children = this.cache.table.querySelectorAll('tr');
            for (var _i = 0, _a = children; _i < _a.length; _i++) {
                var tr = _a[_i];
                tr.removeChild(tr.lastElementChild);
            }
            this.columnCount--;
        }
    };
    TableGenerator.prototype.addRow = function () {
        if (this.rowCount < this.rowMaxLimit) {
            var children = this.cache.table.querySelectorAll('tr'), last = children[children.length - 1], clone = last.cloneNode(true);
            last.parentNode.insertBefore(clone, last.nextSibling);
            this.rowCount++;
        }
    };
    TableGenerator.prototype.removeRow = function () {
        if (this.rowCount > this.rowMinLimit) {
            var children = this.cache.table.querySelectorAll('tr'), last = children[children.length - 1];
            last.parentNode.removeChild(last);
            this.rowCount--;
        }
    };
    TableGenerator.prototype.addImage = function (event) {
        var target = event.target, source = target.parentElement.querySelector('.jsImageSource').value, val = target.value;
        if (val && source) {
            var img = document.querySelector(".js" + val + "Image");
            img.setAttribute('src', source);
            img.parentElement.classList.remove('is_empty');
            img.style.display = 'block';
        }
    };
    TableGenerator.prototype.removeImage = function (event) {
        var target = event.target, parent = target.parentElement, val = parent.querySelector('.jsAddImage').value, img = document.querySelector(".js" + val + "Image");
        img.setAttribute('src', '');
        img.parentElement.classList.add('is_empty');
        img.style.display = 'none';
    };
    TableGenerator.prototype.generate = function () {
        var generatedText, result = this.cache.box.querySelector('.custom').cloneNode(true), emptyImages = result.querySelectorAll('.is_empty'), images = result.querySelectorAll('.custom__image-img'), allElements = result.querySelectorAll('*');
        // clean up
        for (var _i = 0, _a = emptyImages; _i < _a.length; _i++) {
            var img = _a[_i];
            img.parentElement.removeChild(img);
        }
        for (var _b = 0, _c = images; _b < _c.length; _b++) {
            var img = _c[_b];
            img.classList.remove('jsBottomImage', 'jsTopImage');
        }
        for (var _d = 0, _e = allElements; _d < _e.length; _d++) {
            var elem = _e[_d];
            elem.removeAttribute('contenteditable');
        }
        if (window.html_beautify) {
            generatedText = window.html_beautify(result.outerHTML, {
                indent_size: 2,
                wrap_line_length: 78,
                brace_style: 'expand',
                max_preserve_newlines: 5
            });
        }
        else {
            generatedText = result.outerHTML;
        }
        this.cache.result.innerText = generatedText;
    };
    return TableGenerator;
}());
var myCustom = new TableGenerator();
myCustom.init();
