nomes = ["joão", "maria", "josé", "mateus"]

dict = {nome: "Diego", idade: 35, altura: 1.73}

chave = "Diego"

dict.each do |chave, valor|
  puts "#{chave}: #{valor}"
end

puts chave
