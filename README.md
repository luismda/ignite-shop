# Ignite Shop 🛍👕

<div align="center">
  <img src="https://user-images.githubusercontent.com/88680118/226110418-d72c61a0-2350-4741-92fa-b0787ad23f0d.png" alt="" width="320" />
  
  <img src="https://user-images.githubusercontent.com/88680118/226110470-eb432124-4637-4ad7-ba53-47c658833a4a.png" alt="" width="320" />
  
  <img src="https://user-images.githubusercontent.com/88680118/226110487-31ae5284-3e93-463c-8328-f478a0a359a6.png" alt="" width="320" />
</div>

Esse projeto foi desenvolvido durante o módulo 4 da trilha de React.js do Ignite - bootcamp de especialização da [**Rocketseat**](https://github.com/rocketseat-education).
Nesse projeto, o objetivo principal foi conhecer o framework **Next.js** e seus principais recursos como o SSR e o SSG, além de outras funcionalidades como o next/link,
next/image, dentre outras.

- 🎨 [**Acesse o layout no Figma**](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate?node-id=0-1)
- 🚀 [**Teste a aplicação funcionando**](https://ignite-shop-luismda.vercel.app/)

O **Ignite Shop** é um mini e-commerce de camisetas que utiliza a **API do Stripe** para buscar os produtos disponíveis e realizar o checkout da compra. As principais
funcionalidades são:

- Visualizar os produtos disponíveis para compra
- Adicionar e remover produtos da sacola de compras
- Finalizar a compra integrando com a API do Stripe (pagamento)

Toda a lógica relacionada com o Stripe foi feita utilizando a SDK do Stripe para Node.js. Nesse sentido, para comunicar a aplicação com a API do Stripe é necessário
utilizar uma chave privada que não pode ser acessada publicamente. Por isso, toda essa lógica foi realizada pelo lado do servidor usando o recurso de SSR e SSG do Next.js,
que permitiu, por exemplo, com que os produtos exibidos na tela inicial fossem gerados esticamente.

Além disso, o checkout da compra foi feito utilizando a API Route do Next, visto que foi preciso criar uma sessão de checkout no Stripe e redirecionar o usuário para o
pagamento no próprio Stripe, e logo em seguida, redirecionar o usuário de volta para a aplicação exibindo a tela de sucesso.

Nesse projeto, além de aprender diversas coisas sobre o Next.js, pude conhecer uma nova ferramenta de estilização CSS-in-JS que é o Stitches que, assim como o Styled Components,
permite a criação de componentes estilizados, mas com maior facilidade para criar variações de estilo em um componente, tendo também uma sintaxe de objetos JavaScript. Ainda, nessa
aplicação tive a oportunidade de utilizar o Radix UI para construção de diversos componentes acessíveis, como modal, toast messages e scroll view.

### 🛠🧰 Ferramentas e tecnologias utilizadas
- TypeScript
- React.js
- React Hooks
- Context API
- Next.js
- Stitches
- Axios
- Radix UI
- Keen Slider
- Stripe
- Use Shopping Cart
- React Loading Skeleton
- Zod
- ES Lint

##

**#NeverStopLearning 🚀**
