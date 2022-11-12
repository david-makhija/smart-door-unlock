# Here goes the react app
## Various views of the software will be styled and integrated with the `server` folder in the root directory of the repository.



- FIREBASE: We have three collections to manage the data.
1) Users: Registered members and admins who will use the software.
2) History: It stores the action perfomed (close: False, open: True) at the 'timestamp' by 'user'.
3) Groups: This collection contains:
    - Name of the group
    - An array of members that stores the reference to the Users
    - The User Id of the admin who has master access
    - An array of history that stores the reference to the History
    - The server Id that will be used to access the Flask app, hence the door
    - The geopoint of the server pointed by this group
    