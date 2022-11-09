# Importing Libraries
import serial
import time
arduino = serial.Serial(port='COM3', baudrate=9600, timeout=.1)

def lock():
    arduino.write(bytes('L', 'utf-8'))
    time.sleep(0.05)
    data = arduino.readline()
    return data

def unlock():
    arduino.write(bytes('H', 'utf-8'))
    time.sleep(0.05)
    data = arduino.readline()
    return data