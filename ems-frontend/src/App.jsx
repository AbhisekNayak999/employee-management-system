import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployeeComponent from './Component/AddEmployeeComponent';
import HomePage from './Component/HomePage';
import AddProfileComponent from './Component/Profile/AddProfileComponent';
import ListProfileComponent from './Component/Profile/ListProfileComponent';
import OwnerInfo from './Component/OwnerInfo';

function App() {
  return (<>
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element = {<HomePage/>}></Route>
        {/* http://localhost:3000/home */}
        <Route path='/home' element = {<HomePage/>}></Route>
        {/* http://localhost:3000/employee */}
        <Route path='/employee' element={<ListEmployeeComponent />}></Route>
        {/* http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<AddEmployeeComponent/>}></Route>
        {/* http://localhost:3000/update-employee/1 */}
        <Route path='/update-employee/:id' element={<AddEmployeeComponent />}></Route>
        
        //Path for Profile functions
        {/* http://localhost:8080/add-profile/1 */}
        <Route path='/add-profile/:id' element={<AddProfileComponent mode="add" />}></Route>
        {/* http://localhost:8080/get-profile/1 */}
        <Route path='/get-profile/:id' element={<ListProfileComponent/>}></Route>
        {/* http://localhost:8080/update-profile/1 */}
        <Route path="/update-profile/:id" element={<AddProfileComponent mode="edit" />} />

        {/* Owner info component */}
        <Route path="/owner" element={<OwnerInfo />} />

      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
  </>);
}

export default App
