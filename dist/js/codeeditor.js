const htmlEditor = codeMirror(document.querySelector(".editor .code .html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml"
});
const cssEditor = codeMirror(document.querySelector(".editor .code .css-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css"
});
const jsEditor = codeMirror(document.querySelector(".editor .code .js-code"),{
    lineNumbers:true,
    tabSize: 4,
    mode:"javascript"
});