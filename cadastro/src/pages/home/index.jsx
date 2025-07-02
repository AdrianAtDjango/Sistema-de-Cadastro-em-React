import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
      {
        id: '1234',
        name: 'Adrian',
        age: 18,
        email:  'adrian@email.com'
      }, 
      {
        id: '4321',
        name: 'Aline',
        age: 22,
        email:  'aline@email.com'
      },
      {
        id: '5678',
        name: 'Aline',
        age: 22,
        email:  'aline@email.com'
      }
    ]

  return (
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name="nome" type="text" placeholder='Nome'/>
          <input name="idade" type="number" placeholder='Idade'/>
          <input name="email" type="email" placeholder='Email'/>
          <button type="button">Cadastrar</button>
        </form>
        { users.map((user) => (
            <ul key={user.id}>
              <div className='lista'>
                <li><span>Nome:</span> {user.name}</li>
                <li><span>Idade:</span> {user.age}</li>
                <li><span>Email:</span> {user.email}</li>
              </div>
              <div className=''>
                <button>
                  <img src={Trash} alt="Lixeira" />
                </button>
              </div>
            </ul>
          )) 
        }
      </div>
  )
}

export default Home
