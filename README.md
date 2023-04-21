# ChatRoomApplication

A Chat Room Application using Java with Springboot and React with SockJS and Stomp.

For this to work u need node, java 17 and gradle(i did it with v 7.6) installed.
For this to run on our local machine just clone the repository and run:

(in the chat-app folder)
npm install
npm start 

(in the chatserver folder)
./gradlew bootRun

it should now run on: http://localhost:3000/

Enter a username

U are now connected to the chatroom. On the leftside u can see other users. 

![image](https://user-images.githubusercontent.com/86251888/228527978-12e39d5b-6241-46d4-b060-8c52d64aba42.png)

Chatroom is the groupchat for everyone. To add another user just open the link in another tab. The new user should then appear on the left side. U can now directly message the other user.

![image](https://user-images.githubusercontent.com/86251888/228527269-f408183d-a1b7-4ea7-b0e9-169976bb07ff.png)


