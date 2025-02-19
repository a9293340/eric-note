import{_ as a,c as i,o as e,ae as l}from"./chunks/framework.TiKqN8Et.js";const c=JSON.parse('{"title":"解析 (Parsing)","description":"","frontmatter":{},"headers":[],"relativePath":"CSharp/type-conversion/parse.md","filePath":"CSharp/type-conversion/parse.md"}'),t={name:"CSharp/type-conversion/parse.md"};function h(n,s,r,o,d,p){return e(),i("div",null,s[0]||(s[0]=[l(`<h1 id="解析-parsing" tabindex="-1">解析 (Parsing) <a class="header-anchor" href="#解析-parsing" aria-label="Permalink to &quot;解析 (Parsing)&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>解析是“類型轉換”的技術之一，用於將值從“字符串”類型轉換為“數值類型”。使用解析，您可以將字符串值轉換為任何數值類型，如 <code>sbyte</code>、<code>byte</code>、<code>short</code>、<code>ushort</code>、<code>int</code>、<code>uint</code>、<code>float</code>、<code>double</code>、<code>decimal</code> 等。</p><h3 id="解析的前提條件" tabindex="-1">解析的前提條件 <a class="header-anchor" href="#解析的前提條件" aria-label="Permalink to &quot;解析的前提條件&quot;">​</a></h3><ul><li>源值（字符串值）必須只包含數字。</li><li>不能包含空格、字母或任何其他特殊字符。</li></ul><h2 id="使用解析的方法" tabindex="-1">使用解析的方法 <a class="header-anchor" href="#使用解析的方法" aria-label="Permalink to &quot;使用解析的方法&quot;">​</a></h2><ol><li><strong>指定目標數據類型</strong>：您應該寫出要轉換的數值類型。</li><li><strong>使用 Parse 方法</strong>：編寫 <code>Parse</code> 方法，並將源值作為參數傳遞。</li></ol><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sourceValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sourceValue); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 將字符串轉換為 int</span></span></code></pre></div><ul><li><code>Parse</code> 方法將接收源值，並將其轉換為指定的目標類型，然後返回該值。</li></ul><h3 id="異常處理" tabindex="-1">異常處理 <a class="header-anchor" href="#異常處理" aria-label="Permalink to &quot;異常處理&quot;">​</a></h3><ul><li>如果源值無效（例如包含空格、特殊字符或字母），則會引發 <code>Exception</code>。</li><li>例外是運行時錯誤，表示源值無法轉換為指定的目標類型。</li></ul><h4 id="示例-無效源值" tabindex="-1">示例：無效源值 <a class="header-anchor" href="#示例-無效源值" aria-label="Permalink to &quot;示例：無效源值&quot;">​</a></h4><ul><li>如果源值為 <code>&quot;10 0&quot;</code>，由於包含空格，將無法轉換為數值類型，使用 <code>Parse</code> 方法會導致運行時錯誤。</li></ul><h2 id="實際應用" tabindex="-1">實際應用 <a class="header-anchor" href="#實際應用" aria-label="Permalink to &quot;實際應用&quot;">​</a></h2><p>在實時項目中，每當您想將值從 <code>string</code> 轉換為任何其他數值類型（如 <code>int</code>）時，可以使用 <code>Parse</code> 方法，但請確保源值不包含任何無效字符。</p><h3 id="示例-有效的字符串值" tabindex="-1">示例：有效的字符串值 <a class="header-anchor" href="#示例-有效的字符串值" aria-label="Permalink to &quot;示例：有效的字符串值&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> validValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parsedValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(validValue); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 轉換成功</span></span></code></pre></div><ul><li>在這種情況下，<code>parsedValue</code> 的值為 <code>100</code>，類型為 <code>int</code>。</li></ul><h3 id="字符串與整數的區別" tabindex="-1">字符串與整數的區別 <a class="header-anchor" href="#字符串與整數的區別" aria-label="Permalink to &quot;字符串與整數的區別&quot;">​</a></h3><ul><li>雖然從視覺上看，字符串和整數的輸出沒有區別，但它們的操作方式不同： <ul><li>字符串可以進行連接或使用任何字符串方法。</li><li>整數可以進行比較和算術運算（加、減、乘、除、求餘數等）。</li></ul></li></ul><h3 id="異常示例" tabindex="-1">異常示例 <a class="header-anchor" href="#異常示例" aria-label="Permalink to &quot;異常示例&quot;">​</a></h3><ul><li>如果源值包含空格或字母，例如 <code>&quot;10 0&quot;</code>，則 <code>Parse</code> 方法會失敗，並引發異常： <ul><li>錯誤信息：<code>“输入字符串格式不正确”</code>。</li></ul></li></ul><h2 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to &quot;結論&quot;">​</a></h2><p>在使用 <code>Parse</code> 方法時，請確保源值不包含任何無效字符，如空格、特殊字符或字母，這樣才能成功解析。</p><h1 id="tryparse-方法" tabindex="-1">TryParse 方法 <a class="header-anchor" href="#tryparse-方法" aria-label="Permalink to &quot;TryParse 方法&quot;">​</a></h1><h2 id="概述-1" tabindex="-1">概述 <a class="header-anchor" href="#概述-1" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p><code>TryParse</code> 方法與 <code>Parse</code> 方法基本相同，都是用於將值從 <code>string</code> 類型轉換為數值類型。但 <code>TryParse</code> 在轉換之前會檢查源值的有效性。</p><h3 id="tryparse-的工作原理" tabindex="-1">TryParse 的工作原理 <a class="header-anchor" href="#tryparse-的工作原理" aria-label="Permalink to &quot;TryParse 的工作原理&quot;">​</a></h3><ol><li><strong>檢查源值</strong>：<code>TryParse</code> 方法首先檢查源值是否包含任何字母、空格或特殊字符。 <ul><li>如果源值有效，則進行轉換，並將結果賦值給指定的變數，返回 <code>true</code>。</li><li>如果源值無效，則不會引發異常，而是將 <code>out</code> 變數初始化為該類型的默認值（例如 <code>0</code>），並返回 <code>false</code>。</li></ul></li></ol><h3 id="tryparse-的語法" tabindex="-1">TryParse 的語法 <a class="header-anchor" href="#tryparse-的語法" aria-label="Permalink to &quot;TryParse 的語法&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TryParse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sourceValue, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">out</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outputValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li><strong>第一個參數</strong>：要轉換的源值（必須是字符串類型）。</li><li><strong>第二個參數</strong>：<code>out</code> 變數，用於接收轉換後的值。</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 從鍵盤讀取輸入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TryParse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;轉換成功，值為: {</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;轉換失敗，請檢查輸入的字符。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>如果用戶輸入有效值（如 <code>500</code>），則 <code>n</code> 將被賦值為 <code>500</code>。</li><li>如果用戶輸入無效值（如 <code>&quot;10 0&quot;</code> 或特殊字符），則 <code>n</code> 將保持默認值 <code>0</code>，並顯示轉換失敗的消息。</li></ul><h2 id="tryparse-的優點" tabindex="-1">TryParse 的優點 <a class="header-anchor" href="#tryparse-的優點" aria-label="Permalink to &quot;TryParse 的優點&quot;">​</a></h2><ul><li><strong>避免異常</strong>：<code>TryParse</code> 方法自動處理源值的有效性，避免了因無效輸入而導致的異常，從而防止應用程序的突然終止。</li><li><strong>用於實時項目</strong>：在實時項目中，<code>TryParse</code> 方法通常優於 <code>Parse</code> 方法，因為我們不總是能確定輸入值的有效性。</li></ul><h2 id="結論-1" tabindex="-1">結論 <a class="header-anchor" href="#結論-1" aria-label="Permalink to &quot;結論&quot;">​</a></h2><ul><li>使用 <code>TryParse</code> 方法時，您可以安全地處理用戶輸入，避免因無效字符而導致的錯誤。</li><li>如果您確信源值只包含數字，則可以使用 <code>Parse</code> 方法；否則，建議使用 <code>TryParse</code> 方法以提高代碼的穩定性。</li></ul>`,40)]))}const u=a(t,[["render",h]]);export{c as __pageData,u as default};
