# C# 抽象（Abstract）概念

## 什麼是抽象？

抽象是面向對象程式設計的一個核心概念。透過抽象，我們可以簡化複雜系統的結構和行為，只保留重要的細節。抽象就像是一個藍圖或契約，只包含特定類別的重要屬性或方法。

抽象的主要目的是：

- 隱藏複雜的實作細節
- 僅展示必要的功能
- 提供一個共同的介面給不同的實作

## 抽象類別與介面

在 C#中，抽象主要通過以下兩種方式實現：

1. 抽象類別（Abstract Class）
2. 介面（Interface）

這兩者都作為一種契約，規定子類別必須實現哪些特定的成員或方法。

### 抽象類別

抽象類別是不能被直接實例化的類別，它作為其他類別的基礎類別。抽象類別可以包含：

- 抽象方法（沒有實作的方法）
- 具體方法（有實作的方法）
- 屬性、欄位等成員

```csharp
public abstract class Vehicle
{
    // 具體屬性
    public string Model { get; set; }

    // 具體方法
    public void StartEngine()
    {
        Console.WriteLine("引擎啟動");
    }

    // 抽象方法（必須被子類別實現）
    public abstract void Drive();
}
```

### 介面

介面只定義契約，不提供任何實作。介面中的所有成員都是隱式抽象的：

```csharp
public interface IVehicle
{
    string Model { get; set; }
    void StartEngine();
    void Drive();
}
```

## 抽象類別與介面的區別

| 特性       | 抽象類別                     | 介面                        |
| ---------- | ---------------------------- | --------------------------- |
| 實作       | 可以包含具體方法和抽象方法   | 僅包含抽象方法（C# 8.0 前） |
| 繼承       | 一個類別只能繼承一個抽象類別 | 一個類別可以實現多個介面    |
| 欄位       | 可以包含欄位                 | 不能包含欄位（只能有屬性）  |
| 建構函式   | 可以有建構函式               | 沒有建構函式                |
| 存取修飾詞 | 可以使用不同的存取修飾詞     | 成員預設為公開（public）    |

## 實際範例：汽車類別

以汽車（Car）類別為例，我們可以建立一個抽象類別或介面來定義每輛車都應該具備的共同特性：

```csharp
public abstract class Car
{
    // 共同屬性
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }

    // 具體方法
    public void StartEngine()
    {
        Console.WriteLine($"{Brand} {Model} 引擎啟動");
    }

    // 抽象方法
    public abstract void Accelerate();
    public abstract void Brake();
}
```

子類別必須實現這些抽象方法：

```csharp
public class SportsCar : Car
{
    public override void Accelerate()
    {
        Console.WriteLine($"{Brand} {Model} 快速加速");
    }

    public override void Brake()
    {
        Console.WriteLine($"{Brand} {Model} 使用高性能煞車系統");
    }
}
```

## 抽象的比喻

抽象就像是一本書的目錄或索引。當您查看書的目錄時，您可以了解這本書涵蓋的主題，而不必閱讀整本書。同樣地，抽象類別或介面提供了類別的「目錄」，展示該類別應該具備的重要方法和屬性，而不必關注具體實作細節。

## 總結

抽象是面向對象程式設計中的重要概念，它使我們能夠：

1. 創建通用藍圖（抽象類別或介面）
2. 定義子類別必須遵守的契約
3. 隱藏複雜的實作細節
4. 專注於重要的功能

在 C#開發中合理使用抽象，可以使程式碼更具可維護性、可擴展性和重用性。
