# operadores booleanos

# and, or, not
'''
and = verdadeiro e verdadeiro => Verdade
and = verdadeiro e falso => Falso
and = falso e verdadeiro => Falso
and = falso e falso => Falso

or = verdadeiro ou verdadeiro => Verdade
or = verdadeiro ou falso = Verdade
or = falso ou verdadeiro = Verdade
or = falso ou falso => Falso

not = não verdadeiro => Falso
not = não falso => Verdade
'''
# prática
# nota1 = 6
# nota2 = 6
# media = (nota1 + nota2)/2

# if media >= 6:
#   print(f"Aprovado com nota final {media}")
# else:
#   print(f"Reprovado com nota final {media}")

username = "joao"
password = "123456"

if username == "diego" and password == "123456":
  print("Seja Bem-vindo")
else:
  print("Você não tem acesso")