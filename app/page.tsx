'use client'

import { useState } from 'react'

export default function TestPage() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    setMessage('Sending...')

    try {
      const response = await fetch('/api/test-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: 'TestOVH',
          nom: 'User',
          email: 'test@example.com',
          telephone: '0612345678',
          stage_id: '7cab4960-6fb6-4f92-9da7-8ed901014c39',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(`✅ Success! Booking ID: ${data.id} | Reference: ${data.booking_reference}`)
      } else {
        setMessage(`❌ Error: ${data.error || 'Unknown error'}`)
      }
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-12 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">OVH Test</h1>
        <p className="text-center text-gray-600 mb-8">Testing POST request to OVH API</p>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100"
        >
          {loading ? '⏳ Sending...' : '📤 Send Test Booking'}
        </button>

        {message && (
          <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
            <p className="text-center font-semibold text-lg">
              {message}
            </p>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-sm font-bold text-gray-700 mb-3">Test Data Being Sent:</h2>
          <pre className="text-xs bg-gray-100 p-3 rounded text-gray-700 overflow-auto">
{JSON.stringify({
  prenom: 'TestOVH',
  nom: 'User',
  email: 'test@example.com',
  telephone: '0612345678',
  stage_id: '7cab4960-6fb6-4f92-9da7-8ed901014c39'
}, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
