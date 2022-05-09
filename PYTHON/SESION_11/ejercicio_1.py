""" En este ejercicio tendréis que crear una tabla llamada Alumnos que constará de tres columnas: 
la columna id de tipo entero, la columna nombre que será de tipo texto 
y la columna apellido que también será de tipo texto.

Una vez creada la tabla, tenéis que insertarle datos, 
como mínimo tenéis que insertar 8 alumnos a la tabla.

Por último, tienes que realizar una búsqueda de un alumno por nombre 
y mostrar los datos por consola. """

import sqlite3


# Creating a connection to the database.
miConexion = sqlite3.connect("demo")

# Creating a cursor object.
miCursor = miConexion.cursor()

# Creating a table called ALUMNOS with three columns: ID, NOMBRE_ARTICULO, and APELLIDO.
miCursor.execute('''
    CREATE TABLE ALUMNOS (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOMBRE VARCHAR(50),
        APELLIDO VARCHAR(50)
    )
''')

# Creating a list of tuples.
lista_alumnos = [
    ("JORGE", "MUÑOZ FERNANDEZ"),
    ("ALEJANDRA", "OROZCO PALMA"),
    ("MAURICIO", "PEREZ PEREZ"),
    ("MARIA", "PINEDO BURGOS"),
    ("LUIS", "MONTERO LUGO"),
    ("AMELIA", "RUIZ CHAVEZ"),
    ("CÉSAR", "ALVARADO TUESTA"),
    ("CHRISTIAN", "ROMERO LAVI")
]

# Inserting the values from the list of tuples into the table.
miCursor.executemany("INSERT INTO ALUMNOS VALUES (NULL,?,?)", lista_alumnos)

# Selecting all the columns from the table ALUMNOS where the name is JORGE.
miCursor.execute("SELECT * FROM ALUMNOS WHERE NOMBRE = 'JORGE'")

mostrar_alumno = miCursor.fetchone()

for mostrar in mostrar_alumno:
    print(mostrar)

miConexion.commit()
miConexion.close()