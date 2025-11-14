"use client";

import { Brain, Zap, Trophy, Target, Sparkles, Star, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg animate-bounce-slow">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Seu Parceiro Inteligente de Aprendizado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-slide-up">
              FlashGenius
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up animation-delay-200">
              Transforme sua forma de aprender com flashcards inteligentes e gamificação!
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
              Você já sentiu que, por mais que estude, o conteúdo simplesmente não fixa na sua memória? 
              Chegou a hora de transformar sua forma de aprender!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-pulse-slow overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 animate-pulse-slow animation-delay-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Que é o FlashGenius */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">O Que é o FlashGenius?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Seu Aplicativo de Flashcards com IA
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Imagine um aplicativo de flashcards aprimorado com inteligência artificial, que não apenas cria 
              cartões de memória, mas também utiliza técnicas comprovadas de <span className="font-semibold text-purple-600">repetição espaçada</span> e 
              <span className="font-semibold text-blue-600"> recuperação ativa</span>. Com o FlashGenius, você se despede do método tradicional 
              de estudo e dá as boas-vindas a uma maneira mais eficiente, interativa e divertida de aprender!
            </p>
          </div>
        </div>
      </section>

      {/* Aprenda de Forma Gamificada */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-900">Gamificação</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Aprenda de Forma Gamificada
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Flashcards Dinâmicos</h3>
              <p className="text-gray-600 leading-relaxed">
                Transforme o conteúdo que você já está aprendendo em flashcards dinâmicos que se adaptam ao seu ritmo.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Sistema de Pontos</h3>
              <p className="text-gray-600 leading-relaxed">
                A cada resposta correta, você acumula pontos e avança nos níveis de aprendizado. Quanto mais você estuda, mais você evolui!
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Troféus e Rankings</h3>
              <p className="text-gray-600 leading-relaxed">
                Compare seu desempenho com amigos e conquiste troféus, estimulando uma competição saudável e motivadora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorização Eficiente */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-100/50 via-blue-100/50 to-green-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-lg">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Memorização Eficiente</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Memorize Tudo o Que Aprende
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Algoritmos Inteligentes</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ajustam a frequência de revisão, garantindo que o conteúdo mais desafiador seja revisado com mais frequência.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Conhecimento Duradouro</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Construa conhecimento não apenas para provas, mas para a vida inteira com técnicas comprovadas cientificamente!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-green-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Vantagens</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Por Que Escolher o FlashGenius?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Interface Intuitiva", desc: "Simples e fácil de usar, ideal para todos os níveis de usuários." },
              { title: "Conteúdo Personalizado", desc: "A IA transforma suas anotações em flashcards personalizados." },
              { title: "Acesso Ilimitado", desc: "Estude no ônibus, em casa ou durante uma pausa no trabalho." },
              { title: "Resultados Comprovados", desc: "Técnicas baseadas em ciência para memorização efetiva." }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Depoimentos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              O Que Nossos Usuários Dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Silva",
                role: "Estudante de Medicina",
                text: "O FlashGenius revolucionou minha forma de estudar! Consegui memorizar todo o conteúdo de anatomia em metade do tempo.",
                avatar: "MS"
              },
              {
                name: "João Santos",
                role: "Concurseiro",
                text: "A gamificação me mantém motivado todos os dias. Já conquistei mais de 50 troféus e meu desempenho melhorou 80%!",
                avatar: "JS"
              },
              {
                name: "Ana Costa",
                role: "Professora",
                text: "Recomendo para todos os meus alunos. A repetição espaçada realmente funciona e os resultados são incríveis!",
                avatar: "AC"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Mail className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Fique por Dentro</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Receba Dicas de Estudo
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Inscreva-se para receber dicas exclusivas, novidades e técnicas de memorização diretamente no seu e-mail!
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Inscrever-se
              </button>
            </form>
            
            {subscribed && (
              <div className="mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl inline-block animate-fade-in">
                ✅ Obrigado por se inscrever! Verifique seu e-mail.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Não Perca Mais Tempo!
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Dê um passo rumo ao aprendizado efetivo e divertido. Baixe o FlashGenius agora e descubra como é fácil memorizar tudo o que você aprende!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 animate-pulse-slow overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar no Google Play
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 animate-pulse-slow animation-delay-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  Baixar na App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Seja o gênio dos flashcards com o FlashGenius! 🌟
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 FlashGenius. Todos os direitos reservados.</p>
          <p className="text-white/60 mt-2">Transformando aprendizado em diversão! 🚀</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
