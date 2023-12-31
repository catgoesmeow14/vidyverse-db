# vidyverse-db

## Description
Welcome to the *vidyverse-db* repository, the backend cornerstone of Vidya's personal blog, *Vidy-Verse*. This repository, deployed on Vercel, is an Express.js-based API interfacing with a PostgreSQL database. Its primary function is to facilitate data retrieval via GET requests. You can interact with the API by sending requests to `https://vidyverse-db.vercel.app/project?id=1,2,3,4` or by utilizing a local server on port 3000. Future expansions will include POST, PUT, and DELETE functionalities to enrich user interaction.

## Usage

### Retrieving Data with GET Requests

To access project data:

1. **Remote Access**:
   Issue a GET request to:
   ```
   https://vidyverse-db.vercel.app/project?id=1,2,3,4
   ```
   This retrieves data for projects with IDs 1, 2, 3, and 4.

2. **Local Testing**:
   - Start the server locally:
     ```
     npm start
     ```
   - Access the API at:
     ```
     https://vidyverse-db.vercel.app/project?id=1,2,3,4
     ```

### Upcoming Features: POST, PUT, DELETE
The POST, PUT, and DELETE methods are under active development. These features, aimed at enhancing the API's capabilities, will be included in forthcoming updates.

## Getting Started: Setting Up Your Local Environment

To set up the *vidyverse-db* environment on your local machine, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/vidyverse-db.git
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Environment Configuration**:
   The default `.env` file settings should suffice, given that the PostgreSQL database is already deployed on Vercel.

## Contribution Guidelines
As a learner-driven project, *vidyverse-db* is currently not open for public contributions. However, we value your feedback and suggestions. While direct contributions are not accepted, feel free to share your thoughts or queries.

## Licensing
*vidyverse-db* is a personal project of Vidya, without a formal license. It's tailored for personal use and not intended for public distribution or modification.

## Contact Information
For inquiries, suggestions, or feedback, please contact Vidya at vidyaachan14@gmail.com. Your interest in *vidyverse-db* is much appreciated, and we look forward to hearing from you.
