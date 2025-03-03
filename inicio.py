# Script para criar arquivos vazios

# Lista de nomes dos arquivos a serem criados
files = ["inex.html", "style.css", "main.js"]

# Cria cada arquivo vazio
for filename in files:
    with open(filename, "w") as file:
        pass  # Cria o arquivo sem conteúdo

print("Arquivos criados com sucesso!")
