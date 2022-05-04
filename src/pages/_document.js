import Document, { Html, Head, Main, NextScript } from 'next/document';
//insercion de html, heas, los cuales nos permite trabajar con el recuerso de la forma correcta

class MyDocument extends Document {
  //estructuira a nivel de clase
  render() {
    return (
      //estructura del recurso, no se usa las etiquetas claves de html si no una adaptacion
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* se pueden agregar aquellas metas etiquetas necesarias para la aplicacion, 
                    aqui solo va los valores que van a estar compartidos 

           script que da google 
           <script dangerouslySetInnerHTML={{
                    }}>
                    </script> 
                 
            en el script arriba se agrega el code que da google analytics  */}
            <link rel="manifest" href="/manifest.json"/>
        </Head>
        <body>
          {/* elementos principales de la aplicacion */}
          <Main />
          {/* scripts presentes en la aplicacion */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
