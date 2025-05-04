# C# 中的方法覆寫 (Method Override)

方法覆寫是 C# 繼承中的核心機制，它允許子類擴展父類的方法行為，而不是完全替換它。方法覆寫實現了面向對象編程中的多態性原則，使代碼更靈活、更可擴展。

## 方法覆寫的定義

方法覆寫是指子類創建一個與父類方法**完全相同簽名**的方法（相同名稱、相同返回類型、相同參數類型和數量），但提供新的實現，同時**保留**父類方法的執行能力。

關鍵區別在於：方法覆寫允許子類**擴展**父類方法的行為，而不是完全替換它。

## 方法覆寫的語法

```csharp
// 父類
public class Parent
{
    // 使用 virtual 關鍵字標記可被覆寫的方法
    public virtual void Display()
    {
        Console.WriteLine("Parent's method");
    }
}

// 子類
public class Child : Parent
{
    // 使用 override 關鍵字覆寫父類方法
    public override void Display()
    {
        // 使用 base 關鍵字調用父類方法
        base.Display();

        // 添加子類特有的行為
        Console.WriteLine("Child's additional behavior");
    }
}
```

## 方法覆寫的關鍵要素

1. **父類方法使用 `virtual` 關鍵字**：表示該方法可以被子類覆寫，但不是必須的
2. **子類方法使用 `override` 關鍵字**：明確表示此方法覆寫了父類的虛方法
3. **使用 `base` 關鍵字調用父類方法**：子類方法中通常使用 `base.方法名()` 來執行父類的原始實現

## 方法覆寫與方法隱藏的比較

| 特性         | 方法覆寫 (Override)                      | 方法隱藏 (Hiding)                    |
| ------------ | ---------------------------------------- | ------------------------------------ |
| 父類方法標記 | 必須使用 `virtual` 標記                  | 不需要特殊標記                       |
| 子類方法標記 | 必須使用 `override` 標記                 | 使用 `new` 關鍵字（可選但推薦）      |
| 執行時行為   | 基於對象的實際類型決定                   | 基於引用類型決定調用哪個方法         |
| 設計意圖     | 擴展父類方法的行為                       | 完全替換父類方法的實現               |
| 父類方法執行 | 子類通常使用 `base` 調用父類方法         | 父類方法不會被執行                   |
| 多態性支持   | 支持多態，無論引用類型如何都執行子類方法 | 不支持多態，引用類型決定執行哪個方法 |

## 實際範例

以下是一個完整的方法覆寫示例：

```csharp
// 父類
public class Employee
{
    // 標記為 virtual 表示可以被覆寫
    public virtual int GetHealthInsuranceAmount()
    {
        // 所有員工的基礎健康保險金額
        Console.WriteLine("Employee basic health insurance: 500");
        return 500;
    }
}

// 使用方法覆寫的子類
public class Manager : Employee
{
    // 使用 override 覆寫父類方法
    public override int GetHealthInsuranceAmount()
    {
        // 調用父類方法獲取基本保險金額
        base.GetHealthInsuranceAmount();

        // 添加經理特有的附加保險金額
        Console.WriteLine("Manager additional premium: 1000");
        return 1500; // 基本保險 + 附加保險
    }
}

// 沒有覆寫父類方法的子類
public class SalesMan : Employee
{
    // 沒有重寫 GetHealthInsuranceAmount 方法
    // 將使用父類的實現
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        // 創建父類對象
        Employee emp = new Employee();
        Console.WriteLine($"Employee total insurance: {emp.GetHealthInsuranceAmount()}");
        Console.WriteLine();

        // 創建 Manager 子類對象
        Manager mgr = new Manager();
        Console.WriteLine($"Manager total insurance: {mgr.GetHealthInsuranceAmount()}");
        Console.WriteLine();

        // 創建 SalesMan 子類對象
        SalesMan sm = new SalesMan();
        Console.WriteLine($"SalesMan total insurance: {sm.GetHealthInsuranceAmount()}");
        Console.WriteLine();

        // 使用父類引用指向子類對象 - 多態性
        Employee empRef = new Manager();
        Console.WriteLine($"Manager as Employee insurance: {empRef.GetHealthInsuranceAmount()}");
    }
}
```

輸出結果：

```
Employee basic health insurance: 500
Employee total insurance: 500

Employee basic health insurance: 500
Manager additional premium: 1000
Manager total insurance: 1500

Employee basic health insurance: 500
SalesMan total insurance: 500

Employee basic health insurance: 500
Manager additional premium: 1000
Manager as Employee insurance: 1500
```

## 方法覆寫的行為說明

從上面的示例可以看出：

1. 當使用父類對象 (`Employee emp`) 調用方法時，執行父類版本的方法
2. 當使用覆寫了方法的子類對象 (`Manager mgr`) 調用方法時：
   - 首先執行父類方法（通過 `base.GetHealthInsuranceAmount()`）
   - 然後執行子類中添加的行為
3. 當使用未覆寫方法的子類對象 (`SalesMan sm`) 調用方法時，使用父類的實現
4. **最重要的區別**：當使用父類引用指向子類對象 (`Employee empRef = new Manager()`) 調用方法時：
   - 方法覆寫：執行子類的方法版本（體現多態性）
   - 方法隱藏：執行父類的方法版本

## 覆寫虛方法是可選的

父類使用 `virtual` 標記的方法可以被子類覆寫，但這不是強制性的。子類可以選擇：

1. 覆寫方法：提供自己的實現
2. 不覆寫方法：使用父類的實現
3. 隱藏方法：使用 `new` 關鍵字提供完全不同的實現

## 方法覆寫的使用場景

以下情況適合使用方法覆寫：

1. **擴展現有行為**：當子類需要保留父類的行為，但添加額外的功能時
2. **修改部分行為**：當子類需要保留部分父類行為，但修改其他部分時
3. **需要多態行為**：當設計要求通過父類引用訪問子類對象時執行子類的方法實現
4. **框架開發**：當開發框架或庫，需要允許用戶通過繼承來自定義行為時

## 實際應用案例

方法覆寫在以下場景中特別有用：

1. **WPF 應用程序**：覆寫控件的默認行為
2. **ASP.NET MVC**：覆寫控制器基類的方法
3. **遊戲開發**：覆寫遊戲對象的基本行為
4. **插件系統**：允許插件通過繼承基類並覆寫其方法來擴展應用程序

## 最佳實踐

1. **始終使用 `virtual` 和 `override` 關鍵字**：明確標記可覆寫方法和覆寫方法
2. **在子類中使用 `base` 調用父類方法**：除非有特殊理由，否則應保留父類的行為
3. **避免太深的繼承層次**：深層次的繼承會使方法調用變得複雜和難以維護
4. **注意返回值**：確保覆寫方法的返回值與父類方法兼容
5. **正確處理參數**：考慮是否需要將所有參數傳遞給父類方法

## 總結

方法覆寫是 C# 繼承中實現多態性的重要機制。通過使用 `virtual`、`override` 和 `base` 關鍵字，子類可以擴展父類方法的行為，而不是完全替換它。這允許創建更靈活、更可維護的代碼，特別是在框架開發和大型系統中。

與方法隱藏不同，方法覆寫支持多態性，使得通過父類引用可以訪問子類的實現，這是面向對象程序設計中的核心概念之一。
