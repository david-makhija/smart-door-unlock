# SMART DOOR UNLOCK APPLICATION

### PROBLEM STATEMENT

We have always faced a situation where you were away from your hostel and you wanted to confirm that your door was locked and you hadn't by mistake left it open…or when you were left out of your house/hostel room with the keys inside…What do you do? To solve this problem, we as students of Software Engineering will build a software that allows access to lock and unlock a door without any key from anywhere with just internet access. 

The purpose of this software is to improve the security and accessibility of ‘doors’. This also aims to reduce the dependence on physical access methods. This is in keeping with the ever growing idea of digitisation of home security and smart connection systems. The software should allow access of a particular door to multiple trusted members of the home/hostel and keeps a track of the history of when, where and who accessed the door unlock.

The functionalities provided by this software should be:
- Configure a username and password for the server and allow devices to gain access to the server.
- The connected devices can then communicate with server to access doors from anywhere
- The server can perform actions on the door: 
    1) Lock the door    
    2) Unlock the door using servo motor.
- Create a database that maintains a record of actions performed on the shared door for complete trust and transparency. 

### TECH STACK

  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
- Firstly we build a frontend application using Javascript library, **React** that will allow users to connect to their server located permanently in vicinity to the home setup.

- Create an **Arduino Uno** centered hardware mechanism connected to a battery and a servo motor to allow movement of door lock.

- The server is configured in **Python** that will communicate with the UI application, the database of **MySQL** to maintain history and arduino.

### REQUIREMENTS (Hardware)
- Arduino Uno Rev 3
- Arduino Programming Cable
- Servo Motor and attachments
- Jumper Wires
- Hi-watt battery

### REQUIREMENTS (Software)
- Arduino IDE 
- Python IDE

### INSTALLATION

- Install PySerial
```python
pip install pyserial
```


