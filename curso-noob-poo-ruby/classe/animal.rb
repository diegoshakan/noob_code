require_relative "modulo"

class Animal
  include Comunica
  attr_reader :nome

  def initialize(nome)
    @nome = nome
  end
end

class Cachorro < Animal
  attr_reader :raça

  def initialize(nome, raça)
    super(nome)
    @raça = raça
  end

  def comunicar
    puts "Au, au, au! = Eu sou a classe filha Cachorro"
  end
end

class Gato < Animal
  attr_reader :raça

  def initialize(nome, raça)
    super(nome)
    @raça = raça
  end

  def comunicar
    puts "Miau, miau! = Eu sou a classe filha Gato"
  end
end

bob = Cachorro.new("Bob", "Poodle")
puts bob.nome
puts bob.raça
bob.comunicar
puts "-----"
xaninho = Gato.new("Xaninho", "Siamês")
puts xaninho.nome
puts xaninho.raça
xaninho.comunicar