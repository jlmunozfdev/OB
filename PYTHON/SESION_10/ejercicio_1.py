""" En este ejercicio tenéis que crear una lista de RadioButton que muestre la opción 
que se ha seleccionado y que contenga un botón de reinicio para que deje todo como al principio. 
Al principio no tiene que haber una opción seleccionada. """



import tkinter

# It's importing the tkinter module and it's giving it the alias tk.
import tkinter as tk


# It's a class that creates a list of radio buttons
class ListaRadioButton:

    def __init__(self) :

       # It's creating a window.
        self.window = tkinter.Tk()
        # It's creating a window.
        self.window.title("Lista Radio Button")
       # It's creating a window.
        self.window.geometry('400x200')
        # It's changing the background color of the window.
        self.window.config(background="blue")

       # It's creating a variable that will be used to store the value of the selected radio button.
        self.seleccionado = tk.StringVar()
        
        # It's setting the value of the variable to None.
        self.seleccionado.set(None)

        # It's creating a radio button with the text "Java" and the value "Java" and it's storing it
        # in the variable "self.r1".
        self.r1 = tk.Radiobutton(self.window, text="Java",  value='Java', variable=self.seleccionado)
       # It's placing the radio button in the window.
        self.r1.grid(column=0, row=0, sticky=tk.W)

        self.r2 = tk.Radiobutton(self.window, text="Python",  value='Python', variable=self.seleccionado)
        self.r2.grid(column=0, row=1, sticky=tk.W)

        self.r3 = tk.Radiobutton(self.window, text="C++",  value='C++', variable=self.seleccionado)
        self.r3.grid(column=0, row=2, sticky=tk.W)

       # It's creating a button with the text "Mostrar seleccionado" and the background color "red"
       # and the foreground color "white" and it's storing it in the variable "self.boton1".
        self.boton1=tk.Button(self.window, text="Mostrar seleccionado", bg="red", fg="white", command=self.mostrarseleccionado)
        # It's placing the button in the window.
        self.boton1.grid(column=0, row=3, sticky=tk.W)

        # It's creating a label with the text "" and the background color "yellow" and the foreground
        # color "black" and it's storing it in the variable "self.label1".
        self.label1=tk.Label(self.window, text="", bg="yellow", fg="black")
        # It's placing the label in the window.
        self.label1.grid(column=1, row=4, sticky=tk.W)
        
       # It's creating a button with the text "Limpiar" and it's storing it in the variable
       # "self.boton2".
        self.boton2=tk.Button(self.window, text="Limpiar", command=self.limpiar)
        # It's placing the button in the window.
        self.boton2.grid(column=0, row=5, sticky=tk.W)

        self.boton3=tk.Button(self.window, text="Salir", command=self.salir)
        self.boton3.grid(column=0, row=6, sticky=tk.W)

       # It's creating a window.
        self.window.mainloop()

    def mostrarseleccionado(self):
        """
        If the value of the variable seleccionado is Java, then the text of the label1 widget is set to
        "La opción seleccionada es Java". 
        
        If the value of the variable seleccionado is Python, then the text of the label1 widget is set
        to "La opción seleccionada es Python". 
        
        If the value of the variable seleccionado is C++, then the text of the label1 widget is set to
        "La opción seleccionada es C++". 
        
        The function is called when the user clicks on the radiobutton widget. 
        
        The command option of the radiobutton widget is set to the function mostrarseleccionado. 
        
        The command option of the radiobutton widget is set to the function mostrarseleccionado. 
        
        The command option of
        """
        if self.seleccionado.get()=='Java':
            self.label1.configure(text="La opción seleccionada es Java")
        if self.seleccionado.get()=='Python':
            self.label1.configure(text="La opción seleccionada es Python")
        if self.seleccionado.get()=='C++':
            self.label1.configure(text="La opción seleccionada es C++")

    def limpiar(self):
       # It's setting the value of the variable seleccionado to None and it's setting the text of the
       # label1 widget to "".
        print("Se ha logrado limpiar con éxito")
        self.seleccionado.set(None)
        self.label1.config(text="")
    
    def salir(self):
       # It's closing the window.
        self.boton3.quit()
        
# It's creating an object of the class ListaRadioButton.
radio=ListaRadioButton() 
