# C# 中的默認參數（Default Arguments）

## 什麼是默認參數
- 默認參數是指在方法定義中為參數指定的預設值。
- 當調用方法時，如果未提供該參數的值，則會自動使用預設值。

## 默認參數的特性
- **可選性**：當方法調用者不提供參數值時，默認值會自動使用。
- **覆蓋性**：如果提供了參數值，則會使用提供的值，忽略默認值。

## 使用場景
- 默認參數可以簡化方法調用，減少必須提供的參數數量。
- 適用於需要經常使用相同值的情況，避免重複代碼。

## 範例：計算利息
假設在一個銀行項目中，有一個名為 `CalculateInterest` 的方法，該方法有一個名為 `interestRate` 的參數，並為其指定默認值。

```csharp
public static double CalculateInterest(double principal, double interestRate = 10.5) {
    return principal * interestRate / 100;
}
```
### 說明
- 在這個例子中，`interestRate` 的默認值為 10.5%。
- 如果調用 `CalculateInterest(1000)`，則使用默認利率計算利息。
- 如果調用 `CalculateInterest(1000, 5)`, 則使用提供的利率 5%。

## 範例：計算稅金
在 `MethodsExample` 項目中，有一個名為 `CalculateTax` 的方法，根據產品的成本計算稅金。

```csharp
public static double CalculateTax(double cost, double percentage = 10) {
    if (cost <= 20000) {
        return cost * 0.10; // 稅率為 10%
    } else {
        return cost * (percentage / 100); // 使用提供的百分比
    }
}
```
### 說明
- 當成本小於或等於 20000 時，稅金為 10%。
- 當成本大於 20000 時，使用提供的 `percentage` 參數計算稅金。
- 如果不提供 `percentage`，則默認為 10%。

## 實際應用
- 在實際項目中，使用默認參數可以提高代碼的靈活性和可讀性。
- 開發者可以根據需求選擇是否提供參數值，從而簡化方法調用。

## 結論
- 默認參數是 C# 4 中引入的一個強大功能，能夠提高代碼的可維護性和可讀性。
- 透過合理使用默認參數，可以減少不必要的參數傳遞，讓方法調用更加簡潔。


# C# 中的命名參數（Named Arguments）

## 什麼是命名參數
- 命名參數是 C# 4 中引入的一個特性，允許在調用方法時根據參數名稱提供值。
- 這樣可以提高代碼的可讀性，特別是在方法有多個參數時。

## 使用命名參數的好處
- **提高可讀性**：當方法有多個參數時，使用命名參數可以清楚地表明每個值對應的參數。
- **不受順序限制**：提供參數值時不必遵循參數的定義順序。

## 使用場景
- 當方法有多個參數，特別是當參數類型不同（如原始類型和引用類型）時，命名參數可以減少混淆。
- 對於可選參數（具有默認值的參數），命名參數可以使調用更靈活。

## 命名參數的使用示例
假設有一個名為 `CalculateTax` 的方法，具有多個參數：

```csharp
public static double CalculateTax(double cost, double percentage = 10, string category = "General") {
    // 計算稅金的邏輯
    return cost * (percentage / 100);
}
```

### 說明
- 在調用 `CalculateTax` 方法時，可以使用命名參數來提高可讀性：

```csharp
double tax1 = CalculateTax(cost: 20000, percentage: 9.2);
double tax2 = CalculateTax(category: "Luxury", cost: 45000);
```

- 在這個例子中，`tax1` 和 `tax2` 的調用清楚地表明了每個參數的意圖，無需擔心參數的順序。

## 使用命名參數的規則
- 如果使用命名參數來傳遞某個參數，則所有後續的參數也必須使用命名參數傳遞。
- 例如，如果你使用 `x` 的命名參數，則 `y` 也必須使用命名參數：

```csharp
// 正確的用法
double result = SomeMethod(x: 5, y: 10);

// 錯誤的用法，混合使用命名和位置參數
// double result = SomeMethod(5, y: 10); // 這會導致編譯錯誤
```

## 性能影響
- 使用命名參數不會影響方法的性能或輸出，因為它僅僅是為了提高代碼的可讀性。
- 方法的執行方式與傳遞參數的方式無關。

## 結論
- 命名參數是一個強大的功能，特別是在處理多個參數時，可以提高代碼的可讀性和可維護性。
- 在實際項目中，當方法有多個參數時，使用命名參數是一個良好的編碼習慣。