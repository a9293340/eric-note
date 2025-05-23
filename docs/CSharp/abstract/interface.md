# C# 介面 (Interface)

## 介面的定義

介面是一種特殊的程式設計結構，可視為「純抽象類別」，具有以下特點：

1. **只包含抽象成員**：介面只能包含抽象方法、屬性、事件和索引器，不包含實作。
2. **無法實例化**：不能直接為介面創建物件。
3. **名稱通常以 "I" 開頭**：例如 `IVehicle`、`IEmployee` 等，這是命名慣例。
4. **強制實作**：所有實作介面的類別必須提供介面所有成員的實作。

## 介面與抽象類別的比較

| 特性       | 抽象類別                     | 介面                             |
| ---------- | ---------------------------- | -------------------------------- |
| 成員實作   | 可以包含具體方法和抽象方法   | 只能包含抽象成員（方法、屬性等） |
| 繼承       | 一個類別只能繼承一個抽象類別 | 一個類別可以實作多個介面         |
| 欄位       | 可以包含欄位                 | 不能包含欄位                     |
| 建構函式   | 可以有建構函式               | 不能有建構函式                   |
| 從類別繼承 | 可以從其他類別繼承           | 不能從類別繼承                   |
| 存取修飾詞 | 成員可以使用不同的存取修飾詞 | 成員預設為 public，且不能更改    |

## 介面的語法

介面的基本語法如下：

```csharp
interface IInterfaceName
{
    // 抽象方法（無方法體）
    ReturnType MethodName(ParameterList);

    // 屬性
    Type PropertyName { get; set; }

    // 事件
    event EventHandler EventName;
}
```

注意事項：

- 介面成員預設為 public 和 abstract，不需要也不能加上這些修飾詞
- 介面成員沒有實作，方法以分號結尾
- 屬性只宣告 get/set 存取器，但不提供實作

## 實作介面

類別透過以下方式實作介面：

```csharp
class ClassName : IInterfaceName
{
    // 必須實作介面的所有成員
    public ReturnType MethodName(ParameterList)
    {
        // 方法實作
    }

    // 屬性實作
    public Type PropertyName
    {
        get { /* 實作 */ }
        set { /* 實作 */ }
    }

    // 事件實作
    public event EventHandler EventName;
}
```

實作介面時須注意：

- 必須實作介面的所有成員
- 實作方法時不需要 `override` 關鍵字（與抽象方法不同）
- 實作的成員必須是 public
- 實作的成員必須有與介面定義完全相同的簽名（名稱、參數、回傳類型）

## 實際例子

### 例子 1：員工介面

```csharp
// 介面定義
public interface IEmployee
{
    // 屬性
    int EmpID { get; set; }
    string EmpName { get; set; }
    string Location { get; set; }

    // 方法
    decimal CalculateHealthInsuranceAmount();
}

// 實作介面的類別 - 經理
public class Manager : IEmployee
{
    // 私有欄位
    private int _empID;
    private string _empName;
    private string _location;

    // 屬性實作
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

    // 方法實作
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

// 實作介面的類別 - 業務人員
public class SalesMan : IEmployee
{
    // 私有欄位
    private int _empID;
    private string _empName;
    private string _location;

    // 屬性實作
    public int EmpID
    {
        get { return _empID; }
        set
        {
            // 業務人員的 ID 範圍限制
            if (value >= 500 && value <= 1000)
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

    // 方法實作
    public decimal CalculateHealthInsuranceAmount()
    {
        return 500; // 業務人員的健康保險額度為 500
    }

    // 建構函式
    public SalesMan(int id, string name, string location)
    {
        EmpID = id;
        EmpName = name;
        Location = location;
    }
}
```

### 例子 2：交通工具介面

```csharp
// 介面定義
public interface IVehicle
{
    void Start();
    void Stop();
    void ChangeGear(int gear);
}

// 汽車類別實作
public class Car : IVehicle
{
    public void Start()
    {
        Console.WriteLine("汽車引擎啟動");
    }

    public void Stop()
    {
        Console.WriteLine("汽車停止");
    }

    public void ChangeGear(int gear)
    {
        Console.WriteLine($"汽車變換至 {gear} 檔");
    }
}

// 公車類別實作
public class Bus : IVehicle
{
    public void Start()
    {
        Console.WriteLine("公車引擎啟動");
    }

    public void Stop()
    {
        Console.WriteLine("公車停止");
    }

    public void ChangeGear(int gear)
    {
        Console.WriteLine($"公車變換至 {gear} 檔");
    }
}
```

## 介面的使用方式

### 透過介面參考變數

```csharp
// 使用介面參考變數
IVehicle vehicle1 = new Car();
IVehicle vehicle2 = new Bus();

// 呼叫介面方法
vehicle1.Start(); // 輸出：汽車引擎啟動
vehicle2.Start(); // 輸出：公車引擎啟動
```

這種做法的好處是：

- 可以使用同一介面型別的變數來參考不同的實作類別
- 程式碼更具彈性，遵循「依賴於抽象而非具體實作」的原則
- 便於測試和替換實作

## 多重介面實作

C# 允許一個類別實作多個介面，這實現了 C# 中的「多重繼承」概念：

```csharp
public interface IDrawable
{
    void Draw();
}

public interface IPrintable
{
    void Print();
}

// 實作多個介面
public class Document : IDrawable, IPrintable
{
    public void Draw()
    {
        Console.WriteLine("繪製文件到螢幕");
    }

    public void Print()
    {
        Console.WriteLine("列印文件到紙張");
    }
}
```

## 介面繼承

介面可以繼承自其他介面：

```csharp
public interface IBasic
{
    void Method1();
}

public interface IAdvanced : IBasic
{
    void Method2();
}

// 實作 IAdvanced 的類別必須同時實作 IBasic 和 IAdvanced 的所有方法
public class MyClass : IAdvanced
{
    public void Method1()
    {
        Console.WriteLine("實作 IBasic 的 Method1");
    }

    public void Method2()
    {
        Console.WriteLine("實作 IAdvanced 的 Method2");
    }
}
```

## 何時使用介面與抽象類別

### 使用介面的時機

- 當需要多重繼承時（一個類別需要實作多種行為）
- 當只需要定義「做什麼」，而不關心「怎麼做」時
- 當需要在不相關的類別之間建立共同的行為規範時
- 當希望強制所有子類別必須實作某些特定方法時

### 使用抽象類別的時機

- 當需要在父類別中提供部分實作時
- 當子類別需要共用某些共同的方法實作或欄位時
- 當需要使用非 public 成員時
- 當需要提供建構函式或欄位時

## 總結

介面是 C# 中實現抽象和多形性的重要機制，它提供了一種方法來定義類別必須遵循的契約，而不指定如何實作這些契約。介面的主要優點包括：

1. **強制實作**：確保所有實作類別都提供特定功能
2. **多重繼承**：允許類別實作多個介面
3. **分離關注點**：將「做什麼」與「怎麼做」分離
4. **提高程式碼的可測試性和可維護性**

理解何時使用介面和抽象類別是設計良好物件導向系統的關鍵。通常，當你想定義一個「是什麼」的關係時，使用抽象類別；當你想定義一個「能做什麼」的關係時，使用介面。
