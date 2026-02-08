import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import type { Issue } from './types/issue';

import vec1 from './assets/vector1.png';
//import vec2 from './assets/vector2.png';

import './App.css';
import Footer from './Components/Footer/Footer';
import IssueCard from './Components/IssueCard/IssueCard';
import Nav from './Components/Nav/Nav';

const fetchIssues = async (): Promise<Issue[]> => {
  const res = await fetch('/issues.json');
  return res.json();
};

const issuesPromise = fetchIssues();

function App() {
  const [inProgress, setInProgress] = useState<Issue[]>([]);
  const [resolved, setResolved] = useState<Issue[]>([]);
  const [removeTickets, setRemoveTickets] = useState<number[]>([]);

  // const addToInProgress = (ticket) => {
  //   if (!inProgress.find((t) => t.id === ticket.id)) {
  //     //setInProgress([...inProgress, ticket]);
  //     //alert(`${ticket.title} added to In-Progress`);
  //   }
  // };

  const markAsResolved = (ticket: Issue) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));

    setResolved([...resolved, ticket]);

    setRemoveTickets([...removeTickets, ticket.id]);

    //alert(`${ticket.title} marked as Resolved`);
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <Nav />

      {/* banner section div */}
      <div className='max-w-4/5 mx-auto my-10 flex flex-col md:flex-row items-center justify-center gap-5'>
        <div className='relative w-full h-64 md:w-1/2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-xl flex items-center justify-center py-12'>
          <img
            src={vec1}
            className='hidden 2xl:block absolute left-0 top-1/2 -translate-y-1/2 '
            alt='decoration'
          />

          <div className='relative flex flex-col items-center justify-center z-10'>
            <h1 className='text-white text-lg'>In-Progress</h1>
            <p className='text-white text-6xl'>{inProgress.length}</p>
          </div>

          <img
            src={vec1}
            className='hidden 2xl:block absolute right-0 top-1/2 -translate-y-1/2 -scale-x-100 '
            alt='decoration'
          />
        </div>

        <div className='relative w-full h-64 md:w-1/2 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl flex items-center justify-center py-12'>
          <img
            src={vec1}
            className='hidden 2xl:block absolute left-0 top-1/2 -translate-y-1/2 '
            alt='decoration'
          />

          <div className='relative flex flex-col items-center justify-center z-10'>
            <h1 className='text-white text-lg'>Resolved</h1>
            <p className='text-white text-6xl'>{resolved.length}</p>
          </div>

          <img
            src={vec1}
            className='hidden 2xl:block absolute right-0 top-1/2 -translate-y-1/2 -scale-x-100 '
            alt='decoration'
          />
        </div>
      </div>

      <Suspense
        fallback={
          <div className='flex justify-center max-w-3/4 mx-auto'>
            <span className='loading loading-infinity loading-xl'></span>
          </div>
        }
      >
        <IssueCard
          issuesPromise={issuesPromise}
          inProgress={inProgress}
          resolved={resolved}
          removeTickets={removeTickets}
          setInProgress={setInProgress}
          markAsResolved={markAsResolved}
        />
      </Suspense>

      <Footer />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
