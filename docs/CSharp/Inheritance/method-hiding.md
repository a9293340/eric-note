# C# 中的方法隱藏 (Method Hiding)

方法隱藏是 C# 繼承中的一個重要概念，它允許子類通過創建同名方法來「隱藏」父類的方法實現。這種機制與方法重寫 (Override) 不同，提供了另一種自定義繼承行為的方式。

## 方法隱藏的定義

方法隱藏是指子類創建一個與父類方法**完全相同簽名**的方法（相同名稱、相同返回類型、相同參數類型和數量），從而「隱藏」父類的原始實現。

當通過子類對象調用該方法時，只會執行子類的方法版本，父類的方法版本不會被執行。

## 方法隱藏與方法重寫的區別

| 特性         | 方法隱藏 (Hiding)            | 方法重寫 (Override)      |
| ------------ | ---------------------------- | ------------------------ |
| 關鍵字       | `new` (可選但推薦)           | `override` (必須)        |
| 父類方法標記 | 不需要特殊標記               | 必須使用 `virtual` 標記  |
| 執行時行為   | 基於引用類型決定調用哪個方法 | 基於對象的實際類型決定   |
| 設計意圖     | 完全替換父類方法的實現       | 擴展或修改父類方法的行為 |

## 方法隱藏的語法

```csharp
// 父類
public class Parent
{
    public void Display()
    {
        Console.WriteLine("Parent's method");
    }
}

// 子類
public class Child : Parent
{
    // 使用 new 關鍵字進行方法隱藏
    public new void Display()
    {
        Console.WriteLine("Child's method");
    }
}
```

## new 關鍵字的作用

雖然 `new` 關鍵字在方法隱藏中是可選的，但強烈建議使用它：

1. **明確意圖**：向其他開發者清楚表明你有意隱藏父類方法
2. **抑制警告**：避免編譯器產生「子類方法隱藏父類方法」的警告
3. **提高代碼可讀性**：清晰表明這是一個設計決定，而不是偶然的命名衝突

## 實際範例

以下是一個完整的方法隱藏示例：

```csharp
// 父類
public class Employee
{
    // 父類方法
    public int GetHealthInsuranceAmount()
    {
        // 所有員工的基礎健康保險金額
        return 500;
    }
}

// 子類
public class Manager : Employee
{
    // 子類中隱藏父類方法
    public new int GetHealthInsuranceAmount()
    {
        // 經理擁有更高的健康保險金額
        return 1000;
    }
}

// 另一個子類，沒有隱藏父類方法
public class SalesMan : Employee
{
    // 沒有重新定義 GetHealthInsuranceAmount 方法
    // 因此會使用父類的方法實現
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        // 創建父類對象
        Employee emp = new Employee();
        // 輸出 500，使用父類的方法
        Console.WriteLine($"Employee insurance: {emp.GetHealthInsuranceAmount()}");

        // 創建 Manager 子類對象
        Manager mgr = new Manager();
        // 輸出 1000，使用子類的隱藏方法
        Console.WriteLine($"Manager insurance: {mgr.GetHealthInsuranceAmount()}");

        // 創建 SalesMan 子類對象
        SalesMan sm = new SalesMan();
        // 輸出 500，使用父類的方法（因為子類沒有隱藏它）
        Console.WriteLine($"SalesMan insurance: {sm.GetHealthInsuranceAmount()}");

        // 使用父類引用指向子類對象
        Employee empRef = new Manager();
        // 輸出 500，使用父類的方法（因為是父類引用）
        Console.WriteLine($"Manager as Employee insurance: {empRef.GetHealthInsuranceAmount()}");
    }
}
```

輸出結果：

```
Employee insurance: 500
Manager insurance: 1000
SalesMan insurance: 500
Manager as Employee insurance: 500
```

## 方法隱藏的行為說明

從上面的示例可以看出：

1. 當使用父類對象 (`Employee emp`) 調用方法時，執行父類版本的方法
2. 當使用隱藏了方法的子類對象 (`Manager mgr`) 調用方法時，執行子類版本的方法
3. 當使用未隱藏方法的子類對象 (`SalesMan sm`) 調用方法時，由於該子類沒有自己的實現，所以執行父類版本的方法
4. 當使用父類引用指向子類對象 (`Employee empRef = new Manager()`) 調用方法時，執行的是父類版本的方法，**這是方法隱藏與方法重寫的關鍵區別**

## 方法隱藏的使用場景

以下情況適合使用方法隱藏：

1. **完全替換行為**：當子類需要完全替換父類的方法實現，而不是擴展它時
2. **無法修改父類**：當你無法修改父類（例如，它來自第三方庫）但需要在子類中提供不同的實現
3. **特定子類行為**：當特定子類需要完全不同的實現，而其他子類可能仍使用父類的實現時

## 最佳實踐

1. **總是使用 `new` 關鍵字**：即使它是可選的，也應該始終使用它來明確表示意圖
2. **謹慎使用方法隱藏**：方法隱藏可能導致多態性行為出乎意料，應謹慎使用
3. **考慮替代方案**：在許多情況下，方法重寫（override）是更好的選擇，因為它保留了多態性
4. **文檔說明**：在文檔中清晰說明為何選擇方法隱藏而非重寫

## 總結

方法隱藏是 C# 中允許子類完全替換父類方法實現的機制。雖然它在某些特定場景中很有用，但應謹慎使用，因為它會改變預期的多態行為。在大多數需要修改父類方法行為的情況下，方法重寫（使用 `virtual` 和 `override` 關鍵字）通常是更好的選擇。
