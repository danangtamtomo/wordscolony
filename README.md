# wordscolony
Article content management system of last live coding test in Hacktiv8

#### Step by Step pembuatan
>
1. Install dependencies
2. Create model of user & article
3. Create controller of user & article (CRUD)
4. Create router of user and article
5. Create endpoint of user and article

#### List of User endpoints
|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/user      |   POST   |REGISTER USER |

#### List of AUTH endpoints
|       Route      |  HTTP   | Description |
|----------------|------------|------------|
|/auth/verify/:token   |   GET   | VERIFY TOKEN |
|/auth/login      |   POST   | LOGIN USER |

#### List of Article endpoints
|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/article      |   POST   |CREATE ARTICLE |
|/articles      |   GET   | GET ALL ARTICLES |
|/article/:slug   |   GET   | GET ONE ARTICLE |
|/article/:slug   |   PUT   | UPDATE ARTICLE |
|/article/:slug   |   DELETE   | DELETE ARTICLE |

#### How to use
```
cd server/  
npm install  
cd ../client/  
npm install  
```
##### Server-Side
```
npm start
```
##### Client-Side
```
npm run dev
```