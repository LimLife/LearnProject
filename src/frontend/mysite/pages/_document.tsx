import Document, { Html, Main, NextScript, Head } from "next/document";
export default class _Document extends Document 
{
    render()
    {
        return (
            <Html lang="Ru-ru,En-en" >
                <Head />
                
                <title>
                    MySite
                </title>
                <meta name="1234" content="44213123">
                </meta>
                <body>
                    <Main />
                    <NextScript />                   
                </body>
            </Html>
        )
    }
}