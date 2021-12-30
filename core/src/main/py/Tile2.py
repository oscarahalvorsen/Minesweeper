# !/usr/bin/python3
# coding=utf-8

class Tile2:
    def __init__(self):
        self.type=0
        self.covered=True
        self.flag=False 
        self.tempUncovered=False

    def getType(self):
        return self.type

    def isAir(self):
        return self.type==0

    def isBomb(self):
        return self.type==9
    
    def setNumber(self, n):
        self.isNumberValid
        self.type=n

    def setBomb(self):
        self.type=9

    def isCovered(self):
        return self.covered

    def uncover(self):
        self.covered=False

    def isFlag(self):
        return self.flag
    
    def toggleFlag(self):
        self.flag = not self.flag

    def isTempUncovered(self):
        return self.tempUncovered

    def toggleTempUncovered(self):
        self.tempUncovered = not self.flag
    
    def isNumberValid(self, type):
        if (not isinstance(type, int)):
            raise TypeError("Tile number must be integer.")
        if (type<0 or type>9):
            raise ValueError("Tile number cannot be less that 0 or more than 9.")
    
    def __str__(self):
        return "T:" + str(self.getType()) + " F:" + str(self.isFlag()) + " C:" + str(self.isCovered())
    