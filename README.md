

# Garbage Redressal System

The **Garbage Redressal System** is an React application that enables people to report waste management issues by submitting photos. Using an image analysis model, the system validates whether the submitted request is genuine and automatically provides the location coordinates if garbage is detected in the images. The system features role-based access for admins and staff to manage and resolve these issues efficiently.


https://github.com/user-attachments/assets/6533b2f7-19f2-4738-986b-7a2ac28e3e96


## Features

- **Issue Reporting**: Users can submit reports of waste management issues by uploading images.
- **Image Verification Model**: The system verifies if an image contains garbage using a machine learning model. Genuine requests are approved with location coordinates.
- **Admin and Staff Roles**:
  - **Admin**: Assigns reported issues to staff members, monitors issues on a map, and tracks cleanup progress.
  - **Staff**: Visits the location, performs cleanup, and uploads post-cleanup images for verification.
- **Cleanup Verification**: The model checks the new images to confirm if the cleanup was successful and then marks the request as resolved.
- **Map Interface**: The system displays reported and active issues on a map for easy tracking and management.

## Model Repository

The image verification model used in this project can be found in its dedicated repository: [garbageRedressal Model](https://github.com/sarfarajansari/garbageRedressal.Model)

## How It Works

1. **User Submission**: A user reports a waste management issue with images and location data.
2. **Verification**: The model evaluates the images to verify if they genuinely show garbage. If verified, the issue is accepted, and the location is marked on the map.
3. **Assignment and Cleanup**:
   - The admin assigns the issue to a staff member.
   - The staff member visits the location, cleans it, and uploads "after cleanup" images.
4. **Final Verification**: The model analyzes the new images to verify successful cleanup, then marks the request as resolved.
5. **Map Interface**: The admin can track all reported issues and their statuses on the interactive map.

## Conclusion

This project combines machine learning and location tracking for an efficient waste management solution, enabling real-time reporting, validation, and resolution of garbage issues in public spaces. It provides a structured way for users, admins, and staff to collaborate and keep areas clean.

