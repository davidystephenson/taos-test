import { TAOS } from '@versoly/react-taos'

function App() {
  return (
    <>
      <div className="bg-red-500 h-96"></div>
      <div className="bg-blue-500 h-96"></div>
      <div className="bg-yellow-500 h-96"></div>
      <div className="bg-green-500 h-96"></div>
      <TAOS
        className="delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
        data-taos-offset="300"
        as='div'
      >
        <h1 className="text-9xl">Test</h1>
      </TAOS>
      <div className="bg-purple-500 h-96"></div>
    </>
  )
}

export default App
