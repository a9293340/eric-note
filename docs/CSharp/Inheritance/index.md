# C# 繼承 (Inheritance)

## 什麼是繼承

繼承是面向對象程式設計的核心概念之一，它允許您通過創建子類來擴展父類的功能。在 C# 中，繼承建立了一種 "is-a-type" 關係。

- **父類**：也稱為基類或超類，包含共用的屬性和方法
- **子類**：也稱為派生類，繼承父類的所有成員，並可添加自身特有的成員

### "is-a-type" 關係詳解

"is-a-type" 是一種描述兩個類之間關係的方式，表示一個類是另一個類的一種類型或特例。這是繼承的基本概念和設計原則。

當我們說「A 是 B 的一種類型」時，意味著 A 應該繼承自 B。例如：

- 老虎（Tiger）是一種動物（Animal）→ `class Tiger : Animal`
- 轎車（Car）是一種交通工具（Vehicle）→ `class Car : Vehicle`
- 經理（Manager）是一種員工（Employee）→ `class Manager : Employee`

這種關係的意義在於：

1. **概念上的包含**：子類的概念完全包含在父類的概念中
2. **行為的一致性**：子類對象可以在任何需要父類對象的地方使用（里氏替換原則）
3. **屬性和行為的繼承**：子類繼承父類的所有屬性和行為

在設計類繼承關係時，"is-a-type" 測試是一個重要的指導原則。如果你不能清楚地說出「A 是一種 B」，那麼 A 可能不應該繼承自 B，可能需要考慮其他關係（如組合、聚合或接口實現）。

## 繼承的目的

- 建立類之間的 "is-a-type" 關係
- 促進代碼重用
- 減少冗餘代碼
- 實現更好的代碼組織和維護

## 繼承的類型

1. **單一繼承**：一個子類只繼承自一個父類
2. **多重繼承**：一個子類繼承自多個父類（C# 不直接支持，但可通過接口實現）
3. **多級繼承**：形成繼承鏈，如 A → B → C
4. **分層繼承**：一個父類有多個子類
5. **混合繼承**：結合上述繼承類型

## 繼承的語法

```csharp
class ChildClassName : ParentClassName
{
    // 子類特有的成員
}
```

## 繼承的特點

1. **成員訪問**：

   - 子類可以訪問父類的所有**公共**和**保護**成員
   - 父類**不能**訪問子類特有的成員
   - 子類的對象包含父類和子類的所有字段

2. **訪問控制**：
   - `public`：所有類都可訪問
   - `protected`：只有該類及其子類可訪問
   - `private`：只有該類內部可訪問
   - `internal`：只有同一程序集內可訪問
   - `protected internal`：同一程序集或子類可訪問

## 使用 base 關鍵字

`base` 關鍵字用於從子類訪問父類的成員：

```csharp
class Child : Parent
{
    public void ChildMethod()
    {
        base.ParentMethod();    // 調用父類方法
        int x = base.ParentProperty;  // 訪問父類屬性
    }
}
```

## 調用父類構造函數

子類可以使用 `base` 關鍵字調用父類的構造函數：

```csharp
class Parent
{
    public Parent(string message)
    {
        Console.WriteLine(message);
    }
}

class Child : Parent
{
    public Child() : base("Called Parent Constructor")
    {
        // 子類構造函數代碼
    }
}
```

## 方法重寫與隱藏

### 方法重寫 (Override)

當子類需要修改父類方法的行為時使用。父類需要使用 `virtual` 關鍵字聲明方法，子類使用 `override` 關鍵字實現重寫：

```csharp
class Parent
{
    public virtual void Display()
    {
        Console.WriteLine("Parent's Display Method");
    }
}

class Child : Parent
{
    public override void Display()
    {
        Console.WriteLine("Child's Display Method");
    }
}
```

### 方法隱藏 (Hiding)

當子類想要提供與父類相同名稱但不同實現的方法時使用。使用 `new` 關鍵字：

```csharp
class Parent
{
    public void Display()
    {
        Console.WriteLine("Parent's Display Method");
    }
}

class Child : Parent
{
    public new void Display()
    {
        Console.WriteLine("Child's Display Method");
    }
}
```

## 繼承的實例

以下是一個簡單的繼承範例：

```csharp
// 父類
public class Employee
{
    private int _empId;
    private string _empName;
    private string _location;

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
    private string _department;

    public string Department
    {
        get { return _department; }
        set { _department = value; }
    }

    public int GetTotalSalesOfTheYear()
    {
        return 10000; // 示例返回值
    }
}

// 子類 - 銷售人員
public class SalesMan : Employee
{
    private string _region;

    public string Region
    {
        get { return _region; }
        set { _region = value; }
    }

    public int GetSalesOfTheCurrentMonth()
    {
        return 5000; // 示例返回值
    }
}
```

## 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建父類對象
        Employee emp = new Employee();
        emp.EmpId = 101;
        emp.EmpName = "父類員工";
        emp.Location = "台北";

        // 創建經理對象(子類)
        Manager mgr = new Manager();
        mgr.EmpId = 201;            // 父類成員
        mgr.EmpName = "經理名稱";    // 父類成員
        mgr.Location = "新北";       // 父類成員
        mgr.Department = "研發部";   // 子類特有成員
        int sales = mgr.GetTotalSalesOfTheYear(); // 子類特有方法

        // 創建銷售員對象(子類)
        SalesMan sm = new SalesMan();
        sm.EmpId = 301;            // 父類成員
        sm.EmpName = "銷售員名稱";   // 父類成員
        sm.Location = "台中";       // 父類成員
        sm.Region = "南區";         // 子類特有成員
        int monthlySales = sm.GetSalesOfTheCurrentMonth(); // 子類特有方法
    }
}
```

## 真實世界的繼承示例

1. **交通工具繼承**：Vehicle（父類）→ Car, Bus, Truck（子類）
2. **電子設備繼承**：ElectronicDevice（父類）→ MobilePhone, Laptop（子類）
3. **動物繼承**：Animal（父類）→ Tiger, Lion, Dog（子類）

## 總結

繼承是一種強大的機制，可以幫助您建立類之間的關係並重用代碼。當兩個或多個類之間存在 "is-a" 關係時（如「經理是一種員工」，「銷售員是一種員工」），繼承是一個合適的選擇。
