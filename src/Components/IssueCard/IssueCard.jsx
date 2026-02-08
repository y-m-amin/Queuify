import { use } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';

const IssueCard = ({
  issuesPromise,
  inProgress,
  resolved,
  removeTickets,
  setInProgress,
  markAsResolved,
}) => {
  const issues = use(issuesPromise);

  //filter out resolved tickets
  const availableTickets = issues.filter(
    (issue) => !removeTickets.includes(issue.id),
  );

  //const isInProgress = inProgress.some((t) => t.id === issue.id);

  const handleAddToInProgress = (issue) => {
    if (!inProgress.find((t) => t.id === issue.id)) {
      //not add again if already inside in-progess

      setInProgress([...inProgress, issue]);
      toast.info(`Ticket "${issue.title}" moved to In Progress`);
    }
  };

  const handleMarkAsResolved = (task) => {
    markAsResolved(task);
    toast.success(`Ticket "${task.title}" marked as Resolved`);
  };

  return (
    <div className='max-w-4/5 mx-auto my-10 flex flex-col-reverse lg:flex-row  gap-8'>
      <div className='flex-1 '>
        <h1 className='text-3xl text-black font-bold mb-5'>Customer Tickets</h1>
        {availableTickets.length === 0 ? (
          <p className='text-gray-600'>No pending tickets!</p>
        ) : (
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
            {/* map only filtered tickets cards ,initially all tickets */}
            {availableTickets.map((issue) => {
              const isInProgress = inProgress.some((t) => t.id === issue.id);
              return (
                <div
                  key={issue.id}
                  className='bg-white shadow-xl rounded-lg p-5 cursor-pointer hover:shadow-2xl transition'
                  onClick={() => handleAddToInProgress(issue)}
                >
                  <div className='flex justify-between items-center mb-3'>
                    <h2 className='text-xl text-black '>{issue.title}</h2>
                    <div
                      className={`flex items-center rounded-full ${
                        !isInProgress
                          ? 'text-green-800 bg-green-300'
                          : ' text-yellow-600 bg-yellow-200'
                      }`}
                    >
                      <img
                        src='https://i.ibb.co.com/mFb3j1Qg/vector2.png'
                        className={`w-4 h-4 ml-2 rounded-full ${
                          !isInProgress ? 'bg-green-700' : 'bg-yellow-500'
                        }`}
                      />
                      <span className={`text-sm  rounded-full px-3 py-1`}>
                        {isInProgress ? 'In Progress' : issue.status}
                      </span>
                    </div>
                  </div>
                  <p className='text-[#627382] mb-5'>{issue.description}</p>
                  <div className='flex justify-between text-sm text-gray-600 '>
                    <div className='flex gap-3'>
                      <span>#{issue.id}</span>
                      <span
                        className={`font-semibold ${
                          issue.priority === 'High'
                            ? 'text-red-600 '
                            : issue.priority === 'Medium'
                              ? 'text-yellow-400'
                              : 'text-green-600 '
                        }`}
                      >
                        {issue.priority}
                      </span>
                    </div>
                    <div className='flex gap-3'>
                      <span>{issue.customer}</span>
                      <img src='https://i.ibb.co.com/MkSjgxrz/ri-calendar-line.png' />
                      <span>{issue.createdAt}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <aside className='w-full m-2 lg:w-72 mx-auto  flex  flex-col   gap-5'>
        <div className=' w-full p-5'>
          <h3 className='text-[24px] text-black font-semibold mb-2'>
            Task Status
          </h3>
          {inProgress.length === 0 ? (
            <p className='text-sm text-gray-600'>
              Select a ticket to add to Task Status
            </p>
          ) : (
            <ul className='space-y-3'>
              {inProgress.map((task) => (
                <li
                  key={task.id}
                  className='flex flex-col justify-between items-center bg-white p-2 rounded shadow'
                >
                  <span className='text-black py-2'>{task.title}</span>
                  <button
                    onClick={() => handleMarkAsResolved(task)}
                    className='w-[100%] text-[16px] font-semibold bg-[#02A53B] text-white px-2 py-2 rounded hover:bg-green-700'
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='w-full p-5'>
          <h3 className='text-[24px] text-black font-semibold mb-2'>
            Resolved Tasks
          </h3>
          {resolved.length === 0 ? (
            <p className='text-sm text-gray-600'>No resolved tasks yet.</p>
          ) : (
            <ul className='space-y-2'>
              {resolved.map((task) => (
                <li
                  key={task.id}
                  className='text-[18px] font-medium  text-gray-700 bg-[#E0E7FF] p-3'
                >
                  {task.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default IssueCard;
