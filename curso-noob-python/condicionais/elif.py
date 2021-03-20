# operadores booleanos

# and, or, not
'''
and = verdadeiro e verdadeiro => Verdade
and = verdadeiro e falso => Falso

or = verdadeiro ou falso => Verdade
or = falso ou falso => Falso

not = não verdadeiro => Falso
not = não falso => Verdade
'''
# prática
nota1 = -11
nota2 = -11
media = (nota1 + nota2)/2

if media >= 6 and media <= 10:
  print(f"Aprovado com nota {media}")
elif media < 6 and media >= 2: 
  print(f"Recuperação com nota {media}")
elif media < 2 and media >= 0:
  print(f"Reprovado com nota {media}")
else:
  print("está nota não existe")