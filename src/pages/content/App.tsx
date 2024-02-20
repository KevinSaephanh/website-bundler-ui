import React from 'react';

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setIsOpen(true);
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('Message Received: ', request, sender, sendResponse);
    });
  }, []);

  return (
    <>
      {isOpen && (
        <div className='fixed bottom-0 right-0 p-4'>
          <div
            className='text-base font-bold text-center text-black'
            onClick={toggleIsOpen}
          >
            Close
          </div>
        </div>
      )}
    </>
  );
};
