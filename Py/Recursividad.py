def fibo(x):
    if x <= 1:
        return x
    else:
        return fibo(x-1)+fibo(x-2)
print("fibonacci",fibo(6))

vector = [1,5,4,2,3]
def quick(vector):
    if len(vector) <=1:
        return vector
    else:
        izq = []
        der = []
        pivote = vector[0]
        i = 0
        for i in range(1,len(vector)):
            if pivote > vector[i]:
                izq.append(vector[i])
            else:
                der.append(vector[i])
        return quick(izq) + [pivote] + quick(der)

print(quick(vector))
