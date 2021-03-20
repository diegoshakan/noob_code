'''
Vamos criar uma calculadora
'''

def soma (x, y):
  return x + y

def subtracao (x, y):
  return x- y

cod = 0
while True:
  cod = int(input("Qual operação realizar: 1. Soma, 2. Subtração, 5. Sair: "))
  if cod == 1:
    x = int(input('Número 1: '))
    y = int(input('Número 2: '))
    resultado = soma(x, y)
    print(resultado)
  elif cod == 2:
    x = int(input('Numero 1: '))
    y = int(input('Numero 2: '))
    resultado = subtracao(x, y)
    print(resultado)
  elif cod == 5:
    print("Obrigado por usar a calculadora noob")
    break