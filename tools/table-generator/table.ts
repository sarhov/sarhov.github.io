interface cache {
    box: HTMLElement;
    addRow: HTMLElement;
    removeRow: HTMLElement;
    addColumn: HTMLElement;
    removeColumn: HTMLElement;
    addNewBox: HTMLElement;
    generate: HTMLElement;
    table: HTMLElement;
    addImages: NodeListOf<Element>;
    removeImages: NodeListOf<Element>;
    result: HTMLElement;
}

class TableGenerator {
    cache: cache;

    constructor(
        private columnCount: number = 4, 
        private rowCount: number = 2,
        private columnMinLimit: number = 2,
        private columnMaxLimit: number = 7,
        private rowMinLimit: number = 2,
        private rowMaxLimit: number = 20
        ) {
    }

    init() {
        this.cacheElements();
        this.attachEvents();
    }

    cacheElements() {
        this.cache = <cache>{
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

        this.cache.table = <HTMLElement>this.cache.box.querySelector('table')
    }

    addListener(elem: HTMLElement, on: string, cb: Function) {
       elem.addEventListener(on, event => {
            event.preventDefault();
            cb.call(this, event);
            return false;
        });
    }

    attachEvents() {
        this.addListener(this.cache.addColumn, 'click', this.addColumn);
        this.addListener(this.cache.removeColumn, 'click', this.removeColumn);
        this.addListener(this.cache.addRow, 'click', this.addRow);
        this.addListener(this.cache.removeRow, 'click', this.removeRow);
        this.addListener(this.cache.generate, 'click', this.generate);

        for(let elem of <any>this.cache.addImages) {
            this.addListener(<HTMLElement>elem, 'click', this.addImage);
        }
        for(let elem of <any>this.cache.removeImages) {
            this.addListener(<HTMLElement>elem, 'click', this.removeImage);
        }
    }

    addColumn() {
        if(this.columnCount < this.columnMaxLimit) {
            let children = this.cache.table.querySelectorAll('tr');
            for(let tr of <any>children){
                let clone = tr.lastElementChild.cloneNode(true);
                tr.appendChild(clone);
            }
            this.columnCount++;
        }
    }

    removeColumn() {
        if(this.columnCount > this.columnMinLimit) {
            let children = this.cache.table.querySelectorAll('tr');
            for(let tr of <any>children){
                tr.removeChild(tr.lastElementChild);
            }
            this.columnCount--;
        }
    }

    addRow() {
        if(this.rowCount < this.rowMaxLimit) {
            let children = this.cache.table.querySelectorAll('tr'),
                last = children[children.length - 1],
                clone = last.cloneNode(true);

            last.parentNode.insertBefore(clone, last.nextSibling);  
            this.rowCount++;
        }
    }

    removeRow() {
        if(this.rowCount > this.rowMinLimit) {
            let children = this.cache.table.querySelectorAll('tr'),
                last = children[children.length - 1];

            last.parentNode.removeChild(last);  
            this.rowCount--;
        }
    }

    addImage(event: Event) {
        let target = <HTMLInputElement>event.target,
            source = (<HTMLInputElement>target.parentElement.querySelector('.jsImageSource')).value,
            val = target.value;

        if(val && source) {
            let img = <HTMLElement>document.querySelector(`.js${val}Image`);
            img.setAttribute('src', source);
            img.parentElement.classList.remove('is_empty');
            img.style.display = 'block';
        }
    }

    removeImage(event: Event) {
        let target = <HTMLInputElement>event.target,
            parent = target.parentElement,
            val = (<HTMLInputElement>parent.querySelector('.jsAddImage')).value,
            img = <HTMLElement>document.querySelector(`.js${val}Image`);

        img.setAttribute('src', '');
        img.parentElement.classList.add('is_empty');
        img.style.display = 'none';
    }

    generate() {
        let generatedText: string,
            result = <HTMLElement>this.cache.box.querySelector('.custom').cloneNode(true),
            emptyImages = result.querySelectorAll('.is_empty'),
            images = result.querySelectorAll('.custom__image-img'),
            allElements = result.querySelectorAll('*');

        // clean up
        for(let img of <any>emptyImages){
            img.parentElement.removeChild(img);
        }
        for(let img of <any>images){
            img.classList.remove('jsBottomImage', 'jsTopImage');
        }
        for (let elem of <any>allElements){
            elem.removeAttribute('contenteditable');
        }

        if((<any>window).html_beautify) {
            generatedText = (<any>window).html_beautify(result.outerHTML, {
                indent_size: 2,
                wrap_line_length: 78,
                brace_style: 'expand',
                max_preserve_newlines: 5,
            });
        } else {
            generatedText = result.outerHTML;
        }

        this.cache.result.innerText = generatedText;
    }
}

let myCustom = new TableGenerator();
myCustom.init();
