import './App.css';
import { BooksView } from './features/books/BooksView';
import { JournalsView } from './features/journals/JournalsView';
import { UserView } from './features/users/UserView';

function App() {
  return (
    <>
      {BooksView()}
      {JournalsView()}
      {UserView()}
    </>
  );
}

export default App;
