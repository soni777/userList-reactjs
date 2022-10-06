import UserProfile from './Components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueId: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueId: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'FLoyd Miles',
    role: 'Fullstack Developer',
  },
  {
    uniqueId: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Frontend Developer',
  },
  {
    uniqueId: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Engineer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User Details</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile key={eachItem.uniqueId} userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
