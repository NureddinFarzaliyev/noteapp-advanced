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

## Changing User Data

### Changing Username
**/api/update/username**
```js
{
  "newUsername": "newusername",
  "password": "test"
}
```

### Changing Password
**/api/update/password**
```js
{
  "newPassword": "test",
  "password": "test"
}
```

### Updating User Preferences
**/api/update/preferences**
```js
{
  "preferences": {
    "theme": "custom",
    "backgroundColor": "red",
    "accentColor": "green",
    "textColor": "blue",
    "textSize": 69
  }
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

## Updating Folders & Notes

### Updating Folder Name
**/api/update/name/folder**
```js
{
  "id": "66cdcb62bf9b583459b9de5c",
  "newName": "newname"
}
```

### Updating Note Name
**/api/update/name/note**
```js
{
  "id": "66cdcb62bf9b583459b9de5c",
  "newName": "newname"
}
```

### Updating Note Content
**/api/update/note**
```js
{
  "id": "66cdcc484d821a1d57966c9a",
  "content": "new and updated fresh note content"
}
```

## Fetch Note or Folder Data

### Get Note Content
**/api/get/note**
```js
{
  "id": "66cf07d3bb574470348daf10"
}
```

### Get Children of Folder
**/api/get/children**
```js
{
  "id": "66cdc81320cc51f2edfc8aa4"
}
```