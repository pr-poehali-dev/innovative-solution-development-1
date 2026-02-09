import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      
      {/* Кабинет 48 Section */}
      <section className="relative bg-zinc-900 py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24 items-center">
            {/* Фото кабинета */}
            <div className="order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/15a170ae-8ff1-4a9f-aa71-a8e7eb8c33ee/bucket/4504cadf-5868-4536-9401-c666fe1efc28.jpeg"
                  alt="Дверь кабинета № 48"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Текст легенды */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-light text-white md:text-5xl">
                Кабинет № 48
              </h2>
              <p className="text-xl text-white/60 font-light">
                Создатель: Святослав Житков
              </p>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Говорят, что именно в кабинете № 48 историк Котокбас Юревич однажды 
                  потерял свои легендарные подтяжки. Искали их всем классом, потом всей 
                  параллелью, потом махнули рукой.
                </p>

                <p className="text-white/60 text-sm">
                  С тех пор считается, что подтяжки:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 pl-4">
                  <li>застряли между эпохами,</li>
                  <li>ушли в альтернативную историю,</li>
                  <li>или были принесены в жертву знаниям.</li>
                </ul>
                <p className="text-white/60 italic text-sm">
                  Иногда в тишине там будто слышно, как что-то подозрительно подтягивается.
                </p>

                <p>
                  Также ходит слух, что физичка использует кабинет № 48 как место 
                  восстановления баланса вселенной — именно там она хлебает рассол с 
                  чифирком, утверждая, что это стабилизирует давление, выравнивает фазу 
                  луны и повышает КПД объяснений на 37%.
                </p>

                <p className="text-white/90 font-medium">
                  А физручка… Про физручку говорят особо.
                </p>

                <p>
                  Считается, что в кабинете № 48 он делает следующее <span className="italic">за да ни е</span> — 
                  настолько сложное, что его нельзя записать в дневник, его невозможно 
                  отменить, и к нему нельзя быть готовым.
                </p>

                <p className="text-white/60 text-sm italic">
                  Это задание существует в воздухе. Оно начинается внезапно. 
                  И заканчивается только тогда, когда физручка удовлетворённо кивает.
                </p>

                <p className="text-white/90 pt-4">
                  И всё это — под присмотром создателя кабинета, <strong>Святослава Житкова</strong>, 
                  который, по слухам, знает правду про подтяжки, понимает состав рассола 
                  и однажды сам придумал то самое <span className="italic">за да ни е</span>.
                </p>

                <p className="text-white/50 text-sm pt-6 border-t border-white/10">
                  Так кабинет № 48 в МБОУ СОШ № 4 остаётся местом, где теряются вещи, 
                  нарушаются законы и создаётся школьная мифология.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Создатели сайта Footer */}
      <footer className="relative bg-black py-16">
        <div className="container mx-auto px-8 md:px-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-white md:text-4xl mb-2">
              Создатели сайта
            </h3>
            <p className="text-white/50 text-sm">
              Команда разработки
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Новиков Святослав */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/15a170ae-8ff1-4a9f-aa71-a8e7eb8c33ee/bucket/4aa31efc-20ae-4fc7-92be-14fee24e0105.jpeg"
                  alt="Новиков Святослав Андреевич"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-xl font-light text-white">
                  Новиков Святослав Андреевич
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Разработчик
                </p>
              </div>
            </div>

            {/* Монилов Игор */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/15a170ae-8ff1-4a9f-aa71-a8e7eb8c33ee/bucket/0736936c-aa17-4855-afbc-76d93add20b9.jpeg"
                  alt="Монилов Игор Владимирович"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-xl font-light text-white">
                  Монилов Игор Владимирович
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Разработчик
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-sm">
              © 2026 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;