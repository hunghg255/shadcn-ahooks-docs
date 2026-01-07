export const style = `
  body {

* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#root {
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
}

input {
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  margin: 8px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

}
`
