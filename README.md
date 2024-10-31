# Gerador de Senhas Aleatórias

Este projeto é um gerador de senhas aleatórias criado com HTML, CSS e JavaScript. Ele permite definir o comprimento da senha e inclui uma variedade de caracteres para aumentar a segurança, como letras maiúsculas, minúsculas e caracteres especiais.

![Gerador_password](https://github.com/user-attachments/assets/ab913714-f328-487e-9e5f-05508284c02c)

## Funcionalidades

- **Geração de senha personalizada**: Permite ao usuário escolher o comprimento da senha.
- **Caracteres variados**: Inclui letras maiúsculas, minúsculas e caracteres especiais para uma senha mais forte.
- **Limpeza do campo de senha**: Inclui um botão para limpar o campo de senha, evitando sobreposição de novas senhas.
- **Validação de entrada**: Exibe um alerta caso o comprimento da senha não seja definido.

## Como funciona

1. **Defina o comprimento da senha**: O usuário insere o comprimento desejado no campo de entrada.
2. **Clique no botão "Gerar Senha"**: Ao clicar no botão, o código gera uma senha aleatória com base no comprimento definido.
3. **Ver a senha**: A senha gerada é exibida no campo de texto.
4. **Limpar o campo**: O botão de limpeza apaga o campo de senha se ele contiver texto, exibindo um alerta caso contrário.

## Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript**

## Como usar

Clone este repositório e abra o arquivo `index.html` em qualquer navegador para testar o gerador de senhas.


### Exemplo de Uso

html
<input type="number" id="lenghtpassword" placeholder="Digite o comprimento da senha" />
<textarea id="generetes-password" readonly></textarea>
<button class="addpassword">Gerar Senha</button>
<button class="clear">Limpar</button>
