import { useState } from "react";

export default function FashionStore() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Vestido Elegance",
      price: "R$ 170,00",
      image:
        "https://i.ibb.co/7JWXNghk/Whats-App-Image-2026-05-24-at-11-10-07.jpg",
    },
    {
      id: 2,
      name: "Conjunto Premium",
      price: "R$ 249,90",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Blazer Nude",
      price: "R$ 219,90",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-3xl font-serif tracking-wide">Stylo e Modas</h1>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className="bg-black text-white px-6 py-3 rounded-full">
          🛒 {cart.length}
        </button>
      </header>

      {/* Carrinho */}
      <div className="fixed right-5 top-24 bg-white shadow-2xl rounded-2xl p-5 w-[320px] z-50">
        <h3 className="text-2xl font-serif mb-4">Seu Carrinho</h3>

        {cart.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-4 border-b pb-3"
            >
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold">{item.name}</p>

                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
          ))
        )}

        <button className="w-full mt-4 bg-black text-white py-3 rounded-full">
          Finalizar Compra
        </button>
      </div>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.ibb.co/qYFgrbfZ/Whats-App-Image-2026-05-24-at-11-22-35.jpg"
          alt="Moda Elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Elegância em
            <br />
            cada detalhe
          </h2>

          <p className="max-w-xl mx-auto text-lg opacity-90 mb-8">
            Descubra peças sofisticadas que unem estilo, conforto e
            personalidade.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full">
            Comprar Agora
          </button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-serif mb-4">Coleção Destaque</h3>

          <p className="text-gray-500">
            Peças selecionadas para realçar sua elegância.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-serif mb-2">{product.name}</h4>

                <p className="text-gray-500 mb-5">{product.price}</p>

                <button
                  onClick={() => setCart([...cart, product])}
                  className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop"
            alt="Loja"
            className="rounded-3xl shadow-xl h-[500px] object-cover w-full"
          />

          <div>
            <span className="uppercase tracking-[0.3em] text-sm text-gray-400">
              Nossa História
            </span>

            <h3 className="text-5xl font-serif mt-4 mb-6 leading-tight">
              Moda sofisticada para mulheres modernas
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Nossa loja nasceu para valorizar a elegância feminina através de
              peças cuidadosamente selecionadas.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full">
              Conheça Mais
            </button>
          </div>
        </div>
      </section>

      {/* Pagamento */}
      <section className="py-16 bg-[#efe8e1] text-center">
        <h3 className="text-4xl font-serif mb-8">Formas de Pagamento</h3>

        <div className="flex justify-center gap-6 flex-wrap text-lg">
          <div className="bg-white px-6 py-4 rounded-full shadow">
            💳 Cartão
          </div>

          <div className="bg-white px-6 py-4 rounded-full shadow">📱 Pix</div>

          <div className="bg-white px-6 py-4 rounded-full shadow">
            🏦 Boleto
          </div>

          <div className="bg-white px-6 py-4 rounded-full shadow">
            💵 Dinheiro
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-8 text-center bg-white">
        <h3 className="text-4xl font-serif mb-4">
          Receba novidades exclusivas
        </h3>

        <p className="text-gray-600 mb-8">
          Promoções, lançamentos e tendências diretamente no seu e-mail.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="flex-1 px-6 py-4 rounded-full outline-none border"
          />

          <button className="bg-black text-white px-8 py-4 rounded-full">
            Inscrever-se
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white py-14 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-3xl font-serif mb-4">Stylo e Modas</h4>

            <p className="text-gray-400 leading-7">
              Elegância, sofisticação e autenticidade em cada coleção.
            </p>
          </div>

          <div>
            <h5 className="uppercase tracking-widest mb-4 text-sm text-gray-400">
              Contato
            </h5>

            <p>(61) 99194-7041</p>
            <p>contato@sualoja.com</p>
            <p>Brasília - DF</p>
          </div>

          <div>
            <h5 className="uppercase tracking-widest mb-4 text-sm text-gray-400">
              Redes Sociais
            </h5>

            <div className="flex gap-4">
              <a href="#">Instagram</a>
              <a href="#">WhatsApp</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Stylo e Modas. Todos os direitos reservados.
        </div>
      </footer>

      {/* Atendimento */}
      <a
        href="https://wa.me/5561991947041"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg"
      >
        💬 Atendimento
      </a>
      <div className="fixed bottom-5 left-5 bg-white shadow-2xl rounded-2xl w-[320px] overflow-hidden z-50">

  <div className="bg-black text-white p-4">
    <h3 className="font-semibold">
      Atendimento Online
    </h3>

    <p className="text-sm opacity-80">
      Respondemos rapidamente ✨
    </p>
  </div>

  <div className="p-4 h-[250px] overflow-y-auto">

    <div className="bg-gray-100 p-3 rounded-2xl mb-3 w-fit">
      Olá 👋 Como podemos ajudar?
    </div>

  </div>

  <div className="p-4 border-t flex gap-2">

    <input
      type="text"
      placeholder="Digite sua mensagem..."
      className="flex-1 border rounded-full px-4 py-2 outline-none"
    />

    <button className="bg-black text-white px-4 rounded-full">
      ➤
    </button>

  </div>
    </div>
  );
}
