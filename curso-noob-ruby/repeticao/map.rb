nomes = ["joão", "maria", "josé", "mateus"]

nomes_cargos = nomes.map do |nome_completo|
  nome_completo + " gerente"
end

puts nomes
