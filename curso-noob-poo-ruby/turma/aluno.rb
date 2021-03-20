require_relative "pessoa"

class Aluno < Pessoa
  attr_reader :matricula

  def initialize(nome, idade, matricula)
    super(nome, idade)
    @matricula = matricula
  end
end