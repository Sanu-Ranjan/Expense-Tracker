### API end points

**Authentication Routes** (`/api/v1/auth/`)

- `GET "/google"` - Redirects user to Google consent screen
- `GET "/google/callback"`- Read user profile, upsert user in DB, generate ascess token
- `POST "/logout"` - Revokes current access token

**Profile Routes(Protected)** (`/api/v1/profiles`)

- `GET "/"` - list all user profiles
- `GET "/:profileId"` - list the particular profile data for current user
- `POST "/"` - Add new profile for current user
- `PUT "/:profileIid"` - modify profile for current user
- `DELETE "/:profileId"` - delete a particular profile

**Accounts Routes(Protected)** (`/api/v1/accounts`)

- `GET "/:profileId"` - list all user accounts under given profile
- `POST "/:profileId"` - add new account under given profile
- `DELETE "/:accountId"` - delete account

**ToDo routes(Protected)** (`/api/v1/todo`)

- `GET "/:date/:profileId"` - list todo for given date and profile
- `GET "/:month/:profileId"` - list all todo for the given month
- `POST "/:date"` - add todo for the given date
- `PUT "/:todoId"` - update todo status
- `DELETE "/:todoId"` - delete todo

**Expense routes(Protected)** (`/api/v1/expense`)

- `GET "/daily/:profileId/:startDate/:endDate"` - retriving expenses for a particular date range
- `GET "/yearly/:profileId/:year"` - list monthly expense for given year
- `POST "/:profileId/:account` - add expense for given date, profile, account
- `PUT "/:expenseId"` - modify expense for given expense id
- `DELETE "/:expenseId"` - delete expense for given expense id
