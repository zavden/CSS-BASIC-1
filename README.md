# CSS-BASIC-1

```put
 +codepen_flex_all("BaybRKr")
    +codepen_flex_all("vYEPxPX")
    hr
    +code_emb_source_u("ej-01")
    +code_emb_source_u("ej-02")
    hr
    +codepen_flex_all("BaybRKr",1)
    +codepen_flex_all("vYEPxPX",1)
    hr
    hr
    +code_emb_html("ej-01")
    +code_emb_css("ej-01")
    +code_emb_js("ej-01")
    br
    +code_html("02", "HTML", "CSS", "JS")
    .tabcontent#HTML-02
        +code_emb_html("ej-02")
    .tabcontent#CSS-02
        +code_emb_css("ej-02")
    .tabcontent#JS-02
        +code_emb_js("ej-02")
    +img_e("e1-1.png")
    :markdown-it
        ![](../static/e1-1.png)
    //- pre: code.txt-diagram: include ../static/txt-diagrams/diag1.txt
    +code_html("01", "HTML", "CSS", "JS")
    .tabcontent#HTML-01: :markdown-it(html)
            ```html
            <p>Hello world - 3</p>
            ```
    .tabcontent#CSS-01: :markdown-it(html)
            ```css
            p {
                color: green;
            }
            ```
    .tabcontent#JS-01: :markdown-it(html)
            ```javascript
            const d = p.querySelector("d");
            d.style.fontSize = "2em";
            ```
    hr
    hr
    +codepen_flex("BaybRKr",1)
    +codepen_flex_live("BaybRKr",1)
    +codepen_flex_all("BaybRKr",1)
    hr
    +html_emb_ej("ej-01")
    .tab-content
        +tab_info(0, "HTML", "CSS", "JS")
        .tabcontent#HTML-0
            :markdown-it(html)
                ```html
                <p>Hello world</p>
                ```
        .tabcontent#CSS-0
            :markdown-it(html)
                ```css
                p {
                    color: red;
                }
                ```
        .tabcontent#JS-0
            :markdown-it(html)
                ```javascript
                const p = p.querySelector("p");
                p.style.fontSize = "2em";
                ```
    hr
    hr
    +code_html("03", "HTML", "CSS", "JS")
    .tabcontent#HTML-03: pre: code.hljs: :highlight(lang="html")
        <p>Hello world - 3</p>
    .tabcontent#CSS-03
        pre: code.hljs: include:highlight(lang="scss") ../ejemplos/ej-03/styles.scss
    .tabcontent#JS-03
        pre: code.hljs: include:highlight(lang="typescript") ../ejemplos/ej-03/script.ts

```
