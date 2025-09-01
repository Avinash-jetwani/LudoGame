import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SupabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'success' | 'error'>('testing')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function testConnection() {
      try {
        // Test basic connection by trying to get session
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          throw error
        }

        setConnectionStatus('success')
        console.log('✅ Supabase connection successful!', data)
      } catch (err) {
        setConnectionStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('❌ Supabase connection failed:', err)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Supabase Connection Test</h2>

      {connectionStatus === 'testing' && (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          <span>Testing connection...</span>
        </div>
      )}

      {connectionStatus === 'success' && (
        <div className="text-green-600 flex items-center space-x-2">
          <span>✅</span>
          <span>Connection successful!</span>
        </div>
      )}

      {connectionStatus === 'error' && (
        <div className="text-red-600">
          <div className="flex items-center space-x-2 mb-2">
            <span>❌</span>
            <span>Connection failed</span>
          </div>
          <div className="text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        </div>
      )}
    </div>
  )
}