""" En este segundo ejercicio, 
tendréis que crear una interfaz 
sencilla la cual debe de contener 
una lista de elementos seleccionables, 
también debe de tener un label 
con el texto que queráis. """

import tkinter
# Importing the tkinter module and renaming it to tk.
import tkinter as tk

# It creates a window.
window = tkinter.Tk()
window.title("Lista de elementos")
window.geometry("400x300")
window.config(background="blue")
window.resizable

# Creating a list of elements.
lista_elementos = ['Java', 'JavaScript', 'PHP', 'Cobol', 'C++', 'Ruby', 'Python']
# Creating a variable that will be used to store the list of elements.
lista_items = tk.StringVar(value=lista_elementos)

# It creates a list of elements.
lista = tk.Listbox(window, listvariable=lista_items)
# Placing the list of elements in the window.
lista.grid(column=0, row=0, sticky=tk.W, padx=120, pady=10)

# It creates a label with the text "Lista de lenguajes de programación" and places it in the window.
label = tk.Label(window, text="Lista de lenguajes de programación", bg="blue", fg="white", font="black")
# It places the label in the window.
label.grid(column=0, row=1, sticky=tk.W, padx=50, pady=10)

window.mainloop()
