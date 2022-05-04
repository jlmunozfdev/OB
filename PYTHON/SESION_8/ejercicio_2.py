""" En este segundo ejercicio, tendréis que crear un archivo py 
y dentro crearéis una clase Vehículo, 
haréis un objeto de ella, lo guardaréis en un archivo y luego lo carg """

from io import open

class Vehiculo:
    marca = ""
    color = ""

    def __init__(self, marca, color):
        self.marca = marca
        self.color = color

    def __str__(self):
        return (f'La marca del vehiculo es {self.marca} y su color es {self.color}.')

vehiculo = Vehiculo("Mazda", "Blanco")

#Creamos el archivo vehículo.txt con la clase Vehículo
archivo = open('/home/jlmunozf/OB/PYTHON/SESION_8/vehiculo.txt', 'w')
archivo.write(str(vehiculo))
archivo.close()

#Cargamos el archivo.txt
with open('/home/jlmunozf/OB/PYTHON/SESION_8/vehiculo.txt', 'r') as archivo:
     for linea in archivo:
         print(linea)

    


