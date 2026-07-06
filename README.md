# 🚀 GitHub Profile Analyzer API

A production-ready REST API built with **Node.js**, **Express.js**, **TypeScript**, **Drizzle ORM**, and **MySQL** that analyzes GitHub user profiles using the GitHub Public API and stores valuable insights in a MySQL database.

---

## 📌 Features

- Analyze any public GitHub profile
- Fetch GitHub profile information
- Analyze repositories
- Store analysis in MySQL
- Retrieve all analyzed profiles
- Retrieve a single analyzed profile
- Automatically update existing profiles
- RESTful API architecture
- TypeScript support
- Railway MySQL integration

---

## ⭐ Additional Insights

Beyond the assignment requirements, this project also calculates:

- ⭐ Total Stars across all repositories
- 💻 Most Used Programming Language
- 🏆 Most Starred Repository
- 👥 Followers
- 👤 Following
- 📦 Public Repositories
- 📄 Public Gists
- 📅 Account Creation Date

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Drizzle ORM
- MySQL
- Railway
- Axios
- GitHub REST API

---

# 📂 Project Structure

```
src
│
├── config
│   └── db.ts
│
├── controllers
│   └── github.controller.ts
│
├── db
│   └── schema.ts
│
├── routes
│   └── github.routes.ts
│
├── services
│   └── github.service.ts
│
├── app.ts
└── server.ts
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-analyzer.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=YOUR_DATABASE_URL
PORT=5000
```

Run the server

```bash
npm run dev
```

---

# 📡 API Endpoints

## Analyze GitHub Profile

**POST**

```
/api/github/analyze/:username
```

Example

```
POST /api/github/analyze/octocat
```

---

## Get All Profiles

**GET**

```
/api/github/profiles
```

---

## Get Profile By ID

**GET**

```
/api/github/profiles/:id
```

---

# 📊 Sample Response

```json
{
  "success": true,
  "data": {
    "username": "octocat",
    "followers": 23189,
    "publicRepos": 8,
    "totalStars": 21658,
    "mostUsedLanguage": "Ruby",
    "topRepository": "Spoon-Knife"
  }
}
```

---

# 💡 Assignment Requirements Covered

- ✅ Fetch GitHub profile
- ✅ Analyze repositories
- ✅ Store insights in MySQL
- ✅ Fetch all analyzed profiles
- ✅ Fetch single analyzed profile
- ✅ Additional valuable insights

---

# 🔮 Future Improvements

- Authentication
- Redis Caching
- Swagger Documentation
- Docker Support
- Unit Testing
- Pagination
- Search & Filtering
- GitHub Rate Limit Handling

---

# 👨‍💻 Author

**Devraj Singh**

GitHub:
https://github.com/Devraj2Singh


---

⭐ If you like this project, consider giving it a star.