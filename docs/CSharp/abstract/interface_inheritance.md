# C# 接口繼承

## 什麼是接口繼承

接口繼承是指一個接口繼承自另一個接口的能力，形成父子接口關係。當一個接口繼承自另一個接口時，子接口不僅包含自己定義的成員，還包含了父接口的所有成員。

## 接口繼承的語法

接口繼承的語法與類別繼承類似：

```csharp
// 父接口
public interface IParentInterface
{
    void ParentMethod1();
    void ParentMethod2();
}

// 子接口繼承自父接口
public interface IChildInterface : IParentInterface
{
    void ChildMethod1();
    void ChildMethod2();
}

// 實現子接口的類必須實現所有父接口和子接口的成員
public class MyClass : IChildInterface
{
    // 實現父接口的方法
    public void ParentMethod1() { /* 實作 */ }
    public void ParentMethod2() { /* 實作 */ }

    // 實現子接口的方法
    public void ChildMethod1() { /* 實作 */ }
    public void ChildMethod2() { /* 實作 */ }
}
```

## 接口繼承的特點

1. **累積性**：子接口繼承父接口的所有成員
2. **強制性**：實現子接口的類必須實現所有父接口的成員
3. **多層次**：接口繼承可以有多個層次，形成接口繼承鏈
4. **多重繼承**：一個接口可以同時繼承多個父接口

## 實際範例

### 例子 1：交通工具和飛行交通工具

```csharp
// 交通工具接口
public interface IVehicle
{
    void StartEngine();
    void StopEngine();
    int PassengerCapacity { get; }
    string Model { get; set; }
}

// 飛行交通工具接口 (繼承自 IVehicle)
public interface IFlyingVehicle : IVehicle
{
    void TakeOff();
    void Land();
    int MaxAltitude { get; }
    bool HasAutopilot { get; }
}

// 實現 IFlyingVehicle 接口的飛機類
public class Airplane : IFlyingVehicle
{
    // 實現 IVehicle 的成員 (因為 IFlyingVehicle 繼承自 IVehicle)
    public void StartEngine()
    {
        Console.WriteLine("飛機引擎啟動");
    }

    public void StopEngine()
    {
        Console.WriteLine("飛機引擎關閉");
    }

    public int PassengerCapacity => 200;

    public string Model { get; set; }

    // 實現 IFlyingVehicle 的成員
    public void TakeOff()
    {
        Console.WriteLine("飛機起飛");
    }

    public void Land()
    {
        Console.WriteLine("飛機著陸");
    }

    public int MaxAltitude => 12000; // 最大高度（米）

    public bool HasAutopilot => true;
}
```

### 例子 2：人員和員工接口

```csharp
// 人員接口
public interface IPerson
{
    string Name { get; set; }
    DateTime DateOfBirth { get; set; }
    int GetAge();
}

// 員工接口 (繼承自 IPerson)
public interface IEmployee : IPerson
{
    int EmpID { get; set; }
    string Location { get; set; }
    decimal CalculateHealthInsuranceAmount();
}

// 經理類實現 IEmployee 接口
public class Manager : IEmployee
{
    // 實現 IPerson 成員 (因為 IEmployee 繼承自 IPerson)
    public string Name { get; set; }

    private DateTime _dateOfBirth;
    public DateTime DateOfBirth
    {
        get { return _dateOfBirth; }
        set { _dateOfBirth = value; }
    }

    public int GetAge()
    {
        TimeSpan difference = DateTime.Now - DateOfBirth;
        return Convert.ToInt32(difference.TotalDays / 365);
    }

    // 實現 IEmployee 成員
    private int _empID;
    public int EmpID
    {
        get { return _empID; }
        set
        {
            if (value >= 1000 && value <= 2000)
                _empID = value;
        }
    }

    public string Location { get; set; }

    public decimal CalculateHealthInsuranceAmount()
    {
        return 1000; // 經理的健康保險額度為 1000
    }

    // 建構函式
    public Manager(int id, string name, string location)
    {
        EmpID = id;
        Name = name;
        Location = location;
    }
}

// 業務人員類也實現 IEmployee 接口
public class SalesMan : IEmployee
{
    // 實現 IPerson 成員 (因為 IEmployee 繼承自 IPerson)
    public string Name { get; set; }

    private DateTime _dateOfBirth;
    public DateTime DateOfBirth
    {
        get { return _dateOfBirth; }
        set { _dateOfBirth = value; }
    }

    public int GetAge()
    {
        TimeSpan difference = DateTime.Now - DateOfBirth;
        return Convert.ToInt32(difference.TotalDays / 365);
    }

    // 實現 IEmployee 成員
    private int _empID;
    public int EmpID
    {
        get { return _empID; }
        set
        {
            if (value >= 500 && value <= 1000)
                _empID = value;
        }
    }

    public string Location { get; set; }

    public decimal CalculateHealthInsuranceAmount()
    {
        return 500; // 業務人員的健康保險額度為 500
    }

    // 建構函式
    public SalesMan(int id, string name, string location)
    {
        EmpID = id;
        Name = name;
        Location = location;
    }
}
```

## 使用接口繼承

### 通過不同級別的接口訪問成員

```csharp
// 創建 Manager 實例
Manager manager = new Manager(1500, "張三", "台北");
manager.DateOfBirth = Convert.ToDateTime("1990-06-15");

// 通過 IPerson 接口訪問人員信息
IPerson person = manager;
Console.WriteLine($"姓名: {person.Name}");
Console.WriteLine($"年齡: {person.GetAge()} 歲");

// 通過 IEmployee 接口訪問人員和員工信息
IEmployee employee = manager;
Console.WriteLine($"姓名: {employee.Name}"); // 來自 IPerson
Console.WriteLine($"年齡: {employee.GetAge()} 歲"); // 來自 IPerson
Console.WriteLine($"員工 ID: {employee.EmpID}"); // 來自 IEmployee
Console.WriteLine($"健康保險金額: {employee.CalculateHealthInsuranceAmount()} 元"); // 來自 IEmployee
```

### 接口繼承的重要性質

1. **通過父接口引用只能訪問父接口成員**：

   ```csharp
   IPerson person = manager;
   // person.EmpID; // 錯誤！IPerson 不包含 EmpID
   ```

2. **通過子接口引用可以訪問父接口和子接口的成員**：
   ```csharp
   IEmployee employee = manager;
   employee.Name; // 可以訪問 (來自 IPerson)
   employee.EmpID; // 可以訪問 (來自 IEmployee)
   ```

## 接口繼承的好處

1. **確保實現一致性**：當一個類實現子接口時，必須也實現父接口，確保了所有必要功能的實現。

2. **模型化概念關係**：可以表達概念上的「是一種」關係，例如「員工是一個人」。

3. **代碼組織**：允許將相關功能分組，形成更有層次的接口結構。

4. **促進接口的重用**：通用功能可以放在父接口中，特定功能放在子接口中。

## 實際應用場景

### 教育系統例子

```csharp
// 人員接口
public interface IPerson
{
    string Name { get; set; }
    DateTime DateOfBirth { get; set; }
}

// 教師接口 (繼承自 IPerson)
public interface ITeacher : IPerson
{
    string Subject { get; set; }
    void Teach();
}

// 教授接口 (繼承自 ITeacher)
public interface IProfessor : ITeacher
{
    string ResearchArea { get; set; }
    void ConductResearch();
}

// 教授類
public class Professor : IProfessor
{
    // 實現 IPerson 成員
    public string Name { get; set; }
    public DateTime DateOfBirth { get; set; }

    // 實現 ITeacher 成員
    public string Subject { get; set; }
    public void Teach()
    {
        Console.WriteLine($"{Name} 正在教授 {Subject}");
    }

    // 實現 IProfessor 成員
    public string ResearchArea { get; set; }
    public void ConductResearch()
    {
        Console.WriteLine($"{Name} 正在 {ResearchArea} 領域進行研究");
    }
}
```

## 總結

接口繼承是 C# 中一個強大的功能，它允許我們建立層次化的接口結構，表達概念上的「是一種」關係。通過接口繼承，我們可以：

1. 確保實現子接口的類也實現所有父接口的功能
2. 在子接口中添加特定功能，同時保留父接口的通用功能
3. 建立更有組織性和層次性的代碼結構

接口繼承經常與多重接口實現一起使用，形成靈活而強大的類型設計方式，使我們能夠建立符合實際業務邏輯關係的對象模型。
