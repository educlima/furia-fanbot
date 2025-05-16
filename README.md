# FURIA Fans Chatbot

Um chatbot interativo para fãs da FURIA Esports, com foco no time de CS:GO e outras modalidades.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do desafio "Experiência Conversacional FURIA" para criar uma interface conversacional para os fãs do time de CS da FURIA.

O projeto consiste em uma landing page com um chatbot integrado que permite aos fãs obterem informações sobre o time, jogadores, próximos jogos, resultados recentes e outras informações relevantes.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui para componentes de UI
- AI SDK para o chatbot
- Vercel para deploy

## Funcionalidades

- Interface de chat interativa
- Informações sobre jogadores da FURIA
- Próximos jogos e resultados recentes
- Notícias sobre o time
- FAQ sobre a FURIA
- Design responsivo para desktop e mobile

## Como Executar

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/furia-fans-chatbot.git
cd furia-fans-chatbot
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione:
\`\`\`
OPENAI_API_KEY=sua_chave_api_aqui
\`\`\`

4. Execute o projeto em modo de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

5. Acesse o projeto em `http://localhost:3000`

## Estrutura do Projeto

- `/app`: Contém as páginas e rotas da aplicação
- `/components`: Componentes reutilizáveis
- `/lib`: Utilitários e dados
- `/public`: Arquivos estáticos

## Melhorias Futuras

- Integração com API oficial da FURIA para dados em tempo real
- Autenticação de usuários para personalização
- Notificações para jogos ao vivo
- Estatísticas detalhadas dos jogadores
- Integração com Twitch para streams ao vivo

## Autor

Desenvolvido por Eduardo Corrêa de Lima - Estudante de Engenharia de Software da Universidade de Vassouras

## Licença

Este projeto é apenas para fins educacionais e não possui afiliação oficial com a FURIA Esports.
