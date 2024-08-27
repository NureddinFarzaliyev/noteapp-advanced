# 🚧 Advanced Notetaking App - REST API Documentation

## User Authentication

### Signup
**/api/auth/signup**
```js
{
  "username": "test",
  "password": "1234"
}
```

### Login
**/api/auth/login**
```js
{
  "username": "test",
  "password": "1234"
}
```

### Logout
**/api/auth/logout**
```js
{
  "id": "66cdb7b377811fc2ff859c24"
}
```

## Creating Folders & Notes

### Creating a Folder
**/api/create/folder**
```js
{
  "name": "testfolder2",
  "parentId" : "66cdb7b377811fc2ff859c26",
}
```

### Creating a Note
**/api/create/note**
```js
{
  "name": "testnote",
  "parentId" : "66cdb7b377811fc2ff859c26",
  "content" : "Hello! This is a markdown note!"
}
```

## Deleting Folders & Notes

### Deleting a Folder
**/api/delete/folder**
```js
{
  "id": "66cdc81320cc51f2edfc8aa4"
}
```

### Deleting a Note
**/api/delete/note**
```js
{
  "id": "66cdc81320cc51f2edfc8aa4"
}
```