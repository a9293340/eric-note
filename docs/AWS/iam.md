# IAM(Identity and Access Management)

## IAM 是什麼

- IAM 是 AWS 的身分和存取管理服務
- 為一個 Global 服務，可以在所有 AWS 區域使用
- 可以讓你建立和管理 AWS 的使用者、群組、角色和策略
- 可以讓你控制誰可以存取你的 AWS 資源

## IAM 的組成

- 使用者 (User)
  - 可以建立多個使用者，並且可以設定不同的存取權限
  - User 對於 Groups 是多對多關係，且不一定屬於任何 Group
- 群組 (Group)
  - Groups 只能包涵 Users，不能包涵其他 Groups
- 策略 (Policy)
  - 為一個 json 檔案，定義了使用者或角色的存取權限
  - 建議遵守最小權限原則 (Principle of Least Privilege)
- 角色 (Role)
  - 為一個 json 檔案，定義了使用者或角色的存取權限
  - 可以讓你建立一個角色，並且可以設定不同的存取權限

### Policy 的組成

- Version
  - 版本號
- Id
  - 策略的唯一識別碼
- Statement
  - 策略的內容
  - 可以包含多個 Statement
  - 每個 Statement 可以包含多個 Action、Resource、Effect
- Action
  - 要執行的動作或權限
- Resource
  - 將 Action 應用於哪些資源
- Effect
  - Allow or Deny
  - 決定是否允許或拒絕動作
- Sid
  - Statement 的唯一識別碼
- Principal
  - 應用於哪些主體
  - 可以是 User、Group、Role
- Condition
  - 要執行的動作或權限的條件

## IAM 常見防護機制

### Password Policy

- Password Policy 是一個設定，用於管理 IAM 使用者的密碼策略
- 可以設定密碼的長度、複雜度、過期時間等
- 可以要求用戶密碼不得重複、定期修改....

### IAM MFA(Multi-Factor Authentication)

#### 什麼是 MFA

- MFA 是一種身分驗證方式，需要使用者提供兩種不同的身分驗證方式才能登入
- 常見的 MFA 方式有 OTP、指紋、Face ID
- Virtual MFA device 是一個軟體，可以生成 OTP，EX : Google Authenticator
- U2F Security Key 是一個硬體，可以生成 OTP，EX : YubiKey
- Hardware MFA device 是一個硬體，可以生成 OTP，EX : RSA SecurID

### IAM Role

- IAM Role 是 AWS 中的一種身份，允許你定義一組權限，並將這些權限授予 AWS 服務或其他 AWS 使用者。
- 與 IAM 使用者不同，IAM Role 並不與特定的使用者或實體綁定，而是可以被多個實體（如 EC2 實例、Lambda 函數等）使用。
- 這使得 IAM Role 特別適合於需要臨時訪問權限的情況，因為角色可以在需要時被授予，而不需要長期持有金鑰。




