# Clipboard Online

Ferramenta simples e eficiente para enviar e recuperar textos de forma rápida e segura. Aqui você pode armazenar textos temporariamente e acessá-los posteriormente utilizando um código exclusivo.

![Clipboard Online](https://i.postimg.cc/pr5rY0QR/dsadsa.png)

## Como Funciona

### Enviar Texto

1. Digite ou cole o texto que deseja armazenar na caixa de entrada fornecida.
2. Clique no botão "Enviar".
3. Você receberá um código exclusivo que será necessário para recuperar o texto posteriormente.

### Recuperar Texto

1. Informe o código que você recebeu ao enviar o texto na caixa de entrada "Código".
2. Clique no botão "Recuperar".
3. O texto associado ao código será exibido na caixa de texto.

**Atenção:** Os códigos são únicos e não podem ser recuperados caso sejam perdidos. Certifique-se de guardá-los em um local seguro.

## Configuração do Banco de Dados

Este projeto utiliza o Prisma como ORM (Object-Relational Mapping) para gerenciar o banco de dados. Certifique-se de configurar sua variável de ambiente `DATABASE_URL` no arquivo `.env` com a string de conexão PostgreSQL.

```
DATABASE_URL=your_postgresql_connection_string
```

Aproveite a praticidade do Clipboard Online!
