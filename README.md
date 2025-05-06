# MeetX API

A RESTful API for managing community activities and bookings built with Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [User Routes](#user-routes)
  - [Activity Routes](#activity-routes)
  - [Booking Routes](#booking-routes)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [License](#license)

## Overview

MeetX is a platform that allows users to create, manage, and participate in various community activities. Users can register, log in, create activities, and book their spots for activities they're interested in.

## Features

- User authentication (register/login) with JWT
- CRUD operations for activities
- Managing bookings for activities
- Filtering bookings by user or activity

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Railway

## API Documentation

### Base URL

- Local Development: `http://localhost:8080/meetX/api/v1`
- Production: `https://meetx-assignment-production.up.railway.app/meetX/api/v1`

### Authentication

The API uses JWT for authentication. After logging in, include the token in the Authorization header as a Bearer token:

```
Authorization: Bearer <your_jwt_token>
```

### User Routes

#### Register a User

- **Endpoint**: `POST /user/register`
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "password": "password123",
    "confirmationPassword": "password123",
    "phone": "1234567890"
  }
  ```
- **Authentication**: Not required

#### Login

- **Endpoint**: `POST /user/login`
- **Description**: Authenticate a user and receive a JWT token
- **Request Body**:
  ```json
  {
    "email": "alice@example.com",
    "password": "password123"
  }
  ```
- **Authentication**: Not required

### Activity Routes

#### Create Activity

- **Endpoint**: `POST /activity`
- **Description**: Create a new activity
- **Request Body**:
  ```json
  {
    "title": "Vaccination Drive",
    "description": "COVID-19 and flu vaccines available for free. Bring your ID card.",
    "location": "Primary Health Centre, Baner, Pune",
    "date": "2025-06-20T07:30:00.000Z",
    "time": "09:30"
  }
  ```
- **Authentication**: Required

#### Get All Activities

- **Endpoint**: `GET /activity`
- **Description**: Get a list of all activities
- **Authentication**: Not required

#### Update Activity

- **Endpoint**: `PATCH /activity/:activityId`
- **Description**: Update an existing activity
- **Request Body**: Include only fields to be updated
  ```json
  {
    "title": "Blood Donation Camp-updated"
  }
  ```
- **Authentication**: Required

#### Delete Activity

- **Endpoint**: `DELETE /activity/:activityId`
- **Description**: Delete an activity
- **Authentication**: Required

### Booking Routes

#### Create Booking

- **Endpoint**: `POST /booking`
- **Description**: Book a spot for an activity
- **Request Body**:
  ```json
  {
    "userId": "681a8794071a84156fe40d87",
    "activityId": "681a883f071a84156fe40d8b",
    "bookingDate": "2025-06-15T10:00:00.000Z"
  }
  ```
- **Authentication**: Required

#### Get All Bookings

- **Endpoint**: `GET /booking`
- **Description**: Get all bookings
- **Authentication**: Required

#### Get Bookings by User

- **Endpoint**: `GET /booking?userId=:userId`
- **Description**: Get all bookings for a specific user
- **Authentication**: Required

#### Get Bookings by Activity

- **Endpoint**: `GET /booking?activityId=:activityId`
- **Description**: Get all bookings for a specific activity
- **Authentication**: Required

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/meetx.git
   cd meetx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables))

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ **Warning**: Never commit your `.env` file to version control.

## Running the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## Deployment

The application is deployed on Railway. The production URL is:

```
https://meetx-assignment-production.up.railway.app
```


