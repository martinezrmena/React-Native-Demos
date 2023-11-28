
const TiposBasicos = () => {

  const nombre: string  = 'Rafael';
  const edad: number = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = ['Velocidad', 'Respirar en el agua', 'Volar'];

  return (
    <>
      <h3>Tipos Basicos</h3> 
      { nombre }, {edad}, {estaActivo ? 'activo': 'desactivado'}
      
      <br/>

      {poderes.join(',')}
    </>
  )
}

export default TiposBasicos
