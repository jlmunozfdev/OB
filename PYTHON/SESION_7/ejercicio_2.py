""" En este segundo ejercicios tendréis que crear un script que nos diga 
si es la hora de ir a casa. Tendréis que hacer uso del modulo time. 
Necesitaréis la fecha del sistema y poder comprobar la hora.

En el caso de que sean más de las 7, 
se mostrará un mensaje y en caso contrario, 
haréis una operación para calcular 
el tiempo que queda de trabajo. """

# Importing the datetime module from the datetime library.
from datetime import datetime
# Creating a variable called hora and assigning it the value of the current time.
hora = datetime.now()


# The above code is printing the current time and if the time is greater than 19:00 it will print a
# message saying that it is time to go home.
if int(hora.hour) >= 19:
    print(f"Es hora de ir a casa, ya son las {hora.hour} horas con {hora.minute} minutos.")
else:
    print(f"Aún te quedan {(19)-(hora.hour)} horas de trabajo.")