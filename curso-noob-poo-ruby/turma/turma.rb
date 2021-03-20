class Turma
  attr_reader :professor
  attr_writer :alunos

  def initialize(professor)
    @professor = professor
  end 

  def dados_turma
    puts "Disciplina: #{professor.disciplina}, Professor(a) Responsável: #{professor.nome}"
    listar_alunos
  end
  
  private
  def listar_alunos
    @alunos.each do |aluno|
      puts "Nome: #{aluno.nome}, Matrícula: #{aluno.matricula}"
    end
  end
end