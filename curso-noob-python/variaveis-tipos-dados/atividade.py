'''
Atividade - Variáveis e tipos de dados
1. Você receberá um nome, uma idade e um email e guardará em um dicionário.
2. Deverá imprimir da seguinte forma: {'info': ['Diego', 18, 'diego@example.com']}

Dicas: crie uma lista vazia e um dicionário vazio. Crie variáveis para receber nome, idade
e email. Insira essas variáveis em ordem na lista vazia. Insira a lista no dicionário.
Imprima o dicionário
'''

lista = []
dic = {}
nome = "Diego"
idade = 18
email = "diego@example.com"

lista.append(nome)
lista.append(idade)
lista.append(email)

dic['info'] = lista

print(dic)