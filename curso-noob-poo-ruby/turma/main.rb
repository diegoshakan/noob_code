require_relative "aluno"
require_relative "professor"
require_relative "turma"

a1 = Aluno.new("Diego", 35, 123)
a2 = Aluno.new("João", 53, 321)
a3 = Aluno.new("José", 23, 541)
p1 = Professor.new("Maria", 60, "Filosofia")

t1 = Turma.new(p1)

t1.alunos(a1, a2, a3)

t1.dados_turma