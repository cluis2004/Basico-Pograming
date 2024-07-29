class alumno:
    def __init__(self,nombre,edad,nota):
        self.nombre = nombre
        self.edad = edad
        self.nota = nota
    def aprobado(self):
        if self.nota > 5:
            return True
        else:
            return False