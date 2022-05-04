""" En este segundo ejercicio, tenéis que crear una aplicación que obtendrá 
los elementos impares de una lista pasada por parámetro con filter y realizará 
una suma de todos estos elementos obtenidos mediante reduce. """


# It imports the reduce function from the functools module.
from functools import reduce

def miFuncion(x):
   # Filtering the list `x` and returning a list with the odd numbers.
   resultado = list(filter((lambda x: x%2), x))
   print(resultado)
   # Summing all the elements of the list `resultado`.
   resultado = reduce((lambda x,y: x + y), resultado)
   print(resultado)

# It creates a list of numbers from 0 to 9.
numeros = list(range(10))

# Calling the function `miFuncion` with the list `numeros` as an argument.
miFuncion(numeros)



