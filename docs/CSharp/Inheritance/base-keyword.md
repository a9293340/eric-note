# C# 中的 base 關鍵字

`base` 是 C# 中的一個預定義關鍵字，它允許子類訪問和操作父類（基類）的成員。這個關鍵字在繼承關係中扮演著重要的角色，幫助解決命名衝突並提供對父類成員的直接訪問。

## base 關鍵字的基本用途

`base` 關鍵字主要用於以下場景：

1. 訪問父類的字段
2. 調用父類的方法
3. 訪問父類的屬性
4. 調用父類的構造函數

## 基本語法

```csharp
// 訪問父類的成員
base.MemberName

// 調用父類的方法
base.MethodName()

// 調用父類的構造函數
public ChildClass() : base()
{
    // 子類構造函數代碼
}
```

## 何時使用 base 關鍵字

### 1. 可選的使用情況

在大多數情況下，使用 `base` 關鍵字是可選的。子類可以直接訪問父類的公共（public）和受保護（protected）成員，而不需要使用 `base` 關鍵字：

```csharp
// 父類
public class Parent
{
    public string Name { get; set; }
}

// 子類
public class Child : Parent
{
    public void DisplayName()
    {
        // 直接訪問父類的屬性，不使用 base 關鍵字
        Console.WriteLine(Name);

        // 使用 base 關鍵字（效果相同）
        Console.WriteLine(base.Name);
    }
}
```

### 2. 必須使用的情況

當子類中的成員（字段、屬性或方法）與父類中的成員同名時，必須使用 `base` 關鍵字來明確引用父類的成員：

```csharp
// 父類
public class Employee
{
    public string DepartmentName { get; set; }
}

// 子類
public class Manager : Employee
{
    // 與父類同名的屬性
    public string DepartmentName { get; set; }

    public string GetFullDepartmentName()
    {
        // 使用 base 訪問父類的同名屬性
        return DepartmentName + " " + base.DepartmentName;
    }
}
```

在上面的例子中，如果不使用 `base` 關鍵字，`DepartmentName` 將默認引用子類的屬性。

## 實際示例

下面是一個展示 `base` 關鍵字使用的完整示例：

```csharp
// 父類
public class Employee
{
    protected string _location; // 受保護的字段

    public string Location
    {
        get { return _location; }
        set { _location = value; }
    }

    public string EmpName { get; set; }
}

// 子類
public class Manager : Employee
{
    private string _departmentName;

    public string DepartmentName
    {
        get { return _departmentName; }
        set { _departmentName = value; }
    }

    // 使用 base 關鍵字訪問父類成員
    public string GetFullDepartmentName()
    {
        // 返回部門名稱和地點的組合
        return DepartmentName + " " + base.Location;
    }

    // 直接訪問父類的受保護字段
    public string GetLocationDirectly()
    {
        return base._location; // 訪問父類的受保護字段
    }
}

// 使用示例
class Program
{
    static void Main(string[] args)
    {
        Manager manager = new Manager();
        manager.DepartmentName = "Accounting";
        manager.Location = "New York";

        // 輸出: "Accounting New York"
        Console.WriteLine(manager.GetFullDepartmentName());
    }
}
```

## 訪問父類的受保護成員

`base` 關鍵字允許子類訪問父類的受保護（protected）成員。受保護的成員只能在該類及其子類中訪問，而不能在外部類中直接訪問：

```csharp
// 父類
public class Parent
{
    protected string _protectedField = "Protected Value";

    protected void ProtectedMethod()
    {
        Console.WriteLine("This is a protected method");
    }
}

// 子類
public class Child : Parent
{
    public void AccessProtectedMembers()
    {
        // 訪問父類的受保護字段
        Console.WriteLine(base._protectedField);

        // 調用父類的受保護方法
        base.ProtectedMethod();
    }
}
```

## 使用 base 調用父類構造函數

`base` 關鍵字還可用於從子類構造函數調用父類的構造函數：

```csharp
// 父類
public class Parent
{
    public Parent()
    {
        Console.WriteLine("Parent default constructor");
    }

    public Parent(string message)
    {
        Console.WriteLine("Parent constructor with message: " + message);
    }
}

// 子類
public class Child : Parent
{
    // 調用父類默認構造函數
    public Child() : base()
    {
        Console.WriteLine("Child default constructor");
    }

    // 調用父類帶參數的構造函數
    public Child(string message) : base(message)
    {
        Console.WriteLine("Child constructor with message");
    }
}
```

當實例化子類時，父類的構造函數會先執行，然後才執行子類的構造函數。以下是執行結果：

```
// 創建 Child 的無參實例
Child child1 = new Child();

// 輸出結果：
Parent default constructor
Child default constructor

// 創建 Child 的帶參數實例
Child child2 = new Child("Hello");

// 輸出結果：
Parent constructor with message: Hello
Child constructor with message
```

這展示了 C# 中繼承關係的初始化順序：先初始化父類，再初始化子類。若子類構造函數沒有明確使用 `base` 調用父類構造函數，編譯器會自動調用父類的無參數構造函數。

## 總結

`base` 關鍵字是 C# 繼承機制中的重要工具，它允許子類與父類之間進行明確的成員訪問。雖然在大多數情況下使用它是可選的，但在處理命名衝突或需要明確引用父類成員時，它是必不可少的。

適當使用 `base` 關鍵字可以幫助您編寫更清晰、更可維護的代碼，特別是在複雜的繼承層次結構中。
