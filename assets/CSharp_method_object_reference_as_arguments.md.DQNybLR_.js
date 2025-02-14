import{_ as t,c as n,o as s,ae as e}from"./chunks/framework.Cwl8K4e2.js";const h=JSON.parse('{"title":"將引用變量作為參數傳遞","description":"","frontmatter":{},"headers":[],"relativePath":"CSharp/method/object_reference_as_arguments.md","filePath":"CSharp/method/object_reference_as_arguments.md"}'),d={name:"CSharp/method/object_reference_as_arguments.md"};function o(p,a,i,c,l,r){return s(),n("div",null,a[0]||(a[0]=[e(`<h1 id="將引用變量作為參數傳遞" tabindex="-1">將引用變量作為參數傳遞 <a class="header-anchor" href="#將引用變量作為參數傳遞" aria-label="Permalink to &quot;將引用變量作為參數傳遞&quot;">​</a></h1><h2 id="引用變量的定義" tabindex="-1">引用變量的定義 <a class="header-anchor" href="#引用變量的定義" aria-label="Permalink to &quot;引用變量的定義&quot;">​</a></h2><ul><li>引用變量是指向對象的變量，存儲在堆棧中，而對象本身存儲在堆中。</li><li>當你將引用變量作為參數傳遞給方法時，該方法可以操作指向的對象。</li></ul><h2 id="靜態方法中的引用變量" tabindex="-1">靜態方法中的引用變量 <a class="header-anchor" href="#靜態方法中的引用變量" aria-label="Permalink to &quot;靜態方法中的引用變量&quot;">​</a></h2><ul><li>靜態方法可以接收引用變量作為參數，以便操作多個對象。</li><li>當你在靜態方法中接收引用變量時，這些參數將指向同一個對象。</li></ul><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><p>假設有一個 <code>Product</code> 類，並且你想計算多個產品的總數量。首先，定義 <code>Product</code> 類：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class Product {</span></span>
<span class="line"><span>    public int QuantityInStock { get; set; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Product(int quantity) {</span></span>
<span class="line"><span>        QuantityInStock = quantity;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然後，在 <code>Product</code> 類中創建一個靜態方法 <code>GetTotalQuantity</code>，用於計算多個產品的總數量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public static int GetTotalQuantity(Product product1, Product product2, Product product3) {</span></span>
<span class="line"><span>    int total = product1.QuantityInStock + product2.QuantityInStock + product3.QuantityInStock;</span></span>
<span class="line"><span>    return total; // 返回總數量</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>Main</code> 方法中，創建三個 <code>Product</code> 對象，並將它們的引用傳遞給 <code>GetTotalQuantity</code> 方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public static void Main(string[] args) {</span></span>
<span class="line"><span>    Product product1 = new Product(1200);</span></span>
<span class="line"><span>    Product product2 = new Product(3400);</span></span>
<span class="line"><span>    Product product3 = new Product(800);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int totalQuantity = GetTotalQuantity(product1, product2, product3);</span></span>
<span class="line"><span>    Console.WriteLine(&quot;Total Quantity: &quot; + totalQuantity); // 輸出總數量</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to &quot;結論&quot;">​</a></h2><ul><li>通過將引用變量作為參數傳遞給靜態方法，可以在方法內部操作這些對象，實現封裝和抽象的概念。</li><li>這種方式使得方法能夠靈活地處理多個對象，而不需要直接訪問對象的字段。</li></ul><h2 id="方法與靜態方法中變量傳遞的對比" tabindex="-1">方法與靜態方法中變量傳遞的對比 <a class="header-anchor" href="#方法與靜態方法中變量傳遞的對比" aria-label="Permalink to &quot;方法與靜態方法中變量傳遞的對比&quot;">​</a></h2><table tabindex="0"><thead><tr><th>特性</th><th>實例方法</th><th>靜態方法</th></tr></thead><tbody><tr><td>調用方式</td><td>需要通過對象實例調用</td><td>可以通過類名直接調用</td></tr><tr><td>參數傳遞</td><td>可以接收引用變量作為參數</td><td>可以接收引用變量作為參數</td></tr><tr><td>對象關聯</td><td>與特定對象實例相關聯</td><td>與類相關聯，不依賴於對象實例</td></tr><tr><td>訪問權限</td><td>可以訪問實例字段和靜態字段</td><td>只能訪問靜態字段</td></tr><tr><td>使用 <code>this</code> 關鍵字</td><td>可以使用 <code>this</code> 來引用當前對象</td><td>不能使用 <code>this</code>，因為沒有當前對象</td></tr></tbody></table>`,16)]))}const b=t(d,[["render",o]]);export{h as __pageData,b as default};
