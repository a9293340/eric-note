# 靜態構造函數概述

## 實例構造函數與靜態構造函數的區別
- **實例構造函數**：在每次創建類的對象時執行，可以編寫任何額外的初始化邏輯。
- **靜態構造函數**：只在第一次訪問類時執行一次，通常用於初始化靜態字段。

## 創建靜態構造函數的步驟
1. 在 `Employee` 類中創建靜態構造函數。
2. 靜態構造函數默認為 `public`，不能有任何參數，也不能返回任何值。
3. 在靜態構造函數中初始化靜態字段。

### 例子
```csharp
public class Employee
{
    public static int EmpID;
    public static string EmpName;
    public static string Job;
    public static string CompanyName; // 靜態字段
    // 實例構造函數
    public Employee(int id, string name, string job)
    {
        EmpID = id;
        EmpName = name;
        Job = job;
    }
    // 靜態構造函數
    static Employee()
    {
        CompanyName = "ABC Industries"; // 初始化靜態字段   
    }
    // 在 Main 方法中使用
    public static void Main(string[] args)
    {
        // 第一次訪問 Employee 類時，靜態構造函數會被調用
        Employee emp1 = new Employee(101, "Scott", "Manager");
        Console.WriteLine(Employee.CompanyName); // 顯示靜態字段的值
    }
}
```


## 靜態構造函數的特點
- 只執行一次：靜態構造函數在整個應用程序中只執行一次，當第一次訪問類時自動調用。
- 用於初始化靜態字段：適合用於需要在整個應用程序中只執行一次的初始化邏輯，例如初始化公司名稱或員工計數。

## 總結
靜態構造函數是用於初始化靜態字段的重要工具，確保在應用程序的生命週期中只執行一次，從而有效管理全局狀態。
