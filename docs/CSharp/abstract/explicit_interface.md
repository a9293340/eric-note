# C# 顯式接口實現

## 什麼是顯式接口實現

顯式接口實現是一種 C# 特性，允許類別為多個介面中的同名方法提供不同的實現。當一個類別實現了兩個或多個包含相同簽名（相同名稱、參數和返回類型）方法的介面時，顯式接口實現可以解決這種名稱衝突。

## 為什麼需要顯式接口實現

在以下情況下需要使用顯式接口實現：

1. **方法名稱衝突**：當兩個或多個介面中存在相同名稱、相同參數和相同返回類型的方法
2. **不同邏輯需求**：當對於不同介面的同名方法需要提供不同的實現邏輯
3. **防止方法污染**：避免在類別的公共 API 中顯示特定於介面的方法

## 顯式接口實現的語法

標準介面實現：

```csharp
public void MethodName()
{
    // 實現
}
```

顯式介面實現：

```csharp
InterfaceName.MethodName()
{
    // 實現
}
```

注意：顯式介面實現不使用訪問修飾符（如 `public`、`private` 等）。

## 顯式接口實現的特點

1. **無訪問修飾符**：顯式介面方法不能有訪問修飾符
2. **不能直接訪問**：不能通過類別實例直接訪問顯式實現的方法
3. **必須通過介面引用訪問**：只能通過對應介面類型的引用訪問
4. **私有性質**：顯式實現的方法對類別來說實際上是私有的，只對特定介面可見

## 實際範例

### 例子 1：同名方法衝突解決

```csharp
// 第一個介面
public interface IVehicle
{
    void Move();
}

// 第二個介面
public interface IFlyingMachine
{
    void Move();
}

// 同時實現兩個介面的類別
public class FlyingCar : IVehicle, IFlyingMachine
{
    // 顯式實現 IVehicle 的 Move 方法
    void IVehicle.Move()
    {
        Console.WriteLine("車輛在地面上移動");
    }

    // 顯式實現 IFlyingMachine 的 Move 方法
    void IFlyingMachine.Move()
    {
        Console.WriteLine("飛行器在空中移動");
    }

    // 類別自己的公共方法
    public void StartJourney()
    {
        Console.WriteLine("開始旅程");
        // 可以在這裡使用顯式實現的方法
        ((IVehicle)this).Move();
        ((IFlyingMachine)this).Move();
    }
}

// 使用方式
public class Program
{
    public static void Main()
    {
        FlyingCar flyingCar = new FlyingCar();

        // 通過類別實例不能直接訪問顯式實現的方法
        // flyingCar.Move(); // 錯誤！

        // 必須通過介面引用訪問
        IVehicle vehicle = flyingCar;
        vehicle.Move(); // 輸出：車輛在地面上移動

        IFlyingMachine flyingMachine = flyingCar;
        flyingMachine.Move(); // 輸出：飛行器在空中移動

        // 使用類別自己的方法
        flyingCar.StartJourney();
    }
}
```

### 例子 2：人員和員工介面的 GetAge 方法

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
    int GetAge(); // 與 IPerson 有相同名稱的方法
}

// 經理類實現兩個介面
public class Manager : IPerson, IEmployee
{
    // 共用屬性實現
    private DateTime _dateOfBirth;
    public DateTime DateOfBirth
    {
        get { return _dateOfBirth; }
        set { _dateOfBirth = value; }
    }

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

    public string EmpName { get; set; }
    public string Location { get; set; }

    // 顯式實現 IPerson 的 GetAge 方法
    int IPerson.GetAge()
    {
        // 根據出生日期計算實際年齡
        TimeSpan difference = DateTime.Now - DateOfBirth;
        return Convert.ToInt32(difference.TotalDays / 365);
    }

    // 顯式實現 IEmployee 的 GetAge 方法
    int IEmployee.GetAge()
    {
        // 返回固定值（例如，就業年齡）
        return 20;
    }

    public decimal CalculateHealthInsuranceAmount()
    {
        return 1000;
    }

    // 建構函式
    public Manager(int id, string name, string location)
    {
        EmpID = id;
        EmpName = name;
        Location = location;
    }
}

// 使用方式
public class Program
{
    public static void Main()
    {
        Manager manager = new Manager(1500, "張三", "台北");
        manager.DateOfBirth = Convert.ToDateTime("1990-06-15");

        // 通過介面引用訪問不同的 GetAge 實現
        IPerson person = manager;
        Console.WriteLine($"實際年齡: {person.GetAge()} 歲"); // 輸出：實際年齡: 30 歲

        IEmployee employee = manager;
        Console.WriteLine($"就業年齡: {employee.GetAge()} 歲"); // 輸出：就業年齡: 20 歲

        // 無法直接通過類別引用訪問顯式實現的方法
        // Console.WriteLine(manager.GetAge()); // 錯誤！
    }
}
```

## 顯式接口實現與標準實現的比較

| 特性                      | 標準實現                | 顯式實現 |
| ------------------------- | ----------------------- | -------- |
| 訪問修飾符                | 必須有（通常是 public） | 不允許   |
| 直接通過類別實例訪問      | 可以                    | 不可以   |
| 通過介面引用訪問          | 可以                    | 可以     |
| 用於解決方法名稱衝突      | 不可以                  | 可以     |
| 方法在類別 API 中的可見性 | 可見                    | 不可見   |

## 何時使用顯式接口實現

顯式接口實現適用於以下情況：

1. **處理方法名稱衝突**：當實現多個包含同名方法的介面時
2. **提供介面特定的實現**：當同一個方法在不同介面中需要不同的行為
3. **隱藏實現細節**：當不希望介面方法成為類別公共 API 的一部分時
4. **降低 API 複雜性**：當類別實現了許多介面，但不希望使類別的公共介面變得混亂時

## 總結

顯式接口實現是 C# 中一個強大的特性，它允許類別為不同介面中的同名方法提供不同的實現，同時保持類別的公共 API 乾淨。雖然顯式實現的方法不能直接通過類別實例訪問，但可以通過對應介面類型的引用進行訪問，這提供了一種靈活的方式來處理介面方法衝突和實現多重繼承式的行為。

使用顯式接口實現時，需要注意：

1. 不能使用訪問修飾符
2. 只能通過介面引用訪問方法
3. 類別的公共 API 不會包含這些方法

這種實現方式使得 C# 可以更優雅地處理多重介面實現中可能出現的衝突，同時保持程式碼的清晰和可維護性。
