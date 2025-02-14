# C# 中的靜態方法

## 靜態方法的定義
- 靜態方法是使用 `static` 修飾符聲明的方法。
- 與實例方法不同，靜態方法不依賴於任何特定的對象實例。

## 靜態方法與實例方法的區別
- **實例方法**：
  - 不使用 `static` 修飾符。
  - 需要通過對象來調用，並且與對象的實例相關聯。
  - 可以訪問實例字段和靜態字段。

- **靜態方法**：
  - 使用 `static` 修飾符。
  - 可以直接通過類名調用，無需創建對象。
  - 只能訪問靜態字段，無法訪問實例字段。

### 例子
```csharp:C#/static_example.md
public class Product {
    private static int totalNoOfProducts; // 靜態字段

    public static void SetTotalNoOfProducts(int value) {
        totalNoOfProducts = value; // 設置靜態字段的值
    }

    public static int GetTotalNoOfProducts() {
        return totalNoOfProducts; // 獲取靜態字段的值
    }
}
```

## 使用靜態方法的情境
- 當需要操作靜態字段時，應使用靜態方法。
- 例如，對於 `totalNoOfProducts` 靜態字段，可以創建 `SetTotalNoOfProducts` 和 `GetTotalNoOfProducts` 方法來設置和獲取其值。

## 靜態方法的特性
- 靜態方法不需要對象實例即可調用，這使得它們在某些情況下更方便。
- 靜態方法可以在類的上下文中被調用，而不需要創建對象。

## 靜態方法的限制
- 靜態方法無法使用 `this` 關鍵字，因為靜態方法沒有當前對象的概念。
- 靜態方法不能直接訪問實例字段或實例方法，但可以通過創建對象來訪問。

## 靜態方法的應用
- 在 `Main` 方法中，可以調用靜態方法來設置和獲取靜態字段的值。
- 例如：
```csharp
Product.SetTotalNoOfProducts(1); // 設置靜態字段
int total = Product.GetTotalNoOfProducts(); // 獲取靜態字段
```

## 總結
- 靜態方法是與類相關聯的方法，主要用於操作靜態字段。
- 它們不依賴於對象實例，並且可以通過類名直接調用。

## 靜態方法與實例方法的關係
- 實例方法可以調用靜態方法，但靜態方法不能直接調用實例方法。
- 在靜態方法中，可以創建對象來訪問實例方法。

## C# 與 JavaScript 中的靜態方法
### C# 中的靜態方法
- 靜態方法使用 `static` 修飾符聲明，並且與類相關聯。
- 靜態方法可以直接通過類名調用，無需創建對象。

### JavaScript 中的靜態方法
- 在 JavaScript 中，靜態方法通常是定義在類中的方法，使用 `static` 關鍵字。
- 靜態方法也可以直接通過類名調用，無需創建對象。

### 總結
- C# 和 JavaScript 中的靜態方法概念相似，都是與類相關聯的方法，並且可以直接通過類名調用。 