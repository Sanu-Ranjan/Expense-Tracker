# MySQL database is used

### Users

- id (PK)
- name
- email

### Profiles

- id (PK)
- profileName
- profilePurpose
- additionalInformation
- userId (FK-> Users.id)

### Accounts

- id (PK)
- bankDetails
- openingBalance
- profileId (FK-> Profiles.id)
- userId (FK-> User.id)

### ToDos

- id (PK)
- task
- date
- profileId (FK-> Profiles.id)
- userId (FK-> User.id)

### Expenses

- id (PK)
- date
- isDebit
- amount
- description
- accounts (FK-> Accounts.id)
- profileId (FK-> Profiles.id)
- userId (FK-> User.id)
