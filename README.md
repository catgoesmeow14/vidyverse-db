# vidyverse-db

## Description
Welcome to the vidyverse-db repository! This is the backend component of Vidya's personal blog, Vidy-Verse. It serves as an API that connects to a PostgreSQL database, which has been deployed on Vercel. The API is built using Express.js framework to handle the routing and requests. The primary purpose of this repository is to provide data retrieval functionality through the GET method. You can test it by sending a request to "https://vidyverse-db.vercel.app/projects?ids=1,2,3,4" or by using the local port 3000. In the future, we plan to develop additional methods such as POST, PUT, and DELETE.

## Installation and Setup
To get started with the vidyverse-db repository, please follow the steps below:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/vidyverse-db.git
   ```

2. Install the required dependencies using npm:

   ```
   npm install
   ```

3. Configure the environment variables. The default settings in the `.env` file should work fine, as the PostgreSQL database has already been deployed on Vercel.

## Usage

### GET Method

To retrieve project data using the GET method, you have two options:

1. Send a request to the deployed endpoint:

   ```
   GET https://vidyverse-db.vercel.app/projects?ids=1,2,3,4
   ```

   This will return project data for the specified IDs (1, 2, 3, and 4).

2. Test locally by running the server on port 3000:

   ```
   npm start
   ```

   Then, you can access the API at `http://localhost:3000/projects?ids=1,2,3,4`.

### POST, PUT, DELETE Methods (Under Development)

Please note that the POST, PUT, and DELETE methods are currently under development and not yet available. We are actively working on implementing these features and they will be added in future updates. Stay tuned for further announcements and updates on these methods!

## Contributions
Contributions to the vidyverse-db repository are not currently available. This project is Vidya's personal project, and contributions from external contributors are not being accepted at this time. However, suggestions and feedback are still welcome, and you can reach out to us using the contact information provided below.

## License
The vidyverse-db repository does not have a formal license. It is a personal project of Vidya and is not intended for public distribution or modification.

## Contact
If you have any questions, suggestions, or feedback regarding the vidyverse-db repository, please reach out to Vidya at vidyaachan14@gmail.com. We appreciate your interest and understanding.
