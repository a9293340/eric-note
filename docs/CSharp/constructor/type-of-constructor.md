# 構造函數類型概述

## 無參數構造函數與參數化構造函數
- **無參數構造函數**：當構造函數沒有任何參數時，稱為無參數構造函數。通常使用一些固定值來初始化字段。
- **參數化構造函數**：當構造函數至少有一個參數時，稱為參數化構造函數。它接收參數並將這些值初始化到相應的字段中。

### 例子
```csharp
public class Employee
{
    public int EmpID;
    public string EmpName;

    // 無參數構造函數
    public Employee()
    {
        EmpID = 101;
        EmpName = "No Name";
    }

    // 參數化構造函數
    public Employee(int id, string name)
    {
        EmpID = id;
        EmpName = name;
    }
}
```

## 隱式構造函數與顯式構造函數
- **隱式構造函數**：當開發者未定義任何構造函數時，C# 編譯器會自動提供一個默認的構造函數，稱為隱式構造函數。這個構造函數不會初始化任何字段。
  
- **顯式構造函數**：當開發者定義了自己的構造函數（無參數或參數化）時，這被稱為顯式構造函數。在這種情況下，編譯器不會提供隱式構造函數。

### 隱式構造函數的例子
```csharp
public class DefaultEmployee
{
    // 隱式構造函數
    // 編譯器自動提供，無需顯式定義
}
```

### 顯式構造函數的例子
```csharp
public class ExplicitEmployee
{
    public int EmpID;
    public string EmpName;

    // 顯式構造函數
    public ExplicitEmployee(int id, string name)
    {
        EmpID = id;
        EmpName = name;
    }
}
```
