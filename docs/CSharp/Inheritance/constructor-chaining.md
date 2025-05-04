# C# 繼承中的構造函數鏈（Constructor Chaining）

在 C# 繼承中，當創建子類對象時，必須正確初始化父類和子類的字段。這種從子類構造函數調用父類構造函數的過程被稱為「構造函數鏈」或「構造函數串聯」。

## 構造函數的角色

在繼承關係中，構造函數扮演著重要角色：

- **父類構造函數**：負責初始化父類的字段
- **子類構造函數**：負責初始化子類特有的字段

## 初始化流程

當你創建子類的對象時，發生以下流程：

1. 首先調用子類構造函數
2. 子類構造函數通過 `base` 關鍵字調用父類構造函數
3. 父類構造函數完成父類字段的初始化
4. 控制返回到子類構造函數，完成子類字段的初始化

這確保了整個對象（包括繼承的部分）被正確初始化。

## 語法

從子類構造函數調用父類構造函數的語法如下：

```csharp
public class ChildClass : ParentClass
{
    public ChildClass([子類參數列表]) : base([父類參數列表])
    {
        // 子類構造函數體
    }
}
```

## 自動調用與顯式調用

在 C# 中，有兩種情況：

1. **自動調用**：如果父類有無參數構造函數，子類構造函數會自動調用它（即使不使用 `base` 關鍵字）
2. **必須顯式調用**：如果父類只有帶參數的構造函數，則子類構造函數必須使用 `base` 關鍵字顯式調用它

## 實際範例

以下是一個完整的例子，展示了構造函數鏈的工作方式：

```csharp
// 父類
public class Employee
{
    private int _empId;
    private string _empName;
    private string _location;

    // 父類的參數化構造函數
    public Employee(int empId, string empName, string location)
    {
        this._empId = empId;
        this._empName = empName;
        this._location = location;
        Console.WriteLine("Employee 類構造函數執行");
    }

    public int EmpId
    {
        get { return _empId; }
        set { _empId = value; }
    }

    public string EmpName
    {
        get { return _empName; }
        set { _empName = value; }
    }

    public string Location
    {
        get { return _location; }
        set { _location = value; }
    }
}

// 子類 - 經理
public class Manager : Employee
{
    private string _departmentName;

    // 子類構造函數，調用父類構造函數
    public Manager(int empId, string empName, string location, string departmentName)
        : base(empId, empName, location)  // 調用父類構造函數
    {
        this._departmentName = departmentName;
        Console.WriteLine("Manager 類構造函數執行");
    }

    public string DepartmentName
    {
        get { return _departmentName; }
        set { _departmentName = value; }
    }
}

// 子類 - 銷售員
public class SalesMan : Employee
{
    private string _region;

    // 子類構造函數，調用父類構造函數
    public SalesMan(int empId, string empName, string location, string region)
        : base(empId, empName, location)  // 調用父類構造函數
    {
        this._region = region;
        Console.WriteLine("SalesMan 類構造函數執行");
    }

    public string Region
    {
        get { return _region; }
        set { _region = value; }
    }
}
```

## 使用構造函數鏈創建對象

使用上面的類定義，我們可以這樣創建和使用對象：

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建父類對象
        Employee emp = new Employee(101, "John", "New York");
        Console.WriteLine($"Employee: {emp.EmpId}, {emp.EmpName}, {emp.Location}");

        // 創建經理對象（子類）
        Manager mgr = new Manager(201, "Mary", "Boston", "Finance");
        Console.WriteLine($"Manager: {mgr.EmpId}, {mgr.EmpName}, {mgr.Location}, {mgr.DepartmentName}");

        // 創建銷售員對象（子類）
        SalesMan sm = new SalesMan(301, "Tom", "Chicago", "East");
        Console.WriteLine($"SalesMan: {sm.EmpId}, {sm.EmpName}, {sm.Location}, {sm.Region}");
    }
}
```

執行結果：

```
Employee 類構造函數執行
Employee: 101, John, New York

Employee 類構造函數執行
Manager 類構造函數執行
Manager: 201, Mary, Boston, Finance

Employee 類構造函數執行
SalesMan 類構造函數執行
SalesMan: 301, Tom, Chicago, East
```

## 執行順序詳解

當創建 `Manager` 對象時，實際發生的順序是：

1. 調用 `Manager` 構造函數，接收 4 個參數
2. 在執行 `Manager` 構造函數體之前，通過 `base(empId, empName, location)` 調用 `Employee` 構造函數
3. `Employee` 構造函數執行，初始化 `_empId`、`_empName` 和 `_location` 字段
4. `Employee` 構造函數完成後，執行返回到 `Manager` 構造函數
5. `Manager` 構造函數初始化自己的 `_departmentName` 字段
6. 整個對象初始化完成

## 最佳實踐

1. **責任明確**：父類構造函數只初始化父類字段，子類構造函數只初始化子類字段
2. **參數傳遞**：子類構造函數應收集所有必要的參數，包括父類需要的參數
3. **避免在子類中初始化父類字段**：這不是良好的編程實踐
4. **保持構造函數簡潔**：構造函數應專注於初始化，而不是執行複雜的邏輯

## 總結

構造函數鏈是 C# 繼承中確保對象正確初始化的重要機制。通過從子類構造函數調用父類構造函數，我們確保了繼承層次結構中的每個級別都能正確初始化其字段，從而創建一個完全初始化的對象。
