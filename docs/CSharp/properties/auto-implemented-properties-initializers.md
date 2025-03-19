# C# 中的自動實現屬性初始化器

## 自動實現屬性初始化器的定義
自動實現屬性初始化器是 C# 6 中引入的一項新功能。這使得開發者可以在聲明自動實現屬性時直接初始化其值。

### 特點
- 在 C# 6 之前，無法在聲明時為自動屬性賦值。
- 在 C# 6 及後續版本中，可以使用 `= value` 語法來初始化自動屬性。

### 使用示例
假設我們有一個 `Employee` 類，並希望初始化 `NativePlace` 自動屬性。

```csharp
public class Employee
{
    public string NativePlace { get; set; } = "New York"; // 自動實現屬性初始化
}
```

## 默認值
如果未顯式初始化自動屬性，則該屬性將根據其數據類型採用默認值：
- 數值類型的默認值為 0。
- 字符串的默認值為 null。

### 覆蓋默認值
您可以在創建對象時覆蓋默認值。例如：

```csharp
public static void Main(string[] args)
{
    Employee emp1 = new Employee();
    emp1.NativePlace = "New Delhi"; // 覆蓋默認值

    Employee emp2 = new Employee(); // 使用默認值 "New York"
    Employee emp3 = new Employee(); // 使用默認值 "New York"

    Console.WriteLine(emp1.NativePlace); // 輸出: New Delhi
    Console.WriteLine(emp2.NativePlace); // 輸出: New York
    Console.WriteLine(emp3.NativePlace); // 輸出: New York
}
```


## 總結
自動實現屬性初始化器提供了一種簡便的方法來初始化屬性，特別是在不需要驗證或計算邏輯的情況下。這使得代碼更簡潔，並提高了可讀性。在實際項目中，您可以根據需要使用自動實現屬性和普通屬性之間的組合。 