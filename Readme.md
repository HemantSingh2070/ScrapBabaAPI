# Scrap Baba API Documentation 🗑️

Welcome to the API documentation for the **Scrap Baba** platform. This API allows users to add, view, and remove scrap data efficiently.

## API Endpoints 🚀

### 1. **Add Scrap** 📥

- **URL**: `https://scrap-baba-api.vercel.app/scrap`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Lallu",
    "phone": "+91945491929",
    "city": "Ghaziabad",
    "scrapType": "Paper",
    "scrapWeight": 15.8,
    "location": "Ghaziabad",
    "pricePerKg": 20
  }
  ```
- **Response**:
  ```json
  {
    "result": {
      "success": true,
      "message": "Scrap added and messages sent successfully",
      "result": [
        {
          "fieldCount": 0,
          "affectedRows": 1,
          "insertId": 13,
          "info": "",
          "serverStatus": 2,
          "warningStatus": 0,
          "changedRows": 0
        },
        null
      ]
    }
  }
  ```

### 2. **Add User** 👤

- **URL**: `https://scrap-baba-api.vercel.app/user`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Hemant Singh",
    "city": "Ghaziabad",
    "phone": "+919458119239"
  }
  ```
- **Response**:
  ```json
  {
    "userId": 7
  }
  ```

### 3. **Get All Scraps by Location** 🏙️

- **URL**: `https://scrap-baba-api.vercel.app/scrap`
- **Method**: `GET`
- **Query Parameters**:
  - `location`: The city of the scrap (e.g., "Ghaziabad")
- **Response**:
  ```json
  {
    "result": [
      {
        "id": 2,
        "name": "Bob Brown",
        "phone": "9056321458",
        "city": "Ghaziabad",
        "scrapType": "Paper",
        "scrapWeight": "15.80",
        "location": "Ghaziabad",
        "pricePerKg": "20.00"
      },
      {
        "id": 3,
        "name": "Bob Brown",
        "phone": "9056321458",
        "city": "Ghaziabad",
        "scrapType": "Paper",
        "scrapWeight": "15.80",
        "location": "Ghaziabad",
        "pricePerKg": "20.00"
      },
      {
        "id": 4,
        "name": "Bob Brown",
        "phone": "9056321458",
        "city": "Ghaziabad",
        "scrapType": "Paper",
        "scrapWeight": "15.80",
        "location": "Ghaziabad",
        "pricePerKg": "20.00"
      },
      {
        "id": 5,
        "name": "Bob Brown",
        "phone": "9056321458",
        "city": "Ghaziabad",
        "scrapType": "Paper",
        "scrapWeight": "15.80",
        "location": "Ghaziabad",
        "pricePerKg": "20.00"
      },
      {
        "id": 6,
        "name": "Lallu",
        "phone": "+919454919239",
        "city": "Ghaziabad",
        "scrapType": "Paper",
        "scrapWeight": "15.80",
        "location": "Ghaziabad",
        "pricePerKg": "20.00"
      }
    ]
  }
  ```

### 4. **Remove Scrap by ID** ❌

- **URL**: `https://scrap-baba-api.vercel.app/scrap`
- **Method**: `DELETE`
- **Request Body**:
  ```json
  {
    "id": 1
  }
  ```
- **Response**:
  ```json
  {
    "result": {
      "fieldCount": 0,
      "affectedRows": 0,
      "insertId": 0,
      "info": "",
      "serverStatus": 2,
      "warningStatus": 0,
      "changedRows": 0
    }
  }
  ```

## Usage Instructions 📝

1. Clone the repository and set up the project.
2. Use Postman or any other API client to interact with the API.
3. Use the `Add Scrap` and `Add User` endpoints to add new scraps and users respectively.
4. Use the `Get All Scraps by Location` endpoint to fetch scraps by location.
5. Use the `Remove Scrap by ID` endpoint to delete scraps by their ID.

## Postman Collection

You can use the following Postman collection to test the API endpoints: [Scrap Baba API Postman Collection](https://cloudy-sunset-961863.postman.co/workspace/My-Workspace~de367c02-00b5-4a2a-899e-401cd6d6ab2b/collection/38840998-43743a54-b348-402b-9f37-de4b392a0b1e?action=share&creator=38840998)

## Conclusion 🎉

This API is part of the Scrap Baba platform, enabling users to manage scrap data effectively.
