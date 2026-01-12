export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          Onco AI Demo 🩺
        </h1>
      </div>

      <div className="relative flex place-items-center">
        <div className="relative flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">
            Демонстрационная платформа для анализа онкологических данных
          </h2>
          <p className="text-lg opacity-80">
            Используйте ИИ для анализа медицинских изображений и данных пациентов
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Анализ снимков
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Автоматический анализ медицинских изображений с помощью компьютерного зрения
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Прогнозирование
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Прогнозирование развития заболевания на основе данных пациента
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Рекомендации
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Персонализированные рекомендации по лечению на основе ИИ-анализа
          </p>
        </div>
      </div>
    </main>
  )
}
