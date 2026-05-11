### AUTH
POST /api/auth/sign-up/email
POST /api/auth/sign-in/email
POST /api/auth/sign-out


### USERS
DELETE /users/:userId
PATCH /users/:userId

### FILES
GET /files
GET /files/:filerId
GET /files/:filerId/download
POST /files
PATCH /files/:fileId
DELETE /files/:fileId


### FOLDERS
GET /folders
GET /folders/:folderId
GET /folders/:folderId/files
POST /folders
PATCH /folders/:folderId
DELETE /folders/:folderId