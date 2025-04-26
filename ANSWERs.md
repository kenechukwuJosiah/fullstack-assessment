# Full Stack Development - Vue.js, Node.js (Express), PostgreSQL

## 3. Full Stack Knowledge and Skills

### 3.1. Front-End Development

#### Vue.js:

- **Question**: Explain the core concepts of Vue.js. Provide examples of how to use this framework in a project.
- **Answer**:

  - **Vue.js** is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable, which means you can use Vue for simple interactions or as the foundation for a complex single-page application (SPA). Vue's core features include reactivity, components, directives, and a simple templating system.

  - **Core Concepts**:
    - **Reactivity**: Vue uses a reactive data-binding system that automatically updates the DOM when data changes.
    - **Components**: Vue components are reusable building blocks of the UI that can include template, logic, and style.
    - **Directives**: Special tokens that apply special behavior to the DOM, such as `v-bind`, `v-model`, and `v-if`.

  **Example (Vue.js Component)**:

  ```vue
  <template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="changeMessage">Click me</button>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue.js!",
      };
    },
    methods: {
      changeMessage() {
        this.message = "You clicked the button!";
      },
    },
  };
  </script>

  <style scoped>
  h1 {
    color: blue;
  }
  </style>
  ```

  In this example, we define a Vue component that displays a message and a button that updates the message when clicked.

---

### 3.2. Back-End Development

#### Node.js with Express:

- **Question**: Explain the key differences between Node.js and FastAPI. Provide examples of server-side code in each.
- **Answer**:

  - **Node.js** is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications. Express.js is the most popular framework for Node.js, enabling fast API and web server development.
  - **FastAPI** is a Python-based web framework designed for building APIs quickly and efficiently. It boasts automatic OpenAPI generation and high performance.

  **Key Differences**:

  - **Language**: Node.js uses JavaScript (or TypeScript), while FastAPI uses Python.
  - **Asynchronous Support**: Node.js is built for asynchronous operations with non-blocking I/O, while FastAPI also supports asynchronous programming via Python’s `async` and `await`.
  - **Use Case**: Node.js is generally used for scalable real-time applications, while FastAPI is known for API development with high performance and automatic documentation.

  **Example (Node.js with Express)**:

  ```js
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello, Node.js!");
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
  ```

  **Example (FastAPI in Python)**:

  ```python
  from fastapi import FastAPI

  app = FastAPI()

  @app.get("/")
  def read_root():
      return {"message": "Hello, FastAPI!"}
  ```

#### PostgreSQL:

- **Question**: Discuss the differences between SQL and NoSQL databases. Provide examples of database queries in PostgreSQL.
- **Answer**:

  - **SQL Databases** like PostgreSQL are relational and store data in tables with rows and columns. They follow a predefined schema and support complex queries using SQL (Structured Query Language).
  - **NoSQL Databases** such as MongoDB are non-relational and store data in formats like key-value pairs, documents, or graphs. They are more flexible and scalable, but typically don't support complex SQL queries.

  **PostgreSQL Example**:

  - **SQL Query**:

    ```sql
    SELECT * FROM users WHERE age > 30;
    ```

  - **Insert Data**:

    ```sql
    INSERT INTO users (name, age) VALUES ('John Doe', 28);
    ```

  - **Update Data**:

    ```sql
    UPDATE users SET age = 29 WHERE name = 'John Doe';
    ```

  - **Delete Data**:
    ```sql
    DELETE FROM users WHERE name = 'John Doe';
    ```

---

### 3.3. Integration and Deployment

#### Third-Party APIs:

- **Question**: Explain how to integrate third-party APIs into a web application. Provide examples of API integration.
- **Answer**:

  - **Integrating Third-Party APIs** involves making HTTP requests to external services and using their data or functionality in your application. You can use tools like `Axios` or the built-in `fetch` API to make requests to third-party services like payment gateways, social media APIs, etc.

  **Example (Axios Integration in Node.js)**:

  ```js
  const axios = require("axios");

  axios
    .get("https://api.example.com/data")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  ```

  In this example, `Axios` makes a GET request to an external API, and the response is logged to the console.

#### Authentication:

- **Question**: Explain how to implement authentication using web servers, databases, and cloud services like Azure AD.
- **Answer**:

  - **Authentication** can be implemented using several strategies, including **JWT (JSON Web Tokens)** or **OAuth2**. JWT is often used in web applications to securely transmit user data between the client and server.
  - For using Azure Active Directory (Azure AD), you would typically use OAuth2 to authenticate users and authorize access to resources.

  **Example (JWT Authentication in Node.js with Express)**:

  ```js
  const jwt = require("jsonwebtoken");
  const express = require("express");
  const app = express();

  // Middleware to protect routes
  const authenticateJWT = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.sendStatus(403);

    jwt.verify(token, "secretKey", (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // Login route (for simplicity, not securing password here)
  app.post("/login", (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const token = jwt.sign(user, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  });

  // Protected route
  app.get("/protected", authenticateJWT, (req, res) => {
    res.send("This is a protected route");
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
  ```

  In this example, a JWT is generated upon login, and a middleware is used to protect a route by verifying the token.

---

This document covers the essential knowledge and skills for Vue.js, Node.js (Express), and PostgreSQL, with relevant code examples to demonstrate the implementation of various concepts.
