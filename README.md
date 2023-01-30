# Instalacao

Para configurar o projeto do front-end, é necessário somente rodar os comandos

```
npm i
npm run dev
```

# Sobre o projeto

Devido a falta de tempo e um período condizente para um projeto completo, testes unitários não foram desenvolvidos para este projeto. Mas, apenas para ressaltar, testes unitários é um critério **NO GO** para a maioria dos projetos (ou deveria ser) a serem trabalhados em qualquer empresa criteriosa no mercado.

Como todo o tipo de projeto, há melhorias a serem feitas, como por exemplo: o uso de uma lib ou desenvolvimento de uma ferramenta Drag'n'Drop como o [React DND](https://react-dnd.github.io/react-dnd/) para uma melhor interacao entre usuário e aplicacão. E também, o possivel uso de ferramentas para a edicão utilizando Markdown.

Pode ser feito também uma arquitetura menos acoplada nas colunas de board e definirmos uma estrutura onde a definicão de quais colunas aparecem para o usuário venha de algum CMS ou micro-servico que, a partir de um ID ou algum token, determine a permissão do usuário e quais colunas aquele board possui e ele é possibilitado de ver.

Muitissimas melhorias na UI podem serem feitas, como por exemplo, a melhoria na tela de login, melhoria em relacão as escolhas de cores e formatos.

## Requisitos

1. ~~A API que provemos deve ser usada para persistência dos cards (ela trabalha com persistência em memória) e não deve ser alterada.~~

2. ~~A interface gráfica será apenas uma tela, nela deve haver três colunas chamadas "To do", "Doing" e "Done".~~

3. ~~Os cards deve ser listados nessas colunas de acordo com o valor do campo `lista` presente no card. Os valores de `lista` devem ser "ToDo", "Doing" e "Done", respectivamente.~~

4. ~~Deve haver um local que permita criar um card passando valores para o `titulo` e `conteudo`, deve haver um botão para adicionar o card.~~

5. ~~Um novo card deve sempre cair na lista "To Do" após persistido na API.~~

6. ~~O card deverá ter dois modos: Visualização e Edição.~~

7. ~~No modo de visualização o card terá um cabeçalho com seu título, o conteúdo e 4 botões.~~

8. O `conteudo` do card pode ser markdown, utilize uma biblioteca para renderizá-lo no modo de visualização (recomendamos uma combinação de `dompurify` e `marked`). Lembre-se de estilizar o html resultante do parse do markdown... [Se quiser usar highlight para campos de código no markdown será um diferencial].

9. ~~Um dos botões do card deverá excluí-lo (persistindo pela API), outro colocá-lo em modo de edição.~~

10. ~~Os dois outros botões devem mudar o card para a lista anterior (se houver) ou para a lista seguinte (se houver). A decisão de desabilitar, esconder ou apenas não gerar o evento desses botões quando não houver a proxima lista ou a anterior é sua.~~

11. ~~No modo de edição, o card conterá um input para o `titulo`, um textarea para o `conteudo` e dois botões.~~

12. ~~No modo de edição, um dos botões cancela a edição, quando precionado os campos devem ser resetados para o valor atual e voltar o card ao modo de visualização.~~

13. ~~O outro botão salva o card, persistindo as informações pela API. Também volta ao modo de visualização em seguida.~~

14. ~~Toda decisão de visual, de UI e UX é sua. Apenas utilize uma única tela.~~

15. ~~Se estiver usando REACT priorize componentes funcionais e hooks.~~

16. O projeto deve ser colocado em um repositório GITHUB ou equivalente, estar público, e conter um readme.md que explique em detalhes qualquer comando ou configuração necessária para fazer o projeto rodar.

17. A entrega será apenas a URL para clonarmos o repositório.

## Diferenciais e critérios de avaliação

Qualidade visual levando em conta práticas de UI e UX será considerado um diferencial. Bem como a instalação e bom uso de bibliotecas como styled-components e react-icons ou seus equivalentes para Angular se aplicável.

Arquiteturas que separem responsabilidades, de baixo acoplamento e alta-coesão são preferíveis, sobretudo usando dependências injetadas, que permitam maior facilidade para testes unitários e de integração.

Avaliaremos se o código é limpo (com boa nomenclatura de classes, variáveis, métodos e funções) e dividido em arquivos bem nomeados, de forma coesa e de acordo com boas práticas. Bem como práticas básicas como tratamento de erros.

Desacoplar e testar os componentes e serviços com testes unitários será considerado um diferencial.

O uso de typescript (se não for obrigatório) acompanhado das devidas configurações e tipagens bem feitas, bem como uso de técnicas de abstração usando interfaces (especialmente da lógica de persistência) serão consideradas um deferencial.

O uso de Linter será considerado um diferencial.

A criação de um docker-compose e de dockerfiles que ao rodar `docker-compose up` subam o sistema por completo (front e back) será considerado um diferencial.

Entregou incompleto, teve dificuldade com algo, ou fez algo meio esquisito para simplificar alguma coisa que não estava conseguindo fazer? Deixe uma observação com a justificativa no readme.md para nós...
