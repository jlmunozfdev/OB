""" En este ejercicio, tendréis que crear 
un archivo py donde creéis un archivo txt, 
lo abráis y escribáis dentro del archivo. 
Para ello, tendréis que acceder dos veces al archivo creado.
 """
import os
from io import open

#Crea el primer dato en el archivo.txt
archivo_texto = open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'w')
archivo_texto.write("Primer dato creado\n")
archivo_texto.close()

#Crea el segundo dato en el archivo.txt
archivo_texto = open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'r+')
archivo_texto.readline()
archivo_texto.write("Segundo dato creado\n")


archivo_texto.close()

#Lee los datos del archivo.txt
with open('/home/jlmunozf/OB/PYTHON/SESION_8/arch_sesion8_num1.txt', 'r') as archivo:
    for linea in archivo:
        print(linea)
    