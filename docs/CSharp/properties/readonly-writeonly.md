# C# 中的只讀屬性和只寫屬性

## 只讀屬性
只讀屬性是一種只有 `get` 訪問器的屬性，允許用戶隨時讀取屬性的值，但不能為其指定值。當您希望用戶能夠讀取字段的值，但不希望他們修改時，可以使用只讀屬性。

### 例子
在 `Employee` 類中，假設有一個 `Salary` 屬性，您希望用戶能夠讀取工資，但不希望他們修改它。

```csharp
public class Employee
{
    private double _salary; // 私有字段

    public double Salary // 只讀屬性
    {
        get { return _salary; } // 只包含 get 訪問器
    }

    public Employee()
    {
        _salary = 1000; // 在構造函數中初始化
    }
}
```

## 只寫屬性
只寫屬性與只讀屬性相反，您可以在任何時候將值賦給只寫屬性，但不能通過屬性讀取現有值。只寫屬性只包含 `set` 訪問器。

### 例子
在 `Employee` 類中，假設有一個 `Tax` 屬性，您希望用戶能夠設置稅率，但不希望他們能夠讀取該值。

```csharp
public class Employee
{
    private double _tax; // 私有字段

    public double Tax // 只寫屬性
    {
        set 
        {
            if (value >= 0 && value <= 100) // 驗證邏輯
            {
                _tax = value; // 設置字段值
            }
        }
    }

    public double CalculateNetSalary()
    {
        return _salary - _tax; // 使用私有字段進行計算
    }
}
```

## 使用示例
在 `Main` 方法中，您可以為 `Tax` 屬性賦值，但不能讀取它。

```csharp
public static void Main(string[] args)
{
    Employee emp1 = new Employee();
    emp1.Tax = 50; // 設置稅率

    double netSalary = emp1.CalculateNetSalary(); // 計算淨工資
    Console.WriteLine($"Employee's net salary is: {netSalary}"); // 顯示淨工資
}
```

## 總結
- **只讀屬性**：允許用戶讀取值，但不允許修改。適用於需要保護的數據。
- **只寫屬性**：允許用戶設置值，但不允許讀取。適用於需要隱藏數據的情況。

在實際項目中，根據需求選擇使用只讀屬性或只寫屬性，以確保數據的完整性和安全性。
