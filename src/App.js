// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // }

  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete Feedback?')) {
  //     setFeedback(feedback.filter(item => item.id !== id))
  //   }
  // }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                {/* //*here was handleAdd={addFeedback} from FeedbackLick.jsx */}
                <FeedbackStats />
                {/* //*here was (feedback={feedback}) from FeedbackLick.jsx */}
                <FeedbackList />
                {/* //*here was (feedback={feedback}) and handleDelete={deleteFeedback} from FeedbackLick.jsx */}
              </>
            }>
            </Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
