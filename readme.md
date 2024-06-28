# The Wild Oasis Web Application

The Wild Oasis is a comprehensive web application designed for hotel employees to manage various aspects of hotel operations, such as handling cabin details, bookings, and guest information. The application is built using React and was developed during a React course.

## Features

### User Management
- **User Authentication**: Only hotel employees can sign up and log in to perform tasks within the application.
- **Profile Management**: Users can upload an avatar, and update their name and password.

### Cabin Management
- **Cabin Table View**: Displays all cabins with their photo, name, capacity, price, and current discount.
- **Cabin CRUD Operations**: Users can create new cabins (including uploading a photo), update existing cabins, and delete cabins.

### Booking Management
- **Booking Table View**: Shows all bookings with details such as arrival and departure dates, status, paid amount, cabin, and guest data.
- **Filterable Status**: The booking table can be filtered by status: “unconfirmed”, “checked in”, or “checked out”.
- **Booking Actions**: Users can delete a booking, check in a guest, or check out a guest. 
- **Payment Confirmation**: On check-in, users can confirm that payment has been received (payment is accepted outside the app).
- **Breakfast Addition**: Guests can add breakfast for the entire stay during check-in if not already included.

### Guest Management
- **Guest Data**: Includes full name, email, national ID, nationality, and a country flag for easy identification.

### Dashboard
- **Daily Check-ins and Check-outs**: Displays a list of guests checking in and out on the current day, with actions available directly from the dashboard.
- **Statistics**: Shows recent bookings, sales, check-ins, and occupancy rate.
- **Sales Chart**: Displays daily hotel sales, including both total sales and extras sales (e.g., breakfast).
- **Stay Duration Chart**: Shows statistics on stay durations, an important metric for the hotel.

### Application Settings
- **Global Settings**: Users can define breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

### Additional Features
- **Dark Mode**: The application supports a dark mode for better usability in low-light environments.

## Technology Stack
- **Frontend**: React

