# 🚧 Advanced Notetaking App - REST API Documentation

### CONTENT:
- [👤 User Authentication](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#user-authentication)
- [👤 Changing User Data](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#changing-user-data)
- [👤 Fetching User Data](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#fetching-user-data)
- [📂 Creating Folders & Notes](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#creating-folders--notes)
- [📂 Deleting Folders & Notes](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#deleting-folders--notes)
- [📂 Updating Folders & Notes](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#updating-folders--notes)
- [📂 Fetch Note or Folder Data](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#fetch-note-or-folder-data)
- [🔎 Search for Notes and Folders](https://github.com/NureddinFarzaliyev/noteapp-advanced/tree/master/api#search-for-folders-and-notes)

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
## Fetching User Data

### Fetch User Data
**/api/auth/userdata**
```js
{
  "id": "66cdb7b377811fc2ff859c26"
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

## Search for Folders and Notes

### Search by query
**/api/search**
```js
{
  "query": "ad"
}
```