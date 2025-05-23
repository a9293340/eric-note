# C# 多態性

## 什麼是多態性

多態性是面向對象程式設計的四大特性之一（封裝、繼承、多態、抽象）。多態性一詞來源於希臘語，意為「多種形態」。

**多態性的定義**：同一條陳述在不同情況下調用不同方法的能力。換句話說，多態性讓程式能夠根據當前的執行環境做出不同的反應。

**多態性的核心**：「決策能力」—根據當前情況決定應該調用哪個方法。

## 多態性的類型

多態性主要分為兩種類型：

### 1. 編譯時多態性（靜態多態性）

- 又稱「早期綁定」(Early Binding)
- 決策在編譯時期完成
- 例如：方法重載（Method Overloading）

```csharp
public class Calculator
{
    // 方法重載的例子
    public int Add(int a, int b)
    {
        return a + b;
    }

    public double Add(double a, double b)
    {
        return a + b;
    }

    public string Add(string a, string b)
    {
        return a + b;
    }
}
```

在上面的例子中，編譯器會根據傳入的參數類型決定調用哪個 `Add` 方法。

### 2. 運行時多態性（動態多態性）

- 又稱「晚期綁定」(Late Binding)
- 決策在執行時期完成
- 例如：方法覆寫（Method Overriding）
- 可透過抽象類別或介面實現

## 透過抽象類別實現動態多態性

動態多態性透過抽象類別的實現步驟：

1. 在抽象類別中定義抽象方法
2. 在不同子類別中實現該抽象方法
3. 使用抽象類別的參考變數來存儲子類別物件的參考
4. 透過抽象類別的參考變數調用方法

### 實例示範

```csharp
// 抽象類別
public abstract class Employee
{
    public string Name { get; set; }

    // 抽象方法
    public abstract decimal CalculateHealthInsuranceAmount();
}

// 第一個子類別
public class Manager : Employee
{
    public override decimal CalculateHealthInsuranceAmount()
    {
        return 1000; // 經理的保險金額為1000
    }
}

// 第二個子類別
public class SalesMan : Employee
{
    public override decimal CalculateHealthInsuranceAmount()
    {
        return 500; // 銷售員的保險金額為500
    }
}

// 主程式使用範例
public class Program
{
    public static void Main()
    {
        // 透過抽象類別的參考變數來實現多態
        Employee emp;

        // 情況1：參考變數指向 Manager 物件
        emp = new Manager();
        Console.WriteLine($"保險金額: {emp.CalculateHealthInsuranceAmount()}"); // 輸出: 保險金額: 1000

        // 情況2：同一參考變數指向 SalesMan 物件
        emp = new SalesMan();
        Console.WriteLine($"保險金額: {emp.CalculateHealthInsuranceAmount()}"); // 輸出: 保險金額: 500
    }
}
```

在上面的例子中：

- 相同的程式碼 `emp.CalculateHealthInsuranceAmount()` 在不同情況下調用不同的方法
- 當 `emp` 參考 `Manager` 物件時，調用 `Manager` 類別的方法
- 當 `emp` 參考 `SalesMan` 物件時，調用 `SalesMan` 類別的方法
- 決定調用哪個方法的決策在運行時基於物件的實際類型而做出

## 透過介面實現動態多態性

動態多態性也可以透過介面實現，步驟如下：

1. 定義一個含有方法的介面
2. 在不同類別中實現該介面
3. 使用介面的參考變數來存儲實現類別物件的參考
4. 透過介面的參考變數調用方法

### 實例示範

```csharp
// 介面定義
public interface IEmployee
{
    decimal CalculateHealthInsuranceAmount();
}

// 第一個實現類別
public class Manager : IEmployee
{
    public decimal CalculateHealthInsuranceAmount()
    {
        return 1000; // 經理的保險金額為1000
    }
}

// 第二個實現類別
public class SalesMan : IEmployee
{
    public decimal CalculateHealthInsuranceAmount()
    {
        return 500; // 銷售員的保險金額為500
    }
}

// 主程式使用範例
public class Program
{
    public static void Main()
    {
        // 透過介面的參考變數來實現多態
        IEmployee emp;

        // 情況1：參考變數指向 Manager 物件
        emp = new Manager();
        Console.WriteLine($"保險金額: {emp.CalculateHealthInsuranceAmount()}"); // 輸出: 保險金額: 1000

        // 情況2：同一參考變數指向 SalesMan 物件
        emp = new SalesMan();
        Console.WriteLine($"保險金額: {emp.CalculateHealthInsuranceAmount()}"); // 輸出: 保險金額: 500
    }
}
```

## 多態性的實際應用

在實際開發過程中，多態性的應用非常廣泛：

1. **框架設計**：設計者只需定義抽象類別或介面，使用者可實現不同的子類別來擴展功能。

2. **模組化開發**：不同開發人員可獨立開發不同的實現類別，只要遵循同一介面/抽象類別。

3. **程式碼重用**：可編寫處理父類別/介面的通用代碼，並用於處理所有子類別。

4. **依賴注入**：允許在運行時替換組件實現，提高系統的靈活性和可測試性。

### 實際開發場景

考慮一個付款處理系統：

```csharp
// 付款處理介面
public interface IPaymentProcessor
{
    bool ProcessPayment(decimal amount);
}

// 信用卡付款處理
public class CreditCardProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // 信用卡付款邏輯
        Console.WriteLine($"使用信用卡處理 {amount} 元的付款");
        return true;
    }
}

// PayPal付款處理
public class PayPalProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        // PayPal付款邏輯
        Console.WriteLine($"使用PayPal處理 {amount} 元的付款");
        return true;
    }
}

// 購物車類別
public class ShoppingCart
{
    private IPaymentProcessor _paymentProcessor;

    // 注入付款處理器
    public ShoppingCart(IPaymentProcessor paymentProcessor)
    {
        _paymentProcessor = paymentProcessor;
    }

    public bool Checkout(decimal totalAmount)
    {
        // 使用付款處理器處理付款
        return _paymentProcessor.ProcessPayment(totalAmount);
    }
}

// 使用範例
public class Program
{
    public static void Main()
    {
        // 使用信用卡付款
        var creditCardCart = new ShoppingCart(new CreditCardProcessor());
        creditCardCart.Checkout(100.50m);

        // 使用PayPal付款
        var paypalCart = new ShoppingCart(new PayPalProcessor());
        paypalCart.Checkout(100.50m);
    }
}
```

在上面的例子中，`ShoppingCart` 類別不需要知道具體的付款處理方式，它只依賴於 `IPaymentProcessor` 介面。這使得:

1. 我們可以輕鬆添加新的付款方式（例如加密貨幣）而不需修改 `ShoppingCart` 類別
2. 代碼更具可測試性，可以使用 mock 物件替代真實的付款處理器
3. 系統更加模組化和靈活

## 編譯時多態性 vs 運行時多態性

| 特性     | 編譯時多態性             | 運行時多態性               |
| -------- | ------------------------ | -------------------------- |
| 決策時間 | 編譯時                   | 執行時                     |
| 實現方式 | 方法重載                 | 方法覆寫（抽象類別或介面） |
| 綁定     | 早期綁定 (Early Binding) | 晚期綁定 (Late Binding)    |
| 效率     | 較高（編譯時確定）       | 較低（運行時確定）         |
| 靈活性   | 較低                     | 較高                       |
| 根據     | 參數數量和類型           | 物件的實際類型             |

## 總結

多態性是面向對象程式設計的核心概念，它讓程式碼更加靈活、可擴展和可維護。C# 中的多態性可以透過兩種方式實現：

1. **編譯時多態性**：透過方法重載實現，在編譯時決定調用哪個方法。
2. **運行時多態性**：透過抽象類別或介面實現，在執行時根據物件的實際類型決定調用哪個方法。

運行時多態性是實現物件導向設計原則（如開閉原則、依賴倒置原則）的關鍵機制，使我們能夠編寫更加通用和可擴展的代碼。
