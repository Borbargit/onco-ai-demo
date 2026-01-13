export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-blue-800">
          🎗️ ОнкоИИ Ассистент - Демо
        </h1>
        <p className="text-gray-600 mt-2">
          Демонстрационная версия платформы для поддержки клинических решений в онкологии
        </p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ <strong>ВНИМАНИЕ:</strong> Это демо-версия с синтетическими данными. 
            Не предназначена для клинического использования.
          </p>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Блок 1: Демо-пациенты */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Демо-пациенты</h2>
          <div className="space-y-4">
            {['Иванов И.И. (тест)', 'Петрова А.С. (тест)', 'Сидоров В.П. (тест)'].map(name => (
              <div key={name} className="border rounded-lg p-4 hover:bg-blue-50 cursor-pointer">
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-500">Рак молочной железы, стадия IIB</div>
                <button className="mt-2 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">
                  Показать рекомендации ИИ
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 2: ИИ-рекомендации */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🤖 Рекомендации ИИ</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold">Схема лечения</h3>
              <p>Рекомендована: <strong>AC-T</strong></p>
              <p className="text-sm text-gray-600">Уверенность модели: 87%</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold">Прогноз</h3>
              <p>5-летняя выживаемость: <strong>85%</strong></p>
              <p className="text-sm text-gray-600">На основе похожих случаев</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
        <p>🚀 Проект развернут на Vercel | 🔥 Бэкенд на Firebase | 🎯 Демо-режим</p>
        <p className="mt-2">Ссылка на демо: https://onco-ai-demo.vercel.app</p>
      </footer>
    </div>
  );
}
