nomes = ["joão", "maria", "josé", "mateus"]

dict = {nome: "Diego", idade: 35, altura: 1.73}

# for nome in nomes do
#   puts nome
# end

for k, v in dict do
  puts "#{k}: #{v}"
end