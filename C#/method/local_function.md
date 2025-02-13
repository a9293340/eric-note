# C# 7 中的局部函數（Local Functions）

## 什麼是局部函數
- 局部函數是定義在方法內部的函數，用於執行一些小的過程。
- 它可以被視為方法的一部分，並且只能在同一方法中調用。

## 局部函數的特性
- 可以是 `void` 或返回任何類型的值。
- 可以接收任意數量的參數，這些參數可以是原始類型或非原始類型。
- 不能被其他方法調用，並且無法從方法外部訪問。

## 使用局部函數的好處
- 提高代碼的可重用性，因為可以在同一方法中多次調用局部函數。
- 簡化方法的邏輯，將小的計算過程封裝在局部函數中。

## 例子：計算學生的平均分數
假設有一個名為 `Student` 的類，並在其中定義一個名為 `DisplayMarks` 的方法。

```csharp
public class Student {
    public void DisplayMarks(int marks1, int marks2, int marks3) {
        Console.WriteLine($"Marks 1: {marks1}, Marks 2: {marks2}, Marks 3: {marks3}");

        // 定義局部函數
        double getAverageMarks() {
            double average = (marks1 + marks2 + marks3) / 3.0; // 計算平均分數
            return average; // 返回平均分數
        }

        // 調用局部函數
        double averageMarks = getAverageMarks();
        Console.WriteLine($"Average Marks: {averageMarks}");
    }
}
```

## 主程序
在 `Main` 方法中，創建 `Student` 類的對象並調用 `DisplayMarks` 方法。

```csharp
public class Program {
    public static void Main() {
        Student s = new Student();
        s.DisplayMarks(80, 45, 71); // 輸出：Marks 1: 80, Marks 2: 45, Marks 3: 71
                                      // 輸出：Average Marks: 65.33333333333333
    }
}
```

## 總結
- 局部函數提供了一種在方法內部封裝小邏輯的方式，並且可以在同一方法中重用。
- 在編寫大型方法時，將可重用的邏輯放在局部函數中可以簡化代碼並提高可讀性。
- 局部函數的主要優點是其可重用性，特別是在需要多次執行相同邏輯的情況下。

# C# 8 中的靜態局部函數（Static Local Functions）

## 什麼是靜態局部函數
- 靜態局部函數是將局部函數寫為靜態的能力。
- 使用 `static` 修飾符來定義靜態局部函數。

## 靜態局部函數的特性
- 靜態局部函數不能訪問包含方法的局部變量和參數。
- 與普通局部函數不同，靜態局部函數不會意外訪問或修改局部變量和參數的值。

## 使用靜態局部函數的好處
- 避免在局部函數中意外使用局部變量和參數，從而減少錯誤的可能性。
- 提高代碼的可讀性和可維護性，特別是在包含多個局部變量和參數的方法中。

## 例子：計算學生的平均分數
假設有一個名為 `Student` 的類，並在其中定義一個名為 `DisplayMarks` 的方法。

```csharp
public class Student {
    public void DisplayMarks(int marks1, int marks2, int marks3) {
        Console.WriteLine($"Marks 1: {marks1}, Marks 2: {marks2}, Marks 3: {marks3}");

        // 定義靜態局部函數
        static double getAverageMarks(int m1, int m2, int m3) {
            double average = (m1 + m2 + m3) / 3.0; // 計算平均分數
            return average; // 返回平均分數
        }

        // 調用靜態局部函數
        double averageMarks = getAverageMarks(marks1, marks2, marks3);
        Console.WriteLine($"Average Marks: {averageMarks}");
    }
}
```

## 主程序
在 `Main` 方法中，創建 `Student` 類的對象並調用 `DisplayMarks` 方法。

```csharp
public class Program {
    public static void Main() {
        Student s = new Student();
        s.DisplayMarks(80, 45, 71); // 輸出：Marks 1: 80, Marks 2: 45, Marks 3: 71
                                      // 輸出：Average Marks: 65.33333333333333
    }
}
```

## 總結
- 靜態局部函數提供了一種限制局部函數訪問參數和局部變量的方式，從而避免意外的值修改。
- 在編寫大型方法時，使用靜態局部函數可以提高代碼的可重用性和可讀性。
- 靜態局部函數的主要優點是能夠防止意外的參數和局部變量的訪問，特別是在包含多個局部變量和參數的方法中。


# 局部函數與靜態局部函數比較表

| 特性                     | 局部函數 (Local Functions)                     | 靜態局部函數 (Static Local Functions)            |
|--------------------------|------------------------------------------------|-------------------------------------------------|
| 定義方式                 | 在方法內部定義，無需 `static` 修飾符         | 在方法內部定義，需使用 `static` 修飾符         |
| 訪問範圍                 | 可以訪問包含方法的所有局部變量和參數         | 不能訪問包含方法的局部變量和參數               |
| 參數傳遞                 | 可以直接使用包含方法的參數                   | 需要將參數作為參數傳遞給靜態局部函數           |
| 可重用性                 | 可以在同一方法內多次調用                     | 可以在同一方法內多次調用                      |
| 調用方式                 | 只能在定義它的同一方法內調用                 | 只能在定義它的同一方法內調用                  |
| 作用                     | 用於封裝小邏輯，簡化方法的結構               | 用於限制對局部變量和參數的訪問，避免意外修改  |
| 主要優點                 | 提高代碼的可重用性和可讀性                   | 減少錯誤的可能性，確保參數和變量不被意外修改  |

## 總結
- 局部函數和靜態局部函數都是用來封裝小邏輯的工具，但它們在訪問範圍和使用方式上有顯著的區別。
- 根據需求選擇合適的函數類型可以提高代碼的可讀性和可維護性。