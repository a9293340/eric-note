# C# 抽象類別重點

## 抽象類別的定義與特點

抽象類別是一種特殊的父類，具有以下關鍵特點：

1. **無法直接實例化**：不能為抽象類別創建對象。
2. **使用 `abstract` 關鍵字**：在類別定義中添加 `abstract` 關鍵字使其成為抽象類別。
3. **僅通過子類使用**：使用抽象類別的唯一方法是創建其子類。
4. **可包含抽象方法**：抽象類別可以包含抽象方法，這是普通類別無法做到的。

## 抽象類別的使用時機

當以下情況出現時，應考慮使用抽象類別：

- 當為父類創建對象沒有實際意義時
- 當一個類的存在僅為了提供給子類共同的字段、屬性和方法時
- 當某個類在沒有子類的情況下不能在現實世界中存在時

## 實際例子

### 例子 1：形狀（Shape）

```csharp
public abstract class Shape
{
    public abstract double CalculateArea();

    public void Display()
    {
        Console.WriteLine($"面積為: {CalculateArea()}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public override double CalculateArea()
    {
        return Width * Height;
    }
}
```

在這個例子中，我們不能直接繪製"形狀"，但可以繪製圓形或矩形。因此，Shape 類被設計為抽象類。

### 例子 2：人員（Person）

```csharp
public abstract class Person
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }

    public void DisplayInfo()
    {
        Console.WriteLine($"姓名: {Name}, 電子郵件: {Email}");
    }
}

public class Employee : Person
{
    public int EmployeeId { get; set; }
    public string Department { get; set; }
}

public class Customer : Person
{
    public int CustomerId { get; set; }
    public decimal TotalPurchases { get; set; }
}
```

在這個例子中，"人員"是一個通用概念，我們通常會創建特定類型的人員對象（如員工或客戶）。

## 普通類別與抽象類別的比較

| 特性                                 | 普通類別 | 抽象類別 |
| ------------------------------------ | -------- | -------- |
| 從其他類繼承                         | 可以     | 可以     |
| 從介面實現                           | 可以     | 可以     |
| 可以被繼承                           | 可以     | 可以     |
| 可以被實例化                         | 可以     | 不可以   |
| 可以包含抽象方法                     | 不可以   | 可以     |
| 可以包含字段、屬性、方法、構造函數等 | 可以     | 可以     |

## 抽象類別的成員

抽象類別可以包含以下所有類型的成員：

- 非靜態字段和靜態字段
- 非靜態方法和靜態方法
- 非靜態構造函數和靜態構造函數
- 非靜態屬性和靜態屬性
- 事件
- 析構函數
- 索引器
- 抽象方法（普通類別不可以擁有）

## 總結

抽象類別的兩個主要特點：

1. **不能直接實例化**：必須通過創建子類來使用抽象類別的成員。
2. **可以包含抽象方法**：這些方法必須由子類實現。

在實際應用中，當你希望父類僅提供共同成員但不希望直接實例化時，抽象類別是最佳選擇。
