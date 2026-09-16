
abstract class DocumentElement {
    abstract render(): void;
}

abstract class persistenceDb { 
    abstract save(document: Document): void;
}

class TextElement extends DocumentElement {
    render() {
        console.log("Rendering TextElement");
    }
}

class ImageElement extends DocumentElement {
    render() {
        console.log("Rendering ImageElement");
    }
}

class TableElement extends DocumentElement {
    render() {
        console.log("Rendering TableElement");
    }
}

class saveToDb extends persistenceDb {
    save(document: Document): void {
        console.log("Saving document to database");
    }
}

class saveToFile extends persistenceDb {
    save(document: Document): void {
        console.log("Saving document to file");
    }
}

class Document {
    private elements: DocumentElement[];
    constructor() {
        this.elements = [];
    }

    addElement(element: DocumentElement) {
        if (element instanceof DocumentElement) {
            this.elements.push(element);
        } else {
            throw new Error("Invalid element type");
        }
    }

    getElements() {
        return this.elements;
    }

}

class DocumentRenderer { 
    private document: Document;

    constructor(document: Document) {
        this.document = document;
    }
    
    render() {
        this.document.getElements().forEach(element => {
            element.render();
        });
    }
}

class DocumentEditor { 
    private document: Document;
    private persistence: persistenceDb;

    constructor(document: Document, persistence: persistenceDb) {
        this.document = document;
        this.persistence = persistence;
    }
    
    saveDocument() {
        this.persistence.save(this.document);
    }   
    renderDocument() {
        const renderer = new DocumentRenderer(this.document);
        renderer.render();
    }
}

function main () { 

    const document = new Document();
    document.addElement(new TextElement());
    document.addElement(new ImageElement());
    document.addElement(new TableElement());

    const persistence = new saveToDb();
    const editor = new DocumentEditor(document, persistence);

    editor.renderDocument();
    editor.saveDocument();
}

main();