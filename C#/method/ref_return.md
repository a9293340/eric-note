# C# 中的 ref returns

## 什麼是 ref returns
- `ref returns` 是 C# 7 中引入的一個特性，允許方法返回變量的引用。
- 當你返回一個變量作為引用時，返回變量的引用將返回給調用部分。

## 工作原理
- 返回值的引用將被分配到接收返回值的調用部分。
- 將來，如果對返回變量值進行任何更改，接收變量也會自動進行更改。

### 例子：學生類
假設有一個名為 `Student` 的類，包含一個公共字段 `grade`。

```csharp
public class Student {
    public int grade = 2; // 初始化等級值

    public void PrintGrade() {
        Console.WriteLine(grade); // 打印當前等級
    }

    public ref int DoWork() {
        return ref grade; // 返回 grade 字段的引用
    }
}
```

### 主程序
在 `Main` 方法中，創建 `Student` 類的對象並調用方法。

```csharp
public class Program {
    public static void Main() {
        Student s = new Student();
        s.PrintGrade(); // 輸出：2

        ref int g = ref s.DoWork(); // 獲取 grade 的引用
        g = 5; // 更新引用的值

        s.PrintGrade(); // 輸出：5
    }
}
```

## 使用 ref returns 的好處
- 當你更新 `ref return` 的值時，原始變量的值會自動更新。
- 這使得在需要返回字段的引用而不是其值的情況下非常有用。

## 實際應用
- 在實際項目中，當你想返回一個字段的引用而不是它的值時，可以使用 `ref returns`。
- 例如，在 `Employee` 類中，如果你將 `salary` 字段的引用作為 `ref return` 返回，則可以通過更新 `ref return` 變量來間接更新 `salary` 字段的值。

## 結論
- `ref returns` 提供了一種靈活的方式來操作對象的字段，允許直接通過引用進行修改。
- 這在需要高效地管理對象狀態的情況下非常有用。