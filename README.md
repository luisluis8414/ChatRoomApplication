# ChatRoomApplication

A Chat Room Application using Java with Springboot in the backend and React with SockJS and Stomp.

For this to work u need node, java 17 and gradle(i did it with v 7.6) 
To run just clone the repository and run:

(in the chat-app folder)
npm install
npm start 

(in the chatserver folder)
./gradlew bootRun

it should run now on: http://localhost:3000/

![image](https://user-images.githubusercontent.com/86251888/227200119-c483dfea-2706-4927-95f4-67bae8c967d1.png)

Enter a username

Then u are connected to the chatroom. On the leftside u can see other users. 

![image](https://user-images.githubusercontent.com/86251888/228527134-cd1ca935-82ef-441f-a123-92a109578986.png)

Chatroom is the groupchat for all. To add another user just open the link in another tab. The new user should then appear on the left side. U can now directly message the other user.

![image](https://user-images.githubusercontent.com/86251888/228527269-f408183d-a1b7-4ea7-b0e9-169976bb07ff.png)


