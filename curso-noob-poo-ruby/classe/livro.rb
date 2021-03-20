class Livro
  attr_reader :nome, :ano, :preco

  def initialize(nome, ano, preco)
    @nome = nome
    @ano = ano
    @preco = dar_desconto(preco)
  end

  def mostrar_dados
    puts "Livro: #{@nome}, Ano Lançamento: #{@ano}, Preço: R$ #{@preco}"
  end

  private 
  def dar_desconto(preco)
    if @ano < 2000
      preco * 0.9
    else
      preco
    end
  end

end

l1 = Livro.new("O Senhor dos Anéis", 2000, 50.00)
# l1.dar_desconto
l1.mostrar_dados
