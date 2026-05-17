import streamlit as st
import pandas as pd
import requests

st.title("Dashboard de Estados Brasileiros")

# A mesma lógica de antes
url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
df = pd.DataFrame(requests.get(url).json())

# Aqui a magia do Dashboard acontece
st.write("Dados brutos do IBGE:")
st.dataframe(df) # Cria uma tabela interativa no navegador

# Cria um gráfico de barras automático
regioes = df['regiao'].apply(lambda x: x['nome'])
st.bar_chart(regioes.value_counts())