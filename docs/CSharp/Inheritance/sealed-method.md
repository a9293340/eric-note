# C# 中的密封方法 (Sealed Method)

密封方法是 C# 中的一種特殊方法，它可以防止在派生類中被進一步重寫 (override)。通過在重寫方法前添加 `sealed` 修飾符，開發者可以確保該方法的實現不會被子類修改，從而保護方法的行為一致性。

## 密封方法的基本概念

密封方法的關鍵特點：

1. **只能應用於重寫方法**：密封方法只能用於已經重寫父類虛方法的方法
2. **防止進一步重寫**：被標記為 `sealed` 的方法不能在子類中再次被重寫
3. **與虛方法相對**：虛方法 (`virtual`) 允許重寫，而密封方法則明確禁止重寫

## 密封方法的繼承鏈

密封方法在繼承鏈中的典型位置：

1. **祖父類**：定義帶有 `virtual` 關鍵字的虛方法
2. **父類**：使用 `override sealed` 關鍵字重寫並密封該方法
3. **子類**：不能再重寫該方法（會導致編譯錯誤）

## 密封方法的語法

```csharp
// 父類
public class Base
{
    // 聲明一個虛方法
    public virtual void Method()
    {
        Console.WriteLine("Base class method");
    }
}

// 中間類
public class Derived : Base
{
    // 重寫並密封方法，防止進一步重寫
    public override sealed void Method()
    {
        base.Method(); // 可以選擇調用基類方法
        Console.WriteLine("Derived class method (sealed)");
    }
}

// 子類
public class FurtherDerived : Derived
{
    // 以下代碼會導致編譯錯誤
    // 'FurtherDerived.Method()': 無法重寫繼承的成員 'Derived.Method()'，因為它已被密封
    /*
    public override void Method()  // 錯誤！
    {
        Console.WriteLine("This will not compile");
    }
    */
}
```

## 實際範例

以下是一個展示密封方法用法的完整示例：

```csharp
// 基類
public class Employee
{
    public string Name { get; set; }

    // 定義虛方法
    public virtual int GetHealthInsuranceAmount()
    {
        Console.WriteLine("Employee basic health insurance: 500");
        return 500;
    }
}

// 中間類
public class Manager : Employee
{
    // 重寫並密封方法，防止子類再次重寫
    public override sealed int GetHealthInsuranceAmount()
    {
        // 調用基類方法
        base.GetHealthInsuranceAmount();

        // 添加管理層額外保險
        Console.WriteLine("Manager additional premium: 1000");
        return 1500; // 基本保險 + 額外保險
    }
}

// 子類
public class BranchManager : Manager
{
    // 以下代碼會導致編譯錯誤，因為 GetHealthInsuranceAmount 方法已被密封
    /*
    public override int GetHealthInsuranceAmount()  // 錯誤！
    {
        return 2000;
    }
    */

    // 可以定義其他方法
    public void ManageBranch()
    {
        Console.WriteLine("Managing branch operations");
    }
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        // 創建 Employee 對象
        Employee emp = new Employee();
        Console.WriteLine($"Employee total insurance: {emp.GetHealthInsuranceAmount()}");
        Console.WriteLine();

        // 創建 Manager 對象
        Manager mgr = new Manager();
        Console.WriteLine($"Manager total insurance: {mgr.GetHealthInsuranceAmount()}");
        Console.WriteLine();

        // 創建 BranchManager 對象
        BranchManager branchMgr = new BranchManager();
        Console.WriteLine($"BranchManager total insurance: {branchMgr.GetHealthInsuranceAmount()}");
        branchMgr.ManageBranch();
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
Manager additional premium: 1000
BranchManager total insurance: 1500
Managing branch operations
```

## 密封方法的使用場景

密封方法的主要使用場景：

1. **保護關鍵業務邏輯**：當方法實現包含不應被修改的關鍵業務邏輯時
2. **確保行為一致性**：防止子類通過重寫方法改變預期行為
3. **安全性考慮**：防止子類重寫方法以繞過安全檢查或業務規則
4. **性能優化**：編譯器可以對密封方法進行某些優化

## 密封方法與相關概念的比較

| 特性             | 虛方法 (virtual) | 重寫方法 (override) | 密封方法 (sealed override) |
| ---------------- | ---------------- | ------------------- | -------------------------- |
| 定義位置         | 父類             | 子類                | 子類                       |
| 可以被重寫       | 是               | 是                  | 否                         |
| 需要特殊關鍵字   | virtual          | override            | override sealed            |
| 可以調用基類方法 | -                | 是 (使用 base)      | 是 (使用 base)             |
| 支持多態         | 是               | 是                  | 是                         |

## 密封方法 vs 密封類

| 特性             | 密封方法                   | 密封類                 |
| ---------------- | -------------------------- | ---------------------- |
| 範圍             | 僅適用於單個方法           | 適用於整個類           |
| 繼承限制         | 僅防止方法被重寫           | 防止整個類被繼承       |
| 應用場景         | 在繼承鏈中間使用           | 在繼承鏈末端使用       |
| 需要前置條件     | 必須是重寫的虛方法         | 無特殊前置條件         |
| 類可以繼續被繼承 | 是（只有該方法不能被重寫） | 否（整個類不能被繼承） |

## 最佳實踐

1. **謹慎使用密封方法**：只在有明確理由防止重寫時使用
2. **清晰記錄原因**：記錄為什麼該方法需要被密封
3. **考慮未來可能性**：評估未來可能需要重寫該方法的場景
4. **使用適當的抽象級別**：在繼承結構中選擇合適的位置應用密封

## 總結

密封方法提供了一種機制，允許開發者在繼承鏈中鎖定方法的實現，防止子類進一步重寫。這在需要確保方法行為一致性或保護關鍵業務邏輯時特別有用。密封方法必須同時使用 `override` 和 `sealed` 關鍵字，並且只能應用於已經重寫了父類虛方法的方法。

密封方法代表了面向對象設計中在靈活性和控制之間的平衡：虛方法提供了擴展性，而密封方法則提供了對實現的保護。設計良好的類層次結構應當明智地使用這兩種機制，以達到既有彈性又有保障的代碼設計。
