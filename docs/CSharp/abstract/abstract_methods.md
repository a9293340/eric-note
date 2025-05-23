# C# 抽象方法

## 抽象方法的定義

抽象方法是一種特殊的方法，它只能在抽象類別中定義，具有以下特點：

1. **沒有方法體**：抽象方法只有方法宣告（簽名），沒有實際的方法實作。
2. **必須使用 `abstract` 關鍵字**：標記為 `abstract` 以表明這是一個抽象方法。
3. **子類必須實作**：繼承抽象類別的子類必須提供抽象方法的實作，否則會產生編譯錯誤。
4. **方法以分號結尾**：由於沒有方法體，抽象方法宣告以分號結尾。

## 抽象方法與虛擬方法的比較

| 特性               | 抽象方法   | 虛擬方法  |
| ------------------ | ---------- | --------- |
| 方法體             | 沒有       | 有        |
| 可在普通類別中宣告 | 不可以     | 可以      |
| 子類必須實作/覆寫  | 必須       | 可選      |
| 父類提供預設實作   | 不提供     | 提供      |
| 關鍵字             | `abstract` | `virtual` |

## 使用抽象方法的時機

在以下情況應考慮使用抽象方法：

- 父類不想或無法提供方法的具體實作
- 各個子類需要有各自不同的方法實作邏輯
- 父類只想規定方法的名稱、參數、回傳類型和存取修飾詞
- 希望強制子類實作特定方法

## 實作抽象方法的步驟

1. 在抽象類別中宣告抽象方法（只有簽名，沒有方法體）
2. 在子類中使用 `override` 關鍵字提供抽象方法的實作
3. 確保子類方法的簽名（名稱、參數、回傳類型、存取修飾詞）與抽象方法完全相同

## 實際例子

### 例子 1：銀行帳戶

```csharp
// 抽象父類
public abstract class BankAccount
{
    public string AccountNumber { get; set; }
    public string AccountHolderName { get; set; }
    public decimal Balance { get; set; }

    // 抽象方法 - 沒有方法體
    public abstract decimal CalculateInterest();

    // 一般方法
    public void DisplayAccountInfo()
    {
        Console.WriteLine($"帳號: {AccountNumber}, 戶名: {AccountHolderName}, 餘額: {Balance}");
    }
}

// 子類 - 儲蓄帳戶
public class SavingsAccount : BankAccount
{
    public decimal InterestRate { get; set; }

    // 實作抽象方法
    public override decimal CalculateInterest()
    {
        return Balance * InterestRate;
    }
}

// 子類 - 活期帳戶
public class CurrentAccount : BankAccount
{
    public decimal MinimumBalance { get; set; }

    // 實作抽象方法
    public override decimal CalculateInterest()
    {
        if (Balance > MinimumBalance)
            return Balance * 0.005m;
        else
            return 0;
    }
}
```

### 例子 2：汽車變速器

```csharp
// 抽象父類
public abstract class Car
{
    public string Model { get; set; }
    public int Year { get; set; }

    // 抽象方法
    public abstract void ChangeGear(int gear);

    // 一般方法
    public void StartEngine()
    {
        Console.WriteLine($"{Model} 引擎啟動");
    }
}

// 子類 - 手動排檔車
public class ManualCar : Car
{
    // 實作抽象方法
    public override void ChangeGear(int gear)
    {
        Console.WriteLine($"手動排檔車：踩下離合器，將排檔桿移至 {gear} 檔位");
    }
}

// 子類 - 自動排檔車
public class AutomaticCar : Car
{
    // 實作抽象方法
    public override void ChangeGear(int gear)
    {
        Console.WriteLine($"自動排檔車：將選檔桿移至位置 {gear}");
    }
}
```

### 例子 3：員工健康保險

```csharp
// 抽象父類
public abstract class Employee
{
    public string Name { get; set; }
    public string Position { get; set; }

    // 抽象方法
    public abstract decimal CalculateHealthInsuranceAmount();
}

// 子類 - 經理
public class Manager : Employee
{
    // 實作抽象方法
    public override decimal CalculateHealthInsuranceAmount()
    {
        return 1000; // 經理的健康保險額度為 1000
    }
}

// 子類 - 業務人員
public class SalesMan : Employee
{
    // 實作抽象方法
    public override decimal CalculateHealthInsuranceAmount()
    {
        return 500; // 業務人員的健康保險額度為 500
    }
}
```

## 抽象方法的重要規則

1. 抽象方法只能在抽象類別中宣告，普通類別中不可以
2. 抽象方法不能有方法體，只有方法簽名
3. 抽象類別的所有子類必須實作所有抽象方法
4. 子類實作抽象方法時必須使用 `override` 關鍵字
5. 子類中的方法簽名必須與抽象方法完全相同
6. 不能直接透過抽象類別的物件呼叫抽象方法（因為無法實例化抽象類別）

## 何時選擇抽象方法與虛擬方法

- **選擇抽象方法**：當父類不想或無法提供方法實作，且希望強制子類必須實作該方法時
- **選擇虛擬方法**：當父類可以提供預設的方法實作，但希望子類可以選擇性地覆寫方法時

## 總結

抽象方法是一種沒有方法體的方法，它只定義方法的簽名（方法名稱、參數、回傳類型和存取修飾詞），而將實際的實作責任交給子類。抽象方法只能存在於抽象類別中，並且所有子類都必須提供抽象方法的實作，這使得抽象方法成為建立通用介面和強制實作特定功能的強大工具。
