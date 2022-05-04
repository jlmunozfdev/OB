""" Crea un script que le pida al usuario una lista de países (separados por comas). 
Éstos se deben almacenar en una lista. 
No debería haber países repetidos (haz uso de set). 
Finalmente, muestra por consola la lista de países 
ordenados alfabéticamente y separados por comas. """




# Asking the user to input a list of countries separated by a comma.
entrada = input("Ingrese una lista de paises y sepáralos por una coma:\n")

# Creating a list of unique countries from the input string.
paises = sorted(list(set([pais for pais in entrada.split(",")])))


# Printing the list of countries.
print(paises)





# print((sorted(set(paises))))
