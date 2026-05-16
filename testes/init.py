import requests
import pandas as pd

# 1. Definir a URL da API (Endpoint)
url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

# 2. Fazer a requisição
response = requests.get(url)

# 3. Verificar se deu certo (código 200 significa sucesso)
if response.status_code == 200:
    # 4. Converter o JSON recebido em uma lista de dicionários
    dados = response.json()
    
    # 5. Transformar em um DataFrame do Pandas para facilitar as operações
    df = pd.DataFrame(dados)
    
    # Exibir as primeiras linhas da tabela
    print(df.head())
    
    # Exemplo de operação: Contar quantos estados existem por região
    contagem = df['regiao'].apply(lambda x: x['nome']).value_counts()
    print("\nQuantidade de estados por região:")
    print(contagem)
else:
    print(f"Erro na requisição: {response.status_code}")