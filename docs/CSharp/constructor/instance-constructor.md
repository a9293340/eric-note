# 構造函數概述


## 什麼是構造函數？
構造函數是類的一個特殊方法，用於初始化類的字段。當為類創建對象時，構造函數會自動被調用。

### 例子
```csharp
public class Car
{
    public string CarBrand;
    public string CarModel;
    public int CarYear;
    // 構造函數
    public Car(string brand, string model, int year)
    {
        CarBrand = brand;
        CarModel = model;
        CarYear = year;
    }
}
```

## 構造函數的主要職責
1. 初始化字段
2. 執行其他必要的初始化邏輯

## 創建構造函數的規則
- 構造函數的名稱必須與類名相同。
- 構造函數可以接收一個或多個參數。
- 構造函數無法返回值。
- 可以在同一類中創建多個構造函數，但參數必須有所不同。

### 例子
```csharp
public class Book
{
    public string Title;
    public string Author;
    // 無參數構造函數
    public Book()
    {
        Title = "Unknown";
        Author = "Unknown";
    }
    // 參數化構造函數
    public Book(string title, string author)
    {
        Title = title;
        Author = author;
    }
}
```

## 使用構造函數的好處
- 每次創建對象時，可以向構造函數傳遞不同的值，從而初始化不同的字段。

### 例子
```csharp
public class Employee
{
    public int EmpID;
    public string EmpName;
    public string Job;
    // 參數化構造函數
    public Employee(int id, string name, string job)
    {
        EmpID = id;
        EmpName = name;
        Job = job;
    }
}
// 使用構造函數創建對象
Employee emp1 = new Employee(101, "Scott", "Manager");
Employee emp2 = new Employee(102, "Alice", "Developer");
```

## 總結
構造函數在C#中是用於初始化對象的重要工具。通過使用參數化構造函數，可以靈活地為每個對象設置不同的屬性值，從而實現更好的數據封裝和管理。
