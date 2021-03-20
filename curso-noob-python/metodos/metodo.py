# nome = "Diego"
# print(nome.upper())

def imprime(nome):
  print(f"hello {nome}")

name = "diego"
# imprime(name)

def soma(x, y):
  return x + y

def mult(a, b):
  return a * b

def sub(c, d):
  res_soma = soma(c, d)
  res_mult = mult(c, d)
  return res_mult - res_soma

res_soma = sub(4, 5)
print(res_soma)


