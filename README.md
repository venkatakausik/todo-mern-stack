In the project directory, you can run:

### `cd frontend`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Next, in a new terminal 
### `cd backend`
### `npm start`

Runs the nodejs app on port 8000.\
The backend application is connected to MongoDB database running on localhost:27017.\

In browser, you'll land on home page with two buttons "Tasks" and "Add Tasks". \
Clicking on Tasks will navigate you to a /tasks page route where all the tasks are listed.  \
Clicking on Add Tasks will navigate you to a /addTasks page route where a Todo task can be added.\
On adding the new Todo task, you'll be redirected to the /tasks page route to view the latest tasks added.