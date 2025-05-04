# C# 繼承類型詳解

C# 支持多種不同類型的繼承模式，每種類型適用於不同的設計場景。以下是 C# 中五種主要的繼承類型：

## 1. 單一繼承 (Single Inheritance)

單一繼承是最基本的繼承形式，涉及一個父類和一個子類之間的關係。

**示例**：

```csharp
// 父類
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// 子類
public class Teacher : Person
{
    public string Subject { get; set; }
}
```

在這個例子中，`Teacher` 是 `Person` 的子類，體現了單一繼承關係。每個教師都是一個人，具有人的所有特性，同時還有教師特有的屬性（如所教的科目）。

## 2. 多級繼承 (Multilevel Inheritance)

多級繼承涉及至少三個類，形成繼承鏈，其中一個類繼承自另一個類，而這個類又繼承自第三個類。

**示例**：

```csharp
// 父類
public class Person
{
    public string Name { get; set; }
}

// 一級子類
public class Teacher : Person
{
    public string Subject { get; set; }
}

// 二級子類
public class Professor : Teacher
{
    public string ResearchArea { get; set; }
}
```

在這個例子中，`Professor` 繼承自 `Teacher`，而 `Teacher` 繼承自 `Person`，形成了多級繼承關係。因此，教授既是老師也是人，具有這兩個類的所有特性。

## 3. 層次繼承 (Hierarchical Inheritance)

層次繼承是指一個父類有多個直接子類的情況。

**示例**：

```csharp
// 父類
public class Person
{
    public string Name { get; set; }
}

// 子類 1
public class Teacher : Person
{
    public string Subject { get; set; }
}

// 子類 2
public class Doctor : Person
{
    public string Specialty { get; set; }
}
```

這個例子中，`Teacher` 和 `Doctor` 都是 `Person` 的子類，構成了層次繼承關係。教師和醫生都是人，都繼承了人的基本特性，但各自又有特定的職業屬性。

## 4. 多重繼承 (Multiple Inheritance)

多重繼承是指一個類直接繼承自多個父類。**C# 不直接支持類的多重繼承**，但可以通過接口實現類似的功能。

**注意**：以下示例在 C# 中是不允許的：

```csharp
// 錯誤示例 - C# 不支持直接的多重繼承
public class Teacher
{
    public string Subject { get; set; }
}

public class Doctor
{
    public string Specialty { get; set; }
}

// 錯誤：不能直接繼承多個類
public class MedicalTeacher : Teacher, Doctor
{
    // ...
}
```

但可以通過接口實現類似的功能：

```csharp
// 接口方式實現多重繼承
public interface ITeacher
{
    string Subject { get; set; }
    void Teach();
}

public interface IDoctor
{
    string Specialty { get; set; }
    void Treat();
}

// 正確：可以實現多個接口
public class MedicalTeacher : Person, ITeacher, IDoctor
{
    public string Subject { get; set; }
    public string Specialty { get; set; }

    public void Teach()
    {
        Console.WriteLine("Teaching medicine...");
    }

    public void Treat()
    {
        Console.WriteLine("Treating patients...");
    }
}
```

通過實現多個接口，`MedicalTeacher` 類同時具有教師和醫生的行為，間接實現了多重繼承的概念。

## 5. 混合繼承 (Hybrid Inheritance)

混合繼承是指在同一個應用程序中結合兩種或多種繼承類型的情況。

**示例**：

```csharp
// 父類
public class Person
{
    public string Name { get; set; }
}

// 層次繼承的子類 1
public class Teacher : Person
{
    public string Subject { get; set; }
}

// 層次繼承的子類 2
public class Tailor : Person
{
    public string Specialty { get; set; }
}

// 形成多級繼承
public class Professor : Teacher
{
    public string ResearchArea { get; set; }
}

// 進一步形成多級繼承
public class MedicalProfessor : Professor
{
    public string MedicalField { get; set; }
}
```

在這個例子中：

- `Teacher` 和 `Tailor` 繼承自 `Person`，形成層次繼承
- `Professor` 繼承自 `Teacher`，而 `MedicalProfessor` 繼承自 `Professor`，形成多級繼承

這種結合了層次繼承和多級繼承的模式，就是混合繼承。

## 總結

C# 中的繼承可以以多種方式組織類之間的關係：

1. **單一繼承**：一個子類繼承一個父類
2. **多級繼承**：形成繼承鏈（A → B → C）
3. **層次繼承**：一個父類有多個子類
4. **多重繼承**：C# 不直接支持通過類實現，但可通過接口間接實現
5. **混合繼承**：結合上述多種繼承類型

選擇適當的繼承類型取決於您的應用程序設計需求和類之間的邏輯關係。
