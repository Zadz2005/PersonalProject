export default function Head() {
    return (
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
    )
}//Next.js App Router provides a special head.tsx (or head.jsx) file that you can export from a route or layout directory to inject elements into <head>.In Next.js App Router, layout.tsx is not allowed to return a raw <head> element. 

//Cannot return raw HTML elements like <html>, <head>, or <body></body>
//This will break because layout.tsx is only supposed to return React fragments or valid layout elements like <html>, <body>, etc. but only inside app.html.tsx or app/head.tsx.