class Aluno
  attr_reader :nome, :idade
  @last_nome;

  def initialize(nome, idade) 
    @nome = nome
    @idade = idade
  end

  def mostrar_dados
    puts "Nome: #{self.nome} #{@last_nome}, Idade: #{@idade}"
  end

  def add_last_name(last_nome)
    @last_nome = last_nome
  end
end

a1 = Aluno.new("Diego", 35)
a1.add_last_name("Araujo")

a1.mostrar_dados
a1.last_nome
