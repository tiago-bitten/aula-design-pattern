class Printer {
  print(document) {
    throw new Error('Método print() deve ser implementado');
  }
}

class Scanner {
  scan(document) {
    throw new Error('Método scan() deve ser implementado');
  }
}

class SimplePrinter extends Printer {
  print(document) {
    console.log('Imprimindo:', document);
  }
}

class MultiFunctionPrinter extends Printer {
  constructor() {
    super();
    this.scanner = new ScannerImpl();
  }

  print(document) {
    console.log('Imprimindo:', document);
  }

  scan(document) {
    return this.scanner.scan(document);
  }
}

class ScannerImpl extends Scanner {
  scan(document) {
    console.log('Digitalizando:', document);
    return document;
  }
}

const simplePrinter = new SimplePrinter();
simplePrinter.print('documento.pdf');

const multiPrinter = new MultiFunctionPrinter();
multiPrinter.print('documento.pdf');
multiPrinter.scan('foto.jpg');
