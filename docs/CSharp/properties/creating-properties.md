# C# 中的屬性概述

## 屬性的定義
屬性是類的複合成員，包含兩個訪問器：`set` 訪問器和 `get` 訪問器。屬性的主要目的是接收傳入的值，檢查該值是否有效，並僅在值有效時將其賦給相應的字段。

### 屬性的工作原理
- 當用戶向屬性賦值時，`set` 訪問器會自動執行，並檢查該值的有效性。
- 如果值有效，則將其賦給相應的私有字段；如果無效，則不進行賦值。

## 屬性的語法
屬性需要一個私有字段來存儲值。以下是屬性的基本語法：
```csharp
public class Car
{
    private string _carBrand; // 私有字段

    public string CarBrand // 公共屬性
    {
        get { return _carBrand; } // 獲取字段值
        set 
        {
            // 驗證邏輯
            if (!string.IsNullOrEmpty(value) && value.Length <= 10)
            {
                _carBrand = value; // 設置字段值
            }
        }
    }
}
```

## set & get 的 modifier 必須要比訪問修飾詞還要嚴謹

```csharp
public class Car
{
    private string _carBrand; // 私有字段

    public string CarBrand
    {
         private get { return _carBrand; }
         public set { _carBrand = value; }
    }
}
```

### 改寫先前的例子
```csharp
public class Employee
{
    private int _empID;
    private string _empName;
    private string _job;

    public int EmpID
    {
        get { return _empID; }
        set 
        {
            if (value >= 100) // 驗證邏輯
            {
                _empID = value;
            }
        }
    }

    public string EmpName
    {
        get { return _empName; }
        set { _empName = value; }
    }

    public string Job
    {
        get { return _job; }
        set { _job = value; }
    }

    // 靜態字段和屬性
    private static string _companyName;

    public static string CompanyName
    {
        get { return _companyName; }
        set 
        {
            if (value.Length <= 20) // 驗證邏輯
            {
                _companyName = value;
            }
        }
    }
}
```

## 自動實現的屬性
C# 也支持自動實現的屬性，這樣可以省略私有字段的定義，編譯器會自動生成。
```csharp
public class Product
{
    public string Name { get; set; } // 自動實現的屬性
    public decimal Price { get; set; } // 自動實現的屬性
}
```

## 總結
屬性提供了一種安全的方式來訪問和修改類的字段，並允許在賦值時添加驗證邏輯。建議在每個字段上都創建屬性，以確保數據的完整性和有效性。在實際應用中，使用屬性可以有效地控制對字段的訪問，並防止無效數據的賦值。
