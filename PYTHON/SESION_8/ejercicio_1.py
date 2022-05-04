""" En este ejercicio, tendréis que crear 
un archivo py donde creéis un archivo txt, 
lo abráis y escribáis dentro del archivo. 
Para ello, tendréis que acceder dos veces al archivo creado.
 """
import os
from io import open

#Crea el primer dato en el archivo.txt
# Creating a file called arch_sesion8_num1.txt and writing the text "Primer dato creado" in it.
archivo_texto = open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'w')
archivo_texto.write("Primer dato creado\n")
archivo_texto.close()

#Crea el segundo dato en el archivo.txt
# Opening the file in read and write mode, reading the first line and writing the second line.
archivo_texto = open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'r+')
archivo_texto.readline()
archivo_texto.write("Segundo dato creado\n")


archivo_texto.close()

#Lee los datos del archivo.txt
# Opening the file in read mode, reading the file line by line and printing the lines.
with open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'r') as archivo:
    for linea in archivo:
        print(linea)
    