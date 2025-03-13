# Getting Started with Create React App

//admin: email: rahul@test.com.    password: rahul@2021 
//user : email: nagesh@test.com    password: nagesh@2021 

This project was creted using npx create-react-app@latest myapp (for latest react application)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm install`

Runs and Install the require and default depencies for project 
For Toastify messages `react-toastify` package was used.
For To calculate the time variation from job created to now `date-fns` with formatDistanceToNow Method was used. 
Installed the `axios` for REST API data fetching.

##### `Explanation`

Datase:SQLite 
Login Page: For admin,user and unregistered users,Only Admin can Modify the job related queries (like CREATE,MODIFY OR UPDATE,DELETE) the job.
For User and Unregistred can only view the jobs list and view the details of the job.
Enter the user specified credentials to store the jwttoken for further actions.

For Unregistered user view the login and register buttons at nav header section.
For Admin and User can View Logout and Dashboard buttons with username(with role e.g:admin or user) 

RegisterPage: Unregistered user can enter the required credetials to register
Once register success with toastify message at the top-center then it automatically redirect to the login page.

AddJobPage:Only admin can create a jobs 

Header:Nav Header with liks 

JobDetailsPage:Once the user or admin click on the specific job to view the details in new page; 

JobInfoCard : Job lists 

LandingPage : This is the HomePage or MainPage of the project 

SelectedSkills:Skills list 

UpdateJob: Only admin can access this page to edit the details of update job information.

App.Js:All Projects Routes and Routing are specified.

For Styling purpose individual css files was created with .css extension.








