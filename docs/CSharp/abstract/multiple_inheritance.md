# C# 多重繼承

## 什麼是多重繼承

多重繼承是指一個類別同時從多個父類別或父介面繼承的能力。這使得子類別可以具有多個父類別或父介面的特性和行為。

## C# 中的多重繼承限制

在 C# 中，對多重繼承有以下限制：

- **不允許一個類別繼承多個父類別**：C# 不支援類別的多重繼承，一個類別只能有一個直接父類別
- **允許一個類別實現多個介面**：C# 允許一個類別同時實現多個介面，這是實現多重繼承概念的方式
- **允許一個介面繼承多個介面**：一個介面可以同時從多個父介面繼承

## 多重繼承的語法

當一個類別要實現多個介面時，語法如下：

```csharp
public class ClassName : Interface1, Interface2, Interface3
{
    // 必須實現所有介面的所有成員
}
```

當一個介面要繼承多個介面時，語法如下：

```csharp
public interface IChildInterface : IParentInterface1, IParentInterface2
{
    // 額外成員定義
}
```

## 實際範例

### 例子 1：飛行車輛

考慮一個飛行車輛的例子，它既是車輛又是飛行機器：

```csharp
// 車輛介面
public interface IVehicle
{
    void Drive();
    void StartEngine();
    int Wheels { get; }
}

// 飛行機器介面
public interface IFlyingMachine
{
    void Fly();
    void Land();
    int MaxAltitude { get; }
}

// 飛行車輛類別同時實現兩個介面
public class FlyingCar : IVehicle, IFlyingMachine
{
    // 實現 IVehicle 的成員
    public void Drive()
    {
        Console.WriteLine("飛行車在道路上行駛");
    }

    public void StartEngine()
    {
        Console.WriteLine("飛行車引擎啟動");
    }

    public int Wheels => 4;

    // 實現 IFlyingMachine 的成員
    public void Fly()
    {
        Console.WriteLine("飛行車升空飛行");
    }

    public void Land()
    {
        Console.WriteLine("飛行車著陸");
    }

    public int MaxAltitude => 5000; // 最大高度（米）

    // 類別自己的成員
    public void Transform()
    {
        Console.WriteLine("飛行車從行駛模式轉換到飛行模式");
    }
}
```

### 例子 2：人員與員工

考慮一個經理既是人又是員工的例子：

```csharp
// 人員介面
public interface IPerson
{
    DateTime DateOfBirth { get; set; }
    int GetAge();
}

// 員工介面
public interface IEmployee
{
    int EmpID { get; set; }
    string EmpName { get; set; }
    string Location { get; set; }
    decimal CalculateHealthInsuranceAmount();
}

// 經理類別同時實現兩個介面
public class Manager : IPerson, IEmployee
{
    // 實現 IPerson 的成員
    private DateTime _dateOfBirth;
    public DateTime DateOfBirth
    {
        get { return _dateOfBirth; }
        set { _dateOfBirth = value; }
    }

    public int GetAge()
    {
        // 計算目前年齡
        TimeSpan difference = DateTime.Now - DateOfBirth;
        return Convert.ToInt32(difference.TotalDays / 365);
    }

    // 實現 IEmployee 的成員
    private int _empID;
    private string _empName;
    private string _location;

    public int EmpID
    {
        get { return _empID; }
        set
        {
            // 經理的 ID 範圍限制
            if (value >= 1000 && value <= 2000)
                _empID = value;
        }
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

    public decimal CalculateHealthInsuranceAmount()
    {
        return 1000; // 經理的健康保險額度為 1000
    }

    // 建構函式
    public Manager(int id, string name, string location)
    {
        EmpID = id;
        EmpName = name;
        Location = location;
    }
}
```

## 使用多重繼承

### 透過特定介面參考存取成員

當使用多重繼承時，可以通過介面類型的參考變數來存取特定介面的成員：

```csharp
// 創建 Manager 物件
Manager manager = new Manager(1500, "張三", "台北");
manager.DateOfBirth = Convert.ToDateTime("1990-06-15");

// 通過 IPerson 介面參考存取 IPerson 成員
IPerson person = manager;
Console.WriteLine($"出生日期: {person.DateOfBirth:yyyy-MM-dd}");
Console.WriteLine($"年齡: {person.GetAge()} 歲");

// 通過 IEmployee 介面參考存取 IEmployee 成員
IEmployee employee = manager;
Console.WriteLine($"員工 ID: {employee.EmpID}");
Console.WriteLine($"員工姓名: {employee.EmpName}");
Console.WriteLine($"健康保險金額: {employee.CalculateHealthInsuranceAmount()} 元");
```

### 限制

- 通過介面參考，只能存取該介面定義的成員
- 通過類別自身的參考，可以存取所有實現的介面成員以及自身的成員

## 多重繼承的優點與使用時機

多重繼承的主要優點：

1. **代碼復用**：允許一個類別使用多個介面的功能
2. **靈活性**：一個類別可以履行多個角色
3. **解耦**：將不同的責任分配到不同的介面

使用多重繼承的時機：

- 當一個類別需要表示多個不同的概念或角色時
- 當需要從多個來源獲得行為時
- 當設計需要高度模組化和可擴展性時

## 總結

在 C# 中，雖然不支援類別的多重繼承，但通過實現多個介面，可以達到類似的效果。這種方式既提供了多重繼承的靈活性，又避免了傳統多重繼承中可能出現的「菱形繼承問題」（Diamond Problem）。

多重介面繼承是 C# 中使用廣泛的設計模式，特別是在設計模組化、可擴展的系統時。正確使用多重介面繼承可以使程式碼更易於維護、更加靈活，並且更好地符合面向對象設計原則。
