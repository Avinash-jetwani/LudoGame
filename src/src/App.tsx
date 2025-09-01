import SupabaseTest from './components/SupabaseTest'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ludo Web</h1>
              <span className="ml-2 text-sm text-gray-500">Phase 0 Complete!</span>
            </div>
            <div className="text-sm text-gray-600">
              Private Two-Player Ludo
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎲 Welcome to Ludo Web!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A lightweight, private web-based Ludo game for two players.
            Built with React, TypeScript, Supabase, and Tailwind CSS.
          </p>
        </div>

        {/* Connection Test */}
        <SupabaseTest />

        {/* Project Status */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">🚀 Phase 0 Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Git repository initialized</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>React + TypeScript project created</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Dependencies installed</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Tailwind CSS configured</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Supabase project created</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Database tables created</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Row Level Security enabled</span>
              </div>
              <div className="flex items-center text-green-600">
                <span className="mr-2">✅</span>
                <span>Supabase client configured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 Next: Phase 1</h3>
          <p className="text-blue-800 mb-4">
            Ready to start building the actual Ludo game! Phase 1 will focus on:
          </p>
          <ul className="list-disc list-inside space-y-1 text-blue-700">
            <li>Implementing the pure Ludo rules engine</li>
            <li>Creating the game board UI</li>
            <li>Setting up the dice rolling mechanism</li>
            <li>Building the piece movement logic</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
