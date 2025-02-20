# 轉換方法 (Conversion Methods)

## 概述

轉換方法是 C# 中預定義的方法，用於將值從一種類型轉換為另一種類型。這包括從任何原始類型到任何其他原始類型的轉換，也可以是原始類型到字符串類型或字符串類型到原始類型的轉換。

### System.Convert 類

- `System.Convert` 是一個預定義的類，提供了一組預定義的轉換方法。
- 這些轉換方法都是靜態方法，因此可以直接調用，而無需創建 `Convert` 類的對象。

## 使用轉換方法

1. **指定轉換方法**：根據目標數據類型選擇相應的轉換方法。
   - 例如，為了將值轉換為 `int`，使用 `System.Convert.ToInt32`。
   - 為了將值轉換為 `double`，使用 `System.Convert.ToDouble`。

### 例子

```csharp
int intValue = 1000;
string stringValue = System.Convert.ToString(intValue); // 將 int 轉換為 string
```

- 在這個例子中，`intValue` 的值為 `1000`，轉換後的 `stringValue` 將是 `"1000"`。

### 轉換方法列表

- `ToSByte`：將值轉換為 `sbyte`。
- `ToByte`：將值轉換為 `byte`。
- `ToInt32`：將值轉換為 `int`。
- `ToInt64`：將值轉換為 `long`。
- `ToSingle`：將值轉換為 `float`。
- `ToDouble`：將值轉換為 `double`。
- `ToDecimal`：將值轉換為 `decimal`。
- `ToString`：將值轉換為 `string`。
- `ToBoolean`：將值轉換為 `bool`。

### 異常處理

- 如果無法將值轉換為目標數據類型，則會引發 `Exception`。
- 這意味著如果源值無效，應用程序將突然終止並引發異常。

## 實際應用

- 使用轉換方法時，您不需要在調用方法時提及源值的類型，因為這些方法可以接受任何類型的源值。
- 例如，將 `int` 轉換為 `string` 時，使用 `ToString` 方法：

```csharp
int number = 1000;
string result = System.Convert.ToString(number); // 將 int 轉換為 string
```

- 當顯示 `number` 的值時，將顯示為 `1000`（`int` 類型），而 `result` 的值將顯示為 `"1000"`（`string` 類型）。

## 結論

- 通過使用 `System.Convert` 類中的轉換方法，您可以將任何原始類型轉換為任何其他原始類型，並且可以輕鬆地在字符串和原始類型之間進行轉換。這些方法提供了一種簡單而有效的方式來處理數據類型的轉換。
- 使用 Conversion Methods 時要注意，若是要轉換的是各 type 的 default value，則不會引發 Exception，使用上需小心。
