require_relative "pessoa"

class Professor < Pessoa
  attr_reader :disciplina

  def initialize(nome, idade, disciplina)
    super(nome, idade)
    @disciplina = disciplina
  end
end