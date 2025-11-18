import info, { name, tech as stack } from '../utils/modules'

function EsModules() {
  return (
    <div>
      <h1>EsModules</h1>
      <h2>{name}</h2>
      <h2>{stack()}</h2>
      <h2>{info}</h2>
    </div>
  )
}

export default EsModules
