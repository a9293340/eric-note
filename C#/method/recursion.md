# C# 中的遞歸（Recursion）

## 什麼是遞歸
- 當一個方法調用它自己時，稱為“遞歸”。
- 每當條件為真時，方法內部會再次調用相同的方法，從而創建新的堆棧來存儲局部變量和參數。

## 遞歸的工作原理
- 每次調用方法時，會創建一個新的堆棧，並存儲當前的局部變量和參數。
- 當條件不再滿足時，遞歸過程將停止，並開始返回結果。

## 遞歸的應用
- 遞歸在數學運算中非常有用，例如計算階乘。

### 階乘的定義
- 一個數的階乘是從1到該數的所有整數的乘積。
- 例如，5的階乘是 1 * 2 * 3 * 4 * 5 = 120。

## 例子：計算階乘
假設有一個名為 `RecursionExample` 的控制台應用程序，並定義一個名為 `factorial` 的方法來計算階乘。

```csharp
public class Example {
    public double factorial(int number) {
        if (number == 0) {
            return 1; // 0的階乘為1
        } else {
            return number * factorial(number - 1); // 遞歸調用
        }
    }
}
```

### 主程序
在 `Main` 方法中，接收用戶輸入並計算階乘。

```csharp
public class Program {
    public static void Main() {
        Console.WriteLine("Enter a number:");
        string input = Console.ReadLine();
        int n = int.Parse(input); // 將字符串轉換為整數

        Example example = new Example();
        double fact = example.factorial(n); // 計算階乘
        Console.WriteLine($"Factorial of {n} is {fact}");
    }
}
```

## 遞歸的過程
1. 當用戶輸入5時，`factorial(5)` 被調用。
2. `factorial(5)` 調用 `factorial(4)`，依此類推，直到 `factorial(0)`。
3. `factorial(0)` 返回1，然後逐步返回到上層調用，計算最終結果。
4. 最終，`factorial(5)` 返回120。

## 總結
- 遞歸是一種強大的編程技術，特別適用於解決數學問題。
- 在實際項目中，遞歸的使用相對較少，主要用於解決特定的數學計算問題。
- 使用遞歸時，必須確保有適當的基礎情況來終止遞歸過程，以避免無限循環。