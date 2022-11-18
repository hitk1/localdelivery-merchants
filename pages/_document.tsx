import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default () => {
    return (
        <Html lang='pt-br'>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}