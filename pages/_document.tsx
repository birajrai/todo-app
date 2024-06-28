import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/favicon.ico" />
                    <title>To-Do App</title>
                    <meta
                        name="description"
                        content="A modern, responsive To-Do app built with Next.js, TailwindCSS, and TypeScript. The app supports dark mode and allows users to manage tasks with priority levels and due dates."
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
