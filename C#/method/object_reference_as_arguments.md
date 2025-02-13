# 將引用變量作為參數傳遞

## 引用變量的定義
- 引用變量是指向對象的變量，存儲在堆棧中，而對象本身存儲在堆中。
- 當你將引用變量作為參數傳遞給方法時，該方法可以操作指向的對象。

## 靜態方法中的引用變量
- 靜態方法可以接收引用變量作為參數，以便操作多個對象。
- 當你在靜態方法中接收引用變量時，這些參數將指向同一個對象。

### 例子
假設有一個 `Product` 類，並且你想計算多個產品的總數量。首先，定義 `Product` 類：

```
public class Product {
    public int QuantityInStock { get; set; }

    public Product(int quantity) {
        QuantityInStock = quantity;
    }
}
```

然後，在 `Product` 類中創建一個靜態方法 `GetTotalQuantity`，用於計算多個產品的總數量：

```
public static int GetTotalQuantity(Product product1, Product product2, Product product3) {
    int total = product1.QuantityInStock + product2.QuantityInStock + product3.QuantityInStock;
    return total; // 返回總數量
}
```

在 `Main` 方法中，創建三個 `Product` 對象，並將它們的引用傳遞給 `GetTotalQuantity` 方法：

```
public static void Main(string[] args) {
    Product product1 = new Product(1200);
    Product product2 = new Product(3400);
    Product product3 = new Product(800);

    int totalQuantity = GetTotalQuantity(product1, product2, product3);
    Console.WriteLine("Total Quantity: " + totalQuantity); // 輸出總數量
}
```

## 結論
- 通過將引用變量作為參數傳遞給靜態方法，可以在方法內部操作這些對象，實現封裝和抽象的概念。
- 這種方式使得方法能夠靈活地處理多個對象，而不需要直接訪問對象的字段。

## 方法與靜態方法中變量傳遞的對比

| 特性               | 實例方法                          | 靜態方法                          |
|--------------------|-----------------------------------|-----------------------------------|
| 調用方式           | 需要通過對象實例調用              | 可以通過類名直接調用              |
| 參數傳遞           | 可以接收引用變量作為參數          | 可以接收引用變量作為參數          |
| 對象關聯           | 與特定對象實例相關聯              | 與類相關聯，不依賴於對象實例      |
| 訪問權限           | 可以訪問實例字段和靜態字段        | 只能訪問靜態字段                  |
| 使用 `this` 關鍵字 | 可以使用 `this` 來引用當前對象   | 不能使用 `this`，因為沒有當前對象 |
