## Usage Instructions

### Step 1: Build the Docker Image

Run the following command to build the Docker image:
```bash
docker build -t web_ml .
```

### Step 2: Run the Docker Container

```bash
docker-compose up
```

### Step 3: Create a Vite Project (Inside the Container)

```bash
npx create-vite@latest my-vite-project -- --template react
```
Follow the prompts to set up your project. Choose the framework (React) and language (JavaScript or TypeScript) as needed.

Navigate to the project folder:
```bash
cd my-vite-project
npm install
npm run dev -- --host
```
Access your project on `http://localhost:5173`.

Happy coding!

