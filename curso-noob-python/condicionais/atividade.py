'''
um estudante está em dúvida se passou de ano, a média da escola é 7 para passar,
4 ou 6.9 para recuperção e abaixo de 4 para reprovação direta. Ele tirou:
8.1, 6.9, 5.4, 8.9
faça um programa que faça uma média aritmética e diz se ele passou de ano,
ficou em recuperação ou reprovado mostrando sua nota final.
Obs: Mostre apenas duas casas decimais (ou seja, dois números após a 'vírgula')
'''

nota1 = 8.1
nota2 = 6.9
nota3 = 5.4
nota4 = 8.9
media = (nota1 + nota2 + nota3 + nota4) / 4

if media >= 7 and media <=10:
  print(f"Aprovado, nota {media:.2f}")
elif media >= 4 and media < 7:
  print(f"Recuperação, nota {media:.2f}")
elif media < 4 and media >=0:
  print(f"Reprovado, nota {media:.2f}")
else:
  print("Nota não existe")