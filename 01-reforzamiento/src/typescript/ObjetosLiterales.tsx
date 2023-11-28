
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  casaNo: number;
}

const ObjetosLiterales = () => {
  
  const persona: Persona = {
    nombreCompleto: "Rafael",
    edad: 35,
    direccion: {
      pais: 'Canada',
      casaNo: 615
    }
  }
  
  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>
        {JSON.stringify(persona, null, 2)}
      </pre>

    </>
  )
}

export default ObjetosLiterales
