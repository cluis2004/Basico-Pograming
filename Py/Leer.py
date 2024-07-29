archivo = open("nombres.txt","r")
for nombres in archivo.readlines():
    print(nombres.upper()[::-1])


archivo.close()

archivo = open("nombres2.txt","w")
archivo.write("Hola Mundo xd")
archivo.close()

